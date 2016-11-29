package com.wy.main;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;

/**
 *
 * 自动生成lua消息代码，暂时不支持嵌套loop，for循环
 */
public class MessageToJS {

	public static String getVoidName(String name) {
		if ("Int".equals(name) || "int".equals(name)) {
			return "Int()";
		} else if ("byte".equals(name) || "Byte".equals(name)) {
			return "Byte()";
		} else if ("Long".equals(name) || "long".equals(name)) {
			return "Long()";
		} else if ("Text".equals(name) || "text".equals(name)) {
			return "String()";
		} else if ("Short".equals(name) || "short".equals(name)) {
			return "Short()";
		} else if ("loop".equals(name) || "Loop".equals(name)) {
			return "loop";
		} else if ("for".equals(name) || "For".equals(name)) {
			return "for";
		} else {
			return "";
		}
	}

	/**
	 * 读取一个文件夹下的所有文件夹和文件
	 *
	 * @param filePath
	 */
	public void ReadFile(String filePath) {
		File f = null;
		f = new File(filePath);
		File[] files = f.listFiles(); // 得到f文件夹下面的所有文件。
		List<File> list = new ArrayList<File>();
		for (File file : files) {
			list.add(file);
		}
		for (File file : files) {
			System.out.println(file.getAbsolutePath());
		}
	}

	/**
	 * 读取一个文件夹下所有文件及子文件夹下的所有文件
	 *
	 * @param filePath
	 *            目录
	 * @param list
	 *            文件存放的list
	 * @param sifting
	 *            筛选文件的标示
	 */
	public void ReadAllFile(String filePath, ArrayList<File> list, String sifting) {
		File f = null;
		f = new File(filePath);
		File[] files = f.listFiles(); // 得到f文件夹下面的所有文件。
		for (File file : files) {
			if (file.isDirectory()) {
				// 如何当前路劲是文件夹，则循环读取这个文件夹下的所有文件
				ReadAllFile(file.getAbsolutePath(), list, sifting);
			} else {
				if (getFileSuffix(file.getName()).equals(sifting)) {// 筛选文件
					list.add(file);
				}
			}
		}
	}

	/**
	 * 生成对应的lua代码
	 *
	 * @param fileName
	 */
	public void startCreateLua(String dir, String fileName) {
		int i;
		Sheet sheet;
		Workbook book;
		Cell cellName, cellType, cellInfo, cellConfig;

		try {
			book = Workbook.getWorkbook(new File(dir + File.separator + fileName));
			sheet = book.getSheet(0);

			// Client -> Server
			String c2sString = "--[[-- 请求" + sheet.getCell(0, 0).getContents() + "]]\n";
			c2sString += "function send" + sheet.getCell(1, 0).getContents() + "()\n";
			c2sString += "local nMBaseMessage = NMBaseMessage:new()\n";
			c2sString += "nMBaseMessage:setMessageType(REQ + " + sheet.getCell(1, 0).getContents() + ")\n";
			c2sString += "\n";
			c2sString += "nMBaseMessage:writeStart()\n";

			// Server -> Client
			String s2cString = "--[[-- 解析" + sheet.getCell(0, 0).getContents() + "]]\n";
			s2cString += "function read" + sheet.getCell(0, 1).getContents() + "(nMBaseMessage)\n";
			s2cString += "local dataTable = {}\n";
			s2cString += "dataTable[\"messageType\"] = ACK + " + sheet.getCell(1, 0).getContents() + " \n";
			s2cString += "dataTable[\"messageName\"] = \"" + sheet.getCell(1, 0).getContents() + "\"\n";
			s2cString += "\n";

			i = 2;// 当前行,从0开始
			int cint = 0;// "Client -> Server"
			int sint = 0;// "Server -> Client"
			String strForName = "";// for循环中的数据存放到的table名称
			String strForLastItemName = "";// for循环中的最后一个数据数据的名称
			String strForType = "";// 循环类型

			while (i < sheet.getRows()) {
				cellName = sheet.getCell(0, i);// 字段名称
				cellType = sheet.getCell(1, i);// 字段类型
				cellInfo = sheet.getCell(2, i);// 字段描述
				cellConfig = sheet.getCell(3, i);// 字段配置信息

				if ("".equals(cellName.getContents()) == true)
					break;
				String Name = cellName.getContents();
				String Type = cellType.getContents();
				String Info = cellInfo.getContents();
				String Config = cellConfig.getContents();
				if ("Client -> Server".equals(Name)) {
					cint = 1;
					sint = 0;
				} else if ("Server -> Client".equals(Name)) {
					sint = 1;
					cint = 0;
				} else {
					if (cint > 0) {// 发消息
						c2sString += "--" + Name + "  " + Info + "\n";
						c2sString += "nMBaseMessage:write" + getVoidName(Type) + "\n";
					} else if (sint > 0) {// 收消息
						s2cString += "--" + Name + "  " + Info + "\n";
						if (getVoidName(Config).equals("for") || getVoidName(Config).equals("For")) {// 接收for循环

							strForType = "for";
							strForName = sheet.getCell(4, i).getContents();
							strForLastItemName = sheet.getCell(5, i).getContents();

							s2cString += "dataTable[\"" + strForName + "\"] = {}\n";
							s2cString += "local " + Name + " = nMBaseMessage:read" + getVoidName(Type) + "\n";
							s2cString += "for i = 1, " + Name + " do\n";
							s2cString += "dataTable[\"" + strForName + "\"][i] = {}\n";

						} else if (getVoidName(Config).equals("loop") || getVoidName(Config).equals("Loop")) {// 接收Loop

							strForType = "loop";
							strForName = sheet.getCell(4, i).getContents();
							strForLastItemName = sheet.getCell(5, i).getContents();

							s2cString += "dataTable[\"" + strForName + "\"] = {}\n";
							s2cString += "local " + Name + " = nMBaseMessage:readInt()\n";
							s2cString += "for i = 1, " + Name + " do\n";
							s2cString += "dataTable[\"" + strForName + "\"][i] = {}\n";
							s2cString += "local length = nMBaseMessage:readShort()\n";
							s2cString += "local pos = nMBaseMessage:getReadPos()\n";
							s2cString += "print(\"" + strForName + "---length = \" .. length)\n";

						} else if (Name.contains("…")) {// 循环体

							Name = Name.replace("…", "");

							s2cString += "dataTable[\"" + strForName + "\"][i]." + Name + " = nMBaseMessage:read" + getVoidName(Type) + "\n";
							s2cString += "print(\"" + strForName + "---" + Info + " = \"" + ".. dataTable[\"" + strForName + "\"][i]." + Name + ")\n";

							if (strForLastItemName.equals(Name)) {
								if (strForType.equals("loop")) {// loop
									s2cString += "nMBaseMessage:setReadPos(pos + length)\n";
									s2cString += "end\n";
								} else {// for
									s2cString += "end\n";
								}
							}
						} else {
							s2cString += "dataTable[\"" + Name + "\"]" + " = nMBaseMessage:read" + getVoidName(Type) + "\n";
							s2cString += "print(\"" + Info + " = \" .. dataTable[\"" + Name + "\"])\n";
						}
					}
				}
				i++;
			}

			//
			c2sString += "\n";
			c2sString += "nMBaseMessage:writeOver()\n";
			c2sString += "local messageService=Services:getMessageService()\n";
			c2sString += "messageService:sendMessage(nMBaseMessage)\n";
			c2sString += "nMBaseMessage:delete()\n";
			c2sString += "end\n";

			//
			s2cString += "return dataTable\n";
			s2cString += "end\n";

			//
			String outPutStr = c2sString + "\n\n---------------------------------------------------------\n\n" + s2cString;
			writeFile(dir, fileName, outPutStr);
			// System.out.println(c2sString);
			// System.out.println("---------------------------------------------------------\n");
			// System.out.println(s2cString);
			// System.out.println("---------------------------------------------------------\n");
			// System.out.println(model);
			book.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 输出文件
	 *
	 * @param dir
	 * @param FileName
	 * @param content
	 */
	public void writeFile(String dir, String FileName, String content) {

		String name = getFileName(FileName);

		File tofile = new File(dir + File.separator + name + ".txt");

		FileWriter fw = null;
		BufferedWriter buffw = null;
		PrintWriter pw = null;
		try {
			fw = new FileWriter(tofile);
			buffw = new BufferedWriter(fw);
			pw = new PrintWriter(buffw);

			pw.println(content);
			System.out.println("----------------------------输出文件  " + name + "  结束-----------------------------\n");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if (pw != null) {
					pw.close();
					pw = null;
				}
				if (buffw != null) {
					buffw.close();
					buffw = null;
				}
				if (fw != null) {
					fw.close();
					fw = null;
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * 获取除后缀疑问的名称
	 *
	 * @return
	 */
	public static String getFileName(String fileName) {
		String name = fileName.substring(0, fileName.lastIndexOf("."));// 这个是获取除后缀疑问的名称
		return name;
	}

	/**
	 * 获取后缀名
	 *
	 * @param fileName
	 * @return
	 */
	public String getFileSuffix(String fileName) {
		String Suffix = fileName.substring(fileName.lastIndexOf("."));// 这个是获取后缀名
		return Suffix;
	}

	public static void main(String[] args) {
		String path = "inputMsgXls/";
		MessageToJS lua = new MessageToJS();

		ArrayList<File> xlsList = new ArrayList<File>();
		lua.ReadAllFile(path, xlsList, ".xls");

		ArrayList<File> txtList = new ArrayList<File>();
		lua.ReadAllFile(path, txtList, ".txt");

		Iterator<File> iter = xlsList.iterator();
		while (iter.hasNext()) {
			File file = iter.next();
			for (int i = 0; i < txtList.size(); i++) {
				if (getFileName(file.getName()).equals(getFileName(txtList.get(i).getName()))) {// 生成过
					System.out.println("已存在   " + txtList.get(i).getName() + "\n");
					iter.remove();
				}
			}
		}
		System.out.println("----------------------------读取文件结束-----------------------------\n");
		System.out.println("----------------------------需要生成的文件数 : " + xlsList.size() + "  -----------------------------\n");

		for (int i = 0; i < xlsList.size(); i++) {
			System.out.println("----------------------------开始生成 " + xlsList.get(i).getName() + "  Lua-----------------------------\n");
			lua.startCreateLua(xlsList.get(i).getParent(), xlsList.get(i).getName());
		}

		System.out.println("===========================生成文件结束=======================\n");
	}
}
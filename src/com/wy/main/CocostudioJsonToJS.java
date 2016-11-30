package com.wy.main;

import java.io.BufferedInputStream;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.channels.FileChannel;
import java.util.ArrayList;
import java.util.HashMap;

import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * 解析cocostudio导出的json文件，定义、初始化、释放控件
 *
 */
public class CocostudioJsonToJS {

	public static String jsonPath = "json/";//Json输入目录
	public static String outJsonPath = "outJson/";//Json输出目录
	public static boolean isScreening = true;// 是否筛选?
	public static final int MAX = 50;//子对象最大数量
	public static boolean isGather = false;// 是否把超过MAX个控件的界面加入Table
	public static final String NONE_EFFECT = "BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE";
	public static final String NameSeparator = "#";//名字分隔符
	public static final int FILE_NAME_LENGTH = 4;// 需要适配的json截取存入的数组的长度
	public static final String[] LayerName = { "Base_Layer", "Second_Layer", "Third_Layer", "Fourth_Layer" };//层级类型
	public static final String[] ScreeningWidget = { "ScrollView", "TextField", "CheckBox", "ListView", "PageView" };//控件类型

	public static final String[] SOUND_PREFIX = { "BUTTON_SOUND_NONE", "BUTTON_SOUND_CLICK", "BUTTON_SOUND_BACK" };// 声音
	public static final String[] ANIMATION_PREFIX = { "BUTTON_ANIMATION_NONE", "BUTTON_ANIMATION_ZOOM_IN_UP_EXECUTE", "BUTTON_ANIMATION_ZOOM_OUT_UP_EXECUTE", "BUTTON_ANIMATION_ZOOM_IN", "BUTTON_ANIMATION_ZOOM_OUT" };// 动画

	public static String languageList[] = { "en", "zh_cn", "zh_tw" };//语言类型

	// -------------------------音效-------------------------
	// BUTTON_SOUND_NONE = SOUND_PREFIX * 1;--无点击音效
	// BUTTON_SOUND_CLICK = SOUND_PREFIX * 2;--普通点击音效
	// BUTTON_SOUND_BACK = SOUND_PREFIX * 3;--返回点击音效
	//
	// -------------------------动画-------------------------
	// BUTTON_ANIMATION_NONE = ANIMATION_PREFIX * 1;--无动画
	// BUTTON_ANIMATION_ZOOM_IN = ANIMATION_PREFIX * 2;--放大动画(抬起后动画播完执行回调)
	// BUTTON_ANIMATION_ZOOM_OUT = ANIMATION_PREFIX * 3;--缩小动画(抬起后动画播完执行回调)
	// BUTTON_ANIMATION_ZOOM_IN_UP_EXECUTE = ANIMATION_PREFIX *
	// 4;--放大动画(抬起后立即执行回调)
	// BUTTON_ANIMATION_ZOOM_OUT_UP_EXECUTE = ANIMATION_PREFIX *
	// 5;--缩小动画(抬起后立即执行回调)
	// -------------------------层级-------------------------
	// 1;--1136*640
	// 9;--960*640
	// 2;--2048*1536

	/**
	 * 获取后缀名
	 *
	 * @param fileName
	 * @return
	 */
	public static String getFileSuffix(String fileName) {
		String Suffix = fileName.substring(fileName.lastIndexOf("."));// 这个是获取后缀名
		return Suffix;
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
	public static void ReadAllFile(String filePath, ArrayList<File> list, String sifting) {
		File f = null;
		f = new File(filePath);
		File[] files = f.listFiles(); // 得到f文件夹下面的所有文件。
		for (File file : files) {
			if (file.isDirectory()) {
				// 如何当前路径是文件夹，则循环读取这个文件夹下的所有文件
				ReadAllFile(file.getAbsolutePath(), list, sifting);
			} else {
				if (getFileSuffix(file.getName()).equals(sifting)) {// 筛选文件
					list.add(file);
				}
			}
		}
	}

	/**
	 * 从SD卡获取json数据文件
	 *
	 * @param fileName
	 * @return
	 */
	public static JSONObject getJSONObjectFromSD(String fileName) {
		JSONObject obj = null;
		try {
			File file = new File(fileName);
			if (!file.exists()) {
				return null;
			}
			InputStream is = new BufferedInputStream(new FileInputStream(file));
			byte[] buffer;
			buffer = new byte[is.available()];
			is.read(buffer);
			String json = new String(buffer, "utf-8");
			obj = new JSONObject(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return obj;
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
	 * 输出文件
	 *
	 * @param dir
	 * @param FileName
	 * @param content
	 */
	public static void writeFile(String dir, String FileName, String content) {

		String name = getFileName(FileName);
		File file = new File(dir);
		if (!file.exists()) {
			file.mkdirs();
		}
		File tofile = new File(dir + File.separator + name + ".lua");

		FileWriter fw = null;
		BufferedWriter buffw = null;
		PrintWriter pw = null;
		try {
			fw = new FileWriter(tofile);
			buffw = new BufferedWriter(fw);
			pw = new PrintWriter(buffw);

			pw.println(content);
			System.out.println("----------输出文件  " + name + "  结束---------\n");
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
	 * 更具json生成js代码（控件的定义、初始化、释放）
	 *
	 * @param al
	 * @return
	 */
	public static String[] analysisJsonToJS(ArrayList<CocostudioJsonToJS.JsonData> al) {
		String[] c2sString = new String[4];

		String c2sStrDefinition = "\t/******工具导出的控件名******/\n\t";
		String c2sStrInitView = "";
		String c2sStrRelease = "";
		String c2sStrPath = "";

		boolean Gather = (isGather && al.size() > MAX);
		if (Gather) {
			c2sStrDefinition += "//控件集,本界面使用的控件超过" + MAX + "个,全部都放入widget中\n";
			c2sStrDefinition += "widget = {};\n\n";
		}
		for (int i = 0; i < al.size(); i++) {
			JsonData data = al.get(i);
			String name = data.widgetName;

			if (Gather) {
				c2sStrDefinition += "widget." + name + ":null,\\"+ data.widgetType+ "\n\t";
			} else {
				c2sStrDefinition += name + ":null,\n\t";
			}
		}

		c2sStrInitView += "initView:function(){\n";
		for (int i = 0; i < al.size(); i++) {
			JsonData data = al.get(i);
			String name = data.widgetName;
			String type = data.widgetType;
			if (Gather) {
				c2sStrInitView += "\t\tthis.widget." + name + " = CocoStudio.getComponent(this.view, \"" + name + "\");//"+ type +"\n";
			} else {
				c2sStrInitView += "\t\tthis." + name + " = CocoStudio.getComponent(this.view, \"" + name + "\");//"+ type +"\n";
			}
		}
		c2sStrInitView += "\t},";

		c2sStrRelease += "\n";
		c2sStrRelease += "release:function(){\n";
		if (Gather) {
			c2sStrRelease += "	widget = {};\n";
		} else {
			for (int i = 0; i < al.size(); i++) {
				JsonData data = al.get(i);
				String name = data.widgetName;
				String type = data.widgetType;
				c2sStrRelease += "	" + name + ":null;\n";
			}
		}
		c2sStrRelease += "\t}";
		
		for (int i = 0; i < al.size(); i++) {
			JsonData data = al.get(i);
			if(data.widgetPicPath!= null&&(data.widgetPicPath.indexOf("Cocos Studio")== -1)){
				String widgetPicPath ="res/"+data.widgetPicPath;
				c2sStrPath+= "\""+ widgetPicPath+ "\",\n\t\t";
			}
		}
//		if(c2sStrPath!= null){
//			//去除后面的(,\n);
//			c2sStrPath= c2sStrPath.substring(0, c2sStrPath.length()- 2);
//		}

		c2sString[0] = c2sStrDefinition;
		c2sString[1] = c2sStrInitView;
		c2sString[2] = c2sStrRelease;
		c2sString[3] = c2sStrPath;
		return c2sString;
	}

	/**
	 * 解析json中options字段转化为ArrayList
	 *
	 * @param options
	 * @return
	 */
	public ArrayList<JsonData> analysisJsonToArrayList(JSONObject options) {
		ArrayList<JsonData> al = new ArrayList<JsonData>();
		try {
			JsonData data = new JsonData();
			//递归调用遍历Json文件的options
			data.widgetType = options.getString("classname");//类名
			data.widgetName = options.getString("name");//控件名
			data.isOnClick = options.getBoolean("touchAble");//可否监听
			//获取控件图片的路径
			if(options.has("fileNameData")){
				JSONObject fileNameData= options.getJSONObject("fileNameData");
				
				if(fileNameData.getString("path")!= null){
					System.out.println(fileNameData.getString("path"));
					data.widgetPicPath= fileNameData.getString("path");
				}
			}else if(options.has("pressedData")){
				JSONObject pressedData= options.getJSONObject("pressedData");
				
				if(pressedData.getString("path")!= null){
					System.out.println(pressedData.getString("path"));
					data.widgetPicPath= pressedData.getString("path");
				}
			}else if(options.has("normalData")){
				JSONObject normalData= options.getJSONObject("normalData");
				
				if(normalData.getString("path")!= null){
					System.out.println(normalData.getString("path"));
					data.widgetPicPath= normalData.getString("path");
				}
			}else if(options.has("disabledData")){
				JSONObject disabledData= options.getJSONObject("disabledData");
				
				if(disabledData.getString("path")!= null){
					System.out.println(disabledData.getString("path"));
					data.widgetPicPath= disabledData.getString("path");
				}
			}else if(options.has("backGroundImageData")){
				if(!options.get("backGroundImageData").equals(null)){
					JSONObject backGroundImageData= options.getJSONObject("backGroundImageData");
					
					System.out.println("backGroundImageData");
					if(backGroundImageData.getString("path")!= null){
						System.out.println(backGroundImageData.getString("path"));
						data.widgetPicPath= backGroundImageData.getString("path");
					}
				}
			}
			
			//可否交互
			if (data.isOnClick) {
				// 如果开启交互
				String[] name = data.widgetName.split(NameSeparator);
				//如果文件名数组小于2，说明控件没有效果
				if (name.length >= 2) {
					// 配置交互类型
					data.widgetName = name[0];//真正的控件名(去除分隔符#)
					data.widgetEffect = "";
					//控件的音效和动画类型
					for (int i = 1; i < name.length; i++) {
						if (i == name.length - 1) {
							data.widgetEffect += name[i];
						} else {
							data.widgetEffect += name[i] + " + ";
						}
					}
				} else {
					// 无交互效果
					data.widgetEffect = NONE_EFFECT;
				}
			}
			
			boolean isAdd = true;
			if (isScreening) {
				for (int j = 0; j < 10; j++) {
					if (data.widgetName.contains("_" + j) && !data.widgetType.equals("Panel")) {
						isAdd = false;
						break;
					}
				}
			}
			if (isAdd) {
				al.add(data);
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return al;
	}
	

	/**
	 * 解析json中children字段转化为ArrayList
	 *
	 * @param options
	 * @return
	 */
	public ArrayList<JsonData> analyzeJsonRecursion(JSONArray children) {
		ArrayList<JsonData> al = new ArrayList<JsonData>();
		//递归解析，获取子节点的子节点
		try {
			for (int i = 0; i < children.length(); i++) {
				JSONObject child = children.getJSONObject(i);
				JSONObject options = (JSONObject) child.get("options");
				al.addAll(analysisJsonToArrayList(options));
				JSONArray child2 = (JSONArray) child.get("children");
				if (child2 != null) {
					al.addAll(analyzeJsonRecursion(child2));
				}
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return al;
	}

	/**
	 * 是否可以监听按钮时间
	 *
	 * @param type
	 */
	public boolean isCanOnClick(String type) {
		boolean isCan = true;
		for (int i = 0; i < ScreeningWidget.length; i++) {
			if (type.equals(ScreeningWidget[i])) {
				isCan = false;
				break;
			}
		}
		return isCan;
	}

	/**
	 * 生成module_view.xls
	 *
	 * @param jsonList
	 */
	public void creatModuleViewExcel(ArrayList<File> jsonList) {
		try {
			String dir = "outWidgetXls/ModuleView/";
			File file = new File(dir);
			if (!file.exists()) {
				file.mkdirs();
			}
			// t.xls为要新建的文件名
			WritableWorkbook book = Workbook.createWorkbook(new File(dir + "ModuleView.xls"));
			// 生成名为“第一页”的工作表，参数0表示这是第一页
			WritableSheet sheet = book.createSheet("ui", 0);
			WritableFont bold = new WritableFont(WritableFont.createFont("宋体"), 12, WritableFont.NO_BOLD);
			WritableCellFormat wcfFormatTitle = new WritableCellFormat(bold);
			wcfFormatTitle.setBackground(jxl.format.Colour.YELLOW);
			wcfFormatTitle.setAlignment(jxl.format.Alignment.CENTRE);

			sheet.setColumnView(0, 35);
			sheet.setColumnView(1, 35);
			sheet.setColumnView(2, 35);
			sheet.addCell(new Label(0, 0, "View", wcfFormatTitle));
			sheet.addCell(new Label(1, 0, "Layer", wcfFormatTitle));
			sheet.addCell(new Label(2, 0, "Path", wcfFormatTitle));
			WritableCellFormat wcfFormatText = new WritableCellFormat(bold);
			wcfFormatText.setAlignment(jxl.format.Alignment.CENTRE);
			for (int i = 0; i < jsonList.size(); i++) {
				String fileName = jsonList.get(i).getName();
				sheet.addCell(new Label(0, i + 1, getFileName(fileName) + "View", wcfFormatText));
				sheet.addCell(new Label(2, i + 1, fileName, wcfFormatText));
			}

			// 写入数据
			book.write();
			// 关闭文件
			book.close();
			System.out.println("----------输出文件  ModuleView.xls 结束---------\n");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 生成配置文件
	 *
	 * @param fileName
	 * @param al
	 */
	public void creatModuleExcel(String fileName, ArrayList<JsonData> al) {
		try {
			String dir = "outWidgetXls/Module/";
			File file = new File(dir);
			if (!file.exists()) {
				file.mkdirs();
			}
			// t.xls为要新建的文件名
			WritableWorkbook book = Workbook.createWorkbook(new File(dir + getFileNameFromJson(fileName) + "Module.xls"));
			// 生成名为“第一页”的工作表，参数0表示这是第一页
			WritableSheet sheet = book.createSheet(getPackageFromJson(fileName), 0);

			WritableFont bold = new WritableFont(WritableFont.createFont("宋体"), 12, WritableFont.NO_BOLD);
			WritableCellFormat wcfFormatTitle = new WritableCellFormat(bold);
			wcfFormatTitle.setBackground(jxl.format.Colour.YELLOW);
			wcfFormatTitle.setAlignment(jxl.format.Alignment.CENTRE);
			// 设置宽度
			sheet.setColumnView(0, 35);
			sheet.setColumnView(1, 35);
			sheet.setColumnView(2, 35);
			sheet.setColumnView(3, 25);
			sheet.setColumnView(4, 25);
			sheet.setColumnView(5, 60);
			sheet.setColumnView(6, 40);
			// 添加标题
			sheet.addCell(new Label(0, 0, "View", wcfFormatTitle));
			sheet.addCell(new Label(1, 0, "Layer", wcfFormatTitle));
			sheet.addCell(new Label(2, 0, "Path", wcfFormatTitle));
			sheet.addCell(new Label(3, 0, "Component", wcfFormatTitle));
			sheet.addCell(new Label(4, 0, "Event", wcfFormatTitle));
			sheet.addCell(new Label(5, 0, "ButtonEffectEvent", wcfFormatTitle));
			// TODO
			sheet.addCell(new Label(6, 0, "AdaptationScheme", wcfFormatTitle));// 适配方案
			// 设置数据
			WritableCellFormat wcfFormatText = new WritableCellFormat(bold);
			wcfFormatText.setAlignment(jxl.format.Alignment.CENTRE);
			sheet.addCell(new Label(0, 1, getFileNameFromJson(fileName) + "Logic", wcfFormatText));
			sheet.addCell(new Label(1, 1, getFileLayerFromJson(fileName), wcfFormatText));//获取类的层级
			sheet.addCell(new Label(2, 1, getFileNameFromJson(fileName) + ".json", wcfFormatText));
			int index = 0;
			for (int i = 0; i < al.size(); i++) {
				if (al.get(i).isOnClick && isCanOnClick(al.get(i).widgetType)) {
					sheet.addCell(new Label(3, index + 1, al.get(i).widgetName, wcfFormatText));
					sheet.addCell(new Label(4, index + 1, "BUTTON_CLICK", wcfFormatText));
					if (al.get(i).widgetEffect != null) {
						sheet.addCell(new Label(5, index + 1, al.get(i).widgetEffect, wcfFormatText));
					}
					index++;
				}
			}
			// TODO
			// 保存适配方案
			String strScheme = getAdaptationScheme(fileName);
			for (int i = 0; i < strScheme.length(); i++) {
				sheet.addCell(new Label(6, i + 1, strScheme.charAt(i) + "", wcfFormatText));
			}

			// 写入数据
			book.write();
			// 关闭文件
			book.close();
			System.out.println("----------输出文件  " + getFileName(fileName) + "Module.xls 结束---------\n");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 获取适配的方案
	public String getAdaptationScheme(String fileName) {
		if (fileName != null) {
			String[] name = fileName.split(NameSeparator);
			if (name.length == FILE_NAME_LENGTH) {// 4 Hall#hall#1#192.json
				return getFileName(name[3]);
			} else if (name.length == FILE_NAME_LENGTH - 1) {
				// 默认适配1136*640
				return "1";
			}

		}
		return "error";
	}

	/**
	 * 获得文件名
	 *
	 * @param fileName
	 * @return
	 */
	public static String getFileNameFromJson(String fileName) {
		if (fileName != null) {
			//根据分隔符#,截取处字符串数组
			String[] name = fileName.split(NameSeparator);
			//规定UI工程导出的Json文件的样式为(Hall#hall#1#192.json)，所以截取后的数组长度为4或者3，可能有的是3
			//Hall 文件名，也就是Logic和Controller的名字
			//hall 基类名，输出文件的所属文件名
			//1	层级
			//192
			if (name.length == FILE_NAME_LENGTH || name.length == FILE_NAME_LENGTH - 1) {// 4
																							// Hall#hall#1#192.json
				return name[0];
			}

		}
		return "error";
	}

	/**
	 * 获得包名
	 *
	 * @param fileName
	 * @return
	 */
	public static String getPackageFromJson(String fileName) {
		if (fileName != null) {
			String[] name = fileName.split(NameSeparator);
			if (name.length == FILE_NAME_LENGTH || name.length == FILE_NAME_LENGTH - 1) {// 4
																							// Hall#hall#1#192.json
				return name[1];
			}

		}
		return "error";
	}

	/**
	 * 获得层级
	 *
	 * @param fileName
	 * @return
	 */
	public static String getFileLayerFromJson(String fileName) {
		if (fileName != null) {
			String[] name = fileName.split(NameSeparator);
			if (name.length == FILE_NAME_LENGTH) {// 4
													// Hall#hall#1#192.json
				return LayerName[Integer.parseInt(name[2]) - 1];
			} else if (name.length == FILE_NAME_LENGTH - 1) {

				return LayerName[Integer.parseInt(getFileName(name[2])) - 1];
			}
		}
		return "error";
	}

	public static String getPrefixLanguage(String prefix) {
		for (int i = 0; i < languageList.length; i++) {
			if (prefix.contains("_" + languageList[i])) {
				return languageList[i];
			}
		}
		return null;
	}

	public static String getRealPrefix(String prefix) {
		for (int i = 0; i < languageList.length; i++) {
			prefix = prefix.replaceAll("_" + languageList[i], "");
			System.out.println("RealPrefix === " + prefix);
		}
		return prefix;
	}

	/**
	 * 复制并重命名json
	 *
	 * @param file
	 */
	public void renamejson(File file) {
		outJsonPath = "outJson/";
		String LanguageFile = getPrefixLanguage(file.getName());
		if (LanguageFile != null) {
			outJsonPath = outJsonPath + LanguageFile + "/";
		}
		File fileDir = new File(outJsonPath);
		if (!fileDir.exists()) {
			fileDir.mkdirs();
		}
		String jsonName = getFileNameFromJson(file.getName()) + ".json";
		nioTransferCopy(file, new File(outJsonPath + jsonName));
	}

	/**
	 * 复制文件
	 *
	 * @param source
	 * @param target
	 */
	public static void nioTransferCopy(File source, File target) {
		FileChannel in = null;
		FileChannel out = null;
		FileInputStream inStream = null;
		FileOutputStream outStream = null;
		try {
			inStream = new FileInputStream(source);
			outStream = new FileOutputStream(target);
			in = inStream.getChannel();
			out = outStream.getChannel();
			in.transferTo(0, in.size(), out);
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (inStream != null) {
					inStream.close();
				}
				if (in != null) {
					in.close();
				}
				if (outStream != null) {
					outStream.close();
				}
				if (out != null) {
					out.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * 创建JSON文件
	 *
	 * @param jsonObj
	 *            json 文件
	 * @param fileName
	 *            文件名
	 */
	public static void creatNewJson(JSONObject jsonObj, String fileName) {
		String newJsonFile = jsonObj.toString();

		//将JSON文件 读取到String文件中，(注意:此时空格 制表符等已经去除)
		//将控件名中的音效标记都替换掉("#" + SOUND_PREFIX[j])
		for (int j = 0; j < SOUND_PREFIX.length; j++) {
			newJsonFile = newJsonFile.replaceAll("#" + SOUND_PREFIX[j], "");
		}
		
		//将控件名中的动画标记都替换掉("#" + ANIMATION_PREFIX[j])
		for (int j = 0; j < ANIMATION_PREFIX.length; j++) {
			newJsonFile = newJsonFile.replaceAll("#" + ANIMATION_PREFIX[j], "");
		}
		
		//要导出的文件名(输入文件名的第一个#前面的字符 + '.json')
		//注意，此时的文件名 可能带有语言类型
		String jsonName = getFileNameFromJson(fileName) + ".json";

		outJsonPath = "outJson/";//输出Json目录
		
		//获取文件名中的语言
		String LanguageFile = getPrefixLanguage(fileName);
		
		if (LanguageFile != null) {
			outJsonPath = outJsonPath + LanguageFile + "/";
		}
		//获取真正的文件名，删除掉语言类型
		jsonName = getRealPrefix(jsonName);
		//将json数据，写入到JS文件中
		ConvertModuleCfgToJS.writeJS(outJsonPath + jsonName, newJsonFile);
	}

	/**
	 * 开始解析json文件
	 */
	public HashMap<String, ArrayList<JsonData>> startAnalysisJsonToJS() {
		//读取一个文件夹下所有文件及子文件夹下的所有指定类型的文件List
		ArrayList<File> jsonList = new ArrayList<File>();
		ReadAllFile(jsonPath, jsonList, ".json");

		HashMap<String, ArrayList<JsonData>> allJsonData = new HashMap<String, ArrayList<JsonData>>();
		//遍历所有的json文件
		for (int i = 0; i < jsonList.size(); i++) {
			//获取文件名(例如:ResetPassword#login#2#1.json)
			String fileName = jsonList.get(i).getName();
			System.out.println("fileName == " + fileName);
			
			//读取json文件，存储成json对象
			JSONObject jsonObj = getJSONObjectFromSD(jsonPath + fileName);
			// 生成新的json文件,此时的文件名已经发生截取
			//并将按钮类型和按钮动画标记删除
			//写入到新的json文件中
			creatNewJson(jsonObj, fileName);

			try {
				JSONObject widgetTree = jsonObj.getJSONObject("widgetTree");//查找树(json文件中的key = widgetTree)
				JSONArray children = widgetTree.getJSONArray("children");//查找树(json文件中widgetTree下的key = children)
				JSONObject options = (JSONObject) widgetTree.get("options");//查找树(json文件中widgetTree下的key = options)
				
				ArrayList<JsonData> al = new ArrayList<JsonData>();
				// 解析json中options字段转化为ArrayList
				//仅仅解析的是，根节点
				al = analysisJsonToArrayList(options);
				System.out.println("al.size() === " + al.size());
				
				//递归解析
				if (children != null) {
					// 解析json中children字段转化为ArrayList
					al.addAll(analyzeJsonRecursion(children));
				}
				
				//此时，已经将所有的Json中的对象名、动画、音效类型  都已经修改
				
				//如果输入的Json文件的name长度为3 || name数组的最后一个元素的数值非0，都需要生成xls
				if (needToGenerateXlsFile(fileName)) {
					// 如果是1136的工程，则将数据存在allJsonData和创建xls,便于生成lua代码
					allJsonData.put(getFileNameFromJson(fileName), al);
					// 生成配置文件
					creatModuleExcel(fileName, al);
				}
			} catch (JSONException e) {
				e.printStackTrace();
			}
		}

		System.out.println(" ======================================================= ");
		System.out.println(" **************** 输出完毕 **************** ");
		System.out.println(" ======================================================= ");
		return allJsonData;
	}

	// 是否需要生成xls文件
	public boolean needToGenerateXlsFile(String fileName) {
		if (fileName != null) {
			String[] name = fileName.split(NameSeparator);
			//name长度为3 || name数组的最后一个元素的数值非0，都需要生成xls
			if (name.length == FILE_NAME_LENGTH) {// 4 Hall#hall#1#192.json
				System.out.println("test ============" + getFileName(name[3]));
				if (!getFileName(name[3]).equals("0")) {
					return true;
				}
			} else if (name.length == FILE_NAME_LENGTH - 1) {
				return true;
			}
		}
		return false;
	}

	class JsonData {
		public String widgetName = null;// 控件名字
		public String widgetType = null;// 控件类型
		public boolean isOnClick = false;// 控件是否开启交互
		public String widgetEffect = null;// 控件交互效果
		public String widgetPicPath = null;//控件图片
	}
}

package com.wy.main;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Vector;

import com.wy.main.CocostudioJsonToJS.JsonData;

import jxl.Sheet;
import jxl.Workbook;

public class ConvertModuleCfgToJS {
	//XLS文件生成目录
	public static final String MODULE_CONFIG_FILE_EXCEL_DIR = "outWidgetXls/Module";
	//JS文件导出目录
	public static final String MODULE_CONFIG_FILE_JS_DIR = "module_cfg_file_js";
	public static StringBuffer moduleConfigCode = null;// ModuleConfig.js
	private static HashMap<String, ArrayList<JsonData>> allJsonData = new HashMap<String, ArrayList<JsonData>>();
	private static boolean isAdaptivePad = false;// 是否适配pad

	//程序入口
	public static void main(String[] args) {
		//将CocosStudio 导出的Json工具，导出为JS文件(Logic.js Controller.js)
		//在CocostudioJsonToJS.java中，定义的类对象
		CocostudioJsonToJS JsonToJS = new CocostudioJsonToJS();
		
		//开始解析json文件，生成新的json文件，设置控件的音效动画类型,生成的xls
		allJsonData = JsonToJS.startAnalysisJsonToJS();

		ArrayList<File> xlsList = new ArrayList<File>();
		//读取*.xls输出目录下的所有.xls文件
		CocostudioJsonToJS.ReadAllFile(MODULE_CONFIG_FILE_EXCEL_DIR, xlsList, ".xls");

		moduleConfigCode = new StringBuffer("");
		moduleConfigCode.append("ModuleTable = {}\n\n");
		//读取所有的xls文件
		for (int i = 0; i < xlsList.size(); i++) {
			System.out.println("xlsList.get(i).getPath() == " + xlsList.get(i).getPath());
			//根据导出的xls，生成界面框架代码
			convertModuleToJS(xlsList.get(i).getPath(), MODULE_CONFIG_FILE_JS_DIR);
		}
		
		// write ModuleConfig
		writeJS(MODULE_CONFIG_FILE_JS_DIR + "/ModuleConfig.js", moduleConfigCode.toString());
	}

	/**
	 * 生成界面框架代码
	 *
	 * @param module xls文件路径
	 * @param dist 要生成的JS存放路径
	 */
	public static void convertModuleToJS(String module, String dist) {

		try {
			//文件输入流
			InputStream is = new FileInputStream(module);
			
			//Excel中的WorkBook(工作薄)
			Workbook workbook = Workbook.getWorkbook(is);

			Vector<String> vec_view = new Vector<String>();
			Vector<String> vec_line = new Vector<String>();

			Vector<String> vec_component = new Vector<String>();
			Vector<String> vec_event = new Vector<String>();
			Vector<String> vec_buttonEffectEvent = new Vector<String>();
			Vector<String> vec_adaptationScheme = new Vector<String>();

			for (Sheet sheet : workbook.getSheets()) {
				String moduleName;

				moduleName = sheet.getName();//Excel文件左下角的sheet名
				
				if (moduleName.contains("#")) {
					continue;
				}

				int row_num = sheet.getRows();//行数
				int col_num = sheet.getColumns();//列数
				
				//获取View名和对应的对象的数量
				for (int i = 1; i < row_num; i++) {
					String temp_view = sheet.getCell(0, i).getContents();//获取Excel中的第一列的View中的值
					
					if (!temp_view.equals("")) {
						vec_view.add(temp_view);
						vec_line.add("" + i);
					}
				}
				vec_line.add("" + row_num);
				
				//读取对应的值
				for (int i = 0; i < vec_line.size() - 1; i++) {
					String _component = "";//Excel中Componet一栏中，所有的控件名
					String _event = "";//Excel中Event一栏中，所有的事件名
					String _buttonEffectEvent = "";//Excel中ButtonEffectEvent一栏中，所有的按钮相应类型
					String _adaptationScheme = "";//Excel中AdaptationScheme一栏中
					
					//按列读取数据
					for (int j = getId(vec_line, i); j < getId(vec_line, i + 1); j++) {
						_component += sheet.getCell(3, j).getContents() + ";";
						_event += sheet.getCell(4, j).getContents() + ";";
						_buttonEffectEvent += sheet.getCell(5, j).getContents() + ";";
						if (!sheet.getCell(6, j).getContents().equals("")) {
							_adaptationScheme += sheet.getCell(6, j).getContents() + ";";
						}
					}
					
					
					vec_component.add(_component);
					vec_event.add(_event);
					vec_buttonEffectEvent.add(_buttonEffectEvent);
					vec_adaptationScheme.add(_adaptationScheme);
				}
				
				//遍历所有视图，写入数据
				for (int i = 0; i < vec_view.size(); i++) {
					String viewName = vec_view.get(i).toString();//视图名(HallLogic)
					String prefix = viewName.substring(0, viewName.lastIndexOf("Logic"));//获得前缀，视图真正的名字(Hall)
					System.out.println("prefix ================ " + prefix);
					String RealPrefix = CocostudioJsonToJS.getRealPrefix(prefix);
					System.out.println("RealPrefix ================ " + RealPrefix);
					String controllerName = RealPrefix + "Controller";//控制类名称
					String logicName = RealPrefix + "Logic";//逻辑类名称
					StringBuffer addCallback = new StringBuffer("");// 绑定
					StringBuffer removeCallback = new StringBuffer("");// 解绑
					StringBuffer callbacks = new StringBuffer("");// 回调
					String Definition = "";// 定义
					String InitViewfunction = "";// 初始化
					// String Releasefunction = "";// 释放
					String InitLayerfunction = "";// 初始化当前界面Lua代码

					String[] componets = vec_component.get(i).toString().split(";");//控件名
					String[] events = vec_event.get(i).toString().split(";");//事件名
					String[] buttonEffectEvent = vec_buttonEffectEvent.get(i).toString().split(";");//事件类型
					// TODO
					String[] adaptationScheme = vec_adaptationScheme.get(i).toString().split(";");
					InitLayerfunction = spliceInitLayerCode(adaptationScheme, RealPrefix);//初始化

					String[] jsonWidgetData = CocostudioJsonToJS.analysisJsonToJS(allJsonData.get(prefix));
					if (jsonWidgetData.length == 3) {
						Definition = jsonWidgetData[0];// 定义
						InitViewfunction = jsonWidgetData[1];// 初始化
						// Releasefunction = jsonWidgetData[2];// 释放
					}

					for (int j = 0; j < componets.length; j++) {
						String callbackName = "callback_" + componets[j];// +"_"+events[j];

						// 绑定按钮监听
						String addTemplate = "framework.bindEventCallback(cocostudio.getComponent(#logicName#.view,\"#component#\"), #callback#, #event#, #buttonEffectEvent#);";
						addTemplate = addTemplate.replaceAll("#component#", componets[j]);
						addTemplate = addTemplate.replaceAll("#callback#", logicName + "." + callbackName);
						addTemplate = addTemplate.replaceAll("#event#", events[j]);
						addTemplate = addTemplate.replaceAll("#buttonEffectEvent#", buttonEffectEvent[j]);
						addTemplate = addTemplate.replaceAll("#logicName#", logicName);

						addCallback.append(addTemplate);
						if (j != componets.length - 1) {
							addCallback.append("\n" + "\t");
						}

						// 解除按钮监听绑定
						String removeTemplate = "framework.unbindEventCallback(cocostudio.getComponent(#logicName#.view,\"#component#\"), #callback#, #event#, #buttonEffectEvent#);";
						removeTemplate = removeTemplate.replaceAll("#component#", componets[j]);
						removeTemplate = removeTemplate.replaceAll("#callback#", logicName + "." + callbackName);
						removeTemplate = removeTemplate.replaceAll("#event#", events[j]);
						removeTemplate = removeTemplate.replaceAll("#buttonEffectEvent#", buttonEffectEvent[j]);
						removeTemplate = removeTemplate.replaceAll("#logicName#", logicName);

						removeCallback.append(removeTemplate);
						if (j != componets.length - 1) {
							removeCallback.append("\n" + "\t");
						}

						// 按钮监听的回调方法
						callbacks.append("function " + callbackName + "(component)\n");
						callbacks.append("\t" + "if component == PUSH_DOWN then" + "\n");
						callbacks.append("\t" + "--按下" + "\n\n");
						callbacks.append("\t" + "elseif component == RELEASE_UP then" + "\n");
						callbacks.append("\t" + "--抬起" + "\n\n");
						callbacks.append("\t" + "elseif component == CANCEL_UP then" + "\n");
						callbacks.append("\t" + "--取消" + "\n\n");
						callbacks.append("\t" + "end" + "\n");
						callbacks.append("end" + "\n\n");
					}

					String layer = sheet.getCell(1, 1).getContents();// 层级
					String viewPath = sheet.getCell(2, 1).getContents();// 读取的json

					// write controller
					String template = FileUtils.readFileToString("template/ControllerLua.ftl");
					String content = template;
					content = content.replaceAll("#controllerName#", controllerName);
					content = content.replaceAll("#logicName#", logicName);
					content = content.replaceAll("#moduleName#", moduleName);
					content = content.replaceAll("#addCallback#", addCallback.toString());
					content = content.replaceAll("#removeCallback#", removeCallback.toString());

					writeJS(dist + "/" + moduleName + "/controller/" + controllerName + ".js", content);

					// write logic
					template = FileUtils.readFileToString("template/LogicLua.ftl");
					content = template;
					content = content.replaceAll("#logicName#", logicName);
					content = content.replaceAll("#viewName#", viewName);
					// content = content.replaceAll("#viewPath#", viewPath);
					content = content.replaceAll("#callbacks#", callbacks.toString());
					content = content.replaceAll("#Definition#", Definition);
					content = content.replaceAll("#InitViewfunction#", InitViewfunction);
					// TODO
					content = content.replaceAll("#InitLayerfunction#", InitLayerfunction);

					writeJS(dist + "/" + moduleName + "/logic/" + logicName + ".js", content);

					// write ModuleConfig
					String controllerPath = "script/module/" + moduleName + "/controller/" + controllerName;

					String str1 = "ModuleTable[\"#name#\"] = {}";
					String str2 = "ModuleTable[\"#name#\"][\"ControllerPath\"] = \"#controllerPath#\"";
					String str3 = "ModuleTable[\"#name#\"][\"layer\"] = \"#layer#\"";

					str1 = str1.replaceAll("#name#", RealPrefix);

					str2 = str2.replaceAll("#name#", RealPrefix);
					str2 = str2.replaceAll("#controllerPath#", controllerPath);

					str3 = str3.replaceAll("#name#", RealPrefix);
					str3 = str3.replaceAll("#layer#", layer);

					moduleConfigCode.append(str1 + "\n");
					moduleConfigCode.append(str2 + "\n");
					moduleConfigCode.append(str3 + "\n\n");
				}
			}

			System.out.println(vec_view.toString());
			System.out.println(vec_component.toString());
			System.out.println(vec_event.toString());
			System.out.println("==================================");

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	/**
	 * 拼接初始化界面的代码
	 *
	 * @param adaptationScheme
	 *            Stirng[] 适配方案 1 9 2
	 * @param prefix
	 *            界面
	 * @return 拼接的代码
	 * @throws Exception
	 */
	public static String spliceInitLayerCode(String[] adaptationScheme, String prefix) throws Exception {
		StringBuffer code = new StringBuffer("local function initLayer()\n");
		code.append("	local gui = GUI_" + prefix.toUpperCase() + "; \n");
		System.out.println("adaptationScheme.length ==" + adaptationScheme.length);
		code.append("	");
		for (int i = 0; i < adaptationScheme.length; i++) {
			if (adaptationScheme[i].equals("1")) {
				if (adaptationScheme.length == 1) {
					System.out.println("适配方案 1136 x 640");
					code.append("if GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL then \n");
					code.append("		--适配方案 1136x640  \n");
					code.append("		view = cocostudio.createView(\"" + prefix + ".json\"); \n");
					code.append("		GameConfig.setCurrentScreenResolution(view, gui, 1136, 640, kResolutionExactFit); \n");
					System.out.println("Pad加黑边");
					code.append("	elseif GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL then \n");
					code.append("		--适配方案 Pad加黑边  \n");
					code.append("		view = cocostudio.createView(\"" + prefix + ".json\"); \n");
					code.append("		GameConfig.setCurrentScreenResolution(view, gui, 1136, 640, kResolutionShowAll); \n");
				} else {
					System.out.println("适配方案 1136 x 640");
					code.append("if GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT then \n");
					code.append("		--适配方案 1136x640  \n");
					code.append("		view = cocostudio.createView(\"" + prefix + ".json\"); \n");
					code.append("		GameConfig.setCurrentScreenResolution(view, gui, 1136, 640, kResolutionExactFit); \n");
					if (!isAdaptivePad) {
						System.out.println("Pad加黑边");
						code.append("	elseif GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL then \n");
						code.append("		--适配方案 Pad加黑边  \n");
						code.append("		view = cocostudio.createView(\"" + prefix + ".json\"); \n");
						code.append("		GameConfig.setCurrentScreenResolution(view, gui, 1136, 640, kResolutionShowAll); \n");
					}
				}
			} else if (adaptationScheme[i].equals("9")) {
				System.out.println("适配方案 960 x 640");
				code.append("	elseif GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT and GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL then \n");
				code.append("		--适配方案 960x640  \n");
				code.append("		view = cocostudio.createView(\"" + prefix + "_960_640.json\"); \n");
				code.append("		GameConfig.setCurrentScreenResolution(view, gui, 960, 640, kResolutionExactFit); \n");
			} else if (adaptationScheme[i].equals("2") && isAdaptivePad) {
				System.out.println("适配方案 2048x1536");
				code.append("	elseif GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL then \n");
				code.append("		--适配方案 2048x1536  \n");
				code.append("		view = cocostudio.createView(\"" + prefix + "_2048_1536.json\"); \n");
				code.append("		GameConfig.setCurrentScreenResolution(view, gui, 2048, 1536, kResolutionExactFit); \n");
			} else {
				throw new Exception("适配方案错误，" + prefix + " 没有适配为 [" + adaptationScheme[i] + "] 的方案！");
			}

		}
		code.append("	end \n");
		code.append("end");
		return code.toString();
	}

	public static int getId(Vector vec, int index) {
		return Integer.parseInt(vec.get(index).toString());
	}

	public static void writeJS(String fileName, String content) {
		try {
			File file = new File(fileName);
			file.getParentFile().mkdirs();
			file.createNewFile();
			OutputStreamWriter out = new OutputStreamWriter(new FileOutputStream(fileName), "UTF-8");

			out.write(content);
			out.flush();
			out.close();

		} catch (Exception e) {
			System.out.println(e.toString());
		}
	}
}

package com.wy.main;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.InputStream;
import java.util.Vector;

import jxl.Sheet;
import jxl.Workbook;

public class ConvertGameCfgToJS {

	public static final String EXCEL_CONFIG_FILE_DIR 	= "game_cfg_file_excel";
	public static final String LUA_CONFIG_FILE_DIR 		= "game_cfg_file_lua";
	
	public static final String[] LUA_CODE_TEMPLATE = {
		"module(\"#\",package.seeall)\n",
		"data = {}\n"
	};
	
	public static Vector vector = new Vector();
	
	public static void main(String[] args){
		System.out.println("============convert game config to lua===========");
		
		if(args.length>0){
			traversFile(args[0],args[1]);
			createCfgRequireFile(args[0]);
		}else{
			traversFile(EXCEL_CONFIG_FILE_DIR,LUA_CONFIG_FILE_DIR);
			createCfgRequireFile(LUA_CONFIG_FILE_DIR);
		}
		
		System.out.println("============convert success!!!===========");
	}
	
	
	
	public static void traversFile(String src, String dist){
		
		File file = new File(src);
		
		String path = "";
		if(file.isDirectory()){
			
			path += file.getName()+"/";
			
			File[] files = file.listFiles();
			
			for(int i=0;i<files.length;i++){
				traversFile(path+files[i].getName(),dist);
			}
		}else{
			fromExcelToJSByIndex2(src,dist);
		}
	}
	
	public static void fromExcelToJS(String fileName, String distDir){
		try{
			InputStream is = new FileInputStream(fileName);
			
			Workbook workbook = Workbook.getWorkbook(is);
			
			for(Sheet sheet : workbook.getSheets()){
				String file_name = sheet.getName();
				String module_name = file_name+"_cfg";
				
				vector.add(module_name);
				
				File file = new File(distDir+"/"+file_name+".lua");
				FileWriter fw = new FileWriter(file);
				
				fw.write(LUA_CODE_TEMPLATE[0].replaceAll("#", module_name));
				fw.write(LUA_CODE_TEMPLATE[1]);
				
				for(int i=5;i<sheet.getRows();i++){
					
					String id = sheet.getCell(0, i).getContents();
					
					fw.write("data["+id+"] = {\n");
					
					for(int j=0;j<sheet.getColumns();j++){
						String attr_name = sheet.getCell(j, 0).getContents();
						
						fw.write("    [\""+attr_name+"\"] = "+sheet.getCell(j, i).getContents()+",\n");
					}
					
					fw.write("}\n");
				}
				
				fw.flush();
				fw.close();
			}
			
		}catch(Exception e){
			System.out.println(e.toString());
		}
	}
	
	public static void fromExcelToJSByIndex(String fileName, String distDir){
		try{
			InputStream is = new FileInputStream(fileName);
			
			Workbook workbook = Workbook.getWorkbook(is);
			
			for(Sheet sheet : workbook.getSheets()){
				String file_name = sheet.getName();
				String module_name = file_name+"_cfg";
				
				vector.add(module_name);
				
				File file = new File(distDir+"/"+file_name+".lua");
				FileWriter fw = new FileWriter(file);
				
				fw.write(LUA_CODE_TEMPLATE[0].replaceAll("#", module_name));
				fw.write("local index = {");
				
				for(int j=0;j<sheet.getColumns();j++){
					String attr_name = sheet.getCell(j, 0).getContents();
					fw.write(attr_name+"="+(j+1)+",");
				}
				fw.write("}\n");
				
				fw.write("local data = {}\n");
				
				for(int i=5;i<sheet.getRows();i++){
					
					String id = sheet.getCell(0, i).getContents();
					
					fw.write("data["+id+"]={");
					
					for(int j=0;j<sheet.getColumns();j++){
						String attr_name = sheet.getCell(j, 0).getContents();
						String type = sheet.getCell(j, 1).getContents();
						
						if(type.equals("int")){
							fw.write(sheet.getCell(j, i).getContents()+",");
						}else if(type.equals("string")){
							fw.write("\""+sheet.getCell(j, i).getContents()+"\",");
						}
						
					}
					
					fw.write("}\n");
				}
				
				fw.write("\n");
				fw.write("function getData(id,attr)\n");
				fw.write("    return data[id][index[attr]]\n");
				fw.write("end");
				fw.flush();
				fw.close();
			}
			
		}catch(Exception e){
			System.out.println(e.toString());
		}
	}
	
	public static void fromExcelToJSByIndex2(String fileName, String distDir){
		try{
			System.out.println("fileName==="+fileName+", distDir=="+distDir);
			
			InputStream is = new FileInputStream(fileName);
			
			Workbook workbook = Workbook.getWorkbook(is);
			
			
			for(Sheet sheet : workbook.getSheets()){
				String file_name = sheet.getName();
				String module_name = file_name+"_cfg";
				
				vector.add(module_name);
				
				File file = new File(distDir+"/"+file_name+".lua");
				FileWriter fw = new FileWriter(file);
				
				fw.write(LUA_CODE_TEMPLATE[0].replaceAll("#", module_name));
				fw.write("local index = {");
				
				int count = 1;
				for(int i=5;i<sheet.getRows();i++){
					String id = sheet.getCell(0, i).getContents();
					fw.write("["+id+"]="+count+",");
					count++;
				}
				fw.write("}\n");
				
				fw.write("local data = {}\n");
				
				for(int j=0;j<sheet.getColumns();j++){
					String attr_name = sheet.getCell(j, 0).getContents();
					
					fw.write("data[\""+attr_name+"\"]={");
					
					for(int i=5;i<sheet.getRows();i++){
						String type = sheet.getCell(j, 1).getContents();
						
						if(type.equals("int")){
							fw.write(sheet.getCell(j, i).getContents()+",");
						}else if(type.equals("string")){
							fw.write("\""+sheet.getCell(j, i).getContents()+"\",");
						}
					}
					
					fw.write("}\n");
				}
				
				
				fw.write("\n");
				fw.write("function getData(id,attr)\n");
				fw.write("    return data[attr][index[id]]\n");
				fw.write("end");
				fw.flush();
				fw.close();
			}
			
		}catch(Exception e){
			System.out.println(e.toString());
		}
	}
	
	public static void createCfgRequireFile(String path){
		try{
			File file = new File(path+"/AutoCfgRequire.lua");
			FileWriter fw = new FileWriter(file);
			
			String template = "require \"script/autocfg/#\"";
			
			for(int i=0;i<vector.size();i++){
				fw.write(template.replaceAll("#", vector.get(i).toString())+"\n");
			}
			
			fw.flush();
			fw.close();
		}catch(Exception e){
			System.out.println(e.toString());
		}
	}
}

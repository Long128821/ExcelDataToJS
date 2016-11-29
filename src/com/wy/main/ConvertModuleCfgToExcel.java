package com.wy.main;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.OutputStream;

import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;

public class ConvertModuleCfgToExcel {
	
	public static String MODULE_CONFIG_FILE_CFG_DIR 			= "module_cfg_file";
	public static final String MODULE_CONFIG_FILE_EXCEL_DIR 	= "module_cfg_file_excel";
	
	public static void main(String[] args){
		if(args.length>0){
			convertToExcel(args[0], true);
		}else{
			convertToExcel(MODULE_CONFIG_FILE_CFG_DIR, true);
		}
	}
	
	public static void traversDir(WritableWorkbook wwb, String path){
		File dir = new File(path);
		File[] files = dir.listFiles();
		
		for(int i=0;i<files.length;i++){
			if(files[i].isDirectory()){
				System.out.println("path=="+files[i].getPath());
				traversFile(wwb,files[i].getPath());
			}
		}
	}
	
	public static void traversFile(WritableWorkbook wwb, String path){
		
		try{
			File dir = new File(path);
			File[] files = dir.listFiles();
			
			String sheetName = dir.getName();
			WritableSheet sheet = wwb.createSheet(sheetName, 0);
			
			sheet.addCell(new Label(0,0,"View"));
			sheet.addCell(new Label(1,0,"Component"));
			sheet.addCell(new Label(2,0,"Event"));
			
			int row = 1;
			for(int i=0;i<files.length;i++){
				if(files[i].isFile()){
					String fileName = files[i].getName();
					
					
					String moduleCfg = FileUtils.readFileToString(path+"/"+fileName);
					System.out.println("==="+path+"/"+fileName);
					
					String viewName = moduleCfg.substring(moduleCfg.indexOf("View=")+("View=".length()),moduleCfg.indexOf("Component=")).trim();
					String[] components = moduleCfg.substring(moduleCfg.indexOf("Component=")+("Component=".length()),moduleCfg.indexOf("Event=")).trim().split(",");
					String[] events = moduleCfg.substring(moduleCfg.indexOf("Event=")+("Event=".length()),moduleCfg.length()).trim().split(",");
					
					for(int j=0;j<components.length;j++){
						if(j==0){
							sheet.addCell(new Label(0,j+row,viewName));
						}
						sheet.addCell(new Label(1,j+row,components[j]));
						sheet.addCell(new Label(2,j+row,events[j]));
					}
					
					row += components.length;

				}
			}
		}catch(Exception e){
			System.out.println(e.toString());
		}
	}
	
	public static void convertToExcel(String path, boolean b_travers_dir){
		try{
			OutputStream os = new FileOutputStream(MODULE_CONFIG_FILE_EXCEL_DIR+"/module_test.xls");
			WritableWorkbook wwb = Workbook.createWorkbook(os);

			if(b_travers_dir){
				traversDir(wwb, path);
			}else{
				traversFile(wwb, path);
			}
			wwb.write();
			wwb.close();
		}catch(Exception e){
			System.out.println(e.toString());
		}
	}
	
	public static void convert(){
		
		String sheetName = "setting";
		try{
			
			OutputStream os = new FileOutputStream(MODULE_CONFIG_FILE_EXCEL_DIR+"/module_test.xls");
			WritableWorkbook wwb = Workbook.createWorkbook(os);
			
			WritableSheet sheet = wwb.createSheet(sheetName, 0);
			
			sheet.addCell(new Label(0,0,"View"));
			sheet.addCell(new Label(1,0,"Component"));
			sheet.addCell(new Label(2,0,"Event"));
			
			
			String moduleCfg = FileUtils.readFileToString("module_cfg_file/setting/Setting.cfg");
			
			String viewName = moduleCfg.substring(moduleCfg.indexOf("View=")+("View=".length()),moduleCfg.indexOf("Component=")).trim();
			String[] components = moduleCfg.substring(moduleCfg.indexOf("Component=")+("Component=".length()),moduleCfg.indexOf("Event=")).trim().split(",");
			String[] events = moduleCfg.substring(moduleCfg.indexOf("Event=")+("Event=".length()),moduleCfg.length()).trim().split(",");
			
			for(int i=0;i<components.length;i++){
				if(i+1==1){
					sheet.addCell(new Label(0,i+1,viewName));
				}
				sheet.addCell(new Label(1,i+1,components[i]));
				sheet.addCell(new Label(2,i+1,events[i]));
			}
			
			wwb.write();
			wwb.close();
		}catch(Exception e){
			System.out.println(e.toString());
		}
	}
}

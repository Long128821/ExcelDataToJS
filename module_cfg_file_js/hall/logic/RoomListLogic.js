var RoomListLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	panel_bg:null,
	Panel_roomTableView:null,
	panel_roomlist:null,
	panel_hall:null,
	Image_roomType:null,
	Button_close:null,
	Panel_createroom:null,
	Button_createdList:null,
	Button_create:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["RoomList"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.panel_bg = CocoStudio.getComponent(this.view, "panel_bg");//Panel
		this.Panel_roomTableView = CocoStudio.getComponent(this.view, "Panel_roomTableView");//Panel
		this.panel_roomlist = CocoStudio.getComponent(this.view, "panel_roomlist");//Panel
		this.panel_hall = CocoStudio.getComponent(this.view, "panel_hall");//Panel
		this.Image_roomType = CocoStudio.getComponent(this.view, "Image_roomType");//ImageView
		this.Button_close = CocoStudio.getComponent(this.view, "Button_close");//Button
		this.Panel_createroom = CocoStudio.getComponent(this.view, "Panel_createroom");//Panel
		this.Button_createdList = CocoStudio.getComponent(this.view, "Button_createdList");//Button
		this.Button_create = CocoStudio.getComponent(this.view, "Button_create");//Button
	},

    initLayer:function(){
		var gui = GUI_ROOMLIST; 
		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/RoomList.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/RoomList.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
			//适配方案 960x640  
			this.view = CocoStudio.createView("res/RoomList_960_640.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}
	},
    
	callback_Button_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_createroom:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_createdList:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_create:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},
    //安卓手机的返回键的监听事件
    onKeypad:function(event){
    	if(event == "backClicked"){//返回键
    		
    	}else if(event == "menuClicked"){//菜单键
    	
    	}
    },
    //添加信号
    addSlot:function(){
    	
    },
    //移除信号
    removeSlot:function(){
    	
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){

    }
};

var FriendListLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Panel_MyFriend:null,
	Image_Server:null,
	Button_haoyoushangxian:null,
	Image_limit:null,
	Button_yiwen1:null,
	Label_haoyoushangxian:null,
	Button_wodehaoyou:null,
	Button_zhuizongliebiao:null,
	Button_linshihaoyou:null,
	Button_close:null,
	Button_shuaxin:null,
	Button_leftArrow:null,
	Button_rightArrow:null,
	Label_fanye:null,
	Panel_haoyoushangxian:null,
	Panel_155:null,
	Label_haoyoushangxian:null,
	Button_closeShangxian:null,
	Panel_TableView:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["FriendList"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_MyFriend = CocoStudio.getComponent(this.view, "Panel_MyFriend");//Panel
		this.Image_Server = CocoStudio.getComponent(this.view, "Image_Server");//Panel
		this.Button_haoyoushangxian = CocoStudio.getComponent(this.view, "Button_haoyoushangxian");//Button
		this.Image_limit = CocoStudio.getComponent(this.view, "Image_limit");//ImageView
		this.Button_yiwen1 = CocoStudio.getComponent(this.view, "Button_yiwen1");//Button
		this.Label_haoyoushangxian = CocoStudio.getComponent(this.view, "Label_haoyoushangxian");//Label
		this.Button_wodehaoyou = CocoStudio.getComponent(this.view, "Button_wodehaoyou");//Button
		this.Button_zhuizongliebiao = CocoStudio.getComponent(this.view, "Button_zhuizongliebiao");//Button
		this.Button_linshihaoyou = CocoStudio.getComponent(this.view, "Button_linshihaoyou");//Button
		this.Button_close = CocoStudio.getComponent(this.view, "Button_close");//Button
		this.Button_shuaxin = CocoStudio.getComponent(this.view, "Button_shuaxin");//Button
		this.Button_leftArrow = CocoStudio.getComponent(this.view, "Button_leftArrow");//Button
		this.Button_rightArrow = CocoStudio.getComponent(this.view, "Button_rightArrow");//Button
		this.Label_fanye = CocoStudio.getComponent(this.view, "Label_fanye");//Label
		this.Panel_haoyoushangxian = CocoStudio.getComponent(this.view, "Panel_haoyoushangxian");//Panel
		this.Panel_155 = CocoStudio.getComponent(this.view, "Panel_155");//Panel
		this.Label_haoyoushangxian = CocoStudio.getComponent(this.view, "Label_haoyoushangxian");//Label
		this.Button_closeShangxian = CocoStudio.getComponent(this.view, "Button_closeShangxian");//Button
		this.Panel_TableView = CocoStudio.getComponent(this.view, "Panel_TableView");//Panel
	},

    initLayer:function(){
		var gui = GUI_FRIENDLIST; 
		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/FriendList.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/FriendList.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
			//适配方案 960x640  
			this.view = CocoStudio.createView("res/FriendList_960_640.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}
	},
    
	callback_Button_haoyoushangxian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_yiwen1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_wodehaoyou:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_zhuizongliebiao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_linshihaoyou:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

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

	callback_Button_shuaxin:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_leftArrow:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_rightArrow:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_haoyoushangxian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_155:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_closeShangxian:function(pSender, event){
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

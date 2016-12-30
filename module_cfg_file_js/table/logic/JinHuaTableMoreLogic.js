var JinHuaTableMoreLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_94:null,
	Panel_buttonGroup_left:null,
	Panel_btnList_Left:null,
	Image_diban:null,
	Button_cardType:null,
	Image_paixingzi:null,
	Button_setting:null,
	Image_shezhizi:null,
	Button_changeTable:null,
	Image_huanzhuozi:null,
	Button_lookOn:null,
	Image_pangguanzi:null,
	Button_lookOnNextGame:null,
	Image_xiajupangguanzi:null,
	Image_fangkuai:null,
	Image_duihao:null,
	Button_exit:null,
	Image_tuichuzi:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["JinHuaTableMore"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_94 = CocoStudio.getComponent(this.view, "Panel_94");//Panel
		this.Panel_buttonGroup_left = CocoStudio.getComponent(this.view, "Panel_buttonGroup_left");//Panel
		this.Panel_btnList_Left = CocoStudio.getComponent(this.view, "Panel_btnList_Left");//Panel
		this.Image_diban = CocoStudio.getComponent(this.view, "Image_diban");//ImageView
		this.Button_cardType = CocoStudio.getComponent(this.view, "Button_cardType");//Button
		this.Image_paixingzi = CocoStudio.getComponent(this.view, "Image_paixingzi");//ImageView
		this.Button_setting = CocoStudio.getComponent(this.view, "Button_setting");//Button
		this.Image_shezhizi = CocoStudio.getComponent(this.view, "Image_shezhizi");//ImageView
		this.Button_changeTable = CocoStudio.getComponent(this.view, "Button_changeTable");//Button
		this.Image_huanzhuozi = CocoStudio.getComponent(this.view, "Image_huanzhuozi");//ImageView
		this.Button_lookOn = CocoStudio.getComponent(this.view, "Button_lookOn");//Button
		this.Image_pangguanzi = CocoStudio.getComponent(this.view, "Image_pangguanzi");//ImageView
		this.Button_lookOnNextGame = CocoStudio.getComponent(this.view, "Button_lookOnNextGame");//Button
		this.Image_xiajupangguanzi = CocoStudio.getComponent(this.view, "Image_xiajupangguanzi");//ImageView
		this.Image_fangkuai = CocoStudio.getComponent(this.view, "Image_fangkuai");//ImageView
		this.Image_duihao = CocoStudio.getComponent(this.view, "Image_duihao");//ImageView
		this.Button_exit = CocoStudio.getComponent(this.view, "Button_exit");//Button
		this.Image_tuichuzi = CocoStudio.getComponent(this.view, "Image_tuichuzi");//ImageView
	},

    initLayer:function(){
		var gui = GUI_JINHUATABLEMORE; 
		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/JinHuaTableMore.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/JinHuaTableMore.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL); 
		}
	},
    
	callback_Panel_94:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_cardType:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_setting:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_changeTable:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_lookOn:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_lookOnNextGame:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_exit:function(pSender, event){
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

var MessageListLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	btn_back:null,
	Image_bg:null,
	Image_youxiang:null,
	Panel_list:null,
	Button_leftArrow:null,
	Button_rightArrow:null,
	Label_fanye:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["MessageList"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.btn_back = CocoStudio.getComponent(this.view, "btn_back");//Button
		this.Image_bg = CocoStudio.getComponent(this.view, "Image_bg");//Panel
		this.Image_youxiang = CocoStudio.getComponent(this.view, "Image_youxiang");//ImageView
		this.Panel_list = CocoStudio.getComponent(this.view, "Panel_list");//Panel
		this.Button_leftArrow = CocoStudio.getComponent(this.view, "Button_leftArrow");//Button
		this.Button_rightArrow = CocoStudio.getComponent(this.view, "Button_rightArrow");//Button
		this.Label_fanye = CocoStudio.getComponent(this.view, "Label_fanye");//Label
	},

    initLayer:function(){
		var gui = GUI_MESSAGELIST; 
		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/MessageList.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/MessageList.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL); 
		}
	},
    
	callback_btn_back:function(pSender, event){
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

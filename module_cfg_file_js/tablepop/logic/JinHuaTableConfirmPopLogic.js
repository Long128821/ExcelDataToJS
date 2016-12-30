var JinHuaTableConfirmPopLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	panel_parent:null,
	panel:null,
	btn_confirm:null,
	tv_content:null,
	btn_cancel:null,
	label_title:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["JinHuaTableConfirmPop"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.panel_parent = CocoStudio.getComponent(this.view, "panel_parent");//Panel
		this.panel = CocoStudio.getComponent(this.view, "panel");//Panel
		this.btn_confirm = CocoStudio.getComponent(this.view, "btn_confirm");//Button
		this.tv_content = CocoStudio.getComponent(this.view, "tv_content");//Label
		this.btn_cancel = CocoStudio.getComponent(this.view, "btn_cancel");//Button
		this.label_title = CocoStudio.getComponent(this.view, "label_title");//Label
	},

    initLayer:function(){
		var gui = GUI_JINHUATABLECONFIRMPOP; 
		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/JinHuaTableConfirmPop.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/JinHuaTableConfirmPop.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL); 
		}
	},
    
	callback_btn_confirm:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_cancel:function(pSender, event){
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

var VipInfoLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_127:null,
	Image_yueka:null,
	Button_left:null,
	Button_right:null,
	Image_tou:null,
	Label_suoming:null,
	Button_close:null,
	Panel_jindutiao:null,
	ProgressBar_vip:null,
	Label_prograss:null,
	Image_now_vip:null,
	AtlasLabel_now_vip_level:null,
	Image_now_vip_highsign:null,
	Image_now_vip_lowsign:null,
	AtlasLabel_now_lowsign:null,
	Image_next_vip:null,
	AtlasLabel_next_vip_level:null,
	Image_next_vip_highsign:null,
	Image_next_vip_lowsign:null,
	AtlasLabel_next_lowsign:null,
	Label_needRecharge:null,
	Button_recharge:null,
	Image_page:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["VipInfo"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_127 = CocoStudio.getComponent(this.view, "Panel_127");//Panel
		this.Image_yueka = CocoStudio.getComponent(this.view, "Image_yueka");//ImageView
		this.Button_left = CocoStudio.getComponent(this.view, "Button_left");//Button
		this.Button_right = CocoStudio.getComponent(this.view, "Button_right");//Button
		this.Image_tou = CocoStudio.getComponent(this.view, "Image_tou");//ImageView
		this.Label_suoming = CocoStudio.getComponent(this.view, "Label_suoming");//Label
		this.Button_close = CocoStudio.getComponent(this.view, "Button_close");//Button
		this.Panel_jindutiao = CocoStudio.getComponent(this.view, "Panel_jindutiao");//Panel
		this.ProgressBar_vip = CocoStudio.getComponent(this.view, "ProgressBar_vip");//LoadingBar
		this.Label_prograss = CocoStudio.getComponent(this.view, "Label_prograss");//Label
		this.Image_now_vip = CocoStudio.getComponent(this.view, "Image_now_vip");//ImageView
		this.AtlasLabel_now_vip_level = CocoStudio.getComponent(this.view, "AtlasLabel_now_vip_level");//LabelAtlas
		this.Image_now_vip_highsign = CocoStudio.getComponent(this.view, "Image_now_vip_highsign");//ImageView
		this.Image_now_vip_lowsign = CocoStudio.getComponent(this.view, "Image_now_vip_lowsign");//ImageView
		this.AtlasLabel_now_lowsign = CocoStudio.getComponent(this.view, "AtlasLabel_now_lowsign");//LabelAtlas
		this.Image_next_vip = CocoStudio.getComponent(this.view, "Image_next_vip");//ImageView
		this.AtlasLabel_next_vip_level = CocoStudio.getComponent(this.view, "AtlasLabel_next_vip_level");//LabelAtlas
		this.Image_next_vip_highsign = CocoStudio.getComponent(this.view, "Image_next_vip_highsign");//ImageView
		this.Image_next_vip_lowsign = CocoStudio.getComponent(this.view, "Image_next_vip_lowsign");//ImageView
		this.AtlasLabel_next_lowsign = CocoStudio.getComponent(this.view, "AtlasLabel_next_lowsign");//LabelAtlas
		this.Label_needRecharge = CocoStudio.getComponent(this.view, "Label_needRecharge");//Label
		this.Button_recharge = CocoStudio.getComponent(this.view, "Button_recharge");//Button
		this.Image_page = CocoStudio.getComponent(this.view, "Image_page");//ImageView
	},

    initLayer:function(){
		var gui = GUI_VIPINFO; 
		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/VipInfo.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/VipInfo.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL); 
		}
	},
    
	callback_Button_left:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_right:function(pSender, event){
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

	callback_Button_recharge:function(pSender, event){
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

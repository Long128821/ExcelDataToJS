var ChangeInfoPopLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_127:null,
	Panel_2:null,
	Image_beijing:null,
	Image_beijing1:null,
	Label_upTips:null,
	Label_downTips:null,
	Label_downTips2:null,
	Image_shurukuang:null,
	TextField_NickName:null,
	Label_content:null,
	Image_mimashurukuang:null,
	TextField_Password:null,
	Label_content:null,
	Panel_xingbie:null,
	Label_xingbie:null,
	Image_female:null,
	Label_nv:null,
	Image_male:null,
	Label_nan:null,
	Image_secrecy:null,
	Label_baomi:null,
	Button_quxiao:null,
	Image_quxiao:null,
	Button_queding:null,
	Image_queding:null,
	Panel_36:null,
	Label_shouji:null,
	Button_shouji_bind:null,
	Label_bindingPhone:null,
	Button_shouji_unbind:null,
	Panel_37:null,
	Label_weixin:null,
	Button_weixin_bind:null,
	Label_bindingWX:null,
	Button_weixin_binded:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["ChangeInfoPop"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_127 = CocoStudio.getComponent(this.view, "Panel_127");//Panel
		this.Panel_2 = CocoStudio.getComponent(this.view, "Panel_2");//Panel
		this.Image_beijing = CocoStudio.getComponent(this.view, "Image_beijing");//ImageView
		this.Image_beijing1 = CocoStudio.getComponent(this.view, "Image_beijing1");//ImageView
		this.Label_upTips = CocoStudio.getComponent(this.view, "Label_upTips");//Label
		this.Label_downTips = CocoStudio.getComponent(this.view, "Label_downTips");//Label
		this.Label_downTips2 = CocoStudio.getComponent(this.view, "Label_downTips2");//Label
		this.Image_shurukuang = CocoStudio.getComponent(this.view, "Image_shurukuang");//ImageView
		this.TextField_NickName = CocoStudio.getComponent(this.view, "TextField_NickName");//TextField
		this.Label_content = CocoStudio.getComponent(this.view, "Label_content");//Label
		this.Image_mimashurukuang = CocoStudio.getComponent(this.view, "Image_mimashurukuang");//ImageView
		this.TextField_Password = CocoStudio.getComponent(this.view, "TextField_Password");//TextField
		this.Label_content = CocoStudio.getComponent(this.view, "Label_content");//Label
		this.Panel_xingbie = CocoStudio.getComponent(this.view, "Panel_xingbie");//Panel
		this.Label_xingbie = CocoStudio.getComponent(this.view, "Label_xingbie");//Label
		this.Image_female = CocoStudio.getComponent(this.view, "Image_female");//ImageView
		this.Label_nv = CocoStudio.getComponent(this.view, "Label_nv");//Label
		this.Image_male = CocoStudio.getComponent(this.view, "Image_male");//ImageView
		this.Label_nan = CocoStudio.getComponent(this.view, "Label_nan");//Label
		this.Image_secrecy = CocoStudio.getComponent(this.view, "Image_secrecy");//ImageView
		this.Label_baomi = CocoStudio.getComponent(this.view, "Label_baomi");//Label
		this.Button_quxiao = CocoStudio.getComponent(this.view, "Button_quxiao");//Button
		this.Image_quxiao = CocoStudio.getComponent(this.view, "Image_quxiao");//ImageView
		this.Button_queding = CocoStudio.getComponent(this.view, "Button_queding");//Button
		this.Image_queding = CocoStudio.getComponent(this.view, "Image_queding");//ImageView
		this.Panel_36 = CocoStudio.getComponent(this.view, "Panel_36");//Panel
		this.Label_shouji = CocoStudio.getComponent(this.view, "Label_shouji");//Label
		this.Button_shouji_bind = CocoStudio.getComponent(this.view, "Button_shouji_bind");//Button
		this.Label_bindingPhone = CocoStudio.getComponent(this.view, "Label_bindingPhone");//Label
		this.Button_shouji_unbind = CocoStudio.getComponent(this.view, "Button_shouji_unbind");//Button
		this.Panel_37 = CocoStudio.getComponent(this.view, "Panel_37");//Panel
		this.Label_weixin = CocoStudio.getComponent(this.view, "Label_weixin");//Label
		this.Button_weixin_bind = CocoStudio.getComponent(this.view, "Button_weixin_bind");//Button
		this.Label_bindingWX = CocoStudio.getComponent(this.view, "Label_bindingWX");//Label
		this.Button_weixin_binded = CocoStudio.getComponent(this.view, "Button_weixin_binded");//Button
	},

    initLayer:function(){
		var gui = GUI_CHANGEINFOPOP; 
		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/ChangeInfoPop.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/ChangeInfoPop.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL); 
		}
	},
    
	callback_Panel_127:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_female:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_male:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_secrecy:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_quxiao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_queding:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_shouji_bind:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_shouji_unbind:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_weixin_bind:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_weixin_binded:function(pSender, event){
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

var RenWuLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Image_MianBan:null,
	Panel_35:null,
	Image_AchievementTask:null,
	Image_AchievementTask_word:null,
	Image_EverDayTask:null,
	Image_EverDayTask_word:null,
	Label_TaskName:null,
	Label_Content:null,
	Label_Award:null,
	Label_go:null,
	btn_Close:null,
	Label_FinishMark:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["RenWu"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Image_MianBan = CocoStudio.getComponent(this.view, "Image_MianBan");//ImageView
		this.Panel_35 = CocoStudio.getComponent(this.view, "Panel_35");//Panel
		this.Image_AchievementTask = CocoStudio.getComponent(this.view, "Image_AchievementTask");//ImageView
		this.Image_AchievementTask_word = CocoStudio.getComponent(this.view, "Image_AchievementTask_word");//ImageView
		this.Image_EverDayTask = CocoStudio.getComponent(this.view, "Image_EverDayTask");//ImageView
		this.Image_EverDayTask_word = CocoStudio.getComponent(this.view, "Image_EverDayTask_word");//ImageView
		this.Label_TaskName = CocoStudio.getComponent(this.view, "Label_TaskName");//Label
		this.Label_Content = CocoStudio.getComponent(this.view, "Label_Content");//Label
		this.Label_Award = CocoStudio.getComponent(this.view, "Label_Award");//Label
		this.Label_go = CocoStudio.getComponent(this.view, "Label_go");//Label
		this.btn_Close = CocoStudio.getComponent(this.view, "btn_Close");//Button
		this.Label_FinishMark = CocoStudio.getComponent(this.view, "Label_FinishMark");//Label
	},

    initLayer:function(){
		var gui = GUI_RENWU; 
		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/RenWu.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/RenWu.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
			//适配方案 960x640  
			this.view = CocoStudio.createView("res/RenWu_960_640.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}
	},
    
	callback_Image_AchievementTask:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_EverDayTask:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_Close:function(pSender, event){
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

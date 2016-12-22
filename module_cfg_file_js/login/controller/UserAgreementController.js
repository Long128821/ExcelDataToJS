var UserAgreementController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        UserAgreementLogic.view= null;
    },

    getLayer:function(){
        return UserAgreementLogic.view;
    },

    createView:function(){
        UserAgreementLogic.createView();
        //Frameworks.setOnKeypadEventListener(UserAgreementLogic.view, UserAgreementLogic.onKeypad);
    },
    
    requestMsg:function(){
    	UserAgreementLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	UserAgreementLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		UserAgreementLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("UserAgreementLogic#", CocoStudio.getComponent(UserAgreementLogic.view,"btn_close"), UserAgreementLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(UserAgreementLogic.view,"UserAgreementLogic#btn_close"), UserAgreementLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},
	//层级
	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    //休眠
    sleepModule:function(){
		//Frameworks.releaseOnKeypadEventListener(UserAgreementLogic.view);
		UserAgreementLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(UserAgreementLogic.view, UserAgreementLogic.onKeypad);
        UserAgreementLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(UserAgreementLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(UserAgreementLogic);
			UserAgreementLogic.releaseData();
		}
	
		UserAgreementLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});

var DeleteUserController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        DeleteUserLogic.view= null;
    },

    getLayer:function(){
        return DeleteUserLogic.view;
    },

    createView:function(){
        DeleteUserLogic.createView();
        //Frameworks.setOnKeypadEventListener(DeleteUserLogic.view, DeleteUserLogic.onKeypad);
    },
    
    requestMsg:function(){
    	DeleteUserLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	DeleteUserLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		DeleteUserLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("DeleteUserLogic#", CocoStudio.getComponent(DeleteUserLogic.view,"btn_close"), DeleteUserLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("DeleteUserLogic#", CocoStudio.getComponent(DeleteUserLogic.view,"btn_go"), DeleteUserLogic.callback_btn_go, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(DeleteUserLogic.view,"DeleteUserLogic#btn_close"), DeleteUserLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(DeleteUserLogic.view,"DeleteUserLogic#btn_go"), DeleteUserLogic.callback_btn_go, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(DeleteUserLogic.view);
		DeleteUserLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(DeleteUserLogic.view, DeleteUserLogic.onKeypad);
        DeleteUserLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(DeleteUserLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(DeleteUserLogic);
			DeleteUserLogic.releaseData();
		}
	
		DeleteUserLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});

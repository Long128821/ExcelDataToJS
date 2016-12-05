var MoreController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        MoreLogic.view= null;
    },

    getLayer:function(){
        return MoreLogic.view;
    },

    createView:function(){
        MoreLogic.createView();
        //Frameworks.setOnKeypadEventListener(MoreLogic.view, MoreLogic.onKeypad);
    },
    
    requestMsg:function(){
    	MoreLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	MoreLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		MoreLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Panel_20"), MoreLogic.callback_Panel_20, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Panel_23"), MoreLogic.callback_Panel_23, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Panel_20"), MoreLogic.callback_Panel_20, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Panel_23"), MoreLogic.callback_Panel_23, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
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
		//Frameworks.releaseOnKeypadEventListener(MoreLogic.view);
		MoreLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(MoreLogic.view, MoreLogic.onKeypad);
        MoreLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(MoreLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(MoreLogic);
			MoreLogic.releaseData();
		}
	
		MoreLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});

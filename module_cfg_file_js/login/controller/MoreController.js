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
    
    addSlot:function(){
    	MoreLogic.addSlot();
    },

	removeSlot:function(){
		MoreLogic.removeSlot();
	},
    
    addCallback:function(){
		Frameworks.bindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Panel_20"), MoreLogic.callback_Panel_20, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Panel_23"), MoreLogic.callback_Panel_23, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
    },
    
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Panel_20"), MoreLogic.callback_Panel_20, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(MoreLogic.view,"Panel_23"), MoreLogic.callback_Panel_23, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
		//Frameworks.releaseOnKeypadEventListener(MoreLogic.view);
		MoreLogic.view.setTouchEnabled(false);
		Frameworks.emit(signal.common.Signal_SleepModule_Done);
    },

    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(MoreLogic.view, MoreLogic.onKeypad);
        MoreLogic.view.setTouchEnabled(true);
        this.addCallback();
    },

    destroyModule:function(){
        //Frameworks.releaseOnKeypadEventListener(MoreLogic.view);
		this.destroy();

		if(destroyType == DESTORY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTORY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(MoreLogic);
			MoreLogic.releaseData();
		}
	
		MoreLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(signal.common.Signal_DestroyModule_Done);
    }
});

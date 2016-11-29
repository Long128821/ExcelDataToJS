var #controllerName# = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        #logicName#.view= null;
    },

    getLayer:function(){
        return #logicName#.view;
    },

    createView:function(){
        #logicName#.createView();
        framework.setOnKeypadEventListener(#logicName#.view, #logicName#.onKeypad);
    },
    
    requestMsg:function(){
    	#logicName#.requestMsg();
    },
    
    addSlot:function(){
    	#logicName#.addSlot();
    },

	removeSlot:function(){
		#logicName#.removeSlot();
	},
    
    addCallback:function(){
#addCallback#
    },
    
    removeCallback:function(){
#removeCallback#
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
		framework.releaseOnKeypadEventListener(#logicName#.view);
		#logicName#.view.setTouchEnabled(false);
		framework.emit(signal.common.Signal_SleepModule_Done);
    },

    wakeModule:function(){
    	framework.setOnKeypadEventListener(#logicName#.view, #logicName#.onKeypad);
        #logicName#.view.setTouchEnabled(true);
    },

    destroyModule:function(){
        framework.releaseOnKeypadEventListener(#logicName#.view);
		this.destroy();

		if(destroyType == DESTORY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTORY_TYPE_CLEAN){
			//销毁数据
			framework.moduleCleanUp(#logicName#);
			#logicName#.releaseData();
		}
	
		#logicName#.view.removeFromParentAndCleanup(true);
		this.reset();
	
		framework.emit(signal.common.Signal_DestroyModule_Done);
    }
});
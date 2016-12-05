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
        //Frameworks.setOnKeypadEventListener(#logicName#.view, #logicName#.onKeypad);
    },
    
    requestMsg:function(){
    	#logicName#.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	#logicName#.addSlot();
    },
    //移除信号
	removeSlot:function(){
		#logicName#.removeSlot();
	},
    //添加监听
    addCallback:function(){
#addCallback#
    },
    //移除监听
    removeCallback:function(){
#removeCallback#
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
		//Frameworks.releaseOnKeypadEventListener(#logicName#.view);
		#logicName#.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(#logicName#.view, #logicName#.onKeypad);
        #logicName#.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(#logicName#.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(#logicName#);
			#logicName#.releaseData();
		}
	
		#logicName#.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
var LoadingController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        LoadingLogic.view= null;
    },

    getLayer:function(){
        return LoadingLogic.view;
    },

    createView:function(){
        LoadingLogic.createView();
        //Frameworks.setOnKeypadEventListener(LoadingLogic.view, LoadingLogic.onKeypad);
    },
    
    requestMsg:function(){
    	LoadingLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	LoadingLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		LoadingLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){

    },
    //移除监听
    removeCallback:function(){

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
		//Frameworks.releaseOnKeypadEventListener(LoadingLogic.view);
		LoadingLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(LoadingLogic.view, LoadingLogic.onKeypad);
        LoadingLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(LoadingLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(LoadingLogic);
			LoadingLogic.releaseData();
		}
	
		LoadingLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});

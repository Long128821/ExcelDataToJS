var #logicName#= {
    view:null,//视图
    
#Definition#
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["#name#"]["Layer"]);
        
        this.initView();
    },
    
	#InitViewfunction#

    #InitLayerfunction#
    
#callbacks#
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
    
    }
};
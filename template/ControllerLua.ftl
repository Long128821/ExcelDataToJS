module(...,package.seeall);

--Load.LuaRequire("script.module.#moduleName#.logic.#logicName#");

#controllerName# = class("#controllerName#",BaseController);
#controllerName#.__index = #controllerName#;

#controllerName#.moduleLayer = nil;

function #controllerName#:reset()
	#logicName#.view = nil;
end

function #controllerName#:getLayer()
	return #logicName#.view;
end

function #controllerName#:createView()
	#logicName#.createView();
	framework.setOnKeypadEventListener(#logicName#.view, #logicName#.onKeypad);
end

function #controllerName#:requestMsg()
	#logicName#.requestMsg();
end

function #controllerName#:addSlot()
	#logicName#.addSlot();
end

function #controllerName#:removeSlot()
	#logicName#.removeSlot();
end

function #controllerName#:addCallback()
	#addCallback#
end

function #controllerName#:removeCallback()
	#removeCallback#
end

function #controllerName#:setModuleLayer(moduleLayer)
	self.moduleLayer = moduleLayer;
end

function #controllerName#:getModuleLayer(moduleLayer)
	return self.moduleLayer;
end

function #controllerName#:destoryModule(destroyType)
	framework.releaseOnKeypadEventListener(#logicName#.view);
	self:destroy();

	if destroyType == DESTORY_TYPE_EFFECT then
	--不销毁数据
	elseif destroyType == DESTORY_TYPE_CLEAN then
		--销毁数据
		framework.moduleCleanUp(#logicName#);
		#logicName#.releaseData();
	end

	#logicName#.view:removeFromParentAndCleanup(true);
	self:reset();

	framework.emit(signal.common.Signal_DestroyModule_Done);
end

function #controllerName#:sleepModule()
	framework.releaseOnKeypadEventListener(#logicName#.view);
	#logicName#.view:setTouchEnabled(false);
	framework.emit(signal.common.Signal_SleepModule_Done);
end

function #controllerName#:wakeModule()
	framework.setOnKeypadEventListener(#logicName#.view, #logicName#.onKeypad);
	#logicName#.view:setTouchEnabled(true);
end

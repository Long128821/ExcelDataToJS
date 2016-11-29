module("#logicName#",package.seeall)

view = nil;

#Definition#

function onKeypad(event)
	if event == "backClicked" then
	--返回键
	elseif event == "menuClicked" then
	--菜单键
	end
end

--[[--
--初始化当前界面
--]]
#InitLayerfunction#

--[[--
--初始化控件
--]]
#InitViewfunction#

function createView()
	--初始化当前界面
	initLayer();
	view:setTag(getDiffTag());

	initView();
end

function requestMsg()

end

#callbacks#

--[[--
--释放界面的私有数据
--]]
function releaseData()

end

function addSlot()
	--framework.addSlot2Signal(signal, slot)
end

function removeSlot()
	--framework.removeSlotFromSignal(signal, slot)
end
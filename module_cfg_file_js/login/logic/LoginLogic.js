module("LoginLogic",package.seeall)

view = nil;

Panel_20 = nil;--
btn_weixin_login = nil;--
btn_olduser_login = nil;--
btn_reg = nil;--
text_login = nil;--
check_agree = nil;--
img_bg = nil;--
ImageView_ip = nil;--
btn_setIp = nil;--
lable_ip_text = nil;--
Label_imei = nil;--
btn_showLog = nil;--
Image_logo = nil;--
Panel_login = nil;--
text_resetpass = nil;--
btn_more = nil;--
ImageView_username = nil;--
ImageView_password = nil;--
btn_login = nil;--
Button_login_close = nil;--


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
local function initLayer()
	local gui = GUI_LOGIN; 
	if GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT then 
		--适配方案 1136x640  
		view = cocostudio.createView("Login.json"); 
		GameConfig.setCurrentScreenResolution(view, gui, 1136, 640, kResolutionExactFit); 
	elseif GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL then 
		--适配方案 Pad加黑边  
		view = cocostudio.createView("Login.json"); 
		GameConfig.setCurrentScreenResolution(view, gui, 1136, 640, kResolutionShowAll); 
	elseif GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT and GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL then 
		--适配方案 960x640  
		view = cocostudio.createView("Login_960_640.json"); 
		GameConfig.setCurrentScreenResolution(view, gui, 960, 640, kResolutionExactFit); 
	end 
end

--[[--
--初始化控件
--]]
local function initView()
	Panel_20 = cocostudio.getUIPanel(view, "Panel_20");
	btn_weixin_login = cocostudio.getUIButton(view, "btn_weixin_login");
	btn_olduser_login = cocostudio.getUIButton(view, "btn_olduser_login");
	btn_reg = cocostudio.getUIButton(view, "btn_reg");
	text_login = cocostudio.getUIImageView(view, "text_login");
	check_agree = cocostudio.getUICheckBox(view, "check_agree");
	img_bg = cocostudio.getUIImageView(view, "img_bg");
	ImageView_ip = cocostudio.getUIImageView(view, "ImageView_ip");
	btn_setIp = cocostudio.getUIButton(view, "btn_setIp");
	lable_ip_text = cocostudio.getUILabel(view, "lable_ip_text");
	Label_imei = cocostudio.getUILabel(view, "Label_imei");
	btn_showLog = cocostudio.getUIButton(view, "btn_showLog");
	Image_logo = cocostudio.getUIImageView(view, "Image_logo");
	Panel_login = cocostudio.getUIPanel(view, "Panel_login");
	text_resetpass = cocostudio.getUIImageView(view, "text_resetpass");
	btn_more = cocostudio.getUIImageView(view, "btn_more");
	ImageView_username = cocostudio.getUIImageView(view, "ImageView_username");
	ImageView_password = cocostudio.getUIImageView(view, "ImageView_password");
	btn_login = cocostudio.getUIButton(view, "btn_login");
	Button_login_close = cocostudio.getUIButton(view, "Button_login_close");
end

function createView()
	--初始化当前界面
	initLayer();
	view:setTag(getDiffTag());

	initView();
end

function requestMsg()

end

function callback_btn_weixin_login(component)
	if component == PUSH_DOWN then
	--按下

	elseif component == RELEASE_UP then
	--抬起

	elseif component == CANCEL_UP then
	--取消

	end
end

function callback_btn_olduser_login(component)
	if component == PUSH_DOWN then
	--按下

	elseif component == RELEASE_UP then
	--抬起

	elseif component == CANCEL_UP then
	--取消

	end
end

function callback_btn_reg(component)
	if component == PUSH_DOWN then
	--按下

	elseif component == RELEASE_UP then
	--抬起

	elseif component == CANCEL_UP then
	--取消

	end
end

function callback_text_login(component)
	if component == PUSH_DOWN then
	--按下

	elseif component == RELEASE_UP then
	--抬起

	elseif component == CANCEL_UP then
	--取消

	end
end

function callback_btn_setIp(component)
	if component == PUSH_DOWN then
	--按下

	elseif component == RELEASE_UP then
	--抬起

	elseif component == CANCEL_UP then
	--取消

	end
end

function callback_btn_showLog(component)
	if component == PUSH_DOWN then
	--按下

	elseif component == RELEASE_UP then
	--抬起

	elseif component == CANCEL_UP then
	--取消

	end
end

function callback_text_resetpass(component)
	if component == PUSH_DOWN then
	--按下

	elseif component == RELEASE_UP then
	--抬起

	elseif component == CANCEL_UP then
	--取消

	end
end

function callback_btn_more(component)
	if component == PUSH_DOWN then
	--按下

	elseif component == RELEASE_UP then
	--抬起

	elseif component == CANCEL_UP then
	--取消

	end
end

function callback_btn_login(component)
	if component == PUSH_DOWN then
	--按下

	elseif component == RELEASE_UP then
	--抬起

	elseif component == CANCEL_UP then
	--取消

	end
end

function callback_Button_login_close(component)
	if component == PUSH_DOWN then
	--按下

	elseif component == RELEASE_UP then
	--抬起

	elseif component == CANCEL_UP then
	--取消

	end
end



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

var JinHuaTableLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_94:null,
	Panel_20:null,
	Panel_PrivateRoom:null,
	Label_CountDownTime:null,
	Panel_roominfo:null,
	Label_RoomNumber:null,
	Label_RoomRule:null,
	Label_MinCoinTxt:null,
	Label_MinCoin:null,
	Label_Holder:null,
	Label_HolderName:null,
	Panel_bg:null,
	Image_bg_left:null,
	Image_bg_right:null,
	Image_title_left:null,
	Image_title_right:null,
	Label_time:null,
	Image_dianchi:null,
	ProgressBar_battery:null,
	Panel_zongxiazhu:null,
	Panel_lunshu:null,
	Label_round:null,
	Label_allRound:null,
	Image_lunshu:null,
	Panel_danzhu:null,
	Label_baseCoin:null,
	Image_danzhu:null,
	Panel_zongxiazhu:null,
	Image_heidi:null,
	Label_sumCoin:null,
	Panel_quickchat:null,
	Image_dibutiao:null,
	Panel_waiting:null,
	Button_geweihao:null,
	Label_geweihao:null,
	Button_wolaishouqian:null,
	Label_wolaishouqian:null,
	Button_guarenlaile:null,
	Label_guarenlaile:null,
	Button_waiting_emo1:null,
	Button_waiting_emo2:null,
	Panel_afterfold:null,
	Button_ptcl:null,
	Label_ptcl:null,
	Button_snh:null,
	Label_snh:null,
	Button_xfnym:null,
	Label_xfnym:null,
	Button_afterfold_emo1:null,
	Button_afterfold_emo2:null,
	Panel_win:null,
	Button_xiexie:null,
	Label_xiexie:null,
	Button_zhunixiaju:null,
	Label_zhunixiaju:null,
	Button_laozi:null,
	Label_laozi:null,
	Button_win_emo1:null,
	Button_win_emo2:null,
	Panel_lose:null,
	Button_yunqicha:null,
	Label_yunqicha:null,
	Button_dadebucuo:null,
	Label_dadebucuo:null,
	Button_nizabushangtian:null,
	Label_nizabushangtian:null,
	Button_lose_emo1:null,
	Button_lose_emo2:null,
	Panel_EXP:null,
	Label_level:null,
	Label_exp:null,
	Image_exp_bg:null,
	ProgressBar_exp:null,
	Image_exp_bar1:null,
	Image_exp_bar2:null,
	Image_exp_bar3:null,
	Panel_dibu:null,
	Image_dibutiao:null,
	Button_tableChat:null,
	Panel_wait:null,
	Button_wait_fold:null,
	Image_qipaizi:null,
	Button_wait_pk:null,
	Image_bipaizi:null,
	Button_wait_raise:null,
	Image_jiazhuzi:null,
	Button_wait_alwaysbet:null,
	Image_genzhuzi:null,
	Panel_otherturn:null,
	Button_otherturn_fold:null,
	Image_qipaizi:null,
	Button_otherturn_pk:null,
	Image_bipaizi:null,
	Button_otherturn_raise:null,
	Image_jiazhuzi:null,
	Button_otherturn_alwaysbet:null,
	Image_genzhuzi:null,
	Image_xia1:null,
	Image_alwaysbet:null,
	Panel_myturn:null,
	Button_mine_fold:null,
	Image_qipaizi:null,
	Button_mine_pk:null,
	Image_bipaizi:null,
	Button_mine_raise:null,
	Image_mine_raise:null,
	Button_mine_call:null,
	Image_genzhuzi:null,
	Panel_canpk:null,
	Button_canpk_fold:null,
	Image_qipaizi:null,
	Button_canpk_pk:null,
	Image_bipaizi:null,
	Button_canpk_raise:null,
	Image_canpk_raise:null,
	Button_canpk_call:null,
	Image_genzhuzi:null,
	Panel_raise:null,
	Button_raise_one:null,
	AtlasLabel_jiner1:null,
	Button_raise_two:null,
	AtlasLabel_jiner2:null,
	Button_raise_three:null,
	AtlasLabel_jiner3:null,
	Button_raise_cancel:null,
	Image_qipaizi:null,
	Panel_allin:null,
	Button_allin_fold:null,
	Image_qipaizi:null,
	Button_allin_pk:null,
	Image_bipaizi:null,
	Button_allin_allin:null,
	Image_jiazhuzi:null,
	Button_allin_call:null,
	Image_genzhuzi:null,
	Panel_onlyraise:null,
	Button_onlyraise_fold:null,
	Image_qipaizi:null,
	Button_onlyraise_pk:null,
	Image_bipaizi:null,
	Button_onlyraise_raise:null,
	Image_jiazhuzi:null,
	Button_onlyraise_call:null,
	Image_genzhuzi:null,
	Panel_onlycall:null,
	Button_onlycall_fold:null,
	Image_qipaizi:null,
	Button_onlycall_pk:null,
	Image_bipaizi:null,
	Button_onlycall_raise:null,
	Image_jiazhuzi:null,
	Button_onlycall_call:null,
	Image_genzhuzi:null,
	Panel_onlypk:null,
	Button_onlypk_fold:null,
	Image_qipaizi:null,
	Button_onlypk_pk:null,
	Image_bipaizi:null,
	Button_onlypk_raise:null,
	Image_jiazhuzi:null,
	Button_onlypk_call:null,
	Image_genzhuzi:null,
	Panel_buttonGroup_right:null,
	Button_tequan:null,
	Image_tequan:null,
	Button_gift:null,
	Image_libaotu:null,
	Button_changeCard:null,
	Image_huanpai:null,
	Image_huanpaikahongdian:null,
	Label_changeCardNum:null,
	Button_noCompare:null,
	Image_jinbitu:null,
	Image_huanpaikahongdian:null,
	Label_noCompareNum:null,
	btn_libao:null,
	btn_renwu:null,
	btn_onlinebonus:null,
	Image_onlinebonus:null,
	Image_daojishi_bg:null,
	Image_onlinebonus_lingqu:null,
	Label_onlinebonus_daojishi:null,
	Image_onlinebonus_shine:null,
	Panel_buttonGroup_left:null,
	Panel_btnList_Left:null,
	Button_more:null,
	ImageView_Notice:null,
	panel_chat:null,
	Panel_matchBegin:null,
	Label_matchBeginTitle:null,
	Button_goMatch:null,
	AtlasLabel_matchTimer:null,
	Button_stayTable:null,
	Image_matchBegin:null,
	Panel_match:null,
	Button_barrage:null,
	Image_barragelock:null,
	Panel_AwardBar:null,
	Label_FirstAward:null,
	Label_FirstAwardNum:null,
	Label_AllAward:null,
	Label_AllAwardNum:null,
	Label_SecondAward:null,
	Label_SecondAwardNum:null,
	Panel_233:null,
	Label_matchBaseCoin:null,
	Label_matchBaseNum:null,
	Label_matchRound:null,
	Label_matchPkRound:null,
	Label_waiting:null,
	Label_match_name:null,
	Panel_234:null,
	Button_quickMatch:null,
	Button_matchRank:null,
	AtlasLabel_myMatchRank:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["JinHuaTable"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_94 = CocoStudio.getComponent(this.view, "Panel_94");//Panel
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_PrivateRoom = CocoStudio.getComponent(this.view, "Panel_PrivateRoom");//Panel
		this.Label_CountDownTime = CocoStudio.getComponent(this.view, "Label_CountDownTime");//Label
		this.Panel_roominfo = CocoStudio.getComponent(this.view, "Panel_roominfo");//Panel
		this.Label_RoomNumber = CocoStudio.getComponent(this.view, "Label_RoomNumber");//Label
		this.Label_RoomRule = CocoStudio.getComponent(this.view, "Label_RoomRule");//Label
		this.Label_MinCoinTxt = CocoStudio.getComponent(this.view, "Label_MinCoinTxt");//Label
		this.Label_MinCoin = CocoStudio.getComponent(this.view, "Label_MinCoin");//Label
		this.Label_Holder = CocoStudio.getComponent(this.view, "Label_Holder");//Label
		this.Label_HolderName = CocoStudio.getComponent(this.view, "Label_HolderName");//Label
		this.Panel_bg = CocoStudio.getComponent(this.view, "Panel_bg");//Panel
		this.Image_bg_left = CocoStudio.getComponent(this.view, "Image_bg_left");//ImageView
		this.Image_bg_right = CocoStudio.getComponent(this.view, "Image_bg_right");//ImageView
		this.Image_title_left = CocoStudio.getComponent(this.view, "Image_title_left");//ImageView
		this.Image_title_right = CocoStudio.getComponent(this.view, "Image_title_right");//ImageView
		this.Label_time = CocoStudio.getComponent(this.view, "Label_time");//Label
		this.Image_dianchi = CocoStudio.getComponent(this.view, "Image_dianchi");//ImageView
		this.ProgressBar_battery = CocoStudio.getComponent(this.view, "ProgressBar_battery");//LoadingBar
		this.Panel_zongxiazhu = CocoStudio.getComponent(this.view, "Panel_zongxiazhu");//Panel
		this.Panel_lunshu = CocoStudio.getComponent(this.view, "Panel_lunshu");//Panel
		this.Label_round = CocoStudio.getComponent(this.view, "Label_round");//Label
		this.Label_allRound = CocoStudio.getComponent(this.view, "Label_allRound");//Label
		this.Image_lunshu = CocoStudio.getComponent(this.view, "Image_lunshu");//ImageView
		this.Panel_danzhu = CocoStudio.getComponent(this.view, "Panel_danzhu");//Panel
		this.Label_baseCoin = CocoStudio.getComponent(this.view, "Label_baseCoin");//Label
		this.Image_danzhu = CocoStudio.getComponent(this.view, "Image_danzhu");//ImageView
		this.Panel_zongxiazhu = CocoStudio.getComponent(this.view, "Panel_zongxiazhu");//Panel
		this.Image_heidi = CocoStudio.getComponent(this.view, "Image_heidi");//ImageView
		this.Label_sumCoin = CocoStudio.getComponent(this.view, "Label_sumCoin");//Label
		this.Panel_quickchat = CocoStudio.getComponent(this.view, "Panel_quickchat");//Panel
		this.Image_dibutiao = CocoStudio.getComponent(this.view, "Image_dibutiao");//ImageView
		this.Panel_waiting = CocoStudio.getComponent(this.view, "Panel_waiting");//Panel
		this.Button_geweihao = CocoStudio.getComponent(this.view, "Button_geweihao");//Button
		this.Label_geweihao = CocoStudio.getComponent(this.view, "Label_geweihao");//Label
		this.Button_wolaishouqian = CocoStudio.getComponent(this.view, "Button_wolaishouqian");//Button
		this.Label_wolaishouqian = CocoStudio.getComponent(this.view, "Label_wolaishouqian");//Label
		this.Button_guarenlaile = CocoStudio.getComponent(this.view, "Button_guarenlaile");//Button
		this.Label_guarenlaile = CocoStudio.getComponent(this.view, "Label_guarenlaile");//Label
		this.Button_waiting_emo1 = CocoStudio.getComponent(this.view, "Button_waiting_emo1");//Button
		this.Button_waiting_emo2 = CocoStudio.getComponent(this.view, "Button_waiting_emo2");//Button
		this.Panel_afterfold = CocoStudio.getComponent(this.view, "Panel_afterfold");//Panel
		this.Button_ptcl = CocoStudio.getComponent(this.view, "Button_ptcl");//Button
		this.Label_ptcl = CocoStudio.getComponent(this.view, "Label_ptcl");//Label
		this.Button_snh = CocoStudio.getComponent(this.view, "Button_snh");//Button
		this.Label_snh = CocoStudio.getComponent(this.view, "Label_snh");//Label
		this.Button_xfnym = CocoStudio.getComponent(this.view, "Button_xfnym");//Button
		this.Label_xfnym = CocoStudio.getComponent(this.view, "Label_xfnym");//Label
		this.Button_afterfold_emo1 = CocoStudio.getComponent(this.view, "Button_afterfold_emo1");//Button
		this.Button_afterfold_emo2 = CocoStudio.getComponent(this.view, "Button_afterfold_emo2");//Button
		this.Panel_win = CocoStudio.getComponent(this.view, "Panel_win");//Panel
		this.Button_xiexie = CocoStudio.getComponent(this.view, "Button_xiexie");//Button
		this.Label_xiexie = CocoStudio.getComponent(this.view, "Label_xiexie");//Label
		this.Button_zhunixiaju = CocoStudio.getComponent(this.view, "Button_zhunixiaju");//Button
		this.Label_zhunixiaju = CocoStudio.getComponent(this.view, "Label_zhunixiaju");//Label
		this.Button_laozi = CocoStudio.getComponent(this.view, "Button_laozi");//Button
		this.Label_laozi = CocoStudio.getComponent(this.view, "Label_laozi");//Label
		this.Button_win_emo1 = CocoStudio.getComponent(this.view, "Button_win_emo1");//Button
		this.Button_win_emo2 = CocoStudio.getComponent(this.view, "Button_win_emo2");//Button
		this.Panel_lose = CocoStudio.getComponent(this.view, "Panel_lose");//Panel
		this.Button_yunqicha = CocoStudio.getComponent(this.view, "Button_yunqicha");//Button
		this.Label_yunqicha = CocoStudio.getComponent(this.view, "Label_yunqicha");//Label
		this.Button_dadebucuo = CocoStudio.getComponent(this.view, "Button_dadebucuo");//Button
		this.Label_dadebucuo = CocoStudio.getComponent(this.view, "Label_dadebucuo");//Label
		this.Button_nizabushangtian = CocoStudio.getComponent(this.view, "Button_nizabushangtian");//Button
		this.Label_nizabushangtian = CocoStudio.getComponent(this.view, "Label_nizabushangtian");//Label
		this.Button_lose_emo1 = CocoStudio.getComponent(this.view, "Button_lose_emo1");//Button
		this.Button_lose_emo2 = CocoStudio.getComponent(this.view, "Button_lose_emo2");//Button
		this.Panel_EXP = CocoStudio.getComponent(this.view, "Panel_EXP");//Panel
		this.Label_level = CocoStudio.getComponent(this.view, "Label_level");//Label
		this.Label_exp = CocoStudio.getComponent(this.view, "Label_exp");//Label
		this.Image_exp_bg = CocoStudio.getComponent(this.view, "Image_exp_bg");//ImageView
		this.ProgressBar_exp = CocoStudio.getComponent(this.view, "ProgressBar_exp");//LoadingBar
		this.Image_exp_bar1 = CocoStudio.getComponent(this.view, "Image_exp_bar1");//ImageView
		this.Image_exp_bar2 = CocoStudio.getComponent(this.view, "Image_exp_bar2");//ImageView
		this.Image_exp_bar3 = CocoStudio.getComponent(this.view, "Image_exp_bar3");//ImageView
		this.Panel_dibu = CocoStudio.getComponent(this.view, "Panel_dibu");//Panel
		this.Image_dibutiao = CocoStudio.getComponent(this.view, "Image_dibutiao");//ImageView
		this.Button_tableChat = CocoStudio.getComponent(this.view, "Button_tableChat");//Button
		this.Panel_wait = CocoStudio.getComponent(this.view, "Panel_wait");//Panel
		this.Button_wait_fold = CocoStudio.getComponent(this.view, "Button_wait_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_wait_pk = CocoStudio.getComponent(this.view, "Button_wait_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_wait_raise = CocoStudio.getComponent(this.view, "Button_wait_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_wait_alwaysbet = CocoStudio.getComponent(this.view, "Button_wait_alwaysbet");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_otherturn = CocoStudio.getComponent(this.view, "Panel_otherturn");//Panel
		this.Button_otherturn_fold = CocoStudio.getComponent(this.view, "Button_otherturn_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_otherturn_pk = CocoStudio.getComponent(this.view, "Button_otherturn_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_otherturn_raise = CocoStudio.getComponent(this.view, "Button_otherturn_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_otherturn_alwaysbet = CocoStudio.getComponent(this.view, "Button_otherturn_alwaysbet");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Image_xia1 = CocoStudio.getComponent(this.view, "Image_xia1");//ImageView
		this.Image_alwaysbet = CocoStudio.getComponent(this.view, "Image_alwaysbet");//ImageView
		this.Panel_myturn = CocoStudio.getComponent(this.view, "Panel_myturn");//Panel
		this.Button_mine_fold = CocoStudio.getComponent(this.view, "Button_mine_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_mine_pk = CocoStudio.getComponent(this.view, "Button_mine_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_mine_raise = CocoStudio.getComponent(this.view, "Button_mine_raise");//Button
		this.Image_mine_raise = CocoStudio.getComponent(this.view, "Image_mine_raise");//ImageView
		this.Button_mine_call = CocoStudio.getComponent(this.view, "Button_mine_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_canpk = CocoStudio.getComponent(this.view, "Panel_canpk");//Panel
		this.Button_canpk_fold = CocoStudio.getComponent(this.view, "Button_canpk_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_canpk_pk = CocoStudio.getComponent(this.view, "Button_canpk_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_canpk_raise = CocoStudio.getComponent(this.view, "Button_canpk_raise");//Button
		this.Image_canpk_raise = CocoStudio.getComponent(this.view, "Image_canpk_raise");//ImageView
		this.Button_canpk_call = CocoStudio.getComponent(this.view, "Button_canpk_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_raise = CocoStudio.getComponent(this.view, "Panel_raise");//Panel
		this.Button_raise_one = CocoStudio.getComponent(this.view, "Button_raise_one");//Button
		this.AtlasLabel_jiner1 = CocoStudio.getComponent(this.view, "AtlasLabel_jiner1");//LabelAtlas
		this.Button_raise_two = CocoStudio.getComponent(this.view, "Button_raise_two");//Button
		this.AtlasLabel_jiner2 = CocoStudio.getComponent(this.view, "AtlasLabel_jiner2");//LabelAtlas
		this.Button_raise_three = CocoStudio.getComponent(this.view, "Button_raise_three");//Button
		this.AtlasLabel_jiner3 = CocoStudio.getComponent(this.view, "AtlasLabel_jiner3");//LabelAtlas
		this.Button_raise_cancel = CocoStudio.getComponent(this.view, "Button_raise_cancel");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Panel_allin = CocoStudio.getComponent(this.view, "Panel_allin");//Panel
		this.Button_allin_fold = CocoStudio.getComponent(this.view, "Button_allin_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_allin_pk = CocoStudio.getComponent(this.view, "Button_allin_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_allin_allin = CocoStudio.getComponent(this.view, "Button_allin_allin");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_allin_call = CocoStudio.getComponent(this.view, "Button_allin_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_onlyraise = CocoStudio.getComponent(this.view, "Panel_onlyraise");//Panel
		this.Button_onlyraise_fold = CocoStudio.getComponent(this.view, "Button_onlyraise_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_onlyraise_pk = CocoStudio.getComponent(this.view, "Button_onlyraise_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_onlyraise_raise = CocoStudio.getComponent(this.view, "Button_onlyraise_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_onlyraise_call = CocoStudio.getComponent(this.view, "Button_onlyraise_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_onlycall = CocoStudio.getComponent(this.view, "Panel_onlycall");//Panel
		this.Button_onlycall_fold = CocoStudio.getComponent(this.view, "Button_onlycall_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_onlycall_pk = CocoStudio.getComponent(this.view, "Button_onlycall_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_onlycall_raise = CocoStudio.getComponent(this.view, "Button_onlycall_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_onlycall_call = CocoStudio.getComponent(this.view, "Button_onlycall_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_onlypk = CocoStudio.getComponent(this.view, "Panel_onlypk");//Panel
		this.Button_onlypk_fold = CocoStudio.getComponent(this.view, "Button_onlypk_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_onlypk_pk = CocoStudio.getComponent(this.view, "Button_onlypk_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_onlypk_raise = CocoStudio.getComponent(this.view, "Button_onlypk_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_onlypk_call = CocoStudio.getComponent(this.view, "Button_onlypk_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_buttonGroup_right = CocoStudio.getComponent(this.view, "Panel_buttonGroup_right");//Panel
		this.Button_tequan = CocoStudio.getComponent(this.view, "Button_tequan");//Button
		this.Image_tequan = CocoStudio.getComponent(this.view, "Image_tequan");//ImageView
		this.Button_gift = CocoStudio.getComponent(this.view, "Button_gift");//Button
		this.Image_libaotu = CocoStudio.getComponent(this.view, "Image_libaotu");//ImageView
		this.Button_changeCard = CocoStudio.getComponent(this.view, "Button_changeCard");//Button
		this.Image_huanpai = CocoStudio.getComponent(this.view, "Image_huanpai");//ImageView
		this.Image_huanpaikahongdian = CocoStudio.getComponent(this.view, "Image_huanpaikahongdian");//ImageView
		this.Label_changeCardNum = CocoStudio.getComponent(this.view, "Label_changeCardNum");//Label
		this.Button_noCompare = CocoStudio.getComponent(this.view, "Button_noCompare");//Button
		this.Image_jinbitu = CocoStudio.getComponent(this.view, "Image_jinbitu");//ImageView
		this.Image_huanpaikahongdian = CocoStudio.getComponent(this.view, "Image_huanpaikahongdian");//ImageView
		this.Label_noCompareNum = CocoStudio.getComponent(this.view, "Label_noCompareNum");//Label
		this.btn_libao = CocoStudio.getComponent(this.view, "btn_libao");//Button
		this.btn_renwu = CocoStudio.getComponent(this.view, "btn_renwu");//Button
		this.btn_onlinebonus = CocoStudio.getComponent(this.view, "btn_onlinebonus");//Button
		this.Image_onlinebonus = CocoStudio.getComponent(this.view, "Image_onlinebonus");//ImageView
		this.Image_daojishi_bg = CocoStudio.getComponent(this.view, "Image_daojishi_bg");//ImageView
		this.Image_onlinebonus_lingqu = CocoStudio.getComponent(this.view, "Image_onlinebonus_lingqu");//ImageView
		this.Label_onlinebonus_daojishi = CocoStudio.getComponent(this.view, "Label_onlinebonus_daojishi");//Label
		this.Image_onlinebonus_shine = CocoStudio.getComponent(this.view, "Image_onlinebonus_shine");//ImageView
		this.Panel_buttonGroup_left = CocoStudio.getComponent(this.view, "Panel_buttonGroup_left");//Panel
		this.Panel_btnList_Left = CocoStudio.getComponent(this.view, "Panel_btnList_Left");//Panel
		this.Button_more = CocoStudio.getComponent(this.view, "Button_more");//Button
		this.ImageView_Notice = CocoStudio.getComponent(this.view, "ImageView_Notice");//ImageView
		this.panel_chat = CocoStudio.getComponent(this.view, "panel_chat");//Panel
		this.Panel_matchBegin = CocoStudio.getComponent(this.view, "Panel_matchBegin");//Panel
		this.Label_matchBeginTitle = CocoStudio.getComponent(this.view, "Label_matchBeginTitle");//Label
		this.Button_goMatch = CocoStudio.getComponent(this.view, "Button_goMatch");//Button
		this.AtlasLabel_matchTimer = CocoStudio.getComponent(this.view, "AtlasLabel_matchTimer");//LabelAtlas
		this.Button_stayTable = CocoStudio.getComponent(this.view, "Button_stayTable");//Button
		this.Image_matchBegin = CocoStudio.getComponent(this.view, "Image_matchBegin");//ImageView
		this.Panel_match = CocoStudio.getComponent(this.view, "Panel_match");//Panel
		this.Button_barrage = CocoStudio.getComponent(this.view, "Button_barrage");//Button
		this.Image_barragelock = CocoStudio.getComponent(this.view, "Image_barragelock");//ImageView
		this.Panel_AwardBar = CocoStudio.getComponent(this.view, "Panel_AwardBar");//Panel
		this.Label_FirstAward = CocoStudio.getComponent(this.view, "Label_FirstAward");//Label
		this.Label_FirstAwardNum = CocoStudio.getComponent(this.view, "Label_FirstAwardNum");//Label
		this.Label_AllAward = CocoStudio.getComponent(this.view, "Label_AllAward");//Label
		this.Label_AllAwardNum = CocoStudio.getComponent(this.view, "Label_AllAwardNum");//Label
		this.Label_SecondAward = CocoStudio.getComponent(this.view, "Label_SecondAward");//Label
		this.Label_SecondAwardNum = CocoStudio.getComponent(this.view, "Label_SecondAwardNum");//Label
		this.Panel_233 = CocoStudio.getComponent(this.view, "Panel_233");//Panel
		this.Label_matchBaseCoin = CocoStudio.getComponent(this.view, "Label_matchBaseCoin");//Label
		this.Label_matchBaseNum = CocoStudio.getComponent(this.view, "Label_matchBaseNum");//Label
		this.Label_matchRound = CocoStudio.getComponent(this.view, "Label_matchRound");//Label
		this.Label_matchPkRound = CocoStudio.getComponent(this.view, "Label_matchPkRound");//Label
		this.Label_waiting = CocoStudio.getComponent(this.view, "Label_waiting");//Label
		this.Label_match_name = CocoStudio.getComponent(this.view, "Label_match_name");//Label
		this.Panel_234 = CocoStudio.getComponent(this.view, "Panel_234");//Panel
		this.Button_quickMatch = CocoStudio.getComponent(this.view, "Button_quickMatch");//Button
		this.Button_matchRank = CocoStudio.getComponent(this.view, "Button_matchRank");//Button
		this.AtlasLabel_myMatchRank = CocoStudio.getComponent(this.view, "AtlasLabel_myMatchRank");//LabelAtlas
	},

    initLayer:function(){
		var gui = GUI_JINHUATABLE; 
		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/JinHuaTable.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/JinHuaTable.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL); 
		}
	},
    
	callback_Panel_94:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_PrivateRoom:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_roominfo:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_bg:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_lunshu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_danzhu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_zongxiazhu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_geweihao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_wolaishouqian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_guarenlaile:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_waiting_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_waiting_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_ptcl:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_snh:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_xfnym:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_afterfold_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_afterfold_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_xiexie:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_zhunixiaju:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_laozi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_win_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_win_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_yunqicha:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_dadebucuo:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_nizabushangtian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_lose_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_lose_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_tableChat:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_otherturn_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_otherturn_alwaysbet:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_mine_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_mine_raise:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_mine_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_pk:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_raise:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_one:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_two:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_three:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_cancel:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_pk:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_allin:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_onlyraise_raise:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_onlycall_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_onlypk_pk:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_tequan:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_gift:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_changeCard:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_noCompare:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_libao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_renwu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_onlinebonus:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_more:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_goMatch:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_stayTable:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_barrage:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_barragelock:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_quickMatch:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_matchRank:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},
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
    
    },
    //初始化界面
    initData:function(){

    }
};

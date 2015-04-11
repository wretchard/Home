
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuExport = {};	// @menuItem
	var menuManageUsers = {};	// @menuItem
	var menuAddEvent = {};	// @menuItem
	var menuJoin = {};	// @menuItem
	var documentEvent = {};	// @document
	var menuMyForecasts = {};	// @menuItem
	var loginMain = {};	// @login
	var menuHome = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuExport.click = function menuExport_click (event)// @startlock
	{// @endlock
//		window.location.href='/walib/dataBrowser/index.html'
		if(waf.directory.currentUserBelongsTo("manager")) {
			$$('componentMain').loadComponent('/Components/eXport.waComponent');
		};
	};// @lock

	menuManageUsers.click = function menuManageUsers_click (event)// @startlock
	{// @endlock
		if(waf.directory.currentUserBelongsTo("manager")) {
			$$('componentMain').loadComponent('/Components/manageUsers.waComponent');
		};
	};// @lock

	menuAddEvent.click = function menuAddEvent_click (event)// @startlock
	{// @endlock
		if(waf.directory.currentUserBelongsTo("manager")) {
			$$('componentMain').loadComponent('/Components/Admin.waComponent');
		};
	};// @lock

	menuJoin.click = function menuJoin_click (event)// @startlock
	{// @endlock
		$$('componentMain').loadComponent('/Components/Join.waComponent');
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(waf.directory.currentUserBelongsTo("manager")) {
			$$('menuAdmin').show()
			$$('menuExport').show()
		} else {
			$$('menuAdmin').hide()
			$$('menuExport').hide()
		}
		
		if(waf.directory.currentUser() == null) {
			$$('menuJoin').show()
		} else {
			$$('menuJoin').hide()
		}
		
		
	};// @lock

	menuMyForecasts.click = function menuMyForecasts_click (event)// @startlock
	{// @endlock
		if (waf.directory.currentUser()== null) {
			$$('componentMain_dialogWarning').displayDialog()
			$$('componentMain_richText4').setValue("You must login first. Use 'tester@email.com' and 'password' as credentials")
			return;
			
		}
		else {
			$$('componentMain').loadComponent('/Components/myForecast.waComponent');
		}
		
	};// @lock

	loginMain.login = function loginMain_login (event)// @startlock
	{// @endlock
		if(waf.directory.currentUserBelongsTo("manager")) {
			$$('menuAdmin').show()
			$$('menuExport').show()
		};
		
		$$('menuJoin').hide()
	};// @lock

	loginMain.logout = function loginMain_logout (event)// @startlock
	{// @endlock
		$$('componentMain').loadComponent('/Components/Home.waComponent');
		$$('menuAdmin').hide();
		$$('menuExport').hide()
		$$('menuJoin').show();
		
	};// @lock

	menuHome.click = function menuHome_click (event)// @startlock
	{// @endlock
		try {
		var length=$$('componentMain').sources.resultArray.length;

		for(var i=0; i< length; i++) {
			$$('componentMain').sources.resultArray.getCurrentElement()
			$$('componentMain').sources.resultArray.removeCurrent()
		}
		   if($$('componentMain').sources.result.length!=0){
				$$('componentMain').sources.result.removeUnused()
			} else {return "nothing"}
			$$('componentMain').loadComponent('/Components/Home.waComponent');
		}
		catch(err) {			
		$$('componentMain').loadComponent('/Components/Home.waComponent');
	}
	};// @lock
var oldValue // the former value of the filled value



// @region eventManager// @startlock
	WAF.addListener("menuExport", "click", menuExport.click, "WAF");
	WAF.addListener("menuManageUsers", "click", menuManageUsers.click, "WAF");
	WAF.addListener("menuAddEvent", "click", menuAddEvent.click, "WAF");
	WAF.addListener("menuJoin", "click", menuJoin.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("loginMain", "login", loginMain.login, "WAF");
	WAF.addListener("menuMyForecasts", "click", menuMyForecasts.click, "WAF");
	WAF.addListener("loginMain", "logout", loginMain.logout, "WAF");
	WAF.addListener("menuHome", "click", menuHome.click, "WAF");
// @endregion
};// @endlock

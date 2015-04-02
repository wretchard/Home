
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuJoin = {};	// @menuItem
	var documentEvent = {};	// @document
	var menuMyForecasts = {};	// @menuItem
	var loginMain = {};	// @login
	var menuAdmin = {};	// @menuItem
	var menuHome = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuJoin.click = function menuJoin_click (event)// @startlock
	{// @endlock
		$$('componentMain').loadComponent('/Components/Join.waComponent');
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(waf.directory.currentUserBelongsTo("manager")) {
			$$('menuAdmin').show()
		} else {
			$$('menuAdmin').hide()
		}// Add your code here
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
		};
	};// @lock

	loginMain.logout = function loginMain_logout (event)// @startlock
	{// @endlock
		$$('componentMain').loadComponent('/Components/Home.waComponent');
		$$('menuAdmin').hide()
		
	};// @lock

	menuAdmin.click = function menuAdmin_click (event)// @startlock
	{// @endlock
		if(waf.directory.currentUserBelongsTo("manager")) {
			$$('componentMain').loadComponent('/Components/Admin.waComponent');
		};
		
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
	WAF.addListener("menuJoin", "click", menuJoin.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("loginMain", "login", loginMain.login, "WAF");
	WAF.addListener("menuMyForecasts", "click", menuMyForecasts.click, "WAF");
	WAF.addListener("loginMain", "logout", loginMain.logout, "WAF");
	WAF.addListener("menuAdmin", "click", menuAdmin.click, "WAF");
	WAF.addListener("menuHome", "click", menuHome.click, "WAF");
// @endregion
};// @endlock

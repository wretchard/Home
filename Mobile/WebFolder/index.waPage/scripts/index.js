
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var loginMain = {};	// @login
	var menuAdmin = {};	// @menuItem
	var menuHome = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	loginMain.logout = function loginMain_logout (event)// @startlock
	{// @endlock
		$$('componentMain').loadComponent('/Components/Home.waComponent');
	};// @lock

	menuAdmin.click = function menuAdmin_click (event)// @startlock
	{// @endlock
		$$('componentMain').loadComponent('/Components/Admin.waComponent');
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
	WAF.addListener("loginMain", "logout", loginMain.logout, "WAF");
	WAF.addListener("menuAdmin", "click", menuAdmin.click, "WAF");
	WAF.addListener("menuHome", "click", menuHome.click, "WAF");
// @endregion
};// @endlock

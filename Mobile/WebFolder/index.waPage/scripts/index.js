
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuAdmin = {};	// @menuItem
	var menuHome = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuAdmin.click = function menuAdmin_click (event)// @startlock
	{// @endlock
		$$('componentMain').loadComponent('/Components/Admin.waComponent');
	};// @lock

	menuHome.click = function menuHome_click (event)// @startlock
	{// @endlock
		$$('componentMain').loadComponent('/Components/Home.waComponent');
	};// @lock
var oldValue // the former value of the filled value



// @region eventManager// @startlock
	WAF.addListener("menuAdmin", "click", menuAdmin.click, "WAF");
	WAF.addListener("menuHome", "click", menuHome.click, "WAF");
// @endregion
};// @endlock

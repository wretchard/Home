
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItemAmazon = {};	// @menuItem
	var menuItemBelmont = {};	// @menuItem
	var menuItemTip = {};	// @menuItem
	var menuItemHome = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItemAmazon.click = function menuItemAmazon_click (event)// @startlock
	{// @endlock
		window.open("https://www.amazon.com/author/fernandezrichard", "_blank")
	};// @lock

	menuItemBelmont.click = function menuItemBelmont_click (event)// @startlock
	{// @endlock
		window.open("http://pjmedia.com/richardfernandez/", "_blank")
	};// @lock

	menuItemTip.click = function menuItemTip_click (event)// @startlock
	{// @endlock
		window.location.href='/tipjar.html'
	};// @lock

	menuItemHome.click = function menuItemHome_click (event)// @startlock
	{// @endlock
		window.location.href='/'
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItemAmazon", "click", menuItemAmazon.click, "WAF");
	WAF.addListener("menuItemBelmont", "click", menuItemBelmont.click, "WAF");
	WAF.addListener("menuItemTip", "click", menuItemTip.click, "WAF");
	WAF.addListener("menuItemHome", "click", menuItemHome.click, "WAF");
// @endregion
};// @endlock

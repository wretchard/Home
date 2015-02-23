
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem4 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		window.location.href='/tipjar.html'
	};// @lock

	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		window.open("https://www.amazon.com/author/fernandezrichard", "_blank")
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		window.open("http://pjmedia.com/richardfernandez/", "_blank")
	};// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		window.location.href='/'
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
// @endregion
};// @endlock

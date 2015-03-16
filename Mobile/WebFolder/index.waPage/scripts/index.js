
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
		var length=$$('componentMain').sources.resultArray.length;
		console.log(length);
//		$$('componentMain').sources.resultArray.getElements(0, length, function(event) 
//		{
//			event.elements.forEach(function(element) {
//				element.removeCurrent()
//			})
//		})
		for(var i=0; i< length; i++) {
			$$('componentMain').sources.resultArray.getCurrentElement()
			$$('componentMain').sources.resultArray.removeCurrent()
		}
		
		$$('componentMain').loadComponent('/Components/Home.waComponent');
	};// @lock
var oldValue // the former value of the filled value



// @region eventManager// @startlock
	WAF.addListener("menuAdmin", "click", menuAdmin.click, "WAF");
	WAF.addListener("menuHome", "click", menuHome.click, "WAF");
// @endregion
};// @endlock

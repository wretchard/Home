
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Join';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textPassword = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	textPassword.change = function textPassword_change (event)// @startlock
	{// @endlock
		var passWord = $$('componentMain').sources.objJoin.password;
			if (passWord !== null) {
			passwordRegexStr = /^(?=.*\d)[a-zA-Z\d]{7,}$/;
			isValid = passwordRegexStr.test(passWord);
			if (!isValid) {
				console.log({error: 8025, errorMessage: "Password must be at least 7 characters."});
			}
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textPassword", "change", textPassword.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

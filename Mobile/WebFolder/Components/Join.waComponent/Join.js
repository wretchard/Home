
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Join';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textUserName = {};	// @textField
	var buttonJoin = {};	// @button
	var textConfirm = {};	// @textField
	var textPassword = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	textUserName.change = function textUserName_change (event)// @startlock
	{// @endlock

	};// @lock

	buttonJoin.click = function buttonJoin_click (event)// @startlock
	{// @endlock
		var err=false;
		if ($$('componentMain').sources.objJoin.name == undefined) {
			err=true;
			$$('componentMain_richTextError').setValue("A name is required")
		}
		if ($$('componentMain').sources.objJoin.email == undefined) {
			err=true;
			$$('componentMain_richTextError').setValue("An email is required")
		}
		if ($$('componentMain').sources.objJoin.password == undefined) {
			err=true;
			$$('componentMain_richTextError').setValue("A password is required")
		}
		
		if (err) {return}
		
		$$('componentMain_richTextError').setValue("Bingo!!")
		
		
	};// @lock

	textConfirm.change = function textConfirm_change (event)// @startlock
	{// @endlock
		var passWord = $$('componentMain').sources.objJoin.password
		if(this.getValue() == passWord) {
			
		}
	};// @lock

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
	WAF.addListener(this.id + "_textUserName", "change", textUserName.change, "WAF");
	WAF.addListener(this.id + "_buttonJoin", "click", buttonJoin.click, "WAF");
	WAF.addListener(this.id + "_textConfirm", "change", textConfirm.change, "WAF");
	WAF.addListener(this.id + "_textPassword", "change", textPassword.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

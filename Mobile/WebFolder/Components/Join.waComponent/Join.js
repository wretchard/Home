
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
	var textEmail = {};	// @textField
	var buttonJoin = {};	// @button
	var textConfirm = {};	// @textField
	var textPassword = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	textUserName.change = function textUserName_change (event)// @startlock
	{// @endlock
		if ($$('componentMain').sources.objJoin.name !== undefined 
		|| $$('componentMain').sources.objJoin.name !== "") {
			$$('componentMain_richTextError').setValue("")
		} else {
			$$('componentMain_richTextError').setValue("A name is required");	
		}
	};// @lock
	
	textEmail.change = function textEmail_change (event)// @startlock
	{// @endlock
		var em = $$('componentMain').sources.objJoin.email;
		if (em !== null) {
			passwordRegexStr = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/
			isValid = passwordRegexStr.test(em);
			if (!isValid) {
				$$('componentMain_richTextError').setValue("Your email format is wrong")
				this.setValue('');
			} else {
				$$('componentMain_richTextError').setValue("")
			}
		}
	};// @lock

	buttonJoin.click = function buttonJoin_click (event)// @startlock
	{// @endlock

		if ($$('componentMain').sources.objJoin.name == undefined) {
			$$('componentMain_richTextError').setValue("A name is required");
			return;
		} else {
			$$('componentMain_richTextError').setValue("")}
			
		if ($$('componentMain').sources.objJoin.email == undefined) {
			$$('componentMain_richTextError').setValue("An email is required");
			return;
		} else {
			$$('componentMain_richTextError').setValue("")}
			
		if ($$('componentMain').sources.objJoin.password == undefined) {
			$$('componentMain_richTextError').setValue("A password is required");
			return;
		} else {
			$$('componentMain_richTextError').setValue("")}
		
		$$('componentMain').sources.user.addUser($$('componentMain').sources.objJoin);
	};// @lock

	textConfirm.change = function textConfirm_change (event)// @startlock
	{// @endlock
		var passWord = $$('componentMain').sources.objJoin.password
		if(this.getValue() !== passWord) {
			$$('componentMain_buttonJoin').disable()
			$$('componentMain_richTextError').setValue("Does not match password")
		} else {
			$$('componentMain_buttonJoin').enable()
			$$('componentMain_richTextError').setValue("")
		}
	};// @lock

	textPassword.change = function textPassword_change (event)// @startlock
	{// @endlock
		var passWord = $$('componentMain').sources.objJoin.password;
			if (passWord !== null || passWord !== "" ) {
			passwordRegexStr = /^(?=.*\d)[a-zA-Z\d]{7,}$/;
			isValid = passwordRegexStr.test(passWord);
			if (!isValid) {
				$$('componentMain_richTextError').setValue("Password must be at least 7 characters.")
				} else {
					
				$$('componentMain_richTextError').setValue("")	
				}
				
			}
	
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textUserName", "change", textUserName.change, "WAF");
	WAF.addListener(this.id + "_textEmail", "change", textEmail.change, "WAF");
	WAF.addListener(this.id + "_buttonJoin", "click", buttonJoin.click, "WAF");
	WAF.addListener(this.id + "_textConfirm", "change", textConfirm.change, "WAF");
	WAF.addListener(this.id + "_textPassword", "change", textPassword.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

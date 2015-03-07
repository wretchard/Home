

model.Event.entityMethods.createResult = function() {
	return currentUser().name;
};

model.Event.entityMethods.createResult.scope = "public";
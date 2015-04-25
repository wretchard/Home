//model= new DataStoreCatalog();
//model.User=require('CustomLogin').User;
include("./Model/User/User-methods.js");
include("./Model/User/User-events.js");
include("./Model/Event/Event-methods.js");

include("./Model/Result/Result-methods.js");
include("./Model/Result/Result-events.js");
include("./Model/Outcome/Outcome-events.js");
include("./Model/Event/Event-events.js");
include("./Model/MyResult/MyResult-events.js");
include("./Model/ResultExport/ResultExport-events.js");
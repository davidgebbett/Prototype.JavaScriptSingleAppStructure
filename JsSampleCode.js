(function($, undef){ //1. Encapsulation/Dependancy injection & extenable to modules (AMD/Require)
	'use strict' // 2. Good for linting/picking up any issues
	var app = { // 3. Name space (Important when you start splitting components into their own files)
		helpers: { // 4. Global helpers (like static methods in C#)
			ExecuteModule: function (selector, moduleA, args){
			//.....//
			}
		},
		init: function (){ // 5.Initializing code for page (test for connectivity/data loading/fallbacks etc)
			app.start();
		},
		start: function () { // 6. Applicaiton Logic 
			ExecuteModule('.hello', app.modules.moduleA, [dependancies])
		},
		modules: { // 7. Easily extended to require/amd modules & common namespace
			moduleA: (function (){ // 8. Self executing function, ensures Dependancies injected/encapsulation/DRY/Seperation of concerns as will break if linked to items (Lexical scoping)
				var modA = {
				},
				api = { //8. Returnable public API of the object (encapsulated in closure))
					init: function([Dependancies]){ // 9.Inject the dependencies when activating the app. (Including target selector) decouples the module from the instance
					}
				}
				
				return api;
			}()),
			moduleA: (function (){
				//......///
			}())
		}
	};
	app.init(); // 10. Initialise app and start running the code
}(jQuery)); // 11.Inject initial dependancies (unness for require)

//12. ALL text is defined with '' and not "". This makes it much easier to work with html objects and avoids escaping issues.

/**
 *  
 *  Provide the requirejs configuration. As requirejs boots up, if it sees a global variable named require or requirejs
 *  this variable is assumed to contain configuration information. 
 *
 * 	See http://requirejs.org/docs/api.html#config
 *
 */ 
var requirejs = {
	baseUrl: "/test/",
    paths: {
        "text"   : "lib/require/require-text",
        "jquery" : "lib/jquery/jquery-1.7.2"        
    }
};
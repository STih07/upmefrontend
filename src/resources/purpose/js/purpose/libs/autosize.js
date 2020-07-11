//
// Autosize textarea
//

'use strict';

var TextareaAutosize = (function() {

	// Variables

	var $textarea = $('[data-toggle="autosize"]');


	// Methods

	function init() {
		autosize($textarea);
	}


	// Events

	if ($textarea.length) {
		init();
	}

})();

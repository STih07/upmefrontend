//
// Popover
//

'use strict';

var ProgressCircle = (function() {

	// Variables

	var $progress = $('.progress-circle');

	// Methods

	function init($this) {

        var value = $this.data().progress,
			text = $this.data().text ? $this.data().text : '',
			textClass = $this.data().textclass ? $this.data().textclass : 'progressbar-text',
            color = $this.data().color ? $this.data().color : 'primary';

		var options = {
			color: PurposeStyle.colors.theme[color],
			strokeWidth: 7,
			trailWidth: 2,
			text: {
				value: text,
				className: textClass
			},
            svgStyle: {
                display: 'block',
            },
            duration: 1500,
            easing: 'easeInOut'
		};

		var progress = new ProgressBar.Circle($this[0], options);

        progress.animate(value / 100);
	}


	// Events

	if ($progress.length) {
		$progress.each(function() {
			init($(this));
		});
	}

})();

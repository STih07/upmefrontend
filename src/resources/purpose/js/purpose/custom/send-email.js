//
// Send email
//

'use strict';


var SendEmail = (function() {

	// Variables

	var $form = $('#form-contact');


	// Methods

	function notify(placement, align, icon, type, animIn, animOut) {
		$.notify({
			icon: icon,
			title: ' Bootstrap Notify',
			message: 'Turning standard Bootstrap alerts into awesome notifications',
			url: ''
		}, {
			element: 'body',
			type: type,
			allow_dismiss: true,
			placement: {
				from: placement,
				align: align
			},
			offset: {
				x: 15, // Keep this as default
				y: 15 // Unless there'll be alignment issues as this value is targeted in CSS
			},
			spacing: 10,
			z_index: 1080,
			delay: 2500,
			timer: 25000,
			url_target: '_blank',
			mouse_over: false,
			animate: {
				// enter: animIn,
				// exit: animOut
                enter: animIn,
                exit: animOut
			},
			template:   '<div class="alert alert-{0} alert-icon alert-group alert-notify" data-notify="container" role="alert">' +
					  		'<div class="alert-group-prepend align-self-start">' +
					  			'<span class="alert-group-icon"><i data-notify="icon"></i></span>' +
					  		'</div>' +
					  		'<div class="alert-content">' +
								'<strong data-notify="title">{1}</strong>' +
								'<div data-notify="message">{2}</div>' +
							'</div>' +
					  		'<button type="button" class="close" data-notify="dismiss" aria-label="Close">' +
								'<span aria-hidden="true">&times;</span>' +
							'</button>' +
						'</div>'

		});
	}

	function init($this, e) {

		var buttonText =  $this.find('button[type="submit"]').text();

		if (e.isDefaultPrevented()) {
			// handle the invalid form...
		} else {
			var formData = $this.serialize();
			console.log(formData);
			var subscribeRequest = $.ajax({
				type: "POST",
				url: $this.data('process'),
				data: formData,
				dataType: 'json'
			});

			// Changing button text
			$this.find('button[type="submit"]').text('Sending...');

			// Get success status and data
			subscribeRequest.done(function(data, msg) {

				var status = data['status'];

				var notifyTitle = data['notify_title'];
				var notifyMessage = data['notify_message'];
				var notifyType = data['notify_type'];

				// Create notification
				notify(notifyTitle, notifyMessage, notifyType);

				if (status == 'success') {
					// Clear form
					$this.find('.btn-reset').trigger('click');
					// $this.find('.glyphicon-ok').removeClass('glyphicon-ok');
					grecaptcha.reset();
				}

				$this.find('button[type="submit"]').text('Message sent!');

				setTimeout(function() {
					$this.find('button[type="submit"]').text(buttonText);
				}, 3000);

			});

			subscribeRequest.fail(function(data, textStatus) {
				var status = data['status'];

				var notifyTitle = data['notify_title'];
				var notifyMessage = data['responseText'];
				var notifyType = 'danger';

				// Create notification
				notify(notifyTitle, notifyMessage, notifyType);

				$this.find('button[type="submit"]').text('Error!');

				setTimeout(function() {
					$this.find('button[type="submit"]').text(buttonText);
				}, 3000);
			});
		}
	}


	// Events

	if ($form.length) {
		$form.on('submit', function(e) {
			init($(this), e);
			return false
		})
	}

})();

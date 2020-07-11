// //
// // Customizer
// //
//
// 'use strict';
//
// var Customizer = (function() {
//
// 	//
// 	// Variables
// 	//
//
// 	// Selectors
// 	var form = document.querySelector('#form-customizer');
// 	var navbar = document.querySelector('#navbar-main');
// 	var navbarLogo = document.querySelector('#navbar-logo');
// 	var topbar = document.querySelector('#navbar-top-main');
// 	var sidebar = document.querySelector('#sidenav-main');
// 	var stylesheet = document.getElementById('stylesheet');
//
// 	// Config
// 	var config = {
// 		skin: (localStorage.getItem('purposeSkin')) ? localStorage.getItem('purposeSkin') : 'default',
// 		mode: (localStorage.getItem('purposeMode')) ? localStorage.getItem('purposeMode') : 'light',
// 	}
//
// 	//
// 	// Methods
// 	//
//
// 	function parseUrl() {
// 		var search = window.location.search.substring(1);
// 		var params = search.split('&');
//
// 		for (var i = 0; i < params.length; i++) {
// 			var arr = params[i].split('=');
// 			var prop = arr[0];
// 			var val = arr[1];
//
// 			if (prop == 'skin' || prop == 'mode') {
//
// 				// Save to localStorage
// 				localStorage.setItem('purpose' + prop.charAt(0).toUpperCase() + prop.slice(1), val);
//
// 				// Update local variables
// 				config[prop] = val;
// 			}
// 		}
// 	}
//
//
// 	function toggleSkin(skin, mode, callback) {
// 		if (stylesheet) {
// 			var params = stylesheet.getAttribute("href").split('/');
//
// 			var file = params[params.length - 1];
// 			var newFile;
//
// 			if (skin == 'default' && mode == 'light') {
// 				newFile = 'purpose.css';
// 			} else if (skin == 'default' && mode == 'dark') {
// 				newFile = 'purpose-dark.css';
// 			} else {
// 				newFile = 'purpose-' + skin + '-' + mode + '.css';
// 			}
//
// 			newFile = stylesheet.getAttribute('href').replace(file, newFile);
//
// 			stylesheet.setAttribute('href', newFile);
//
// 			if (callback) {
// 				callback();
// 			}
// 		}
// 	}
//
// 	function toggleNavbarColor(mode) {
// 		if (mode == 'dark') {
// 			if (navbar) {
// 				navbar.classList.remove('navbar-light', 'bg-white');
// 				navbar.classList.add('navbar-dark', 'bg-dark');
// 			}
// 			if (topbar) {
// 				topbar.classList.remove('navbar-light', 'bg-white');
// 				topbar.classList.add('navbar-dark', 'bg-dark');
// 			}
//
// 			if (sidebar) {
// 				sidebar.classList.remove('navbar-light', 'bg-white');
// 				sidebar.classList.add('navbar-dark', 'bg-dark');
// 			}
// 		}
// 	}
//
// 	function toggleLogo(mode) {
// 		if (navbarLogo) {
// 			var params = navbarLogo.getAttribute("src").split('/');
//
// 			var file = params[params.length - 1];
// 			var newFile;
//
// 			if (mode == 'dark') {
// 				newFile = 'white.png';
// 				newFile = navbarLogo.getAttribute('src').replace(file, newFile);
//
// 				navbarLogo.setAttribute('src', newFile);
// 			}
// 		}
// 	}
//
// 	function toggleFormControls(form, skin, mode) {
// 		$(form).find('[name="skin"][value="' + skin + '"]').closest('.btn').button('toggle');
// 		$(form).find('[name="mode"][value="' + mode + '"]').closest('.btn').button('toggle');
// 	}
//
// 	function submitForm(form) {
// 		var skin = form.querySelector('[name="skin"]:checked').value;
// 		var mode = form.querySelector('[name="mode"]:checked').value;
//
// 		// Save data to localStorage
// 		localStorage.setItem('purposeSkin', skin);
// 		localStorage.setItem('purposeMode', mode);
//
// 		// Reload page
// 		window.location = window.location.pathname;
// 	}
//
//
// 	//
// 	// Event
// 	//
//
// 	// Parse url
// 	parseUrl();
//
// 	// Toggle skin
// 	if(stylesheet) {
// 		document.body.style.opacity = '0';
// 		window.addEventListener('load', function() {
// 			toggleSkin(config.skin, config.mode, function() {
// 				// alert('CSS file loaded!');
// 				document.body.style.opacity = '1';
// 			});
// 		});
// 	}
//
// 	toggleNavbarColor(config.mode);
// 	toggleLogo(config.mode);
//
// 	// Toggle form controls
// 	toggleFormControls(form, config.skin, config.mode);
//
// 	// Form submitted
// 	if (form) {
// 		form.addEventListener('submit', function(e) {
// 			e.preventDefault();
//
// 			// Apply changes
// 			submitForm(form);
// 		});
// 	}
//
// })();

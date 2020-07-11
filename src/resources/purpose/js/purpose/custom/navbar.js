//
// Navbar
//

'use strict';

var NavbarVertical = (function() {

	// Variables

    var $nav = $('.navbar-vertical .navbar-nav, .navbar-vertical .navbar-nav .nav');
	var $collapse = $('.navbar-vertical .collapse');
    var $dropdown = $('.navbar-vertical .dropdown');

	// Methods

	function accordion($this) {
		$this.closest($nav).find($collapse).not($this).collapse('hide');
	}

    function closeDropdown($this) {
        var $dropdownMenu = $this.find('.dropdown-menu');

        $dropdownMenu.addClass('close');

    	setTimeout(function() {
    		$dropdownMenu.removeClass('close');
    	}, 200);
	}


	// Events

	$collapse.on({
		'show.bs.collapse': function() {
			accordion($(this));
		}
	})

	$dropdown.on({
		'hide.bs.dropdown': function() {
			closeDropdown($(this));
		}
	})

})();

var NavbarCollapse = (function() {

	// Variables

    var $nav = $('#navbar-main'),
	    $collapse = $('#navbar-main-collapse'),
        $navTop = $('#navbar-top-main');


	// Methods

	function showNavbarCollapse($this) {
        $nav.addClass('navbar-collapsed');
        $navTop.addClass('navbar-collapsed');
        $('#header-main').addClass('header-collapse-show');
        $('body').addClass('modal-open');
	}

    function hideNavbarCollapse($this) {
        $this.removeClass('collapsing').addClass('collapsing-out');
        $nav.removeClass('navbar-collapsed').addClass('navbar-collapsed-out');
        $navTop.removeClass('navbar-collapsed').addClass('navbar-collapsed-out');
	}

    function hiddenNavbarCollapse($this) {
        $this.removeClass('collapsing-out');
        $nav.removeClass('navbar-collapsed-out');
        $navTop.removeClass('navbar-collapsed-out');
        $('#header-main').removeClass('header-collapse-show');
        $('body').removeClass('modal-open');
	}


	// Events

    if ($collapse.length) {
    	$collapse.on({
    		'show.bs.collapse': function() {
    			showNavbarCollapse($collapse);
    		}
    	})

        $collapse.on({
    		'hide.bs.collapse': function() {
                hideNavbarCollapse($collapse);
    		}
    	})

        $collapse.on({
    		'hidden.bs.collapse': function() {
                hiddenNavbarCollapse($collapse);
    		}
    	})
    }

})();


//
// Sticky Navbar
//

var NavbarSticky = (function() {

	// Variables

	var $nav = $('.navbar-sticky');


	// Methods

	function init($this) {

		var scrollTop = $(window).scrollTop(); // our current vertical position from the top

		// if we've scrolled more than the navigation, change its position to fixed to stick to top,
		// otherwise change it back to relative
		if (scrollTop > (navOffsetTop + 200)) {
			$this.addClass('sticky');
		} else {
			$this.removeClass('sticky');
		}
	}


	// Events

	if ($nav.length) {

        var navOffsetTop = $nav.offset().top;

		// Init sticky navbar
		init($nav);

		// re-calculate stickyness on scroll
		$(window).on({
			'scroll': function() {
				init($nav);
			}
		})
	}
})();

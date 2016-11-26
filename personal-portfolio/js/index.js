window.mobilecheck = function() {
	return screen.width < 800;
};

$('document').ready(function () {
	if (window.mobilecheck()) {
		$('#fullpage').fullpage({
			sectionSelector: '.vertical-scrolling',
			anchors: ['home', 'projects', 'contact'],
			menu: '#menu',
			autoScrolling: false,
			fitToSection: false
		});
	} else {
		$('#fullpage').fullpage({
			sectionSelector: '.vertical-scrolling',
			anchors: ['home', 'projects', 'contact'],
			menu: '#menu',
		});
	}
});

/**
 * Constructor for the site object.
 * All custom code for this site will go under this object
 */
function site() {

}

/**
 * Function to open and close the main navigation menu.
 * It toggles the classes causing the hamburger to animate,
 * and the menu to become visible and interactable
 */
site.toggleMenu = function() {
    $("#navigation").toggleClass("open");
    $(".btn").toggleClass("open");
};
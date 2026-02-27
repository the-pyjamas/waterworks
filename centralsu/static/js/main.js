(function ($) {
	"use strict";

	/* Windows Load */
	$(window).on('load', function () {
		preLoader();
	});

	/* Preloader activation */
	function preLoader() {
		$('#loading').delay(500).fadeOut(500);
	};

	/* footer year */
	var yearElement = document.getElementById("year");
	if (yearElement) { yearElement.innerHTML = new Date().getFullYear(); }
	/* footer year */

	/* Light/Dark Theme Toggler (Class-Based) */
	function initThemeToggler() {
		// Get theme switcher elements
		const lightThemeRadio = document.getElementById('switcher-light-theme');
		const darkThemeRadio = document.getElementById('switcher-dark-theme');
		const themeButtons = document.querySelectorAll('.theme-button');

		// Return if no theme controls found
		if (!lightThemeRadio && !darkThemeRadio && themeButtons.length === 0) return;

		// Set the theme based on localStorage or default to 'light'
		// To make 'dark' the default, change 'light' to 'dark' below
		const savedTheme = localStorage.getItem('bd_theme_scheme') || 'light';
		document.documentElement.setAttribute('data-theme-mode', savedTheme);

		// Update UI based on current theme
		function updateUI(theme) {
			// Update radio buttons (if they exist)
			if (lightThemeRadio && darkThemeRadio) {
				lightThemeRadio.checked = (theme === 'light');
				darkThemeRadio.checked = (theme === 'dark');
			}

			// Update theme buttons (if they exist)
			themeButtons.forEach(button => {
				if (theme === 'dark') {
					button.classList.remove('ri-sun-line');
					button.classList.add('ri-moon-line');
				} else {
					button.classList.remove('ri-moon-line');
					button.classList.add('ri-sun-line');
				}
			});
		}

		// Initialize UI
		updateUI(savedTheme);

		// Theme switching function
		function switchTheme(newTheme) {
			localStorage.setItem('bd_theme_scheme', newTheme);
			document.documentElement.setAttribute('data-theme-mode', newTheme);
			updateUI(newTheme);
		}

		// Radio button event listeners
		if (lightThemeRadio) {
			lightThemeRadio.addEventListener('change', () => {
				if (lightThemeRadio.checked) switchTheme('light');
			});
		}

		if (darkThemeRadio) {
			darkThemeRadio.addEventListener('change', () => {
				if (darkThemeRadio.checked) switchTheme('dark');
			});
		}

		// Theme button event listeners (for all buttons)
		themeButtons.forEach(button => {
			button.addEventListener('click', () => {
				const currentTheme = document.documentElement.getAttribute('data-theme-mode');
				const newTheme = currentTheme === 'light' ? 'dark' : 'light';
				switchTheme(newTheme);
			});
		});
	}
	document.addEventListener('DOMContentLoaded', initThemeToggler);
	/* light dark activation end */

	/* rtl activation start */
	document.addEventListener('DOMContentLoaded', function () {
		// Load saved direction or default to 'rtl'
		// To set 'rtl' as default again, change 'ltr' to 'rtl' below
		const savedDirection = localStorage.getItem('preferredDirection') || 'ltr';
		document.documentElement.setAttribute('dir', savedDirection);

		// Set the correct radio button
		const dirRadio = document.getElementById(`switcher-${savedDirection}`);
		if (dirRadio) dirRadio.checked = true;

		// Add event listeners
		document.querySelectorAll('input[name="direction"]').forEach(radio => {
			radio.addEventListener('change', function () {
				if (this.checked) {
					const direction = this.value;
					document.documentElement.setAttribute('dir', direction);
					localStorage.setItem('preferredDirection', direction);
					console.log('Direction changed to:', direction);
				}
			});
		});
	});
	/* rtl activation end */

	/* Event delegation for dynamically added elements */
	$(document)
		/* Theme settings */
		.on("click", ".bd-theme-settings-open-btn", function () {
			$(".bd-theme-settings-area").toggleClass("settings-opened");
		})
		/* Sidebar Toggle */
		.on("click", ".offcanvas-close, .offcanvas-overlay", function () {
			$(".offcanvas-area").removeClass("info-open");
			$(".offcanvas-overlay").removeClass("overlay-open");
		})
		.on("click", ".sidebar-toggle", function () {
			$(".offcanvas-area").addClass("info-open");
			$(".offcanvas-overlay").addClass("overlay-open");
		})
		/* Body overlay */
		.on("click", ".body-overlay", function () {
			$(".offcanvas-area").removeClass("opened");
			$(".body-overlay").removeClass("opened");
		})
		/* Offcanvas */
		.on("click", ".bd-offcanvas-close, .bd-offcanvas-overlay", function () {
			$(".bd-offcanvas-area").removeClass("info-open");
			$(".bd-offcanvas-overlay").removeClass("overlay-open");
		})
		.on("click", ".sidebar-toggle", function () {
			$(".bd-offcanvas-area").addClass("info-open");
			$(".bd-offcanvas-overlay").addClass("overlay-open");
		})
		/* Sidebar toggle */
		.on("click", "#sidebarToggle", function () {
			if (window.innerWidth > 0 && window.innerWidth <= 1199) {
				$(".app-sidebar").toggleClass("close_sidebar");
			} else {
				$(".app-sidebar").toggleClass("collapsed");
			}
			$(".app-offcanvas-overlay").toggleClass("overlay-open");
		})
		.on("click", ".app-offcanvas-overlay", function () {
			$(".app-sidebar").removeClass("collapsed");
			$(".app-sidebar").removeClass("close_sidebar");
			$(".app-offcanvas-overlay").removeClass("overlay-open");
		})
		/* Row removal */
		.on("click", ".removeRow", function () {
			$(this).closest('tr').remove();
		})
		/* Payment details toggle */
		.on("click", ".toggle-details", function () {
			const details = $(this).next('.payment-details');
			if (details.length) {
				details.toggle();
			}
		});

	/* Data Css js */
	$("[data-background").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	/* MagnificPopup image view */
	$(".popup-image").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	/* MagnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	/* FullScreen Js */
	function toggleFullScreen() {
		if (!document.fullscreenElement) {
			// Enter fullscreen
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen().catch(err => {
					console.error("Fullscreen error:", err);
				});
			} else if (document.documentElement.webkitRequestFullscreen) { // Safari
				document.documentElement.webkitRequestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
				document.documentElement.msRequestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) { // Firefox
				document.documentElement.mozRequestFullScreen();
			}
		} else {
			// Exit fullscreen
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) { // Safari
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) { // IE/Edge
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) { // Firefox
				document.mozCancelFullScreen();
			}
		}
	}
	// Make it available globally (optional, but ensures it works with inline `onclick`)
	window.toggleFullScreen = toggleFullScreen;
	/* FullScreen Js end */

	/* Scrollbar js */
	var Scrollbar = window.Scrollbar;
	const customizeOptions = {
		'damping': 0.1,
		'thumbMinSize': 5,
		renderByPixels: true,
		alwaysShowTracks: false,
	}
	$(".card-scrollbar").map(function (i, element) {
		Scrollbar.init(element)
	})
	/* Scrollbar js end*/

	/* tooltip */
	document.addEventListener('DOMContentLoaded', function () {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	});
	/* tooltip end */

	/* Image upload */
	let loadFile = function (event) {
		var reader = new FileReader();
		reader.onload = function () {
			var output = document.getElementById("profileImage");
			if (event.target.files[0].type.match("image.*")) {
				output.src = reader.result;
			} else {
				event.target.value = "";
				alert("please select a valid image");
			}
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	/* for profile photo update */
	let ProfileChange = document.querySelector("#profileImageChange");
	if (ProfileChange) {
		ProfileChange.addEventListener("change", loadFile);
	}

	/* Image upload two */
	let loadFileTwo = function (event) {
		var reader = new FileReader();
		reader.onload = function () {
			var output = document.getElementById("profileImageTwo");
			if (event.target.files[0].type.match("image.*")) {
				output.src = reader.result;
			} else {
				event.target.value = "";
				alert("please select a valid image");
			}
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	/* for profile photo update */
	let ProfileChangeTwo = document.querySelector("#profileImageChangeTwo");
	if (ProfileChangeTwo) {
		ProfileChangeTwo.addEventListener("change", loadFileTwo);
	}
	/* Image upload Three */
	let loadFileThree = function (event) {
		var reader = new FileReader();
		reader.onload = function () {
			var output = document.getElementById("profileImageThree");
			if (event.target.files[0].type.match("image.*")) {
				output.src = reader.result;
			} else {
				event.target.value = "";
				alert("please select a valid image");
			}
		};
		reader.readAsDataURL(event.target.files[0]);
	};
	/* for profile photo update */
	let ProfileChangeThree = document.querySelector("#profileImageChangeThree");
	if (ProfileChangeThree) {
		ProfileChangeThree.addEventListener("change", loadFileThree);
	}
	/* Image upload end*/

	/* pricing plan change js */
	document.addEventListener("DOMContentLoaded", function () {
		const yearlyBtn = document.querySelector('.yearly-plan-btn');
		const monthlyBtn = document.querySelector('.monthly-plan-btn');
		const yearlyPricing = document.querySelectorAll('.yearly-pricing');
		const monthlyPricing = document.querySelectorAll('.monthly-pricing');
		
		if (yearlyBtn && monthlyBtn) {
			/* Show Yearly Pricing */
			yearlyBtn.addEventListener('click', function () {
				yearlyBtn.classList.add('active');
				monthlyBtn.classList.remove('active');
				yearlyPricing.forEach(el => (el.style.display = 'block'));
				monthlyPricing.forEach(el => (el.style.display = 'none'));
			});

			/* Show Monthly Pricing */
			monthlyBtn.addEventListener('click', function () {
				monthlyBtn.classList.add('active');
				yearlyBtn.classList.remove('active');
				yearlyPricing.forEach(el => (el.style.display = 'none'));
				monthlyPricing.forEach(el => (el.style.display = 'block'));
			});
		}
	});
	/* pricing plan change js end */

	/* Enable popovers */
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
	const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
	const toastTrigger = document.getElementById('liveToastBtn')
	const toastLiveExample = document.getElementById('liveToast')
	/* Enable popovers end*/

	/* bootstrap toast */
	if (toastTrigger) {
		const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
		toastTrigger.addEventListener('click', () => {
			toastBootstrap.show()
		})
	}
	document.addEventListener('DOMContentLoaded', function () {
		const selectToastPlacement = document.getElementById('selectToastPlacement');
		const toastContainer = document.getElementById('toastPlacement');
		const toastEl = document.querySelector('.toast');
		const liveToastBtn = document.getElementById('liveToastBtn');

		/* Check if selectToastPlacement element exists */
		if (selectToastPlacement && toastContainer && toastEl && liveToastBtn) {
			const toast = new bootstrap.Toast(toastEl);

			selectToastPlacement.addEventListener('change', function () {
				const selectedPosition = selectToastPlacement.value;
				toastContainer.className = 'toast-container p-3';
				if (selectedPosition) {
					toastContainer.classList.add(...selectedPosition.split(' '));
				}
			});

			liveToastBtn.addEventListener('click', function () {
				toast.show();
			});
		}
	});
	/* bootstrap toast end */
	
})(jQuery);
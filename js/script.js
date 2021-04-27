"use strict";

function isDarkModeActivatedinTheOS(){
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
}

function getSavedColorTheme(){
    return localStorage.getItem("colorTheme");
}

function enableDarkMode(enable){

    if (enable) {
        document.body.classList.add("dark");
        localStorage.setItem("colorTheme", "dark");
        $('#theme-toggle').attr("checked", "checked");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("colorTheme", "light");
        $('#theme-toggle').removeAttr("checked");
    }
}

function toggleTheme(){

    let colorTheme = getSavedColorTheme();

    if (colorTheme) {
        enableDarkMode(colorTheme == "dark");
    } else {
        if (isDarkModeActivatedinTheOS()) {
            enableDarkMode(true);
        } else {
            enableDarkMode(false);
        }
    }
}

(function($) {



  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var name = target;
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, "slow");

        window.location.hash = $(name).attr("id");

        return false;
      }
    }
  });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });

    toggleTheme();

    $('#theme-toggle').click(function() {
        enableDarkMode($(this).is(":checked"))
    });

})(jQuery); // End of use strict

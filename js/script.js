"use strict";

function isDarkModeActivatedinTheOS(){
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getSavedColorTheme(){
    return localStorage.getItem("colorTheme");
}

function enableDarkMode(enable){

    if (enable) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        $('#theme-toggle').attr("checked", "checked");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        $('#theme-toggle').removeAttr("checked");
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

    const colorTheme = getSavedColorTheme();

    if (colorTheme == "dark") {
        enableDarkMode(true);
    } else if (colorTheme == "light") {
        enableDarkMode(false);
    } else {
        if(isDarkModeActivatedinTheOS()){
            $('#theme-toggle').attr("checked", "checked");
        }
    }

    $('#theme-toggle').click(function() {

        const isDark = $(this).is(":checked");

        enableDarkMode(isDark)

        localStorage.setItem("colorTheme", isDark? "dark" : "light");
    });

})(jQuery); // End of use strict

(function($) {

  "use strict"; // Start of use strict

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


  $('#theme-toggle').click(function() {

    document.body.classList.toggle('dark-theme');
    // // If the OS is set to dark mode...
    // if (prefersDarkScheme.matches) {
    //   // ...then apply the .light-theme class to override those styles
    //   document.body.classList.toggle("light-theme");
    //   // Otherwise...
    // } else {
    //   // ...apply the .dark-theme class to override the default light styles
    //   document.body.classList.toggle("dark-theme");
    // }
  });

})(jQuery); // End of use strict

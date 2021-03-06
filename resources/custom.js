window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('.foo-1', { duration: 900 });

sr.reveal('.foo-2', { 
  duration: 1200
});

sr.reveal('.foo-3', { 
  duration: 1500
});

sr.reveal('.foo-4', { 
  duration: 1800
});

sr.reveal('.foo-5', { 
  duration: 2100 
});

sr.reveal('.foo-6', { 
    duration: 2400 
});

sr.reveal('.foo', {
    duration: 1000
});


// Navbar Hide - desktop

$(document).ready(function() {
    var banner_height = $(".nav").height();
    var lastScrollTop = 0;
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var currScrollTop = $(this).scrollTop();
      if (scroll >= banner_height && currScrollTop > lastScrollTop) {
        $(".nav").hide();
      } else {
        $(".nav").show();
      }
      lastScrollTop = currScrollTop;
  
    });
  
  });

// Navbar Hide - Mobile 



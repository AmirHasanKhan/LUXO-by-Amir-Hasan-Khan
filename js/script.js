$(document).ready(function() {
  // header start
  // logo start
  wow = new WOW(
  {
  boxClass:     'logo-wow',
  animateClass: 'animated', 
  offset:       0,        
  mobile:       true,     
  live:         true    
}
)
wow.init();
// logo end
wow = new WOW(
  {
  boxClass:     'header-menu',
  animateClass: 'animated',
  offset:       0,
  mobile:       true,
  live:         true
}
)
wow.init();
// header end

// header-body start

$('.center').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 7000000,
  arrows: false,
});
// header-body end
    
    // offer section start
    // counter-up 
    $('.counter').counterUp({
    delay: 10,
    time: 2000
});
    // item wow
    wow = new WOW(
    {
    boxClass:     'offer-wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
// item wow
    // offer section end
    // life section start
  wow = new WOW(
    {
    boxClass:     'life-button',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
  wow = new WOW(
    {
    boxClass:     'new-life',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

    // life section end

    // footer offer start

    wow = new WOW(
    {
    boxClass:     'footer-offer-box',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
  wow = new WOW(
    {
    boxClass:     'luxury-offer',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
    // footer offer end

})



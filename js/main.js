$(function() {
  $(document).ready(function(){	
	$('#header').parallax("10%", 1.5);

    /* activate scrollspy menu */
    $('body').scrollspy({
      target: '#navbar-collapsible',
      offset: 50
    });

    /* smooth scrolling sections */
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
          return false;
        }
      }
    });

    $('ul.grid > li > figure').each(function(){
      $(this).find('figcaption > a').bind('touchstart',function(e){
        e.stopPropagation();
      });
      $(this).bind('touchstart',function(e) {
        $(this).toggleClass('cs-hover');
      });
    });

    if(simpleCart) {
      simpleCart({
        checkout: {
          type: "PayPal",
          email: "you@yours.com"
        }
      });
    }

  });

  var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.getElementById( 'header' ),
        didScroll = false,
        changeHeaderOn = 10;

    function init() {
      window.addEventListener( 'scroll', function( event ) {
        if( !didScroll ) {
          didScroll = true;
          setTimeout( scrollPage, 100 );
        }
      }, false );
    }

    function scrollPage() {
      var sy = scrollY();
      if ( sy >= changeHeaderOn ) {
        $(header).addClass('shrink');
      }
      else {
        $(header).removeClass('shrink');
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    init();

  })();

});


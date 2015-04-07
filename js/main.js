var localeOptions = {
  "en":{
    fullLocale: "en_US",
    disqusLocale: "en",
    currency: {

    }
  },
  "zh":{
    fullLocale: "zh_TW",
    disqusLocale: "zh_TW",
    currency: {
      symbol: "<span class='currency-symbol'>NT$</span>",
      precision: 0
    }
  },
  "id":{
    fullLocale: "id_ID",
    disqusLocale: "id",
    currency: {
      symbol: "<span class='currency-symbol'>Rp</span> ",
      thousand: ".",
      precision: 0
    }
  }
};



$(function() {
  $(document).ready(function(){	
	//$('#header').parallax("10%", 1.5);

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

    /* currency */
    var lang = $("html").attr("lang");
    if(lang){

      var currentCurrencyOption = localeOptions[lang].currency;
      if(currentCurrencyOption) {
        var updatePrice = function () {
          var price = $(this).attr("data-price");
          var quantity = parseInt($(this).attr("data-quantity"),10);
          if(!quantity || quantity<1)
            quantity = 1;
          $(this).html(accounting.formatMoney(price*quantity, currentCurrencyOption));
        };
        $(".price[data-price]").each(updatePrice);
        $("#quantity").change(function(){
          var quantity =  parseInt($(this).val(),10);
          if(!quantity || quantity<1)
            quantity = 1;
          $(".price[data-price]").attr("data-quantity",quantity).each(updatePrice);
        });
      }
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


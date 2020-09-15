$('.carousel-product').owlCarousel({
    loop:true,
    autoplay: true,
    margin:9,
    items:3,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:5,
        }
    }
});
$(".icon-block-lang").click(function () {
  $(".lang-dropdown").slideToggle(100);
  $(this).find('svg').toggleClass('lang-icon-rotate');
});
$( "#slider-range-price" ).slider({
  range: true,
  min: 0,
  max: 500,
  values: [ 0, 500 ],
  slide: function( event, ui ) {
    $( "#amount_min_price" ).val(ui.values[ 0 ]);
    $( "#amount_max_price" ).val(ui.values[ 1 ]);
  }
});
$( "#amount_min_price" ).val($( "#slider-range-price" ).slider( "values", 0 ));
$( "#amount_max_price" ).val($( "#slider-range-price" ).slider( "values", 1 ));

$( "#slider-range-square" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 0, 500 ],
    slide: function( event, ui ) {
      $( "#amount_min_square" ).val(ui.values[ 0 ]);
      $( "#amount_max_square" ).val(ui.values[ 1 ]);
    }
  });
  $( "#amount_min_square" ).val($( "#slider-range-square" ).slider( "values", 0 ));
  $( "#amount_max_square" ).val($( "#slider-range-square" ).slider( "values", 1 ));

let navh = $('#navbar').height();
$(window).on("scroll",function(){
    if ($(window).scrollTop()>navh){
        $('#navbar').addClass('fixed-menu fadeInDown');
    }
    else{
      $('#navbar').removeClass('fixed-menu fadeInDown');
    }
});
if ($(window).scrollTop()>navh){
  $('#navbar').addClass('fixed-menu fadeInDown');
}
else{
$('#navbar').removeClass('fixed-menu fadeInDown');
}
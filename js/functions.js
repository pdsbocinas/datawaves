
$(document).ready(function(){
	$('.bxslider').bxSlider({
		minSlides: 3,
  		maxSlides: 4,
  		slideWidth: 270,
  		slideMargin: 10,
  		infiniteLoop: true
	});

	$('.bxslider-header').bxSlider({
		infiniteLoop: true
	});
	
	$('.bxslider-empresa').bxSlider();
	$('.bxslider-fases').bxSlider();
	
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
		$('.menu-mobile ul.right').slideToggle();
	});
	
});

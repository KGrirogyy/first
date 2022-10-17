$('.burger').click(function(){
	$(this).toggleClass('open');
	$('.navigation').toggleClass('active')
	$('.footer-form').toggleClass('hidden')
	$('body').toggleClass('scroll-off')
})

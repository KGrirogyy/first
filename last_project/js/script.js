$('.burger').click(function() {
	$(this).toggleClass('active');
	$('.nav').toggleClass('open')
})
$('.cross').click(function() {
	$('.nav').removeClass('open');
	$('.burger').removeClass('active');
})

$('.burger-pub').click(function() {
	$(this).toggleClass('active');
	$('.nav').toggleClass('open')
})
$('.cross').click(function() {
	$('.nav').removeClass('open');
	$('.burger-pub').removeClass('active');
})
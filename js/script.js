// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

// ambil isi href
var tujuan = $(this).attr('href');

// pindahkan scroll
var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

 e.preventDefault();
});

// parallax
// about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');

	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	//jumbotron
	$('.jumbotron img').css({
		'transfrom' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transfrom' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transfrom' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	// portfolio
	if ( wScroll > $('.portfolio').offset().top - 250 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}
});
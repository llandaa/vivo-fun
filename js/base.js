$(function(){
	$('.button-collapse').sideNav();
	$('#nav-mobile').find("a").eq(0).on('mouseover',function(){
		$('.conner').css({
			"transform":"translateX(0%)"
		})
	})
	$('#nav-mobile').find("a").eq(1).on('mouseover',function(){
		$('.conner').css({
			"transform":"translateX(300%)"
		})
	})
	$('#nav-mobile').find("a").eq(2).on('mouseover',function(){
		$('.conner').css({
			"transform":"translateX(600%)"
		})
	})
	$('#nav-mobile').find("a").eq(3).on('mouseover',function(){
		$('.conner').css({
			"transform":"translateX(920%)"
		})
	})
	$('#nav-mobile').find("a").eq(4).on('mouseover',function(){
		$('.conner').css({
			"transform":"translateX(1270%)"
		})
	})
	$('#nav-mobile').find("a").eq(5).on('mouseover',function(){
		$('.conner').css({
			"transform":"translateX(1620%)"
		})
	})
	$('#nav-mobile').find("a").eq(6).on('mouseover',function(){
		$('.conner').css({
			"transform":"translateX(1940%)",
			
		})
	})
	$('.carousel.carousel-slider').carousel({full_width: true});
	var lh = $('.left-intro').height();
	$('.limage').css({
		"width":"100%",
		"height":lh
	})
	var ch = lh +20;
	$('.content-one').css({
		"height":ch
	})
	var cepH = $('.ceping').height();
	$('.cepingbox').height(cepH);
	var cepH2 = $('.ceping2img').height();
	$('.cepingbox2').height(cepH2);
	$('.ceping').find("img").on('mouseover',function(){
		$('.ceping').find('span').css({
			" opacity":1
		})
	})
	/*var picBW = $('.image-one').width();
	var picBw2 = picBW*2;
	var picBH = $('.image-one').height(picBw2);
	$('.picture-box').width(picBW);
	console.log(picBH)
	*/
	var imglw = $('.ceping').find("img").width()
	var imglh = $('.ceping').find("img").height()
	$('#image-layer').width(imglw)
	$('#image-layer').height(imglh)
	$('#image-layer1').width(imglw)
	$('#image-layer1').height(imglh)
	
	
	var picH = $('.pic').height();
	var picInh = picH - 20
	$('.pic_info').height(picInh);
	
	/*$('.pic_info').css({
		"line-height":"picH"
	})*/
	
	$('.pic').each(function(i,item){
		$(this).on('mouseover',function(){
			$('.pic_info').eq(i).fadeIn(500)
		})
	})
	
	$('.pic_info').each(function(i,item){
		$(this).on('mouseleave',function(){
			$(this).fadeOut(500)
		})
	})
	var serW= $('.server-box').find("li").width();
	var serMl = serW/2
	$('.server-img').width(serW)
	$('.server-img').height(serW);
	/*console.log(serW)*/
	$('.server-img').css({
		"margin-left":-serMl
	})
	var amt = serW/0.8
	$('.server-box').find("a").css({
		"margin-top":amt
	})
	var serH= $('.server-box').find("li").height();
	 $('.server-box').find("ul").height(serH);
	 
	 $('.hot-bankuai-one').on('mouseover',function(){
	 	$('.hot-bankuai-one').find("img").attr("src","img/77.gif")
	 })
	  $('.hot-bankuai-one').on('mouseout',function(){
	 	$('.hot-bankuai-one').find("img").attr("src","img/common_77_icon.png")
	 })
	   $('.hot-bankuai-two').on('mouseover',function(){
	 	$('.hot-bankuai-two').find("img").attr("src","img/140.gif")
	 })
	  $('.hot-bankuai-two').on('mouseout',function(){
	 	$('.hot-bankuai-two').find("img").attr("src","img/common_140_icon.png")
	 })
	   $('.hot-bankuai-three').on('mouseover',function(){
	 	$('.hot-bankuai-three').find("img").attr("src","img/121.gif")
	 })
	  $('.hot-bankuai-three').on('mouseout',function(){
	 	$('.hot-bankuai-three').find("img").attr("src","img/common_121_icon.png")
	 })
	    $('.hot-bankuai-four').on('mouseover',function(){
	 	$('.hot-bankuai-four').find("img").attr("src","img/113.gif")
	 })
	  $('.hot-bankuai-four').on('mouseout',function(){
	 	$('.hot-bankuai-four').find("img").attr("src","img/common_113_icon.png")
	 })
	   $('.collapsible').collapsible();
})

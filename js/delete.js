$(() =>{
	let i = $('.details').length;
	for(let j = 0; j < i; j++){
		$('.details h4').eq(j).html('最美志愿者');
		$('.details span').eq(j).html('人民英雄');
	}
	
	setTimeout(function(){
		$('.preloader').hide();
	},2000)
	// for(let i = 0;  i < $('.social').length; i++){
	// 	$('.social').remove();
	// }
		$('.social').remove();
	
		
			$(' .owl-dots').empty();
			$(' .owl-dots').append('<div class="owl-dot active"><span><button type="button" class="theme-btn" data-toggle="modal" data-target="#mymessage" id="sendbtn">我要留言</button></span></div>');
	
		 
		
	//点击导航部分
	$('.top-a').on('click',function(){
		var t = $('.navbar-header').offset().top;
		console.log(t);
		$('html,body').animate({
			scrollTop:t+2
			},500)
	})
	
	$('.conten-a').on('click',function(){
		var t = $('.section-padding').offset().top;
		console.log(t);
		$('html,body').animate({
			scrollTop:t+2
			},500)
	})

	$('.message-a,.message-btn').on('click',function(){
		var t = $('.testimonial-section').offset().top;
		console.log(t);
		$('html,body').animate({
			scrollTop:t+2
			},1200)
	})
	
 })
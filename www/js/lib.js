
$(document).ready(function($) {
	
	// 手机导航
	$('#index-hd .menuBtn').append('<b></b><b></b><b></b>');
	$('#index-hd .menuBtn').click(function(event) {
		$(this).toggleClass('open');
		$(this).siblings(".nav").toggle();
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			$('#index-hd').addClass('fd-fix');
		}else{
			$('body').removeClass('open');
			// $('.index #hd').removeClass('fd-fix');
			var _top = $(window).scrollTop();
			if( _top<84 ){
			    $('#index-hd').removeClass('fd-fix');
			}else{
			    $('#index-hd').addClass('fd-fix');
			}
		}
	});

	// 导航
 	function myNav(){
 	    var _winw = $(window).width();
 	    if( _winw>767 ){
 	       //$('.nav').show();
 	        $('.nav').hide();
 	        $('.nav li').bind('mouseenter',function() {
 	            $(this).find('dl').stop().slideDown();
 	            if( $(this).find('dl').length ){
 	                $(this).addClass('ok');
 	            }
 	        });
 	        $('.nav li').bind('mouseleave',function() {
 	            $(this).removeClass('ok');
 	            $(this).find('dl').stop().slideUp();
 	        });
 	        $('body').removeClass('open');
 	    }else{
 	        $('.nav').hide();
 	        $('.nav li').unbind('mouseenter mouseleave');
 	        $('.nav .v1').click(function(){
 	            if( $(this).siblings('dl').length ){
 	                $(this).siblings('dl').stop().slideToggle();
 	                return false;
 	            }
 	        });
 	    }
 	}
 	myNav();
 	$(window).resize(function(event) {
 	    myNav();
 	});

	// 导航
 	function myNv(){
 	    var _winw = $(window).width();
 	    if( _winw>767 ){
 	       $('#nv').show();
 	        $('#nv li').bind('mouseenter',function() {
 	            $(this).find('dl').stop().slideDown();
 	            if( $(this).find('dl').length ){
 	                $(this).addClass('ok');
 	            }
 	        });
 	        $('#nv li').bind('mouseleave',function() {
 	            $(this).removeClass('ok');
 	            $(this).find('dl').stop().slideUp();
 	        });
 	        $('body').removeClass('open');
 	    }else{
 	        $('#nv').hide();
 	        $('#nv li').unbind('mouseenter mouseleave');
 	        $('#nv .v1').click(function(){
 	            if( $(this).siblings('dl').length ){
 	                $(this).siblings('dl').stop().slideToggle();
 	                return false;
 	            }
 	        });
 	    }
 	}
 	myNv();
 	$(window).resize(function(event) {
 	    myNv();
 	});
 	
 	// 手机导航
 	$('#hd .menuBtn').append('<b></b><b></b><b></b>');
 	$('#hd .menuBtn').click(function(event) {
 		$(this).toggleClass('open');
 		var _winw = $(window).width();
 		var _winh = $(window).height();
 		if( $(this).hasClass('open') ){
 			$('body').addClass('open');
 			if( _winw<=768 ){
 				$('#nv').stop().slideDown();
 			}
 		}else{
 			$('body').removeClass('open');
 			if( _winw<=768 ){
 				$('#nv').stop().slideUp();
 			}
 		}
 	});


 	function myVar(){
 	    var _winw = $(window).width();
 	    if( _winw>767 ){
 	        $('.val').bind('mouseenter',function() {
		 		$(".val dl").stop().slideDown();
 	        });
 	        $('.val').bind('mouseleave',function() {
		 		$(".val dl").stop().slideUp();
 	        });
 	        $('body').removeClass('open');
 	    }else{
 	        $('.val').unbind('mouseenter mouseleave');
 	        $('.val').click(function(){
		 		$(".val dl").stop().slideToggle();
 	        });
 	    }
 	}
 	myVar();
 	$(window).resize(function(event) {
 	    myVar();
 	});

 	function myth(){
 	    var _winw = $(window).width();
 	    if( _winw>767 ){
 	        $('.m-think').bind('mouseenter',function() {
		 		$(".m-thinkBox").stop().slideDown();
 	        });
 	        $('.m-think').bind('mouseleave',function() {
		 		$(".m-thinkBox").stop().slideUp();
 	        });
 	        $('body').removeClass('open');
 	    }else{
 	        $('.m-think').unbind('mouseenter mouseleave');
 	        $('.m-think').click(function(){
		 		$(".m-thinkBox").stop().slideToggle();
 	        });
 	    }
 	}
 	myth();
 	$(window).resize(function(event) {
 	    myth();
 	});
 	


	// 返回顶部浮窗
	$('.toTop').click(function(){
	    $('body,html').animate({
	        scrollTop: 0
	    }, 500);
	    return false;
	});
	$(window).scroll(function(){
	    var _top = $(window).scrollTop();
	    if( _top<200 ){
	        $('.float-bar').stop().hide();
	    }else{
	        $('.float-bar').stop().show();
	    }
	});

	$(window).scroll(function(){
	    var _top = $(window).scrollTop();
	    if( _top<84 ){
	        $('#index-hd').removeClass('fd-fix');
	    }else{
	        $('#index-hd').addClass('fd-fix');
	    }
	});

	$(".float-bar a").hover(function(){
		$(this).find("div").addClass('open');
	},function(){
		$(this).find("div").removeClass('open');
	});

	$('#hd .lang').mouseenter(function(event) {
		$(this).find('dl').stop().slideDown();
	});
	$('#hd .lang').mouseleave(function(event) {
		$(this).find('dl').stop().slideUp();
	});

	
});
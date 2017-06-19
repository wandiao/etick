$(function() {
	//table斑马条纹
	var tr = $('.table-striped tbody tr');
	tr.each(function(index) {
		if(index%2 !== 0) {
			$(this).addClass('even');
		}else{
			$(this).addClass('odd');
		}
	})
	//展示用户下拉选项
	var cancelBtn = $('.cashier-record-list .cancel');
	cancelBtn.on('click',function(e) {
		$('.dialog-wrapper').show();
		$('.modal').show();
	})
	$('.dialog .cancel').on('click',function() {
		$('.dialog-wrapper').hide();
		$('.modal').hide();
	})
	$('.u-wrapper').click(function() {
		$('.u-option').toggle();
	})
	//
	// 当前页面显示高亮
	var currurl = location.href;
	var urls = $('.menu-list li a');
	if(currurl.indexOf('payment-detail')!= -1) {
		urls.eq(2).addClass("active");
	}
	if(currurl.indexOf('shop-detail')!= -1) {
		urls.eq(1).addClass("active");
	}
	if(currurl.indexOf('billing-record')!= -1) {
		urls.eq(3).addClass("active");
	}
	urls.each(function(index,el) {
		if(currurl.indexOf($(this).attr('href'))!= -1) {
			$(this).addClass('active');
		}
	})

	//初始化select
	$('select').comboSelect();

	//屏幕匹配
	var screenWidth;
	screenWidth = window.screen.width;
	// alert(screenWidth);
	if(screenWidth <= 1180) {
		$('html').addClass('ss');
	}
	if(screenWidth <= 800) {
		$('html').addClass('ss8');
	}
	$(window).resize(function(e){
		var clientWidth = document.body.clientWidth;
		if(clientWidth <= 1180) {
			$('html').addClass('ss');
		}else{
			$('html').removeClass('ss');
		}
		if(screenWidth <= 800) {
			$('html').addClass('ss8');
		}else{
			$('html').removeClass('ss8');
		}
	})
})
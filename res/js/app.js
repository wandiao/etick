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
	urls.each(function(index,el) {
		if(currurl.indexOf($(this).attr('href'))!= -1) {
			$(this).addClass('active');
		}
	})
	$('select').comboSelect();

	//屏幕
	var screenWidth;
	screenWidth = window.screen.width;
	// alert(screenWidth);
	if(screenWidth <= 1180) {
		$('html').addClass('ss');
	}
	if(screenWidth <= 800) {
		$('html').addClass('ss8');
	}
	
	
})
$(function () {
	var tabAnchor = $('.tabs-nav li'),
		tabPanel = $('.tabs-panel');
		
	tabAnchor.on('click',function(e){
		e.preventDefault();

		/*
		tabAnchor.find('a').removeClass('active'); //모두빼고
		$(this).find('a').addClass('active');// 그 요소에만 추가
		*/

		$(this).find('a').addClass('active'); //내가 클릭한요소만 active추가
		$(this).siblings().find('a').removeClass('active'); //나머지는 모두 뺌

		//var NewLink = $(this).attr('href');

		
		tabPanel.hide();
		
		var $targetIdx = $(this).index(); //선택된 리스트의 index 번호를 가져와서 
		//console.log($targetIdx);
		tabPanel.eq($targetIdx).show(); //tabPanel의 eq와 매칭시켜서 보여줌

		

	});
	
	//열자마자 강제로 클릭이라는 방아쇠를 당김!
	tabAnchor.eq(0).trigger('click');		

});


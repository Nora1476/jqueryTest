이미지를 비율 유지하면서 화면 늘이고 줄이기 
https://www.youtube.com/watch?v=5TR0v0rmgj0&list=PL-qMANrofLyu4HcK14ntl-o7d-eHxo7-U&index=30


1. html , body, 해당 이미지가 포함된 태그까지 height 속성은 100%로 상속을 받고 있어야함.

2.
    full-bg (이미지를 포함하고있는 태그)
    
    1) 높이에 맞춰 이미지가 늘어난 경우
    height : 100% 현재 브라우저의 높이
    width : 현재이미지의 높이(브라우저의 높이) * 원래 이미지의 미율
    left : (브라우저너비 - 이미지너비)/2
    top : 0


    2) 너비에 맞춰 이미지가 늘어난 경우
    width: 100%  현재 브라우저의 너비
    height: (이미지 너비/ 이미지 비율)
    top: (이미지 높이 - 브러우저 높이)/2
   



   	
<?php
	@session_start();
	//print_r($_SESSION);

	//로그인 세션이 없을 경우 admin_amin.php로 이동하여 로그인 유도
	if(!isset($_SESSION['username'])) {
	   
	echo "<script>alert('로그인이 필요한 페이지 입니다.')</script>";
	echo "<script>location.replace('index_admin.php');</script>";
	
	} 
?>


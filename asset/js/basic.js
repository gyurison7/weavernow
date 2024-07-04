/* Info
 ========================================================================== */
/**
 * 1. Writer: Ajin Lee. Sunhyeong Kim. (Weaverloft Corp.)
 * 2. Production Date: 2023-01-02
 * 3. Client: 서울대학교병원 융합의학기술원
 */

/*========== vh ==========*/
$(function () {
	var vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', '${vh}px')
	window.addEventListener('resize', () => {
		var vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', '${vh}px')
	});
});

/*========== Basic ==========*/
/* Top Btn */
$(function () {
	$(window).scroll(function(e) {
		e.preventDefault(); 
        FloatBtn();
		if ($(this).scrollTop() > 100) {
			$('#top-btn').fadeIn();
		} else {
			$('#top-btn').fadeOut();
		}
	});
	function FloatBtn(){
		var WindowT = $(window).scrollTop();
		var FooterHt = $('#footer').outerHeight();
		var DocHt = $(document).height();
        var FloationgVal = DocHt - $(window).height() - FooterHt - ($(window).height()*0.02);

        if (WindowT >= FloationgVal) {
            $('#top-btn').addClass('on');
        } else {
            $('#top-btn').removeClass('on');
        }
	}
	$('#top-btn').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 400);
		return false;
	});
});

/* Input number + comma */
$(document).on('keyup', 'input[name=number]', function (event) {
	if (event.keyCode === 65 || event.keyCode === 17) return; //Ctrl + A 시 전체선택 안됨 이슈 해결
	if (this.value == '0') return;
	let cursorIndex = this.selectionStart;
	const before = this.value.substring(0, cursorIndex).match(/,/g)?.length;
	// this.value = this.value.replace(/[^0-9]/g, ''); // 입력값이 숫자가 아니면 공백
	this.value = this.value.replace(/[^-0-9]/g, ''); // 입력값이 숫자가 아니면 공백 (.제외)
	this.value = (this.value.indexOf("-") === 0 ? "-" : "") + this.value.replace(/[-]/gi, ''); //-가 있다면 replace
	this.value = this.value.replace(/(^0+)/g, ''); // 맨 앞이 0이면 공백
	this.value = this.value.replace(/,/g, ''); // ,값 공백처리
	this.value = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 정규식을 이용해서 3자리 마다 , 추가
	const after = this.value.substring(0, cursorIndex).match(/,/g)?.length;
	if (before != after) cursorIndex++; // ',' 추가시 커서 위치 조정
	this.setSelectionRange(cursorIndex, cursorIndex);
});

// 일반 num comma
$(function(){
	if($('.num').length > 0){
		$('.num').each(function(index,el){
			var num = $(el).text();
			var numCom = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			$('.num').eq(index).text(numCom);
		});
	}
});

/* Touch-mark */
$(document).ready(function() {
	var isDragging = false;
	// 드래그 시작 시
	$('.touch-area').on('mousedown touchstart', function() {
		isDragging = true;
		$(this).children('.touch-mark').addClass('off');
	});
	// 문서의 다른 부분을 터치할 때
	$(document).on('mousedown touchstart', function(event) {
		// 현재 터치 이벤트가 발생한 요소가 .touch-area인지 확인
		if (!$(event.target).closest('.touch-area').length) {
			$('.touch-mark').removeClass('off');
		}
	});
});








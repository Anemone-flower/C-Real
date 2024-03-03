document.addEventListener("DOMContentLoaded", function() {
    // 네비게이션 링크 클릭 시 스크롤링 기능 추가
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // 모바일 기기로 접속 시 경고 메시지 표시
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    window.onload = function() {
        if (isMobileDevice()) {
            alert("이 웹사이트는 모바일 기기에 최적화되지 않았을 수 있습니다. 원활한 사용을 위해 데스크톱으로 접속해주세요!");
        }
    };

    // 이스터에그 발동 함수
    function easter(){
        alert("축하해ㅡ! 이스터에그를 찾았구나?");
    }

    // 스크롤 방지
    document.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, { passive: false });
});

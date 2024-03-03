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
            alert("데스크톱을 이용하면 훨씬 쾌적한 이용이 가능합니다!");
        }
    };

    document.getElementById("name").addEventListener("click", function() {
        easter();
    });
    
    function easter() {
        alert("축하해ㅡ! 이스터에그를 찾았구나?");
    }
});

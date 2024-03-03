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

    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // 모바일 기기로 접속했을 경우 경고 메시지 표시
    window.onload = function() {
        if (isMobileDevice()) {
            alert("이 웹사이트는 모바일 기기에 최적화되지 않았을 수 있습니다.");
        }
    };

function easter(){
    alert("축하해ㅡ! 이스터에그를 찾았구나?");
}
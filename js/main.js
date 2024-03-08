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


window.onload = function() {
    var confirmLeave = confirm("C,REAL은 보다 더 나은 웹사이트 제공을 위해 재단장 중입니다! 기다려주세요!");
    if (confirmLeave) {
        window.location.href = "about:blank";
    } else {
        window.location.href = "about:blank";
        window.addEventListener("beforeunload", function(event) {
            event.preventDefault();
        });
    }
};



    // 이름 클릭 시 이스터에그 표시
    document.getElementById("name").addEventListener("click", function() {
        easter();
    });
    
    function easter() {
        alert("축하해ㅡ! 이스터에그를 찾았구나?");
    }
});


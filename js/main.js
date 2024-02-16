window.onload = function() {
    var footerHeight = document.getElementsByTagName("footer")[0].offsetHeight;
    document.body.style.paddingBottom = footerHeight + "px";

    var lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // 아래로 스크롤 시
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                // 페이지 맨 아래에 도달했을 때
                window.scrollTo(0, 0); // 페이지 맨 위로 스크롤
            }
        }
        lastScrollTop = st <= 0 ? 0 : st; // 페이지 맨 위에서 스크롤할 때
    }, false);
}
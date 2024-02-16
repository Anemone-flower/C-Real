    window.onload = function() {
      var splashScreen = document.getElementById("splash-screen");
      var createGame = document.getElementById("create-game");
      var realityOfImagine = document.getElementById("reality-of-imagine");

      splashScreen.style.display = "block";

      // Fade in effect
      fadeIn(createGame, 1000);
      fadeIn(realityOfImagine, 2000);

      function fadeIn(element, duration) {
        var interval = 20;
        var opacity = 0;
        var targetOpacity = 1;
        var increment = interval / duration;

        var timer = setInterval(function() {
          opacity += increment;
          element.style.opacity = opacity;

          if (opacity >= targetOpacity) {
            clearInterval(timer);
            setTimeout(function() {
              document.body.style.opacity = 0; // 전체 화면을 서서히 희미하게 만듭니다.
              setTimeout(function() {
                window.location.href = "index.html"; // 이동할 사이트의 URL을 입력하세요
              }, 1000); // 1초 후에 이동
            }, 2000); // 2초 후에 페이드 아웃 시작
          }
        }, interval);
      }
    };
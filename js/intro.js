window.onload = function() {
  var page = document.getElementById("page");
  var w1 = document.getElementById("word1");
  var w2 = document.getElementById("word2");
  var kw1 = document.getElementById("kword1");
  var kw2 = document.getElementById("kword2");

  page.style.display = "block";

  // Fade in effect
  fadeIn(w1, 1000);
  fadeIn(w2, 1500);

  fadeIn(kw1, 1000);
  fadeIn(kw2, 1500);

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
          document.body.style.opacity = 0; 
          setTimeout(function() {
            window.location.href = "test.html"; 
          }, 1000);
        }, 2000);
      }
    }, interval);
  }
};
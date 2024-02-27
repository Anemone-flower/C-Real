document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const C_KEY_CODE = 67;

function openTextInput() {
    const userInput = alert("C,REAL 이벤트 힌트 : 1호관 계단 어딘가.");
}

function keyPressHandler(event) {
    if (event.keyCode === C_KEY_CODE) {
        openTextInput();
    }
}

document.addEventListener("keydown", keyPressHandler);

const body = document.body;


window.onload  = function () {
    body.style.opacity = 0;
    setInterval(showBody,50);
}



function showBody() {
    body.style.transition = ("all 2s");
    body.style.opacity = 1;
}z

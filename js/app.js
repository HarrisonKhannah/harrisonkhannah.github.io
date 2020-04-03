const body = document.innerhtml;
const html = document.innerhtml;


window.onload  = function () {
    body.style.opacity = 0;
    setInterval(showBody,50);
    html.style.overflow = "hidden";
}



function showBody() {
    body.style.transition = ("all 2s");
    body.style.opacity = 1;
    html.style.overflow = "auto"

}

var coll = document.getElementsByClassName("collapsable");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
     var content = this.nextElementSibling;
    content.classList.toggle('active');


            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
    });
}

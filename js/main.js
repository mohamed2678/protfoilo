let links = document.querySelector(".links");
let uL = document.querySelector("ul");

links.addEventListener("click", function(e){
    e.stopPropagation();
    uL.classList.toggle("show");

});
document.addEventListener("click", function(e){
    if (e.target !== links) {
        uL.classList.remove("show");
    }
});
$("#content div").draggable({
    containment: "#content"
});

var photos = document.querySelectorAll(".content__image");
photos.forEach(function(el) {
    el.remove()
})

var photoButtons = document.querySelectorAll(".content__photo-btn");
photoButtons.forEach(function(el) {
    el.addEventListener("click",function() {
        var content = document.querySelector(".content");
        var variable = false;
        if(content.offsetHeight == 1100) {
            content.style.height = "1300px";
            variable = true;
        }
        if(content.offsetHeight == 900) {
            content.style.height = "1150px";
            variable = true;
        }
        if(content.offsetHeight == 850) {
            content.style.height = "1050px";
            variable = true;
        }
        if(content.offsetHeight == 700) {
            content.style.height = "950px";
            variable = true;
        }
        if(content.offsetHeight == 400) {
            content.style.height = "600px";
            variable = true;
        }
        if(variable) {
            var photo1 = document.createElement("img");
            var photo2 = document.createElement("img");
            photo1.classList.toggle("content__image");
            photo1.setAttribute("src","img/boogaloosam.png");
            photo2.classList.toggle("content__image");
            photo2.setAttribute("src","img/popinpete.jpg");
            var photoButtons = document.querySelectorAll(".content__text");
            photoButtons[0].appendChild(photo1);
            photoButtons[1].appendChild(photo2);
        }
        
    })
});

var colorPickSquares = document.querySelectorAll(".color-pick__square");

colorPickSquares.forEach(function(el) {
    el.addEventListener("click", function() {
        document.querySelector("html").style.background = window.getComputedStyle( el ,null).getPropertyValue('background-color'); 
    }); 
});
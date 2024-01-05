
                                                        // home section starts

function change1(){
    document.getElementById("home").style.backgroundImage = "url(style_textile_pvt_ltd_cover.jpeg)";
}

function change2(){
    document.getElementById("home").style.backgroundImage = "url(st-slide2.jpg)";
}

function change3(){
    document.getElementById("home").style.backgroundImage = "url(st-slide6.jpg)";
}


function changeBackgroundImage(){
const backgroundImages = [
    'url("style_textile_pvt_ltd_cover.jpeg")',
    'url("st-slide2.jpg")',
    'url("st-slide6.jpg")'
]

    const bgImg = document.getElementById("home");
    const bg = backgroundImages[Math.floor(Math.random()* backgroundImages.length)];
    bgImg.style.backgroundImage = bg;    
}

setInterval(changeBackgroundImage, 5000);

                                                        // home section ends
/*
var a = 0;
setInterval(Anim, 100);

function Anim(){
    a = a + 10;
    var target = document.getElementById("test");
    target.style.marginRight = a + "px";
}*/

const carousel = document.querySelector('.carousel');
const img = document.querySelectorAll('.slide');
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var radio3 = document.getElementById("radio3");
var radio4 = document.getElementById("radio4");
var radio5 = document.getElementById("radio5");

const prev = document.querySelector('#prevbutton');
const next = document.querySelector('#nextbutton');

let count = 1; 
const SIZE = img[0].clientWidth;

carousel.style.transform = 'translateX(' + (-SIZE * count) + 'px)';

//for (let i = 0; i < count; i--) {
// setTimeout(function(){
//     next.click();
//     console.log('next');
// }, 1000)

var loop_click = setTimeout(mycode, 5000);
function mycode() {
    next.click();
  loop_click = setTimeout(mycode, 5000); // repeat gambar
}


next.addEventListener('click', () => {
    if(count >= img.length - 1) return;
    carousel.style.transition = "transform 0.4s ease-in-out";
    count++;
    carousel.style.transform = 'translateX(' + (-SIZE * count) + 'px)';
});

prev.addEventListener('click', () => { 
    if(count <= 0) return;
    carousel.style.transition = "transform 0.4s ease-in-out";
    count--;
    carousel.style.transform = 'translateX(' + (-SIZE * count) + 'px)';
});

carousel.addEventListener('transitionend', () => {
    radio1.onclick = function() {
        count = 4;
        console.log("radio1");
        next.click();
    };
    radio2.onclick = function() {
        count = 0;
        console.log("radio2");
        next.click();
    };
    radio3.onclick = function() {
        count = 1;
        console.log("radio3");
        next.click();
    };
    radio4.onclick = function() {
        count = 2;
        console.log("radio4");
        next.click();
    };
    radio5.onclick = function() {
        count = 3;
        console.log("radio5");
        next.click();
    };
    console.log(count);
    if(img[count].id === 'lastSlide'){
        carousel.style.transition = "none";
        count = img.length - 2;
        carousel.style.transform = 'translateX(' + (-SIZE * count) + 'px)';
    }

    if(img[count].id === 'firstSlide'){
        carousel.style.transition = "none";
        count = img.length - count;
        console.log(count);
        carousel.style.transform = 'translateX(' + (-SIZE * count) + 'px)';
    }
    if(count === 0){
        radio1.classList.add("enable");
    }else{
        radio1.classList.remove("enable");
    }

    if(count === 1){
        radio2.classList.add("enable");
    }
    else{
        radio2.classList.remove("enable");
    }

    if(count === 2){
        radio3.classList.add("enable");
    }
    else{
        radio3.classList.remove("enable");
    }

    if(count === 3){
        radio4.classList.add("enable");
    }
    else{
        radio4.classList.remove("enable");
    }

    if(count === 4){
        radio5.classList.add("enable");
    }
    else{
        radio5.classList.remove("enable");
    }
    if(count === 5 || count === 0){
        radio1.classList.add("enable");
    }

});
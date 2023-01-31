let lights = document.querySelectorAll('#isiqfor > div'),
    timer = [5000, 2000, 7000],counter = 0;
var lights2 = document.querySelectorAll('#isiqfor2 > div'),
    timer2 = [5000, 2000, 7000], counter2 = 0;

window.addEventListener('load',start);

var start = setTimeout(function(){
    traffic();
    traffic2();
},5000);

function traffic(){
    for (i = 0; i<lights.length; i++){
        lights[i].classList.remove('on')
    }
    lights[counter].classList.add('on');
    setTimeout(traffic, timer[counter]);
    counter = (counter + 1) % timer.length;
}

function traffic2(){
    for (i = 0; i<lights2.length; i++){
        lights2[i].classList.remove('on')
    }
    lights2[counter2].classList.add('on');
    setTimeout(traffic2, timer2[counter]);
    counter2 = (counter2 + 1) % timer2.length;
}
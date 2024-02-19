let slider3 = document.querySelector('.slider3 .list');
let items3 = document.querySelectorAll('.slider3 .list .item');
let next3 = document.getElementById('next3');
let prev3 = document.getElementById('prev3');
let dots3 = document.querySelectorAll('.slider3 .dots li');

let lengthItems3 = items3.length - 1;
let active3 = 0;
next3.onclick = function(){
    active3 = active3 + 1 <= lengthItems3 ? active3 + 1 : 0;
    reloadSlider3();
}
prev3.onclick = function(){
    active3 = active3 - 1 >= 0 ? active3 - 1 : lengthItems3;
    reloadSlider3();
}
// let refreshInterval3 = setInterval(()=> {next3.click()}, 3000);

function reloadSlider3(){
    slider3.style.left = -items3[active3].offsetLeft + 'px';
    // 
    let last_active_dot3 = document.querySelector('.slider3 .dots li.active');
    last_active_dot3.classList.remove('active');
    dots3[active3].classList.add('active');

    // clearInterval(refreshInterval3);
    // refreshInterval3 = setInterval(()=> {next3.click()}, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active3 = key;
         reloadSlider3();
    })
})
window.onresize = function(event) {
    reloadSlider3();
};
let slider4 = document.querySelector('.slider4 .list');
let items4 = document.querySelectorAll('.slider4 .list .item');
let next4 = document.getElementById('next4');
let prev4 = document.getElementById('prev4');
let dots4 = document.querySelectorAll('.slider4 .dots li');

let lengthItems4 = items4.length - 1;
let active4 = 0;
next4.onclick = function(){
    active4 = active4 + 1 <= lengthItems4 ? active4 + 1 : 0;
    reloadSlider4();
}
prev4.onclick = function(){
    active4 = active4 - 1 >= 0 ? active4 - 1 : lengthItems4;
    reloadSlider4();
}
// let refreshInterval4 = setInterval(()=> {next4.click()}, 4000);

function reloadSlider4(){
    slider4.style.left = -items4[active4].offsetLeft + 'px';
    // 
    let last_active_dot4 = document.querySelector('.slider4 .dots li.active');
    last_active_dot4.classList.remove('active');
    dots4[active4].classList.add('active');

    // clearInterval(refreshInterval4);
    // refreshInterval4 = setInterval(()=> {next4.click()}, 4000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active4 = key;
         reloadSlider4();
    })
})
window.onresize = function(event) {
    reloadSlider4();
};
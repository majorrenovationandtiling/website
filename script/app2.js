let slider2 = document.querySelector('.slider2 .list');
let items2 = document.querySelectorAll('.slider2 .list .item');
let next2 = document.getElementById('next2');
let prev2 = document.getElementById('prev2');
let dots2 = document.querySelectorAll('.slider2 .dots li');

let lengthItems2 = items2.length - 1;
let active2 = 0;
next2.onclick = function(){
    active2 = active2 + 1 <= lengthItems2 ? active2 + 1 : 0;
    reloadSlider2();
}
prev2.onclick = function(){
    active2 = active2 - 1 >= 0 ? active2 - 1 : lengthItems2;
    reloadSlider2();
}
// let refreshInterval2 = setInterval(()=> {next2.click()}, 3000);

function reloadSlider2(){
    slider2.style.left = -items2[active2].offsetLeft + 'px';
    // 
    let last_active_dot2 = document.querySelector('.slider2 .dots li.active');
    last_active_dot2.classList.remove('active');
    dots2[active2].classList.add('active');

    // clearInterval(refreshInterval2);
    // refreshInterval2 = setInterval(()=> {next2.click()}, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active2 = key;
         reloadSlider2();
    })
})
window.onresize = function(event) {
    reloadSlider2();
};
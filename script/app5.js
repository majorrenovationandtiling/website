let slider5 = document.querySelector('.slider5 .list');
let items5 = document.querySelectorAll('.slider5 .list .item');
let next5 = document.getElementById('next5');
let prev5 = document.getElementById('prev5');
let dots5 = document.querySelectorAll('.slider5 .dots li');

let lengthItems5 = items5.length - 1;
let active5 = 0;
next5.onclick = function(){
    active5 = active5 + 1 <= lengthItems5 ? active5 + 1 : 0;
    reloadSlider5();
}
prev5.onclick = function(){
    active5 = active5 - 1 >= 0 ? active5 - 1 : lengthItems5;
    reloadSlider5();
}
// let refreshInterval5 = setInterval(()=> {next5.click()}, 5000);

function reloadSlider5(){
    slider5.style.left = -items5[active5].offsetLeft + 'px';
    // 
    let last_active_dot5 = document.querySelector('.slider5 .dots li.active');
    last_active_dot5.classList.remove('active');
    dots5[active5].classList.add('active');

    // clearInterval(refreshInterval5);
    // refreshInterval5 = setInterval(()=> {next5.click()}, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active5 = key;
         reloadSlider5();
    })
})
window.onresize = function(event) {
    reloadSlider5();
};
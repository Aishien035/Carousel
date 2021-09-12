
const open = document.querySelectorAll('.fa-angle-double-left');
const slider = document.querySelectorAll('.swiper-details');
let index = 0;
        
for (let i = 0; i < slider.length; i++) {
    open[i].addEventListener('click', () => {
        index = i;
    })

}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-angle-double-left')) {
        slider[index].style.clipPath = 'circle(130% at 110% 50%)';
    }
    else if(e.target.classList.contains('swiper-details')) {
        for (let i = 0; i < slider.length; i++) {
            slider[i].style.clipPath = 'circle(0% at 110% 50%)';
        }
    }
    else if(e.target.classList.contains('swiper')) {
        for (let i = 0; i < slider.length; i++) {
            slider[i].style.clipPath = 'circle(0% at 110% 50%)';
        }
                
    }
});

const load = document.querySelector('.load');

setTimeout(function clip() {
    load.style.clipPath = 'circle(0% at 50% 50%)';
}, 15000)
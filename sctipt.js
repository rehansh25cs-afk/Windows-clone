let context = document.querySelector('.contextmenu')

let start = document.querySelector('.start-menu')

let flag = 0;
document.body.addEventListener('contextmenu', (dets) => {
    dets.preventDefault()
    context.style.display = 'block'
    context.style.left = dets.x + 'px'
    context.style.top = dets.y + 'px'




})

document.querySelector('.windows').addEventListener('click', (e) => {
    console.log('hello');
    e.stopPropagation(); 
   
    if (flag === 0) {
        start.style.bottom = '10' + '%'
        flag = 1;
    } else if(flag = 1) {
        start.style.bottom = '-100' + '%'
        flag = 0
    }
})

document.body.addEventListener('click', (dets) => {
    context.style.display = 'none';
    if (flag === 1) {
        start.style.bottom = '-100' + '%'
        flag = 0
    }
})


let context = document.querySelector('.contextmenu')

let flag = 0;
document.body.addEventListener('contextmenu', (dets) => {
    dets.preventDefault()
    context.style.display = 'block'
    context.style.left = dets.x + 'px'
    context.style.top = dets.y + 'px'



})

document.body.addEventListener('click', (dets) => { 
    context.style.display = 'none';
})
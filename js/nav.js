const navToggle=document.querySelector('.menu-button')

navToggle.addEventListener('click', _ => {
    console.log('beep')
    document.body.classList.toggle('nav-is-open')
})


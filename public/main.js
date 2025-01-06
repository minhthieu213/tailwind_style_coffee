const topMenu = document.getElementById('cf-menu')
const toggleTopMenu = document.getElementById('cf-toggleTopMenu')

document.addEventListener('click', (e) => {
    if(toggleTopMenu.contains(e.target)){
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('cf-top-menu-expanded')
    }else{
        if(topMenu.classList.contains('cf-top-menu-expanded')){
            topMenu.classList.remove('cf-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})
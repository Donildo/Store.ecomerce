const menuBnt = document.querySelector('.menuBtn')
       const navlinks = document.querySelector('.navlink')

       menuBnt.addEventListener('click',()=>{
           navlinks.classList.toggle('')
       })
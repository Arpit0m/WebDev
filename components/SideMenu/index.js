
const sideMenu = document.getElementsByClassName('side-nav')[0]
const menuBtn = document.getElementById('toggle').addEventListener('click',function(){

    sideMenu.classList.remove('slide-out')
    sideMenu.classList.add('slide-in')
   
    
    
    
    
    
})

const closeBtn = document.getElementById('close-btn').addEventListener('click', function(){
    sideMenu.classList.remove('slide-in')
    sideMenu.classList.add('slide-out')


    

})
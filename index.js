//==================MENU SHOW IN Y DIRECTION HIDDEN===================//
const navMenu=document.getElementById('nav_menu'),
      navToggle=document.getElementById('nav_toggle'),
      navClose=document.getElementById('nav_close');
// ======================MENU SHOW================//
if(navToggle){
   navToggle.addEventListener('click',() =>{
    navMenu.classList.add('show-menu');
   })
}
if(navClose){
    navClose.addEventListener('click',() =>{
     navMenu.classList.remove('show-menu');
    })
}
//==================REMOVE MENU MOBILE=============//
const navLink = document.querySelectorAll('.nav_link');
function linkAction(){
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=> n.addEventListener('click',linkAction));

//==================BACKGROUND COLOR==================//
const purple=document.getElementById('purple'),
      blue=document.getElementById('blue'),
      green=document.getElementById('green'),
      pink=document.getElementById('pink');
const colorBg=document.querySelectorAll('.color-bg')
    
function changeBg(){
    let root=document.querySelector(':root')
    let color=this.className
    if(color === 'color-bg purple')
    {
        root.style.setProperty('--hue-color', '230')
    }
    else if(color === 'color-bg blue')
    {
        root.style.setProperty('--hue-color', '250')
    }
    else if(color === 'color-bg green')
    {
        root.style.setProperty('--hue-color', '142')
    }
    else
    {
        root.style.setProperty('--hue-color', '340')
    }
}
colorBg.forEach((eL) =>{
    eL.addEventListener('click',changeBg)
})
//==================ACCORDION SKILLS===============//
const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader=document.querySelectorAll('.skill-header');

function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i=0;i<skillsContent.length;i++)
    {
        skillsContent[i].className='skills-content skills-close'
    }
    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((eL) =>{
    eL.addEventListener('click', toggleSkills);
})
//=================QUALIFICATION TABS=============//
const tabs=document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', () =>{
        const target=document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification-active')
        })
        target.classList.add('qualification-active')
        tabs.forEach(tab =>{
            tab.classList.remove('qualification-active')
        })
        tab.classList.add('qualification-active')
    })
})
//==================SWIPPER================//
var swiper=new Swiper('.swiper-container',{
    effect:'coverflow',
    grabCursor: true,
    centeredSlides:true,
    slidesPerView:'auto',
    coverflowEffect: {
        rotate: 50,
        stretch:0,
        depth:100,
        modifier:1,
        slideShadows:true,

    },
    pagination: {
        el: '.swiper-pagination',
    },

})

//===================SERVICE MODAL=====================//
const modalViews=document.querySelectorAll('.services-modal'),
      modalBtns=document.querySelectorAll('.service-button'),
      modalCloses=document.querySelectorAll('.services-modal-close')

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn,i) =>{
    modalBtn.addEventListener('click',() =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose,i) =>{
    modalClose.addEventListener('click',() =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


//=====================FORM OPEN=====================//
var formclose=document.getElementById('form-close')
var form=document.getElementById('contact-form-open')

function toggleform(){
      formclose.classList.remove('form-close')
      formclose.classList.add('show-form')
      form.classList.add('form-close');
}


//==================SCROLL SECTION ACTIVE LINK=================//
const sections= document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight=current.offsetHeight
        const sectionTop=current.offsetTop - 50;
        sectionId=current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive);


//===================CHANGE BACKGROUND COLOR=================//
function scrollHeader(){
    const nav=document.getElementById('header')
    // when the scroll is higher than 200 viewport height, we add the scroll-header class to the header tag
    if(this.scrollY >=200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);


//==================SHOW SCROLL UP=================//
function scrollup(){
    const scrollTop= document.getElementById('scroll-up');
    // when the scroll is higher than 560 viewport height, we add the show-scroll class to the a tag
    if(this.scrollY >=560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollup);


//=================DARK LIGHT THEME================//
const themeButton=document.getElementById('theme-button');
const darkTheme='dark-theme'
const iconTheme='uil-sun'
// previously selected topic (if user selected)
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')
// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme=() => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon=() => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if the user previously choose a topic
if(selectedTheme){
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click',() =>{
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
import { attach } from './library/core.js'
import App from './components/App.js'
import dataPcCatagories from './data/Container/dataPcCatagories.js'

attach(App, document.getElementById('root'))


// Slide swiper
var swiper = new Swiper(".slide-banner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
});

// Slide swiper products
var swiper = new Swiper(".slide-container", {
    slidesPerView: 5,
    spaceBetween: 10,
    centerSlide: true,
    grabCursor: true,
    fade: true,
    rewind: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Hover vào main-menu
const menuItems = $$('.menu-item')
const menuTree = $('.menu-tree')

function active() {
    menuTree.classList.add('active')
}
function unactive() {
    menuTree.classList.remove('active')
}

menuItems.forEach((item, index) => {
    menuItems[index].addEventListener('mouseover', active)
})
menuItems.forEach((item, index) => {
    menuItems[index].addEventListener('mouseout', unactive)
})

menuTree.addEventListener('mouseover', active)
menuTree.addEventListener('mouseout', unactive)

// Render background_color PcCatagories

const pcItem = $$('.pc-item')

pcItem.forEach((item, index) => {
    item.style.backgroundColor = `${dataPcCatagories[index].backgroundColor}`
})
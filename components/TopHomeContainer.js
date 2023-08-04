import html from '../library/core.js'
import { MenuMain, Phone, payPhone, PhoneHot, Tablet, TabletHot, imgBanner } from '../data/Container/dataTopHome.js'


function TopHome() {
    return html`
        <div class="top-home">
            <div class="main-menu">
                <div class="menu-wrapper">
                    <div class="menu-list">
                        ${MenuMain.map((item, index) => (`
                            <div class="menu-item">
                                <div class="menu-item-left">
                                    <div class="menu-item-icon">
                                        <img class="" src="${item.icon}" alt="">
                                    </div>
                                    <div class="menu-item-content">
                                        <span>${item.title}</span>
                                    </div>
                                </div>
                                <div class="menu-item-icon-right">
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </div>
                        `))}
                    </div>
                </div>
            </div>
            <div class="menu-tree">
                <div class="row menu-tree-list">
                    <div class="col l-2-4 menu-tree-item">
                        <span class="menu-tree-title">Thương hiệu điện thoại</span>
                        <ul class="menu-tree-child">
                            ${Phone.map(item => (`
                                <li class="menu-tree-content">${item}</li>
                            `))}
                        </ul>
                    </div>
                    <div class="col l-2-4 menu-tree-item">
                        <span class="menu-tree-title">Mức giá điện thoại</span>
                        <ul class="menu-tree-child">
                            ${payPhone.map(item => (`
                                <li class="menu-tree-content">${item}</li>
                            `))}
                        </ul>
                    </div>
                    <div class="col l-2-4 menu-tree-item">
                        <span class="menu-tree-title">Điện thoại hot</span>
                        <ul class="menu-tree-child">
                            ${PhoneHot.map(item => (`
                                <li class="menu-tree-content">${item}</li>
                            `))}
                        </ul>
                    </div>
                    <div class="col l-2-4 menu-tree-item">
                        <span class="menu-tree-title">Thương hiệu Tablet</span>
                        <ul class="menu-tree-child">
                            ${Tablet.map(item => (`
                                <li class="menu-tree-content">${item}</li>
                            `))}
                        </ul>
                    </div>
                    <div class="col l-2-4 menu-tree-item">
                        <span class="menu-tree-title">Tablet hot</span>
                        <ul class="menu-tree-child">
                            ${TabletHot.map(item => (`
                                <li class="menu-tree-content">${item}</li>
                            `))}
                        </ul>
                    </div>
                </div>

            </div>
            <div class="slide-banner swiper">
                <div class="slide-banner-wrapper swiper-wrapper">
                    ${imgBanner.map(item => (`
                        <div class="slide-banner-img swiper-slide">
                            <a href="#">
                                <img src="${item}" alt="">
                            </a>
                        </div>
                    `))}
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="right-top-banner">
                <a href="" class="banner-right-item">
                    <img class="banner-right-img" src="./assets/img/banner-right/1.webp" alt="img-right">
                </a>
                <a href="" class="banner-right-item">
                    <img class="banner-right-img" src="./assets/img/banner-right/2.webp" alt="img-right">
                </a>
                <a href="" class="banner-right-item">
                    <img class="banner-right-img" src="./assets/img/banner-right/3.webp" alt="img-right">
                </a>
            </div>
        </div>
    `
}

export default TopHome
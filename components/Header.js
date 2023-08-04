import html from '../library/core.js'


function Header() {
    return html`
        <header class="header">
            <div class="header-top">
                <div class="header-top-title">
                    <div class="pulsing-btn"></div>
                    <a href="#">Đặt trước Galaxy Z 2023 - Nhận ưu đãi khủng đến 14 triệu</a>
                </div>
            </div>
            <div class="header-banner">
                <div class="header-banner-container">
                    <div class="banner-container-item">
                        <a href="">
                            <img src="./assets/img/header_top/2.webp" alt="">
                        </a>
                    </div>
                    <div class="banner-container-item">
                        <a href="">
                            <img src="./assets/img/header_top/1.webp" alt="">
                        </a>
                    </div>
                    <div class="banner-container-item">
                        <a href="">
                            <img src="./assets/img/header_top/3.webp" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="header-navbar">
                <div class="header-navbar-list">
                    <a href="#" class="header-navbar-brand">
                        <div class="box-logo__desktop">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 269.231 50"><defs><pattern id="patternLogo" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 530 95"><image width="530" height="95" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAABfCAYAAAC9ZC4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQzNUE1OThENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQzNUE1OTlENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDM1QTU5NkQ2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDM1QTU5N0Q2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMJt2kAAAPtSURBVHja7Nzbbts6FEDB0ND//zL7mhg1oqoSuS8zjwdBj8SbV4RYY875BQBwxcsQAABCAgAQEgCAkAAAhAQAgJAAAB5wGIJyznyfdwT4N7vPg/GCOGdid/91HnkiYWPZhHvG17gCJXgiAYDfuv3Sc5knEgCAkAAAhAQAICQAACEBACAkAAAhAQAICQCgBi+kAoCfMr95dvmLtzyRAACEBAAgJAAAIQEACAkAACEBAAgJAEBIAABCAgBo7uk3W+54O9hIeu3Dcty2ZnaN/yx6b7PovM3C69F5l/M+QryB86h8c8muezaPihno/z8Kj+0oNn9P39s0Z/Zb8JDZ/nl7FFqYla57NtpgM/A1jaLjPYrO393zNt2X/SYmfvd6YDH4IDOmVe5vFh73WXh8ZpDxibgenXeEDQkRYXOJnV73JgLNmXmLY+vTHN/awIFB1bmb1iViIkdIeBrhWn1wujdjIZCczU1j4uh2wwGu28F9fQxGwY1v7p7/APVHfM67p/dE6zV2JFuUFaJn+FAz/o0Owifmzrzlm7Pq89Y6JlaGxAg26RGue3w5FLuP/9i4trPO3RPzNjff45Pz5rwTE4/yx5Z54sf4u7+z/+YIMHaj+Nq4e4w7zFkHLX8xfFmgPiyxtjCuxu6262wXE55IAMT5IBQpseb66pOiVjEhJADgXFSICSEBAMuCokVMCAkAuBYUZ6JiVg8MIbGfr38C5I+KKzFR4vw/rAEf8gDOu1uC4rdwGN9+dr79bNo/tPVEAgDuj4px4mfeQyNlzAkJAHg2KD693v1vsZEuKIQEAKyLijMxkSoohAQArA2KM//tPSjCRoWQAICYgfEpKoQEAHApJsIFha9/3jOpAM47Vgvx1VFPJAAgd9BtfUIhJAAgf0x87YoJIQEAdWJCSAAAeWJiVUh4hzsAFIwJTyQEEIDzTkykCIlpc2Fuja25syeo5bVhkUZYqMPman9YmtOc42zunHcEs+uFVDPQpsmyuTq+LMaBZh7pOWdejpXIq/GEW6hYK/XHwtwZh6shJYAXhgQ4gI2J6wQh0XLDOmgAAcgnnkosDAkxQcVD19rIOT7mznknJpKGROYNbHNhPdQYK3NnjMTEYsfDC3Um3VwWjcOVXPvd/DnvVsSEdbYwJLJv7syLZRQaC+sn17XYNzmvxYejmAgdEgBQLSb4xtc/AQAhAQAICQBASAAAQgIAQEgAAEICABASAICQAACa82ZLAPjJa7D/gScSAICQAACEBAAgJAAAIQEAICQAACEBAAgJAKAGL6QCoINpCIQEdXhrHLDyvBERQgIA/PISkb+RAACEBAAgJAAAIQEAdPBHgAEAruC43nH9c2MAAAAASUVORK5CYII="></image></pattern></defs> <rect id="header__logo--bg" width="269.231" height="50" fill="url(#patternLogo)"></rect></svg>
                        </div>
                    </a>    
                    <a href="#" class="header-btn-category">
                        <i class="bi bi-card-text"></i>
                        <span>Danh mục</span>
                    </a>
                    <div href="#" class="header-btn-address">
                        <div class="box-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.22 30.36" width="25" height="25"><defs></defs> <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z" class="cls-1"></path> <path d="M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z" class="cls-1"></path></g></g></svg>
                        </div>
                        <div class="box-content">
                            <p>
                                Xem giá tại
                                <i class="bi bi-chevron-down btn-down btn-address-down"></i>
                            </p>
                            <span>Hà Nội</span>
                        </div>
                    </div>
                    <div class="header-search">
                        <div class="header-search-icon">
                            <i class="bi bi-search icon-search"></i>
                        </div>
                        <input type="text" placeholder="Bạn cần tìm gì?" class="header-search-input">
                        <div class="header-search-history">
                            <div class="search-history-sale">
                                <a href="" class="">
                                    <img class="history-sale-img" src="/assets/img/sale_off/smaill.webp" alt="sall off">
                                </a>
                            </div>
                            <div class="search-history-trend">
                            <div class="search-history-trend-title">
                                    <span class="history-trend-title">Xu hướng tìm kiếm</span>
                                    <svg width="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92.27 122.88" xml:space="preserve"><style type="text/css">.st0 {fill-rule: evenodd;clip-rule: evenodd;fill: #EC6F59;}.st1 {fill-rule: evenodd;clip-rule: evenodd;fill: #FAD15C;}</style> <g><path d="M18.61,54.89C15.7,28.8,30.94,10.45,59.52,0C42.02,22.71,74.44,47.31,76.23,70.89 c4.19-7.15,6.57-16.69,7.04-29.45c21.43,33.62,3.66,88.57-43.5,80.67c-4.33-0.72-8.5-2.09-12.3-4.13C10.27,108.8,0,88.79,0,69.68 C0,57.5,5.21,46.63,11.95,37.99C12.85,46.45,14.77,52.76,18.61,54.89L18.61,54.89z" class="st0"></path> <path d="M33.87,92.58c-4.86-12.55-4.19-32.82,9.42-39.93c0.1,23.3,23.05,26.27,18.8,51.14 c3.92-4.44,5.9-11.54,6.25-17.15c6.22,14.24,1.34,25.63-7.53,31.43c-26.97,17.64-50.19-18.12-34.75-37.72 C26.53,84.73,31.89,91.49,33.87,92.58L33.87,92.58z" class="st1"></path></g></svg>
                            </div>
                            <div class="search-history-trend-list">
                                    <div class="history-trend-list row">
                                        <div class="history-trend-item col l-6">
                                            <a href="" class="trend-item-small">
                                                <img src="./assets/img/icon_trend/1.webp" alt="iphone">
                                                <span>iPhone 14 Pro Max</span>
                                            </a>
                                        </div>
                                        <div class="history-trend-item col l-6">
                                            <a href="" class="trend-item-small">
                                                <img src="./assets/img/icon_trend/2.webp" alt="iphone">
                                                <span>Galaxy Tap S9 Series</span>
                                            </a>
                                        </div>
                                        <div class="history-trend-item col l-6">
                                            <a href="" class="trend-item-small">
                                                <img src="./assets/img/icon_trend/3.webp" alt="iphone">
                                                <span>Galaxy Watch6 40mm</span>
                                            </a>
                                        </div>
                                        <div class="history-trend-item col l-6">
                                            <a href="" class="trend-item-small">
                                                <img src="./assets/img/icon_trend/4.webp" alt="iphone">
                                                <span>Quạt chất lượng giá siêu hời</span>
                                            </a>
                                        </div>
                                        <div class="history-trend-item col l-6">
                                            <a href="" class="trend-item-small">
                                                <img src="./assets/img/icon_trend/5.webp" alt="iphone">
                                                <span>Galaxy Z Fold5 | Z Flip5</span>
                                            </a>
                                        </div>
                                        <div class="history-trend-item col l-6">
                                            <a href="" class="trend-item-small">
                                                <img src="./assets/img/icon_trend/6.webp" alt="iphone">
                                                <span>Oppo Reno 10 5G</span>
                                            </a>
                                        </div>
                                        <div class="history-trend-item col l-6">
                                            <a href="" class="trend-item-small">
                                                <img src="./assets/img/icon_trend/8.webp" alt="iphone">
                                                <span>Tai nghe Marshall</span>
                                            </a>
                                        </div>
                                        <div class="history-trend-item col l-6">
                                            <a href="" class="trend-item-small">
                                                <img src="./assets/img/icon_trend/7.webp" alt="iphone">
                                                <span>Nồi chiên không dầu giá sốc</span>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>
                        <div class="overlay-header"></div>
                    </div>
                    
                    <a href="#" class="header-navbar-item">
                        <div class="navbar-box-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.83 30.94" width="24" height="24"><defs><style>.cls-1 { fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.8px; }</style></defs> <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M6.78,20.27a31,31,0,0,0,10.29,8.06A15.91,15.91,0,0,0,22.82,30h.41a4.77,4.77,0,0,0,3.7-1.59,0,0,0,0,0,0,0,14.62,14.62,0,0,1,1.17-1.2c.28-.28.57-.56.85-.85A2.91,2.91,0,0,0,29,22L25.33,18.4a2.94,2.94,0,0,0-2.13-1,3.07,3.07,0,0,0-2.15,1l-2.16,2.17c-.2-.12-.4-.22-.6-.32a6.74,6.74,0,0,1-.66-.36,22.82,22.82,0,0,1-5.47-5A13.11,13.11,0,0,1,10.32,12c.56-.52,1.09-1.05,1.61-1.58l.55-.56a3.07,3.07,0,0,0,1-2.17,3.08,3.08,0,0,0-1-2.18l-1.8-1.8L10.07,3c-.4-.41-.82-.83-1.23-1.21A3,3,0,0,0,6.72.9a3.07,3.07,0,0,0-2.15.94L2.31,4.09a4.64,4.64,0,0,0-1.38,3,11.09,11.09,0,0,0,.84,4.83,28.11,28.11,0,0,0,5,8.37Z" class="cls-1"></path></g></g></svg>
                        </div>
                        <div class="navbar-box-content">
                            <p class="title">
                                Gọi mua hàng
                                <br>
                                1800.2044
                            </p>
                        </div>
                    </a>
                    <a href="#" class="header-navbar-item">
                        <div class="navbar-box-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.22 30.36" width="25" height="25"><defs><style>.cls-1 {fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.8px;}</style></defs> <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z" class="cls-1"></path> <path d="M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z" class="cls-1"></path></g></g></svg>
                        </div>
                        <div class="navbar-box-content">
                            <p class="title">
                                Cửa hàng
                                <br>
                                gần bạn
                            </p>
                        </div>
                    </a>
                    <a href="#" class="header-navbar-item">
                        <div class="navbar-box-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.22 25.85" height="24"><defs><style>.cls-1, .cls-2, .cls-3 {fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;}.cls-1 {stroke-width: 1.66px;}.cls-2 {stroke-width: 1.66px;}.cls-3 {stroke-width: 1.8px;}</style></defs> <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle cx="7.66" cy="22.02" r="3" class="cls-1"></circle> <circle cx="24.79" cy="22.02" r="3" class="cls-1"></circle> <path d="M28.61,22h4.13a1.44,1.44,0,0,0,1.44-1.44v-6" class="cls-3"></path> <path d="M27.12.9H14.82a1.44,1.44,0,0,0-1.44,1.44V20.58A1.44,1.44,0,0,0,14.82,22h6.29" class="cls-3"></path> <path d="M10.27,5.92H6.75A2.65,2.65,0,0,0,4.54,7.11L1.33,12A2.64,2.64,0,0,0,.9,13.47v6.46A2.1,2.1,0,0,0,3,22h.75" class="cls-3"></path> <path d="M34.18,3.47V2.34A1.44,1.44,0,0,0,32.74.9H25.08" class="cls-3"></path> <line x1="43.32" y1="6.97" x2="32.57" y2="6.97" class="cls-3"></line> <line x1="40.5" y1="11.05" x2="32.57" y2="11.05" class="cls-3"></line> <line x1="42.09" y1="16.33" x2="38.07" y2="16.33" class="cls-3"></line></g></g></svg>
                        </div>
                        <div class="navbar-box-content">
                            <p class="title">
                                Tra cứu
                                <br>
                                Đơn hàng
                            </p>
                        </div>
                    </a>
                    <a href="#" class="header-navbar-item">
                        <div class="navbar-box-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.95 35.07" width="25" height="25"><defs><style>.cls-1 {fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round;stroke-width: 1.8px;}</style></defs> <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M10,10.54V5.35A4.44,4.44,0,0,1,14.47.9h0a4.45,4.45,0,0,1,4.45,4.45v5.19" class="cls-1"></path> <path d="M23.47,34.17h-18A4.58,4.58,0,0,1,.91,29.24L2.5,8.78A1.44,1.44,0,0,1,3.94,7.46H25a1.43,1.43,0,0,1,1.43,1.32L28,29.24A4.57,4.57,0,0,1,23.47,34.17Z" class="cls-1"></path></g></g></svg>
                        </div>
                        <div class="navbar-box-content">
                            <p class="title">
                                Giỏ&nbsp;
                                <br>
                                hàng
                            </p>
                        </div>
                    </a>
                    <div class="header-navbar-login">
                        <div class="navbar-login-icon">
                            <svg id="icon-smember" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560" width="20"><defs><style>#icon-smember .cls-1 {fill: none;stroke: #fff;stroke-width: 30px;}</style></defs> <title>Smember</title> <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle cx="280" cy="280" r="265" class="cls-1"></circle> <circle cx="280" cy="210" r="115" class="cls-1"></circle> <path d="M86.82,461.4C124.71,354.71,241.91,298.93,348.6,336.82A205,205,0,0,1,473.18,461.4" class="cls-1"></path></g></g></svg>
                        </div>
                        <div class="navbar-login-title">
                            <span class="title">Đăng nhập</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `
}

export default Header
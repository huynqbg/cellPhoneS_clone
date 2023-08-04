import html from '../library/core.js'
import dataOldCatagories from '../data/Container/dataOldCatagories.js'


function OldCatagories() {
    return html`
        <div class="block-catagories">
            <div class="catagories-title">
                <h2>
                    <a class="catagories-title-link" href="">HÀNG CŨ</a>
                </h2>
                <a href="" class="catagories-title-more">Xem tất cả</a>
            </div>
            <div class="catagories-content row">
                ${dataOldCatagories.map(item => (`
                    <div class="col l-1-2">
                        <div class="catagories-content-item">
                            <a href="" class="catagories-item old-item">
                                <img src="${item.img}" alt="Image_catagory">
                            </a>
                            <span>${item.title}</span>
                         </div>
                    </div>
                `))}
            </div>
        </div>
    `
}

export default OldCatagories
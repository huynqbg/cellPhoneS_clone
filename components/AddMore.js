import html from '../library/core.js'

function AddMore() {
    return html`
        <div class="add__more grid wide">
            <a href="#" class="top-page">
                <i class="bi bi-chevron-up"></i>
                <span class="top-page-btn">Lên đầu</span>
            </a>
            <a href="" class="zalo-btn">
                <img src="./assets/img/zalo/icon-zalo.webp" alt="" class="zalo-img">
            </a>
        </div>
    `
}

export default AddMore
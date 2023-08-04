import html from '../library/core.js'
import { relatedTag, PhoneInfo } from '../data/Container/dataPhoneProduct.js'

function PhoneProduct() {
    return html`
        <div class="block-product">
            <div class="product-title">
                <a href="#" class="product-title-btn">
                    <h2>ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
                </a>
                <div class="list-related-tag">
                    ${relatedTag.map(item => (`
                        <a href="" class="related-tag">${item}</a>
                    `))}
                </div>
            </div>
            <div class="product-list swiper">
                <div class="slide-container">
                    <div class="swiper-wrapper">
                        ${PhoneInfo.map(item => (`
                            <div class="product-item swiper-slide">
                                <div class="product-item-sticky">
                                    <p class="product__price-detail">
                                        Giảm&nbsp;${item.percentDown}
                                    </p>
                                </div>
                                <div class="product-item-info">
                                    <a href="#" class="product-link">
                                        <div class="product-item-img">
                                            <img src="${item.imgPhone}" alt="Image_Phone">
                                        </div>
                                        <div class="product-name">
                                            <h3>${item.namePhone}</h3>
                                        </div>
                                        <div class="product__more--info">
                                            <p>Hàng đặt trước</p>
                                        </div>
                                        <div class="product-price">
                                            <p class="product-price-new">${item.priceNew}</p>
                                            <p class="product-price-old">${item.priceOld}</p>
                                        </div>
                                        <div class="product__promotions">
                                            <div class="promotion">
                                                <p class="couple-price">
                                                    ${item.promotion}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="product-rating">
                                        <div class="product--rating__star">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
                                        </div>
                                        <div class="product--rating__star">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
                                        </div>
                                        <div class="product--rating__star">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
                                        </div>
                                        <div class="product--rating__star">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
                                        </div>
                                        <div class="product--rating__star">
                                            <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-like">
                                    <span>Yêu thích</span>
                                    <button class="btn-heart">
                                        <i class="bi bi-heart"></i>
                                    </button>
                                </div>
                            </div>
                        `))}
                    </div>
                </div>
                <div class="swiper-button-next product-Btn-next"></div>
                <div class="swiper-button-prev product-Btn-prev"></div>
            </div>
        </div>
    `
}

export default PhoneProduct
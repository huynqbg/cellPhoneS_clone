import html from '../library/core.js'

function TechNewsContainer() {
    return html`
        <div class="tech-news">
            <div class="news-title">
                <h2>
                    <a href="" class="news-title-link">
                        TIN CÔNG NGHỆ
                    </a>
                </h2>
                <a href="" class="news-title-more">Xem tất cả</a>
            </div>
            <div class="news-content">
                <a href="" class="news-content-item">
                    <img class="content-item-img" src="./assets/img/news-tech/1.jpg" alt="">
                    <span class="content-item-desc">Code Legends Of Speed mới nhất 08/2023 - Cách nhập code</span>
                </a>
                <a href="" class="news-content-item">
                    <img class="content-item-img" src="./assets/img/news-tech/2.jpeg" alt="">
                    <span class="content-item-desc">Galaxy S23 FE lộ tất tần tật thông tin cấu hình trước khi ra mắt</span>
                </a>
                <a href="" class="news-content-item">
                    <img class="content-item-img" src="./assets/img/news-tech/3.jpeg" alt="">
                    <span class="content-item-desc">iQOO Z7 Pro 5G lộ điểm hiệu năng ấn tượng trên AnTuTu</span>
                </a>
                <a href="" class="news-content-item">
                    <img class="content-item-img" src="./assets/img/news-tech/4.jpg" alt="">
                    <span class="content-item-desc">Code Vương Quốc Kiến Gamota cập nhật mới nhất tháng 8/2023</span>
                </a>
            </div>
        </div>
    `
}
export default TechNewsContainer
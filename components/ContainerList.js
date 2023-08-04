import html from '../library/core.js'
import TopHome from './TopHomeContainer.js'
import HorizonBanner from './HorizonBannerContainer.js'
import PhoneProduct from './PhoneProductContainer.js'
import LaptopProduct from './LaptopProductContainer.js'
import TabletProduct from './TabletProductContainer.js'
import WatchProduct from './WatchProductContainer.js'
import Catagory from './CatagoryContainer.js'
import PcCatagories from './PcCatagoriesContainer.js'
import OldCatagories from './OldCatagoriesContainer.js'
import SalePay from './SalePayContainer.js'
import BrandPage from './BrandPageContainer.js'
import TechNewsContainer from './TechNewsContainer.js'


function ContainerList() {
    return html`
        <div class="container grid wide">
            ${TopHome()}
            ${HorizonBanner()}
            ${PhoneProduct()}
            ${LaptopProduct()}
            ${TabletProduct()}
            ${WatchProduct()}
            ${Catagory()}
            ${PcCatagories()}
            ${OldCatagories()}
            ${SalePay()}
            ${BrandPage()}
            ${TechNewsContainer()}
        </div>
    `
}

export default ContainerList
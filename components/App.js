import html from '../library/core.js'
import Header from './Header.js'
import ContainerList from './ContainerList.js'
import Footer from './Footer.js'
import AddMore from './AddMore.js'



function App() {
    return html`
        <div class="app grid">
            ${Header()}
            ${ContainerList()}
            ${Footer()}
        </div>
        ${AddMore()}
    `
}

export default App
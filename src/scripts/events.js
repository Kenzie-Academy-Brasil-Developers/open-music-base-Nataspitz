import { products } from "./productsData.js"
import { renderProducts } from "./index.js"

export function  itensCategoriesFilter() {
    const buttons = document.querySelectorAll(".secaoFiltro__botao")
    
    buttons.forEach((button, index) => {
        button.addEventListener("click", () =>{
            
            if (index == 0) {
                renderProducts( products)
            }else if (index > 0) {
                const categorySelect = products.filter( album => album.category == index)
                renderProducts(categorySelect)            
            }
        })
    })
}

 export function itensPriceFilter (list) {
    const inputFilter = document.querySelector("#filtroPreco")

    const spanPriceFilter = document.querySelector("#spanFiltro")
    
    inputFilter.addEventListener("input", () =>{
        spanPriceFilter.innerText = `Até R$ ${inputFilter.value},00`

        const filterPrice = list.filter((album) =>{
            return album.price <= inputFilter.value
        })
        renderProducts(filterPrice)
    })
}









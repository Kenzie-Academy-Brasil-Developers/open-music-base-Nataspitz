/* Desenvolva sua lógica aqui ... */
import { products, categories } from "./productsData.js"
import { itensCategoriesFilter, itensPriceFilter } from "./events.js"
import { selectMode } from "./theme.js"

const selectCategories = () =>{
    const ulFilter = document.querySelector(".secaoFiltro__lista")

    categories.forEach((category) =>{
        //ul > li
        const liFilter = document.createElement("li")
        ulFilter.appendChild(liFilter)

        //li > button 
        const buttonFilter = document.createElement("button")
        liFilter.appendChild(buttonFilter)
        buttonFilter.classList.add("secaoFiltro__botao")
        buttonFilter.innerText = category

    })
}
selectCategories()

export function renderProducts(list) {
    const ulProducts = document.querySelector(".secaoAlbuns__lista")
    ulProducts.innerHTML = ""
    
    list.forEach((album) => {
        //ul > li
        const liProduct = document.createElement("li")
        ulProducts.appendChild(liProduct)
        liProduct.classList.add("secaoAlbuns__produto")

        //li > figure
        const figureProduct = document.createElement("figure")
        liProduct.appendChild(figureProduct)
        figureProduct.classList.add("secaoAlbuns__capas")

        // figure > img
        const imgProduct = document.createElement("img")
        figureProduct.appendChild(imgProduct)
        imgProduct.src = album.img
    

        //li > div(dados)
        const divData = document.createElement("div")
        liProduct.appendChild(divData)
        divData.classList.add("secaoAlbuns__dados")

        //div(dados) > span(banda)
        const spanBanda = document.createElement("span")
        divData.appendChild(spanBanda)
        spanBanda.classList.add("secaoAlbuns__banda")
        spanBanda.innerText = album.band

        //div(dados) > span (lançamento)
        const spanLaunch = document.createElement("span")
        divData.appendChild(spanLaunch)
        spanBanda.classList.add("secaoAlbum__lancamento")
        spanLaunch.innerText = album.year

        // li > h2
        const hTwoName = document.createElement("h2")
        liProduct.appendChild(hTwoName)
        hTwoName.innerText = album.title

        //li > div(compra)
        const divBuy = document.createElement("div")
        liProduct.appendChild(divBuy)
        divBuy.classList.add("secaoAlbum__compra")

        //div(compra) > span(preço)
        const spanPrice = document.createElement("span")
        divBuy.appendChild(spanPrice)
        spanPrice.innerText = album.price.toFixed(2)

        //div(compra > button
        const buttonBuy = document.createElement("button")
        divBuy.appendChild(buttonBuy)
        buttonBuy.classList.add("secaoAlbuns__botao")
        buttonBuy.innerText = "Comprar"

    })

}
//escolha de modo
selectMode()
//renderizar todos
renderProducts(products)
//filtrar por categoria
itensCategoriesFilter()
//filtrar por preço
itensPriceFilter(products)
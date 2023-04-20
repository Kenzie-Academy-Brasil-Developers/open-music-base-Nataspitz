/* Desenvolva sua lógica aqui ... */
export const selectMode = () =>{
    const buttonMode = document.querySelector(".botaoModo")
    const htmlMode = document.querySelector("html")
    const imgMode = document.querySelector(".botaoModo__imagem")
    const preferenceMode = JSON.parse(localStorage.getItem("dark mode"))
    console.log(preferenceMode)
    if (preferenceMode) {
        imgMode.src = "./src/assets/img/sun.png"
        htmlMode.classList.add("darkMode")
    }else{
        imgMode.src = "./src/assets/img/moon.png"
        htmlMode.classList.remove("darkMode")
    }

    buttonMode.addEventListener("click", () =>{
        htmlMode.classList.toggle("darkMode")

        if (htmlMode.classList.contains("darkMode")) {
            imgMode.src = "./src/assets/img/sun.png"
            localStorage.setItem("dark mode", true)
        }else {
            imgMode.src = "./src/assets/img/moon.png"
            localStorage.setItem("dark mode", false)

        }

    })

}

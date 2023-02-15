const button = document.getElementById("btn-darkmode")

button.addEventListener("click", () => {
    const body = document.getElementById("body")
    const objTitle = document.getElementById("objetivo-title")
    const objText = document.getElementById("objetivo-text")
    const habilidadesTitle = document.getElementById("habilidades-title")
    const habilidadestext = document.getElementById("skill-text")
    const texts = document.querySelectorAll(".text")

    var isDarkMode = document.getElementsByClassName("darkmode")


    if (isDarkMode.length <= 0) {
        button.innerHTML= "Normal"
        button.classList.remove("color-white")
        body.classList.add("darkmode")
        objTitle.classList.add("darkmode")
        objText.classList.add("darkmode")
        habilidadesTitle.classList.add("darkmode")
        habilidadestext.classList.add("darkmode")
        for (let i = 0; i < texts.length; i++) {
            texts[i].style.color = "white"
        }

    } else {
        button.innerHTML= "Noturno"
        button.classList.add("color-white")
        body.classList.remove("darkmode")
        objTitle.classList.remove("darkmode")
        objText.classList.remove("darkmode")
        habilidadesTitle.classList.remove("darkmode")
        habilidadestext.classList.remove("darkmode")
        for (let i = 0; i < texts.length; i++) {
            texts[i].style.color = "black"
        }
    }
})
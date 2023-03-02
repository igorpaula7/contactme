const botao = document.querySelector(".switcher > button")
const img = document.querySelector("#pic_and_name > img")

botao.onclick = function switcher() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark")
    img.setAttribute("src", "./assets/pic.png")
  } else {
    document.body.classList.add("dark")
    img.setAttribute("src", "./assets/pic-dark-mode.png")
  }
}

function share() {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: "Igor de Paula",
        text: "Estudante de Engenharia de Software",
        url: "https://igorpaula7.github.io/contactme",
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error))
  }
}

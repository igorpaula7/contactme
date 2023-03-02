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

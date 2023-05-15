const btnAlterarTema = document.getElementById("btn-alterar-tema")
const body = document.querySelector("body")
const imgTrocarTema = document.querySelector(".img-btn")

btnAlterarTema.addEventListener("click", () => {

  const modoEscuroAtivo = body.classList.contains("modo-escuro")

  body.classList.toggle("modo-escuro")

  if (modoEscuroAtivo){
    imgTrocarTema.setAttribute("src", "midia/moon.png")
  }else {
    imgTrocarTema.setAttribute("src", "midia/sun.png")
  }

})


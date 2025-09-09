/desafio 1 getElementById //
document.getElementById("btn-titulo").addEventListener("click",()=>
                                             {
   const titulo = document.getElementById("titulo");
  titulo.textContent= "Fer Escorza";
 }                                           );

// Desafío 2 getElementsByClassName
document.getElementById("btn-cajas").addEventListener("click", () => {
  const cajas = document.getElementsByClassName("caja");
  for (let i = 0; i < cajas.length; i++) {
    cajas[i].style.backgroundColor = "#27C2F5";
  }
});

//desafio 3 querySelector//
document.getElementById("btn-primera").addEventListener("click", () => {
  let primeraCaja = document.querySelector(".caja");
  if (pri
      meraCaja) {
    primeraCaja.style.backgroundColor = "red";
  }
});

//desafio 4 querySelectorall//
document.getElementById("btn-bordes").addEventListener("click", () => {
  const cajas = document.querySelectorAll(".caja");
  cajas.forEach(caja =>
                {
    caja.style.border = "5px solid red";
  });
});
let Sobrenome = document.querySelector("#sobrenome");
let nome = document.querySelector("#nome");
let date = document.querySelector("#date");
let estadoCivil = document.querySelector("estadoCivil");
let btn = document.querySelector("#button");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (nome.value == 0) {
    let Error = document.querySelector("#nomeError");
    Error.innerHTML = "Por favor Insira seu nome ";
    Error.setAttribute("class", "error");
  } else {
    let Error = document.querySelector("#nomeError");
    Error.innerHTML = "correto ";
    Error.setAttribute("class", "correto");
  }

  if (Sobrenome.value == 0) {
    let Error = document.querySelector("#sobrenomeError");
    Error.innerHTML = "Por favor Insira seu Sobrenome ";
    Error.setAttribute("class", "error");
  } else {
    let Error = document.querySelector("#sobrenomeError");
    Error.innerHTML = "correto ";
    Error.setAttribute("class", "correto");
  }
  if (data.value == 0) {
    let Error = document.querySelector("#dataError");
    Error.innerHTML = "Por favor Insira uma data valida ";
    Error.setAttribute("class", "error");
  } else {
    let Error = document.querySelector("#dataError");
    Error.innerHTML = "correto ";
    Error.setAttribute("class", "correto");
  }
});

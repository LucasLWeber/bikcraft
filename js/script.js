// Ativar Links Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// Ativar itens orcamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

// Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  pergunta.setAttribute("aria-expanded", resposta.classList.contains("ativa"));
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

// Galeria de imagens
const galeria = document.querySelectorAll(".bicicleta-imagem img");
const galeria_container = document.querySelector(".bicicleta-imagem");

function trocar_imagem(event) {
  if (matchMedia("(min-width: 1000px)3").matches) {
    galeria_container.prepend(event.currentTarget);
  }
}

function eventos_galeria(img) {
  img.addEventListener("click", trocar_imagem);
}
galeria.forEach(eventos_galeria);

// Animacao

if (window.SimpleAnime) {
  new SimpleAnime();
}

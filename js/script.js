// javascript bikcraft //

// ativar links menu //
const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
});

// perguntas frequentes //
const perguntas = document.querySelectorAll(".perguntas button");

ativarPergunta = (event) => {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("pergunta-ativo");
  const ativa = resposta.classList.contains("pergunta-ativo");
  pergunta.setAttribute("aria-expanded", ativa);
};

eventosPerguntas = (pergunta) => {
  pergunta.addEventListener("click", ativarPergunta);
};

perguntas.forEach(eventosPerguntas);

// galeria de bicicletas //
const galeria = document.querySelectorAll(".modelos-img img");
const galeriaContainer = document.querySelector(".modelos-img");

trocarImagem = (event) => {
  const img = event.currentTarget;

  galeriaContainer.prepend(img);
};

eventosGaleria = (img) => {
  img.addEventListener("click", trocarImagem);
};

galeria.forEach(eventosGaleria);

// animação //
if (window.SimpleAnime) {
  new SimpleAnime();
}

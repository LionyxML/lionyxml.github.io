
// MOSTRAR E ESCONDER O MENU
const navMenu = document.getElementsByClassName('menu-conteudo')[0];
const botMenu = document.getElementsByClassName('menu-bot')[0];
const botFech = document.getElementsByClassName('nav-fechar')[0];

// MOSTRAR
botMenu.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});

// ESCONDER
botFech.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});


// ANIMA A MOVIMENTACAO DO MOUSE SOBRE A IMAGEM principal
document.addEventListener('mousemove', move);

function move(e) {
  this.querySelectorAll('.move').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerHeight - e.pageY * speed) / 120;

    layer.style.transform = `translate(${x}px) translateY(${y}px)`;
  });
}


// BOTAO PARA VOLTAR AO TOPO
var topo = document.getElementsByClassName('seta-topo')[0];
var proximo = document.getElementsByClassName('seta')[0];
var cabecalho = document.getElementsByClassName('cabecalho')[0];

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topo.classList.add('show');
    proximo.classList.add('no-show');
    cabecalho.classList.add('cor-escura');

  } else {
    topo.classList.remove('show');
    proximo.classList.remove('no-show');
    cabecalho.classList.remove('cor-escura');
  }
}




// ANIMAÇÕES PELO PLUGIN gsap
gsap.from('.logo img', { opacity: 0, duration: 10, delay: 0, y: 10, rotate: 720})
gsap.from('.logo a, .menu-bot', { opacity: 0, duration: 1, delay: 2, y: 10})
gsap.from('.seta', { opacity: 0, duration: 1, delay: 2.5, y: 10, scale: 2})
gsap.from('.nav-item',  { opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2})
gsap.from('.home-titulo',  { opacity: 0, duration: 1, delay: 1.8, y: 30})
gsap.from('.home-descricao',  { opacity: 0, duration: 1, delay: 1.8, y: 30})
gsap.from('.home-botao',  { opacity: 0, duration: 1, delay: 1.8, y: 30})
gsap.from('.home-img',  { opacity: 0, duration: 1, delay: 1.3, y: 30})


let seta = document.querySelector(".seta");
let hover = gsap.to(seta, {scale: 1.2, color: "blue", duration: .5, paused: true, ease: "InOut"});
seta.addEventListener("mouseenter", () => hover.play());
seta.addEventListener("mouseleave", () => hover.reverse());



// MODAL
var form = document.querySelector("form");
var flash = document.getElementsByClassName("flash")[0];
var conteudo = document.getElementsByClassName("modal-conteudo")[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var quantidade = 0;
  var nome, tel;


  for(var i = 0; i < this.elements.length; i++) {
    var item = this.elements[i];
    if(item.type == "number"){
      quantidade += parseInt(item.value);
    }
    if (item.type == "text") { nome = item.value };
    if (item.type == "tel") { tel = item.value };
  }

  if (quantidade == 0) {
    flash.innerHTML = "Ei! Selecione pelo menos uma rosquinha!";
    flash.classList.add("flash-mostra");
  } else {
    form.innerHTML = "";
    flash.classList.add("flash-mostra");
    flash.innerHTML = "<p>Muuuito Obrigado, " + nome + "!</p><hr><p>Seu pedido foi enviado!<hr><p>Entraremos em contato no telefone " + tel + " para confirmar a entrega das suas " + quantidade + " rosquinhas!</p>";
  }



});

const modalAbrir = document.getElementsByClassName('home-botao')[0];
const modalFechar = document.getElementsByClassName('modal-fechar')[0];
const modalPedido = document.getElementsByClassName('modal-pedido')[0];

modalAbrir.addEventListener('click', function() {
  // modalPedido.style = "display: block";
  modalPedido.classList.toggle('modal-mostrar');
});

modalFechar.addEventListener('click', function() {
  // modalPedido.style = "display: none";
  modalPedido.classList.toggle('modal-mostrar');
});

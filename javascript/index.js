const carrosselItens = document.querySelector('.carrossel-itens');
const carrosselItensArray = Array.from(carrosselItens.children);
const carrosselItemLargura = carrosselItensArray[0].offsetWidth;
let indiceAtual = 0;

document.querySelector('.carrossel-anterior').addEventListener('click', () => {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = carrosselItensArray.length - 4;
    }
    atualizarCarrossel();
});

document.querySelector('.carrossel-proximo').addEventListener('click', () => {
    indiceAtual++;
    if (indiceAtual > carrosselItensArray.length - 4) {
        indiceAtual = 0;
    }
    atualizarCarrossel();
});

function atualizarCarrossel() {
    carrosselItens.style.transform = `translateX(-${indiceAtual * carrosselItemLargura}px)`;
}


// Login - Cadastro
function mostrarCadastro() {
    const principal1 = document.getElementById('principal');
    const principal2 = document.getElementById('principal2');
    const email = document.getElementById('email2');
    const password = document.getElementById('password2');

    principal1.style.opacity = '0';
    setTimeout(function() {
        principal1.style.display = 'none';
        principal2.style.display = 'flex';
        setTimeout(function() {
            principal2.style.opacity = '1'; // Inicia o fade-in da div de cadastro
        }, 10); // Pequeno atraso para a transição CSS
    }, 800);
}

function mostrarLogin() {
    const principal1 = document.getElementById('principal');
    const principal2 = document.getElementById('principal2');

    principal2.style.opacity = '0';
    setTimeout(function() {
        principal2.style.display = 'none';
        principal1.style.display = 'flex';
        setTimeout(function() {
            principal1.style.opacity = '1'; // Inicia o fade-in da div de login
        }, 10); // Pequeno atraso para a transição CSS
    }, 500);
}


const itensTratamentos = document.querySelector('.itens-tratamentos');
const itens = document.querySelectorAll('.item-tratamento');
const botaoAnterior = document.querySelector('.botao-anterior');
const botaoProximo = document.querySelector('.botao-proximo');

let indice = 0;

botaoProximo.addEventListener('click', () => {
    indice = (indice + 1) % itens.length;
    itensTratamentos.style.transform = `translateX(-${indice * 100}%)`;
});

botaoAnterior.addEventListener('click', () => {
    indice = (indice - 1 + itens.length) % itens.length;
    itensTratamentos.style.transform = `translateX(-${indice * 100}%)`;
});

// Botão Fixo

document.addEventListener('DOMContentLoaded', function() {
    const fixedButton = document.getElementById('fixedButton');
    const overlayText = document.getElementById('overlayText');
    const mainContent = document.getElementById('main-content'); // Elemento principal do site
  
    fixedButton.addEventListener('click', function() {
      if (overlayText.style.display === 'none' || overlayText.style.display === '') {
        overlayText.style.display = 'block';
        mainContent.classList.add('blurred');
        fixedButton.classList.add('focused'); // Adiciona classe de foco ao botão
      } else {
        overlayText.style.display = 'none';
        mainContent.classList.remove('blurred');
        fixedButton.classList.remove('focused'); // Remove classe de foco do botão
      }
    });
  });
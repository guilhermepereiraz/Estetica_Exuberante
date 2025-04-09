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
    const transp = document.getElementById('transp'); // Elemento principal do site
    const imgx_fechar = document.getElementById('imgx_fechar'); // Elemento principal do site
    const imgx_fechar2 = document.getElementById('imgx_fechar2'); // Elemento principal do site
  
    // Define a posição inicial do overlayText fora da tela e invisível
    overlayText.style.position = 'absolute'; // Ou 'fixed', dependendo do layout
    overlayText.style.top = '-100px'; // Ajuste conforme a altura do seu overlay
    overlayText.style.left = '50%';
    overlayText.style.transform = 'translateX(-50%)';
    overlayText.style.opacity = '0';
    overlayText.style.transition = 'top 0.3s ease-out, opacity 0.3s ease-out'; // Adiciona transição
  
    fixedButton.addEventListener('click', function() {
      if (overlayText.style.display === 'none' || overlayText.style.display === '') {
        overlayText.style.display = 'block';
        transp.style.display = 'block';
        imgx_fechar.style.display = 'block';
        imgx_fechar2.style.display = 'none';
  
  
        // Força um reflow para garantir que o browser registre o estado inicial
        overlayText.offsetHeight;
  
        // Inicia a animação
        overlayText.style.top = '-300px'; // Define a posição final desejada
        overlayText.style.left = '-150px'; // Define a posição final desejada
        overlayText.style.opacity = '1';
      } else {
        // Inicia a animação de saída
        overlayText.style.top = '80px'; // Move para fora da tela
        overlayText.style.opacity = '0';
  
        // Oculta o overlay após a transição
        setTimeout(() => {
          overlayText.style.display = 'none';
          transp.style.display = 'none';
          imgx_fechar2.style.display = 'block';
          imgx_fechar.style.display = 'none';
        }, 300); // Tempo igual à duração da transição
      }
    });
  });
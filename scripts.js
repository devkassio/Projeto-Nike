// Configuração e elementos do DOM
const CONFIG = {
  DURACAO_TRANSICAO: 400,
  CORES_DISPONIVEIS: {
    verde: { cor: '#9cb15c', imagem: './assets/nike-green.png', nome: 'Verde' },
    rosa: { cor: '#ff9eb5', imagem: './assets/nike-pink.png', nome: 'Rosa' },
    azul: { cor: '#58cced', imagem: './assets/nike-blue.png', nome: 'Azul' },
  },
};

// Cache de elementos DOM para melhor performance
const elementos = {
  body: document.querySelector('body'),
  tenis: document.querySelector('.nike-verde'),
  botoes: document.querySelectorAll('.botoes'),
  titulo: document.querySelector('#produto-titulo'),
};

// Estado da aplicação
let estadoApp = {
  corAtual: 'verde',
  animandoTransicao: false,
};

/**
 * Muda a cor do tema e a imagem do tênis
 * @param {string} cor - Código da cor em hexadecimal
 * @param {string} img - Caminho para a imagem
 * @param {string} nomeCor - Nome da cor para acessibilidade
 */
function mudarVisual(cor, img, nomeCor) {
  // Previne cliques múltiplos durante a animação
  if (estadoApp.animandoTransicao) return;

  // Se já é a cor atual, não faz nada
  if (estadoApp.corAtual === nomeCor) return;

  estadoApp.animandoTransicao = true;

  try {
    // Adiciona classe de transição
    elementos.tenis.classList.add('troca-efeito');

    // Muda a cor de fundo
    elementos.body.style.background = cor;

    // Atualiza botões ativos
    atualizarBotoesAtivos(nomeCor);

    // Precarrega a nova imagem
    precarregarImagem(img)
      .then(() => {
        // Aguarda a duração da transição e atualiza a imagem
        setTimeout(() => {
          elementos.tenis.src = img;
          elementos.tenis.alt = `Tênis Nike Air Zoom na cor ${nomeCor.toLowerCase()}`;
          elementos.tenis.classList.remove('troca-efeito');

          estadoApp.corAtual = nomeCor;
          estadoApp.animandoTransicao = false;

          // Announce para leitores de tela
          anunciarMudancaCor(nomeCor);
        }, CONFIG.DURACAO_TRANSICAO);
      })
      .catch(erro => {
        console.error('Erro ao carregar imagem:', erro);
        estadoApp.animandoTransicao = false;
        elementos.tenis.classList.remove('troca-efeito');
      });
  } catch (erro) {
    console.error('Erro na mudança visual:', erro);
    estadoApp.animandoTransicao = false;
    elementos.tenis.classList.remove('troca-efeito');
  }
}

/**
 * Precarrega uma imagem para evitar flickering
 * @param {string} src - Caminho da imagem
 * @returns {Promise} Promise que resolve quando a imagem carregar
 */
function precarregarImagem(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Atualiza o estado visual dos botões de cor
 * @param {string} corAtiva - Nome da cor ativa
 */
function atualizarBotoesAtivos(corAtiva) {
  elementos.botoes.forEach(botao => {
    const corBotao = botao.dataset.cor;
    if (corBotao === corAtiva) {
      botao.style.transform = 'translateY(-8px) scale(1.1)';
      botao.style.borderColor = 'rgba(255,255,255,0.8)';
      botao.setAttribute('aria-pressed', 'true');
    } else {
      botao.style.transform = '';
      botao.style.borderColor = 'transparent';
      botao.setAttribute('aria-pressed', 'false');
    }
  });
}

/**
 * Anuncia mudança de cor para leitores de tela
 * @param {string} cor - Nome da cor
 */
function anunciarMudancaCor(cor) {
  const anuncio = document.createElement('div');
  anuncio.setAttribute('aria-live', 'polite');
  anuncio.setAttribute('aria-atomic', 'true');
  anuncio.style.position = 'absolute';
  anuncio.style.left = '-10000px';
  anuncio.textContent = `Cor alterada para ${cor}`;
  document.body.appendChild(anuncio);

  setTimeout(() => {
    document.body.removeChild(anuncio);
  }, 1000);
}

/**
 * Adiciona suporte a teclado para os botões de cor
 */
function configurarNavegacaoTeclado() {
  elementos.botoes.forEach((botao, index) => {
    botao.setAttribute('tabindex', '0');
    botao.setAttribute('role', 'button');
    botao.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');

    botao.addEventListener('keydown', evento => {
      if (evento.key === 'Enter' || evento.key === ' ') {
        evento.preventDefault();
        botao.click();
      }
    });
  });
}

/**
 * Precarrega todas as imagens do produto
 */
function precarregarTodasImagens() {
  Object.values(CONFIG.CORES_DISPONIVEIS).forEach(({ imagem }) => {
    precarregarImagem(imagem).catch(erro => {
      console.warn(`Não foi possível precarregar ${imagem}:`, erro);
    });
  });
}

/**
 * Adiciona animação suave de entrada
 */
function inicializarAnimacoes() {
  // Adiciona um pequeno delay para a animação de entrada
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
}

/**
 * Inicialização da aplicação
 */
function inicializar() {
  // Verifica se todos os elementos necessários estão presentes
  if (!elementos.body || !elementos.tenis) {
    console.error('Elementos essenciais não encontrados no DOM');
    return;
  }

  // Configurações iniciais
  configurarNavegacaoTeclado();
  precarregarTodasImagens();
  inicializarAnimacoes();

  // Define o estado inicial
  atualizarBotoesAtivos('verde');

  // Garante que a cor inicial esteja correta
  elementos.body.style.background = CONFIG.CORES_DISPONIVEIS.verde.cor;

  console.log('Nike Air Zoom - Aplicação inicializada com sucesso! 🚀');
}

// Aguarda o DOM estar completamente carregado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializar);
} else {
  inicializar();
}

// Exposição global das funções necessárias
window.mudarVisual = mudarVisual;

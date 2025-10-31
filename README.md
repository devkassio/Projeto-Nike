
# 🚀 Nike Air Zoom - Landing Page

Landing page moderna, responsiva e acessível para o tênis Nike Air Zoom, desenvolvida com HTML5, CSS3 e JavaScript ES6+.

## ✨ Características

### 🎨 Design

- Interface moderna e minimalista
- Animações suaves e transições fluidas
- Design responsivo para todos os dispositivos
- Tema de cores dinâmico com 3 variações

### 🔧 Funcionalidades

- **Seletor de cores interativo** - Verde, Rosa e Azul
- **Animações de transição** suaves entre cores
- **Efeitos hover** em todos os elementos interativos
- **Performance otimizada** com preload de recursos
- **Totalmente acessível** (ARIA labels, navegação por teclado)

### 📱 Responsividade

- Layout adaptativo para desktop, tablet e mobile
- Imagens otimizadas para diferentes tamanhos de tela
- Tipografia responsiva com `clamp()`
- Breakpoints otimizados: 1024px, 768px, 480px

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com:
  - CSS Grid e Flexbox
  - Custom Properties (variáveis CSS)
  - Animações e transições
  - Media queries para responsividade
- **JavaScript ES6+** - Interatividade com:
  - Módulos e funções puras
  - Promises para carregamento de imagens
  - Event listeners otimizados
  - Tratamento de erros

## 🚀 Como Executar

1. **Clone o repositório**

   ```bash
   git clone [url-do-repositorio]
   cd Projeto-Nike
   ```

2. **Abra o projeto**

   - Abra o arquivo `index.html` em qualquer navegador moderno
   - Ou use um servidor local (recomendado):

   ```bash
   # Com Python
   python -m http.server 8000

   # Com Node.js (http-server)
   npx http-server

   # Com VS Code Live Server
   # Instale a extensão Live Server e clique em "Go Live"
   ```

3. **Acesse**
   - Navegador: `http://localhost:8000`
   - Ou abra diretamente o arquivo `index.html`

## 📁 Estrutura do Projeto

```
Projeto-Nike/
├── index.html          # Página principal
├── style.css           # Estilos e responsividade
├── scripts.js          # Lógica e interatividade
├── README.md           # Documentação
├── .vscode/            # Configurações recomendadas para VS Code
└── assets/             # Recursos estáticos
   ├── logo-nike.png
   ├── nike-blue.png
   ├── nike-green.png
   ├── nike-pink.png
   ├── icon-website.png
   └── print-projeto.png
```

## 🎯 Funcionalidades Detalhadas

### Seletor de Cores

- **Verde** (#9cb15c, #8ba04d) - Cor padrão (agora padronizada em todo o projeto)
- **Rosa** (#ff9eb5) - Variação feminina
- **Azul** (#58cced) - Variação esportiva

### Animações e Interatividade

- Transição suave entre cores (400ms)
- Efeito de hover nos botões com transformação 3D
- Animação de entrada progressiva dos elementos
- **Botão "Adicionar ao carrinho" com efeito glassmorphism (vidro fosco, estilo Apple)**

### Acessibilidade

- ARIA labels e roles apropriados
- Navegação completa por teclado
- Alto contraste respeitado
- Redução de movimento para usuários sensíveis
- Anúncios para leitores de tela
- Foco visível em todos os elementos interativos

## 🔄 Melhorias Recentes

- **Cores verdes padronizadas** em todo o projeto (`#9cb15c` e `#8ba04d`)
- **Botão principal com glassmorphism** (vidro fosco, sem fundo verde)
- **Responsividade aprimorada**: mobile, tablet e desktop
- **H1 centralizado no mobile**
- **Acessibilidade reforçada** (foco, contraste, navegação)
- **Performance**: preload de recursos, cache DOM, fontes otimizadas
- **SEO**: meta tags, alt text, estrutura semântica
- **Código limpo**: ES6+, funções puras, tratamento de erros, variáveis CSS

## 🐛 Correções Realizadas

1. Problema de zoom resolvido - Layout agora funciona em qualquer zoom
2. Caminhos de arquivo corrigidos - Mudança de `/assets/` para `./assets/`
3. Responsividade aprimorada - Funciona em todos os dispositivos
4. Acessibilidade reforçada - Totalmente navegável por teclado
5. Performance otimizada - Carregamento mais rápido
6. Cores verdes padronizadas - Sem inconsistências visuais
7. Botão principal com glassmorphism - Visual premium

## 📊 Compatibilidade

### Navegadores Suportados

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Dispositivos Testados

- ✅ Desktop (1920x1080 até 1366x768)
- ✅ Tablet (1024x768 até 768x1024)
- ✅ Mobile (414x896 até 320x568)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 👨‍💻 Autor

[Kássio Barros](https://github.com/devkassio)\*\*

---

🏃‍♂️ "Just Do It" - Nike

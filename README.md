# Clone-NetFlix

Projeto front-end inspirado na Netflix com duas experiências principais:

- Tela de seleção de perfis
- Página de catálogo com carrosséis dinâmicos e preview de vídeo

## Funcionalidades atuais

- Seleção de perfis com visual Netflix (4 perfis)
- Layout centralizado e responsivo na tela inicial
- Efeito hover aplicado apenas nas imagens de perfil
- Tipografia e identidade visual refinadas (fundo escuro com gradiente vermelho)
- Catálogo dinâmico renderizado via JavaScript por categorias
- Cards com:
  - Hover expandido
  - Badge de classificação/idade
  - Match score aleatório
  - Duração dinâmica
  - Barra de progresso (quando aplicável)
  - Reprodução de trailer no hover via YouTube embed
- Nome e avatar do perfil carregados do localStorage no catálogo
- Navbar e footer com links apontando para o GitHub do projeto
- Captura 4K da tela inicial para apresentação

## Estrutura do projeto

- index.html: tela inicial de perfis
- style.css: estilos da tela inicial
- assets/: imagens e exports (incluindo screenshots)
- catalogo/catalogo.html: estrutura da página de catálogo
- catalogo/catalogo.css: estilos da página de catálogo
- catalogo/js/main.js: inicialização da página e injeção dos carrosséis
- catalogo/js/data.js: fonte de dados das categorias e mídias
- catalogo/js/utils.js: utilitários de vídeo, score, duração e badge
- catalogo/js/components/Card.js: criação e comportamento dos cards
- catalogo/js/components/Carousel.js: criação das seções de carrossel

## Utilitários implementados

No arquivo catalogo/js/utils.js:

- getYouTubeId(url): extrai o ID do vídeo para embed
- getRandomMatchScore(): gera porcentagem de relevância entre 80 e 99
- getRandomDuration(hasProgress): gera duração dinâmica por contexto
- getRandomAgeBadge(): gera selo etário com variação visual

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- Font Awesome
- Google Fonts
- Git e GitHub
- Playwright CLI (captura de screenshot)
- VS Code

## Como executar

1. Abra o projeto no VS Code.
2. Inicie um servidor local (ex.: Five Server) ou abra os arquivos HTML.
3. Acesse:
   - index.html (seleção de perfis)
   - catalogo/catalogo.html (catálogo)

## Exportação de screenshot (4K)

Instalar navegador do Playwright:

- npx --yes playwright install chromium

Capturar imagem 4K da tela inicial:

- npx --yes playwright screenshot --wait-for-timeout=2200 --device="Desktop Chrome" --viewport-size="3840,2160" "file:///d:/NETFLIX/index.html" "d:\NETFLIX\assets\netflix-perfis-4k.png"

## Repositório

- GitHub: https://github.com/ArthurSilva007/Clone-NetFlix.git

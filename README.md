# Clone-NetFlix

Projeto de estudo front-end inspirado na tela de seleção de perfis da Netflix, em português, com foco em layout, tipografia, hover e composição visual para exportação em alta resolução.

## Resumo do que foi feito

- Estrutura da tela de seleção de perfis com 4 usuários:
  - Gustavo
  - Bianca
  - Arthur
  - Souza
- Ajustes de layout para padrão Netflix:
  - Conteúdo centralizado
  - Fundo escuro com gradiente vermelho
  - Organização horizontal dos perfis
- Ajustes visuais dos cards:
  - Imagens com bordas arredondadas
  - Nome centralizado abaixo da imagem
  - Efeito de hover aplicado somente na imagem (nome estático)
- Tipografia do título refinada para aparência premium
- Logotipo NETFLIX no topo, centralizado, em vermelho
- Remoção do botão de tema no layout final da tela principal (composição limpa)
- Correção de caminhos das imagens para renderização local em captura headless
- Geração de imagem final em alta resolução (4K)

## Arquivos do projeto

- index.html: marcação principal da tela de perfis
- style.css: estilos e responsividade da interface
- assets/: imagens dos perfis e fontes locais
- theme-toggle.js: script de alternância de tema criado durante o processo (não conectado na versão final da tela limpa)
- netflix-perfis-4k.png: arte final exportada em 3840x2160

## Ferramentas e tecnologias usadas

- HTML5
- CSS3
- JavaScript
- PowerShell (execução local)
- Git e GitHub
- Playwright CLI (captura de screenshot em alta resolução)
- VS Code + GitHub Copilot

## Comandos usados para exportação da imagem

- Instalação do navegador do Playwright:
  - npx --yes playwright install chromium
- Captura final 4K:
  - npx --yes playwright screenshot --wait-for-timeout=2200 --device="Desktop Chrome" --viewport-size="3840,2160" "file:///d:/NETFLIX/index.html" "d:\NETFLIX\netflix-perfis-4k.png"

## Histórico objetivo de implementação

1. Construção e refino da tela de perfis
2. Ajustes de responsividade e alinhamento
3. Correções de hover para afetar apenas imagem
4. Implementação e depois remoção visual do toggle de tema na tela final
5. Inclusão do logotipo NETFLIX e limpeza de elementos extras
6. Correção de caminhos de imagens para render headless
7. Geração da versão final em 4K

## Repositório remoto

- URL: https://github.com/ArthurSilva007/Clone-NetFlix.git

## Observação

O projeto está pronto para continuidade com novas telas (home, player, cadastro e autenticação), mantendo a mesma base visual.

# Heal+ Landing

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111827)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-PT%20%7C%20EN%20%7C%20ES-3B82F6?style=for-the-badge)
![Static Site](https://img.shields.io/badge/Static_Site-Ready-0F172A?style=for-the-badge)

Landing page oficial do **Heal+**, criada para apresentar o aplicativo com uma linguagem mais institucional, visual alinhado ao produto e conteúdo focado na rotina clínica.

O projeto mostra o Heal+ como uma solução para:

- acompanhamento de pacientes;
- avaliação de feridas;
- agenda clínica;
- relatórios em PDF;
- comparativo de evolução;
- assistente local;
- contato oficial, autoria e contribuição do projeto.

## Visão geral

Esta landing foi construída como um site estático, sem framework e sem etapa obrigatória de build. A proposta é manter a estrutura simples de editar, publicar e manter.

Principais pontos do projeto:

- interface responsiva para desktop e mobile;
- seletor de idioma funcional em `pt`, `en` e `es`;
- mockups com telas reais do aplicativo;
- favicon e identidade visual com o `logo.png` do Heal+;
- área institucional com autoria, equipe, contato e apoio via Pix;
- botão de download preparado para o arquivo `healplus.apk`;
- conteúdo organizado para comunicação oficial do app.

## Stack

- `HTML5`
- `CSS3`
- `JavaScript` puro
- `Google Fonts`
  - `Manrope`
  - `Space Grotesk`
  - `IBM Plex Mono`

## Estrutura do projeto

```text
.
├── index.html
├── styles.css
├── script.js
├── logo.png
├── Tela de login.png
├── Tela inicial.png
├── Tela de pacientes.png
└── README.md
```

## O que cada arquivo faz

- `index.html`
  - Estrutura principal da landing
  - Seções do hero, recursos, fluxo, tecnologias, contribuição, autoria, FAQ, contato e footer
  - Links institucionais, e-mails, Pix, botões de download e imagens

- `styles.css`
  - Paleta visual do Heal+
  - Layout responsivo
  - Estilização do hero, cards, footer, seções claras e escuras
  - Ajustes visuais do header, badges, cards de recursos e mockups

- `script.js`
  - Menu mobile
  - Seletor de idioma
  - Persistência do idioma com `localStorage`
  - Atualização dinâmica de textos entre `pt`, `en` e `es`
  - Botão de copiar chave Pix
  - Sincronização visual do header e do footer

- `logo.png`
  - Logo principal do projeto
  - Também usada como favicon

- `Tela de login.png`
- `Tela inicial.png`
- `Tela de pacientes.png`
  - Capturas reais do app usadas nos mockups da landing

## Seções da landing

O site está organizado em blocos que contam a proposta do Heal+ de forma institucional:

1. **Hero**
   - apresentação principal do produto;
   - CTA de download do APK;
   - CTA para navegar aos recursos;
   - mockups com telas reais do app.

2. **O problema x A solução**
   - contextualiza a dor da rotina clínica;
   - apresenta o Heal+ como um fluxo mais claro para acompanhamento.

3. **Recursos**
   - cadastro de pacientes;
   - avaliação estruturada;
   - agenda clínica;
   - comparativo de evolução;
   - relatórios em PDF;
   - assistente local.

4. **Fluxo do app**
   - mostra a lógica do uso real do sistema do cadastro ao relatório.

5. **Tecnologias**
   - apresenta a base técnica do projeto com cards em destaque.

6. **Contribuição**
   - download oficial;
   - chave Pix;
   - informações de apoio ao projeto.

7. **Autoria**
   - autoria principal;
   - equipe do projeto;
   - canais oficiais;
   - links para LinkedIn e GitHub dos integrantes.

8. **FAQ**
   - respostas rápidas sobre funcionamento, APK, dados locais, apoio e contato.

9. **Contato**
   - LinkedIn;
   - e-mail institucional;
   - GitHub.

10. **Footer**
   - resumo institucional;
   - links rápidos;
   - observações legais;
   - idiomas disponíveis;
   - aviso oficial sobre o canal Pix.

## Idiomas

O projeto já suporta:

- `Português`
- `English`
- `Español`

Como funciona:

- o conteúdo base em português está no `index.html`;
- o `script.js` captura esse conteúdo e aplica sobrescritas para `en` e `es`;
- o idioma selecionado fica salvo no navegador com `localStorage`.

Se você alterar textos institucionais importantes, revise também as traduções em `script.js`.

## Conteúdo institucional atual

### Contato

- E-mail oficial: `healgrupo@gmail.com`
- GitHub oficial exibido na landing: `https://github.com/pedrotescaro`

### Contribuição

- Chave Pix: `pedroatescaro@gmail.com`

### Equipe destacada

- Pedro Antônio Silvestre Tescaro
- Guilherme Alves de Campos
- Paulo Henrique Leal dos Santos

## Como executar localmente

Este projeto não precisa de instalação de dependências.

Você pode rodar de duas formas:

### Opção 1: abrir direto

Abra o arquivo `index.html` no navegador.

### Opção 2: servidor local

Recomendado para testar favicon, links e comportamento mais próximo do deploy:

```bash
python -m http.server 4173
```

Depois acesse:

```text
http://127.0.0.1:4173
```

## Como atualizar o projeto

### Alterar textos

- Português base: edite `index.html`
- Inglês e espanhol: revise `script.js`

### Alterar visual

- Faça os ajustes em `styles.css`

### Alterar logo ou favicon

- Substitua `logo.png`

### Alterar mockups

- Substitua:
  - `Tela de login.png`
  - `Tela inicial.png`
  - `Tela de pacientes.png`

### Atualizar o APK

Hoje os botões de download apontam para:

```text
healplus.apk
```

Para ativar o download oficial:

1. coloque o arquivo `healplus.apk` na raiz do projeto;
2. ou troque os `href` para uma URL oficial externa.

## Pontos centrais para manutenção

Ao mexer no projeto, estes são os pontos mais importantes:

- `index.html`
  - textos principais da landing;
  - links de navegação;
  - canais oficiais;
  - estrutura das seções.

- `script.js`
  - traduções;
  - idioma ativo;
  - comportamento do menu;
  - botão de copiar Pix.

- `styles.css`
  - identidade visual;
  - responsividade;
  - refinamentos do hero;
  - cards, footer e contraste entre seções.

## Checklist antes de publicar

1. confirmar se todos os links institucionais estão corretos;
2. validar `healgrupo@gmail.com` nos pontos de contato;
3. validar `pedroatescaro@gmail.com` na parte de contribuição via Pix;
4. conferir se o arquivo `healplus.apk` está disponível, caso o botão de download esteja ativo;
5. revisar favicon, logo e mockups;
6. testar os três idiomas;
7. testar layout em desktop e mobile;
8. revisar footer, FAQ, contato e autoria antes do deploy.

## Publicação

Por ser um projeto estático, esta landing pode ser publicada facilmente em:

- `Vercel`
- `Netlify`
- `GitHub Pages`
- qualquer hospedagem de arquivos estáticos

Fluxo recomendado:

1. atualizar conteúdo e assets;
2. validar links, idioma e responsividade;
3. publicar a raiz do projeto;
4. testar a versão online;
5. revisar novamente o download do APK e os canais oficiais.

## Licença

Até o momento, este repositório **não possui um arquivo `LICENSE` definido**.

Se a intenção for publicar o projeto como open source de forma oficial, o ideal é adicionar uma licença apropriada antes do deploy público definitivo.

## Resumo

O **Heal+ Landing** é uma apresentação institucional do aplicativo Heal+, construída com uma base simples, visual forte e foco total em clareza de produto.

Ele já está preparado para:

- apresentar o app com mockups reais;
- comunicar recursos e fluxo de uso;
- destacar autoria e equipe;
- oferecer canais oficiais;
- divulgar contribuição via Pix;
- suportar múltiplos idiomas;
- evoluir sem depender de framework.

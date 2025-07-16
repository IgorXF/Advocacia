# Site Institucional – Escritório de Advocacia

Este é o repositório para o desenvolvimento do site institucional de um escritório de advocacia, construído com React e Next.js. O projeto visa oferecer uma plataforma informativa, moderna, performática e de fácil gerenciamento.

---

## Índice

* Visão Geral do Projeto
* Funcionalidades
* Tecnologias Utilizadas
* Começando
    * Pré-requisitos
    * Instalação
    * Variáveis de Ambiente
* Rodando a Aplicação
* Estrutura de Pastas
* Scripts Disponíveis
* Deploy

---

## Visão Geral do Projeto

O sistema tem como objetivo principal fortalecer a presença online do escritório, apresentando seus serviços, equipe e valores de forma profissional. Além do site público, o projeto inclui um painel administrativo para que a equipe interna possa gerenciar o conteúdo dinâmico (como artigos do blog e perfis de advogados) de forma autônoma.

## Funcionalidades

* **Páginas Institucionais:** Home, Sobre Nós, Áreas de Atuação e Contato.
* **Equipe de Profissionais:** Página com listagem e perfil individual para cada advogado.
* **Blog Jurídico:** Área para publicação de artigos com sistema de filtros por categoria e data.
* **Formulário de Contato:** Com validação, proteção anti-spam (reCAPTCHA) e envio de e-mail.
* **Painel de Administração:** Área restrita para gerenciar todo o conteúdo dinâmico do site (CRUDs de Artigos, Advogados, Áreas de Atuação).
* **Design Responsivo:** Interface totalmente adaptável para desktops, tablets e smartphones.
* **SEO Otimizado:** URLs amigáveis, meta tags dinâmicas e boas práticas para melhor indexação no Google.
* **Alta Performance:** Otimização de imagens e carregamento rápido das páginas (Server-Side Rendering e Static Site Generation com Next.js).

## Tecnologias Utilizadas

* **Framework:** Next.js
* **Biblioteca UI:** React.js
* **Linguagem:** JavaScript
* **Estilização:** CSS Modules / Tailwind CSS / Styled Components (a definir)
* **Linting:** ESLint
* **Formatação de Código:** Prettier

## Começando

Siga estas instruções para configurar e rodar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

* Node.js (versão 18.x ou superior)
* Yarn ou npm

### Instalação

1.  Clone o repositório:
    `git clone https://github.com/IgorXF/Advocacia`

2.  Navegue até o diretório do projeto:
    `cd Advocacia`

3.  Instale as dependências:
    `npm install`
    (ou `yarn install`)

### Variáveis de Ambiente

Para que a aplicação funcione corretamente, especialmente o painel administrativo e o formulário de contato, é necessário configurar as variáveis de ambiente.

1.  Crie uma cópia do arquivo de exemplo `.env.example`:
    `cp .env.example .env.local`

2.  Abra o arquivo `.env.local` e preencha com os valores correspondentes ao seu ambiente:

    `# Configuração do Banco de Dados (Ex: PostgreSQL, MySQL)`
    `DB_HOST=localhost`
    `DB_PORT=5432`
    `DB_USER=seu_usuario`
    `DB_PASS=sua_senha`
    `DB_NAME=nome_do_banco`

    `# Configuração para envio de e-mail (formulário de contato)`
    `SMTP_HOST=smtp.example.com`
    `SMTP_PORT=587`
    `SMTP_USER=seu_email@example.com`
    `SMTP_PASS=sua_senha_de_email`
    `EMAIL_RECEIVER=email_do_escritorio@adv.com`

    `# Chaves do Google reCAPTCHA (para o formulário de contato)`
    `NEXT_PUBLIC_RECAPTCHA_SITE_KEY=sua_chave_publica_do_recaptcha`
    `RECAPTCHA_SECRET_KEY=sua_chave_privada_do_recaptcha`

    `# Chaves para autenticação (se usar NextAuth.js para o painel admin)`
    `NEXTAUTH_URL=http://localhost:3000`
    `NEXTAUTH_SECRET=seu_secret_super_secreto`

## Rodando a Aplicação

Para iniciar o servidor de desenvolvimento, execute:
`npm run dev`
(ou `yarn dev`)

Abra http://localhost:3000 em seu navegador para ver o resultado.

## Estrutura de Pastas

A estrutura de pastas segue o padrão do Next.js:

    .
    ├── /pages/
    │   ├── /api/
    │   ├── _app.js
    │   └── index.js
    ├── /components/
    ├── /public/
    ├── /styles/
    ├── .env.local
    ├── next.config.js
    └── package.json

## Scripts Disponíveis

No diretório do projeto, você pode executar:

* `npm run dev`: Inicia a aplicação em modo de desenvolvimento.
* `npm run build`: Gera a build de produção da aplicação.
* `npm run start`: Inicia um servidor de produção (requer `npm run build` antes).
* `npm run lint`: Executa o ESLint para encontrar problemas no código.

## Deploy

A forma mais recomendada para fazer o deploy de uma aplicação Next.js é através da Vercel, a plataforma criada pelos mantenedores do Next.js. Ela oferece integração contínua e deploy automáticos a cada `git push` para a branch principal.

---
*Este documento deve ser mantido atualizado conforme o projeto evolui.*

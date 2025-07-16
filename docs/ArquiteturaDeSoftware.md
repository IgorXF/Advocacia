# Documento de Arquitetura de Software

## **Sistema:** Site Institucional – Escritório de Advocacia

---

## Sumário

* [1. Visão Geral da Arquitetura](#1-visão-geral-da-arquitetura)
* [2. Modelo Arquitetural](#2-modelo-arquitetural)
* [3. Componentes de Software](#3-componentes-de-software)
    * [Frontend (React / Next.js Pages)](#frontend-react--nextjs-pages)
    * [Backend (Next.js API Routes)](#backend-nextjs-api-routes)
* [4. Componentes de Hardware](#4-componentes-de-hardware)
* [5. Detalhes dos Componentes Principais](#5-detalhes-dos-componentes-principais)
    * [Componente de Autenticação (Admin)](#componente-de-autenticação-admin)
    * [Gerenciamento de Conteúdo (CMS)](#gerenciamento-de-conteúdo-cms)
    * [Renderização de Páginas Públicas](#renderização-de-páginas-públicas)
    * [Módulo de Contato](#módulo-de-contato)
* [6. Comunicação entre Componentes](#6-comunicação-entre-componentes)
* [7. Diagrama Simplificado do Fluxo de Dados](#7-diagrama-simplificado-do-fluxo-de-dados)
* [8. Considerações Finais](#8-considerações-finais)

---

### 1. Visão Geral da Arquitetura

O sistema adota uma **arquitetura web moderna e integrada**, utilizando o framework **Next.js**. Essa abordagem permite que o frontend e o backend coexistam no mesmo projeto de forma coesa, otimizando o desenvolvimento e a performance.

A arquitetura foi projetada para maximizar a **velocidade de carregamento** e a **otimização para motores de busca (SEO)**, utilizando as estratégias de renderização do Next.js:
* **Static Site Generation (SSG):** Para páginas com conteúdo que raramente muda (Ex: "Sobre Nós", "Contato").
* **Server-Side Rendering (SSR):** Para páginas com conteúdo dinâmico (Ex: "Blog", perfis de advogados).

---

### 2. Modelo Arquitetural

* **Arquitetura Integrada (Full-Stack):** Next.js gerencia tanto a interface do usuário (cliente) quanto a lógica de servidor (API), eliminando a necessidade de um backend separado para a maioria das funcionalidades.
* **Arquitetura baseada em Componentes:** O frontend é construído com componentes React reutilizáveis, promovendo um código limpo, modular e de fácil manutenção.
* **Renderização Híbrida:** O sistema combina SSG e SSR para entregar a melhor performance possível para cada tipo de página, um diferencial crucial para a experiência do usuário e SEO.

---

### 3. Componentes de Software

#### Frontend (React / Next.js Pages)

A interface do usuário, renderizada no navegador.

* **Páginas Públicas:** Estrutura de rotas definida pelo diretório `pages/`, incluindo `index.js` (Home), `sobre.js`, `contato.js`, etc.
* **Painel Administrativo:** Uma seção do site com rotas protegidas (`/admin`) para o gerenciamento de conteúdo.
* **Componentes Reutilizáveis:** Elementos como `Header`, `Footer`, `CardDeArtigo`, `Formulario` localizados no diretório `components/`.
* **Bibliotecas Principais:**
    * `React`: Biblioteca base para a UI.
    * `Next.js`: Framework para estrutura, roteamento e renderização.
    * `Tailwind CSS` (ou outra a definir): Para estilização.
    * `SWR` ou `React Query`: Para data fetching e cache no lado do cliente.

#### Backend (Next.js API Routes)

A lógica de servidor, localizada no diretório `pages/api/`.

* **API de Conteúdo (CMS):** Endpoints para operações CRUD (Criar, Ler, Atualizar, Deletar) de artigos, advogados e áreas de atuação. Ex: `pages/api/posts/[id].js`.
* **API de Autenticação:** Endpoint para login e logout do administrador, gerenciando sessões.
* **Serviços Externos:** Integração com o formulário de contato para envio de e-mails (via SMTP) e com a API do Google Maps.
* **Banco de Dados:**
    * **ORM:** `Prisma` para abstrair e simplificar a comunicação com o banco de dados.
    * **SGBD:** `PostgreSQL` ou `MySQL`.

---

### 4. Componentes de Hardware

* **Ambiente de Desenvolvimento:**
    * Computadores da equipe de desenvolvimento capazes de rodar Node.js.
    * Acesso à internet para instalação de pacotes e comunicação com serviços.
* **Ambiente de Produção (Implantação):**
    * **Plataforma de Hospedagem:** **Vercel** (altamente recomendada para Next.js) ou outro provedor de nuvem (AWS, Google Cloud).
    * **Servidor de Banco de Dados:** Serviço gerenciado como AWS RDS, Supabase ou Neon.
    * **Dispositivos do Usuário Final:** Navegadores web em desktops, tablets e smartphones.

---

### 5. Detalhes dos Componentes Principais

#### Componente de Autenticação (Admin)

* **Função:** Proteger as rotas do painel administrativo.
* **Tecnologia:** `NextAuth.js`, uma biblioteca completa para autenticação em Next.js.
* **Atende ao Requisito:** RF08 (Painel de Administração).

#### Gerenciamento de Conteúdo (CMS)

* **Função:** Permitir que o administrador gerencie os dados do site.
* **Tecnologia:** API Routes no Next.js, utilizando `Prisma` para interagir com o banco de dados.
* **Atende aos Requisitos:** RF03 (Equipe), RF04 (Áreas de Atuação), RF06 (Blog).

#### Renderização de Páginas Públicas

* **Função:** Exibir o conteúdo do site para os visitantes de forma rápida e otimizada.
* **Tecnologia:** Sistema de páginas do Next.js, usando `getStaticProps` (para SSG) e `getServerSideProps` (para SSR).
* **Atende aos Requisitos:** RF01, RF02, RF03, RF04, RF06.

#### Módulo de Contato

* **Função:** Capturar dados do formulário de contato e enviá-los por e-mail para o escritório.
* **Tecnologia:** Um formulário React no frontend que envia os dados para uma API Route (`/api/contact`), que por sua vez utiliza um serviço como `Nodemailer` para o envio do e-mail.
* **Atende ao Requisito:** RF05 (Página de Contato).

---

### 6. Comunicação entre Componentes

* **Frontend ↔ Backend (API Routes):** Ocorre via chamadas **HTTP/HTTPS**. O cliente (React) pode chamar os endpoints da API (`/api/...`) para tarefas dinâmicas, como enviar um formulário.
* **Servidor ↔ Banco de Dados:** A comunicação é feita no lado do servidor através do **Prisma ORM**, que traduz chamadas JavaScript em queries SQL seguras.
* **Build-time/Request-time:** Durante a renderização no servidor (SSG/SSR), as páginas acessam a lógica de busca de dados diretamente, sem a necessidade de uma chamada HTTP, otimizando a performance.

---

### 7. Diagrama Simplificado do Fluxo de Dados

1.  O **Navegador do Usuário** faz uma requisição para uma página (Ex: `/blog`).
2.  A plataforma de **Hospedagem (Vercel)** recebe a requisição e a direciona para a instância **Next.js**.
3.  O Next.js executa a lógica de renderização da página (`getServerSideProps`), que utiliza o **Prisma** para buscar os artigos no **Banco de Dados**.
4.  A página é renderizada no servidor com os dados e enviada como HTML puro para o navegador (carregamento rápido).
5.  O navegador carrega o JavaScript (React) que "hidrata" a página, tornando-a interativa.

---

### 8. Considerações Finais

A arquitetura escolhida oferece uma base robusta, moderna e de alta performance, ideal para um site institucional.

* **Otimizada para SEO e Performance:** A principal vantagem do Next.js, crucial para a visibilidade online de um escritório.
* **Segura:** Utiliza padrões de mercado para autenticação e comunicação.
* **Escalável:** A arquitetura serverless da Vercel e os bancos de dados modernos permitem que o site cresça sem problemas.
* **Excelente Experiência de Desenvolvimento (DX):** Um projeto unificado e ferramentas modernas facilitam o trabalho da equipe e a manutenção futura.

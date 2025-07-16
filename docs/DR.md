# Documento de Requisitos de Software (DRS)

**Sistema:** Site Institucional – Escritório de Advocacia
**Cliente:** Marcelo Patrício
**Empresa Desenvolvedora:** Emcomp
**Data:** 16/07/2025

---

## Sumário

1.  Introdução
2.  Escopo do Sistema
3.  Objetivos
4.  Atores do Sistema
5.  Requisitos Funcionais
6.  Requisitos Não Funcionais
7.  Restrições
8.  Critérios de Aceitação
9.  Considerações Finais

---

## 1. Introdução

Este documento apresenta os requisitos para o desenvolvimento do site institucional de um escritório de advocacia. O sistema visa oferecer uma plataforma informativa, acessível e com boa apresentação visual, que transmita credibilidade ao visitante e facilite o contato com os advogados e a contratação de serviços.

## 2. Escopo do Sistema

O site será composto por páginas estáticas e dinâmicas contendo informações institucionais, equipe de profissionais, áreas de atuação, blog com artigos jurídicos, e canais de contato direto com o escritório.

## 3. Objetivos

* Apresentar institucionalmente o escritório de forma profissional e moderna.
* Facilitar o acesso do público aos serviços jurídicos ofertados.
* Fortalecer a presença online e melhorar o posicionamento da marca.

## 4. Atores do Sistema

* **Visitante:** Usuário anônimo que acessa o site para conhecer os serviços, ler conteúdos ou buscar contato.
* **Administrador:** Responsável por atualizar os conteúdos do site e moderar artigos e informações institucionais.
* **Advogado (perfil opcional):** Pode ter uma área com biografia, especialidade, currículo e contato profissional.

## 5. Requisitos Funcionais

### RF01 – Página Inicial
Exibe resumo institucional, menu de navegação, áreas de atuação, últimas notícias do blog e canais de contato rápido.

### RF02 – Página “Sobre Nós”
Apresenta a história do escritório, missão, visão, valores e diferenciais competitivos.

### RF03 – Equipe de Profissionais
Exibe lista de advogados com foto, OAB, biografia, especialidades e links de contato profissional.

### RF04 – Áreas de Atuação
Exibe lista de serviços jurídicos com descrições claras e campos específicos (Ex: Direito Civil, Trabalhista, Empresarial).

### RF05 – Página de Contato
Contém formulário com campos obrigatórios (nome, e-mail, assunto, mensagem), validação de dados e integração com e-mail do escritório.
Exibição de endereço físico com mapa (via Google Maps), telefones e ícone de WhatsApp para contato direto.

### RF06 – Blog Jurídico
Área para publicação de artigos com título, subtítulo, imagem de destaque, autor e conteúdo.
Suporte a filtros por data, categoria e autor.

### RF07 – Newsletter (opcional)
Visitantes poderão cadastrar e-mail para receber boletins com novidades e artigos publicados.

### RF08 – Painel de Administração
Área restrita com autenticação para gerenciar conteúdo: artigos, equipe, áreas de atuação e textos institucionais.

## 6. Requisitos Não Funcionais

### RNF01 – Responsividade e Acessibilidade
Interface compatível com dispositivos móveis e com diretrizes WCAG para acessibilidade digital.

### RNF02 – SEO e Performance
URLs amigáveis, meta tags para redes sociais, estrutura de título e descrição para indexação no Google.
Tempo de carregamento inferior a 2 segundos por página.

### RNF03 – Segurança
Criptografia HTTPS em todas as páginas.
Proteção contra spam no formulário de contato (ex: reCAPTCHA).

## 7. Restrições

* Não haverá login para visitantes nem agendamento automático de consultas.
* Apenas o administrador poderá editar o conteúdo via painel.
* Comentários em artigos serão desativados na versão inicial.

## 8. Critérios de Aceitação

* Visitante acessa todas as páginas com navegação fluida e responsiva.
* Contato é enviado com sucesso e recebido por e-mail.
* Administrador consegue cadastrar e editar artigos e equipe via painel.
* Blog carrega corretamente artigos e filtros funcionam conforme esperado.

## 9. Considerações Finais

Este documento representa os requisitos iniciais acordados entre o cliente e a equipe de desenvolvimento. Futuras iterações e ajustes poderão ser considerados mediante reuniões de alinhamento e aditivos contratuais.

---

**Documento elaborado por:** Igor Xisto Ferreira
**Data de revisão:** 16/07/2025

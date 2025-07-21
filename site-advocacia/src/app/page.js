export default function HomePage() {
  return (
    <main>
      <section>
        <h1>Bem-vindo ao Escritório Marcelo Patrício</h1>
        <p>Defendendo seus direitos com excelência e compromisso.</p>
      </section>

      <section>
        <h2>Áreas de Atuação</h2>
        <ul>
          <li>Direito Civil</li>
          <li>Direito Trabalhista</li>
          <li>Direito Empresarial</li>
        </ul>
      </section>

      <section>
        <h2>Últimos Artigos</h2>
        {/* Aqui futuramente você puxa os artigos do blog */}
      </section>

      <section>
        <h2>Fale Conosco</h2>
        <a href="/contato">Ir para a página de contato</a>
      </section>
    </main>
  );
}

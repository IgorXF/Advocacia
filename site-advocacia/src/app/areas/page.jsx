import CardArea from '@/Components/CardArea/CardArea';

export default function Areas() {
  return (
    <section>
      <h1>Áreas de Atuação</h1>
      <CardArea titulo="Direito Civil" descricao="Atuação em contratos, responsabilidade civil e família." />
      <CardArea titulo="Direito Penal" descricao="Defesa e acusação em processos criminais." />
    </section>
  );
}

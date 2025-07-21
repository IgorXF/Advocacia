
export default function CardArea({ titulo, descricao }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '12px',
      backgroundColor: '#fff'
    }}>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}

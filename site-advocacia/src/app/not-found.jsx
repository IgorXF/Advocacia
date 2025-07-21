// app/not-found.js

import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Página Não Encontrada</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Desculpe, não conseguimos encontrar a página que você está procurando.</p>
      <Link href="/" style={{
        padding: '10px 20px',
        color: 'white',
        backgroundColor: '#0070f3',
        textDecoration: 'none',
        borderRadius: '5px'
      }}>
        Voltar para a Página Inicial
      </Link>
    </div>
  )
}
// src/app/layout.js
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Site Advocacia',
  description: 'Site institucional para escritório de advocacia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header style={{ padding: '20px', background: '#1a1a1a', color: '#fff' }}>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/">Home</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/areas">Áreas</Link>
            <Link href="/equipe">Equipe</Link>
            <Link href="/blogJuridico">Blog Jurídico</Link>
            <Link href="/contato">Contato</Link>
          </nav>
        </header>
        <main style={{ padding: '20px' }}>{children}</main>
      </body>
    </html>
  );
}

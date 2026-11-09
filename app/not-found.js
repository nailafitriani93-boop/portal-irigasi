import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-card">
        <div className="not-found-code">404</div>
        <h1>Halaman belum tersedia</h1>
        <p>
          Alamat yang Anda buka belum memiliki halaman. Kembali ke portal untuk
          memilih menu yang tersedia.
        </p>
        <Link className="not-found-link" href="/">
          Kembali ke dashboard
        </Link>
      </section>
    </main>
  );
}

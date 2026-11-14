'use client';

import { useEffect, useState } from 'react';

const menus = [
  {
    title: 'Inventarisasi Unit',
    subtitle: 'Sistem Inventarisasi Unit Irigasi',
    description: 'Pengelolaan dan pemantauan data inventaris unit irigasi, identitas aset, lokasi, serta kondisi unit.',
    badge: 'Inventaris',
    icon: 'inspect',
    action: 'Buka Menu Inventarisasi Unit',
    href: 'https://unitirigasi.estatepg1.online/'
  },
  {
    title: 'Early Warning Unit',
    subtitle: 'Sistem Peringatan Dini Unit Irigasi',
    description: 'Pemantauan kondisi unit irigasi dan informasi peringatan dini untuk mendukung tindak lanjut operasional.',
    badge: 'Early Warning',
    icon: 'accident',
    action: 'Buka Menu Early Warning Unit',
    href: '/early-warning-unit'
  },
  {
    title: 'Summary Cost',
    subtitle: 'Ringkasan Biaya Operasional Irigasi',
    description: 'Ringkasan dan pemantauan biaya operasional irigasi sebagai bahan evaluasi dan pengendalian biaya.',
    badge: 'Cost',
    icon: 'stock',
    action: 'Buka Menu Summary Cost',
    href: '/summary-cost'
  },
  {
    title: 'Portal Inspeksi Irigasi',
    subtitle: 'Sistem Inspeksi Irigasi',
    description: 'Portal untuk melakukan inspeksi irigasi.',
    badge: 'Inspeksi',
    icon: 'inspect',
    action: 'Buka Portal Inspeksi Irigasi',
    href: 'https://audit5ririgasi.estatepg1.online/'
  }
];

const INVENTORY_RETURN_LOADING_KEY = 'inventory-return-loading';

function Icon({ type }) {
  if (type === 'inspect') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8v3H8z"/><path d="M6 5h12a2 2 0 0 1 2 2v13H4V7a2 2 0 0 1 2-2Z"/><path d="m8 13 2 2 5-5"/></svg>;
  }
  if (type === 'accident') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 3.8 19h16.4L12 3Z"/><path d="M12 9v5"/><path d="M12 17.2v.1"/></svg>;
  }
  if (type === 'stock') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16v12H4z"/><path d="m4 8 3-4h10l3 4"/><path d="M9 12h6"/><path d="M9 15h6"/></svg>;
  }
  if (type === 'distribution') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v12H3z"/><path d="M14 10h4l3 3v5h-7z"/><path d="M7 18a2 2 0 1 0 0 1"/><path d="M18 18a2 2 0 1 0 0 1"/><path d="M7 10h4"/></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18H6z"/><path d="M9 7h6M9 11h6M9 15h3"/><path d="M8 19h8"/></svg>;
}

function Logo({ compact = false }) {
  return (
    <img
      className={compact ? 'logo logo-compact' : 'logo'}
      src="/download-removebg-preview.png"
      alt="GGF Great Giant Foods"
    />
  );
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [loadingSubtitle, setLoadingSubtitle] = useState('Membuka Sistem Irigasi...');

  useEffect(() => {
    const showReturnLoading = () => {
      if (sessionStorage.getItem(INVENTORY_RETURN_LOADING_KEY) !== 'true') return;

      sessionStorage.removeItem(INVENTORY_RETURN_LOADING_KEY);
      setLoadingSubtitle('Membuka Sistem Inventarisasi Unit...');
      setLoading(true);
      window.setTimeout(() => setLoading(false), 900);
    };

    showReturnLoading();
    window.addEventListener('pageshow', showReturnLoading);

    return () => window.removeEventListener('pageshow', showReturnLoading);
  }, []);

  const go = (href) => {
    if (href === 'https://k3inspeksi.estatepg1.online/' || href === 'https://unitirigasi.estatepg1.online/') {
      if (href === 'https://unitirigasi.estatepg1.online/') {
        setLoadingSubtitle('Membuka Sistem Inventarisasi Unit...');
      }
      setLoading(true);
      window.setTimeout(() => {
        if (href === 'https://unitirigasi.estatepg1.online/') {
          sessionStorage.setItem(INVENTORY_RETURN_LOADING_KEY, 'true');
        }
        window.location.href = href;
      }, 900);
      return;
    }

    window.location.href = href;
  };

  return (
    <>
      {loading && (
        <div className="loading-screen" role="status" aria-live="polite">
          <div className="loading-card">
            <Logo />
            <div className="loading-spinner" aria-hidden="true" />
            <div className="loading-title">Memuat Laman</div>
            <div className="loading-subtitle">{loadingSubtitle}</div>
          </div>
        </div>
      )}

      <main className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <Logo compact />
          <div className="brand-copy">
            <div className="brand-title">Portal Dashboard Irigasi</div>
            <div className="brand-subtitle">Sistem Informasi Irigasi Estate PG 1</div>
          </div>
        </div>


      </header>

      <section className="hero">
        <Logo />
        <h1>Portal Dashboard Irigasi</h1>
        <p>
          Portal terpusat untuk memantau, mengelola, dan mengoptimalkan operasional irigasi
          <br className="desktop-break" />
          di Plantation Group 1 · Great Giant Pineapple.
        </p>
      </section>

      <section className="dashboard-grid" id="dashboard-list">
        {menus.map((menu, index) => (
          <article className={`dashboard-card card-${index + 1}`} key={menu.title}>
            <div className="card-top">
              <div className={`icon-box icon-${menu.icon}`}><Icon type={menu.icon} /></div>
              <span className="badge">{menu.badge}</span>
            </div>

            <h2>{menu.title}</h2>
            <div className="card-subtitle">{menu.subtitle}</div>
            <p>{menu.description}</p>

            <button className="open-button" onClick={() => go(menu.href)}>
              {menu.action}
              <span className="arrow">→</span>
            </button>
          </article>
        ))}
      </section>
      </main>
    </>
  );
}

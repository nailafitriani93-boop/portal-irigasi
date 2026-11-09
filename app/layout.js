import './globals.css';

export const metadata = {
  title: 'Portal Dashboard Irigasi',
  description: 'Portal terpusat sistem irigasi Estate PG 1'
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

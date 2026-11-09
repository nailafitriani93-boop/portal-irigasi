# Portal Dashboard Irigasi

Portal Next.js untuk mengakses ringkasan sistem informasi irigasi Estate PG 1.

## Menjalankan secara lokal

```bash
npm ci
npm run dev
```

Buka `http://localhost:3000`.

## Build produksi

```bash
npm ci
npm run build
npm run start
```

Server produksi Next.js berjalan pada port 3000 secara default. Untuk VPS,
jalankan aplikasi di belakang Nginx dan aktifkan HTTPS. Jika portal harus
dibatasi, proteksi akses di Nginx atau tambahkan autentikasi aplikasi sebelum
menjadikannya tersedia di internet.

Jangan unggah file `.env` atau kredensial ke GitHub. File tersebut diabaikan
oleh Git; simpan konfigurasi rahasia langsung di VPS.

================================================================
  THERMAL ME — PEMBUAT RESI, STRUK & NOTA KUSTOM
  Versi     : V1.10
  Jenis     : PWA (Progressive Web App) — 100% offline
  Alamat    : https://ramaekayudha.github.io/thermal-me/
  Copyright : (c) 2026 · Design by Rama Eka Yudha
  Kontak    : yudha.ramaeka@gmail.com
================================================================

----------------------------------------------------------------
1. TENTANG APLIKASI
----------------------------------------------------------------
Thermal Me adalah aplikasi pembuat resi serbaguna yang berjalan
sepenuhnya di perangkat pengguna: tanpa server, tanpa internet,
tanpa akun. Semua data — templat, riwayat resi, logo, setelan —
tersimpan TERENKRIPSI (AES-256-GCM) di browser perangkat.

----------------------------------------------------------------
2. FITUR UTAMA
----------------------------------------------------------------
- Resi berbasis BLOK susun bebas: teks, logo, field data, tabel
  item, total, nomor urut otomatis, tanggal, garis, spasi,
  tanda tangan.
- GAYA TULISAN di semua blok bertulisan: rata kiri/tengah/kanan/
  justify, ukuran Kecil/Normal/2x Tinggi/2x Lebar/2x2 (Double
  Size)/MEGA 3x3, Tebal, Miring — pratinjau, dialog sistem, dan
  ESC/POS konsisten (Miring & Mega di printer tergantung
  dukungan ESC 4/5 dan GS !).
- Field Data: 1/2/3 kolom — tampil di kertas DAN di form tab
  Isi Resi; perataan 4 arah; titik dua manual.
- Nomor Urut: perataan 4 arah berlaku di mode 1 Baris & 2 Baris;
  1 Baris + Justify = label kiri, nomor kanan; format token
  kustom, bisa diedit.
- Tanggal: rata 4 arah; TANPA titik dua otomatis (ketik manual
  di label bila ingin).
- Logo resi: ukuran bebas 10-100%, rata 3 arah, dither
  Floyd-Steinberg di printer termal.
- Logo resmi aplikasi (512x512, latar putih): tampil BULAT di
  kartu login & bilah atas, kedua mode; ikon PWA/favicon.
- Templat siap pakai: Struk, Nota, Resi Kirim, Kosong;
  duplikat, ekspor/impor (opsional terenkripsi).
- Riwayat terenkripsi: cari, cetak ulang, duplikat, batalkan,
  hapus satuan/terpilih/sekaligus.
- Simpan otomatis + cadangan otomatis harian terenkripsi +
  pulihkan cadangan.
- Mode terang (default) & gelap. UI sans-serif 13px; kertas
  pratinjau & cetak tetap monospace (cermin grid printer).
- Keamanan: kunci idle, ganti passphrase, pembatasan percobaan.

----------------------------------------------------------------
3. ISI PAKET
----------------------------------------------------------------
  index.html          : seluruh aplikasi (UI + logika + keamanan)
  sw.js               : service worker (offline penuh)
  manifest.json       : konfigurasi PWA (installable)
  logo.png            : logo resmi (latar putih, 512x512)
  readme.txt          : file ini
  privacy-policy.html : kebijakan privasi (publikasi)
  .well-known/        : verifikasi aplikasi Android (TWA)
  .nojekyll           : penanda GitHub Pages

----------------------------------------------------------------
4. MENJALANKAN LOKAL
----------------------------------------------------------------
Wajib lewat localhost/HTTPS (bukan file://).

  python -m http.server 8000   ->  buka http://localhost:8000

----------------------------------------------------------------
5. DEPLOY
----------------------------------------------------------------
- GitHub Pages : push repo -> Settings -> Pages -> Deploy from
  branch: main / (root).
- Netlify Drop : seret folder ke app.netlify.com/drop
- cPanel       : upload semua file ke public_html + SSL.

PENTING: data brankas terikat ALAMAT aplikasi. Pindah domain =
brankas baru. Gunakan Cadangkan & Pulihkan.

----------------------------------------------------------------
6. DUKUNGAN PRINTER
----------------------------------------------------------------
  USB               : Chrome/Edge desktop & Android (ESC/POS)
  Bluetooth (BLE)   : Chrome/Edge desktop & Android (GATT)
  Serial/RS232      : Chrome desktop (ESC/POS)
  WiFi/LAN & semua  : lewat "Printer Sistem" (dialog cetak OS)
  printer berdriver

Printer Bluetooth klasik (SPP) tidak dapat diakses browser — pakai
port USB-nya. Printer non-termal gunakan jalur Printer Sistem.

----------------------------------------------------------------
7. KEAMANAN DATA
----------------------------------------------------------------
- At-rest: AES-256-GCM; kunci PBKDF2-SHA256 600.000 iterasi,
  hanya hidup di memori sesi.
- Nol telemetry: tidak ada data keluar dari perangkat.
- Preferensi tema di localStorage (isinya hanya "terang"/"gelap").
- Passphrase brankas hilang = data tidak dapat dipulihkan.

----------------------------------------------------------------
8. VERSI
----------------------------------------------------------------
  V1.5 : ukuran logo kustom, perbaikan render awal
  V1.6 : pra-login bersih, terang/gelap, cadangan + pulihkan,
         justify teks, nomor 1/2 baris, perataan tanggal
  V1.7 : logo resmi aplikasi (favicon, layar awal, bilah atas,
         ikon PWA)
  V1.8 : field rata 4 arah & titik dua manual, 2-3 kolom, font
         UI sans 13px
  V1.9 : gaya lengkap (tebal/miring/2x/2x2/Mega 3x3/rata) di
         semua blok bertulisan; logo bulat
  V1.10: FIX 3 kolom (form Isi Resi kini berkolom, guard
         diturunkan); tanggal tanpa titik dua otomatis;
         perataan nomor urut berfungsi di mode 1 & 2 baris

================================================================
  Copyright (c) 2025 · Design by Rama Eka Yudha
================================================================
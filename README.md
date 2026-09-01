================================================================
  THERMAL ME — PEMBUAT RESI, STRUK & NOTA KUSTOM
  Versi     : V1.12
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
- FIELD DATA: jumlah kolom SELALU mengikuti pilihan (1/2/3 field
  per baris, tanpa penyesuaian oleh lebar kertas); GAYA PER FIELD
  — setiap field punya rata/ukuran/tebal/miring sendiri, termasuk
  dalam satu baris multi-kolom (baris segmen multi-gaya; didukung
  pratinjau, dialog cetak, dan ESC/POS). Kotak pratinjau tata
  letak di editor diperbarui seketika.
- Gaya lengkap (rata 4 arah, Kecil/Normal/2x Tinggi/2x Lebar/
  2x2/Mega 3x3, tebal, miring) di semua blok bertulisan.
- Nomor Urut: perataan 4 arah di mode 1 & 2 baris; format token
  kustom, bisa diedit.
- Tanggal: rata 4 arah; tanpa titik dua otomatis.
- Spasi: langkah 0,5 (setengah baris; printer: ESC 3).
- Logo resi: ukuran bebas 10-100%, rata 3 arah, dither
  Floyd-Steinberg di printer termal.
- Logo resmi aplikasi (512x512, latar putih): bulat di kartu
  login & bilah atas, kedua mode; ikon PWA/favicon.
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
  V1.9 : gaya lengkap semua blok; logo bulat
  V1.10: 3 kolom aktif di 58mm, form Isi berkolom, tanggal tanpa
         titik dua, perataan nomor urut di kedua mode
  V1.11: kotak pratinjau tata letak di editor field; spasi 0,5
  V1.12: GAYA PER FIELD (rata/ukuran/tebal/miring masing-masing
         field, termasuk dalam satu baris); jumlah kolom SELALU
         mengikuti pilihan (fallback dihapus); FIX Mega GS ! 33
         (0x22 lama ternyata 2x2); migrasi wariskan gaya lama

================================================================
  Copyright (c) 2026 · Design by Rama Eka Yudha
================================================================
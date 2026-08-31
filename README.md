================================================================
  THERMAL ME — PEMBUAT RESI, STRUK & NOTA KUSTOM
  Versi     : V1.8
  Jenis     : PWA (Progressive Web App) — 100% offline
  Alamat    : https://ramaekayudha.github.io/thermal-me/
  Copyright : (c) 2025 · Design by Rama Eka Yudha
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
  item, total (diskon/pajak/pembulatan/bayar/kembali), nomor urut
  otomatis, tanggal, garis, spasi, area tanda tangan.
- Templat siap pakai: Struk Toko, Nota, Resi Pengiriman, atau
  kosong. Duplikat, ganti nama, ekspor/impor (opsional terenkripsi).
- Teks: font A/B, Kecil/Normal/2x Tinggi/2x Lebar/Besar(2x2),
  tebal, garis bawah, rata kiri/tengah/kanan/JUSTIFY.
- Field Data: rata kiri/tengah/kanan/justify; tata letak 1/2/3
  kolom (beberapa field sebaris di kertas); titik dua diketik
  manual di label (tidak ditambah otomatis).
- Nomor urut: format token kustom, bisa diedit, mode 1 baris
  (justify) atau 2 baris.
- Tanggal: rata kiri/tengah/kanan/justify.
- Logo resi: PNG/JPG, ukuran bebas 10-100%, rata kiri/tengah/kanan,
  dicetak dengan dither Floyd-Steinberg di printer termal.
- Logo resmi aplikasi (logo.png, latar putih 512x512): tampil
  sebagai ubin membulat rapi di mode terang & gelap; favicon,
  ikon PWA/Android/iOS; di-cache offline.
- Riwayat terenkripsi: cari, cetak ulang, duplikat, batalkan,
  hapus satuan/terpilih/sekaligus.
- Simpan otomatis (terlihat di footer) + cadangan otomatis harian
  terenkripsi + pulihkan cadangan.
- Mode terang (ultra clean, default) dan mode gelap.
- Font UI: sans-serif sistem 13px. Pratinjau kertas & hasil cetak
  tetap monospace — cermin grid karakter printer 1:1.
- Keamanan: kunci idle, ganti passphrase, pembatasan percobaan,
  koneksi printer terputus saat brankas dikunci.

----------------------------------------------------------------
3. ISI PAKET
----------------------------------------------------------------
  index.html          : seluruh aplikasi (UI + logika + keamanan)
  sw.js               : service worker (offline penuh)
  manifest.json       : konfigurasi PWA (installable)
  logo.png            : logo resmi (latar putih, 512x512)
  readme.txt          : file ini
  privacy-policy.html : kebijakan privasi (untuk publikasi)
  .well-known/        : verifikasi aplikasi Android (TWA)
  .nojekyll           : penanda GitHub Pages

----------------------------------------------------------------
4. MENJALANKAN LOKAL
----------------------------------------------------------------
Wajib lewat localhost/HTTPS (bukan file://) karena fitur kripto,
service worker, dan printer membutuhkan konteks aman.

  python -m http.server 8000   ->  buka http://localhost:8000
  (atau: npx serve)

----------------------------------------------------------------
5. DEPLOY
----------------------------------------------------------------
- GitHub Pages : push repo -> Settings -> Pages -> Deploy from
  branch: main / (root). HTTPS otomatis aktif.
- Netlify Drop : seret folder ke app.netlify.com/drop
- cPanel       : upload semua file ke public_html, aktifkan SSL.

PENTING: data brankas terikat pada ALAMAT aplikasi. Pindah domain
= brankas baru. Gunakan Cadangkan & Pulihkan untuk memindahkan
data antar perangkat/domain.

----------------------------------------------------------------
6. DUKUNGAN PRINTER
----------------------------------------------------------------
  USB               : Chrome/Edge desktop & Android (ESC/POS)
  Bluetooth (BLE)   : Chrome/Edge desktop & Android (GATT)
  Serial/RS232      : Chrome desktop (ESC/POS)
  WiFi/LAN & semua  : lewat "Printer Sistem" (dialog cetak OS)
  printer berdriver

Catatan: printer Bluetooth klasik (SPP) tidak dapat diakses
browser — pakai port USB-nya. Di Windows, USB bisa gagal bila
driver sistem sedang memegang printer. Printer termal murah
umumnya mengerti dialek ESC/POS. Printer non-termal (inkjet/laser)
gunakan jalur Printer Sistem.

----------------------------------------------------------------
7. KEAMANAN DATA
----------------------------------------------------------------
- At-rest: AES-256-GCM; kunci diturunkan dari passphrase dengan
  PBKDF2-SHA256 600.000 iterasi, hanya hidup di memori sesi.
- Nol telemetry: tidak ada data keluar dari perangkat.
- Preferensi tema disimpan polos di localStorage (isinya hanya
  kata "terang"/"gelap" — bukan data sensitif).
- Passphrase brankas hilang = data tidak dapat dipulihkan.
  Cadangan terenkripsi adalah jaring pengaman.

----------------------------------------------------------------
8. VERSI
----------------------------------------------------------------
Penomoran: V1.5, V1.6, V1.7, ... (naik satu per rilis; nama cache
service worker ikut dinaikkan agar pembaruan otomatis).

  V1.5 : ukuran logo kustom, perbaikan render awal
  V1.6 : pra-login bersih, mode terang/gelap, cadangan otomatis
         + pulihkan, justify teks, nomor urut 1/2 baris,
         perataan tanggal
  V1.7 : logo resmi aplikasi (favicon, layar awal, bilah atas,
         ikon PWA/install)
  V1.8 : Field Data — perataan 4 arah, titik dua manual,
         tata letak 2/3 kolom; font UI baru sans-serif 13px;
         tampilan logo ubin membulat untuk latar putih

PERUBAHAN V1.8 YANG PERLU DIKETAHUI: titik dua pada Field Data
tidak lagi ditambahkan otomatis. Templat lama tampil tanpa ":" —
ketik sendiri di label (mis. "Nama:") bila ingin seperti dulu.

================================================================
  Copyright (c) 2025 · Design by Rama Eka Yudha
================================================================
================================================================
  THERMAL ME — PEMBUAT RESI, STRUK & NOTA KUSTOM
  Versi     : V1.6
  Jenis     : PWA (Progressive Web App) — 100% offline
  Copyright : (c) 2025 · Design by Rama Eka Yudha
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
- Nomor urut: format token kustom, bisa diedit, mode 1 baris
  (justify) atau 2 baris.
- Tanggal: rata kiri/tengah/kanan/justify.
- Logo: PNG/JPG, ukuran bebas 10-100%, rata kiri/tengah/kanan,
  dicetak dengan dither Floyd-Steinberg di printer termal.
- Riwayat terenkripsi: cari, cetak ulang, duplikat, batalkan,
  hapus satuan/terpilih/sekaligus.
- Simpan otomatis (terlihat di footer) + cadangan otomatis harian
  terenkripsi + pulihkan cadangan.
- Mode terang (ultra clean, default) dan mode gelap.
- Keamanan: kunci idle, ganti passphrase, pembatasan percobaan,
  auto-koneksi printer terputus saat brankas dikunci.

----------------------------------------------------------------
3. ISI PAKET
----------------------------------------------------------------
  index.html     : seluruh aplikasi (UI + logika + keamanan)
  sw.js          : service worker (offline penuh)
  manifest.json  : konfigurasi PWA (installable)
  readme.txt     : file ini

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
- cPanel       : upload 4 file ke public_html, aktifkan SSL.

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
  V1.6 : pra-login bersih (overlay pratinjau disembunyikan),
         mode terang/gelap, cadangan otomatis + pulihkan,
         justify teks, nomor urut 1/2 baris, perataan tanggal

================================================================
  Copyright (c) 2025 · Design by Rama Eka Yudha
================================================================
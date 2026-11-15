# PLAN 02 — HERO

## 1. Informasi Plan

| Item | Detail |
|---|---|
| Project | Personal Portfolio Hero |
| Plan ID | 02 |
| Nama Plan | Hero / Home |
| Status | PLANNED |
| Prioritas | Tinggi |
| Dependensi | Plan 00 — Project Foundation |
| Integrasi | Plan 01 — Opening |
| Plan Berikutnya | Plan 03 — About |

**Tujuan plan:** merancang dan mengimplementasikan Hero sebagai bagian utama yang memperkenalkan fokus profesional dan mengarahkan pengunjung menuju proyek.

Status `PLANNED` digunakan sampai implementasi Hero mulai dikerjakan.

---

## 2. Tujuan

Hero merupakan bagian utama yang dilihat pengunjung setelah Opening selesai.

Hero harus menjawab tiga pertanyaan utama:

1. Apa yang dapat dibangun oleh pemilik portofolio?
2. Apa fokus kemampuan profesional yang ditawarkan?
3. Ke mana pengunjung harus melanjutkan untuk melihat bukti kemampuan tersebut?

Hero bukan CV lengkap dan bukan daftar panjang teknologi. Informasi profil terperinci ditempatkan pada Plan 03 — About, sedangkan bukti pekerjaan ditampilkan pada bagian Projects.

### Prinsip Hero

- Pesan profesional mudah dipahami.
- Headline menjadi elemen visual utama.
- Deskripsi menjelaskan cakupan kemampuan secara ringkas.
- Tombol utama mengarahkan pengunjung menuju Projects.
- Visual mendukung pesan, bukan mengalahkan konten.
- Tampilan tetap profesional pada desktop dan mobile.
- Animasi tidak menghambat akses ke konten.

---

## 3. Ruang Lingkup

### Termasuk dalam plan ini

- Headline Hero.
- Deskripsi profesional.
- Tombol utama “Lihat Proyek”.
- Komposisi visual.
- Hierarki tipografi.
- Background dan aksen geometris.
- Animasi Hero.
- Responsivitas desktop dan mobile.
- Integrasi dengan Opening dan navbar.
- Pengujian fungsi dan visual.

### Di luar ruang lingkup

- Pengembangan profil lengkap pada About.
- Implementasi carousel Projects.
- Halaman detail proyek.
- Formulir Contact.
- Perubahan mekanisme Opening yang tidak diperlukan.
- Penambahan dependensi animasi tanpa alasan teknis.

---

## 4. Konten Hero

### 4.1 Headline

Teks headline yang telah disepakati:

**“Membangun Pengalaman Web dan Solusi Digital.”**

Ketentuan:
- Tidak menggunakan nama pribadi pada headline.
- Menjadi elemen teks paling dominan pada Hero.
- Menggunakan hierarki tipografi yang tegas.
- Tetap terbaca pada berbagai ukuran layar.
- Tidak menggunakan klaim yang tidak dapat dibuktikan.

### 4.2 Deskripsi

Teks deskripsi yang telah disepakati:

“Membangun website responsif, aplikasi web yang skalabel, API yang andal, serta sistem informasi terintegrasi dengan dukungan basis data yang dirancang dengan baik, untuk mengubah ide kompleks menjadi produk digital yang praktis.”

Deskripsi ini menjelaskan cakupan kemampuan tanpa mencantumkan seluruh teknologi secara berlebihan.

Jika panjang teks mengganggu komposisi visual pada perangkat mobile, revisi copywriting harus disetujui terlebih dahulu sebelum diterapkan.

### 4.3 Tombol Utama

Label tombol:

**Lihat Proyek**

Perilaku yang diharapkan:
- Mengarahkan pengunjung ke section Projects.
- Menggunakan navigasi yang sesuai dengan struktur halaman aktual.
- Memiliki keadaan hover dan fokus yang jelas.
- Dapat digunakan dengan mouse, keyboard, dan layar sentuh.
- Tidak mengarah ke target yang belum tersedia.

Jika Projects belum diimplementasikan, target tombol harus tetap dirancang konsisten dengan ID section yang akan digunakan pada Plan 04.

### 4.4 Konten yang Tidak Dimasukkan

Hal-hal berikut tidak perlu ditampilkan sebagai konten utama Hero:

- Riwayat pendidikan lengkap.
- Daftar seluruh teknologi.
- Daftar semua proyek.
- Pengalaman kerja yang belum terverifikasi.
- Klaim jumlah proyek atau pengguna tanpa bukti.

Informasi tersebut ditempatkan pada section yang sesuai.

---

## 5. Spesifikasi Desain

### 5.1 Identitas Visual

Hero mengikuti identitas visual global:

- Background gelap dengan referensi warna `#080C13`.
- Aksen amber dengan referensi warna `#F5A342`.
- Teks utama terang.
- Teks pendukung menggunakan warna sekunder.
- Elemen geometris digunakan secara terukur.
- Tipografi tegas dan modern.

Nilai warna final mengikuti design system Plan 00 dan CSS aktual.

### 5.2 Komposisi

Arah desain yang direkomendasikan adalah **cinematic minimal**.

Karakteristik:
- Headline berukuran besar.
- Ruang kosong yang cukup.
- Deskripsi berada dekat dengan headline.
- Tombol utama mudah ditemukan.
- Elemen geometris atau glow mendukung komposisi.
- Tidak menggunakan terlalu banyak elemen dekoratif.

Komposisi final harus diperiksa terhadap Hero yang sudah ada sebelum kode diubah.

### 5.3 Hierarki Visual

Urutan perhatian pengunjung:

1. Headline.
2. Deskripsi.
3. Tombol “Lihat Proyek”.
4. Elemen dekoratif pendukung.

Headline dan tombol harus tetap menjadi fokus utama.

---

## 6. Tipografi dan Layout

### Tipografi

- Headline harus memiliki hierarki visual paling tinggi.
- Deskripsi menggunakan ukuran yang nyaman dibaca.
- Lebar teks dibatasi agar baris tidak terlalu panjang.
- Ukuran font disesuaikan dengan viewport.
- Line-height dan letter spacing ditentukan berdasarkan keterbacaan.

Gunakan CSS responsif seperti `clamp()` jika sesuai dengan pola styling proyek.

### Desktop

- Headline memiliki ruang yang cukup.
- Deskripsi tidak terlalu lebar.
- Tombol terlihat jelas.
- Komposisi seimbang dan tidak terasa padat.
- Navbar tidak menutupi konten Hero.

### Mobile

- Headline dapat membungkus ke beberapa baris dengan alami.
- Tidak ada teks yang terpotong.
- Padding horizontal memadai.
- Tombol mudah disentuh.
- Jarak antara headline, deskripsi, dan tombol tetap nyaman.
- Elemen dekoratif tidak menyebabkan horizontal overflow.

Breakpoint mengikuti kebutuhan layout dan struktur CSS aktual.

---

## 7. Animasi dan Transisi

Animasi Hero harus mendukung pengalaman setelah Opening, bukan mengulang Opening dengan efek yang berlebihan.

### Prinsip animasi

- Transisi terasa halus.
- Headline dan deskripsi dapat muncul secara berurutan jika sesuai dengan desain.
- Tombol tidak boleh terlambat muncul secara berlebihan.
- Tidak ada gerakan yang mengganggu pembacaan.
- Animasi tidak mengubah layout secara mendadak.
- Hormati `prefers-reduced-motion`.

### Integrasi dengan Opening

- Hero harus siap ketika Opening selesai.
- Hindari efek kosong antara splash dan Hero.
- Jangan menjalankan animasi Opening dan animasi Hero dengan jeda yang membuat halaman terasa lambat.
- Jangan menambahkan timer yang tidak diperlukan.
- Jangan memperkenalkan library animasi baru tanpa kebutuhan teknis yang jelas.

Durasi, easing, dan urutan animasi ditetapkan setelah tampilan Hero aktual diperiksa dan desain disetujui.

---

## 8. Struktur Kode dan File

Berdasarkan struktur repository yang terlihat, file utama Hero adalah:

| File | Tanggung Jawab |
|---|---|
| `src/components/sections/HeroSection.tsx` | Markup dan struktur komponen Hero |
| `src/styles/hero.css` | Rencana lokasi styling khusus Hero; keberadaan file perlu diperiksa |
| `src/pages/HomePage.tsx` | Menyusun Hero bersama section lain pada halaman utama |
| `src/index.css` | Styling global |
| `src/components/layout/SiteHeader.tsx` | Navigasi utama |
| `src/router.tsx` | Routing aplikasi jika perubahan route diperlukan |

**Catatan:** `hero.css` belum terlihat pada screenshot struktur repository yang diberikan. Jangan menganggap file tersebut sudah ada. Periksa pola styling aktual sebelum memutuskan apakah akan membuat file baru atau menggunakan file CSS yang sudah tersedia.

### Aturan implementasi

- Pertahankan komponen Hero yang sudah ada jika masih sesuai.
- Hindari menulis ulang seluruh `HeroSection.tsx` tanpa pemeriksaan.
- Jangan mengubah Opening untuk menyelesaikan masalah styling Hero kecuali ditemukan hubungan teknis yang nyata.
- Hindari duplikasi CSS global dan CSS khusus section.
- Gunakan ID section yang konsisten untuk target tombol “Lihat Proyek”.

---

## 9. Checklist Implementasi

### 9.1 Konten

- [ ] Headline sesuai teks yang disepakati.
- [ ] Headline tidak menggunakan nama pribadi.
- [ ] Deskripsi menjelaskan kemampuan secara ringkas.
- [ ] Tidak ada klaim profesional yang tidak terverifikasi.
- [ ] Label tombol utama adalah “Lihat Proyek”.

### 9.2 Visual

- [ ] Hierarki headline, deskripsi, dan tombol jelas.
- [ ] Identitas dark premium konsisten.
- [ ] Aksen amber digunakan secara terukur.
- [ ] Komposisi desktop seimbang.
- [ ] Tampilan mobile nyaman dibaca.
- [ ] Tidak ada horizontal overflow.
- [ ] Navbar tidak menutupi Hero.

### 9.3 Fungsi

- [ ] Tombol “Lihat Proyek” mengarah ke target yang benar.
- [ ] Target Projects memiliki ID atau mekanisme navigasi yang sesuai.
- [ ] Navigasi berfungsi pada desktop dan mobile.
- [ ] Tombol memiliki hover, focus, dan perilaku keyboard yang sesuai.
- [ ] Tidak ada error pada console yang disebabkan perubahan Hero.

### 9.4 Animasi dan aksesibilitas

- [ ] Animasi tidak mengganggu pembacaan.
- [ ] Transisi dari Opening terasa halus.
- [ ] Tidak ada jeda kosong yang mengganggu.
- [ ] `prefers-reduced-motion` dihormati.
- [ ] Konten tetap tersedia ketika animasi dinonaktifkan.

### 9.5 Teknis

- [ ] Struktur komponen sesuai arsitektur proyek.
- [ ] Tidak ada duplikasi CSS yang tidak diperlukan.
- [ ] Tidak ada dependensi baru tanpa alasan.
- [ ] Build proyek berhasil setelah perubahan.
- [ ] Perubahan terdokumentasi.

---

## 10. Kriteria Penyelesaian (Definition of Done)

Plan 02 dapat dinyatakan `COMPLETED` apabila:

1. Konten Hero sesuai spesifikasi yang disetujui.
2. Visual konsisten dengan design system.
3. Headline dan deskripsi terbaca pada desktop serta mobile.
4. Tombol “Lihat Proyek” bekerja sesuai target yang disepakati.
5. Animasi tidak mengganggu pengalaman setelah Opening.
6. Aksesibilitas dasar dan reduced motion diperiksa.
7. Tidak ada error baru terkait implementasi Hero.
8. Build proyek berhasil.
9. Tidak ada masalah kritis yang masih terbuka.
10. Dokumentasi mencerminkan implementasi dan hasil pengujian aktual.

Item yang belum diverifikasi harus dicatat sebagai pekerjaan tersisa.

---

## 11. Catatan Implementasi dan Pengujian

Bagian ini diisi setelah pengerjaan Hero dilakukan.

### Implementasi

- Status awal: belum dimulai.
- File utama: `src/components/sections/HeroSection.tsx`.
- Styling: lokasi dan pola aktual perlu diperiksa.
- Integrasi: `HomePage.tsx` dan `SiteHeader.tsx`.

### Hasil pengujian

- Belum diuji dalam lingkup Plan 02.
- Hasil pengujian dicatat setelah implementasi.
- Build tidak boleh dinyatakan berhasil sebelum benar-benar dijalankan.

### Masalah terbuka

- [ ] Periksa implementasi Hero yang ada.
- [ ] Periksa styling aktual.
- [ ] Periksa target navigasi Projects.
- [ ] Tentukan animasi berdasarkan desain yang disetujui.
- [ ] Uji desktop dan mobile.

---

## 12. Hubungan dengan Plan Berikutnya

Setelah Plan 02 selesai, pengerjaan dilanjutkan ke **Plan 03 — About**.

Plan 03 akan menangani:
- Profil profesional.
- Fokus pemecahan masalah.
- Teknologi inti.
- Informasi pendidikan atau pengalaman yang relevan.
- Tombol unduh CV jika file CV yang benar sudah tersedia.

Plan 02 tidak mencakup implementasi About secara terperinci.

---

## 13. Riwayat Perubahan

| Versi | Perubahan |
|---|---|
| Draft 1 | Penyusunan tujuan, konten, desain, struktur kode, dan kriteria pengujian Hero |

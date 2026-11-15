# PLAN 01 — OPENING

## 1. Informasi Plan

| Item | Detail |
|---|---|
| Project | Personal Portfolio Hero |
| Plan ID | 01 |
| Nama Plan | Opening — Cinematic Introduction |
| Status | IMPLEMENTED — VERIFICATION PENDING |
| Prioritas | Tinggi |
| Dependensi | Plan 00 — Project Foundation |
| Plan Berikutnya | Plan 02 — Hero |

Opening merupakan layar pembuka portofolio yang memberikan pengalaman visual sebelum pengunjung melihat konten utama.

**Catatan status:** Pengguna melaporkan checklist implementasi Opening telah selesai. Verifikasi independen terhadap repository dan hasil build belum dilakukan. Status final ditetapkan setelah implementasi aktual dan kriteria pengujian dicocokkan.

---

## 2. Tujuan

Opening dirancang untuk memberikan kesan pertama yang profesional, memperkenalkan identitas visual portofolio, dan menghubungkan pengunjung ke Hero melalui transisi yang halus.

Opening bukan halaman terpisah, bukan item navigasi, dan tidak menggantikan fungsi Hero sebagai bagian utama yang menjelaskan identitas profesional.

### Tujuan khusus

1. Menampilkan teks pembuka yang jelas dan terpusat.
2. Menggunakan identitas visual dark premium dengan aksen amber.
3. Menyajikan animasi masuk dan keluar yang halus.
4. Mencegah perubahan font yang terlihat selama splash ditampilkan.
5. Mendukung berbagai ukuran layar.
6. Menghormati preferensi aksesibilitas untuk mengurangi animasi.
7. Menghindari splash yang macet ketika font gagal dimuat.

---

## 3. Ruang Lingkup

### Termasuk dalam plan ini

- Markup awal Opening.
- Background dan elemen geometris.
- Tipografi dan pemuatan font.
- Animasi masuk dan keluar.
- Pengaturan waktu tampil.
- Penghapusan elemen splash setelah selesai.
- Penanganan `prefers-reduced-motion`.
- Responsivitas.
- Transisi menuju halaman utama.
- Pemeriksaan file Opening versi lama.
- Pengujian dan dokumentasi hasil.

### Di luar ruang lingkup

- Perubahan desain Hero.
- Perubahan navbar.
- Implementasi About, Projects, dan Contact.
- Perubahan struktur routing yang tidak diperlukan untuk Opening.
- Penambahan library animasi baru tanpa kebutuhan teknis yang jelas.
- Perombakan global CSS yang tidak berkaitan dengan Opening.

---

## 4. Spesifikasi Visual

### 4.1 Teks Pembuka

Teks yang digunakan:

`WELCOME TO MY PORTFOLIO`

Ketentuan:

- Menggunakan huruf kapital.
- Berada di area tengah layar.
- Memiliki hierarki visual yang jelas.
- Tetap terbaca pada desktop maupun mobile.
- Tidak mengalami perubahan font yang mengganggu ketika splash tampil.

### 4.2 Tipografi

| Properti | Spesifikasi |
|---|---|
| Font family | Rajdhani |
| Font weight | 500 |
| Warna | `#F4F5F7` |
| Ukuran desktop | Responsif menggunakan `clamp()` |
| Ukuran mobile | Disesuaikan melalui media query |
| Letter spacing | Mengikuti konfigurasi CSS aktual |
| Alignment | Tengah |

Font Rajdhani dimuat melalui Google Fonts sesuai implementasi yang telah dibahas.

### 4.3 Background

| Elemen | Spesifikasi |
|---|---|
| Warna dasar | `#080C13` |
| Glow | Amber/oranye dengan transparansi |
| Geometri | Lingkaran tipis sebagai elemen dekoratif |
| Posisi teks | Di atas elemen dekoratif |
| Overflow | Tidak menimbulkan scroll horizontal |

Elemen geometris menggunakan garis tipis dan cahaya lembut agar tetap konsisten dengan identitas visual portofolio.

Nilai warna, ukuran lingkaran, dan intensitas glow final mengikuti CSS aktual yang telah disetujui.

---

## 5. Spesifikasi Perilaku dan Animasi

### 5.1 Animasi Masuk

Teks dimulai dari kondisi tidak terlihat, kemudian muncul secara bertahap.

| Properti | Nilai referensi |
|---|---|
| Opacity awal | `0` |
| Blur awal | `5px` |
| Posisi awal | Bergeser vertikal `8px` |
| Opacity akhir | `1` |
| Blur akhir | `0` |
| Posisi akhir | `translateY(0)` |
| Durasi | `1.8s` |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` |

Animasi hanya boleh dimulai setelah font siap ditampilkan.

### 5.2 Pemuatan Font

Implementasi perlu menunggu font Rajdhani siap sebelum memperlihatkan teks.

Ketentuan:

- Gunakan Font Loading API jika sesuai dengan implementasi aktual.
- Gunakan kelas seperti `font-ready` sebagai pemicu visibilitas dan animasi.
- Sediakan penanganan kegagalan pemuatan font.
- Gunakan timeout agar splash tidak menahan pengunjung tanpa batas waktu.
- Jika font tidak tersedia setelah mekanisme timeout, utamakan akses ke halaman utama daripada mempertahankan splash yang macet.

### 5.3 Durasi Tampilan

Nilai waktu yang telah dibahas:

| Tahapan | Nilai referensi |
|---|---|
| Waktu tampil setelah Opening siap | `2500ms` |
| Transisi keluar | `520ms` |
| Penghapusan elemen | Setelah transisi keluar |

Durasi aktual harus dicocokkan dengan `src/main.tsx`.

Waktu animasi masuk selama `1.8s` berlangsung di dalam periode tampilan, bukan ditambahkan secara otomatis sebagai waktu terpisah.

### 5.4 Animasi Keluar

Splash menggunakan transisi opacity menuju kondisi tidak terlihat.

Ketentuan:

- Transisi berlangsung halus.
- Elemen tidak menerima interaksi ketika sedang keluar.
- Splash dihapus setelah transisi selesai.
- Tidak ada layar kosong atau kedipan yang mengganggu saat Hero ditampilkan.

### 5.5 Reduced Motion

Ketika pengguna mengaktifkan `prefers-reduced-motion: reduce`:

- Animasi masuk dan keluar tidak dijalankan.
- Opening dilewati atau dihilangkan sesuai implementasi.
- Pengunjung dapat mengakses konten utama tanpa harus menunggu animasi.

---

## 6. Responsivitas

Opening harus berfungsi pada desktop, tablet, dan mobile.

### Desktop

- Teks berada di tengah layar.
- Lingkaran geometris tidak mendominasi teks.
- Glow tetap lembut dan proporsional.
- Tidak terjadi perubahan layout yang mengganggu.

### Mobile

- Ukuran font menyesuaikan lebar layar.
- Padding horizontal mencegah teks menyentuh tepi layar.
- Letter spacing disesuaikan jika diperlukan.
- Lingkaran dekoratif tetap proporsional.
- Tidak ada horizontal overflow.

### Ketentuan umum

Responsivitas diuji pada ukuran viewport yang berbeda. Nilai breakpoint mengikuti implementasi CSS dan tidak ditentukan ulang tanpa kebutuhan yang jelas.

---

## 7. Struktur Kode dan Tanggung Jawab File

Berdasarkan implementasi yang telah dibahas, file yang berkaitan dengan Opening adalah:

| File | Tanggung Jawab |
|---|---|
| `index.html` | Markup awal splash, CSS kritis, pemuatan font, dan elemen Opening sebelum React |
| `src/main.tsx` | Inisialisasi React dan pengaturan siklus hidup splash |
| `src/index.css` | Styling global jika berkaitan dengan Opening |
| `src/components/opening/OpeningIntro.tsx` | Komponen Opening versi React yang masih tercatat |
| `src/hooks/useOpeningIntro.ts` | Hook Opening versi React yang masih tercatat |
| `src/styles/opening.css` | CSS Opening versi React yang masih tercatat |

### Aturan implementasi

- `index.html` dan `src/main.tsx` menjadi fokus pemeriksaan untuk splash awal.
- File Opening versi React tidak boleh langsung dihapus.
- Periksa import, penggunaan komponen, dan referensi CSS sebelum menentukan file mana yang masih diperlukan.
- Hindari menjalankan dua mekanisme Opening sekaligus.
- Jangan menduplikasi animasi atau timer pada beberapa tempat tanpa alasan teknis yang jelas.
- Perubahan dilakukan secara terarah tanpa mengubah fitur lain.

---

## 8. Checklist Implementasi

Checklist ini digunakan untuk memastikan implementasi sesuai spesifikasi.

### 8.1 Visual

- [ ] Teks `WELCOME TO MY PORTFOLIO` tampil dengan benar.
- [ ] Font Rajdhani digunakan sesuai spesifikasi.
- [ ] Background gelap sesuai identitas visual.
- [ ] Glow amber terlihat proporsional.
- [ ] Lingkaran geometris terlihat tetapi tidak mengganggu teks.
- [ ] Teks tetap terbaca pada ukuran layar berbeda.

### 8.2 Perilaku dan animasi

- [ ] Teks tidak terlihat sebelum font siap.
- [ ] Animasi masuk berjalan dengan halus.
- [ ] Transisi keluar berjalan dengan halus.
- [ ] Splash dihapus setelah selesai.
- [ ] Hero dapat ditampilkan tanpa kedipan yang mengganggu.
- [ ] Tidak ada timer atau mekanisme Opening ganda yang tidak diperlukan.

### 8.3 Responsivitas dan aksesibilitas

- [ ] Tampilan desktop telah diperiksa.
- [ ] Tampilan mobile telah diperiksa.
- [ ] Tidak ada horizontal overflow.
- [ ] `prefers-reduced-motion` berfungsi sesuai ketentuan.
- [ ] Splash tidak menghalangi akses ke konten utama ketika animasi dilewati.

### 8.4 Teknis

- [ ] Penanganan kegagalan font sudah diperiksa.
- [ ] Timeout tidak menyebabkan splash macet.
- [ ] File Opening versi lama telah diperiksa referensinya.
- [ ] Tidak ada error JavaScript terkait Opening.
- [ ] Build proyek berhasil.

**Catatan:** Checklist harus mencerminkan hasil pengujian yang benar-benar dilakukan. Item yang belum diverifikasi tidak boleh ditandai selesai hanya berdasarkan asumsi.

---

## 9. Kriteria Penyelesaian (Definition of Done)

Plan 01 dapat dinyatakan `COMPLETED` apabila:

1. Desain Opening sesuai spesifikasi yang disetujui.
2. Font dan animasi berfungsi sesuai rancangan.
3. Penanganan kegagalan font dan timeout telah diperiksa.
4. Transisi menuju Hero berjalan dengan baik.
5. Desktop dan mobile telah diuji.
6. Reduced motion berfungsi sesuai ketentuan.
7. Tidak ada error baru terkait Opening.
8. Build proyek berhasil.
9. Struktur file tidak memiliki mekanisme Opening ganda yang tidak diperlukan.
10. Dokumentasi hasil implementasi sesuai kondisi repository.

Jika terdapat masalah yang belum terselesaikan, masalah tersebut harus dicatat secara eksplisit dan status plan disesuaikan.

---

## 10. Catatan Implementasi dan Hasil Pengujian

Bagian ini diperbarui setelah pemeriksaan repository dan pengujian aktual.

### Implementasi yang telah dibahas

- Opening awal menggunakan markup pada `index.html`.
- Pengaturan siklus hidup splash berada di `src/main.tsx`.
- Font menggunakan Rajdhani.
- Teks menggunakan animasi masuk berbasis opacity, blur, dan pergeseran vertikal.
- Background menggunakan warna gelap dengan glow amber dan elemen lingkaran.
- Pengunjung dengan preferensi reduced motion tidak perlu menjalankan animasi.

### Hasil pengujian

- Pengguna melaporkan checklist implementasi Opening telah selesai.
- Verifikasi independen terhadap kode dan hasil build belum dilakukan.
- File Opening versi React masih terlihat pada struktur repository dan perlu diperiksa penggunaannya.

### Masalah terbuka

- [ ] Cocokkan nilai waktu aktual dengan spesifikasi.
- [ ] Periksa penanganan kegagalan font.
- [ ] Periksa apakah fitur Skip digunakan atau tidak.
- [ ] Periksa referensi file Opening versi React.
- [ ] Konfirmasi hasil build dan pemeriksaan desktop/mobile.

### Keputusan

Tidak melakukan perubahan tambahan pada Opening kecuali ditemukan masalah nyata atau kebutuhan baru.

---

## 11. Hubungan dengan Plan Berikutnya

Setelah Plan 01 selesai dan diverifikasi, pengerjaan berlanjut ke:

**Plan 02 — Hero**

Ruang lingkup Plan 02 meliputi:

- Headline dan deskripsi profesional.
- Tombol “Lihat Proyek”.
- Komposisi visual Hero.
- Animasi Hero.
- Responsivitas.
- Integrasi dengan Opening dan navbar.
- Pengujian dan dokumentasi hasil.

Plan 02 tidak boleh mengubah perilaku Opening tanpa alasan yang jelas dan persetujuan atas perubahan ruang lingkup.

---

## 12. Riwayat Perubahan

| Versi | Perubahan |
|---|---|
| Draft 1 | Penyusunan spesifikasi Opening, perilaku animasi, struktur file, dan kriteria pengujian |


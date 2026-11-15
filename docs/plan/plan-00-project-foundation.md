# PLAN 00 — PROJECT FOUNDATION

## 1. Informasi Plan

| Item | Detail |
|---|---|
| Project | Personal Portfolio Hero |
| Plan ID | 00 |
| Nama Plan | Project Foundation |
| Status | DRAFT |
| Prioritas | Fundamental |
| Ruang Lingkup | Fondasi teknis, struktur proyek, desain global, dan aturan pengembangan |
| Plan Berikutnya | Plan 01 — Opening |

Dokumen ini menjadi acuan dasar untuk seluruh plan pengembangan portofolio. Semua plan berikutnya harus mengikuti fondasi, standar, dan aturan kerja yang telah disepakati di sini.

**Catatan status:** Dokumen ini belum dianggap final sampai isi, konfigurasi teknis, dan struktur proyek diperiksa serta disetujui.

---

## 2. Tujuan Proyek

Membangun portofolio profesional untuk mendukung lamaran kerja di bidang Web Development. Portofolio harus memperlihatkan kemampuan dalam membangun antarmuka web, mengembangkan aplikasi dan API, merancang basis data, serta mengintegrasikan komponen menjadi sistem informasi yang fungsional.

Portofolio berorientasi pada kebutuhan recruiter dan tim teknis, bukan sebagai website promosi jasa freelance.

### Prinsip Pengembangan

1. **Professional First** — desain dan konten harus mendukung citra profesional.
2. **Project-Driven** — proyek menjadi bukti utama kompetensi teknis.
3. **Technical Clarity** — teknologi, kontribusi, dan fungsi proyek dijelaskan secara jelas.
4. **Visual Consistency** — seluruh halaman mengikuti identitas visual yang konsisten.
5. **Responsive by Design** — tampilan dirancang untuk desktop dan perangkat mobile.
6. **Maintainable Code** — kode harus mudah dipahami, diuji, dan dikembangkan.
7. **Evidence-Based Presentation** — informasi proyek dan hasil pekerjaan harus sesuai fakta; hindari klaim yang tidak dapat dibuktikan.

---

## 3. Teknologi Proyek

Stack berikut merupakan rancangan berdasarkan informasi proyek yang tersedia. Versi dan konfigurasi aktual harus diverifikasi melalui repository.

| Area | Teknologi | Tanggung Jawab |
|---|---|---|
| UI | React | Membangun antarmuka berbasis komponen |
| Build Tool | Vite | Development server dan proses build |
| Bahasa | TypeScript | Struktur kode dan pemeriksaan tipe |
| Styling | Custom CSS | Styling komponen dan responsivitas |
| Utility CSS | Tailwind CSS | Digunakan jika sudah terkonfigurasi dalam proyek |
| Routing | React Router | Navigasi halaman jika sesuai konfigurasi aktual |
| Package Manager | npm atau pnpm | Instalasi dan pengelolaan dependensi; perlu ditetapkan berdasarkan konfigurasi aktual |
| Version Control | Git | Mengelola perubahan kode |

### Aturan Dependensi

- Periksa dependensi yang sudah tersedia sebelum memilih library baru.
- Jangan menambahkan dependensi tanpa kebutuhan teknis yang jelas.
- Jangan mengganti package manager tanpa memeriksa lockfile dan konfigurasi proyek.
- Catat perubahan dependensi yang berdampak pada arsitektur, build, atau pemeliharaan kode.
- Versi teknologi tidak boleh dianggap final sebelum diverifikasi dari `package.json` dan file konfigurasi terkait.

---

## 4. Struktur Proyek

Struktur berikut merupakan representasi awal berdasarkan repository yang terlihat di VS Code. Struktur ini perlu diverifikasi terhadap kondisi aktual sebelum ditetapkan sebagai struktur final.

```text
Personal Portfolio Hero/
├── .figma/
├── dist/
│   ├── assets/
│   ├── favicon.svg
│   ├── index.html
│   ├── Photo.png
│   └── robots.txt
├── docs/
│   ├─── plan/
│       ├── plan-00-project-foundation.md
│       
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── SiteHeader.tsx
│   │   ├── opening/
│   │   │   └── OpeningIntro.tsx
│   │   └── sections/
│   │       ├── AboutSection.tsx
│   │       └── HeroSection.tsx
│   ├── hooks/
│   │   ├── useOpeningIntro.ts
│   │   └── useScrollReveal.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── NotFoundPage.tsx
│   ├── styles/
│   │   └── opening.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── router.tsx
│   └── vite-env.d.ts
├── .gitattributes
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── index.html
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts
```

**Catatan:**
- `dist/` merupakan direktori hasil build dan bukan lokasi utama pengembangan source code.
- `node_modules/` berisi dependensi lokal.
- `package-lock.json` dan `pnpm-lock.yaml` sama-sama terlihat pada struktur awal. Package manager yang digunakan harus dipastikan sebelum proses instalasi atau perubahan dependensi.
- File dan direktori di atas tidak dianggap telah diverifikasi satu per satu.

### 4.1 Tanggung Jawab Direktori dan File

| Lokasi | Tanggung Jawab |
|---|---|
| `src/components/layout/` | Komponen layout global seperti navbar |
| `src/components/opening/` | Komponen Opening versi React yang tercatat dalam struktur |
| `src/components/sections/` | Section utama halaman, seperti Hero dan About |
| `src/hooks/` | Logika React yang dapat digunakan kembali |
| `src/pages/` | Penyusunan halaman berdasarkan route |
| `src/styles/` | Styling khusus fitur atau section |
| `src/App.tsx` | Komposisi aplikasi dan layout global |
| `src/main.tsx` | Inisialisasi aplikasi React |
| `src/router.tsx` | Definisi route dan navigasi |
| `src/index.css` | Styling global |
| `index.html` | HTML awal aplikasi dan elemen yang perlu tersedia sebelum React dimuat |

### 4.2 Aturan Struktur Kode

- Setiap direktori harus memiliki tanggung jawab yang jelas.
- Komponen yang dapat digunakan kembali tidak boleh diduplikasi tanpa alasan.
- Data proyek dan profil dapat dipisahkan dari komponen presentasi jika sesuai dengan kebutuhan implementasi.
- File lama tidak boleh dihapus sebelum referensi dan penggunaannya diperiksa.
- Folder atau file yang belum ada tidak boleh dianggap sebagai bagian dari struktur aktual.

Struktur baru boleh ditambahkan jika kebutuhan implementasi sudah jelas dan penambahannya disetujui.

---

## 5. Arsitektur Halaman dan Navigasi

### 5.1 Navigasi Utama

Urutan navigasi yang direncanakan:

`Home | About | Projects | Contact`

### 5.2 Section Halaman Utama

| Urutan | Section | Fungsi |
|---|---|---|
| 1 | Opening | Memberikan pengalaman pembuka sebelum konten utama |
| 2 | Hero | Menyampaikan pesan profesional dan mengarahkan pengunjung ke proyek |
| 3 | About | Menjelaskan profil, fokus keahlian, dan teknologi inti |
| 4 | Projects | Menampilkan proyek sebagai bukti kompetensi |
| 5 | Contact | Menyediakan jalur komunikasi profesional |

Opening bukan item navbar dan bukan halaman terpisah. Opening berfungsi sebagai pengantar sebelum pengunjung mengakses Hero.

### 5.3 Rencana Routing

| Route | Fungsi |
|---|---|
| `/` | Halaman utama |
| `/projects/:slug` | Rencana halaman detail proyek |
| Route tidak dikenal | Halaman Not Found |

Route detail proyek merupakan rancangan awal. Implementasinya harus mengikuti router aktual dan disepakati sebelum dikembangkan.

---

## 6. Design System Global

Identitas visual portofolio menggunakan gaya **dark premium**, dengan latar gelap, teks terang, aksen amber atau oranye keemasan, serta elemen geometris yang digunakan secara terukur.

### 6.1 Palet Warna Referensi

| Elemen | Warna | Keterangan |
|---|---|---|
| Background | `#080C13` | Latar utama gelap |
| Accent | `#F5A342` | Aksen amber |
| Primary Text | `#F4F5F7` | Teks utama |
| Secondary Text | `#A8B3C4` | Teks pendukung |

Warna di atas merupakan nilai referensi dari rancangan yang telah dibahas. Nilai final harus diselaraskan dengan CSS aktual.

### 6.2 Aturan Visual

- Gunakan latar gelap sebagai identitas utama.
- Gunakan aksen amber untuk penekanan, bukan untuk semua elemen.
- Pastikan teks utama dan teks pendukung memiliki kontras yang memadai.
- Gunakan tipografi modern dengan hierarki heading yang jelas.
- Gunakan garis geometris, lingkaran, dan glow secara terukur.
- Pertahankan konsistensi spacing, radius, tombol, dan hierarki teks.
- Hindari efek dekoratif yang mengurangi keterbacaan atau mengganggu interaksi.

### 6.3 Tipografi

Font Rajdhani telah dipilih untuk Opening. Penggunaan font tersebut pada seluruh halaman belum menjadi ketentuan dan harus mengikuti keputusan desain global yang disepakati.

Pemilihan tipografi harus mempertimbangkan:
- Keterbacaan.
- Hierarki informasi.
- Konsistensi visual.
- Responsivitas.
- Performa pemuatan font.

---

## 7. Standar Responsivitas dan Aksesibilitas

Setiap plan yang mengubah UI wajib mempertimbangkan hal berikut:

1. Tampilan desktop, tablet, dan mobile.
2. Tidak ada horizontal overflow.
3. Ukuran teks dan jarak antarelemen tetap nyaman dibaca.
4. Tombol dan tautan mudah digunakan melalui layar sentuh.
5. Kontras warna mendukung keterbacaan.
6. Animasi menghormati preferensi `prefers-reduced-motion`.
7. Elemen interaktif memiliki tujuan dan perilaku yang jelas.
8. Konten utama tetap dapat diakses ketika animasi tidak dijalankan.
9. Navigasi tetap berfungsi pada berbagai ukuran layar.

Breakpoint ditentukan berdasarkan kebutuhan layout, bukan sekadar menambah media query tanpa alasan.

---

## 8. Standar Kualitas Kode

1. Pertahankan TypeScript sesuai konfigurasi proyek.
2. Gunakan pola komponen yang konsisten.
3. Hindari duplikasi kode yang tidak diperlukan.
4. Periksa dampak perubahan terhadap komponen dan route lain.
5. Jangan menambahkan dependensi tanpa alasan teknis.
6. Hindari mengganti seluruh file jika perubahan terarah sudah cukup.
7. Jangan menghapus file lama sebelum memastikan tidak ada referensi aktif.
8. Periksa console dan jalankan build setelah perubahan yang relevan.
9. Dokumentasikan perubahan arsitektur dan keputusan teknis.
10. Jangan menyatakan pengujian berhasil jika pengujian belum dijalankan.

---

## 9. Struktur Dokumentasi Proyek

Dokumentasi pengembangan akan disusun secara bertahap di dalam `docs/plan/`.

### 9.1 Rencana Struktur Folder

```text
docs/
└── plan/
    ├── plan-00-project-foundation.md
    ├── plan-01-opening.md
    ├── plan-02-hero.md
    ├── plan-03-about.md
    ├── plan-04-project-showcase.md
    ├── plan-05-project-detail.md
    ├── plan-06-contact.md
    ├── plan-07-integration-testing.md
    └── plan-08-deployment.md
```

Daftar tersebut merupakan rencana struktur dokumentasi. File dibuat sesuai urutan kebutuhan, tidak harus dibuat seluruhnya sekaligus.

### 9.2 Fungsi Dokumen

**`plan-00-project-foundation.md`**
- Menetapkan fondasi proyek.
- Menjelaskan stack, struktur, arsitektur, dan standar global.
- Menetapkan aturan kerja yang berlaku untuk semua plan.

**File plan individual**
- Menjelaskan tujuan dan ruang lingkup satu tahap.
- Memuat kebutuhan desain dan teknis.
- Mencatat file yang terlibat.
- Menentukan checklist implementasi dan pengujian.
- Mencatat hasil aktual dan masalah yang belum selesai.

**`dokumentasi.md`**
- Menjadi referensi umum proyek.
- Memuat gambaran arsitektur, keputusan desain global, dan struktur halaman.

**`Progres.md`**
- Menjadi pusat kendali progres.
- Mencatat plan aktif, plan selesai, hambatan, dan plan berikutnya.

Karena repository telah memiliki `dokumentasi.md` dan `Progres.md`, isi dokumen yang sudah ada harus diperiksa sebelum diputuskan apakah akan diperbarui, digabungkan, atau diganti namanya. Jangan membuat dokumen duplikat tanpa pemeriksaan.

---

## 10. Alur Kerja Plan

Setiap plan mengikuti tahapan berikut:

1. **Planning** — menetapkan tujuan, ruang lingkup, kebutuhan, dan kriteria penyelesaian.
2. **Review** — memeriksa serta menyetujui spesifikasi sebelum perubahan kode.
3. **Implementation** — mengerjakan ruang lingkup plan aktif.
4. **Testing** — memeriksa fungsi, tampilan, responsivitas, aksesibilitas, dan build yang relevan.
5. **Revision** — memperbaiki masalah yang ditemukan.
6. **Documentation** — mencatat implementasi dan hasil pengujian aktual.
7. **Transition** — memperbarui progres dan menentukan plan berikutnya.

### 10.1 Status Plan

| Status | Makna |
|---|---|
| `PLANNED` | Belum mulai dikerjakan |
| `IN PROGRESS` | Sedang diimplementasikan |
| `TESTING` | Sedang diuji |
| `BLOCKED` | Ada hambatan yang perlu diselesaikan |
| `NEEDS REVISION` | Hasil belum sesuai spesifikasi |
| `COMPLETED` | Kriteria penyelesaian telah terpenuhi |

Status `COMPLETED` tidak boleh diberikan hanya karena kode sudah ditulis. Kriteria pengujian harus terpenuhi dan hasilnya harus dicatat.

---

## 11. Pengelolaan Progres

`Progres.md` harus diperbarui setiap kali status plan berubah atau suatu tahap selesai.

Informasi yang dicatat:
- Plan yang sedang aktif.
- Plan yang telah selesai.
- Plan yang belum dimulai.
- Hasil pengujian yang telah dilakukan.
- Masalah yang masih terbuka.
- Keputusan yang menunggu persetujuan.
- Langkah berikutnya.

Jika ada perubahan desain atau arsitektur yang berlaku untuk seluruh proyek, dokumentasi utama juga diperbarui. Jika perubahan hanya terkait satu section, dokumentasikan detailnya di plan terkait dan perbarui tracker progres.

---

## 12. Kriteria Penyelesaian Plan 00

Plan 00 dapat difinalkan setelah:

- [ ] Tujuan dan sasaran portofolio disepakati.
- [ ] Stack dan versi teknologi dikonfirmasi dari konfigurasi aktual.
- [ ] Struktur source code dicocokkan dengan repository.
- [ ] Package manager yang digunakan telah ditetapkan.
- [ ] Arsitektur halaman dan routing disepakati.
- [ ] Design system global disepakati.
- [ ] Standar kualitas kode dan pengujian disepakati.
- [ ] Struktur dokumentasi disepakati.
- [ ] Dokumentasi lama diperiksa agar tidak terjadi duplikasi.
- [ ] Tidak ada kontradiksi penting antara rancangan dan konfigurasi aktual.

---

## 13. Hubungan dengan Plan Berikutnya

Setelah Plan 00 disetujui dan difinalkan, pengembangan dilanjutkan sesuai urutan:

1. Plan 01 — Opening.
2. Plan 02 — Hero.
3. Plan 03 — About.
4. Plan 04 — Project Showcase.
5. Plan 05 — Project Detail.
6. Plan 06 — Contact.
7. Plan 07 — Integration Testing.
8. Plan 08 — Deployment.

Setiap tahap harus menyelesaikan ruang lingkup dan pengujiannya sebelum berpindah ke plan berikutnya.

**Prinsip akhir:** Plan 00 menjadi fondasi bersama. Detail implementasi setiap fitur disimpan di plan masing-masing, sedangkan status pengerjaan dikelola melalui dokumentasi progres.

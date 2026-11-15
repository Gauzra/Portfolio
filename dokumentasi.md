Dokumentasi Portofolio Web Developer
Status: Struktur proyek disetujui; implementasi bertahap
Terakhir diperbarui: 27 Oktober 2026
Bahasa antarmuka: Bahasa Indonesia
Tujuan utama: Portofolio profesional untuk melamar pekerjaan Web Developer
1. Tujuan dan arah desain
Portofolio dirancang untuk memperlihatkan kemampuan memahami masalah, membangun aplikasi web, mengintegrasikan sistem, dan menghasilkan solusi digital yang fungsional. Fokus utamanya adalah perekrutan kerja, bukan promosi jasa freelance.

Pertahankan Hero yang sudah ada sebagai acuan visual. Perubahan ini merombak alur dan konten, bukan mengganti seluruh desain dari awal.
Identitas visual
- Latar belakang gelap: hitam dan biru-charcoal.
- Aksen amber/oranye keemasan.
- Teks utama putih; teks sekunder biru keabu-abuan.
- Tipografi modern, tegas, dan berkarakter.
- Elemen geometris dan garis tipis.
- Animasi halus, konsisten, responsif, dan tidak menghambat akses konten.
2. Struktur website
1. Opening sinematik.
2. Hero / Home.
3. About.
4. Project Showcase.
5. Contact.
Opening adalah intro sebelum halaman utama, bukan menu navigasi. Halaman utama berisi Hero, About, Project Showcase, dan Contact. Setiap proyek memiliki halaman detail tersendiri dengan URL yang dapat dibuka langsung.
3. Opening — Cinematic Introduction
Tujuan
Menciptakan kesan pertama yang kuat dan khas sebelum pengunjung memasuki halaman utama. Opening bukan loading screen teknis dan tidak boleh menghalangi rekruter mengakses konten.
Teks
Teks opening harus hanya:

WELCOME

Jangan menambahkan nama, slogan, kalimat panjang, atau teks lain ke opening kecuali diminta kemudian.
Konsep visual dan urutan
- Gunakan latar gelap yang konsisten dengan website.
- Tampilkan kata WELCOME dengan tipografi tegas dan animasi singkat.
- Tambahkan elemen geometris tipis, misalnya garis atau lingkaran, sebagai aksen.
- Gerakkan elemen secara terukur dan tidak berlebihan.
- Transisikan komposisi opening secara halus menuju Hero.
- Target durasi sekitar 1–2 detik.
- Sediakan opsi melewati opening.
- Jangan mewajibkan animasi penuh setiap kali pengguna berpindah ke halaman detail proyek.
- Pertimbangkan melewati intro pada kunjungan berikutnya, tanpa mengandalkan penyimpanan yang tidak tersedia.
- Hormati prefers-reduced-motion.
- Hindari aset besar, animasi berat, dan layout shift.
4. Hero Section — Home
Tujuan
Hero menyampaikan bidang pekerjaan dan nilai profesional secara umum. Jangan tampilkan nama pribadi di Hero. Nama dan identitas personal diperkenalkan pada About.
Headline yang diusulkan
Membangun Pengalaman Web dan Solusi Digital.
Deskripsi utama
Membangun website responsif, aplikasi web yang skalabel, API yang andal, serta sistem informasi terintegrasi dengan dukungan basis data yang dirancang dengan baik, untuk mengubah ide kompleks menjadi produk digital yang praktis.

Pertahankan makna tersebut dan gunakan bahasa Indonesia yang natural.
Elemen Hero
- Headline dan deskripsi utama.
- Foto profil yang sudah ada dapat dipertahankan, kecuali diputuskan lain.
- Indikator ketersediaan kerja hanya jika masih relevan.
- Tombol utama Lihat Proyek, mengarah ke Project Showcase.
- Tombol sekunder ke About boleh digunakan bila sesuai komposisi.
- Jangan menampilkan nama lengkap sebagai judul Hero.
Navigasi utama
Menu yang disarankan:

Home | About | Projects | Contact
- Home: Hero.
- About: profil personal.
- Projects: Project Showcase.
- Contact: bagian kontak.
Opening tidak menjadi item navbar.
5. About — Profil dan identitas profesional
Tujuan
About adalah bagian pertama yang memperkenalkan nama, bidang profesional, pendekatan kerja, dan ringkasan pengalaman proyek.
Konten
1. Identitas: nama lengkap, jabatan profesional seperti Web Developer, foto profil bila sesuai, dan perkenalan singkat.
2. Pendekatan profesional: tekankan problem-solving dan kemampuan menerjemahkan kebutuhan pengguna menjadi solusi aplikasi.
3. Download CV: tombol utama bertuliskan Download CV. Tombol harus mengunduh CV PDF yang benar-benar tersedia. Jangan mengarahkan ke file atau tautan fiktif.
4. Ringkasan proyek: tampilkan jumlah proyek selesai dan/atau completed works hanya jika angkanya benar dan dapat diverifikasi.
Perkenalan tidak boleh hanya berupa biodata. Jelaskan bagaimana proses kerja dimulai dari memahami masalah, menyusun kebutuhan, merancang sistem, membangun aplikasi, lalu menguji dan menyempurnakannya.
Tata letak
- Desktop: dua kolom; satu untuk identitas dan perkenalan, satu untuk pendekatan profesional atau ringkasan kemampuan.
- Tombol Download CV terlihat jelas.
- Statistik proyek ditempatkan di bawah konten profil.
- Mobile: satu kolom, dengan jarak dan ukuran teks yang nyaman.
Skills
Tidak perlu membuat Skills sebagai section utama terpisah pada versi struktur ini. Tampilkan teknologi inti secara ringkas di About. Jelaskan tech stack secara lebih rinci di setiap halaman detail proyek agar informasi tidak berulang.
6. Project Showcase — 3D Coverflow Carousel
Tujuan
Menampilkan proyek sebagai bukti konkret kemampuan teknis, bukan hanya daftar nama aplikasi.
Perilaku carousel
- Proyek aktif berada di tengah, lebih besar, dan paling jelas.
- Kartu di kiri dan kanan menjadi pratinjau dengan perspektif 3D, ukuran lebih kecil, dan sedikit lebih redup.
- Kartu samping tetap terbaca; jangan terlalu kecil atau gelap.
- Perpindahan antarkartu halus dan terkontrol.
- Pengguna dapat memilih proyek dengan klik kartu, tombol navigasi, dan gestur geser pada perangkat yang mendukungnya.
- Klik proyek membuka halaman detail dengan URL tersendiri.
- Pada mobile, kurangi perspektif agar carousel tetap mudah digunakan dan dibaca.
Informasi di kartu proyek
- Gambar atau preview proyek.
- Nama proyek.
- Deskripsi singkat tentang fungsi atau tujuan.
- Teknologi utama secara ringkas.
- Petunjuk visual bahwa proyek dapat dibuka.
Jangan memenuhi kartu dengan semua detail. Penjelasan lengkap berada di halaman detail.
7. Halaman detail setiap proyek
Setiap proyek mempunyai URL tersendiri dan dapat dibuka langsung, tanpa harus melewati carousel. Contoh slug berikut hanya ilustrasi:
- /projects/keutrack
- /projects/saktiku
- /projects/digil itera — slug akhir harus tanpa spasi dan mengikuti nama proyek yang benar.
Struktur halaman detail
1. Project Overview: nama, ringkasan, tujuan, dan peran yang dikerjakan.
2. Problem: masalah atau kebutuhan yang hendak diselesaikan.
3. Solution & Features: pendekatan penyelesaian dan fitur yang benar-benar dikembangkan.
4. Technology Stack: frontend, backend, database, API, dan deployment yang benar-benar digunakan.
5. Visual Preview: screenshot aplikasi atau ilustrasi teknis yang relevan.
6. Contribution & Outcome: kontribusi pribadi, keputusan teknis, dan hasil yang dapat dijelaskan atau diverifikasi.
7. Project Links: tautan demo/aplikasi aktif dan repositori GitHub jika dapat dipublikasikan.
Ketentuan
- URL dapat dibuka langsung dan mendukung navigasi browser maju/mundur.
- Setiap proyek memiliki judul halaman dan metadata yang sesuai.
- Sediakan tombol kembali ke Project Showcase.
- Bila demo tidak tersedia atau proyek privat, jelaskan dengan jujur. Jangan membuat tautan palsu.
- Gunakan gambar yang benar-benar relevan dengan proyek.
- Gunakan template detail yang konsisten dan data proyek terstruktur untuk menghindari kode berulang.
Navigasi antarproyek
Sediakan tombol kembali ke Project Showcase. Navigasi proyek sebelumnya/berikutnya dapat ditambahkan jika cocok dengan desain dan tidak membingungkan.
8. Contact
Tujuan
Memudahkan rekruter, perusahaan, atau kolaborator profesional menghubungi pemilik portofolio.
Konten
- Judul ajakan menghubungi.
- Kalimat penutup singkat dan profesional.
- Email.
- LinkedIn.
- GitHub.
- Formulir kontak hanya jika mekanisme pengirimannya benar-benar berfungsi.
Perilaku
- Email menggunakan tautan email yang benar.
- LinkedIn dan GitHub mengarah ke profil yang benar.
- Formulir, bila dibuat, memiliki validasi dan mekanisme pengiriman yang berfungsi.
9. Standar animasi, aksesibilitas, dan responsivitas
Area	Ketentuan
Opening	Teks hanya “WELCOME”; sinematik, singkat, dapat dilewati
Scroll reveal	Konten muncul saat memasuki viewport
Stagger animation	Elemen dalam kelompok muncul bertahap
Scrolling	Scrolling normal; jangan mengunci halaman seperti slide
Carousel	Transisi 3D halus dan terkontrol
Halaman detail	Animasi pendukung tidak menghambat membaca
Mobile	Layout disederhanakan dan kontrol mudah disentuh
Aksesibilitas	Dukung reduced motion, keyboard, dan kontras memadai
Performa	Hindari animasi berat, aset besar, dan layout shift


Konten tidak boleh hilang jika JavaScript gagal atau pengguna memilih mengurangi animasi. Pastikan navigasi keyboard dan fokus interaktif tetap jelas.
10. Prinsip implementasi untuk OpenCode
Sebelum mengubah kode, periksa repository dan struktur yang benar-benar ada. Jangan mengasumsikan framework, bahasa, atau nama file tanpa memeriksanya.
1. Pertahankan Hero yang sudah ada sebagai baseline visual.
2. Periksa package, routing, struktur komponen, stylesheet, aset, dan script yang tersedia.
3. Pisahkan tiap section ke komponen tersendiri jika struktur proyek mendukungnya.
4. Pisahkan halaman detail proyek dari halaman utama dan gunakan URL masing-masing.
5. Gunakan komponen carousel yang menerima data proyek terstruktur.
6. Jangan mengganti teknologi atau menambahkan dependensi besar tanpa alasan yang jelas.
7. Kerjakan satu tahap pada satu waktu.
8. Sebelum mengimplementasikan suatu tahap, periksa kode yang terkait dan jelaskan rencana perubahan untuk disetujui pengguna.
9. Jangan lanjut ke tahap berikutnya tanpa persetujuan pengguna.
10. Setelah tahap selesai, laporkan file yang diubah, pemeriksaan yang dijalankan, hasilnya, dan masalah yang masih ada.
Urutan implementasi
1. Opening.
2. Hero / Home.
3. About.
4. Project Showcase dan halaman detail proyek.
5. Contact.
6. Pemeriksaan integrasi, responsivitas, aksesibilitas, dan performa.
11. Kriteria penerimaan
- Opening menampilkan hanya kata WELCOME.
- Opening singkat, dapat dilewati, dan transisi ke Hero dengan mulus.
- Hero tidak menampilkan nama pribadi dan menggunakan deskripsi bahasa Indonesia.
- About memperkenalkan nama dan bidang profesional serta menyediakan Download CV yang berfungsi.
- Statistik proyek tidak mengada-ada.
- Project Showcase mempertahankan konsep 3D Coverflow Carousel.
- Klik proyek membuka URL halaman detail yang benar.
- Halaman detail menjelaskan masalah, solusi, teknologi, gambar, kontribusi, dan tautan proyek sesuai data yang tersedia.
- Contact menyediakan saluran komunikasi yang valid.
- Website responsif, aksesibel, dan tidak tergantung pada animasi untuk menampilkan konten.
- Perubahan dikerjakan bertahap, dengan persetujuan pengguna di antara tahap.
12. Struktur proyek dan keputusan implementasi
Keputusan ini disetujui pada 27 Oktober 2026.

Stack aktual
- React 19, Vite 8, TypeScript, dan CSS custom.
- Tailwind CSS v4 tetap menjadi entry global, tetapi styling utama menggunakan CSS custom yang sudah ada.
- Routing menggunakan react-router-dom agar halaman detail proyek memiliki URL sendiri dan mendukung navigasi browser maju/mundur.
- Tidak menambahkan UI library, animation library, atau state manager besar.

Struktur folder
src/
├─ main.tsx
├─ App.tsx                    # hanya router dan layout global
├─ router.tsx                 # daftar route
├─ pages/
│  ├─ HomePage.tsx            # Hero + About + Project Showcase + Contact
│  ├─ ProjectDetailPage.tsx   # halaman /projects/:slug
│  └─ NotFoundPage.tsx
├─ components/
│  ├─ layout/
│  │  └─ SiteHeader.tsx       # navbar yang dipakai semua halaman
│  ├─ opening/
│  │  └─ OpeningIntro.tsx     # intro Home, bukan halaman atau item navbar
│  ├─ sections/
│  │  ├─ HeroSection.tsx
│  │  ├─ AboutSection.tsx
│  │  ├─ ProjectShowcaseSection.tsx
│  │  └─ ContactSection.tsx
│  ├─ projects/
│  │  ├─ ProjectCoverflow.tsx
│  │  ├─ ProjectCard.tsx
│  │  └─ ProjectDetail.tsx
│  └─ ui/
│     ├─ SocialLinks.tsx
│     └─ SectionHeading.tsx
├─ data/
│  ├─ profile.ts              # identitas, bio, sosial, dan CV
│  └─ projects.ts             # data proyek terstruktur
├─ hooks/
│  ├─ useOpeningIntro.ts
│  └─ useScrollReveal.ts
├─ styles/
│  ├─ opening.css
│  ├─ hero.css
│  ├─ about.css
│  ├─ projects.css
│  ├─ project-detail.css
│  └─ contact.css
└─ index.css                  # Tailwind, font, token, dan style global

Aturan pemisahan
- App.tsx tidak boleh menampung konten section.
- pages hanya menyusun section dan halaman; bukan tempat seluruh UI.
- Setiap section memiliki file komponen sendiri.
- Data profil dan proyek disimpan di folder data agar tidak ditulis ulang di banyak komponen.
- Halaman detail proyek membaca slug dari route dan data proyek terstruktur.
- Opening bukan halaman dan tidak masuk navbar.
- Style dipisahkan per section secara bertahap saat section tersebut dikerjakan agar perubahan visual tetap terkontrol.

Route
- /                    : HomePage
- /projects/:slug      : ProjectDetailPage
- *                    : NotFoundPage

Catatan deploy: karena memakai BrowserRouter, server static harus memiliki fallback ke index.html agar URL /projects/:slug dapat dibuka langsung.

Keputusan Opening
- Hanya muncul pada kunjungan awal ke Home, tidak muncul saat membuka halaman detail proyek.
- Teks hanya WELCOME.
- Durasi sekitar 1,4 detik, lalu transisi halus ke Hero.
- Tombol Lewati selalu tersedia.
- Memakai sessionStorage agar tidak tampil berulang dalam sesi yang sama.
- prefers-reduced-motion: lewati animasi dan langsung tampilkan Hero.
- Tidak mengunci scrolling dan tidak menghalangi akses konten.
- Timer dan event dibersihkan saat komponen dilepas.

Status implementasi
- Tahap 1 Opening: disetujui dan sedang diimplementasikan.
- Hero dan About yang ada belum memenuhi spesifikasi baru; revisi dilakukan pada tahap masing-masing.
- Project Showcase, halaman detail proyek, dan Contact belum diimplementasikan.
- Aset yang dibutuhkan pada tahap berikutnya: CV PDF asli, data proyek terverifikasi, dan gambar preview proyek.

Instruksi akhir: Gunakan dokumen ini sebagai spesifikasi kerja. Mulailah dengan memeriksa repository dan melaporkan struktur serta rencana implementasi tahap pertama. Jangan langsung mengubah kode dan jangan mengerjakan semua section sekaligus.
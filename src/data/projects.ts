export type ProjectGalleryImage = {
  src: string
  alt: string
  caption?: string
}

export type ProjectData = {
  // Project card
  number: string
  slug: string
  name: string
  category: string
  year: string
  description: string
  image?: string
  imageAlt?: string
  technologies: string[]
  featured?: boolean

  // Project detail
  overview?: string
  problem?: string
  solution?: string
  features?: string[]
  architecture?: string
  contribution?: string[]
  outcomes?: string[]

  //Hero image khusus halaman detail
  heroImage?: string
  heroImageAlt?: string

  // Database design
  database?: {
    description?: string
    erdImage?: string
    erdImageAlt?: string
    erdCaption?: string
  }

  //additional gallery images
  gallery?: ProjectGalleryImage[]

  // External links
  links?: {
    link?: string
    github?: string
  }

  // Publication status
  published: boolean
}

export const projects: ProjectData[] = [
  {
    number: "01",
    slug: "keutrack",
    name: "KeuTrack",
    year: "2024 - Sekarang",
    // Project card
    category: "Web App - Akuntansi UMKM",
    description:
      "Sistem terintegrasi untuk mengelola keuangan, penjualan, dan persediaan UMKM.",

    image: "/public/keutrack/cover.png",
    imageAlt: "Cover platform KeuTrack",

    technologies: ["React", "Vite", "Node.js", "Express", "MySQL"],

    featured: true,
    published: true,

    // PROJECT DETAIL
    overview:
      "KeuTrack adalah platform berbasis web yang membantu UMKM mengelola pencatatan keuangan, penjualan, dan persediaan dalam satu sistem terintegrasi.",

    problem:
      "UMKM sering mengalami kesulitan dalam memahami pencatatan debit dan kredit. Selain itu, pencatatan keuangan, penjualan, dan persediaan kerap dilakukan secara terpisah sehingga menyulitkan pemantauan kondisi usaha.",

    solution:
      "KeuTrack mengintegrasikan pencatatan keuangan, transaksi penjualan, dan pengelolaan persediaan dalam satu sistem. Transaksi yang dicatat dapat digunakan untuk menghasilkan laporan keuangan secara otomatis.",

    features: [
      "Pencatatan keuangan mengacu pada SAK EMKM",
      "Pengelolaan daftar akun dan jurnal umum",
      "Penyusunan laporan keuangan otomatis (Laba Rugi, Neraca, dan Arus Kas)",
      "Sistem kasir dan penjualan (Point of Sale/POS)",
      "Pengelolaan persediaan dan stok gudang",
      "Pengelolaan bisnis, cabang, dan karyawan",
      "Ekspor data dan laporan ke Excel dan PDF",
    ],

    architecture:
      "KeuTrack menggunakan arsitektur client-server tiga lapis. Frontend React (Vite) berkomunikasi dengan backend Node.js (Express) melalui REST API berformat JSON. Backend menerapkan pola berlapis yang terdiri dari route, controller, dan service, serta menggunakan middleware untuk fungsi lintas lapisan. Data disimpan dalam database MySQL.",

    contribution: [
      "Mengembangkan antarmuka web menggunakan React dan Vite untuk modul keuangan, kasir, dan persediaan.",
      "Mengembangkan REST API menggunakan Node.js dan Express.",
      "Merancang dan mengelola struktur database MySQL.",
    ],

    outcomes: [
      "Menghasilkan laporan keuangan secara otomatis berdasarkan transaksi yang dicatat.",
      "Mengintegrasikan pencatatan keuangan, penjualan, dan persediaan dalam satu platform.",
    ],

    // DATABASE DESIGN
    database: {
      description:
        "Database KeuTrack dirancang dengan MySQL menggunakan pendekatan relasional. Struktur tabel mengacu pada siklus akuntansi standar SAK EMKM, mencakup entitas bisnis, akun, jurnal, transaksi penjualan, hingga pengelolaan stok.",
      erdImage: "/public/keutrack/database.png",
      erdImageAlt: "Entity Relationship Diagram KeuTrack",
      erdCaption: "ERD KeuTrack — Perancangan Database MySQL",
    },

    // HERO IMAGE
    heroImage: "/public/keutrack/dashboard.png",
    heroImageAlt: "Cover Aplikasi Keutrack",

    // ADDITIONAL GALLERY
    gallery: [
      {
        src: "/public/keutrack/dashboard.png",
        alt: "Dashboard aplikasi KeuTrack",
        caption: "Dashboard",
      },
      {
        src: "/public/keutrack/transaksi.png",
        alt: "Halaman transaksi aplikasi KeuTrack",
        caption: "Pencatatan Transaksi",
      },
      {
        src: "/public/keutrack/POS.png",
        alt: "Halaman POS aplikasi KeuTrack",
        caption: "Halaman POS",
      },
      {
        src: "/public/keutrack/siklusakuntansi.png",
        alt: "Halaman Siklus Akuntansi",
        caption: "Halaman Siklus Akuntansi",
      },
      {
        src: "/public/keutrack/laporankeuangan.png",
        alt: "Halaman Laporan Keuangan",
        caption: "Halaman Laporan Keuangan",
      },
      {
        src: "/public/keutrack/profil.png",
        alt: "Halaman Profil",
        caption: "Halaman Profil",
      },
    ],

    links: {
      link: "https://www.keutrack.com",
      github: "https://github.com/Gauzra/keutrack_v2",
    },
  },
  {
    number: "02",
    slug: "saktiku",
    name: "Saktiku",
    year: "Maret - November 2026",
    // Project Card
    category: "Web App - Pencatatan Keuangan UMKM.",
    description:
      "Aplikasi akuntansi berbasis web untuk pencatatan transaksi dan penyusunan laporan keuangan UMKM.",

    image: "/public/saktiku/cover.png",
    imageAlt: "Cover platform Saktiku",

    technologies: ["React", "Vite", "Node.js", "Express", "MySQL"],

    featured: false,
    published: true,

    //Project Detail
    overview: "Saktiku adalah website akuntansi sederhana berbasis double-entry bookkeeping. Aplikasi ini dirancang untuk membantu Pelaku Kegiatan Mahasiswa (PKM) maupun UMKM dalam melakukan pencatatan transaksi keuangan, mengelola siklus akuntansi dasar, serta menghasilkan laporan keuangan secara otomatis.",
    problem: "Pengelolaan keuangan UMKM masih menghadapi berbagai kendala, mulai dari pencatatan transaksi yang dilakukan secara manual, penyusunan laporan yang membutuhkan proses rekapitulasi, risiko kesalahan pencatatan dan perhitungan, keterbatasan informasi untuk pengambilan keputusan, hingga dokumentasi keuangan yang kurang terstruktur.",
    solution: "Saktiku dikembangkan sebagai solusi melalui digitalisasi pencatatan transaksi, penyusunan laporan keuangan secara otomatis dan sistematis, pengurangan pekerjaan perhitungan manual, penyediaan informasi keuangan yang lebih terstruktur, serta pengelolaan data yang terpusat dan mudah ditelusuri.",

    features: [
      "Pengelolaan usaha berbasis multi-tenant",
      "Pemilihan jenis usaha dan pemetaan kategori transaksi ke akun",
      "Pengelolaan daftar akun (Chart of Accounts)",
      "Pencatatan transaksi dan pengelolaan saldo awal",
      "Siklus akuntansi: Jurnal Umum, Buku Besar, dan Neraca Saldo",
      "Jurnal penyesuaian",
      "Laporan keuangan: Laba Rugi, Neraca, Perubahan Modal, dan Arus Kas",
      "Ekspor transaksi dan laporan ke Excel dan PDF",
      "Autentikasi menggunakan JWT dan Google Login",
      "Panduan penggunaan dan pengelolaan profil pengguna",
    ],

    architecture: "Saktiku menggunakan arsitektur client-server terpisah. Frontend dibangun sebagai Single Page Application (SPA) menggunakan React dan Vite, dengan Axios untuk komunikasi API. Backend menggunakan Node.js dan Express.js sebagai REST API, sedangkan MySQL digunakan sebagai penyimpanan data dengan mekanisme multi-tenancy melalui tenant_id. Backend mengorganisasi endpoint berdasarkan route dan controller, serta menggunakan service pada modul tertentu.",
    contribution: [
      "Mengembangkan antarmuka aplikasi menggunakan React dan React Router.",
      "Mengembangkan layanan backend dan REST API menggunakan Node.js dan Express.js.",
      "Mengintegrasikan frontend dengan backend menggunakan Axios.",
      "Merancang dan mengelola struktur basis data MySQL.",
      "Mengimplementasikan proses pencatatan transaksi dan siklus akuntansi berbasis double-entry bookkeeping.",
    ],

    outcomes: [
      "Mengintegrasikan pencatatan transaksi dengan pembentukan jurnal debit dan kredit.",
      "Mendukung pengolahan transaksi hingga penyusunan laporan keuangan.",
      "Menyediakan laporan keuangan dalam format tampilan aplikasi, Excel, dan PDF.",
      "Menerapkan pemisahan data usaha melalui konsep multi-tenancy.",
    ],

    //hero image
    heroImage: "/public/saktiku/dashboard.png",
    heroImageAlt: "Logo Saktiku",

    // Additional gallery
    gallery: [
      {
        src: "/public/saktiku/dashboard.png",
        alt: "Dashboard aplikasi Saktiku",
        caption: "Dashboard Saktiku"
      },
      {
        src: "/public/saktiku/setupsaldoawal.png",
        alt: "Setup Saldo Awal Saktiku",
        caption: "Saldo Awal",
      },
      {
        src: "/public/saktiku/transaksi.png",
        alt: "Transaksi Saktiku",
        caption: "Transaksi",
      },
      {
        src: "/public/saktiku/siklusakuntansi.png",
        alt: "Siklus Akuntansi Saktiku",
        caption: "Siklus Akuntansi",
      },
      {
        src: "/public/saktiku/laporankeuangan.png",
        alt: "Laporan keuangan Saktiku",
        caption: "Laporan Keuangan",
      },
    ],

    links: {
      link: "https://www.saktiku.com",
      github: "https://github.com/Gauzra/saktiku",
    }
  },
  {
    number: "03",
    slug: "digilitera",
    name: "DigiLitera",
    year: "Juni 2026 - Sekarang",
    //project card
    category: "Web App - E-Learning Platform",
    description: "Platform web learning interaktif untuk modul akademik dengan content management dan automated quiz parsing",

    image: "/public/digilitera/cover.png",
    imageAlt: "Cover Platform Digilitera",
    technologies: [
      "React 18",
      "Vite 5",
      "Node.js",
      "Express 5",
      "MySQL",
      "REST API",],

    featured: false,
    published: true,

    //project deatail
    overview:
      "DigiLitera adalah platform pembelajaran berbasis web yang dirancang untuk mendukung penyampaian modul akademik (Investment Experience & Financial Behavior). Sistem ini dilengkapi Content Management System (CMS) bagi dosen dan modul latihan interaktif bagi mahasiswa.",

    problem:
      "Pengelolaan materi akademik, video pembelajaran, dan bank soal sering kali membutuhkan perubahan langsung pada source code atau bergantung pada developer. Selain itu, proses input soal pilihan ganda satu per satu ke database memakan waktu dosen.",

    solution:
      "Membangun web learning mandiri di mana dosen dapat mengunggah modul, menyematkan video pembelajaran, dan secara otomatis memparsing dokumen latihan (PDF/DOCX) menjadi soal interaktif yang dinilai secara otomatis.",

    features: [
      "Manajemen konten modul dan bab pembelajaran terstruktur bagi dosen",
      "Automated Quiz Parser: konversi dokumen Word/PDF menjadi butir soal kuis pilihan ganda otomatis",
      "Sistem pengerjaan latihan mahasiswa dengan kalkulasi skor otomatis",
      "Dashboard penilaian dosen untuk merekap capaian belajar mahasiswa",
      "Dukungan materi video hybrid (upload lokal dan embed YouTube)",
      "Integrasi Pexels API untuk visualisasi cover materi secara dinamis",
      "Autentikasi berbasis peran (Role-Based Access Control) untuk Dosen dan Mahasiswa",
    ],
    architecture:
      "Menggunakan arsitektur client-server decoupled. Frontend dibangun dengan React dan Vite yang berkomunikasi via REST API ke backend Node.js (Express). Backend mengelola autentikasi berbasis JWT, ekstraksi dokumen file (PDF/DOCX), dan penyimpanan data relasional terstruktur pada MySQL.",
    contribution: [
      "Merancang dan mengimplementasikan arsitektur database MySQL untuk sistem materi, latihan, dan penilaian.",
      "Mengembangkan REST API backend menggunakan Node.js dan Express, termasuk parser soal dari dokumen.",
      "Membangun antarmuka pengguna yang responsif menggunakan React untuk dashboard dosen dan area belajar mahasiswa.",
    ],

    outcomes: [
      "Mempermudah dosen mengelola modul pembelajaran tanpa ketergantungan pada tim teknis.",
      "Mengefisienkan waktu pembuatan soal kuis berkat sistem ekstraksi dokumen otomatis.",
      "Menyediakan evaluasi latihan interaktif dan transparan bagi mahasiswa.",
    ],
    //hero image
    heroImage: "/public/digilitera/dashboardlec.png",
    heroImageAlt: "Logo DigiLitera",

    //gallery
    gallery: [
      {
        src: "/public/digilitera/dashboardlec.png",
        alt: "Dashboard Lecturer DigiLitera",
        caption: "Dashboard Lecturer DigiLitera",
      },
      {
        src: "/public/digilitera/daftarmaterilec.png",
        alt: "Daftar Materi Lecturer DigiLitera",
        caption: "Daftar Materi Lecturer DigiLitera",
      },
      {
        src: "/public/digilitera/daftarsoallec.png",
        alt: "Daftar Soal Lecturer DigiLitera",
        caption: "Daftar Soal Lecturer DigiLitera",
      },
      {
        src: "/public/digilitera/dashboardmhs.png",
        alt: "Dashboard Mahasiswa DigiLitera",
        caption: "Dashboard Mahasiswa DigiLitera",
      },
      {
        src: "/public/digilitera/daftarmaterimhs.png",
        alt: "Daftar Materi Mahasiswa",
        caption: "Daftar Materi Mahasiswa",
      },

    ],

    links: {
      link: "https://www.digilitera.com",
      github: "https://github.com/Gauzra/web-learning",
    },
  },
  {
    number: "04",
    slug: "Absensi Karyawan",
    name: "Absensi Karyawan",
    year: "Agustus 2025 - Januari 2026",
    category: "Web App - Absensi Karyawan",
    description: "Sistem presensi karyawan berbasis validasi Geolocation (GPS Geofencing) dan verifikasi foto kamera wajah secara real-time. ",
    image: "/public/absensi/absensi.png",
    imageAlt: "Cover Absensi Karyawan",
    technologies: ["JavaScript (ES6+)",
      "Node.js",
      "Express",
      "MySQL",
      "Geolocation API",
      "Web Camera API",],
    featured: false,
    published: true,
    overview: "Sistem Absensi Karyawan adalah platform presensi dan rekapitulasi kehadiran karyawan berbasis web. Sistem ini dirancang untuk memastikan validitas kehadiran menggunakan verifikasi lokasi GPS dengan radius dinamis (Geofencing) dan pemotretan wajah langsung saat check-in, terintegrasi dengan portal monitoring administrator.",
    problem: "Metode presensi konvensional (seperti mesin fingerprint atau absensi kertas) rentan terhadap antrean panjang, kecurangan titip absen, dan kendala verifikasi saat karyawan bertugas di lapangan. Selain itu, proses rekapitulasi keterlambatan dan izin kerja secara manual memakan banyak waktu bagian HR/Admin.",
    solution: "Membangun sistem presensi mandiri yang dapat diakses melalui smartphone atau browser kantor. Sistem memvalidasi koordinat lokasi karyawan secara otomatis menggunakan formula Haversine terhadap radius kantor, mewajibkan verifikasi foto wajah langsung, dan menghitung durasi keterlambatan secara otomatis.",
    features: [
      "Validasi Geolocation GPS (Geofencing): pembatasan radius kehadiran kantor menggunakan kalkulasi Haversine Formula",
      "Live Face Capture: pengambilan foto wajah karyawan secara real-time via kamera browser saat check-in",
      "Automated Late Calculation: penghitungan otomatis status 'Tepat Waktu' atau 'Terlambat' beserta rincian durasi menitnya",
      "Modul Pengajuan Izin / Sakit dengan pencatatan alasan dan verifikasi admin",
      "Dashboard Administrator untuk pemantauan kehadiran harian, inspeksi titik GPS, dan verifikasi foto kehadiran",
      "Konfigurasi Dinamis Perusahaan: pengaturan titik koordinat kantor, radius jangkauan presensi (meter), dan jam toleransi",
      "Ekspor Rekapitulasi Presensi ke format Excel dan CSV untuk keperluan payroll/kepegawaian",
      "Otentikasi Akun Fleksibel mendukung login internal berbasis peran (Admin & Karyawan) serta Google OAuth",],
    architecture: "Sistem menggunakan arsitektur client-server berbasis RESTful API. Bagian frontend dibangun dengan HTML5, CSS3 (Manrope UI theme), dan vanilla JavaScript (ES6+) yang memanfaatkan HTML5 Geolocation API serta MediaDevices Camera API. Backend dibangun dengan Node.js dan Express, mengelola kalkulasi jarak spasial, verifikasi toleransi jam kerja berbasis zona waktu (WITA), dan persistensi data presensi relasional di MySQL.",
    contribution: [
      "-. Merancang skema database MySQL untuk entitas pengguna, riwayat presensi, dan konfigurasi fleksibel radius kantor.",
      "-. Mengembangkan REST API backend untuk pengolahan absensi, validasi koordinat GPS Haversine, dan sistem manajemen izin.",
      "-. Membangun antarmuka presensi interaktif untuk karyawan dan dashboard analitik rekapitulasi untuk administrator.",],
    outcomes: [
      "-. Mencegah potensi manipulasi kehadiran dan titip absen melalui kombinasi validasi GPS dan foto wajah.",
      "-. Mengefisienkan waktu tim HR dalam merekapitulasi jam kerja dan keterlambatan karyawan secara otomatis.",
      "-. Memberikan fleksibilitas bagi perusahaan untuk menyesuaikan koordinat kantor dan batas radius toleransi kapan saja.",],

    database: {
      description: "Database Absensi Karyawan dirancang menggunakan MySQL yang menghubungkan entitas pengguna, riwayat absensi, dan konfigurasi kantor. Tabel attendance menyimpan koordinat lintang/bujur (latitude & longitude), foto kehadiran, waktu masuk dan pulang, hingga kalkulasi menit keterlambatan secara presisi.",
      erdImage: "/public/absensi/database.png",
      erdImageAlt: "Entity Relationship Diagram Absensi Karyawan",
      erdCaption: "ERD Absensi Karyawan — Skema Database Absensi Karyawan",
    },

    heroImage: "",
    heroImageAlt: "",

    gallery: [
      {
        src: "/public/absensi/dashboardkrywn.png",
        alt: "Dashboard Absensi Karyawan",
        caption: "Dashboard Absensi Karyawan",
      },
      {
        src: "/public/absensi/dashboardadm.png",
        alt: "Halaman Admin",
        caption: "Halaman Admin",
      },
      {
        src: "/public/absensi/absensi.png",
        alt: "Absensi Karyawan",
        caption: "Absensi Karyawan",
      },
    ],

    links: {
      github: "https://github.com/Gauzra/Absensi-Karyawan",
    },
  },
  {
    number: "05",
    slug: "kam-tridetect",
    name: "KAM Tridetect",
    year: "2026",
    category: "Web App — Audit Risk Decision Support System",
    description: "Decision Support System (DSS) berbasis OCR dan NLP Bahasa Indonesia untuk mendeteksi indikasi risiko Triple Earnings Management dari laporan auditor independen.",
    image: "/public/kamtridetect/overviewaudit.png",
    imageAlt: "Overview KAM-TriDetect",
    technologies: [
      "Python",
      "FastAPI",
      "Tesseract OCR",
      "NLP (Sastrawi & NLTK)",
      "Node.js",
      "Express",
      "MySQL",
      "React",
      "Vite",],
    featured: false,
    published: true,
    overview: "KAM-TriDetect adalah Decision Support System (DSS) berbasis web yang dikembangkan menggunakan pendekatan Design Science Research (DSR). Sistem ini dirancang untuk mendeteksi potensi risiko Triple Earnings Management (TEM) pada emiten publik dengan mengekstraksi dan menganalisis teks naratif pada bagian Hal Audit Utama (Key Audit Matters / KAM) dari dokumen Laporan Auditor Independen (PDF).",
    problem: 'Laporan keuangan emiten memiliki puluhan hingga ratusan halaman dengan format bilingual dua kolom. Halaman opini auditor dan Key Audit Matters (KAM) sering kali berupa dokumen scan bertanda tangan basah dan stempel KAP tanpa teks digital murni. Menilai risiko manipulasi laba dari teks naratif audit secara manual membutuhkan waktu lama dan rentan terhadap inkonsistensi penilaian.',
    solution: 'Mengembangkan sistem cerdas dengan arsitektur microservices yang memadukan computer vision (Tesseract OCR 300 DPI), pipeline ekstraksi hybrid (pdfplumber + fuzzy matching difflib), dan NLP Bahasa Indonesia (PySastrawi & NLTK). Sistem mengukur kepadatan kata kunci risiko pada 9 dimensi manipulasi laba secara otomatis dan menyajikan skor risiko 0–100 beserta visualisasi distribusinya.',
    features: [
      "Hybrid PDF Parsing Engine: mendeteksi otomatis halaman digital murni dan beralih ke OCR untuk dokumen hasil pindaian scan",
      "Fuzzy Keyword Detection: pelacakan kata kunci audit berketahanan tinggi terhadap noise karakter hasil scan (difflib SequenceMatcher ratio ≥ 0.86)",
      "Indonesian NLP Pipeline: normalisasi teks, pembersihan stop words, dan stemming kata dasar menggunakan Sastrawi dan NLTK",
      "9-Dimensional Risk Scoring: penilaian berbasis frekuensi risiko (Pengakuan Pendapatan, Aset/Investasi, Piutang/Kas, Persediaan, Utang, Going Concern, Estimasi, Fraud, dan Pajak)",
      "Automated Risk Classification: kategorisasi tingkat risiko otomatis (Rendah, Sedang, Tinggi) beserta rasio reduksi kata",
      "Asynchronous Job Orchestrator: penanganan proses komputasi OCR berat melalui background job polling (HTTP 202 Accepted) tanpa risiko koneksi timeout",
      "Interactive Audit Dashboard: monitoring progres real-time, visualisasi bar chart per dimensi, serta penampil teks audit hasil ekstraksi"
    ],
    architecture: "Sistem mengadopsi arsitektur microservices terpisah. Frontend dibangun menggunakan React dan Vite yang melakukan polling status analisis secara asinkron. API Gateway backend dibangun dengan Node.js dan Express untuk mengelola upload file (Multer), orchestrasi background job, dan persistensi riwayat audit di MySQL. Komputasi berat ditangani oleh AI/NLP Engine berbasis Python (FastAPI) yang menjalankan Tesseract OCR, pemrosesan teks PySastrawi, dan scoring engine risiko.",
    contribution: [
      "Merancang dan mengimplementasikan pipeline ekstraksi hybrid PDF dan OCR Tesseract multi-halaman pada engine Python.",
      "Mengembangkan modul NLP Bahasa Indonesia dan algoritma skoring frekuensi kata kunci untuk 9 dimensi risiko Triple Earnings Management.",
      "Membangun arsitektur asynchronous job polling pada backend Node.js untuk mengatasi beban pemrosesan OCR tanpa memicu timeout.",
      "Merancang antarmuka dashboard interaktif berbasis React dengan grafik distribusi risiko dan pelacakan progres analisis.",
    ],
    outcomes: [
      "Mengotomatisasi ekstraksi teks Hal Audit Utama dari dokumen scan bertanda tangan basah yang sebelumnya tidak dapat disalin.",
      "Mempersingkat waktu skrining awal indikasi risiko earnings management dari laporan tahunan emiten.",
      "Menyediakan penilaian risiko berbasis bukti kuantitatif dan visualisasi dimensi yang mudah dipahami oleh auditor maupun analis.",
    ],

    heroImage: "/public/kamtridetect/overviewaudit.png",
    heroImageAlt: "Overview KAM-TriDetect",
    gallery: [
      {
        src: "/public/kamtridetect/analisisbaru.png",
        alt: "Dashboard Analisis Risiko KAM-TriDetect",
        caption: "Dashboard Analisis Risiko & Visualisasi Skor",
      },
      {
        src: "/public/kamtridetect/riwayatanalisis.png",
        alt: "Halaman Unggah Berkas Laporan Keuangan",
        caption: "Upload Dokumen & Background Job Processing",
      },
    ],
    links: {
      github: "https://github.com/Gauzra/Kam-Tridetect",
    },
  },
]

window.addEventListener("load", function() {
  window.scrollTo(0, 0);
  openPage('home'); 
  hideLoadingOverlay();
});

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

const navLinks = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');
const mainNav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');
const body = document.body;
const loadingOverlay = document.getElementById('loading-overlay');

function showLoadingOverlay() {
  loadingOverlay.classList.remove('hidden');
}

function hideLoadingOverlay() {
  setTimeout(() => {
    loadingOverlay.classList.add('hidden');
  }, 500);
}

function openPage(id) {
  showLoadingOverlay();
  const currentPage = document.querySelector('.page.active');
  if (currentPage) {
    currentPage.style.opacity = '0';
    currentPage.style.transform = 'translateY(20px)';
    setTimeout(() => {
      currentPage.classList.remove('active');
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('active');
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      }
      hideLoadingOverlay();
    }, 300);
  } else {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add('active');
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
    hideLoadingOverlay();
  }

  if (mainNav.classList.contains('active')) {
    mainNav.classList.remove('active');
  }

  if (id === 'home') {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    openPage(a.dataset.page);
  });
});

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

const introVideos = [
  {
    tag: 'is',
    title: 'Introduction to Information Systems',
    src: 'https://www.youtube.com/embed/30-nGJ0uCAs'
  },
  {
    tag: 'is',
    title: 'Sistem Informasi - Konsep Dasar Sistem',
    src: 'https://www.youtube.com/embed/MhIH4HkXS24?si=ID6Ym6NmKKH2bjur'
  },
  {
    tag: 'is',
    title: 'Review Jurusan Sistem Informasi',
    src: 'https://www.youtube.com/embed/NL1VAu5ZCWw?si=DsswDn91m6LMHdev"'
  },
  {
    tag: 'is',
    title: 'Belajar Sistem Informasi',
    src: 'https://www.youtube.com/embed/BeRkSU3sdW8?si=CmMb0E0nMe345FRd'
  },
  {
    tag: 'comp',
    title: 'Computer & Technology Basics',
    src: 'https://www.youtube.com/embed/y2kg3MOk1sY'
  },
  {
    tag: 'comp',
    title: 'Tutorial Belajar Komputer dari Nol',
    src: 'https://www.youtube.com/embed/rT31SRtdLsw?si=C_N2A_atz3GL7Lgm'
  },
  {
    tag: 'comp',
    title: 'Cara menghidupkan dan mematikan komputer yang benar dan aman',
    src: 'https://www.youtube.com/embed/0hC3IGYz0RY?si=u0W3t_W36uqzX7bz'
  },
  {
    tag: 'comp',
    title: 'Mengenal fungsi dan istilah penting dalam komputer',
    src: 'https://www.youtube.com/embed/8C1i62bsmSw?si=gaAEZAYTAdekYu5g'
  },
  {
    tag: 'comp',
    title: 'Perbedaan FILE, FOLDER dan APLIKASI',
    src: 'https://www.youtube.com/embed/Pj5-obUQL-s?si=gFRCVdo6x9WdIA4h'
  },
  {
    tag: 'net',
    title: 'Introduction to Networking | Network Fundamentals',
    src: 'https://www.youtube.com/embed/9SIjoeE93lo'
  },
  {
    tag: 'net',
    title: 'Networking Basics Full Course',
    src: 'https://www.youtube.com/embed/qiQR5rTSshw'
  },
  {
    tag: 'db',
    title: 'SQL and Databases - Full Course',
    src: 'https://www.youtube.com/embed/HXV3zeQKqGY'
  },
  {
    tag: 'db',
    title: 'SQL Tutorial for Beginners',
    src: 'https://www.youtube.com/embed/7S_tz1z_5bA'
  },
  {
    tag: 'is',
    title: 'Episode Pengantar Sistem dan Teknologi Informasi - GuruVirtual.ID',
    src: 'https://www.youtube.com/embed/vz3F71GmIf0'
  },
  {
    tag: 'is',
    title: 'Bedah Buku Wawasan Ilmu "Pengantar Sistem Informasi"',
    src: 'https://www.youtube.com/embed/ti6K9RxBRoc'
  },
  {
    tag: 'is',
    title: 'Pengantar Sistem Informasi - Komponen Sistem Informasi',
    src: 'https://www.youtube.com/embed/eaiQ6k5QfYQ'
  },
  {
    tag: 'is',
    title: 'Sistem Informasi UT Semester 1',
    src: 'https://www.youtube.com/embed/o6rwhe6tFNU'
  },
  {
    tag: 'is',
    title: 'Pengembangan Sistem Informasi - Konsep Sistem Informasi (Part 1)',
    src: 'https://www.youtube.com/embed/yVgezl_RzKo'
  },
  {
    tag: 'comp',
    title: 'PENGENALAN DASAR KOMPUTER',
    src: 'https://www.youtube.com/embed/6Ju0RDgGzTA'
  },
  {
    tag: 'comp',
    title: 'Pengenalan Komponen Komputer untuk Pemula',
    src: 'https://www.youtube.com/embed/7VUYlXljyb4'
  },
  {
    tag: 'comp',
    title: 'Pengantar Organisasi Komputer',
    src: 'https://www.youtube.com/embed/BDgXXHuOQBg'
  },
  {
    tag: 'comp',
    title: 'Belajar Komputer Dari Dasar Part 4',
    src: 'https://www.youtube.com/embed/lj5Qz1f3TYY'
  },
  {
    tag: 'comp',
    title: 'Belajar Komputer Mulai dari Dasar',
    src: 'https://www.youtube.com/embed/39d41Yv6dUE'
  },
  {
    tag: 'net',
    title: 'CISCO Packet Tracer – Belajar Jaringan Komputer Dasar',
    src: 'https://www.youtube.com/embed/CAWjdVqXd1I'
  },
  {
    tag: 'net',
    title: 'EP#1 – Pengenalan Jaringan – Tutorial CCNA Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/gMZr2wio0hw'
  },
  {
    tag: 'net',
    title: 'Materi Cisco Introduction to Network Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/8f_YdbzW-PQ'
  },
  {
    tag: 'net',
    title: 'Mengenal Router pada Jaringan Komputer',
    src: 'https://www.youtube.com/embed/PP_hmimimxI'
  },
  {
    tag: 'net',
    title: 'Jaringan Komputer dan Internet – Informatika XI',
    src: 'https://www.youtube.com/embed/6fLRumfmNlI'
  },
  {
    tag: 'db',
    title: 'Tutorial Dasar Belajar DATABASE Untuk Pemula Dari 0',
    src: 'https://www.youtube.com/embed/X94JAwDfNvA'
  },
  {
    tag: 'db',
    title: 'Belajar Basis Data untuk Pemula (MySQL) – Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/S4igMZFCvh8'
  },
  {
    tag: 'db',
    title: 'Tutorial PostgreSQL Database (Bahasa Indonesia)',
    src: 'https://www.youtube.com/embed/iEeveYoD0SA'
  },
  {
    tag: 'db',
    title: 'MySQL untuk Pemula – Materi Pembahasan Part 1',
    src: 'https://www.youtube.com/embed/DK0IyHnwIM0'
  },
  {
    tag: 'db',
    title: 'Full Tutorial PostgreSQL Dan Database – Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/EAr5GvF7-dw'
  },
  {
    tag: 'is',
    title: 'Sistem Informasi: Sistem Informasi & Karakteristiknya',
    src: 'https://www.youtube.com/embed/qocAqkSc2kA'
  },
  {
    tag: 'is',
    title: 'Sistem Informasi Berbasis Komputer (CBIS)',
    src: 'https://www.youtube.com/embed/ST-MGQVzz24'
  },
  {
    tag: 'is',
    title: 'Belajar Sistem Informasi | 1. Posisi SI pada Organisasi',
    src: 'https://www.youtube.com/embed/BeRkSU3sdW8'
  },
  {
    tag: 'is',
    title: 'Belajar Sistem Informasi | 2. Membuat Sistem Informasi',
    src: 'https://www.youtube.com/embed/_r-I-y10ckw'
  },
  {
    tag: 'is',
    title: 'Apa itu Data, Sistem, Informasi, dan Sistem Informasi?',
    src: 'https://www.youtube.com/embed/UvWDyzP8ulE'
  },
  {
    tag: 'comp',
    title: 'PENERALAN DASAR KOMPUTER',
    src: 'https://www.youtube.com/embed/6Ju0RDgGzTA'
  },
  {
    tag: 'comp',
    title: 'Pengenalan Komponen Komputer untuk Pemula',
    src: 'https://www.youtube.com/embed/7VUYlXljyb4'
  },
  {
    tag: 'comp',
    title: 'Pertemuan 2 Pengantar Komputer dan Jaringan Dasar',
    src: 'https://www.youtube.com/embed/2xDuVaLjuiQ'
  },
  {
    tag: 'comp',
    title: 'Animasi Pengantar Dasar Dasar Komputer dan Jaringan',
    src: 'https://www.youtube.com/embed/eAYfby_kOLY'
  },
  {
    tag: 'comp',
    title: 'Pengantar Organisasi Komputer',
    src: 'https://www.youtube.com/embed/BDgXXHuOQBg'
  },
  {
    tag: 'net',
    title: 'CISCO Packet Tracer – Belajar Jaringan Komputer Dasar',
    src: 'https://www.youtube.com/embed/CAWjdVqXd1I'
  },
  {
    tag: 'net',
    title: 'EP#1 – Pengenalan Jaringan – Tutorial CCNA Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/gMZr2wio0hw'
  },
  {
    tag: 'net',
    title: 'Materi Cisco Introduction to Network Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/8f_YdbzW-PQ'
  },
  {
    tag: 'net',
    title: 'Mengenal Router pada Jaringan Komputer',
    src: 'https://www.youtube.com/embed/PP_hmimimxI'
  },
  {
    tag: 'net',
    title: 'Jaringan Komputer dan Internet – Informatika XI',
    src: 'https://www.youtube.com/embed/6fLRumfmNlI'
  },
  {
    tag: 'db',
    title: 'Tutorial Dasar Belajar DATABASE Untuk Pemula Dari 0',
    src: 'https://www.youtube.com/embed/X94JAwDfNvA'
  },
  {
    tag: 'db',
    title: 'Belajar Basis Data untuk Pemula (MySQL) – Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/S4igMZFCvh8'
  },
  {
    tag: 'db',
    title: 'MySQL untuk Pemula | Materi Pembahasan ~ Part 1',
    src: 'https://www.youtube.com/embed/DK0IyHnwIM0'
  },
  {
    tag: 'db',
    title: 'Tutorial phpMyAdmin dan MySQL - Cara Membuat Database',
    src: 'https://www.youtube.com/embed/BX2XscOvzRA'
  },
  {
    tag: 'db',
    title: 'Cara Membuat Database MySQL di XAMPP 2024 | untuk Pemula',
    src: 'https://www.youtube.com/embed/cO22glIfobg'
  },
  {
    tag: 'is',
    title: 'Bedah Buku Wawasan Ilmu "Pengantar Sistem Informasi"',
    src: 'https://www.youtube.com/embed/ti6K9RxBRoc'
  },
  {
    tag: 'is',
    title: 'Pengantar Sistem Informasi - Komponen Sistem Informasi',
    src: 'https://www.youtube.com/embed/eaiQ6k5QfYQ'
  },
  {
    tag: 'is',
    title: 'SISTEM INFORMASI UT SEMESTER 1',
    src: 'https://www.youtube.com/embed/o6rwhe6tFNU'
  },
  {
    tag: 'is',
    title: 'Pengembangan Sistem Informasi – Konsep Sistem Informasi (Part 1)',
    src: 'https://www.youtube.com/embed/yVgezl_RzKo'
  },
  {
    tag: 'is',
    title: 'PENGANTAR TEKNOLOGI INFORMASI DAN DIGITAL',
    src: 'https://www.youtube.com/embed/_-n7fyUDQvI'
  },
  {
    tag: 'is',
    title: 'Pengantar & Penjelasan OOP #23 | Java | Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/4_X6qaANxPw'
  },
  {
    tag: 'is',
    title: 'Pengantar Teknik Industri – APSI Pertemuan 1',
    src: 'https://www.youtube.com/embed/bZ6UverJ1kw'
  },
  {
    tag: 'is',
    title: 'Mengenal Konsep Dasar Informatika: Pengantar …',
    src: 'https://www.youtube.com/embed/J7NkcvAsjg0'
  },
  {
    tag: 'is',
    title: 'Kuliah Umum Sistem Informasi 2023',
    src: 'https://www.youtube.com/embed/I7fqxgpty2s'
  },
  {
    tag: 'is',
    title: 'Episode Pengantar Sistem dan Teknologi Informasi – GuruVirtual.ID',
    src: 'https://www.youtube.com/embed/vz3F71GmIf0'
  },
  {
    tag: 'comp',
    title: 'Pengantar Organisasi Komputer',
    src: 'https://www.youtube.com/embed/BDgXXHuOQBg'
  },
  {
    tag: 'comp',
    title: '#1 Pengantar Aplikasi Komputer | APLIKASI KOMPUTER',
    src: 'https://www.youtube.com/embed/_VGlDNuFSbM'
  },
  {
    tag: 'comp',
    title: 'Dasar Dasar Pemrograman – Pengantar Algoritma',
    src: 'https://www.youtube.com/embed/60K7zxIjHQo'
  },
  {
    tag: 'comp',
    title: 'Dasar Pemrograman – Komputer dan Bahasa …',
    src: 'https://www.youtube.com/embed/MtqFJoJNTcA'
  },
  {
    tag: 'comp',
    title: 'Rekaman Pembelajaran Daring – Sistem Komputer',
    src: 'https://www.youtube.com/embed/p5GVvYHO8jo'
  },
  {
    tag: 'net',
    title: 'Pengantar Jaringan Komputer',
    src: 'https://www.youtube.com/embed/HTse1e5v3pA'
  },
  {
    tag: 'net',
    title: 'DASAR-DASAR TEKNIK JARINGAN KOMPUTER DAN ...',
    src: 'https://www.youtube.com/embed/_yiW4VyKRc8'
  },
  {
    tag: 'net',
    title: 'Pertemuan 1 – PENGANTAR JARINGAN KOMPUTER (STEKom)',
    src: 'https://www.youtube.com/embed/um2LZPZExL0'
  },
  {
    tag: 'net',
    title: 'Pengantar Jaringan Komputer – Kuliah UBL',
    src: 'https://www.youtube.com/embed/5DeQlauOT8c'
  },
  {
    tag: 'net',
    title: 'Jaringan Komputer dan Internet – Informatika XI',
    src: 'https://www.youtube.com/embed/3MmZe5r8fpk'
  },
  {
    tag: 'net',
    title: 'Belajar Dasar Jaringan Komputer dari nol - Part 5/8',
    src: 'https://www.youtube.com/embed/bsFE5OKGiPw'
  },
  {
    tag: 'net',
    title: 'Pengertian, Jenis, dan Topologi (Jaringan)',
    src: 'https://www.youtube.com/embed/Cnvtp0hgYcw'
  },
  {
    tag: 'net',
    title: 'Belajar Jaringan Komputer Lewat Podcast (TechTalk)',
    src: 'https://www.youtube.com/embed/tRgHuzggKTA'
  },
  {
    tag: 'net',
    title: 'Video interaktif: jaringan komputer',
    src: 'https://www.youtube.com/embed/Cnvtp0hgYcw'
  },
  {
    tag: 'net',
    title: 'INTRODUCTION TO COMPUTER NETWORKS (Bahasa Indonesia)',
    src: 'https://www.youtube.com/embed/9FPeYOLyfh4'
  },
  {
    tag: 'db',
    title: 'Dasar Belajar Database Untuk Pemula Dari 0',
    src: 'https://www.youtube.com/embed/X94JAwDfNvA'
  },
  {
    tag: 'db',
    title: 'MySQL untuk Pemula | Part 1',
    src: 'https://www.youtube.com/embed/DK0IyHnwIM0'
  },
  {
    tag: 'db',
    title: 'Tutorial PostgreSQL Database (Bahasa Indonesia)',
    src: 'https://www.youtube.com/embed/iEeveYoD0SA'
  },
  {
    tag: 'db',
    title: 'Full Tutorial PostgreSQL Dan Database – Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/EAr5GvF7-dw'
  },
  {
    tag: 'db',
    title: 'Belajar Basis Data untuk Pemula (MySQL)',
    src: 'https://www.youtube.com/embed/S4igMZFCvh8'
  },
  {
    tag: 'db',
    title: 'Tutorial Java Database (Bahasa Indonesia)',
    src: 'https://www.youtube.com/embed/_25BmjGfjQQ'
  },
  {
    tag: 'db',
    title: '01. Pengantar Singkat Basis Data dan MySQL',
    src: 'https://www.youtube.com/embed/2ieOuuYZIsY'
  },
  {
    tag: 'db',
    title: 'Belajar Basis Data – Pemula Playlist',
    src: 'https://www.youtube.com/embed/S4igMZFCvh8'
  }
];

const advanceVideos = [
  {
    tag: 'sa',
    title: 'System Analysis & Design Full Lecture',
    src: 'https://www.youtube.com/embed/X898qHM2uP0'
  },
  {
    tag: 'sec',
    title: 'Cyber Security Full Course',
    src: 'https://www.youtube.com/embed/6XCuMC0CVYI'
  },
  {
    tag: 'dm',
    title: 'Data Science & BI Introduction',
    src: 'https://www.youtube.com/embed/ua-CiDNNj30'
  },
  {
    tag: 'sa',
    title: 'Belajar Sistem Informasi | Mengenal Data Flow Diagram (DFD)',
    src: 'https://www.youtube.com/embed/EfSvOhw0JPc'
  },
  {
    tag: 'sa',
    title: 'Data Flow Diagram Level 0 – Analisis dan Desain Sistem',
    src: 'https://www.youtube.com/embed/G4mtJqK50Co'
  },
  {
    tag: 'sa',
    title: 'Context Diagram – Pengertian, Fungsi, Contoh',
    src: 'https://www.youtube.com/embed/22x2pL4peuI'
  },
  {
    tag: 'sa',
    title: 'Membuat DFD Level 0 & Level 1 – Aplikasi Data Barang',
    src: 'https://www.youtube.com/embed/2kscVhlywzs'
  },

  {
    tag: 'sec',
    title: 'Yuk Mengenal Apa Itu Keamanan Siber',
    src: 'https://www.youtube.com/embed/IvBfxSJWx6A'
  },
  {
    tag: 'sec',
    title: 'Alur Belajar Keamanan Siber Pemula',
    src: 'https://www.youtube.com/embed/-oNFGMPg_fE'
  },
  {
    tag: 'sec',
    title: 'Belajar Cyber Security Untuk Pemula',
    src: 'https://www.youtube.com/embed/Eh-CNozQBjg'
  },
  {
    tag: 'sec',
    title: 'KUNCI UTAMA BELAJAR CYBERSECURITY',
    src: 'https://www.youtube.com/embed/Hhv6dhm6VDQ'
  },

  {
    tag: 'dm',
    title: 'Apa Itu Data Mining?',
    src: 'https://www.youtube.com/embed/5DMxeR9KRyU'
  },
  {
    tag: 'dm',
    title: 'Konsep, Proses dan Contoh Nyata Data Mining dan Big Data',
    src: 'https://www.youtube.com/embed/h82NuHDNhKI'
  },
  {
    tag: 'dm',
    title: 'Pengantar Mata Kuliah Data Mining Untuk Pemula',
    src: 'https://www.youtube.com/embed/e8ZbDI6z9v0'
  },
  {
    tag: 'dm',
    title: 'Tutorial Orange Data Mining – Pengenalan Tools',
    src: 'https://www.youtube.com/embed/cElmNyHCdIo'
  },
  {
    tag: 'sec',
    title: 'Apa itu Phising? Ketahui Pengertian, Teknik dan Bahayanya',
    src: 'https://www.youtube.com/embed/UygZfswZgRE?si=rZcXhDUwvtIR0CA-'
  },
  {
    tag: 'sa',
    title: 'Belajar Use Case Diagram | Belajar UML & Perancangan Sistem',
    src: 'https://www.youtube.com/embed/cgV0BFmAg_Y'
  },
  {
    tag: 'sa',
    title: 'Penjelasan Use Case Diagram dan Activity Diagram',
    src: 'https://www.youtube.com/embed/qpic2jILpVY'
  },
  {
    tag: 'sec',
    title: 'Phishing 101 – Jangan Jadi Korban Belajar Mengenali dan Menghindari Serangan Phishing',
    src: 'https://www.youtube.com/embed/o0jVexIDm84'
  },
  {
    tag: 'sec',
    title: '4 Cara Menghindari Dan Melindungi Diri Dari Phishing',
    src: 'https://www.youtube.com/embed/uI8GzsBk_34'
  },
  {
    tag: 'dm',
    title: 'Belajar Machine Learning Dari Awal Buat Yang Ga Jago Matematika',
    src: 'https://www.youtube.com/embed/WH1SduDRL_Y'
  },
  {
    tag: 'dm',
    title: 'SKLearn 01 | Belajar Machine Learning Dasar',
    src: 'https://www.youtube.com/embed/vqgucRK5K1A'
  },
  {
    tag: 'dm',
    title: 'Memahami Machine Learning (konsep dasar)',
    src: 'https://www.youtube.com/embed/6IMezgTJKCg'
  },
  {
    tag: 'dm',
    title: 'Dicoding Developer Coaching #85 : Machine Learning (Pengantar)',
    src: 'https://www.youtube.com/embed/-cUcbTF4emY'
  },
  {
    tag: 'es',
    title: 'Konsep Dasar Enterprise System (ES)',
    src: 'https://www.youtube.com/embed/6j-hwUlEvDo'
  },
  {
    tag: 'es',
    title: 'Enterprise Systems: Enterprise Resource Planning',
    src: 'https://www.youtube.com/embed/5npzUbDZqUY'
  },
  {
    tag: 'es',
    title: 'Sistem & Rekayasa ERP | Part 1 | Enterprise Resource Planning',
    src: 'https://www.youtube.com/embed/X945w0CnndQ'
  },
  {
    tag: 'es',
    title: 'Mengenal Sistem ERP | Jazzy Arminta',
    src: 'https://www.youtube.com/embed/u9k-BMoUdt0'
  },
  {
    tag: 'es',
    title: 'Konsep Dasar Enterprise System (ES)',
    src: 'https://www.youtube.com/embed/6j-hwUlEvDo'
  },
  {
    tag: 'es',
    title: 'Mengenal Sistem ERP | Jazzy Arminta',
    src: 'https://www.youtube.com/embed/u9k-BMoUdt0'
  },
  {
    tag: 'es',
    title: 'Sebelum Pakai ERP System, Wajib Tahu yang Satu Ini!',
    src: 'https://www.youtube.com/embed/QNrUk4TZPM0'
  },
  {
    tag: 'es',
    title: 'Apa itu ERP? Manfaat ERP untuk Perusahaan',
    src: 'https://www.youtube.com/embed/E6P64unvC1c'
  },
  {
    tag: 'es',
    title: 'Webinar: Implementasi IT Enterprise Architecture di Industri',
    src: 'https://www.youtube.com/embed/0dJ_t-wQLqo'
  },
  {
    tag: 'es',
    title: 'Pengenalan Tentang ERP Odoo – Introduction to Odoo ERP',
    src: 'https://www.youtube.com/embed/M0lBYNmFSuQ'
  },
  {
    tag: 'es',
    title: 'Belajar SAP Business One Bahasa Indonesia untuk User Pemula',
    src: 'https://www.youtube.com/embed/pKd12Aym1M0'
  },
  {
    tag: 'es',
    title: 'Perbandingan Odoo Community vs Enterprise',
    src: 'https://www.youtube.com/embed/wH8xIP8jKIc'
  },
  {
    tag: 'es',
    title: 'How Epicor Kinetic Helps Enable Increased Profits',
    src: 'https://www.youtube.com/embed/MSx2hhwpzyg'
  }
];

const programmingVideos = [
  {
    tag: 'py',
    title: 'Learn Python - Full Course',
    src: 'https://www.youtube.com/embed/rfscVS0vtbw'
  },
  {
    tag: 'py',
    title: 'Python for Beginners - Full Course',
    src: 'https://www.youtube.com/embed/eWRfhZUzrAc'
  },
  {
    tag: 'py',
    title: 'Python Crash Course',
    src: 'https://www.youtube.com/embed/kqtD5dpn9C8'
  },
  {
    tag: 'js',
    title: 'JavaScript Full Course (Beginner to Advanced)',
    src: 'https://www.youtube.com/embed/PkZNo7MFNFg'
  },
  {
    tag: 'php',
    title: 'PHP Full Course 2025',
    src: 'https://www.youtube.com/embed/VGBWm6xtPWs'
  },
  {
    tag: 'php',
    title: 'PHP & MySQL Crash Course',
    src: 'https://www.youtube.com/embed/Ak6VTSekGP4'
  },
  {
    tag: 'py',
    title: 'Belajar Python dari nol untuk pemula (Tutorial 2025)',
    src: 'https://www.youtube.com/embed/DQfvftz-fEI'
  },
  {
    tag: 'py',
    title: 'Sesi 1: Belajar Python | Praktek Dasar',
    src: 'https://www.youtube.com/embed/n0tURC_xeyI'
  },
  {
    tag: 'py',
    title: 'Tutorial Belajar Bikin Website Pake PYTHON Untuk Pemula Dari 0',
    src: 'https://www.youtube.com/embed/aJ_wqpXDW6k'
  },
  {
    tag: 'py',
    title: 'Belajar Python [Dasar] – 03 Perintah Dasar (Jagat Koding)',
    src: 'https://www.youtube.com/embed/czIMILARU7w'
  },
  {
    tag: 'js',
    title: 'Tutorial JavaScript Dasar Bahasa Indonesia (8 jam lengkap)',
    src: 'https://www.youtube.com/embed/SDROba_M42g'
  },
  {
    tag: 'js',
    title: 'TUTORIAL JAVASCRIPT | Sesi Pertama | Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/Z7mXO2yOzHA'
  },
  {
    tag: 'php',
    title: 'Belajar Web Dengan PHP & Database Untuk Pemula Dari Nol',
    src: 'https://www.youtube.com/embed/Ak6VTSekGP4'
  },
  {
    tag: 'php',
    title: 'TUTORIAL PHP TERLENGKAP UNTUK PEMULA',
    src: 'https://www.youtube.com/embed/IkD2y4ubFdw'
  },
  {
    tag: 'php',
    title: 'TUTORIAL PHP DASAR Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/TaBWhb5SPfc'
  },
  {
    tag: 'py',
    title: 'Belajar Python dari nol untuk pemula (Tutorial 2025)',
    src: 'https://www.youtube.com/embed/DQfvftz-fEI'
  },
  {
    tag: 'py',
    title: 'Sesi 1: Belajar Python | Praktek Dasar',
    src: 'https://www.youtube.com/embed/n0tURC_xeyI'
  },
  {
    tag: 'py',
    title: 'Tutorial Belajar Bikin Website Pake PYTHON Untuk Pemula Dari 0',
    src: 'https://www.youtube.com/embed/aJ_wqpXDW6k'
  },
  {
    tag: 'py',
    title: 'Belajar Python [Dasar] – 03 Perintah Dasar (Jagat Koding)',
    src: 'https://www.youtube.com/embed/czIMILARU7w'
  },
  {
    tag: 'py',
    title: '00 - Apa itu Python? - Tutorial Python Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/EmbRUPtRAXk'
  },
  {
    tag: 'js',
    title: 'Tutorial JavaScript Dasar Bahasa Indonesia (8 jam lengkap)',
    src: 'https://www.youtube.com/embed/SDROba_M42g'
  },
  {
    tag: 'js',
    title: 'TUTORIAL JAVASCRIPT | Sesi Pertama | Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/Z7mXO2yOzHA'
  },
  {
    tag: 'js',
    title: 'TUTORIAL JAVASCRIPT DASAR BAHASA INDONESIA (Programmer Zaman Now)',
    src: 'https://www.youtube.com/embed/mOLglF_8UNc'
  },
  {
    tag: 'php',
    title: 'Belajar Web Dengan PHP & Database Untuk Pemula Dari Nol',
    src: 'https://www.youtube.com/embed/Ak6VTSekGP4'
  },
  {
    tag: 'php',
    title: 'TUTORIAL PHP TERLENGKAP UNTUK PEMULA',
    src: 'https://www.youtube.com/embed/IkD2y4ubFdw'
  },
  {
    tag: 'php',
    title: 'TUTORIAL PHP DASAR Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/TaBWhb5SPfc'
  },
  {
    tag: 'py',
    title: 'Belajar Pemrograman Python Dasar untuk Pemula',
    src: 'https://www.youtube.com/embed/fmZX-5r0t5E'
  },
  {
    tag: 'py',
    title: 'Belajar Python Dasar – #00 Langkah Pertama',
    src: 'https://www.youtube.com/embed/-DGFFxblTUw'
  },
  {
    tag: 'py',
    title: 'Tutorial Python Beginner Bahasa Indonesia – Full Course',
    src: 'https://www.youtube.com/embed/rWC2iFlN3TM'
  },
  {
    tag: 'js',
    title: 'Belajar JavaScript Pertama Kali untuk Pemula',
    src: 'https://www.youtube.com/embed/1pTJNdxZy74'
  },
  {
    tag: 'js',
    title: 'Belajar Javascript Pemula - Part#1 Perkenalan',
    src: 'https://www.youtube.com/embed/bi0pkZmB5J4'
  },
  {
    tag: 'js',
    title: 'Belajar JavaScript ES6 – Ep1: Apa itu JavaScript?',
    src: 'https://www.youtube.com/embed/xuS-Dc8aZUM'
  },
  {
    tag: 'php',
    title: 'Belajar PHP Hello World – Basic',
    src: 'https://www.youtube.com/embed/Ip2pnf1OJCc'
  },
  {
    tag: 'php',
    title: 'Belajar PHP untuk Pemula – Intro Series',
    src: 'https://www.youtube.com/embed/l1W2OwV5rgY'
  },
  {
    tag: 'php',
    title: 'Jago PHP! Dasar PHP Step by Step',
    src: 'https://www.youtube.com/embed/6Xbt-lNHXt0'
  },
  {
    title: 'Pengembangan Sistem Informasi – Konsep Sistem Informasi',
    src: 'https://www.youtube.com/embed/yVgezl_RzKo'
  },
];

const recommended = [
  {
    title: 'Apa itu Phising? Ketahui Pengertian, Teknik dan Bahayanya',
    src: 'https://www.youtube.com/embed/UygZfswZgRE?si=rZcXhDUwvtIR0CA-'
  },
  {
    title: 'Apa itu Sistem Informasi? (Short Intro)',
    src: 'https://www.youtube.com/embed/dLfpZtIacbc'
  },
  {
    title: 'Computer & Technology Basics Course',
    src: 'https://www.youtube.com/embed/y2kg3MOk1sY'
  },
  {
    title: 'Cisco Packet Tracer Full Course (Intro to Networks)',
    src: 'https://www.youtube.com/embed/ty0HMs48U1k'
  },
  {
    title: 'SQL Tutorial – Full Database Course for Beginners',
    src: 'https://www.youtube.com/embed/HXV3zeQKqGY'
  },
  {
    title: 'Learn Python – Full Course for Beginners',
    src: 'https://www.youtube.com/embed/rfscVS0vtbw'
  },
  {
    title: 'Java Full Course for Beginners',
    src: 'https://www.youtube.com/embed/eIrMbAQSU34'
  },
  {
    title: 'PHP Full Course – Beginner to Advanced',
    src: 'https://www.youtube.com/embed/VGBWm6xtPWs'
  },
  {
    title: 'Cyber Security Fundamentals',
    src: 'https://www.youtube.com/embed/6XCuMC0CVYI'
  },
  {
    title: 'Data Science & BI Introduction',
    src: 'https://www.youtube.com/embed/ua-CiDNNj30'
  },
  {
    title: 'Pengantar Sistem Informasi – Belajar Dasar',
    src: 'https://www.youtube.com/embed/X898qHM2uP0'
  },
  {
    title: 'Belajar Jaringan Komputer Dasar – Full Course',
    src: 'https://www.youtube.com/embed/9SIjoeE93lo'
  },
  {
    title: 'Mengenal Database & SQL untuk Pemula',
    src: 'https://www.youtube.com/embed/7S_tz1z_5bA'
  },
  {
    title: 'Python Crash Course – Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/kqtD5dpn9C8'
  },
  {
    title: 'JavaScript Tutorial untuk Pemula (Full Course)',
    src: 'https://www.youtube.com/embed/PkZNo7MFNFg'
  },
  {
    title: 'Java Programming Full Course – Pemula',
    src: 'https://www.youtube.com/embed/eIrMbAQSU34'
  },
  {
    title: 'PHP & MySQL Crash Course Bahasa Indonesia',
    src: 'https://www.youtube.com/embed/Ak6VTSekGP4'
  },
  {
    title: 'Keamanan Siber Dasar – Cyber Security untuk Pemula',
    src: 'https://www.youtube.com/embed/6XCuMC0CVYI'
  },
  {
    title: 'Data Science Dasar & Business Intelligence',
    src: 'https://www.youtube.com/embed/ua-CiDNNj30'
  },
  {
    title: 'Jago PHP! Dasar PHP Step by Step',
    src: 'https://www.youtube.com/embed/6Xbt-lNHXt0'
  },
  {
    title: 'Pengembangan Sistem Informasi – Konsep Sistem Informasi (Part 1)',
    src: 'https://www.youtube.com/embed/yVgezl_RzKo'
  },
  {
    title: 'Mengenal fungsi dan istilah penting dalam komputer',
    src: 'https://www.youtube.com/embed/8C1i62bsmSw?si=gaAEZAYTAdekYu5g'
  },
  {
    title: 'Tutorial Dasar Belajar DATABASE Untuk Pemula Dari 0',
    src: 'https://www.youtube.com/embed/X94JAwDfNvA'
  },
  {
    title: 'Mengenal Router pada Jaringan Komputer',
    src: 'https://www.youtube.com/embed/PP_hmimimxI'
  },
  {
    title: 'Pengertian Dasar Sistem Informasi',
    src: 'https://www.youtube.com/embed/fxgHlHF31DA?si=Z1ww1NotfL1EhOXG'
  }
];

function getYoutubeId(url) {
  const match = url.match(/(?:embed\/|v=|youtu\.be\/)([^?&"'>]+)/);
  return match ? match[1] : null;
}

function mkCard(item) {
  const el = document.createElement('div');
  el.className = 'card';
  el.dataset.tag = item.tag || '';

  const vid = getYoutubeId(item.src);
  const thumb = vid ? `https://img.youtube.com/vi/${vid}/hqdefault.jpg` : '';

  el.innerHTML = `
    <div class="meta">
      <div class="title">${escapeHtml(item.title || 'Video')}</div>
      <div style="font-size:0.85rem;color:#bff6ff">YouTube</div>
    </div>
    <div class="desc">${escapeHtml(item.desc || '')}</div>
    <div class="video-thumb">
      <img src="${thumb}" alt="Thumbnail" loading="lazy">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             fill="#fff" width="36px" height="36px"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
  `;

  const thumbDiv = el.querySelector('.video-thumb');
  thumbDiv.addEventListener('click', () => {
    thumbDiv.innerHTML = `
      <iframe src="${item.src}?autoplay=1" frameborder="0" allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style="width:100%;height:180px;border-radius:12px;border:0;display:block"></iframe>
    `;
  });

  return el;
}

function fillGrid(gridId, list) {
  const g = document.getElementById(gridId);
  if (!g) return;
  g.innerHTML = '';
  list.forEach((it, index) => {
    const card = mkCard(it);
    card.style.animationDelay = `${index * 0.05}s`;
    g.appendChild(card);
  });
}

fillGrid('grid-intro', introVideos);
fillGrid('grid-advance', advanceVideos);
fillGrid('grid-programming', programmingVideos);
fillGrid('grid-videos', recommended);

function filterGrid(pageKey, filter, chipEl) {
  const parent = chipEl?.parentNode;
  if (parent) {
    Array.from(parent.children).forEach(c => c.classList.remove('active'));
    chipEl.classList.add('active');
  }
  const map = { 'intro': 'grid-intro', 'advance': 'grid-advance', 'programming': 'grid-programming' };
  const gridId = map[pageKey];
  if (!gridId) return;
  const grid = document.getElementById(gridId);
  Array.from(grid.children).forEach(card => {
    const tag = (card.dataset.tag || '').toLowerCase();
    const isVisible = (filter === 'all' || tag.includes(filter));
    card.style.display = isVisible ? '' : 'none';
    // Optional: Add/remove animation class for filtering
    if (isVisible) {
      card.style.animation = 'fadeIn 0.6s ease-out forwards';
    } else {
      card.style.animation = 'none';
    }
  });
}

document.getElementById('searchIntro').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('#grid-intro .card').forEach(c => {
    const isVisible = c.querySelector('.title').textContent.toLowerCase().includes(q);
    c.style.display = isVisible ? '' : 'none';
    if (isVisible) {
      c.style.animation = 'fadeIn 0.6s ease-out forwards';
    } else {
      c.style.animation = 'none';
    }
  });
});
document.getElementById('searchAdvance').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('#grid-advance .card').forEach(c => {
    const isVisible = c.querySelector('.title').textContent.toLowerCase().includes(q);
    c.style.display = isVisible ? '' : 'none';
    if (isVisible) {
      c.style.animation = 'fadeIn 0.6s ease-out forwards';
    } else {
      c.style.animation = 'none';
    }
  });
});
document.getElementById('searchProg').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('#grid-programming .card').forEach(c => {
    const isVisible = c.querySelector('.title').textContent.toLowerCase().includes(q);
    c.style.display = isVisible ? '' : 'none';
    if (isVisible) {
      c.style.animation = 'fadeIn 0.6s ease-out forwards';
    } else {
      c.style.animation = 'none';
    }
  });
});

function escapeHtml(s) {
  return (s || '').replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[m]);
}

function showPopup(message, type) {
  const popup = document.createElement('div');
  popup.className = 'contact-popup ' + (type === 'success' ? 'success' : 'error');
  popup.textContent = message;
  document.body.appendChild(popup);

  requestAnimationFrame(() => {
    popup.style.opacity = '1';
    popup.style.transform = 'translateX(-50%) translateY(0)'; 
  });

  setTimeout(() => {
    popup.style.opacity = '0';
    popup.style.transform = 'translateX(-50%) translateY(30px)';
    setTimeout(() => popup.remove(), 400);
  }, 3000);
}

document.getElementById('sendContact').addEventListener('click', () => {
  const cname = document.getElementById('cname');
  const cmsg = document.getElementById('cmsg');
  const name = cname.value.trim();
  const msg = cmsg.value.trim();
  let valid = true;
  if (!cname.disabled && !name) {
    cname.classList.add("error-shake");
    valid = false;
  }
  if (!msg) {
    cmsg.classList.add("error-shake");
    valid = false;
  }
  if (!valid && navigator.vibrate) navigator.vibrate([100, 50, 100]);

  if (valid) {
    showPopup('Berhasil Terkirim', 'success');
    cname.value = '';
    cmsg.value = '';
    selectEmailOption('email');
  } else {
    showPopup('Lengkapi email & pesan', 'error');
  }
  setTimeout(() => {
    cname.classList.remove("error-shake");
    cmsg.classList.remove("error-shake");
  }, 500);
});

const emailOptionToggle = document.getElementById('emailOptionToggle');
const emailOptions = document.getElementById('emailOptions');
const cnameInput = document.getElementById('cname');

emailOptionToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  emailOptions.classList.toggle('active');
});
emailOptions.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    selectEmailOption(e.target.dataset.option);
    emailOptions.classList.remove('active');
  });
});
document.addEventListener('click', (e) => {
  if (!emailOptionToggle.contains(e.target) && !emailOptions.contains(e.target)) {
    emailOptions.classList.remove('active');
  }
});
function selectEmailOption(option) {
  if (option === 'anonymous') {
    cnameInput.value = 'Anonim';
    cnameInput.disabled = true;
    cnameInput.placeholder = '';
  } else {
    cnameInput.value = '';
    cnameInput.disabled = false;
    cnameInput.placeholder = 'Masukkan email Anda';
  }
}
selectEmailOption('email');
const canvas = document.getElementById('techBgCanvas');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const particles = [];
const particleCount = 120;
const particleColor = 'rgba(0,180,216,0.8)';
const lineColor = 'rgba(0,180,216,0.3)';

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    size: Math.random() * 2.5 + 1.5
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = particleColor;
  for (let i = 0; i < particleCount; i++) {
    let p = particles[i];
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;

    ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();

    for (let j = i + 1; j < particleCount; j++) {
      let p2 = particles[j];
      let dx = p.x - p2.x, dy = p.y - p2.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        ctx.strokeStyle = lineColor.replace('0.3', (1 - dist / 150) * 0.4);
        ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
draw();

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  particles.length = 0;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 2.5 + 1.5
    });
  }
});

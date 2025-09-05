window.addEventListener("load", function() {
  window.scrollTo(0, 0);
});

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });
});

const navLinks = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');
const mainNav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');

function openPage(id) {
  pages.forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');

  if (mainNav.classList.contains('active')) {
    mainNav.classList.remove('active');
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
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
  }
];

const recommended = [
  {
    title: 'Apa itu Sistem Informasi? (Short Intro)',
    src: 'https://www.youtube.com/embed/dLfpZtIacbc'
  },
  {
    title: 'Computer & Technology Basics Course',
    src: 'https://www.youtube.com/embed/y2kg3MOk1sY'
  },
  {
    title: 'Cisco CCNA Introduction to Networks',
    src: 'https://www.youtube.com/embed/ty0HMs48U1k'
  },
  {
    title: 'SQL for Beginners — Full Course',
    src: 'https://www.youtube.com/embed/HXV3zeQKqGY'
  },
  {
    title: 'Learn Python - Full Course',
    src: 'https://www.youtube.com/embed/rfscVS0vtbw'
  },
  {
    title: 'JavaScript Full Course - Beginner to Pro',
    src: 'https://www.youtube.com/embed/PkZNo7MFNFg'
  },
  {
    title: 'Java Full Course for Beginners',
    src: 'https://www.youtube.com/embed/eIrMbAQSU34'
  },
  {
    title: 'PHP Full Course - Beginner to Advanced',
    src: 'https://www.youtube.com/embed/VGBWm6xtPWs'
  },
  {
    title: 'Cyber Security Fundamentals',
    src: 'https://www.youtube.com/embed/6XCuMC0CVYI'
  },
  {
    title: 'Data Science & BI Introduction',
    src: 'https://www.youtube.com/embed/ua-CiDNNj30'
  }
];


function mkCard(item) {
  const el = document.createElement('div');
  el.className = 'card';
  el.dataset.tag = item.tag || '';
  el.innerHTML = `
            <div class="meta"><div class="title">${escapeHtml(item.title || item.id || 'Video')}</div>
              <div style="font-size:0.85rem;color:#bff6ff">YouTube</div></div>
            <div class="desc">${escapeHtml(item.desc || '')}</div>
            <div style="margin-top:8px"><iframe loading="lazy" src="${item.src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          `;
  return el;
}

function fillGrid(gridId, list) {
  const g = document.getElementById(gridId);
  if (!g) return;
  g.innerHTML = '';
  list.forEach(it => g.appendChild(mkCard(it)));
}


fillGrid('grid-intro', introVideos);
fillGrid('grid-advance', advanceVideos);
fillGrid('grid-programming', programmingVideos);
fillGrid('grid-videos', recommended);


function filterGrid(pageKey, filter, chipEl) {

  const parent = (chipEl && chipEl.parentNode) ? chipEl.parentNode : null;
  if (parent) {
    Array.from(parent.children).forEach(c => c.classList.remove('active'));
    chipEl.classList.add('active');
  }

  const map = {
    'intro': 'grid-intro',
    'advance': 'grid-advance',
    'programming': 'grid-programming'
  };
  const gridId = map[pageKey];
  if (!gridId) return;
  const grid = document.getElementById(gridId);
  Array.from(grid.children).forEach(card => {
    const tag = (card.dataset.tag || '').toLowerCase();
    if (filter === 'all') card.style.display = '';
    else card.style.display = (tag.indexOf(filter) !== -1) ? '' : 'none';
  });
}

document.getElementById('searchIntro').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('#grid-intro .card').forEach(c => {
    c.style.display = c.querySelector('.title').textContent.toLowerCase().includes(q) ? '' : 'none';
  });
});
document.getElementById('searchAdvance').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('#grid-advance .card').forEach(c => {
    c.style.display = c.querySelector('.title').textContent.toLowerCase().includes(q) ? '' : 'none';
  });
});
document.getElementById('searchProg').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('#grid-programming .card').forEach(c => {
    c.style.display = c.querySelector('.title').textContent.toLowerCase().includes(q) ? '' : 'none';
  });
});


function escapeHtml(s) {
  return (s || '').replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[m]);
}

function showPopup(message, type) {
  const popup = document.createElement('div');
  popup.className = 'contact-popup ' + (type === 'success' ? 'success' : 'error');
  popup.textContent = message;
  document.body.appendChild(popup);

  requestAnimationFrame(() => {
    popup.style.opacity = '1';
    popup.style.transform = 'translateY(0)'; 
  });

  setTimeout(() => {
    popup.style.opacity = '0';
    popup.style.transform = 'translateY(20px)';
    setTimeout(() => popup.remove(), 300);
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

  if (!valid && navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }

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

emailOptionToggle.addEventListener('click', () => {
  emailOptions.classList.toggle('active');
});

emailOptions.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    const option = e.target.dataset.option;
    selectEmailOption(option);
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
    cnameInput.style.cursor = 'not-allowed';
  } else {
    cnameInput.value = '';
    cnameInput.disabled = false;
    cnameInput.style.cursor = 'text';
    cnameInput.placeholder = 'Masukkan email Anda';
  }
}

selectEmailOption('email');


const canvas = document.getElementById('techBgCanvas');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    size: Math.random() * 2 + 1
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(0,180,216,0.8)';

  for (let i = 0; i < particleCount; i++) {
    let p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    for (let j = i + 1; j < particleCount; j++) {
      let p2 = particles[j];
      let dx = p.x - p2.x;
      let dy = p.y - p2.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.strokeStyle = 'rgba(0,180,216,' + (1 - dist / 120) * 0.4 + ')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

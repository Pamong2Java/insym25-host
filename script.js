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


const YOUTUBE_API_KEY = 'AIzaSyBW3CEYSkDra70Q_xZbmSEnQJDskQDNZ38';
const BASE_YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&key=';

async function fetchVideoDetails(videoIds) {
  if (!videoIds || videoIds.length === 0) return [];
  const ids = videoIds.join(',');
  const url = `${BASE_YOUTUBE_API_URL}${YOUTUBE_API_KEY}&id=${ids}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.items.map(item => ({
      id: item.id,
      title: item.snippet.title,
      src: `https://www.youtube.com/embed/${item.id}`
    }));
  } catch (error) {
    console.error("Error fetching video details:", error);
    showPopup('Gagal memuat video. Cek koneksi atau kuota API.', 'error');
    return [];
  }
}

const introVideoIds = {
  is: ['30-nGJ0uCAs', 'MhIH4HkXS24', 'NL1VAu5ZCWw', 'BeRkSU3sdW8'],
  comp: ['y2kg3MOk1sY', 'rT31SRtdLsw', '0hC3IGYz0RY', '8C1i62bsmSw', 'Pj5-obUQL-s'],
  net: ['9SIjoeE93lo', 'qiQR5rTSshw'],
  db: ['HXV3zeQKqGY', '7S_tz1z_5bA']
};

const advanceVideoIds = {
  sa: ['X898qHM2uP0'],
  sec: ['6XCuMC0CVYI'],
  dm: ['ua-CiDNNj30']
};

const programmingVideoIds = {
  py: ['rfscVS0vtbw', 'eWRfhZUzrAc', 'kqtD5dpn9C8'],
  js: ['PkZNo7MFNFg'],
  php: ['VGBWm6xtPWs', 'Ak6VTSekGP4']
};

const recommendedVideoIds = [
  'dLfpZtIacbc', 'y2kg3MOk1sY', 'ty0HMs48U1k', 'HXV3zeQKqGY',
  'rfscVS0vtbw', 'PkZNo7MFNFg', 'eIrMbAQSU34', 'VGBWm6xtPWs',
  '6XCuMC0CVYI', 'ua-CiDNNj30'
];

async function loadAndFillGrid(gridId, videoIdMapOrArray) {
  let videosData = [];

  if (Array.isArray(videoIdMapOrArray)) {
    videosData = await fetchVideoDetails(videoIdMapOrArray);
  } else {
    for (const tag in videoIdMapOrArray) {
      const ids = videoIdMapOrArray[tag];
      const fetched = await fetchVideoDetails(ids);
      fetched.forEach(video => video.tag = tag);
      videosData = videosData.concat(fetched);
    }
  }
  fillGrid(gridId, videosData);
  return videosData;
}

let allIntroVideos = [];
let allAdvanceVideos = [];
let allProgrammingVideos = [];

document.addEventListener('DOMContentLoaded', async () => {
  allIntroVideos = await loadAndFillGrid('grid-intro', introVideoIds);
  allAdvanceVideos = await loadAndFillGrid('grid-advance', advanceVideoIds);
  allProgrammingVideos = await loadAndFillGrid('grid-programming', programmingVideoIds);
  await loadAndFillGrid('grid-videos', recommendedVideoIds);
});



function mkCard(item) {
  const el = document.createElement('div');
  el.className = 'card';
  el.dataset.tag = item.tag || ''; // Pastikan tag ada
  el.innerHTML = `
            <div class="meta"><div class="title">${escapeHtml(item.title || 'Video Tanpa Judul')}</div>
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
  // Filter dari data yang sudah dimuat
  const filteredVideos = allIntroVideos.filter(video => video.title.toLowerCase().includes(q));
  fillGrid('grid-intro', filteredVideos);
});

document.getElementById('searchAdvance').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  const filteredVideos = allAdvanceVideos.filter(video => video.title.toLowerCase().includes(q));
  fillGrid('grid-advance', filteredVideos);
});

document.getElementById('searchProg').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  const filteredVideos = allProgrammingVideos.filter(video => video.title.toLowerCase().includes(q));
  fillGrid('grid-programming', filteredVideos);
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

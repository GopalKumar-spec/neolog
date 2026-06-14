// ═══════════════════════════════════════
// NEO LOG — Main Application Logic
// ═══════════════════════════════════════

// 🎨 Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
});

// 📱 Mobile Menu
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });
}

// 📰 Render Post Card
function renderPostCard(post) {
  const imageHTML = post.image
    ? `<img class="post-card-image" src="${post.image}" alt="${post.title}" loading="lazy">`
    : `<div class="post-card-image" style="background: linear-gradient(135deg, var(--bg-elevated), var(--bg-secondary)); display: flex; align-items: center; justify-content: center; font-size: 3rem;">${post.category === 'movies' ? '🎬' : post.category === 'sci-fi' ? '🚀' : post.category === 'ai-tech' ? '🤖' : '✍️'}</div>`;

  return `
    <article class="post-card" onclick="window.location.href='/posts/?id=${post.id}'">
      ${imageHTML}
      <div class="post-card-body">
        <span class="post-card-category">${post.categoryLabel}</span>
        <h3 class="post-card-title">${post.title}</h3>
        <p class="post-card-excerpt">${post.excerpt}</p>
        <div class="post-card-meta">
          <span class="post-card-author">${post.author.charAt(0).toUpperCase()}</span>
          <span>${post.date}</span>
          <span>·</span>
          <span>${post.readingTime}</span>
        </div>
        <span class="post-card-cta">Read article →</span>
      </div>
    </article>
  `;
}

// 🏠 Render Home Page
function renderHome() {
  const featuredGrid = document.getElementById('featuredGrid');
  const latestGrid = document.getElementById('latestGrid');

  if (featuredGrid) {
    const featured = POSTS.filter(p => p.featured).slice(0, 3);
    featuredGrid.innerHTML = featured.map(renderPostCard).join('');
  }

  if (latestGrid) {
    const latest = POSTS.slice(0, 6);
    latestGrid.innerHTML = latest.map(renderPostCard).join('');
  }

  // Update article count
  const articleCount = document.getElementById('articleCount');
  if (articleCount) articleCount.textContent = `${POSTS.length}+`;

  // Newsletter form
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input').value;
      // Store locally — no server needed
      const subscribers = JSON.parse(localStorage.getItem('neolog_subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('neolog_subscribers', JSON.stringify(subscribers));
      }
      form.innerHTML = '<p style="color: var(--accent); font-weight: 600;">✅ You\'re subscribed! Welcome to the future.</p>';
    });
  }
}

// 📋 Render Posts List Page
function renderPostsList() {
  const urlParams = new URLSearchParams(window.location.search);
  const activeCat = urlParams.get('cat');
  const activePost = urlParams.get('id');

  // Single article view
  if (activePost) {
    const post = POSTS.find(p => p.id === activePost);
    if (post) {
      renderArticle(post);
      return;
    }
  }

  const container = document.getElementById('postsContainer');
  const filterBar = document.getElementById('filterBar');
  if (!container) return;

  // Build filter bar
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ai-tech', label: '🤖 AI & Tech' },
    { id: 'sci-fi', label: '🚀 Sci-Fi' },
    { id: 'movies', label: '🎬 Movies' },
    { id: 'stories', label: '✍️ Stories' }
  ];

  if (filterBar) {
    filterBar.innerHTML = categories.map(cat =>
      `<button class="filter-btn ${(!activeCat || activeCat === cat.id) && cat.id === 'all' ? 'active' : activeCat === cat.id ? 'active' : ''}"
              onclick="filterPosts('${cat.id}')">${cat.label}</button>`
    ).join('');
  }

  // Filter and render
  const filtered = activeCat && activeCat !== 'all'
    ? POSTS.filter(p => p.category === activeCat)
    : POSTS;

  container.innerHTML = filtered.length
    ? filtered.map(renderPostCard).join('')
    : '<p style="text-align: center; padding: 60px 0; color: var(--text-muted);">No articles in this category yet. Check back soon!</p>';
}

// 🔍 Filter Posts
function filterPosts(cat) {
  const url = cat === 'all' ? '/posts/' : `/posts/?cat=${cat}`;
  window.location.href = url;
}

// 📄 Render Single Article
function renderArticle(post) {
  const container = document.getElementById('postsContainer');
  if (!container) return;

  document.title = `${post.title} — NeoLog`;

  container.innerHTML = `
    <article class="article">
      <header class="article-header">
        <span class="post-card-category">${post.categoryLabel}</span>
        <h1 class="article-title">${post.title}</h1>
        <div class="article-meta">
          <span class="post-card-author">${post.author.charAt(0).toUpperCase()}</span>
          <span>${post.author} · ${post.date} · ${post.readingTime}</span>
        </div>
      </header>
      <div class="article-body">
        ${post.content}
      </div>
      <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); text-align: center;">
        <a href="/posts/" class="btn btn-secondary">← Back to Articles</a>
        <button class="btn btn-primary" style="margin-left: 12px;" onclick="window.print()">🖨️ Print</button>
      </div>
    </article>
  `;
}

// 🚀 Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  renderPostsList();
});

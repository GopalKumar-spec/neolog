# 🛠️ NEO LOG — ADMIN EXPERT GUIDE
## Hidden Paths & Commands for Site Controls
### Easy Language — You Control Everything

> 🔐 **SECRET:** This file lives ONLY on your MacBook (never on GitHub).
> Keep it safe. Share with NO ONE.

---

## 📍 PART 1: YOUR WEBSITE CONTROL PANELS

### 🌐 Live Site Panel
| What | URL | What You Can Do |
|------|-----|----------------|
| **Home** | `https://gopalkumar-spec.github.io/neolog/` | See all published articles |
| **Admin Panel** | `https://gopalkumar-spec.github.io/neolog/admin/` | ✏️ **Write, edit, delete posts** — GUI clicks |
| **→ Expert Tab** | Click **🔒 Expert** in Admin Panel | 🕵️ **Secret commands** — Quick publish, pipeline, cron, emergency |
| **Stats Dashboard** | `https://gopalkumar-spec.github.io/neolog/dashboard.html` | 📊 View counts, popular articles, income tracking |
| **All Articles** | `https://gopalkumar-spec.github.io/neolog/posts/` | 📖 Browse by category filter |
| **RSS Feed** | `https://gopalkumar-spec.github.io/neolog/feed.xml` | 📡 For subscribers to follow you |

### 🔐 Hidden Admin URLs (No Login Needed — Just Your Secret Path)
| Secret Path | Opens |
|------------|-------|
| `/neolog/admin/` | **Full Admin Panel** — Add/Edit/Delete articles |
| `/neolog/dashboard.html` | **Secret Stats Dashboard** — See all analytics |

> ⚠️ These are "hidden in plain sight" — not linked from main pages but directly accessible if you know the URL.

---

## 📍 PART 2: YOUR MACBOOK CONTROL — WHERE THINGS LIVE

### 📁 Main Website Folder
```
Open → /Users/gk/Documents/website/
```
This is YOUR control center. Everything is here.

### 📁 What's Inside Each File
| File | What It Does | How You Edit |
|------|-------------|-------------|
| `index.html` | **Homepage design** | Open in TextEdit — change text, colors |
| `js/posts.js` | **ALL 10+ articles** (titles, content, categories) | **This is your main content file** |
| `js/main.js` | **Theme toggle, animations, filters** | Don't touch unless you know code |
| `css/style.css` | **Colors, fonts, spacing** | Change colors, fonts, sizes |
| `admin/index.html` | **Admin panel** — Add/Edit posts via GUI | Open in browser — click to use |
| `dashboard.html` | **Stats dashboard** — see article performance | Open in browser |
| `about.html` | **About page content** | Edit text directly |
| `contact.html` | **Contact page** | Edit text directly |
| `pipeline.py` | **Auto-writes 2 new articles every M/W/F** | Let it run — auto magician! |
| `feed.xml` | **RSS feed** for followers | Auto-updates when you add articles |
| `exports/` | **Ready-to-publish files** for Medium & WordPress | Copy & paste |
| `SECURE_NOTEBOOK.md` | 🔒 **Your secret passwords & accounts** | Permission 600 — Only You |

---

## 📍 PART 3: SECRET COMMANDS (Quick Actions)

### 🚀 Quick Publish — When You Want to Push Changes
Use **Terminal** (search "Terminal" on Mac) and type:

```bash
# Step 1: Go to website folder
cd /Users/gk/Documents/website

# Step 2: See what changed
git status

# Step 3: Save everything to GitHub
git add -A
git commit -m "update articles"
git push

# ✅ That's it — site updates in 30 seconds!
```

### 📝 Add a New Article Manually
**Easy way — Use Admin Panel (no code needed):**
1. Open `https://gopalkumar-spec.github.io/neolog/admin/`
2. Click "New Post" tab
3. Fill: Title, Content (HTML), Category, Author
4. Click "Save Post"
5. Run the commands above to publish

**Expert way — Edit posts.js directly:**
1. Open `/Users/gk/Documents/website/js/posts.js` in TextEdit
2. Find the `POSTS` array
3. Add at the top (before the closing `];`):
   ```js
   {
     id: "my-new-article",
     title: "My Amazing Article Title",
     excerpt: "Short description for readers...",
     category: "ai-tech",   // or "movies", "sci-fi", "stories"
     categoryLabel: "🤖 AI & Tech",
     date: "2026-06-14",
     author: "GKJ",
     readingTime: "5 min read",
     featured: false,
     image: null,
     content: `<p>Your article HTML content here...</p>`
   },
   ```
4. Save the file
5. Run `git add -A && git commit -m "new article" && git push`

### 🔄 Run the Auto-AI Pipeline (Generates 2 New Articles)
```bash
cd /Users/gk/Documents/website
python3 pipeline.py
```
This will:
- ✅ Look at what articles perform best
- ✅ Pick 2 hot topics
- ✅ Write 2 full articles
- ✅ Save them to posts.js
- ✅ Push to your live site automatically

### 📊 See Your Stats
```bash
open https://gopalkumar-spec.github.io/neolog/dashboard.html
```
Shows: total articles, views, popular topics, income tracking.

### 🎨 Change Site Colors/Theme
Edit `css/style.css` — look for:
```css
:root {
  --accent: #6366f1;     /* ← Change this purple to your color */
  --bg-primary: ...       /* ← Background colors */
  --text-primary: ...     /* ← Text colors */
}
```
Use a color picker online (search "html color picker") to find your favorite hex code.

---

## 📍 PART 4: 3-PLATFORM PUBLISHING

### 📱 Medium
| Step | Action |
|------|--------|
| 1 | Open `https://medium.com` → Login |
| 2 | Click "Write a story" |
| 3 | Open `exports/medium-article-1.md` in TextEdit |
| 4 | Copy ALL content → Paste into Medium editor |
| 5 | Add cover image (search "Project Hail Mary" on Unsplash) |
| 6 | Add tags: Sci-Fi, Movies, Review, AI, Technology |
| 7 | Click "Publish" |
| 8 | Wait 30 days → Join Medium Partner Program → Earn ₹ |

### 📘 WordPress
| Step | Action |
|------|--------|
| 1 | Open `https://neolog.wordpress.com/wp-admin` |
| 2 | Go to Posts → Add New |
| 3 | Click "Text" tab (not Visual) |
| 4 | Open `exports/wordpress-article-1.html` in TextEdit |
| 5 | Copy ALL → Paste into WordPress editor |
| 6 | Add featured image |
| 7 | Set categories: Movies, Sci-Fi |
| 8 | Add SEO title & description |
| 9 | Click "Publish" |

### 🐙 GitHub (Your main website) — Auto-Deployed
Everything you save in `/Users/gk/Documents/website/` and push → auto-goes live at:
```
https://gopalkumar-spec.github.io/neolog/
```
No extra steps needed.

---

## 📍 PART 5: CRON JOBS — AUTOMATION SCHEDULE

These run automatically on your MacBook. You don't need to do anything.

| Job | When | What It Does |
|-----|------|-------------|
| `neolog-daily-stats` | **Every day 6am** | Updates your dashboard numbers |
| `neolog-content-pipeline` | **Mon/Wed/Fri 8am** | Writes 2 new articles using AI |

To check if they're running:
```bash
hermes cron list
```

To stop a job:
```bash
hermes cron remove JOB_ID
```

To run a job right now (test):
```bash
hermes cron run JOB_ID
```

---

## 📍 PART 6: QUICK REFERENCE — ONE-LINERS

| What You Want | One Command to Type in Terminal |
|--------------|--------------------------------|
| **Preview site locally** | `cd /Users/gk/Documents/website && python3 -m http.server 4000` → open `http://localhost:4000` |
| **Publish changes** | `cd /Users/gk/Documents/website && git add -A && git commit -m "update" && git push` |
| **Add new article** | Open `js/posts.js` → add entry → save → run publish command |
| **Run AI content pipeline** | `cd /Users/gk/Documents/website && python3 pipeline.py` |
| **See live site** | Open `https://gopalkumar-spec.github.io/neolog/` |
| **Open admin panel** | Open `https://gopalkumar-spec.github.io/neolog/admin/` |
| **Open secret notebook** | `open /Users/gk/Documents/website/SECURE_NOTEBOOK.md` |
| **Check all cron jobs** | `hermes cron list` |
| **Check git status** | `cd /Users/gk/Documents/website && git status` |
| **Fix git if stuck** | `cd /Users/gk/Documents/website && git pull --rebase && git push` |

---

## 📍 PART 7: SAFETY & SECURITY

### ✅ DO
- ✓ Edit `js/posts.js` for article changes
- ✓ Use Admin Panel (`/admin/`) for visual editing
- ✓ Run `python3 pipeline.py` to auto-generate content
- ✓ Keep `SECURE_NOTEBOOK.md` closed when not using
- ✓ Use `git status` before committing to check what changed

### ❌ DON'T
- ✗ Never share `SECURE_NOTEBOOK.md` with anyone
- ✗ Don't delete `SECURE_NOTEBOOK.md` — it has all your passwords
- ✗ Don't push without `git status` check first
- ✗ Don't edit `js/main.js` or `css/style.css` without backup

### 🔄 If Something Breaks
```bash
# Undo your last change and restore everything
cd /Users/gk/Documents/website
git checkout -- .
# This resets all files to the last saved version on GitHub
```

### 📞 Emergency Commands
```bash
# Stop all auto-jobs
hermes cron list           # See all job IDs
hermes cron remove JOB_ID  # Stop one job

# Full site reset from GitHub
cd /Users/gk/Documents/website
git fetch origin
git reset --hard origin/main
# ⚠️ This wipes ALL your local changes and resets to GitHub version
```

---

> **⚡ NeoLog by GKJ · GOD PARTICLE**
> *Built on MacBook M4 Pro. Zero cloud dependency. Zero VC funding. Pure creative engineering.*
>
> *Last updated: June 14, 2026*

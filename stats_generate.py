#!/usr/bin/env python3
"""
NeoLog — Daily Stats Generator
Run by Hermes cron to update operations dashboard data
Zero cloud dependency — all data stays on MacBook
"""
import json, os, subprocess
from datetime import date
from pathlib import Path

WEBSITE_DIR = Path("/Users/gk/Documents/website")
STATS_FILE = WEBSITE_DIR / "js" / "stats_data.js"
LOG_FILE = WEBSITE_DIR / "data" / "content_log.json"

def get_post_count():
    """Count posts from posts.js"""
    posts_js = WEBSITE_DIR / "js" / "posts.js"
    if posts_js.exists():
        content = posts_js.read_text()
        return content.count('id: "')
    return 0

def get_disk_usage():
    """Check website disk footprint"""
    result = subprocess.run(
        ["du", "-sh", str(WEBSITE_DIR)],
        capture_output=True, text=True
    )
    return result.stdout.strip().split()[0] if result.returncode == 0 else "N/A"

def get_git_status():
    """Check last commit"""
    result = subprocess.run(
        ["git", "log", "--oneline", "-1"],
        cwd=WEBSITE_DIR, capture_output=True, text=True
    )
    return result.stdout.strip() if result.returncode == 0 else "Not a git repo"

def generate_stats():
    """Generate comprehensive stats for the dashboard"""
    post_count = get_post_count()
    disk = get_disk_usage()
    git = get_git_status()
    
    stats = {
        "generated": str(date.today()),
        "total_posts": post_count,
        "categories": {},
        "disk_usage": disk,
        "last_commit": git,
        "platforms": {
            "github_pages": "Live (setup when you create GitHub account)",
            "medium": "Ready to create",
            "wordpress_com": "Ready to create"
        },
        "monetization": {
            "amazon_associates": "Ready to apply",
            "medium_partner": "Ready after 1st article",
            "shareasale": "Ready to apply"
        }
    }
    
    # Save stats for dashboard to read
    STATS_FILE.parent.mkdir(exist_ok=True)
    os.makedirs(WEBSITE_DIR / "data", exist_ok=True)
    
    # Write as JS for the dashboard to consume
    js_content = f"""// Auto-generated stats — updated daily by Hermes cron
const NEO_LOG_STATS = {json.dumps(stats, indent=2)};
"""
    STATS_FILE.write_text(js_content)
    
    # Update content log
    log_entry = {
        "date": str(date.today()),
        "action": f"📊 Stats updated: {post_count} posts, {disk} disk"
    }
    
    log = []
    if LOG_FILE.exists():
        log = json.loads(LOG_FILE.read_text())
    log.append(log_entry)
    # Keep last 100 entries
    log = log[-100:]
    LOG_FILE.write_text(json.dumps(log, indent=2))
    
    print(f"✅ Stats generated: {post_count} posts, {disk}")
    print(f"   Last commit: {git}")
    print(f"   Log entries: {len(log)}")

if __name__ == "__main__":
    generate_stats()

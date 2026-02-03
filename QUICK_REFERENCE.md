# 🎯 QUICK REFERENCE CARD

## Keep this handy while you customize your quiz!

### Essential Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `src/data/quizData.json` | All quiz content | Before testing |
| `README.md` | Full documentation | For your reference |
| `SETUP.md` | Quick customization | First time setup |
| `EDIT_QUIZ_DATA.md` | JSON editing guide | While editing content |

### Three Simple Steps to Deploy

```bash
# 1. Customize your quiz
Edit src/data/quizData.json

# 2. Test locally
npm run dev

# 3. Deploy
git add .
git commit -m "Anniversary surprise"
git push origin main
```

### Quiz Question Template

Copy-paste this for each question:

```json
{
  "id": 1,
  "question": "Your question here?",
  "options": ["Correct Answer", "Wrong 1", "Wrong 2", "Wrong 3"],
  "correctAnswer": 0,
  "wrongFeedback": ["Witty message 1 😄", "Witty message 2 🤔"],
  "imageUrl": "optional-image-url"
}
```

### Command Cheat Sheet

```bash
# Local Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview the build

# Git/GitHub
git init                # Initialize git
git add .              # Stage all files
git commit -m "..."    # Commit changes
git push               # Push to GitHub
```

### Score-to-Message Mapping

| Score | Message Type | Range |
|-------|-------------|-------|
| 💯 | perfect | 100% |
| 🌟 | excellent | 87-99% |
| 💕 | great | 75-86% |
| 😊 | good | 62-74% |
| 🤔 | okay | 50-61% |
| 😅 | needsWork | <50% |

### Customization Checklist

```
BEFORE TESTING:
☐ Updated couple names
☐ Updated together date
☐ Updated married date
☐ Wrote all 8 questions
☐ Set correct answers
☐ Added photo URLs
☐ Customized messages

BEFORE DEPLOYING:
☐ Tested locally works
☐ Tested on mobile
☐ Tested all quiz paths
☐ Checked confetti works
☐ Created GitHub repo
☐ Verified live URL works
```

### Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| `npm` command not found | Install Node.js from nodejs.org |
| JSON error | Check on jsonlint.com |
| Images not showing | Verify image URLs work in browser |
| Quiz won't start | Check browser console (F12) |
| Deployment failing | Check GitHub Actions tab for errors |

### Image URL Formats That Work

✅ Direct image links:
```
https://imgur.com/abc123.jpg
https://images.example.com/photo.png
```

❌ Avoid (won't work):
```
C:\Users\Pictures\photo.jpg
/local/path/photo.jpg
```

### Color Customization Quick Reference

Find this in `src/index.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Try these:
- **Romantic Red**: `#ff6b6b` → `#ff8e72`
- **Ocean Blue**: `#2196F3` → `#1976D2`
- **Sunset**: `#FF6B6B` → `#FFD93D`
- **Forest**: `#52B788` → `#2D6A4F`

### GitHub Pages URL Format

```
https://YOUR_GITHUB_USERNAME.github.io/anniversary-surprise/
```

Example:
```
https://sourabh.github.io/anniversary-surprise/
```

### File Size Reference

Your final site should be:
- HTML: ~0.5 KB
- CSS: ~8 KB (2.2 KB gzipped)
- JS: ~200 KB (64 KB gzipped)
- **Total: ~200KB compressed** ✅

### Common Customizations

**Change all feedback colors:**
1. Edit `.option-button.correct` in `QuestionCard.css`
2. Edit `.option-button.incorrect`
3. Edit `.feedback-correct` and `.feedback-incorrect`

**Add new summary message:**
1. Open `quizData.json`
2. Find `summaryMessages`
3. Add new category and message

**Adjust confetti speed:**
1. Open `Confetti.jsx`
2. Find `piece.vy += 0.2`
3. Increase for faster, decrease for slower

### Gallery of Popular Messages

**Correct Answer:**
```
✨ That's right! You know us so well! 💕
Nailed it! 🎯
You're amazing! 💫
```

**Wrong Answer:**
```
Nope! But that's a good guess 😄
Close, but not quite! 🤔
Not this time, honey! 💕
```

**Perfect Score:**
```
Perfect! You know me like nobody else! 💯
You're the best! 🏆
I love you so much! 💕
```

### Performance Tips

1. Use optimized images (< 500KB each)
2. Keep message text short
3. Test on slow mobile connection
4. Avoid too many special characters
5. Keep emoji count reasonable

### Keyboard Shortcuts

```
Ctrl+Shift+P    Open npm script menu (VS Code)
Ctrl+Shift+Del  Clear browser cache
F12             Open developer console
Ctrl+R          Refresh page
Ctrl+Shift+R    Hard refresh
```

### Support Resources

- React docs: reactjs.org
- Vite docs: vitejs.dev
- GitHub Pages: pages.github.com
- This repo guides: README.md, SETUP.md, EDIT_QUIZ_DATA.md

---

**Keep this open while working! 📌**

Print it or bookmark it for quick reference!

**Happy coding! 💕**

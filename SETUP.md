# 🎁 Quick Setup Guide - Anniversary Surprise Quiz

## Welcome! Let's customize your quiz quickly.

### Step 1: Update Quiz Data
Open `src/data/quizData.json` and update:

1. **Your names and dates** (top section):
```json
"name1": "Sourabh",
"name2": "Aditi",
"togetherSince": "February 8, 2016",
"marriedSince": "February 5, 2022"
```

2. **Replace placeholder questions** with your actual questions:
   - Update the `question` text
   - Update the `options` array (4 choices)
   - Set the `correctAnswer` index (0, 1, 2, or 3)
   - Customize `wrongFeedback` messages

Example:
```json
{
  "id": 1,
  "question": "What's our go-to comfort food we share?",
  "options": ["Your answer", "Wrong 1", "Wrong 2", "Wrong 3"],
  "correctAnswer": 0,
  "wrongFeedback": [
    "Nope! 😄",
    "Not this one! 🤔"
  ]
}
```

### Step 2: Add Your Photos
1. Upload your photos to Imgur or Google Photos (make them public/shareable)
2. Get the direct image URL
3. Update the `imageUrl` in questions 5, 6, 7, 8:
```json
"imageUrl": "https://your-image-url-here.com/photo.jpg"
```

### Step 3: Customize Messages
Edit the `summaryMessages` in the JSON file to add personal touches:
```json
"perfect": "Perfect! You know me like nobody else! 💯",
"excellent": "Excellent! You remember all the important things! 💕"
```

### Step 4: Test Locally
```bash
npm run dev
```
Open `http://localhost:5173/` and test the quiz!

### Step 5: Deploy to GitHub Pages

1. **Create a GitHub repository** named `anniversary-surprise`
2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Anniversary surprise quiz"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/anniversary-surprise.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source
   - The site will deploy automatically!

4. **Access your quiz**:
   - `https://YOUR_USERNAME.github.io/anniversary-surprise/`
   - Share this link with Aditi! 💕

## 🎨 Optional: Customize Colors

If you want to change the purple/pink theme:

Edit `src/index.css` and change the gradient:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Try these color combinations:
- **Romantic Red**: `#ff6b6b` to `#ff8e72`
- **Ocean Blue**: `#2196F3` to `#1976D2`
- **Sunset**: `#FF6B6B` to `#FFD93D`
- **Forest Green**: `#52B788` to `#2D6A4F`

## ✅ Checklist Before Sharing

- [ ] Updated all 8 questions in `quizData.json`
- [ ] Added correct answers for each question
- [ ] Added photo URLs for photo questions
- [ ] Tested quiz locally with `npm run dev`
- [ ] Checked quiz on mobile
- [ ] Pushed to GitHub
- [ ] GitHub Pages deployed successfully
- [ ] Tested the live URL
- [ ] Shared the link with Aditi!

## 🎯 Pro Tips

1. **Test Your Answers**: Click "Take Quiz Again" to verify answers
2. **Use Real Photos**: High-quality photos make it more special
3. **Personalize Messages**: The witty feedback makes it fun!
4. **Mobile First**: Test on phone before sharing
5. **Keep It Private**: Share the link only with your partner

## 🆘 Troubleshooting

**Quiz not showing?**
- Check browser console (F12) for errors
- Ensure all image URLs are correct

**GitHub Pages not working?**
- Check repository settings → Pages
- Ensure branch is "main"
- Wait 1-2 minutes for deployment

**Styles look broken?**
- Clear browser cache (Ctrl+Shift+Del)
- Refresh the page (Ctrl+Shift+R)

---

Happy Anniversary! 🎉💕


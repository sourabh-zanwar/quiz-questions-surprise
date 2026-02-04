# 💕 Anniversary Surprise Quiz

A beautiful, interactive anniversary quiz web application built with React and Vite. Designed as a romantic surprise for your partner!

## 🌟 Features

- **Interactive Quiz**: 8 engaging questions about your relationship
- **Photo Gallery**: Display memories from your favorite moments
- **Progress Tracking**: Visual progress bar to show quiz completion
- **Smart Feedback**: Witty and playful feedback for both correct and incorrect answers
- **Final Proposal**: Special "Will you marry me again?" question with a fun evading button
- **Confetti Animation**: Celebratory confetti when the final "Yes" is selected
- **Score Summary**: Personalized results page based on quiz performance
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **GitHub Pages Ready**: Easy one-click deployment

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/sourabh-zanwar/quiz-questions-surprise.git
cd quiz-questions-surprise

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🛠️ Customization

### Update Quiz Questions

Edit `src/data/quizData.json` to customize:

1. **Couple Information**:
```json
{
  "couple": {
    "name1": "Your Name",
    "name2": "Partner Name",
    "togetherSince": "Date together",
    "marriedSince": "Wedding date",
    "yearsTogetherApprox": 10
  }
}
```

2. **Quiz Questions**: Each question has:
   - `question`: The question text
   - `options`: Array of 4 multiple choice answers
   - `correctAnswer`: Index of the correct answer (0-3)
   - `wrongFeedback`: Array of witty messages for wrong answers
   - `imageUrl`: (Optional) URL to display an image

Example:
```json
{
  "id": 1,
  "question": "What's our favorite restaurant?",
  "options": ["Pizza Place", "Indian Restaurant", "French Bistro", "Sushi Bar"],
  "correctAnswer": 1,
  "wrongFeedback": [
    "Nope! But that's a good guess 😄",
    "Close, but not quite! 🤔"
  ]
}
```

### Add Photos

1. Replace placeholder image URLs in `quizData.json` with your actual image URLs
2. You can host images on:
   - Imgur
   - Google Photos (shareable link)
   - Any image hosting service
   - Or upload to your own server

Example:
```json
{
  "id": 5,
  "question": "When is this photo from?",
  "imageUrl": "https://your-image-url.com/photo.jpg",
  "options": ["2016", "2017", "2018", "2019"],
  "correctAnswer": 0
}
```

### Customize Messages

Edit the `summaryMessages` in `quizData.json` to personalize results messages:

```json
{
  "perfect": "Your custom perfect score message!",
  "excellent": "Your custom excellent message!",
  "great": "Your custom great message!",
  "good": "Your custom good message!",
  "okay": "Your custom okay message!",
  "needsWork": "Your custom improvement message!"
}
```

## 🎨 Styling

The design is modern and minimalist. Global design tokens are in `src/index.css`:

- `--bg`: app background
- `--panel`: surfaces/cards
- `--text`: primary text
- `--muted`: secondary text
- `--border`: subtle borders
- `--accent`: primary accent (blue)
- `--accent-weak`: light accent background

Adjust component styles here:
- `src/components/Quiz.css`
- `src/components/QuestionCard.css`
- `src/components/FinalQuestion.css`
- `src/components/Results.css`
- `src/components/MemoryTimeline.css`

## 📦 Build & Deploy

### Local Build

```bash
npm run build
```

This creates a `dist` folder with production-ready files.

### Deploy to GitHub Pages

1. Make sure your repository is pushed to GitHub.
2. Ensure the `base` in `vite.config.js` matches your repo name (already set to `/quiz-questions-surprise/`).
3. Run:

```bash
npm run deploy
```

This will build the project and deploy the `dist` folder to the `gh-pages` branch. Your site will be live at:

```
https://sourabh-zanwar.github.io/quiz-questions-surprise/
```

If you change your repository name, update the `base` in `vite.config.js` accordingly.

### Set the Git remote

If needed, set the Git remote to the correct URL:

```bash
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/sourabh-zanwar/quiz-questions-surprise.git
git branch -M main
git push -u origin main
```

### Manual Deployment

```bash
npm run build
npm run deploy
```

(Requires `gh-pages` package)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎯 Tips for the Best Experience

1. **Choose Quality Photos**: Use high-quality images (300px width minimum)
2. **Test the Quiz**: Go through all questions before showing your partner
3. **Personalize Everything**: Update names, dates, and messages
4. **Mobile Testing**: Test on mobile devices before sharing
5. **Share Privately**: Share the link only with your partner

## 🎉 Special Features Explained

### The Evading "No" Button
- When the cursor gets close to the "No" button, it automatically moves away
- This creates a fun, playful interaction that encourages clicking "Yes"
- The button moves smoothly with a physics-based animation

### Confetti Animation
- Beautiful falling confetti appears when "Yes" is selected
- Canvas-based animation for smooth performance
- Automatically disappears after 5 seconds

### Witty Feedback
- Each wrong answer can have multiple different responses
- A random response is selected each time for variety
- Encourages retaking the quiz

## 🔧 Technical Details

- **Framework**: React 18 with Hooks
- **Build Tool**: Vite
- **Styling**: Pure CSS with animations
- **Deployment**: GitHub Pages + GitHub Actions
- **Performance**: Optimized builds, ~200KB gzipped

## 📄 License

This project is personal and made with love. Feel free to customize and use for your anniversary!

## 🤝 Support

For issues or questions, refer to the code comments or reach out!

---

**Made with ❤️ for your special someone**

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

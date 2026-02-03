# 🚀 DEPLOYMENT CHECKLIST

Use this checklist to ensure everything is perfect before sharing with Aditi!

## Phase 1: Content Creation (Before Testing)

- [ ] **Review quizData.json structure**
  - Location: `src/data/quizData.json`
  - Read: `EDIT_QUIZ_DATA.md` for detailed guide

- [ ] **Update couple information**
  - [ ] Your name
  - [ ] Aditi's name
  - [ ] Date you got together
  - [ ] Date you got married
  - [ ] Approximate years together

- [ ] **Write 8 quiz questions**
  - [ ] Question 1: Comfort food
  - [ ] Question 2: First date movie
  - [ ] Question 3: Song for first dance
  - [ ] Question 4: How long together
  - [ ] Question 5: Photo - When
  - [ ] Question 6: Photo - Where
  - [ ] Question 7: Photo - When
  - [ ] Question 8: Photo - Where

- [ ] **For each question**
  - [ ] Write engaging question text
  - [ ] Add 4 options (1 correct, 3 wrong)
  - [ ] Mark correct answer (0, 1, 2, or 3)
  - [ ] Add 2-3 funny wrong-answer messages

- [ ] **Add photos**
  - [ ] Upload 2 photos to Imgur/Google Photos
  - [ ] Get shareable URLs
  - [ ] Replace placeholder URLs in questions 5-8
  - [ ] Test that images load

- [ ] **Customize messages**
  - [ ] Update 6 summary messages for different scores
  - [ ] Update 4 celebration messages for "yes"
  - [ ] Make them personal and romantic

## Phase 2: Local Testing

- [ ] **Start development server**
  ```bash
  npm run dev
  ```
  - [ ] Server starts without errors
  - [ ] Available at http://localhost:5173/anniversary-surprise/

- [ ] **Test quiz flow**
  - [ ] Landing page loads smoothly
  - [ ] Questions display correctly
  - [ ] Progress bar updates
  - [ ] Question counter shows correct number
  - [ ] All images load properly

- [ ] **Test interactions**
  - [ ] Can select answers
  - [ ] Feedback shows for correct answers (green)
  - [ ] Feedback shows for wrong answers (red)
  - [ ] Witty messages appear randomly
  - [ ] Next question loads after 1 second

- [ ] **Test final question**
  - [ ] "Will you marry me again?" displays
  - [ ] "Yes" button works and shows confetti
  - [ ] "No" button evades cursor smoothly
  - [ ] "No" button moves in random directions
  - [ ] "No" button has extra push on hover

- [ ] **Test results page**
  - [ ] Score displays correctly (e.g., 7/8)
  - [ ] Percentage shows (e.g., 87%)
  - [ ] Correct summary message shows based on score
  - [ ] Confetti animation plays
  - [ ] "Take Quiz Again" button works

- [ ] **Test restart functionality**
  - [ ] Can take quiz again after completing
  - [ ] Can get different scores
  - [ ] Different wrong-answer messages appear
  - [ ] All messages vary appropriately

- [ ] **Mobile testing**
  - [ ] Open on smartphone
  - [ ] Touch interactions work
  - [ ] Layout looks good on small screen
  - [ ] Buttons are easy to tap
  - [ ] Images fit well
  - [ ] No overflow or scrolling issues

- [ ] **Browser compatibility**
  - [ ] Works on Chrome
  - [ ] Works on Firefox
  - [ ] Works on Safari
  - [ ] Works on Edge

## Phase 3: Preparation for Deployment

- [ ] **Initialize Git repository**
  ```bash
  git init
  ```

- [ ] **Create GitHub repository**
  - [ ] Go to github.com/new
  - [ ] Create repository named: `anniversary-surprise`
  - [ ] Set to public (so she can access it)
  - [ ] Don't initialize with README

- [ ] **Build for production**
  ```bash
  npm run build
  ```
  - [ ] No errors in build output
  - [ ] `dist/` folder created
  - [ ] Check: dist/index.html exists
  - [ ] Check: dist/assets/ has CSS and JS files

## Phase 4: GitHub Deployment

- [ ] **Add files to Git**
  ```bash
  git add .
  ```

- [ ] **Create initial commit**
  ```bash
  git commit -m "Anniversary surprise quiz for Aditi"
  ```

- [ ] **Add remote repository**
  ```bash
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/anniversary-surprise.git
  ```

- [ ] **Push to GitHub**
  ```bash
  git push -u origin main
  ```
  - [ ] All files uploaded successfully
  - [ ] Check on GitHub that files are there

- [ ] **Enable GitHub Pages**
  - [ ] Go to repository Settings
  - [ ] Scroll to "Pages" section
  - [ ] Select source: "GitHub Actions"
  - [ ] Wait 1-2 minutes for deployment
  - [ ] Check Actions tab to see deployment status

- [ ] **Verify deployment**
  - [ ] Check workflow status in Actions tab
  - [ ] Look for green checkmark ✅
  - [ ] If red ❌, check logs for errors

## Phase 5: Final Verification

- [ ] **Access live site**
  - [ ] Go to: https://YOUR_USERNAME.github.io/anniversary-surprise/
  - [ ] Replace YOUR_USERNAME with your GitHub username
  - [ ] Site loads without errors
  - [ ] All content displays correctly

- [ ] **Test on live site**
  - [ ] Take the quiz fully
  - [ ] Verify all answers are correct
  - [ ] Check images load
  - [ ] Test final question and confetti
  - [ ] Check results page

- [ ] **Test on mobile**
  - [ ] Open live link on smartphone
  - [ ] Go through entire quiz
  - [ ] All features work on mobile
  - [ ] Layout looks good

- [ ] **Make any last-minute changes**
  - If needed:
    ```bash
    # Edit quizData.json
    npm run build
    git add .
    git commit -m "Update quiz content"
    git push
    # Wait 1-2 minutes for auto-deploy
    ```

## Phase 6: Share With Aditi! 🎉

- [ ] **Copy the link**
  - [ ] Your quiz URL: `https://YOUR_USERNAME.github.io/anniversary-surprise/`

- [ ] **Choose perfect moment**
  - [ ] Calm moment
  - [ ] Private setting
  - [ ] She has time to complete it

- [ ] **Share the link**
  - [ ] Via text, email, or person
  - [ ] Include a romantic note
  - [ ] Let her know it's interactive

- [ ] **Watch her reaction!**
  - [ ] Stay nearby (optional)
  - [ ] Be ready to help if needed
  - [ ] Enjoy her smile! 💕

## 🆘 Troubleshooting Checklist

### Site won't load
- [ ] Check URL spelling
- [ ] Check GitHub username in URL
- [ ] Clear browser cache (Ctrl+Shift+Del)
- [ ] Wait 5 minutes for deployment
- [ ] Check Actions tab for deployment errors

### Quiz not working
- [ ] Check browser console (F12)
- [ ] Look for red error messages
- [ ] Verify quizData.json is valid JSON
- [ ] Check all image URLs work

### Images not showing
- [ ] Verify image URLs are accessible
- [ ] Try opening URL directly in browser
- [ ] Check for typos in URLs
- [ ] Use direct image links (not page links)

### Styling looks broken
- [ ] Clear browser cache
- [ ] Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Check CSS files weren't deleted

### Deployment fails
- [ ] Check Actions tab for error messages
- [ ] Verify branch is named "main"
- [ ] Check vite.config.js has correct base path
- [ ] Ensure no node_modules in git

## 📞 Quick Help

- **Full README**: Open `README.md`
- **Setup Guide**: Open `SETUP.md`
- **Edit Quiz Data**: Open `EDIT_QUIZ_DATA.md`
- **This Checklist**: You're reading it!

---

## Final Status

When all items are checked:
✅ Your quiz is perfect
✅ It's deployed and live
✅ It's ready to share
✅ Go make Aditi smile! 💕

---

**Happy Anniversary! You've got this! 🎉**

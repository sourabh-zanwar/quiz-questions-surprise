# 📋 How to Edit quizData.json

This file contains all your quiz content. Here's a complete guide with examples.

## File Location
`src/data/quizData.json`

## Structure Overview

The file has 3 main sections:

### 1. Couple Information
```json
{
  "couple": {
    "name1": "Sourabh",
    "name2": "Aditi", 
    "togetherSince": "February 8, 2016",
    "marriedSince": "February 5, 2022",
    "yearsTogetherApprox": 10
  }
}
```

**Update with:**
- Your names (name1, name2)
- Date you started dating
- Date you got married
- Approximate years together

### 2. Questions Array
Each question object has this structure:

```json
{
  "id": 1,
  "question": "What's our go-to comfort food we share?",
  "options": [
    "Biryani",           // Correct answer (index 0)
    "Pizza",             // Wrong answers
    "Pasta",
    "Sushi"
  ],
  "correctAnswer": 0,   // Index of correct option (0-3)
  "wrongFeedback": [    // Random messages for wrong answers
    "Nope! But that's a good guess 😄",
    "Close, but not quite! 🤔",
    "Not this time, honey! 💕"
  ]
}
```

### 3. Photo Questions
Photo questions are the same, but include an image:

```json
{
  "id": 5,
  "question": "When is this photo from?",
  "imageUrl": "https://via.placeholder.com/400x300?text=Photo+1",
  "options": ["2016", "2017", "2018", "2019"],
  "correctAnswer": 1,
  "wrongFeedback": [
    "Not that year! 📸",
    "Wrong year, sweetie! 🖼️",
    "Nope! Try again! 📷"
  ]
}
```

**To add real photos:**
1. Upload image to Imgur or Google Photos
2. Get the shareable/direct URL
3. Replace the placeholder URL

### 4. Final Question
```json
{
  "finalQuestion": {
    "question": "Will you marry me again?",
    "correctAnswer": "yes",
    "celebrationMessages": [
      "OMG YES! 🎉 You just made me the happiest person alive!",
      "Yes, yes, YES! 💕 Forever with you is all I want!",
      "YESSS! 🥰 Let's do this forever!",
      "Of course YES! 💍 I love you so much!"
    ]
  }
}
```

**Update celebration messages** with personal, romantic phrases!

### 5. Summary Messages
Based on score percentage:

```json
{
  "summaryMessages": {
    "perfect": "Perfect! You know me like nobody else! 💯 I'm the luckiest man alive! 🥰",
    "excellent": "Excellent! You remember all the important things! 💕 I love you so much!",
    "great": "Great score! You've got most of our memories down! 😊 Can't wait to make more!",
    "good": "Good effort! 😄 Let's spend more time together so you remember everything! 💑",
    "okay": "You tried! 😅 But we need a date night soon! ❤️",
    "needsWork": "Uh oh! Time to refresh those memories! 🤔 Let's go on an adventure! 🚀"
  }
}
```

**Customize these messages!** Add inside jokes, pet names, or personal touches.

## Score Ranges

- **100%** → perfect
- **87-99%** → excellent  
- **75-86%** → great
- **62-74%** → good
- **50-61%** → okay
- **Below 50%** → needsWork

## Complete Example with Real Data

```json
{
  "couple": {
    "name1": "Sourabh",
    "name2": "Aditi",
    "togetherSince": "February 8, 2016",
    "marriedSince": "February 5, 2022",
    "yearsTogetherApprox": 10
  },
  "questions": [
    {
      "id": 1,
      "question": "What's our go-to comfort food we share?",
      "options": ["Biryani", "Pizza", "Pasta", "Sushi"],
      "correctAnswer": 0,
      "wrongFeedback": ["Nope! 😄", "Not quite! 🤔", "Try again, love! 💕"]
    },
    {
      "id": 2,
      "question": "What movie did we watch on our first date?",
      "options": ["The Notebook", "Inception", "Titanic", "Interstellar"],
      "correctAnswer": 1,
      "wrongFeedback": ["Good movie! But no 🎬", "That's romantic but no! 💔", "Not this one! 🎞️"]
    },
    {
      "id": 3,
      "question": "What song was playing when we first danced together?",
      "options": ["Perfect by Ed Sheeran", "Thinking Out Loud by Ed Sheeran", "All of Me by John Legend", "The Night We Met by Lord Huron"],
      "correctAnswer": 2,
      "wrongFeedback": ["Beautiful choice! But no 🎵", "Close! 🎶", "Not quite, darling! 💃"]
    },
    {
      "id": 4,
      "question": "How long have we been together?",
      "options": ["8 years", "9 years", "10 years", "11 years"],
      "correctAnswer": 2,
      "wrongFeedback": ["Almost there! 📅", "Close! 🗓️", "Not quite! ⏰"]
    },
    {
      "id": 5,
      "question": "When is this photo from?",
      "imageUrl": "YOUR_IMAGE_URL_HERE",
      "options": ["2016", "2017", "2018", "2019"],
      "correctAnswer": 1,
      "wrongFeedback": ["Not that year! 📸", "Wrong year, sweetie! 🖼️", "Nope! 📷"]
    },
    {
      "id": 6,
      "question": "Where is this photo from?",
      "imageUrl": "YOUR_IMAGE_URL_HERE",
      "options": ["Goa", "Jaipur", "Mumbai", "Bangalore"],
      "correctAnswer": 0,
      "wrongFeedback": ["Wrong place! 🗺️", "Not there! 🧭", "Different spot! ✈️"]
    },
    {
      "id": 7,
      "question": "When is this photo from?",
      "imageUrl": "YOUR_OTHER_IMAGE_URL",
      "options": ["2020", "2021", "2022", "2023"],
      "correctAnswer": 2,
      "wrongFeedback": ["Not that year! 📸", "Close! 🖼️", "Nope! 📷"]
    },
    {
      "id": 8,
      "question": "Where is this photo from?",
      "imageUrl": "YOUR_OTHER_IMAGE_URL",
      "options": ["Manali", "Shimla", "Nainital", "Mussoorie"],
      "correctAnswer": 1,
      "wrongFeedback": ["Wrong place! 🗺️", "Not there! 🧭", "Different spot! ✈️"]
    }
  ],
  "finalQuestion": {
    "question": "Will you marry me again?",
    "correctAnswer": "yes",
    "celebrationMessages": [
      "OMG YES! 🎉 You just made me the happiest person alive!",
      "Yes, yes, YES! 💕 Forever with you is all I want!",
      "YESSS! 🥰 Let's do this forever!",
      "Of course YES! 💍 I love you so much!"
    ]
  },
  "summaryMessages": {
    "perfect": "Perfect! You know me like nobody else! 💯 I'm the luckiest man alive! 🥰",
    "excellent": "Excellent! You remember all the important things! 💕 I love you so much!",
    "great": "Great score! You've got most of our memories down! 😊 Can't wait to make more!",
    "good": "Good effort! 😄 Let's spend more time together so you remember everything! 💑",
    "okay": "You tried! 😅 But we need a date night soon! ❤️",
    "needsWork": "Uh oh! Time to refresh those memories! 🤔 Let's go on an adventure! 🚀"
  }
}
```

## Tips for Writing Questions

1. **Use Specific Details**: "What's our favorite restaurant?" is better than "Do you like food?"
2. **Include Inside Jokes**: Reference funny moments you share
3. **Mix Question Types**: Don't make all questions too easy or too hard
4. **Be Creative with Options**: Make wrong answers plausible but not obvious
5. **Add Emojis**: Make it playful and fun!

## Getting Image URLs

### From Imgur:
1. Upload image to imgur.com
2. Right-click image → Copy image address
3. Use that URL

### From Google Photos:
1. Share the photo
2. Get the share link
3. Copy the image ID from the link

### From Other Services:
- Pixhost, imgbb, or any image hosting service
- Look for "direct link" or "image URL"

## Validation Tips

- Make sure `correctAnswer` index exists in options (0-3)
- Ensure all questions have exactly 4 options
- Check that photo URLs actually work
- Test the JSON syntax (use jsonlint.com if unsure)

---

**Once you update this file, your quiz is customized!** 🎉

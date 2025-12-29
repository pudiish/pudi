# Firebase Setup Guide for Portfolio Contact Form

This guide will help you set up Firebase Firestore to store contact form submissions from your portfolio.

## Quick Setup Summary

1. Create Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Get your Firebase config (Project Settings → Your apps → Web app)
4. Create `.env` file in project root with your Firebase credentials
5. Restart your development server

**Note:** A `.env.example` file template is provided in the project root. Copy it to `.env` and fill in your values.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or select an existing project
3. Enter a project name (e.g., "portfolio-contact-form")
4. (Optional) Enable Google Analytics if you want
5. Click **"Create project"**

## Step 2: Create a Firestore Database

1. In your Firebase project, click on **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for development) or set up security rules
4. Select a location for your database (choose the closest to your users)
5. Click **"Enable"**

### Set Up Security Rules (Important for Production)

For production, update your Firestore security rules to only allow writes:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      allow write: if true; // Allows anyone to write (submit contact form)
      allow read: if false; // Prevents public reads (only you can read in console/admin)
    }
  }
}
```

To update rules:
1. Go to Firestore Database → Rules tab
2. Paste the rules above
3. Click **"Publish"**

## Step 3: Get Your Firebase Configuration

1. In Firebase Console, click the **gear icon** (⚙️) next to "Project Overview"
2. Select **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **Web icon** (</>) to add a web app
5. Register your app with a nickname (e.g., "Portfolio Web App")
6. Copy the Firebase configuration object

You'll see something like:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Step 4: Set Up Environment Variables

1. In your project root, create a `.env` file (copy from `.env.example`)
2. Add your Firebase configuration values:

```env
REACT_APP_FIREBASE_API_KEY=AIzaSy...
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abc123

# Optional: Weather API (if you want weather feature)
REACT_APP_WEATHER_API_KEY=your_weather_api_key_here
```

**Important Notes:**
- All React environment variables must start with `REACT_APP_`
- Never commit your `.env` file to Git (it's already in `.gitignore`)
- The `.env.example` file is safe to commit (it has placeholder values)

## Step 5: Install Firebase (Already Done)

Firebase has already been installed. If you need to reinstall:

```bash
npm install firebase
```

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm start
   ```

2. Navigate to the Contact section
3. Fill out and submit the contact form
4. Go back to Firebase Console → Firestore Database
5. You should see a new collection called `contacts` with your submission

## Step 7: Viewing Contact Submissions

To view contact form submissions:

1. Go to Firebase Console → Firestore Database
2. Click on the `contacts` collection
3. You'll see all submissions with:
   - `firstName`: First name
   - `lastName`: Last name
   - `email`: Email address
   - `message`: Message content
   - `timestamp`: When it was submitted
   - `read`: Whether you've read it (false by default)

## Optional: Set Up Email Notifications

To receive email notifications for new contact form submissions, you can:

1. Use Firebase Cloud Functions with SendGrid/Mailgun
2. Use a service like Zapier or Integromat
3. Set up Firebase Extensions for email notifications

## Troubleshooting

### Error: "Firebase: Error (auth/invalid-api-key)"
- Make sure your `.env` file exists and has correct values
- Restart your development server after creating/updating `.env`
- Ensure all environment variables start with `REACT_APP_`

### Error: "Missing or insufficient permissions"
- Check your Firestore security rules
- For development, use test mode
- For production, update rules as shown in Step 2

### Contact form not submitting
- Open browser console to see detailed errors
- Verify Firebase config values are correct
- Check that Firestore database is created and enabled

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)

## Support

If you encounter any issues, check:
1. Firebase Console for error logs
2. Browser console for client-side errors
3. Firebase status page for service outages

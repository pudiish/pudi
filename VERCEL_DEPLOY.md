# Deploying to Vercel

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Go to Vercel Dashboard**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your repository

3. **Configure Project Settings**
   - Framework Preset: **Create React App** (auto-detected)
   - Root Directory: `pudi` (if your code is in a subdirectory) or leave blank if at root
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `build` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Add Environment Variables**
   - Go to "Environment Variables" section
   - Add all your Firebase environment variables:
     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```
   - Optionally add Weather API key if you want to use that feature:
     ```
     REACT_APP_WEATHER_API_KEY=your_weather_api_key
     ```
   - Make sure to add them for all environments (Production, Preview, Development)

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to your project directory**
   ```bash
   cd pudi
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production deployment: `vercel --prod`

5. **Set Environment Variables**
   ```bash
   vercel env add REACT_APP_FIREBASE_API_KEY
   vercel env add REACT_APP_FIREBASE_AUTH_DOMAIN
   vercel env add REACT_APP_FIREBASE_PROJECT_ID
   vercel env add REACT_APP_FIREBASE_STORAGE_BUCKET
   vercel env add REACT_APP_FIREBASE_MESSAGING_SENDER_ID
   vercel env add REACT_APP_FIREBASE_APP_ID
   vercel env add REACT_APP_FIREBASE_MEASUREMENT_ID
   ```

## Important Notes

1. **Environment Variables**: Make sure all your Firebase environment variables are set in Vercel dashboard. They won't be available if they're only in your local `.env` file.

2. **Build Output**: Vercel will automatically detect Create React App and use the correct build settings (already configured in `vercel.json`).

3. **Custom Domain**: After deployment, you can add a custom domain in the Vercel dashboard under Project Settings → Domains.

4. **Automatic Deployments**: Once connected to your Git repository, Vercel will automatically deploy on every push to your main branch.

5. **Preview Deployments**: Vercel creates preview deployments for pull requests automatically.

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version is compatible (Vercel uses Node 18.x by default)

### Environment Variables Not Working
- Make sure variables are prefixed with `REACT_APP_`
- Verify they're added for the correct environment (Production/Preview/Development)
- Redeploy after adding new environment variables

### Firebase Connection Issues
- Verify all Firebase environment variables are set correctly
- Check Firebase console for any restrictions
- Ensure Firestore database is created and rules are set

### Assets Not Loading
- The `homepage` field was removed from `package.json` to fix asset paths for Vercel
- All assets should now load correctly

## Post-Deployment

1. Test your contact form to ensure Firebase is working
2. Check all links and navigation
3. Verify responsive design on mobile devices
4. Test dark/light theme toggle
5. Monitor performance in Vercel Analytics (if enabled)

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/#vercel)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

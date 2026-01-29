# 🚀 Deploy to Vercel - Quick Guide

## Fastest Way to Deploy (2 minutes)

### Step 1: Open Terminal
```bash
cd /Users/maniv-growth/ai/nulogic-website-html
```

### Step 2: Login to Vercel (first time only)
```bash
vercel login
```
This will open a browser window. Log in with your email or GitHub account.

### Step 3: Deploy!
```bash
vercel --prod
```

That's it! You'll get a live URL in ~30 seconds.

---

## Alternative: Deploy via Web Interface

### Option A: Direct Upload
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Click "Browse" and select this folder
4. Click "Deploy"
5. Done! Your URL will be: `https://your-project-name.vercel.app`

### Option B: Via GitHub (Recommended for ongoing updates)
1. Create a GitHub repo
2. Push this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nulogic-website.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) → "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

---

## After Deployment

### Get Your URL
After deployment, you'll get a URL like:
```
https://nulogic-website-abc123.vercel.app
```

### Add Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `www.nulogic.com`)
4. Update your DNS records as shown

---

## Update the Contact Form

The contact form needs a backend. Replace line 29 in `contact.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Get a Formspree ID:
1. Go to [formspree.io](https://formspree.io) (free plan available)
2. Sign up and create a new form
3. Get your form endpoint (e.g., `https://formspree.io/f/xyzabc123`)
4. Replace `YOUR_FORM_ID` with your actual ID
5. Redeploy: `vercel --prod`

---

## Common Issues

### Issue: "Token is not valid"
**Solution:** Run `vercel login` first, then try deploying again.

### Issue: Links don't work
**Solution:** All HTML files are in the root directory. Links should work automatically.

### Issue: CSS not loading
**Solution:** Check that `css/styles.css` exists and the path is correct in HTML files.

---

## Next Steps After Deployment

1. ✅ Test the website thoroughly
2. ✅ Update contact form with Formspree
3. ✅ Add your logo to `images/` folder
4. ✅ Add client logos (if permitted)
5. ✅ Set up Google Analytics (optional)
6. ✅ Add custom domain (optional)
7. ✅ Share the URL and start getting leads!

---

## Redeploy After Changes

Made updates to the HTML/CSS? Just run:
```bash
vercel --prod
```

Your changes will be live in ~30 seconds!

---

## Cost

Vercel is **FREE** for static websites like this! You get:
- ✅ Unlimited bandwidth
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Instant deployments

---

**Need help?** Check the full README.md file or contact Vercel support.

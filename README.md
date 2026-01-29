# NuLogic Website - Simple HTML Version

A clean, professional website built with HTML and CSS using the NuLogic brand guidelines.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to the website folder
cd /Users/maniv-growth/ai/nulogic-website-html

# Deploy (it will ask you a few questions, just press enter to accept defaults)
vercel

# For production deployment
vercel --prod
```

### Option 2: Deploy via Vercel Web Interface

1. Go to [vercel.com](https://vercel.com) and sign in (or sign up)
2. Click "Add New Project"
3. Click "Browse" and select this folder (`nulogic-website-html`)
4. Vercel will automatically detect it as a static site
5. Click "Deploy"
6. Your site will be live in ~30 seconds!

### Option 3: Deploy via GitHub + Vercel

1. Push this folder to GitHub:
   ```bash
   cd /Users/maniv-growth/ai/nulogic-website-html
   git init
   git add .
   git commit -m "Initial NuLogic website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

---

## 📁 File Structure

```
nulogic-website-html/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact form
├── services.html           # Services overview (to be added)
├── platforms.html          # Platforms overview (to be added)
├── case-studies.html       # Case studies (to be added)
├── css/
│   └── styles.css          # All styling with brand colors
├── js/                     # (empty for now - add JS if needed)
└── images/                 # (empty - add images/logos here)
```

---

## 🎨 Brand Colors (from nulogic.io)

- **Primary**: `#1A1A1A` (Dark charcoal)
- **Accent Gradient**: `#89389f` (Purple) → `#ed2925` (Red)
- **Supporting**: `#D9D9D9`, `#979797`, `#424242` (Grays)
- **Background**: `#FFFFFF` (White)

---

## ✅ What's Included

### Completed Pages:
- ✅ **Homepage** - Hero, services, case studies, CTAs, proof bar
- ✅ **Contact Page** - Form with all fields from specs
- ✅ **About Page** - Company story, values, expertise

### To Be Added (Optional):
- Services detail pages (4 pages)
- Platforms overview and detail pages
- Case studies detail pages

The core pages are ready to deploy and start getting leads!

---

## 🔧 Customization

### Update Contact Form

The contact form in `contact.html` uses Formspree. To make it work:

1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a new form
3. Get your form endpoint
4. Update line 29 in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual Formspree form ID

Alternatively, you can use:
- [Basin](https://usebasin.com) (another form backend)
- [FormSubmit](https://formsubmit.co) (free, no signup)
- Your own backend API

### Add Images/Logos

1. Add image files to the `images/` folder
2. Update HTML to reference them:
   ```html
   <img src="images/your-logo.svg" alt="NuLogic Logo">
   ```

### Update Content

All content is in the HTML files. Just open them in any text editor and modify the text.

---

## 🌐 After Deployment

### Custom Domain

To use your own domain (e.g., www.nulogic.com):

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain
4. Update your DNS records as instructed by Vercel

### Analytics

Add Google Analytics by adding this before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 📱 Mobile Responsive

The site is fully responsive and looks great on:
- Desktop (1200px+ containers)
- Tablet (768px+)
- Mobile (all sizes)

---

## 🔒 HTTPS

Vercel automatically provides free SSL certificates. Your site will be served over HTTPS.

---

## 💡 Next Steps

1. **Deploy to Vercel** (see instructions above)
2. **Update contact form** with your Formspree ID
3. **Add your logo** to the `images/` folder
4. **Add client logos** (if you have permission)
5. **Test the contact form**
6. **Set up custom domain** (optional)
7. **Add Google Analytics** (optional)

---

## 🆘 Need Help?

### Common Issues:

**Q: Form doesn't work after deployment**
A: Update the Formspree form action URL in `contact.html`

**Q: Links are broken**
A: Make sure all HTML files are in the root directory

**Q: CSS not loading**
A: Check that the `css/styles.css` path is correct in all HTML files

**Q: Want to add more pages**
A: Copy an existing HTML file, update the content, and add navigation links

---

## 📊 Performance

This is a static HTML site, so it's:
- ⚡ **Super fast** - no server processing
- 💰 **Free to host** on Vercel
- 🔍 **SEO-friendly** - all content is in HTML
- 📈 **Scalable** - handles unlimited traffic

---

## 🎯 What's Next

### Phase 1 (You have this now):
- Homepage ✅
- Contact page ✅
- About page ✅

### Phase 2 (Add these next):
- Services detail pages
- Platforms pages
- Case studies pages

### Phase 3 (Future enhancements):
- Blog section
- Resource downloads
- Video content
- Interactive demos

---

**Ready to deploy?** Run `vercel` in this directory and you'll have a live URL in ~30 seconds! 🚀

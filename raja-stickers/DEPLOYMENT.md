# 🚀 Deployment Guide - Raja Stickers Website

## Quick Start (Local Development)

```bash
cd raja-stickers
npm run dev
```

Open: http://localhost:3000

---

## 📦 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the company behind Next.js, so it's the easiest deployment option.

#### Steps:
1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   cd raja-stickers
   vercel
   ```
4. Follow the prompts
5. Your site will be live in seconds!

**Advantages:**
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Zero configuration needed

---

### Option 2: Netlify

Another excellent option for Next.js apps.

#### Steps:
1. Create account at [netlify.com](https://netlify.com)
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Build and deploy:
   ```bash
   cd raja-stickers
   npm run build
   netlify deploy --prod
   ```

**Advantages:**
- ✅ Free tier available
- ✅ Easy drag-and-drop deployment
- ✅ Form handling
- ✅ Serverless functions

---

### Option 3: GitHub Pages (Static Export)

For completely static hosting.

#### Steps:
1. Add to `next.config.ts`:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy the `out` folder to GitHub Pages

**Note:** Some features may be limited in static export mode.

---

### Option 4: Docker

For containerized deployment.

#### Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Build and run:
```bash
docker build -t raja-stickers .
docker run -p 3000:3000 raja-stickers
```

---

### Option 5: Traditional Hosting (cPanel, etc.)

#### Steps:
1. Build the application:
   ```bash
   npm run build
   ```

2. Upload these files to your server:
   - `.next` folder
   - `public` folder
   - `package.json`
   - `node_modules` (or run `npm install` on server)

3. Start the server:
   ```bash
   npm start
   ```

4. Configure your web server (Apache/Nginx) to proxy to port 3000

---

## 🌍 Environment Variables

This project doesn't require any environment variables! It works out of the box.

If you want to add analytics or other services later, create a `.env.local` file:

```env
# Example (not required)
NEXT_PUBLIC_ANALYTICS_ID=your-id-here
```

---

## 🔧 Build Configuration

### Current Configuration
- **Framework**: Next.js 16
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 18+

### Build Settings for Hosting Platforms

#### Vercel:
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

#### Netlify:
- Build Command: `npm run build`
- Publish Directory: `.next`
- Functions Directory: (leave empty)

---

## 📊 Performance Optimization

The site is already optimized with:
- ✅ Static page generation
- ✅ Automatic code splitting
- ✅ Image optimization (if images added)
- ✅ CSS optimization with Tailwind
- ✅ Minified JavaScript
- ✅ Tree shaking

### Additional Optimizations:
1. **Enable caching** on your hosting platform
2. **Use CDN** for static assets
3. **Enable compression** (gzip/brotli)
4. **Add analytics** to track usage

---

## 🔒 Security Considerations

- ✅ No sensitive data stored
- ✅ No backend/database required
- ✅ Client-side PDF generation (no server processing)
- ✅ No user authentication needed
- ✅ No API keys required

---

## 📱 Domain Setup

### Custom Domain (Vercel):
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Custom Domain (Netlify):
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS

---

## 🔄 Continuous Deployment

### With Git Integration:

1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Vercel/Netlify
3. Automatic deployments on every push!

```bash
git init
git add .
git commit -m "Initial commit - Raja Stickers"
git remote add origin your-repo-url
git push -u origin main
```

---

## 📈 Monitoring

### Recommended Tools:
- **Vercel Analytics** - Built-in performance monitoring
- **Google Analytics** - User tracking
- **Sentry** - Error tracking
- **Lighthouse** - Performance audits

---

## 🆘 Troubleshooting

### Build Fails:
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use:
```bash
# Use different port
PORT=3001 npm run dev
```

### PDF Download Not Working:
- Check browser console for errors
- Ensure jsPDF and html2canvas are installed
- Try different browser

---

## 📞 Support

If you encounter issues:
1. Check the build logs
2. Verify Node.js version (18+)
3. Ensure all dependencies are installed
4. Check browser console for errors

---

## 🎉 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All stickers display properly
- [ ] Category filtering works
- [ ] PDF downloads work
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] Custom domain configured (if applicable)
- [ ] Analytics set up (optional)

---

**Your Raja Stickers website is ready to share with the world! 🦅💚**

*Allez Raja! Green Eagles Forever!*

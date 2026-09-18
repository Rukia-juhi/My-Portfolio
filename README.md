# Rukia Juhi S — Personal Portfolio

A modern, premium, recruiter-friendly personal portfolio website for **Rukia Juhi S**, a final-year B.Tech Computer Science and Engineering student at **Hindustan Institute of Technology and Science (HITS), Chennai**.

Built with **React 19**, **TypeScript**, and **Tailwind CSS**, featuring a dark aesthetic, purple/lavender accents, interactive project modals, responsive navigation, and verified academic and project records.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Key Project Structure

```
rukia-juhi-portfolio/
├── index.html                     # Semantic head, Google Fonts, OpenGraph metadata
├── tailwind.config.js             # Custom dark palette, glow effects, typography
├── src/
│   ├── main.tsx                   # React root entry
│   ├── App.tsx                    # Main app layout with scrollspy & modal orchestration
│   ├── index.css                  # Tailwind imports, custom glassmorphism & reduced-motion rules
│   ├── data/
│   │   └── portfolioData.ts       # Central data store for easy editing of all content & links
│   └── components/
│       ├── Navbar.tsx             # Sticky blur header with active scrollspy & mobile drawer
│       ├── Hero.tsx               # Hero banner, status badge, CTAs & photo placeholder
│       ├── About.tsx              # Narrative bio, verified stats cards & "Currently Exploring"
│       ├── Skills.tsx             # Categorized skill badges with category filtering
│       ├── Experience.tsx         # Vertical timeline for Gradtwin Services & Marcello Tech
│       ├── Projects.tsx           # 4 featured project cards with tag filters & modal triggers
│       ├── ProjectModal.tsx       # Interactive project deep-dive modal
│       ├── Achievements.tsx       # Hackathons (Intellithon'25), Iaspire, University Topper (1st Rank)
│       ├── Certifications.tsx     # Certificate gallery with credential viewer modal
│       ├── Education.tsx          # B.Tech at HITS (9.70 CGPA) & Higher Secondary record
│       ├── ResumeBanner.tsx       # High-conversion "Explore My Resume" callout
│       ├── ResumeModal.tsx        # Resume preview and email request modal
│       ├── Contact.tsx            # Contact channels, 1-click email copy, interactive form
│       ├── Footer.tsx             # Footer, HITS Chennai reference & back-to-top button
│       └── Icons.tsx              # Clean SVG icons for GitHub and LinkedIn
```

---

## ✏️ How to Customize

All personal information, links, and content are centralized in:
📂 `src/data/portfolioData.ts`

### 1. Replace Profile Photo
Place your photo (e.g. `profile.jpg`) in the `public/` folder, and update the avatar in `src/components/Hero.tsx` with:
```tsx
<img src="/profile.jpg" alt="Rukia Juhi S" className="w-full h-full object-cover rounded-xl" />
```

### 2. Attach Resume PDF
Drop your compiled resume file as `public/Rukia_Juhi_S_Resume.pdf`. The download buttons in the Navbar, Hero, and Resume Banner can then directly link to `/Rukia_Juhi_S_Resume.pdf`.

### 3. Connect Contact Form to Email Service
The contact form in `src/components/Contact.tsx` is ready to be connected to services like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/) by replacing the simulation with a `fetch` call to your endpoint.

---

## 🌐 Deployment

### Deploying to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add `"base": "./"` in `vite.config.ts`.
3. Add `"deploy": "vite build && gh-pages -d dist"` to `package.json` scripts.
4. Run `npm run deploy`.

### Deploying to Vercel / Netlify
Connect your GitHub repository directly to Vercel or Netlify. The build command is `npm run build` and output directory is `dist`.

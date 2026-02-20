# Lucid Motion

A modern **Next.js + TypeScript** landing page featuring immersive animations and interactive video experiences. Built with **GSAP** for smooth scroll-driven animations, **Tailwind CSS** for styling, and a responsive design that showcases gaming and metagame experiences.

---

## ⚠️ Disclaimer

This is an **unofficial, fan-made project inspired by Zentry**. All product names, logos, and branding are the property of **Zentry**. This project is created purely for **educational purposes** and is not intended for commercial use or public deployment.

---

## 🚀 Live Demo & Source Code

🔗 **Live Demo:** [https://lucid-motion.vercel.app/](https://lucid-motion.vercel.app/)

💻 **GitHub Repository:** [https://github.com/aniltanriverdiler/lucid-motion.git](https://github.com/aniltanriverdiler/lucid-motion.git)

---

## ✨ Features

### 🎬 Animations & Interactions
- **GSAP + ScrollTrigger** – Scroll-based animations and section reveals
- **Video Transitions** – Smooth video switching with scale animations
- **3D Hover Effects** – Interactive tilt effects on cards and images
- **Parallax Effects** – Depth-based animations on scroll
- **Loading States** – Elegant loading spinner for video content

### 🎨 UI Components
- **Animated Titles** – Text animations with scroll triggers
- **Video Preview** – Interactive video preview with 3D parallax effects
- **Bento Grid Layout** – Modern card-based feature showcase
- **Responsive Navigation** – Sticky navbar with scroll-based visibility
- **Custom Buttons** – Animated buttons with hover effects

### 📄 Sections
- **Navbar** – Sticky navigation with audio toggle and smooth scroll links
- **Hero** – Full-screen video hero with interactive preview and loading state
- **About** – Image reveal section with clip-path animations
- **Features** – Bento grid layout showcasing products with video backgrounds
- **Story** – Immersive storytelling section with floating image effects
- **Contact** – Call-to-action section with animated title
- **Footer** – Social links and copyright information

### 🛠️ Technical
- **TypeScript** – Full type safety with centralized type definitions
- **Next.js 16** – App Router with server-side rendering capabilities
- **React 19** – Latest React features and optimizations
- **GSAP** – Professional-grade animations and timeline control
- **Tailwind CSS** – Utility-first CSS framework

---

## 📂 Project Structure

```
lucid-motion/
├── public/                    # Static assets (images, videos, SVG icons)
│   ├── img/                   # Image assets
│   └── videos/                # Video assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Hero.tsx           # Hero section with video
│   │   ├── About.tsx          # About section
│   │   ├── Features.tsx        # Features showcase (Bento grid)
│   │   ├── Story.tsx          # Story section
│   │   ├── Contact.tsx        # Contact section
│   │   ├── Footer.tsx         # Footer component
│   │   ├── Button.tsx         # Reusable button component
│   │   ├── AnimatedTitle.tsx  # Animated title component
│   │   └── VideoPreview.tsx   # Video preview with 3D effects
│   └── types/                 # TypeScript definitions
│       └── index.ts           # Centralized type definitions
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## 🛠️ Installation & Run

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup Steps

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/aniltanriverdiler/lucid-motion.git
cd lucid-motion
```

2️⃣ **Install dependencies:**
```bash
npm install
```

3️⃣ **Run development server:**
```bash
npm run dev
```

4️⃣ **Open in browser:**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🏗️ Tech Stack

### Frontend
- **Next.js 16.1.6** – React framework with App Router
- **React 19.2.3** – UI library
- **TypeScript 5** – Type-safe development
- **Tailwind CSS 3.4** – Utility-first styling
- **GSAP 3.14** – Animations and ScrollTrigger
- **@gsap/react** – React hooks for GSAP
- **react-icons** – Icon library
- **react-use** – React hooks collection
- **clsx** – Conditional class names

### Deployment
- Deployed on **Vercel** – [lucid-motion.vercel.app](https://lucid-motion.vercel.app/)

---

## 🎮 How to Use

1. **Run locally** – Use `npm run dev` and open `http://localhost:3000` in your browser.
2. **Scroll** – Scroll through the page to trigger GSAP scroll animations.
3. **Video Interactions** – Click on video previews in the Hero section to switch videos.
4. **Hover Effects** – Hover over cards and images to see 3D tilt effects.
5. **Audio Toggle** – Use the audio button in the navbar to play background music.
6. **Responsive** – Resize the window or use a mobile device to see the responsive layout.

---

## 🚀 Key Sections

- **Navbar** – Fixed navigation with scroll-based visibility and audio controls
- **Hero** – Full-screen video section with interactive preview and loading state
- **About** – Image reveal with clip-path scroll animations
- **Features** – Bento grid layout showcasing products (Radiant, Zigma, Nexus, Azul)
- **Story** – Immersive storytelling with floating image and 3D hover effects
- **Contact** – Call-to-action section with animated title
- **Footer** – Social media links and copyright information

---

## 📌 Technical Notes

- **Single-page layout** – All sections are on one page with scroll-based animations.
- **Video assets** – Videos are loaded from the `public/videos/` directory.
- **TypeScript** – Centralized types in `src/types/index.ts` for all components.
- **GSAP Context** – Proper cleanup of GSAP animations using `gsap.context()`.
- **No backend** – Static frontend only; no API or database.
- **Client Components** – Most components use `"use client"` directive for interactivity.

---

## 🤝 Contributing

- Fork the repository
- Create a feature branch (`git checkout -b feature/amazing-feature`)
- Make your changes and test
- Commit (`git commit -m 'Add amazing feature'`)
- Push (`git push origin feature/amazing-feature`)
- Open a Pull Request

### Guidelines
- Follow existing code style and TypeScript usage
- Keep the disclaimer and educational purpose in mind
- Test on different viewport sizes
- Ensure GSAP animations are properly cleaned up

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Zentry** – Design and branding inspiration
- **GSAP** – Animation library and ScrollTrigger
- **Next.js** – React framework
- **Tailwind CSS** – Styling framework
- **React Icons** – Icon library

---

**Made for educational purposes – Gaming/Metagame landing page inspired by Zentry**

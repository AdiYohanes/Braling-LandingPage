# PT Braling Inti Logam - Official Website

![Braling Inti Logam Banner](public/cta-bg.png)

Modern, high-performance corporate landing page for **PT Braling Inti Logam**, a precision metal manufacturing company based in Purbalingga, Central Java using the "Industrial Swiss Style" design aesthetics.

## 🚀 Technologi Stack

Built with the latest cutting-edge web technologies for maximum performance and SEO:

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Language:** TypeScript
*   **Optimization:** `next/font` (Manrope), `next/image`

## ✨ Key Features

*   **Industrial Swiss Design:** Clean, grid-based layout with high contrast and strong typography suitable for an industrial brand.
*   **High-Performance Animations:** Smooth scroll handling, parallax effects, and staggered reveal animations using Framer Motion.
*   **Dynamic Hero Slider:** Auto-playing high-resolution background slider with crossfade effects.
*   **Advanced SEO:**
    *   Full Metadata (OpenGraph, Twitter Cards).
    *   JSON-LD Schema Markup (`LocalBusiness` & `FAQPage`) for Google Rich Results.
    *   Auto-generated `sitemap.xml` and `robots.txt`.
*   **Responsive & Mobile-First:** Flawless experience across all devices (Mobile, Tablet, Desktop).
*   **Interactive Elements:**
    *   **Sticky Navbar:** Translucent to solid transition on scroll.
    *   **Smooth Scroll:** Custom smooth navigation to sections.
    *   **Google Maps Embed:** Custom styled map integration.
    *   **Contact Cards:** Modern, actionable contact links (WhatsApp & Email).

## 📂 Project Structure

```bash
braling-web/
├── app/
│   ├── globals.css      # Tailwind v4 setup & global styles
│   ├── layout.tsx       # Root layout with SEO & Font setup
│   ├── page.tsx         # Main landing page composition
│   ├── robots.ts        # SEO Robots configuration
│   └── sitemap.ts       # SEO Sitemap configuration
├── components/          # Reusable UI Components
│   ├── About.tsx        # Company vision & mission
│   ├── Advantages.tsx   # Why Choose Us (Grid Layout)
│   ├── Catalog.tsx      # Product Gallery (Masonry Layout)
│   ├── FAQ.tsx          # Accordion FAQ Section
│   ├── Footer.tsx       # Contact info & Social links
│   ├── Header.tsx       # Sticky Navigation
│   ├── Hero.tsx         # Full-screen Slider
│   ├── Location.tsx     # Google Maps Embed
│   ├── ProcessOne.tsx   # CTA Parallax Section
│   ├── Services.tsx     # Service Offerings
│   └── Stats.tsx        # Key Performance Indicators
└── public/              # Static Assets
```

## 🛠️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AdiYohanes/Braling-LandingPage.git
    cd Braling-LandingPage
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000).

## 🚢 Deployment

This project is optimized for deployment on **Vercel**:

1.  Push your code to GitHub.
2.  Import project to Vercel.
3.  Vercel will detect Next.js and deploy automatically.

---

© 2026 PT Braling Inti Logam. Designed for Excellence.

# 🌟 Raunit Kumar — Personal Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A high-performance, interactive personal developer portfolio and digital resume designed with a dynamic **Bento Grid** architecture. Built with **React 18**, **Vite**, and **Tailwind CSS**, this web application showcases technical projects, verified industry certifications (Credly & Unstop), engineering skills, and a functional contact delivery system.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Page & Feature Breakdown](#-page--feature-breakdown)
  - [1. Bento Grid Homepage](#1-bento-grid-homepage)
  - [2. Verified Credentials & Certifications](#2-verified-credentials--certifications)
  - [3. Projects Showcase](#3-projects-showcase)
  - [4. Tech Stack & Tools](#4-tech-stack--tools)
  - [5. Functional Contact System](#5-functional-contact-system)
  - [6. Theme Engine](#6-theme-engine)
- [Tech Stack & Dependencies](#-tech-stack--dependencies)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Deployment](#-deployment)
- [Author & Socials](#-author--socials)
- [License](#-license)

---

## 🚀 Overview

This portfolio is engineered to highlight full-stack software development expertise, cloud computing, machine learning, and cybersecurity competencies. It breaks away from static layouts by offering an engaging, modular UI where sections behave as tactile tiles that can be reordered, explored, and interacted with in both Light and Dark modes.

---

## ✨ Key Features

- **Dynamic Bento Grid Layout**: Fully draggable and sortable dashboard tiles using `@dnd-kit`.
- **Verified Credentials Hub**: Authentic digital badge showcase integrated with **Credly** and **Unstop**, complete with official credential IDs, in-modal PDF previewers, and direct verification URLs.
- **Deep-Dive Project Showcase**: Comprehensive cards detailing architecture, tech stack pills, source repositories, and live status.
- **Inbox-Ready Contact System**: Integrated with **Web3Forms API** for zero-backend message delivery directly to email, supported by a 1-click email copy bar and mail client fallback.
- **Responsive & Accessible**: Mobile-first design that scales fluidly from small smartphones to ultra-wide desktop monitors.
- **Glassmorphic Modern Design**: Curated color palettes, backdrop blurs, micro-animations, and GPU-accelerated badge scaling.
- **Centralized Data Model**: Clean separation of concerns — all content, projects, credentials, and profile attributes are maintained in modular files under `src/data/`.

---

## 🖥️ Page & Feature Breakdown

### 1. Bento Grid Homepage
The landing experience is built on an interactive multi-tile Bento Grid:
- **Intro & Memoji Tile**: Dynamic greeting, professional title, and animated chat speech bubbles.
- **Project Highlight Tile**: Features key flagship work like **GigShield** with interactive mobile preview overlays.
- **Skills & Experience Tiles**: Quick-glance summaries of core technical proficiencies.
- **Location Tile**: Interactive location indicator showing Greater Noida, India.
- **Contact Bento Tile**: Tactile hover-expanding action button triggering the contact modal.

### 2. Verified Credentials & Certifications
Dedicated certification section with category filtering (**Cloud & AWS**, **Cybersecurity**, **Networking**, **AI & ML**, and **Hackathons**):
- **AWS Academy Graduate — Cloud Foundations**: Verified Credly training badge and curriculum details.
- **Introduction to Cybersecurity (Cisco)**: Verified cybersecurity defense and network threat analysis badge.
- **Cisco Learn-A-Thon 2026 & 2025**: Official APJC technical competition badges.
- **Networking Basics (Cisco)**: Verified networking protocols, TCP/IP, and routing fundamentals.
- **Introduction to Modern AI (Cisco)**: Machine learning, modern neural architectures, and ethics badge.
- **AI Skills Passport (Microsoft & EY)**: Joint professional competency badge in Generative AI.
- **Daksh Sparkfest Hackathon**: Official Certificate of Participation awarded by **Unstop** and **GL Bajaj ITM** with embedded high-resolution certificate viewing.

### 3. Projects Showcase
Highlights full-stack, AI, and systems engineering applications:
- **GovernScale**: Government e-office productivity evaluation platform analyzing departmental workloads and performance scoring.
- **GigShield**: Parametric insurance protection system for gig economy delivery workers utilizing automated micro-payout workflows.
- **Cyberbullying Detection**: NLP & Deep Learning system utilizing a hybrid **BERT + BiLSTM Attention** architecture to identify toxicity and harassment with token attention heatmaps.
- **Productivity Dashboard**: Workspace planner featuring Pomodoro focus timer, priority tasks, and client-side persistence.

### 4. Tech Stack & Tools
Categorized breakdown of development technologies:
- **Languages**: JavaScript (ES6+), C++, Java, Python.
- **Frontend**: React, Vite, Tailwind CSS, HTML5, CSS3.
- **Backend & Database**: Node.js, Express.js, MongoDB, PostgreSQL, Supabase.
- **Tools & Platforms**: Git, GitHub, VS Code, Postman, Vercel.

### 5. Functional Contact System
- Built inside [`ContactModal.jsx`](file:///c:/Users/rauni/ch/next-portfolio-new/src/components/contact/ContactModal.jsx) using React Portals to float smoothly over any view.
- **Direct Email Copy**: Displays `raunitkumar232333@gmail.com` with a 1-click clipboard copy button and visual confirmation.
- **Automated Email Dispatch**: Connected to Web3Forms API to send visitor inquiries straight to your personal inbox without writing server-side code.
- **Mailto Fallback**: *"Open Email App"* button automatically composes a pre-filled email in the visitor's desktop or mobile email client.

### 6. Theme Engine
- Context-driven dark/light mode toggle via [`ThemeContext.jsx`](file:///c:/Users/rauni/ch/next-portfolio-new/src/context/ThemeContext.jsx).
- Persists user preferences to `localStorage` and respects system-level OS color schemes.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technologies / Libraries |
| :--- | :--- |
| **Core Framework** | [React 18](https://reactjs.org/), [Vite 5](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/), PostCSS, Autoprefixer |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) |
| **Drag & Drop** | `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/modifiers` |
| **Icons** | [React Icons (Fi / Feather)](https://react-icons.github.io/react-icons/) |
| **Maps & Geo** | [Leaflet](https://leafletjs.com/), `react-leaflet` |
| **Forms & Email** | [Web3Forms API](https://web3forms.com/) |

---

## 📁 Project Architecture

```text
Portfolio/
├── public/                     # Static public assets
│   ├── certificate_assets/     # High-res Credly badges & official PDFs
│   ├── projects/               # Optimized project cover visuals
│   ├── tech/                   # Technology vector badges
│   └── memoji.png              # Profile avatar assets
├── src/
│   ├── components/
│   │   ├── about/              # Career timeline, education, experience modals
│   │   ├── certificates/       # CertificateCard (badges, modal preview, verification)
│   │   ├── contact/            # ContactModal (form submission, email copy bar)
│   │   ├── home/               # BentoGrid, SortableItem, interactive tiles
│   │   ├── layout/             # Navigation bar, Footer, Theme toggle
│   │   ├── projects/           # ProjectCard component
│   │   └── tools/              # Categorized tool grid components
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/Light theme state and persistence
│   ├── data/                   # Centralized application data layer
│   │   ├── certificates.js     # Credentials, Credly links, skills, PDFs
│   │   ├── profile.js          # Bio, contact info, socials, education
│   │   ├── projects.js         # Project details, descriptions, GitHub URLs
│   │   └── tools.js            # Engineering tool stack
│   ├── pages/
│   │   ├── HomePage.jsx        # Main Bento dashboard
│   │   ├── AboutPage.jsx       # Biography & academic path
│   │   ├── CertificatesPage.jsx# Filterable certifications grid
│   │   ├── ProjectsPage.jsx    # Projects archive
│   │   └── ToolsPage.jsx       # Tech stack showcase
│   ├── App.jsx                 # App routing & root layout
│   ├── index.css               # Global Tailwind CSS and fonts
│   └── main.jsx                # Application root mount
├── .env.example                # Environment variables template
├── index.html                  # HTML entry point
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Tailwind CSS design system config
└── vite.config.js              # Vite build setup
```

---

## ⚡ Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation
Clone the repository and install the project dependencies:
```bash
git clone https://github.com/raunitkumar30/raunit-portfolio.git
cd raunit-portfolio
npm install
```

### Environment Configuration
To enable direct message delivery to your email via the contact form:
1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Generate your free access key at [Web3Forms](https://web3forms.com) (enter your email: `raunitkumar232333@gmail.com`).
3. Open `.env` and set your key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

### Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To create a production-optimized build:
```bash
npm run build
```
To preview the production bundle locally:
```bash
npm run preview
```

---

## 🌐 Deployment

This project is optimized for instant deployment on any modern static hosting provider:

### Deploying to Vercel
1. Push your code to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Under **Environment Variables**, add `VITE_WEB3FORMS_ACCESS_KEY` with your key.
4. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository to [Netlify](https://netlify.com).
2. Set Build Command to `npm run build` and Publish Directory to `dist`.
3. Add `VITE_WEB3FORMS_ACCESS_KEY` in Netlify's Environment Variables settings.
4. Click **Deploy Site**.

---

## 👤 Author & Socials

**Raunit Kumar**  
*Information Technology Undergraduate & Software Engineer*  
G.L. Bajaj Institute of Technology and Management, Greater Noida

- **LinkedIn**: [raunit-kumar-640618360](https://www.linkedin.com/in/raunit-kumar-640618360/)
- **GitHub**: [@raunitkumar30](https://github.com/raunitkumar30)
- **Instagram**: [@raunit._.30](https://www.instagram.com/raunit._.30/)
- **Email**: [raunitkumar232333@gmail.com](mailto:raunitkumar232333@gmail.com)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, customize, and build upon it.

# WE CARE — Startup Supporting Partner (Angular 18 & SCSS)

A modern, responsive, animated web application built with **Angular 18**, **SCSS**, and standalone components for **WE CARE**, based directly on the School Startup Project presentation.

---

## 🎨 Brand Identity & Theme
- **Color Palette (Exact match to presentation slides)**:
  - **Primary Accent / Headers**: Deep Burgundy (`#6B1D2F`, hover `#4A121F`, tint `#F6EAEC`)
  - **Warm Background**: Organic Linen & Cream (`#FAF5EF`, surface `#F5EFE6`, border `#E8DCCF`)
  - **Card Styling**: Crisp White (`#FFFFFF`) featuring the signature Burgundy left accent border (`border-left: 4.5px solid #6B1D2F`) from the presentation slides.
  - **Accents**: Warm Gold (`#C9882B`) and Sage Success Green (`#248A49`).
- **Typography**: `Outfit` & `Plus Jakarta Sans` for modern editorial typography, paired with `Playfair Display` for quotes.

---

## 🚀 Features & Slide Mapping

| Section / Page | Presentation Slide | Description |
| :--- | :--- | :--- |
| **Hero Section** | Slide 01 | Brand title, School Startup Project badge, core tagline, action buttons, and hero collaboration visual. |
| **01 • The Problem** | Slide 02 | 4 problem cards with burgundy left borders: Tech gap, marketing difficulties, unclear strategy, and limited resources. |
| **02 • Our Idea** | Slide 03 | "ONE TEAM. MANY BUSINESS SUPPORT SERVICES" connecting owners to actionable plans. |
| **03 • What Our Team Can Help With** | Slide 04 | 6 core pillars: AI & Tech, Strategy, Marketing, Branding, Online Presence, and Business Management with interactive deep-dive tabs. |
| **04 • How It Works** | Slide 05 | 5-step journey: 01 Contact, 02 Share details, 03 Understand, 04 Plan, 05 Support with clickable phase details. |
| **05 • Practical Startup Support** | Slide 06 | 6-step pop-up & small stall roadmap + local permissions and safety advice. |
| **06 • Real Example Case Study** | Slide 07 | Snack stall fruit drink transformation (The entrepreneur brings ➔ WE CARE prepares ➔ The stall opens). |
| **07 • Business Model & Pricing** | Slide 08 | 3 service options: One-time fee, monthly support plan, and full startup/stall package. |
| **08 • Our Purpose** | Slide 09 | "Helping ideas move forward — Your idea matters. Let's build it with care." |
| **Interactive Startup Diagnostic** | Interactive Tool | 3-question quiz with instant custom launch recommendation. |
| **Help Center & FAQs** | User Request | Searchable FAQ accordion with categories (General, AI & Tech, Stall, Pricing). |
| **Contact Form** | User Request | Reactive form with First Name, Last Name, Email, Business Name, Description, and generated reference ID. |
| **Footer** | User Request | Full responsive footer with brand quote, navigation links, and newsletter subscription. |

---

## 🛠️ How to Run Locally

### 1. Development Server
Run the Angular development server:
```bash
npm start
```
or
```bash
npx ng serve
```
Navigate to `http://localhost:4200/` in your browser.

### 2. Production Build
```bash
npm run build
```
The compiled output is saved in the `dist/wecare-app/` directory.

---

## 📱 Routes
- `/`: Home overview with all 8 presentation sections, quiz, FAQ, and contact form.
- `/about`: Detailed School Startup Project story, mission, and core values.
- `/services`: Deep dive into the 6 pillars + stall checklist + pricing plans.
- `/how-it-works`: Complete step-by-step methodology + fresh fruit drinks stall case study.
- `/help`: Knowledge base, FAQs, and startup starter guides.
- `/contact`: Dedicated contact hub with validation and submission confirmation.

# SafeReport 🛡️

> Anonymous community crime reporting platform — submit incident reports with zero identity exposure, powered by Groq Llama Vision AI.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-safereport.afridih.in-blue?style=flat-square)](https://safereport.afridih.in)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Groq](https://img.shields.io/badge/Groq-Llama%20Vision-orange?style=flat-square)](https://groq.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Prisma%20ORM-blue?style=flat-square&logo=postgresql)](https://www.prisma.io)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## What is SafeReport?

SafeReport lets community members report crime incidents anonymously — without creating an account, exposing their identity, or manually filling out long forms. Upload a crime scene image and Groq's Llama Vision AI automatically extracts the incident title, type, and description, reducing manual entry by ~70%. Reports move through a full lifecycle (submitted → under review → resolved) and can be tracked via a secure reference ID.

---

## ✨ Features

- **Zero identity exposure** — sessionless submissions, no PII stored, middleware-level identity stripping on all report routes
- **AI-powered image analysis** — Groq Llama Vision auto-generates report details from uploaded crime scene images in sub-second inference
- **Anonymous report tracking** — track report status via a unique reference ID, no account required
- **Full report lifecycle** — submitted → under review → resolved, with admin status management
- **Email verification** — secure two-way communication without identity exposure
- **8+ RESTful endpoints** — covering report creation, status updates, image analysis, auth, and email verification

---

## 🔒 Privacy Architecture

Identity protection is enforced at every layer, not just the UI:

```
User Submission
      │
      ▼
┌─────────────────────────────────────┐
│         Middleware Layer             │
│  • Identity stripping on all routes │
│  • No session binding to reports    │
│  • No IP logging                    │
└─────────────────────────────────────┘
      │
      ▼
┌─────────────────────────────────────┐
│           API Layer                  │
│  • Sessionless report submission    │
│  • No PII fields in schema          │
│  • Reference ID only for tracking  │
└─────────────────────────────────────┘
      │
      ▼
┌─────────────────────────────────────┐
│         PostgreSQL (Prisma)          │
│  • Report entity — no user linkage  │
│  • Status lifecycle tracking        │
│  • Image URL, not raw image stored  │
└─────────────────────────────────────┘
```

---

## 🤖 AI Image Analysis

Upload a crime scene image → Groq Llama Vision returns structured data in a single inference call:

```json
{
  "incident_title": "Vehicle Break-in",
  "incident_type": "Theft",
  "description": "Broken car window visible on driver side, glass scattered on pavement."
}
```

This pre-fills the report form, reducing manual entry by ~70% and improving report quality and consistency.

---

## 🛠️ Tech Stack

**Frontend**
- Next.js 15 (App Router)
- Tailwind CSS
- shadcn/ui

**Backend**
- Node.js
- Prisma ORM
- PostgreSQL

**AI**
- Groq API (Llama Vision)
- Sub-second image inference

**Auth & Security**
- Custom auth with email verification
- Middleware-enforced identity stripping
- Sessionless anonymous submissions

---

## 📁 Project Structure

```
├── app/
│   ├── submit-report/       # Anonymous report submission
│   ├── track-report/        # Track report by reference ID
│   ├── how-it-works/        # Public info page
│   ├── resources/           # Community resources
│   ├── contact/             # Contact page
│   └── api/                 # API routes (8+ endpoints)
├── components/              # Reusable UI components
├── lib/                     # Prisma client, utilities
├── prisma/
│   └── schema.prisma        # DB schema — User & Report entities
└── public/                  # Static assets
```
---

## 🔧 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Groq API key

### Installation

```bash
# Clone the repo
git clone https://github.com/Afridi-haque7/crime-report-js.git
cd crime-report-js

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Push Prisma schema to database
npx prisma db push
```

### Environment Variables

```env
DATABASE_URL=your_postgresql_connection_string
GROQ_API_KEY=your_groq_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
EMAIL_SERVER=your_smtp_server
EMAIL_FROM=your_from_email
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/reports` | Submit a new anonymous report |
| `GET` | `/api/reports/:referenceId` | Track report by reference ID |
| `PATCH` | `/api/reports/:id/status` | Update report status (admin) |
| `POST` | `/api/analyze-image` | Groq Vision AI image analysis |
| `POST` | `/api/auth/register` | User registration |
| `POST` | `/api/auth/login` | User login |
| `POST` | `/api/auth/verify-email` | Email verification |
| `POST` | `/api/contact` | Contact form submission |

---

## 🌐 Live Demo

👉 [https://safereport.afridih.in](https://safereport.afridih.in)

---

## 👤 Author

**Afridi Haque**

- Portfolio: [afridih.in](https://afridih.in)
- LinkedIn: [linkedin.com/in/afridi-haque-851924203](https://www.linkedin.com/in/afridi-haque-851924203/)
- GitHub: [@Afridi-haque7](https://github.com/Afridi-haque7)

---

## 📄 License

MIT © Afridi Haque

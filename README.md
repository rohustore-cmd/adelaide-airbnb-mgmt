# Adelaide Airbnb Management Website

Production-ready Next.js website for an Adelaide-based Airbnb and short-term rental management company.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Database:** Supabase
- **Deployment:** Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with values from your Supabase dashboard (Settings → API).

### 3. Set up Supabase

In the Supabase SQL Editor, run the schema found in `supabase/schema.sql`. This creates:
- `blog_posts` table with RLS policies and 3 seed posts
- `contact_leads` table with RLS policies

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── how-it-works/page.tsx
│   ├── blog/page.tsx         # Blog index
│   ├── blog/[slug]/page.tsx  # Blog post
│   ├── contact/page.tsx      # Contact + ContactForm.tsx
│   ├── privacy-policy/page.tsx
│   ├── api/contact/route.ts  # Contact form API endpoint
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                   # Navbar, Footer, Button
│   └── sections/             # Page section components
├── lib/supabase/
│   ├── server.ts             # Server-side client
│   └── client.ts             # Client-side client
└── types/index.ts
```

## Deployment to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add the three environment variables from `.env.local` in Vercel project settings
4. Click Deploy

## Post-Deployment Checklist

- [ ] Replace `yourdomain.com.au` in `sitemap.ts`, `robots.ts`, all page metadata, and `layout.tsx` JSON-LD
- [ ] Add your real phone number to `layout.tsx` JSON-LD schema
- [ ] Set a custom `.com.au` domain in Vercel project settings
- [ ] (Optional) Set up n8n workflow for contact lead email alerts

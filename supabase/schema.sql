-- ============================================================
-- Adelaide Airbnb Management — Supabase Schema
-- Run this entire file in the Supabase SQL Editor
-- ============================================================

-- Blog posts table
create table blog_posts (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null,
  cover_image_url text,
  author text default 'Adelaide Property Team',
  category text default 'Short-Term Rental Tips',
  published boolean default false,
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table blog_posts enable row level security;

create policy "Public can read published posts"
  on blog_posts for select
  using (published = true);

-- Contact form leads
create table contact_leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  suburb text,
  bedrooms text,
  message text,
  created_at timestamptz default now()
);

alter table contact_leads enable row level security;

create policy "Service role only"
  on contact_leads for all
  using (auth.role() = 'service_role');

-- Seed blog posts
insert into blog_posts (slug, title, excerpt, content, published, published_at) values
(
  'how-dynamic-pricing-maximises-your-airbnb-revenue',
  'How Dynamic Pricing Maximises Your Airbnb Revenue in Adelaide',
  'Static pricing leaves money on the table. Learn how smart, data-driven pricing adjusts your nightly rate in real time to fill your calendar and boost your earnings.',
  '## The Problem with Flat-Rate Pricing

Most property owners set a nightly rate and leave it. That works until a major event rolls into Adelaide — WOMADelaide, the Adelaide 500, the Fringe — and they discover they could have charged three times as much.

Dynamic pricing solves this by automatically adjusting your rate based on real-time demand signals: competitor pricing, local events, seasonal patterns, and booking lead time.

## How It Works

Our pricing engine connects to data from Airbnb, Booking.com, and direct booking platforms. It analyses:

- **Local event calendars** — concerts, festivals, conferences, sporting events
- **Competitor availability** — if nearby properties are filling fast, rates go up
- **Booking window** — last-minute gaps get strategic discounts to avoid empty nights
- **Day-of-week patterns** — weekend vs weekday demand in different Adelaide suburbs

## Real Results for Adelaide Properties

A 3-bedroom property in Norwood that was earning $180/night flat saw its monthly revenue increase by 34% in the first 90 days with dynamic pricing — without a single extra booking effort from the owner.

## What This Means for You

You do nothing. We handle the daily rate adjustments. You log in to your owner dashboard and see the results.',
  true, now() - interval '5 days'
),
(
  'what-to-look-for-in-an-airbnb-management-company-adelaide',
  'What to Look for in an Airbnb Management Company in Adelaide',
  'Not all management companies are equal. Here''s a practical checklist for Adelaide property owners evaluating who to trust with their investment.',
  '## 1. Transparent Fee Structure

The first red flag is hidden fees. A trustworthy management company will show you exactly what percentage they take, what''s included, and what incurs extra charges (e.g. linen replacement, maintenance callouts).

## 2. Real Owner Transparency

You should be able to see every booking, every cleaning, every dollar — not just a monthly PDF summary. Look for companies offering a live owner dashboard with booking history, income statements, and occupancy rates.

## 3. In-House or Vetted Cleaning

Guest reviews live and die on cleanliness. Ask whether they use their own cleaning team or a vetted network, and how they handle quality control between stays.

## 4. Local Adelaide Knowledge

Adelaide''s rental market has distinct micro-markets. A management company with local knowledge understands that a property in Glenelg performs differently to one in the CBD or the Adelaide Hills, and prices accordingly.

## 5. Communication Standards

How quickly do they respond to guest issues at 11pm? What''s their guest messaging response time? Ask for their average response metrics.

## The Checklist

- [ ] Transparent, flat-percentage fees
- [ ] Live owner dashboard
- [ ] Professional linen and cleaning service
- [ ] Dynamic pricing technology
- [ ] 24/7 guest support
- [ ] Local Adelaide expertise
- [ ] Clear onboarding process',
  true, now() - interval '12 days'
),
(
  'short-term-vs-long-term-rental-adelaide-which-earns-more',
  'Short-Term vs Long-Term Rental in Adelaide: Which Earns More in 2025?',
  'Adelaide''s rental market is shifting. We crunch the numbers on short-term vs long-term rental income across popular suburbs to help you decide.',
  '## The Question Every Adelaide Investor Asks

With Adelaide''s rental vacancy rates historically low, many landlords wonder: is it worth switching from a 12-month lease to short-term?

The honest answer is: it depends on the suburb, property type, and how hands-on you want to be.

## The Numbers (2025 Data)

A 2-bedroom apartment in **Glenelg**:
- Long-term rental yield: ~$520/week ($27,040/year)
- Short-term managed yield (after fees): ~$38,000–$45,000/year at 72% occupancy

A 3-bedroom house in **Prospect**:
- Long-term rental yield: ~$600/week ($31,200/year)
- Short-term managed yield (after fees): ~$42,000–$52,000/year

## The Hidden Costs to Factor In

Short-term isn''t passive. You need to account for:
- Management fees (typically 15–25%)
- Linen and consumables
- Higher maintenance frequency
- Council regulations (check your local council)
- Gaps in occupancy between peak seasons

## When Short-Term Wins

Short-term typically outperforms when:
- Your property is within 10km of the Adelaide CBD or beach
- You have 2+ bedrooms
- You use a management company with strong occupancy rates
- You''re in a suburb with event-driven demand spikes

## Our Recommendation

Run the numbers with a free income estimate before committing. We offer a no-obligation projection for Adelaide properties.',
  true, now() - interval '20 days'
);

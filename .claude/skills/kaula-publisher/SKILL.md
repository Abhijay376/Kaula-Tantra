---
name: kaula-publisher
description: Publish 2 Guruji teaching posts a day on the Kaula Devi Marga site (plain HTML repo Abhijay376/Kaula-Tantra). Use when asked to "run the publisher", "publish today's posts" or "do the next 2 blogs".
---

# Kaula Devi Marga publisher

Site = plain HTML files in the repo root. No build step. Every page ends with
`<script src="site.js" defer></script>` (adds GA4, social icons, menu link). Keep that line on every new page.

Read `project-context.md` first if present. Lineage facts are fixed.

## Daily job: 2 posts
1. Open `publisher/queue-blogspot.md`. Take the first 2 unticked lines.
   When every Blogspot line is ticked, switch to the forum (see Forum phase).
2. For each URL:
   a. Open the page. Take ONLY the post body. Never the comments, sidebar or menus.
   b. Decide the type:
      - **guruji**: Guruji's own words, or the blog owner's notes on Guruji. Keep the original text word for word.
      - **reference**: an article or book extract by another writer (scholars, saints' biographies).
        Do not copy it in full: short summary + one short quote (1-2 lines) + credit + link.
   c. Make the page `<slug>.html` (slug from the post title, lowercase, hyphens).
      Copy the `<head>` styles and `<header>`/`<footer>` from `what-sri-vidya-means.html` so it matches the site. Layout, top to bottom:
      1. `page-hero`: eyebrow "Guruji's teachings", the title, one plain line on what the post is about.
      2. Credit line: "Written by Sri Amritananda Natha Saraswati (Guruji). Originally published at <a href=URL>amritananda-natha-saraswati.blogspot.com</a>." (or the real author's name).
      3. "In short": 4-6 bullets in plain words.
      4. Infographic: inline `<svg>` summarising the post (rules below).
      5. The original text (guruji) or summary + quote (reference). Keep Guruji's paragraphs and line breaks.
      6. "What this means in practice": 2-4 short paragraphs, high level only.
      7. FAQs: 4-6 questions from Google "People also ask" for the topic, 2-3 sentence answers.
      8. "Read the original" link, then the contact CTA: `<a class="cta" href="contact.html">Fill out the form</a>`.
   d. Run the **humanizer:humanizer** skill on everything YOU wrote (hero line, bullets, practice section, FAQs, meta description).
      Never run it on Guruji's original text or anyone's quoted words.
   e. `<head>`: `<title>` (keyword first, under 60 chars), `<meta name="description">` (150-160 chars),
      `<link rel="canonical" href="https://kaula-tantra.com/<slug>.html">`, Open Graph title/description,
      and two JSON-LD blocks: BlogPosting (author, datePublished, isBasedOn = source URL) and FAQPage.
   f. Add a card at the TOP of the grid in `teachings.html` (same markup as cards in blog.html).
   g. Add the page to `sitemap.xml` (create it if missing).
3. Tick the queue lines: `- [x] guruji | URL -> slug.html`.
4. Commit: `teachings: <title 1>, <title 2>` and push to main. Cloudflare publishes it.
5. Reply with the 2 live links and anything skipped.

## Keywords
Search Google for 2-3 candidate terms for the topic (Claude in Chrome). Read the Keyword Surfer
volume and "People also ask". Use the best term in title, h1, meta description and first bullet.
Log it in `publisher/keyword-log.md` (date, slug, term, volume).

## Hard rules
- Practices (body yantra puja, Suhasini/Kanya puja, yoni/lingam puja, Kalavahana, Kaula homam, Tarpanam, Panchamakara, nudity topics)
  are explained philosophically and at a high level in YOUR text. Never explicit, never step-by-step.
- Any mention of Suhasini or Kumari/Kanya puja must say participants are willing, consenting adults (Kumari: above 18).
- Guruji attained mahasamadhi in October 2015. Never write as if he teaches today. Guru Amma Annapurnamba teaches today.
- The site does not speak for Devipuram.
- Always credit the real author and link the source.
- Images: never copy images from source sites. Make the SVG infographic.
- Series (Chidagni, USCP, SSB, Seeing the Goddess, Journey of the Soul): keep them in order and link each part to the previous and next.

## Infographic rules
Inline SVG, viewBox 0 0 1080 1350. Colours maroon #5C1A22, gold #A6822F, parchment #EDE3CE, indigo #1B1F2E.
Cormorant Garamond headings, Karla text. Triangle/bindu marks as dividers. No all-caps.
Content: the main idea, 3-5 key points, one short line of Guruji with credit.
Footer strip: "Kaula Devi Marga · from the teachings of Sri Amritananda Natha Saraswati".

## Forum phase (after Blogspot is done)
List all threads with the forum API: `https://forum.amritananda.org/api/discussions?sort=createdAt&page[limit]=50&page[offset]=N`.
Work oldest first, 2 per day. Keep the list in `publisher/queue-forum.md`.
Skip threads that are only admin or help: course sign-ups and batch dates, registration, "next steps", troubleshooting,
downloads not working, forum rules, how to flag or message, keyboard/typing/dictionary tools, regional "anyone from X" posts.
- Posts by Guruji (talks, commentaries, LSN commentary series) -> guruji type, credit Guruji and the forum.
- Posts by other members -> full text, grammar cleaned only, credited by their forum name.
- Book extracts, articles by outside authors or scholars -> reference type.
- Threads about abuse or disputes (e.g. "spiritual and psychological abuse", statements about named people) -> skip, list them for the owner.

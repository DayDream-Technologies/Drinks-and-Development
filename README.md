# Drinks and Development

A friendly, approachable website for the Drinks and Development networking group in Grand Rapids, MI. Built with React (Vite), with a signup form, Google Calendar embed, and LinkedIn group CTA.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). To build for production:

```bash
npm run build
npm run preview
```

## Configuration (no code required after setup)

All config and copy live in two files so you can update the site without touching components.

### 1. `src/config.js`

- **`LINKEDIN_GROUP_URL`** – Already set to the group URL. Change only if the group link changes.
- **`GOOGLE_CALENDAR_ID`** – Required for the Events section to show your calendar.
- **`SIGNUP_FORM_ENDPOINT`** – Required for the signup form to work.
- **`USE_NETLIFY_FORMS`** – Set to `true` if you use Netlify Forms instead of Formspree.

### 2. Setting the Google Calendar ID

1. Go to [Google Calendar](https://calendar.google.com).
2. Create a calendar (or use an existing one) for Drinks and Development.
3. Open the calendar’s **Settings** → **Integrate calendar**.
4. Copy the **Calendar ID** (e.g. `xxxxx@group.calendar.google.com`).
5. Make the calendar **public** (Share → make available to “Everyone” or “Public”).
6. Paste the Calendar ID into `GOOGLE_CALENDAR_ID` in `src/config.js`.

Events you add or edit in Google Calendar will show on the site automatically; no code changes needed.

### 3. Setting up the signup form

**Option A: Formspree**

1. Create a form at [formspree.io](https://formspree.io) and get the form action URL (e.g. `https://formspree.io/f/xxxxx`).
2. In `src/config.js`, set `SIGNUP_FORM_ENDPOINT` to that URL.
3. Leave `USE_NETLIFY_FORMS` as `false`.

**Option B: Netlify Forms**

1. Deploy the site to Netlify (or use Netlify for build).
2. In `src/config.js`, set `SIGNUP_FORM_ENDPOINT` to the form name you want (e.g. `"signup"`).
3. Set `USE_NETLIFY_FORMS` to `true`.
4. The form in the repo already includes the hidden `form-name` field; Netlify will pick up submissions when the form name matches.

Submissions will appear in your Formspree dashboard or Netlify Forms, and you can change the endpoint later without editing component code.

## Editing content

All visible text (headlines, taglines, form labels, etc.) is in **`src/content.js`**. Edit the strings there; no need to touch JSX or CSS.

## Project structure

- `src/App.jsx` – Layout, header, footer, and routes (Home, Past Events).
- `src/components/` – Header, Hero, About, Events, Signup, Footer.
- `src/pages/` – HomePage, PastEventsPage.
- `src/config.js` – LinkedIn URL, calendar ID, form endpoint.
- `src/content.js` – All copy (placeholders; replace with your own).
- `src/index.css` – Theme variables, animations, and section styles.

**Assets:** Place `Drinks-and-development-logo.jpg` and `Drinks-and-development-hero.jpg` in `public/` (or root; they are copied to `public/` for the build). The hero image is used as the homepage hero background; the logo appears in the header and hero.

**Past Events:** The Past Events page uses placeholder events defined in `src/pages/PastEventsPage.jsx`. Replace `PLACEHOLDER_EVENTS` with real data or hook up a CMS later. Each event has `title`, `date`, `location`, `image`, and `excerpt`.

## Ideas to make the site more professional

- **SEO:** Add a proper `<meta name="description">` and Open Graph tags (e.g. with React Helmet or in `index.html`) so links look good when shared.
- **Analytics:** Add Google Analytics or Plausible and a privacy-friendly cookie notice if required.
- **Testimonials / quotes:** A short “What people say” section with 1–2 quotes from regulars adds trust.
- **Clear next step:** Keep one primary CTA above the fold (e.g. “Join our LinkedIn group” or “See upcoming events”) and make the signup form easy to find.
- **Past events as content:** Populate Past Events with real photos and short recaps; consider a simple CMS or Markdown so you can add new events without code.
- **Mobile menu:** On small screens, turn the header nav into a hamburger menu for a cleaner look.
- **Loading state:** For the calendar iframe, a small loading placeholder or skeleton can improve perceived performance.
- **Accessibility:** Run a quick pass with a screen reader or Lighthouse; ensure focus order and contrast meet WCAG where possible.
- **Favicon:** Replace the default Vite favicon with your logo or a custom icon for the browser tab.

## Deploying

Build output is in `dist/`. Deploy that folder to any static host (Netlify, Vercel, GitHub Pages, etc.). If you use Netlify Forms, deploy via Netlify so form submissions are handled automatically.

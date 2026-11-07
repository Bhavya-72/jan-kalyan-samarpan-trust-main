# Jan Kalyan Samarpan Trust Website

A responsive three-page website built with React, Vite, Tailwind CSS, React Router, Framer Motion and Lucide React. The supplied trust logo PDF has been converted into a PNG asset and integrated into the website.

## Run locally

1. Install Node.js (LTS).
2. Extract this project ZIP.
3. Open the extracted folder in a terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually http://localhost:5173).

Create a production build with:

```bash
npm run build
```

## Pages

- `/` — Home, trust introduction, charitable purpose and deed-named leadership.
- `/services` — Plain-language summary of charitable objectives in the deed.
- `/contact` — Registered office address, editable contact fields and enquiry form UI.

## Information used

The website uses the supplied "Deed jan kalyan samrpan.pdf" for the trust name, registered office, settlor, trustees and charitable aims/objectives. The logo was taken from "Jan Kalyan samrpan logo.pdf".

The file "Trust Deed.pdf.pdf" contains a long list of additional objectives but the extracted pages do not clearly establish that it belongs to Jan Kalyan Samarpan Trust. Those additional objectives have therefore not been merged into this website.

The deed gives charitable aims and objects; it does not prove that each activity is currently operating. The Services page calls them "focus areas" and "trust deed objectives" for that reason.

## Before publishing

Open `src/data/trustData.js` and:
- Add the official public phone number to `phone`.
- Add the official public email address to `email`.
- Verify the public registered office address and trust details.
- Add trustee biographies and photographs only after they are supplied and approved.
- Add authentic photographs of the trust's work, with permission, if available.

The contact form currently prepares a `mailto:` draft once an official email address is configured. It does not store submissions. For a fully hosted form, connect a backend or a form service and update the submit handler.

## Notes

- No private residential addresses or identity numbers from the deed are displayed.
- No trustee biography, qualifications, programme outcomes or operating services have been invented.
- The website uses a warm ivory, muted gold, navy and soft green palette, with responsive layouts and reduced-motion support.

# Pancatz Brand Guideline

## Colours
- **Primary (text / UI)**: `#212529` – deep charcoal; conveys professionalism and readability.
- **Backgrounds** (per service):
  - Creative: `#fff7f2` – warm off‑white, invites creativity.
  - IT: `#f1fafa` – cool pastel cyan, suggests trust and tech.
  - Photography: `#ffffff` – pure white, lets visual work shine.
- **Accent** (highlights, borders, buttons):
  - Creative: `#ff6b6b` – vibrant coral for energetic calls‑to‑action.
  - IT: `#006d77` – calm teal for reliability.
  - Photography: `#212529` – same as primary for a timeless look.

## Typography
- **Font family**: System UI stack – `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`.
- **Headings**: Bold, `font-bold` with sizes ranging from `text-5xl` (hero) to `text-2xl` (section titles).
- **Body**: Regular weight, `text-lg` for readability.

## Usage Rules
- **Logo**: Single‑color monogram in `#212529`. No colour variations.
- **CSS Variables**: Defined in `globals.css` – `--c-primary`, `--c-bg`, `--c-accent`. Service specific classes (`.service-creative`, `.service-it`, `.service-photo`) override background and accent.
- **Components**: Use Tailwind utilities; avoid custom CSS unless extending the design system.
- **Spacing**: Consistent Tailwind padding/margin utilities (e.g., `p-8`, `mb-6`).
- **Accessibility**: Maintain a contrast ratio of at least 4.5:1 for text/background. All interactive elements have clear focus states.

## Example Component
```tsx
export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-6 py-3 bg-[var(--c-accent)] text-white rounded-md hover:bg-[var(--c-accent)]/90">
      {children}
    </button>
  );
}
```

Use the above pattern for any call‑to‑action across the site.

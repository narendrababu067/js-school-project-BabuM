 Task #2 - Style timeline into responsive, polished layout

# Goal / Scope
Style the HTML timeline into a responsive, polished layout with a separate stylesheet (`styles.css` or `styles.scss`).  
Key objectives:
- Implement responsive layout for timeline using **Flexbox** or **CSS Grid**.
- Add header styling, typography, and colour scheme.
- Add placeholder styles for event markers (dots, labels).
- Add modal base styles (hidden by default) for event details.
- Ensure layout adapts at breakpoints: **mobile (<768px)**, **tablet (768–1023px)**, **desktop (≥1024px)**.

# Main changes
- `styles.css` (or `styles.scss`) added/updated:
  - Responsive timeline layout using Grid / Flexbox.
  - Header styles: spacing, font sizes, background / accent color scheme.
  - Typography rules: font-family, sizes, weights, line-height.
  - Event marker styles: dots, labels, connector lines, hover state.
  - Modal base styles: hidden by default, centered content, overlay.
  - Breakpoint media queries for mobile, tablet, desktop.
- Minor HTML tweaks (if any) to support styling:
  - Added/adjusted semantic classes (e.g., `.timeline`, `.timeline-item`, `.marker`, `.modal`).
  - ARIA attributes for modal accessibility (if implemented).
- No JS logic changes (unless explicitly required for modal show/hide demo).

## How to test
1. Checkout the branch:
   ```bash
   git fetch origin
   git checkout feature/task-2
   clone to the vs code
   run the index.html file or open it in chrome

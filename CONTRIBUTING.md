# Contributing

Thank you for your interest in contributing to Heal+ Landing.

## Before you start

- Open an issue when the change is large or affects content, branding, or structure.
- Keep the visual identity aligned with the Heal+ project.
- Do not replace official links, screenshots, or contact channels without approval.

## Local workflow

This project is a static site and does not require a build step.

Recommended local preview:

```bash
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## Project files

- `index.html`: structure and base content in Portuguese
- `styles.css`: visual system, layout, responsive behavior
- `script.js`: language switching, translated content, menu, copy actions

## Content changes

- Keep Portuguese content in `index.html` consistent with the project.
- Review `script.js` when changing any institutional or user-facing text.
- Confirm contact email, Pix key, author links, and APK links before merging.

## Pull requests

Please keep pull requests focused and descriptive.

Include when relevant:
- what changed
- why it changed
- screenshots for visual updates
- notes about responsive behavior
- notes about updated links or project metadata

## Style guidelines

- Prefer simple, maintainable HTML, CSS, and JavaScript.
- Keep the site responsive.
- Preserve the current Heal+ visual language unless the change is intentional.
- Avoid placeholder text in production-ready sections.

## Final checks

Before submitting:

- test desktop and mobile layout
- test the language switch
- validate contact and contribution links
- validate favicon and image paths
- confirm there are no broken anchors

# CLAUDE.md - AI Assistant Guidelines for AFTV

## Project Overview

**AFTV** (All FORE The View) is a static website for a cabin property located in Hochatown, Oklahoma. This is a simple GitHub Pages project with no build process or external dependencies.

## Repository Structure

```
AFTV/
├── index.html          # Main webpage (entry point)
├── README.md           # Project description
└── CLAUDE.md           # This file - AI assistant guidelines
```

## Technology Stack

- **Frontend:** Pure HTML5 (no frameworks)
- **Styling:** None currently (plain HTML)
- **JavaScript:** None currently
- **Hosting:** GitHub Pages (static file serving)
- **Build Process:** None - files are served directly

## Development Workflow

### Making Changes

1. Edit HTML/CSS/JS files directly
2. Test locally by opening `index.html` in a browser
3. Commit changes with descriptive messages
4. Push to trigger GitHub Pages deployment

### No Build Required

This is a static site with no compilation or bundling:
- No `npm install` needed
- No build commands to run
- Changes are live immediately after push to the hosting branch

## Code Conventions

### HTML Standards

- Use HTML5 doctype: `<!doctype html>`
- Include UTF-8 charset: `<meta charset="utf-8" />`
- Use semantic HTML elements where appropriate
- Keep markup clean and readable

### File Organization (if expanding)

If adding more files, follow this structure:
```
AFTV/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── (image files)
└── pages/
    └── (additional HTML pages)
```

## Testing

- **No automated tests** - this is a static site
- **Manual testing:** Open `index.html` in a browser to verify changes
- **Cross-browser testing:** Check in multiple browsers if making significant changes

## Deployment

- **Platform:** GitHub Pages
- **Method:** Automatic from repository
- **URL:** Determined by GitHub Pages settings
- No CI/CD pipelines configured

## Common Tasks

### Adding a new page

1. Create new HTML file (e.g., `about.html`)
2. Include proper HTML5 structure with doctype and charset
3. Link from `index.html` if needed
4. Commit and push

### Adding CSS styling

1. Create `css/styles.css`
2. Link in HTML: `<link rel="stylesheet" href="css/styles.css">`
3. Follow consistent naming conventions (kebab-case for classes)

### Adding JavaScript

1. Create `js/main.js`
2. Link in HTML: `<script src="js/main.js"></script>` (before `</body>`)
3. Use modern ES6+ syntax

## Important Notes for AI Assistants

1. **Keep it simple** - This is intentionally a minimal static site
2. **No build tools** - Don't introduce npm, webpack, or other build systems unless explicitly requested
3. **Test locally** - Changes can be verified by opening HTML files in a browser
4. **Preserve simplicity** - Avoid over-engineering; this is a small informational site
5. **GitHub Pages compatible** - Ensure all paths are relative for proper hosting

## Git Conventions

- Write clear, descriptive commit messages
- Use present tense ("Add feature" not "Added feature")
- Keep commits focused on single changes when possible

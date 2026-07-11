# Project guide — Gesch Developments website

## What this is

This is the public website for **Gesch Developments**, a town-planning business. It is intentionally a static, no-backend website hosted on GitHub Pages.

### Live locations

- Primary site: <https://geschdevelopments.com.au>
- GitHub Pages fallback: <https://geschdevelopments.github.io/geschdevelopments-website/>
- Repository: <https://github.com/geschdevelopments/geschdevelopments-website>

## Current setup

- The site source is the `main` branch.
- GitHub Pages publishes directly from the repository root.
- `index.html` is the current single-page placeholder.
- `CNAME` connects the repository to `geschdevelopments.com.au`. Do not remove or rename it.
- DNS is managed through VentraIP. GitHub Pages HTTPS is enabled.
- `rknell` has been invited as a collaborator.

## How to update the website

1. Open the repository folder in a new Codex chat and say what you would like to change.
2. Keep the first build simple: static HTML, CSS, and (only where genuinely useful) small JavaScript. No backend is currently required.
3. Review the changes locally if a preview is available.
4. Commit and push the completed changes to `main`.
5. GitHub Pages automatically publishes the new version. Allow a few minutes, then check <https://geschdevelopments.com.au>.

### Command-line workflow

GitHub CLI and Git are installed and GitHub CLI is authenticated as `geschdevelopments`.

```powershell
cd C:\Users\rebec\OneDrive\Desktop\Work\geschdevelopments-website
git status
git add .
git commit -m "Describe the website update"
git push
```

Useful checks:

```powershell
gh auth status
gh repo view --web
```

## Brief for the first real version

Create a clear, trustworthy town-planning business information site. A sensible starting scope is:

- A confident home/hero section introducing Gesch Developments.
- A short services section, such as town-planning advice, development applications, and consultant coordination (confirm exact services before publishing).
- A simple about or approach section.
- Contact details and a clear enquiry call to action once approved.

Before publishing business claims, contact information, qualifications, project examples, pricing, or legal statements, confirm them with Rebecca.

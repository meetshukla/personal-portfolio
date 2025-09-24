# Portfolio

A minimal, mobile-friendly portfolio built with Next.js, TypeScript, and Tailwind CSS. Optimized for deployment on GitHub Pages.

## Features

- 🎨 **Modern Design**: Clean, minimal UI with dark/light mode support
- 📱 **Mobile Friendly**: Fully responsive design
- 🚀 **Static Export**: Optimized for GitHub Pages deployment
- 📝 **Blog Support**: MDX-based blog with front matter
- 🎯 **Three Main Sections**: Home, Blog, and Projects
- ⚡ **Fast**: Built with Next.js App Router and server components

## Quick Start

1. **Clone and setup**:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ./setup.sh
   ```

2. **Start development**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Configuration

### GitHub Pages Setup

1. Update `next.config.js` with your repository name:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
   ```

2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions

### Content Management

#### Blog Posts
Add blog posts as MDX files in `content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Post description"
date: "2025-01-01"
tags: ["tag1", "tag2"]
published: true
---

Your content here...
```

#### Projects
Edit the projects in `content/projects.md`:

```yaml
---
title: "Projects"
projects:
  - title: "Project Name"
    description: "Project description"
    technologies: ["React", "Next.js"]
    githubUrl: "https://github.com/..."
    liveUrl: "https://..."
    image: "/projects/project-image.jpg"
---
```

Add project images to the `public/projects/` directory.

#### Personal Information
Update your details in `content/profile.md`:

```yaml
---
name: "Your Name"
title: "Your Title"
location: "Your Location"
bio: "Brief description about yourself and what you do."
email: "your.email@example.com"
github: "https://github.com/yourusername"
linkedin: "https://linkedin.com/in/yourusername"
twitter: "https://twitter.com/yourusername"
photo: "/profile-photo.jpg"  # Add your photo to public/
---
```

Add your profile photo as `public/profile-photo.jpg` (recommended: square image, 200x200px or larger).

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── projects/          # Projects page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/            # Layout components
│   ├── ui/                # UI components
│   ├── hero.tsx           # Hero section
│   ├── skills.tsx         # Skills section
│   └── theme-provider.tsx # Theme provider
├── content/               # Content files
│   └── blog/              # Blog posts (MDX)
├── lib/                   # Utility functions
│   └── blog.ts            # Blog utilities
├── public/                # Static assets
└── styles/                # Global styles
```

## Deployment

### Automatic Deployment
Push to the `main` branch to trigger automatic deployment via GitHub Actions.

### Manual Deployment
```bash
npm run build
# Upload the 'out' folder to your hosting provider
```

## Customization

### Styling
- Uses Tailwind CSS with custom CSS variables
- Dark/light mode support via `next-themes`
- Modify colors in `app/globals.css`

### Components
- All components use shadcn/ui design patterns
- Mobile-first responsive design
- Accessible and semantic HTML

## License

MIT License - feel free to use this template for your own portfolio!

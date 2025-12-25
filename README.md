# Resume - Personal Portfolio Website

Modern, editorial-style resume website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌍 Internationalization (Russian/English)
- 📱 Responsive design
- 🎨 Editorial/magazine-style layout
- ⚡ Optimized performance
- 🖼️ Image optimization

## Getting Started

### Development

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To build for production:

```bash
npm run build
```

The static export will be generated in the `out/` directory.

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages.

### Automatic Deployment

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://mbkot17.github.io/Resume/`

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `out/` directory contains the static files
3. Push the `out/` directory to the `gh-pages` branch (or configure GitHub Pages to use the `out/` folder)

### GitHub Pages Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on every push to `main`

## Project Structure

- `app/` - Next.js app router pages
- `components/` - React components
- `messages/` - Translation files (ru.json, en.json)
- `data/` - Resume data
- `lib/` - Utility functions and configurations
- `public/` - Static assets

## Technologies

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [Framer Motion](https://www.framer.com/motion/) - Animations

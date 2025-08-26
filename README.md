# Temple Pilates - Static Marketing Website

A beautiful, responsive marketing website for Temple Pilates, built with React and Tailwind CSS. Features beat-driven Pilates and breath-led Yoga classes in a modern sanctuary design.

## 🌟 Features

- **Responsive Design**: Mobile-first, responsive design that works beautifully on all devices
- **Hero Video**: Full-bleed background video with overlay and call-to-action
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter cards, and JSON-LD structured data
- **Accessibility**: WCAG AA compliant with proper focus states and alt text
- **Fast Performance**: Optimized images, lazy loading, and efficient code
- **Modern Stack**: Built with React, Tailwind CSS, and TypeScript

## 🎨 Design System

The site uses Temple Pilates' exact brand colors:
- **Primary**: #FAF3DD (base backgrounds)
- **Secondary**: #D7BDBE (section panels) 
- **Ink**: #615055 (headings/body text)
- **Accent Green**: #62A87C (primary buttons/links)
- **Accent Gold**: #E9C46A (outlines/dividers/hover accents)

## 📄 Pages

- **Homepage** (`/`) - Hero video, class descriptions, community info
- **Class Formats** (`/formats`) - Detailed Mat Pilates and Yoga information
- **Schedule** (`/schedule`) - Booking system integration placeholders
- **Membership** (`/membership`) - Pricing plans and policies
- **About** (`/about`) - Studio story, values, and instructor bios
- **FAQ** (`/faq`) - Comprehensive Q&A and community guidelines

## 🚀 Deployment to GitHub Pages

This site is ready for GitHub Pages deployment:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   - Go to your repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/dist` folder
   - Your site will be available at `https://yourusername.github.io/repository-name`

3. **Custom Domain** (optional):
   - Add a `CNAME` file to the `public` folder with your domain
   - Configure DNS records with your domain provider

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Integration Points

The site includes placeholder sections for:

- **Calendly Booking**: Embed code ready for `/schedule` page
- **Zoho Bookings**: Alternative booking system integration
- **Newsletter Signup**: Formspree/Mailchimp embed slots in footer
- **Social Media**: Instagram, Facebook links ready for configuration

## 🎬 Video Setup

For the hero video:
1. Add your video file as `/public/hero.mp4` (16:9 aspect ratio recommended)
2. The hero poster image is already included at `/public/hero-poster.jpg`
3. Video should be 8-12 seconds, silent, and compressed to ~3-5MB for best performance

## 🔍 SEO Features

- Complete meta tags with Temple Pilates branding
- Open Graph and Twitter card support
- JSON-LD structured data for local business
- Sitemap.xml and robots.txt included
- Semantic HTML with proper heading hierarchy

## 🎯 Accessibility

- WCAG AA compliant color contrast
- Proper heading hierarchy (H1-H6)
- Descriptive alt text for images
- Keyboard navigation support
- Focus indicators
- Reduced motion preferences respected

## 📦 Tech Stack

- **React** - Component-based UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## 🌿 Brand Values

Temple Pilates centers:
- Women-forward wellness
- AAPI-inclusive community
- Accessible design for all bodies
- Modern sanctuary aesthetic
- Authentic wellness practices

Built with care for the Temple Pilates community. 🧘‍♀️✨
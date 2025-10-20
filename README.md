# Fardin Ahsan - Full Stack Developer Portfolio

A clean, modern, and responsive portfolio website built with Next.js 13+ (App Router) and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with a minimalistic color scheme
- **Responsive Layout**: Fully responsive design for mobile, tablet, and desktop
- **Smooth Scrolling**: Smooth navigation between sections with sticky navigation
- **Component-Based**: Modular React components for easy maintenance
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14.0.0 with App Router
- **Styling**: Tailwind CSS 3.3.0
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Icons**: Emoji icons (easily replaceable with custom icons)

## 📁 Project Structure

```
portfolio-v2/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Navigation.tsx      # Sticky navigation component
│   ├── Hero.tsx            # Hero section with CTA buttons
│   ├── About.tsx           # About section with skills overview
│   ├── Projects.tsx        # Portfolio projects grid
│   ├── Skills.tsx          # Skills with progress bars
│   └── Contact.tsx         # Contact form and social links
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🎨 Sections

1. **Hero Section**: Developer introduction with call-to-action buttons
2. **About Section**: Profile photo, bio, and skill categories
3. **Projects Section**: Grid of portfolio projects with live demo and GitHub links
4. **Skills Section**: Progress bars and skill badges organized by category
5. **Contact Section**: Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-v2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Customization

### Personal Information
- Update personal details in each component
- Replace placeholder content with your information
- Update social media links and contact details

### Styling
- Modify colors in `tailwind.config.js`
- Update component styles in individual component files
- Customize animations and transitions

### Content
- Add/remove projects in `Projects.tsx`
- Update skills and proficiency levels in `Skills.tsx`
- Modify the about section content in `About.tsx`

## 🎯 Key Features

- **Sticky Navigation**: Fixed navigation bar with smooth scrolling
- **Responsive Grid**: Mobile-first responsive design
- **Interactive Elements**: Hover effects and smooth transitions
- **Professional Layout**: Clean, modern design suitable for professional use
- **Accessibility**: Semantic HTML and proper ARIA labels

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
# or
yarn build
```

### Start Production Server
```bash
npm start
# or
yarn start
```

### Deploy
This project can be easily deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture
- Responsive design principles

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with customization, please open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS

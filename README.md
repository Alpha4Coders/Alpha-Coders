# 🚀 Alpha Coders

> A vibrant community platform for passionate developers to collaborate, learn, and build amazing things together.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FVortex-16%2FAlpha-Coders-V-2&project-name=alpha-coders-site&repository-name=alpha-coders-site)

## ✨ Features

### Community Engagement
- **Community Member Directory** - Discover and connect with community members, view profiles with names and usernames
- **Core Team Highlights** - Meet the founding members: Vortex-16, Dealer-09, Rouvik, and PixelPioneer404
- **Interactive UI** - Smooth animations and transitions powered by Framer Motion

### Project Showcase
- **GitHub Project Integration** - Automatically fetch and display projects from [Alpha4Coders GitHub Organization](https://github.com/orgs/Alpha4Coders)
- **Advanced Filtering** - Filter projects by technology, category, and status
- **Project Cards** - Beautiful card-based layout with detailed project information

### Modern Development Experience
- **AI-Powered Features** - Integrated Google Genkit for AI capabilities
- **Dark Mode Support** - Seamless theme switching with next-themes
- **Type-Safe** - Full TypeScript support for robust development
- **Responsive Design** - Works flawlessly across all devices and screen sizes

## 🎨 Design System

### Color Palette
- **Primary Color**: Deep Blue (#34495E) - Evokes trust, stability, and community
- **Background**: Light Gray (#F0F3F4) - Clean, modern backdrop
- **Accent Color**: Bright Cyan (#48C9B0) - Interactive elements and key highlights

### Typography & UX
- **Font**: Inter (sans-serif) - Modern, readable, and elegant
- **Icons**: Minimalist outline-style icons via Lucide React
- **Layout**: Card-based design for optimal visual separation and scanning
- **Interactions**: Subtle transitions and hover effects for enhanced user feedback

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with Turbopack for blazing-fast development
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [Tailwind Animate](https://github.com/kirillsimonov/tailwindcss-animate)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Beautiful, accessible component library built on Radix UI
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library

### Backend & Data
- **Firebase**: Real-time database and authentication
- **Database**: Cloud Firestore integration
- **API Integration**: GitHub API for project fetching

### AI & Utilities
- **Genkit**: [Google Genkit](https://github.com/firebase/genkit) for AI capabilities
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Date Handling**: date-fns for date utilities

### Development Tools
- **Language**: TypeScript for type safety
- **Build Tool**: Next.js with Turbopack
- **Package Manager**: npm/yarn
- **Linting**: ESLint integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Vortex-16/Alpha-Coders-V-2.git
cd Alpha-Coders-V-2
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory with your Firebase and API credentials:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_GENKIT_API_KEY=your_genkit_key
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the application.

## 📚 Available Scripts

```bash
# Start development server with Turbopack (port 9002)
npm run dev

# Start Genkit in development mode
npm run genkit:dev

# Watch Genkit files for changes
npm run genkit:watch

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type check without emitting
npm run typecheck
```

## 📁 Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   ├── custom-styles.css        # Custom component styles
│   ├── globals.css              # Global styles
│   ├── community/               # Community member listing
│   └── team/                    # Core team showcase
│
├── components/
│   ├── ui/                      # Shadcn UI components library
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card component
│   │   ├── dialog.tsx           # Dialog/modal component
│   │   ├── accordion.tsx        # Accordion component
│   │   └── ... (25+ more)
│   │
│   ├── header.tsx               # Navigation header
│   ├── theme-provider.tsx       # Theme configuration
│   ├── theme-toggle.tsx         # Dark/light mode toggle
│   ├── motion-div.tsx           # Animated wrapper component
│   ├── project-card.tsx         # Individual project card
│   ├── projects-section.tsx     # Projects showcase section
│   ├── community-section.tsx    # Community members section
│   ├── team-section.tsx         # Core team section
│   └── stars.tsx                # Background animation
│
├── hooks/
│   ├── use-mobile.tsx           # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
│
├── lib/
│   ├── data.ts                  # Static data
│   ├── utils.ts                 # Utility functions
│   ├── placeholder-images.ts    # Image placeholders
│   └── placeholder-images.json  # Image data
│
├── ai/
│   ├── genkit.ts                # Genkit configuration
│   └── dev.ts                   # AI development utilities
│
└── types.ts                     # TypeScript type definitions

public/                          # Static assets
docs/
├── blueprint.md                # Project design specifications
```

## 🌐 Pages

- **Home** (`/`) - Welcome page with features and call-to-action
- **Community** (`/community`) - Community member directory
- **Team** (`/team`) - Core team highlights and introductions

## 🔧 Configuration Files

- **[`next.config.ts`](next.config.ts)** - Next.js configuration with image optimization
- **[`tailwind.config.ts`](tailwind.config.ts)** - Tailwind CSS customization
- **[`tsconfig.json`](tsconfig.json)** - TypeScript configuration
- **[`postcss.config.mjs`](postcss.config.mjs)** - PostCSS setup for Tailwind
- **[`vercel.json`](vercel.json)** - Vercel deployment configuration
- **[`apphosting.yaml`](apphosting.yaml)** - Firebase App Hosting configuration

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Click the "Deploy with Vercel" button at the top of this README
2. Log in with your GitHub account
3. Authorize the Vercel integration
4. Configure your environment variables in Vercel
5. Deploy with a single click!

### Manual Deployment

```bash
# Build the project
npm run build

# Start the production server locally
npm start

# Deploy to your hosting provider
# (Follow your provider's deployment instructions)
```

For detailed deployment steps, see the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 📖 Development Guide

### Adding New Components

1. Create a new component file in [`src/components`](src/components)
2. Use Tailwind CSS for styling
3. Integrate with Framer Motion for animations
4. Add type definitions to [`src/types.ts`](src/types.ts)

### Working with Firebase

Firebase is pre-configured for authentication and data storage. Update your credentials in `.env.local` to get started.

### Using Genkit for AI Features

The project includes Google Genkit integration:

```bash
# Start Genkit development server
npm run genkit:dev

# Or with watch mode
npm run genkit:watch
```

Check [`src/ai/genkit.ts`](src/ai/genkit.ts) for configuration and [`src/ai/dev.ts`](src/ai/dev.ts) for examples.

## 🎯 Key Features Explained

### Projects Section
Automatically fetches projects from the [Alpha4Coders GitHub organization](https://github.com/orgs/Alpha4Coders) with:
- Dynamic project filtering
- Technology/category-based search
- GitHub links and metadata
- Responsive card layout

### Community Section
Interactive member directory featuring:
- Member profiles and usernames
- Core team members highlighted prominently
- Avatar support
- Smooth loading animations

### Theme System
- System preference detection
- Manual dark/light mode toggle
- Persistent theme preference
- Smooth transitions between themes

## 🤝 Contributing

We welcome contributions from the community! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

- **TypeScript**: Strict mode enabled
- **Formatting**: Follow existing code style
- **Components**: Functional components with hooks
- **Styling**: Tailwind CSS utility classes
- **Type Safety**: Avoid `any` types

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **GitHub Repository**: https://github.com/Vortex-16/Alpha-Coders-V-2
- **Alpha4Coders Organization**: https://github.com/Alpha4Coders
- **Issues**: [Report bugs or request features](https://github.com/Vortex-16/Alpha-Coders-V-2/issues)

## 👥 Core Team

- **Vortex-16** - Project Lead
- **Dealer-09** - Core Developer
- **Rouvik** - Core Developer
- **PixelPioneer404** - Core Developer

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Firebase](https://firebase.google.com/) for backend services
- [Google Genkit](https://github.com/firebase/genkit) for AI capabilities

## 📞 Support

For questions or issues:
- Open an issue on [GitHub](https://github.com/Vortex-16/Alpha-Coders-V-2/issues)
- Check existing documentation in [`docs`](docs)
- Review the project blueprint in [`docs/blueprint.md`](docs/blueprint.md)

---

**Made with ❤️ by the Alpha Coders Community**
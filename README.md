# Random Tools 😝

> _Because apparently the internet doesn't have enough random utility websites already..._

Welcome to **Random Tools** - a delightfully chaotic collection of utilities that you never knew you needed until you desperately did. This is where useful tools come to live their best life, one TypeScript component at a time.

## What's This All About?

This project is a growing arsenal of web-based tools that solve those oddly specific problems you encounter when you're deep in development hell. Currently featuring:

- **🔗 Slug Generator** - Transform any text into URL-friendly slugs with implementation code in TypeScript, JavaScript, and Python
- **📚 Git Reference** - Complete Git command reference with SSH setup, GitHub CLI guides, and advanced workflows
- **🔍 URL Comparison Tool** - Compare two URLs and analyze their differences in detail
- **💰 Price Formatter** - Format prices with currency symbols, thousands separators, and decimals in multiple programming languages

_Growing stronger by the day!_

## The Grand Vision

This humble collection has **tremendous room for growth** but is steadily becoming more useful. The architecture is built to scale from "meh" to "actually useful" with minimal effort. Each tool is:

- ✨ **Modular** - Drop in new tools like Tetris blocks
- 🎨 **Styled with TailwindCSS** - Because consistency is key
- 🔧 **TypeScript Everything** - Type safety or bust
- ♿ **Accessible** - We don't discriminate against screen readers
- 📱 **Responsive** - Works on your phone, tablet, and that ancient laptop

## Getting Started

_The usual Next.js dance:_

```bash
# Clone this masterpiece
git clone https://github.com/KigoJomo/random-tools
cd random-tools

# Install the dependencies (there are many)
npm install

# Fire up the development server
npm run dev
```

Visit `http://localhost:3000` and witness the glory of a clean search interface with four functional tools.

## Contributing

**This project NEEDS contributors** like a plant needs water. We're making progress but there's always room for more useful tools.

### How to Add a New Tool:

1. **Create your utility functions** in `lib/utils/yourTool.ts`
2. **Build the page** in `app/your-tool/page.tsx`
3. **Add it to the registry** in `lib/config/tools.ts` with proper metadata
4. **Create any needed UI components** in `lib/components/ui/`
5. **Pat yourself on the back** - you've just made this project significantly more useful

### Tool Ideas (Because We're Always Hungry for More):

- Password generators with strength indicators
- Color palette generators and extractors
- JSON formatters/validators with syntax highlighting
- Base64 encoders/decoders for text and files
- QR code generators with customization
- Text diff tools with multiple view modes
- Hash generators (MD5, SHA256, etc.)
- Lorem ipsum generators
- UUID generators
- Timestamp converters
- CSS minifiers and formatters
- Regular expression testers with examples
- _Literally anything you wish existed when you're deep in development hell_

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── compare-urls/       # URL comparison tool page
│   ├── slug-generator/     # Slug generator tool page
│   ├── git/               # Git reference guide page
│   ├── price-formatter/   # Price formatter tool page
│   ├── loading.tsx        # Global loading component
│   └── page.tsx           # Homepage with search and tool listing
├── lib/
│   ├── components/         # Reusable React components
│   │   ├── navigation/    # Navigation components (BackToTools)
│   │   └── ui/            # UI components (Input, ToolCard, Tabs, etc.)
│   ├── config/            # Tool registry and configuration
│   │   └── tools.ts       # Central tool registry with search
│   └── utils/             # Utility functions for tools
│       ├── gitContent.ts  # Git reference content
│       ├── priceFormat.ts # Price formatting utilities
│       └── slugGen.ts     # Slug generation utilities
└── public/                # Static assets
```

## Tech Stack

- **Next.js 15** - App router with React Server Components
- **React 19** - The latest and greatest
- **TypeScript 5** - Type safety is not optional
- **TailwindCSS 4** - Utility-first styling with typography plugin
- **Framer Motion** - For smooth animations
- **Lucide React** - Beautiful, consistent icons
- **React Markdown** - For rendering code examples and documentation
- **React Syntax Highlighter** - Code syntax highlighting

## Features

- **🔍 Smart Search** - Search tools by name, description, category, or tags
- **📱 Fully Responsive** - Works beautifully on all device sizes
- **⚡ Fast Development** - Hot reload with Turbopack
- **🎨 Consistent UI** - Reusable component system with tabbed interfaces
- **📖 Code Examples** - Tools include implementation examples in multiple languages
- **📚 Reference Guides** - Comprehensive guides with syntax highlighting and organized sections
- **🔗 URL Persistence** - Tab states are preserved in URLs for easy sharing
- **🏷️ Tagged Tools** - Each tool displays relevant tags for better discovery

## Contributing Guidelines

- Write TypeScript with proper type annotations
- Follow the existing component patterns in `lib/components/ui/`
- Add your tool to the registry in `lib/config/tools.ts` with appropriate tags
- Use TailwindCSS classes for styling (avoid inline styles)
- Test your tool locally before submitting
- Keep it accessible (semantic HTML, proper ARIA labels)
- Handle errors gracefully
- Don't break things (please)

## Development Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## License

MIT - Because sharing is caring and lawyers are expensive.

---

_Built with ❤️ and a healthy dose of procrastination. Now stop reading and start contributing!_

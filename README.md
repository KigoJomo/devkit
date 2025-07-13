# DevKit

> Essential utilities for developers with ready-to-use code examples

**DevKit** is a comprehensive collection of developer utilities designed to boost your development productivity. Each tool provides not just functionality, but also implementation code examples in multiple programming languages, making it easy to integrate solutions into your own projects.

## What's DevKit?

DevKit solves common development tasks with clean, efficient tools that provide immediate value. Whether you need to generate URL slugs, format prices, normalize URLs, or reference Git commands, DevKit has you covered with both interactive tools and copy-paste code solutions.

### Current Tools

- **🔗 Slug Generator** - Transform text into URL-friendly slugs with TypeScript, JavaScript, and Python implementations
- **📚 Git Reference** - Comprehensive Git command reference with SSH setup guides and GitHub CLI workflows
- **🔍 URL Comparison Tool** - Compare and analyze differences between two URLs in detail
- **🌐 URL Normalizer** - Standardize URLs with protocol and www prefix normalization
- **💰 Price Formatter** - Format prices with currency symbols and locale-specific formatting

## Key Features

- **Ready-to-use Code Examples** - Every tool includes implementation code in multiple programming languages
- **Copy-Paste Solutions** - Grab the code you need and integrate it immediately
- **Interactive Tools** - Test functionality before implementing
- **Professional Grade** - Production-ready code with proper error handling
- **Cross-Platform** - Works everywhere, responsive design included

## Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling
- **React Markdown** - Rich content rendering
- **Framer Motion** - Smooth animations
- **React Syntax Highlighter** - Beautiful code highlighting

## Getting Started

```bash
# Clone the repository
git clone https://github.com/KigoJomo/devkit
cd devkit

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open `http://localhost:3000` to access DevKit locally.

## Contributing

DevKit thrives on community contributions. We're always looking for new tools that solve common development problems.

### How to Add a New Tool

1. **Create utility functions** in `lib/utils/yourTool.ts`
2. **Build the page component** in `app/your-tool/page.tsx`
3. **Register the tool** in `lib/config/tools.ts` with proper metadata
4. **Add UI components** in `lib/components/ui/` if needed
5. **Submit a pull request** with your improvements

### Tool Ideas

We're actively seeking contributions for these utilities:

- **Security Tools**

  - Password generators with strength indicators
  - Hash generators (MD5, SHA256, etc.)
  - JWT token decoders
  - Base64 encoders/decoders

- **Data Tools**

  - JSON formatters and validators
  - CSV to JSON converters
  - XML formatters
  - YAML validators

- **Web Development**

  - Color palette generators
  - CSS minifiers and formatters
  - Regular expression testers
  - Lorem ipsum generators

- **General Utilities**
  - UUID generators
  - QR code generators
  - Timestamp converters
  - Text diff tools

### Development Guidelines

- Use **TypeScript** for all code with proper type annotations
- Follow **modular architecture** - each tool should be self-contained
- Include **code examples** in multiple programming languages
- Ensure **responsive design** with TailwindCSS
- Write **accessible HTML** with semantic markup
- Handle **errors gracefully** with user-friendly messages

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── compare-urls/       # URL comparison tool
│   ├── slug-generator/     # Slug generator with examples
│   ├── git/               # Git reference guide
│   ├── price-formatter/   # Price formatting utilities
│   ├── url-normalizer/    # URL normalization tool
│   └── page.tsx           # Homepage with tool discovery
├── lib/
│   ├── components/         # Reusable React components
│   │   ├── navigation/    # Navigation components
│   │   └── ui/            # UI component library
│   ├── config/            # Tool registry and configuration
│   │   └── tools.ts       # Central tool registry
│   └── utils/             # Tool implementation utilities
│       ├── gitContent.ts  # Git reference content
│       ├── priceFormat.ts # Price formatting functions
│       ├── slugGen.ts     # Slug generation utilities
│       └── urlNormalize.ts # URL normalization functions
```

## Development Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Deployment

DevKit is deployed at [https://tools.aqutte.co.ke](https://tools.aqutte.co.ke) and automatically updates with changes to the main branch.

## License

This project is open source and available under the MIT License.

## Support

Found a bug or have a feature request? Please open an issue on GitHub or contribute a pull request.

---

**DevKit** - Making developer productivity our priority, one utility at a time.

# Random Tools 😝

> _Because apparently the internet doesn't have enough random utility websites already..._

Welcome to **Random Tools** - a delightfully chaotic collection of utilities that you never knew you needed until you desperately did. This is where useful tools come to live their best life, one TypeScript component at a time.

## What's This All About?

This project is a growing arsenal of web-based tools that solve those oddly specific problems you encounter when you're deep in development hell. Currently featuring:

- **🔍 URL Comparison Tool** - Because manually comparing URLs character by character is so 2023
- **🔗 Slug Generator** - Transform any text into URL-friendly slugs with implementation code in TypeScript, JavaScript, and Python

_Still growing, but getting more useful!_

## The Grand Vision

This humble collection has **tremendous room for growth** (translation: it's basically empty and needs your help). The architecture is built to scale from "meh" to "actually useful" with minimal effort. Each tool is:

- ✨ **Modular** - Drop in new tools like hot mixtapes
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

Visit `http://localhost:3000` and witness the glory of... a search bar and one lonely tool card.

## Contributing

**This project NEEDS contributors** like a plant needs water. Seriously, the current tool count is embarrassingly low.

### How to Add a New Tool:

1. **Create your utility functions** in `lib/utils/yourTool.ts`
2. **Build the page** in `app/your-tool/page.tsx`
3. **Add it to the registry** in `lib/config/tools.ts`
4. **Pat yourself on the back** - you've just made this project 50% more useful

### Tool Ideas (Because We're Running Low):

- Password generators
- Color palette extractors
- JSON formatters/validators
- Base64 encoders/decoders
- QR code generators
- Text diff tools
- Hash generators
- Lorem ipsum generators
- _Literally anything you wish existed when you're deep in development hell_

## Project Structure

```
├── app/                    # Next.js app router pages
├── lib/
│   ├── components/         # Reusable React components
│   ├── config/            # Tool registry and configuration
│   └── utils/             # Utility functions for tools
└── public/                # Static assets (currently just favicon)
```

## Tech Stack

- **Next.js 15** - Because we like living on the edge
- **React 19** - The latest and greatest
- **TypeScript** - Type safety is not optional
- **TailwindCSS** - Utility-first styling
- **Framer Motion** - For those smooth animations (when we add them)

## Contributing Guidelines

- Write TypeScript (obviously)
- Follow the existing patterns (they're actually decent)
- Test your stuff locally before submitting
- Add your tool to the registry
- Keep it accessible
- Don't break things (please)

## License

MIT - Because sharing is caring and lawyers are expensive.

---

_Built with ❤️ and a healthy dose of procrastination. Now stop reading and start contributing!_

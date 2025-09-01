# Is my /regex/ safe?

A free online tool to check if your regular expressions are safe from ReDoS (Regular Expression Denial of Service) attacks. This tool helps developers identify potentially vulnerable regex patterns that could cause performance issues or security vulnerabilities.

## Features

- **ReDoS Detection**: Identifies regex patterns vulnerable to Regular Expression Denial of Service attacks
- **Real-time Validation**: Instant feedback on regex safety
- **Free & Open Source**: No registration required, completely free to use
- **Developer Friendly**: Simple interface designed for developers

## How it works

The tool uses the `safe-regex2` library to analyze regular expressions and detect potential ReDoS vulnerabilities. It checks for:

- Catastrophic backtracking patterns
- Exponential time complexity
- Nested quantifiers that could cause performance issues

## Usage

1. Visit [ismyregexsafe.com](https://ismyregexsafe.com)
2. Enter your regular expression pattern
3. Get instant feedback on whether your regex is safe or vulnerable

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

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

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is open source and available under the MIT License.

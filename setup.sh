#!/bin/bash

echo "🚀 Setting up Next.js Portfolio for GitHub Pages..."

# Check if we need to initialize the project
if [ ! -f "package.json" ]; then
    echo "📦 Initializing Next.js project..."
    npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
else
    echo "📦 Installing dependencies..."
    npm install
fi

# Install additional dependencies for the portfolio
echo "� Installing portfolio-specific dependencies..."
npm install next-themes class-variance-authority clsx tailwind-merge lucide-react gray-matter @tailwindcss/typography

# Create necessary directories
echo "📁 Creating project structure..."
mkdir -p app/{blog,projects}
mkdir -p components/{ui,layout}
mkdir -p lib
mkdir -p content/{blog,projects}
mkdir -p public

echo "⚙️  Configuring for GitHub Pages static export..."

echo "✅ Setup complete! Run 'npm run dev' to start development"
echo "📖 For GitHub Pages deployment:"
echo "   1. Run 'npm run build' to build the project" 
echo "   2. The 'out' folder will contain your static files"
echo "   3. Deploy the 'out' folder to gh-pages branch"
echo ""
echo "🎯 Next steps:"
echo "   - Update next.config.js with your GitHub repo name"
echo "   - Add your content to the content/ folder"
echo "   - Customize components in components/ folder"

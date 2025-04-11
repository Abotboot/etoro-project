# Crypto Landing Page

A modern crypto-themed landing page with animated elements and a prominent signup button.

## Deployment Instructions for Netlify

### Option 1: Deploy directly from GitHub

1. Push this code to a GitHub repository
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Select GitHub and authorize Netlify
5. Select your repository
6. In the deploy settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy site"

### Option 2: Deploy from your local machine

1. Install the Netlify CLI:
   \`\`\`
   npm install -g netlify-cli
   \`\`\`

2. Log in to your Netlify account:
   \`\`\`
   netlify login
   \`\`\`

3. Initialize Netlify in your project:
   \`\`\`
   netlify init
   \`\`\`

4. Follow the prompts to set up your site
   - When asked about the build command, enter: `npm run build`
   - When asked about the publish directory, enter: `.next`

5. Deploy your site:
   \`\`\`
   netlify deploy --prod
   \`\`\`

## Local Development

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Start the development server:
   \`\`\`
   npm run dev
   \`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

To change the signup button URL, edit the `signupUrl` variable in `app/page.tsx`.
\`\`\`

Let's add a .gitignore file:

```text file=".gitignore"
# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# netlify
.netlify

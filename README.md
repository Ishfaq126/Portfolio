# Portfolio Template

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Simply customize your data in a JSON file and deploy your personal portfolio!

## Features

- **Fully Customizable**: All content is driven by a single JSON file
- **Modern Design**: Beautiful, responsive UI with dark mode support
- **Easy Setup**: Just edit the JSON file with your information
- **Tech Stack Icons**: Support for Devicon technology icons
- **Sections Included**:
  - About/Summary
  - Skills with icons
  - Work Experience
  - Projects
  - Education
  - Contact Information

## Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm package manager

## Quick Start

1. **Install dependencies**: `pnpm install` (or `npm install` / `yarn install`)
2. **Copy example profile**: `cp src/assets/data/profile.example.json src/assets/data/profile.json`
3. **Edit your data**: Open `src/assets/data/profile.json` and fill in your information
4. **Update title**: Edit `index.html` and change the `<title>` tag
5. **Run**: `pnpm dev` (or `npm run dev` / `yarn dev`)
6. **Build**: `pnpm build` when ready to deploy

That's it! Your portfolio is ready.

## Detailed Installation

1. **Clone or download this repository**

2. **Install dependencies**

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm (recommended)
pnpm install
```

3. **Set up your profile data**

Copy the example profile file and customize it:

```bash
cp src/assets/data/profile.example.json src/assets/data/profile.json
```

**Note**: The existing `profile.json` file contains example data. You should replace it with your own information.

4. **Edit `src/assets/data/profile.json`** with your information (see [Configuration](#-configuration) section below)

5. **Update the page title** (optional)

Edit `index.html` and change the `<title>` tag to your name:

```html
<title>Your Name - Portfolio</title>
```

6. **Start the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

7. **Build for production**

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Configuration

All your portfolio content is configured in `src/assets/data/profile.json`. Here's a detailed breakdown of each field:

### Basic Information

```json
{
  "name": "Your Full Name",
  "title": "Your Portfolio Title", // Used for page title (optional)
  "location": "Your City, Country",
  "email": "your.email@example.com",
  "phone": "+1 234 567 8900",
  "profile_picture": "https://example.com/your-photo.jpg", // URL to your profile picture
  "resume_link": "https://example.com/your-resume.pdf", // Link to download your resume
  "job_title": "Your Professional Title", // e.g., "Full Stack Developer"
  "copyright": "© 2024 Your Name. Built with React, TypeScript, and Tailwind CSS."
}
```

### Social Media Links

All social links are optional. Leave empty string `""` if you don't want to display a particular platform.

```json
{
  "socials": {
    "linkedin": "https://www.linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername",
    "portfolio": "https://yourportfolio.com",
    "twitter": "https://twitter.com/yourusername",
    "medium": "https://medium.com/@yourusername",
    "devto": "https://dev.to/yourusername"
  }
}
```

### Summary

A brief professional summary about yourself:

```json
{
  "summary": "A brief professional summary about yourself. This should highlight your key skills, experience, and what you're passionate about."
}
```

### Skills

List your skills with corresponding Devicon icon keys:

```json
{
  "skills": [
    { "name": "React", "icon_key": "react-original" },
    { "name": "TypeScript", "icon_key": "typescript-plain" },
    { "name": "JavaScript", "icon_key": "javascript-plain" }
  ]
}
```

**See [Icon Reference](#-icon-reference) below for available icon keys.**

### Currently Learning

List technologies you're currently learning with corresponding Devicon icon keys (same format as skills):

```json
{
  "currentlyLearning": [
    { "name": "Rust", "icon_key": "rust-plain" },
    { "name": "Kubernetes", "icon_key": "kubernetes-plain" },
    { "name": "TensorFlow", "icon_key": "tensorflow-plain" }
  ]
}
```

### Work Experience

```json
{
  "experience": [
    {
      "role": "Software Engineer",
      "company": "Company Name",
      "location": "City, Country",
      "period": "Jan 2024 – Present",
      "link": "https://company-website.com", // Optional: company website
      "logo": "https://example.com/company-logo.png", // Optional: company logo URL
      "tech": ["react", "typescript", "nodejs", "postgresql"], // Technologies used
      "description": "Brief description of your role and key achievements."
    }
  ]
}
```

### Education

```json
{
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "university": "University Name",
      "location": "City, Country",
      "period": "Aug 2020 – May 2024",
      "grade": "A", // Optional: letter grade
      "gpa": "3.8/4.0", // Optional: GPA (use either grade or gpa)
      "logo": "https://example.com/university-logo.png", // Optional: university logo
      "details": [
        // Optional: list of achievements, coursework, etc.
        "Relevant coursework: Data Structures, Algorithms",
        "Dean's List for 3 semesters",
        "President of Computer Science Club"
      ]
    }
  ]
}
```

### Projects

```json
{
  "projects": [
    {
      "title": "Project Name",
      "tech": ["react", "typescript", "nodejs", "mongodb"], // Technologies used
      "description": "A brief description of your project.",
      "background": "https://example.com/project-screenshot.png", // Optional: project screenshot/GIF
      "live": "https://project-demo.com", // Optional: live demo URL
      "code": "https://github.com/yourusername/project", // Optional: GitHub repository URL
      "coming_soon": false // Set to true to show "Coming Soon" overlay
    }
  ]
}
```

## Icon Reference

This portfolio uses [Devicon](https://devicon.dev/) for technology icons. Icons are referenced using the format: `devicon-{icon-key}`.

### Common Icon Keys

Here are some commonly used icon keys. For the complete list, visit [Devicon's website](https://devicon.dev/).

#### Frontend

- `react-original` / `react-plain` - React
- `vuejs-plain` / `vuejs-original` - Vue.js
- `angularjs-plain` - Angular
- `nextjs-plain` / `nextjs-original` - Next.js
- `typescript-plain` - TypeScript
- `javascript-plain` - JavaScript
- `html5-plain` - HTML5
- `css3-plain` - CSS3
- `sass-original` - Sass
- `tailwindcss-plain` - Tailwind CSS
- `bootstrap-plain` - Bootstrap

#### Backend

- `nodejs-plain` - Node.js
- `express-original` - Express.js
- `python-plain` - Python
- `java-plain` - Java
- `php-plain` - PHP
- `ruby-plain` - Ruby
- `go-original` - Go
- `rust-plain` - Rust

#### Databases

- `postgresql-plain` - PostgreSQL
- `mongodb-plain` - MongoDB
- `mysql-plain` - MySQL
- `redis-plain` - Redis
- `sqlite-plain` - SQLite

#### Cloud & DevOps

- `amazonwebservices-plain-wordmark` - AWS
- `googlecloud-plain` - Google Cloud
- `azure-plain` - Azure
- `docker-plain` - Docker
- `kubernetes-plain` - Kubernetes
- `terraform-plain` - Terraform

#### Tools & Others

- `git-plain` - Git
- `github-original` / `github-plain` - GitHub
- `gitlab-plain` - GitLab
- `npm-original-wordmark` - npm
- `yarn-plain` - Yarn
- `webpack-plain` - Webpack
- `vite-plain` - Vite
- `graphql-plain` - GraphQL
- `firebase-plain` - Firebase

#### Social Media Icons (used in Header)

- `linkedin-plain` - LinkedIn
- `github-original` - GitHub
- `twitter-original` - Twitter/X

### Finding More Icons

1. Visit [Devicon.dev](https://devicon.dev/)
2. Search for the technology you need
3. Click on the icon to see available variants
4. Use the format: `{technology}-{variant}` (e.g., `react-original`, `nodejs-plain`)

**Note**: Some icons have multiple variants:

- `-plain` - Plain colored version
- `-original` - Original colored version
- `-wordmark` - With text/wordmark
- `-plain-wordmark` - Plain with wordmark

## Customization

### Colors & Theme

The portfolio uses Tailwind CSS with a dark theme. To customize colors, edit `src/index.css`:

```css
.dark {
  --primary: oklch(0.922 0 0); /* Primary color */
  --background: oklch(0.145 0 0); /* Background color */
  /* ... other color variables */
}
```

### Fonts

The portfolio uses:

- **Poppins** for body text
- **Merriweather** for headings

To change fonts, update `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Then update `src/index.css`:

```css
body {
  font-family: "YourFont", sans-serif;
}
```

### Sections

To hide or reorder sections, edit `src/App.tsx`:

```tsx
{
  /* Comment out or remove sections you don't want */
}
<div id="experience" className="mt-12">
  <WorkExperience />
</div>;
```

## Project Structure

```
portfolio/
├── src/
│   ├── assets/
│   │   └── data/
│   │       ├── profile.json          # Your profile data (edit this!)
│   │       └── profile.example.json  # Example template
│   ├── components/
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── WorkExperience.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── README.md
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect and deploy your React app

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Devicon](https://devicon.dev/) for technology icons
- [Lucide Icons](https://lucide.dev/) for UI icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/) for the framework

## Tips

1. **Profile Picture**: Use a square image (1:1 ratio) for best results. Recommended size: 400x400px or higher.

2. **Project Screenshots**: Use high-quality images or GIFs. Recommended size: 1200x600px or similar aspect ratio.

3. **Company/University Logos**: Use transparent PNGs when possible for better visual integration.

4. **Resume Link**: You can host your resume on:

   - Google Drive (make it publicly accessible)
   - Dropbox
   - Your own website
   - GitHub (as a PDF in your repository)

5. **Empty Fields**: If you don't want to display a field, you can:
   - Leave it as an empty string `""`
   - Remove it from the JSON (for optional fields)
   - Set `coming_soon: true` for projects not yet ready

## Troubleshooting

### Icons not showing?

- Make sure the Devicon CSS is loaded in `index.html`
- Check that your icon key matches the format: `{technology}-{variant}`
- Verify the icon exists on [Devicon.dev](https://devicon.dev/)

### Build errors?

- Make sure all required fields in `profile.json` are filled
- Check for JSON syntax errors (use a JSON validator)
- Ensure all image URLs are accessible

### Styling issues?

- Clear your browser cache
- Run `npm run build` to rebuild
- Check browser console for errors

---

**Happy coding!**

If you find this template useful, consider giving it a star.

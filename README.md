This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## About This Portfolio

This portfolio website is built using [Next.js](https://nextjs.org), a powerful React framework for building fast and scalable web applications. It showcases my projects, skills, and experiences in a clean and modern design.

### Features

- **Responsive Design**: Optimized for all devices, including desktops, tablets, and mobile phones.
- **Dynamic Content**: Easily update projects and information without modifying the code.
- **Fast Performance**: Leveraging Next.js features like server-side rendering and static site generation for optimal performance.
- **Custom Fonts**: Includes [Geist](https://vercel.com/font) for a professional and unique look.

### Sections

- **Home**: A brief introduction and overview of the portfolio.
- **Projects**: A showcase of my work with descriptions and links to live demos or repositories.
- **About Me**: Information about my background, skills, and interests.
- **Contact**: A form or links to connect with me via email or social media.

Feel free to explore and reach out if you have any questions or opportunities to collaborate!

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

To deploy this project, I used [Vercel](https://vercel.com), which provides seamless integration with Next.js. For the form submission functionality, I have configured the necessary environment variables in the Vercel dashboard. These variables ensure secure handling of sensitive data, such as API keys or endpoint URLs.

To set up your own deployment:

1. Go to your Vercel project dashboard.
2. Navigate to the "Settings" tab and select "Environment Variables."
3. Add the required variables (e.g., `FORM_API_URL`, `RECAPTCHA_SECRET`) with their corresponding values.
4. Deploy your project, and the environment variables will be automatically applied.

This setup ensures that the form submission works securely and efficiently in production.

# Next.js Landing Page Template with shadcn/ui

This is a modern landing page template built with Next.js and shadcn/ui components. The landing page is dynamically populated from a JSON file, making it easy to customize without changing the code.

## Features

- 🚀 Built with Next.js 15
- 🎨 Styled with Tailwind CSS
- 🧩 Uses shadcn/ui components
- 📱 Fully responsive design
- 🌙 Dark mode support
- 📄 Content loaded from JSON file
- 🔄 Easy to customize

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing the Landing Page

The landing page content is loaded from the `app_data.json` file in the root directory. You can customize the content by editing this file.

### JSON Structure

The JSON file contains the following sections:

- **Hero**: The main banner section at the top of the page
- **Features**: Highlights of your product or service
- **Testimonials**: Customer reviews
- **Pricing**: Pricing plans
- **CTA**: Call-to-action section
- **Footer**: Footer links and information

### Adding Images

Place your images in the `public` directory:

- Hero image: `/public/hero-image.jpg`
- Avatar images: `/public/avatars/[name].jpg`

## Adding More shadcn Components

You can add more shadcn components using the following command:

```bash
npx shadcn@latest add [component-name]
```

For example:

```bash
npx shadcn@latest add accordion
```

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

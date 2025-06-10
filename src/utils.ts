export type Item = {
  title: string;
  tags: string[];
  description: string;
  date: Date;
};

export const items: Item[] = [
  {
    title: 'CSS Grid vs Flexbox',
    tags: ['css', 'frontend', 'layout'],
    description:
      'Learn the key differences between Grid and Flexbox, and when to use each layout method for responsive web design.',
    date: new Date('2024-07-22'),
  },
  {
    title: 'JavaScript Promises Explained',
    tags: ['javascript', 'frontend'],
    description:
      'Understand how JavaScript promises work to handle asynchronous operations without deeply nested callbacks.',
    date: new Date('2024-09-03'),
  },
  {
    title: 'Understanding TypeScript Types',
    tags: ['typescript', 'javascript'],
    description:
      'A concise guide to TypeScript’s type system, covering primitives, unions, interfaces, and custom types.',
    date: new Date('2024-11-14'),
  },
  {
    title: 'React State Management Basics',
    tags: ['react', 'javascript', 'frontend'],
    description:
      'An introduction to managing state in React apps using useState, useReducer, and context for global state.',
    date: new Date('2024-08-10'),
  },
  {
    title: 'Next.js Routing Deep Dive',
    tags: ['react', 'nextjs', 'javascript'],
    description:
      'Explore file-based routing in Next.js, dynamic parameters, nested routes, and how to handle fallback pages with getStaticPaths.',
    date: new Date('2024-10-02'),
  },
  {
    title: 'Tailwind CSS Tips',
    tags: ['css', 'frontend'],
    description:
      'Quick, practical tips to improve your workflow with Tailwind CSS and keep your utility classes organized.',
    date: new Date('2024-12-01'),
  },
  {
    title: 'Dark Mode With CSS',
    tags: ['css', 'design', 'frontend'],
    description:
      'Implement dark mode using prefers-color-scheme media queries and CSS variables to toggle themes.',
    date: new Date('2025-01-19'),
  },
  {
    title: 'Build a REST API',
    tags: ['api', 'backend', 'node'],
    description:
      'Step-by-step tutorial to build a RESTful API using Express, complete with routing, middleware, and error handling.',
    date: new Date('2024-07-08'),
  },
  {
    title: 'Responsive Design Best Practices',
    tags: ['css', 'frontend', 'design'],
    description:
      'Make your website mobile-friendly with fluid layouts, flexible images, and CSS media queries. A must-know for modern web developers.',
    date: new Date('2025-02-12'),
  },
  {
    title: 'Forms in React Made Easy',
    tags: ['react', 'javascript', 'frontend'],
    description:
      'Simplify forms in React with controlled components, custom hooks, and error validation using libraries like React Hook Form.',
    date: new Date('2024-06-18'),
  },
  {
    title: 'Optimize Images for Web',
    tags: ['performance', 'frontend', 'design'],
    description:
      'Techniques to reduce image file sizes, convert to next-gen formats, and improve website load times and user experience.',
    date: new Date('2024-08-29'),
  },
  {
    title: 'Web Performance Fundamentals',
    tags: ['performance', 'frontend'],
    description:
      'Learn key web performance metrics like LCP, FID, CLS, and how to optimize them for better UX and SEO.',
    date: new Date('2025-03-07'),
  },
  {
    title: 'Deploy With Vercel',
    tags: ['deployment', 'frontend', 'nextjs'],
    description:
      'Easily deploy static and server-rendered web apps with Vercel. CI/CD integration and preview deployments included.',
    date: new Date('2024-10-20'),
  },
  {
    title: 'Intro to Web Accessibility',
    tags: ['accessibility', 'frontend', 'html'],
    description:
      'Create inclusive websites by adding alt text, semantic HTML, keyboard navigation, and ARIA roles where needed.',
    date: new Date('2024-11-30'),
  },
  {
    title: 'Build a Simple Portfolio',
    tags: ['html', 'css', 'frontend'],
    description:
      'Showcase your skills with a clean, personal portfolio site that includes a project gallery and contact form.',
    date: new Date('2025-01-05'),
  },
  {
    title: 'Intro to Serverless Functions',
    tags: ['backend', 'serverless', 'api'],
    description:
      'Deploy scalable backend logic without managing servers. Use APIs like AWS Lambda or Vercel Functions.',
    date: new Date('2024-09-21'),
  },
  {
    title: 'Animate With Framer Motion',
    tags: ['animation', 'react', 'frontend'],
    description:
      'Add smooth animations to your React app using Framer Motion’s powerful API for transitions, variants, and gestures.',
    date: new Date('2025-04-02'),
  },
  {
    title: 'SEO for React Apps',
    tags: ['seo', 'react', 'frontend'],
    description:
      'Boost SEO by using server-side rendering, meta tags, clean URLs, and ensuring accessibility in your React apps.',
    date: new Date('2024-08-02'),
  },
  {
    title: 'Docker for Web Developers',
    tags: ['devops', 'docker', 'backend'],
    description:
      'Use Docker to package and run your applications consistently across environments. Ideal for development, testing, and deployment.',
    date: new Date('2025-02-24'),
  },
  {
    title: 'GraphQL vs REST',
    tags: ['api', 'backend', 'graphql'],
    description:
      'Compare GraphQL and REST in terms of flexibility, performance, and structure. Learn when to choose one over the other.',
    date: new Date('2024-07-29'),
  },
];

export type Tag = {
  tagName: string;
  count: number;
};

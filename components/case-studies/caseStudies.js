const caseStudies = [
  {
    id: 'cinesearch',
    title: 'CineSearch',
    summary:
      'Search experience for movie and TV discovery with a focus on fast results and clear UI.',
    liveDemoUrl: 'https://cinesearch-mavericks.netlify.app/',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'OMDB API'],
    star: {
      situation:
        'Users needed a fast way to explore movie and TV data without navigating multiple sites.',
      task:
        'Design a focused search flow that returns results quickly and keeps the interface minimal.',
      action:
        'Built a client-server search flow, normalized API responses, and optimized result rendering.',
      result:
        'Delivered a responsive search experience with clear filtering and consistent performance.',
    },
  },
  {
    id: 'peaky-blinds',
    title: 'Legal Legacy',
  summary:
    'Full-stack legal web application enabling users to create, preview, and purchase legally formatted will documents.',
  liveDemoUrl: 'https://legallegacy.onrender.com',
  stack: [
    'React',
    'Vite',
    'TypeScript',
    'Express',
    'PostgreSQL',
    'Stripe',
    'Docker',
    'Playwright',
    'Render',
  ],
  star: {
    situation:
      'An early prototype existed on Replit but lacked production readiness, secure payments, document generation, and deployment reliability.',
    task:
      'Design and build a production-grade legal document platform with authentication, payments, PDF generation, and deployment.',
    action:
      'Rebuilt the application using a modern full-stack architecture, implemented secure auth and Stripe Checkout, automated PDF generation with Playwright and Docker, and deployed the system on Render while resolving environment and cross-browser issues.',
    result:
      'Delivered a functional end-to-end legal will builder with preview watermarking, verified payments, and downloadable final documents, ready for real-world testing and iteration.',
    },
  },
  {
    id: 'game',
    title: 'Rising Men Retreats',
summary:
  'Mobile-first retreat landing page template focused on clarity, brand consistency, and ease of reuse.',
liveDemoUrl: null,
stack: ['Astro', 'Tailwind CSS', 'HTML', 'TypeScript'],
star: {
  situation:
    'The retreat site needed to communicate trust, masculinity, and calm while remaining easy to update for future events.',
  task:
    'Design and scaffold a clean, reusable landing page architecture that is mobile-first, DRY, and simple to maintain.',
  action:
    'Defined a clear component map, centralized all content in a siteConfig file, established brand color tokens in Tailwind, and enforced strict architectural and review rules.',
  result:
    'Delivered a scalable retreat landing page foundation that is easy to customize, visually consistent with the brand, and ready to be reused for future Rising Men retreats.',
    },
  },
];

export default caseStudies;

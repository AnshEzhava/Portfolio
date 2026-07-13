// ============================================================
// Site content. Placeholder copy is marked TODO — swap in real
// details and the rest of the site updates automatically.
// ============================================================

export interface Social {
  label: string;
  handle: string;
  href: string;
}

export interface Project {
  index: string;
  title: string;
  year: string;
  role: string;
  stack: string;
  href: string;
  blurb: string;
}

export const PROFILE = {
  name: 'Ansh Baiju',
  first: 'Ansh',
  last: 'Baiju',
  roles: ['Developer', 'Designer', 'Student'],
  // TODO: replace with your real one-liner
  tagline: 'I design and build fast, considered interfaces for the web.',
  // TODO: set your city / timezone (used for the live clock in the nav)
  location: 'Bengaluru, IN',
  timeZone: 'Asia/Kolkata',
  email: 'anshdpsg@gmail.com',
};

export const SOCIALS: Social[] = [
  { label: 'GitHub', handle: '@AnshEzhava', href: 'https://github.com/AnshEzhava' },
  {
    label: 'LinkedIn',
    handle: 'ansh-baiju',
    href: 'https://www.linkedin.com/in/ansh-baiju-646984285/',
  },
  { label: 'Instagram', handle: '@anshbaiju', href: 'https://www.instagram.com/anshbaiju' },
];

export const REPO_URL = 'https://github.com/AnshEzhava/Portfolio';

// TODO: replace these with your real work.
export const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'Project Atlas',
    year: '2025',
    role: 'Design · Build',
    stack: 'Angular · TypeScript · Canvas',
    href: '#',
    blurb:
      'A real-time data canvas that turns messy spreadsheets into navigable maps. Built the rendering layer and the gesture model.',
  },
  {
    index: '02',
    title: 'Halftone',
    year: '2024',
    role: 'Solo',
    stack: 'WebGL · GLSL · Vite',
    href: '#',
    blurb:
      'An in-browser image engine that recreates risograph and halftone print textures from any photo, exported print-ready.',
  },
  {
    index: '03',
    title: 'Cadence',
    year: '2024',
    role: 'Frontend',
    stack: 'React · Node · Postgres',
    href: '#',
    blurb:
      'A focus timer that learns your rhythm and quietly reshapes your day around deep-work blocks. Shipped to 2k+ users.',
  },
  {
    index: '04',
    title: 'Field Notes',
    year: '2023',
    role: 'Design · Build',
    stack: 'Angular · Firebase',
    href: '#',
    blurb:
      'A minimal, offline-first journal with a typographic system that adapts to how much you write each day.',
  },
];

// TODO: tune to your real toolkit
export const STACK: string[] = [
  'TypeScript',
  'Angular',
  'React',
  'Node.js',
  'Figma',
  'CSS / Motion',
  'WebGL',
  'Postgres',
];

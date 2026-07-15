import getitsplit from '../img/get-it-split.png';
import parasponsive from '../img/para-sponsive.png';
import vegetable from '../img/vegetables-e-commerce-website.png';
import royalImage from '../img/royal-indian-vivah.png';
import suyashFashion from '../img/suyash-fashion.png';
import potencia from '../img/potencia.png';
import surveForm from '../img/sarve-form.png';
import yahwehInteriors from '../img/yahweh-interiors.png';
import nirmatra from '../img/nirmatra.png';
import grievanceForm from '../img/grievance-from.png';
import omkarNutureFarm from '../img/omkar-nature-farm.png';

export const PROJECTS = [
  {
    id: 'get-it-split',
    img: getitsplit,
    name: 'Get It Split (Expense Tracking App)',
    tags: ['PHP', 'Flutter', 'MySQL'],
    description: 'Full-stack expense tracking app with PHP backend, Flutter mobile app, and live web platform on Play Store.',
    links: {
      github: 'https://github.com/ankitachaudhari123',
      live: 'https://getitsplit.in/',
      playstore: 'https://play.google.com/store/apps/details?id=com.getitsplit.getitsplit',
    },
    featured: true,
  },
  {
    id: 'para-sponsive',
    img: parasponsive,
    name: 'Para Sponsive (E-Commerce Website)',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'Ajax', 'MySQL'],
    description: 'Responsive e-commerce website with product catalog, cart functionality, and PHP/MySQL backend.',
    links: { github: 'https://github.com/ankitachaudhari123/Para_Sponsive.git' },
    featured: true,
  },
  {
    id: 'vegefoods',
    img: vegetable,
    name: 'Vegefoods (E-Commerce Website)',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'Ajax', 'MySQL'],
    description: 'Vegetable e-commerce platform with dynamic product listings, user-friendly UI, and secure checkout.',
    links: { github: 'https://github.com/ankitachaudhari123/E-Commerce-Website.git' },
    featured: true,
  },
  {
    id: 'royal-indian-vivah',
    img: royalImage,
    name: 'Royal Indian Vivah - Web',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    description: 'Matrimony website frontend with responsive design, clean layouts, and user-focused experience.',
    links: {
      github: 'https://github.com/ankitachaudhari123',
      live: 'https://app.royalindianvivah.com/',
    },
    featured: true,
  },
  {
    id: 'suyash-fashion',
    img: suyashFashion,
    name: 'Suyash Fashion - E-Commerce Website',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'Ajax', 'MySQL'],
    description: 'Fashion e-commerce store with product filtering, admin panel, and full PHP backend integration.',
    links: { github: 'https://github.com/ankitachaudhari123/Fashionable-Clothes.git' },
  },
  {
    id: 'potencia',
    img: potencia,
    name: 'Potencia',
    tags: ['Wix'],
    description: 'Business website built on Wix with modern layout, service showcase, and professional branding.',
    links: {
      github: 'https://github.com/ankitachaudhari123',
      live: 'https://potencia.ae/',
    },
  },
  {
    id: 'surve-form',
    img: surveForm,
    name: 'Surve Form',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'Ajax', 'MySQL'],
    description: 'Dynamic survey/agriculture form with data validation, PHP processing, and MySQL storage.',
    links: { github: 'https://github.com/ankitachaudhari123/Agri_form' },
  },
  {
    id: 'yahweh-interiors',
    img: yahwehInteriors,
    name: 'Yahweh Interiors and Furniture',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Ajax', 'MySQL'],
    description: 'Furniture business website with product gallery, inquiry system, and full-stack PHP backend.',
    links: {
      github: 'https://github.com/ankitachaudhari123',
      live: 'https://yahwehinteriors.in/index',
    },
  },
  {
    id: 'nirmatra',
    img: nirmatra,
    name: 'Nirmatra',
    tags: ['HTML', 'CSS'],
    description: 'Clean corporate website with responsive layout and professional login portal interface.',
    links: { live: 'http://www.nirmatra.com/login' },
  },
  {
    id: 'grievance-form',
    img: grievanceForm,
    name: 'Grievance Form',
    tags: ['HTML', 'CSS', 'JavaScript', 'MD Bootstrap', 'PHP', 'Ajax', 'MySQL'],
    description: 'Grievance submission system with form validation, admin dashboard, and secure data handling.',
    links: { github: 'https://github.com/ankitachaudhari123/Grievance-Form' },
  },
  {
    id: 'omkar-nature-farm',
    img: omkarNutureFarm,
    name: 'Omkar Nature Farm',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'Ajax', 'MySQL'],
    description: 'Farm house booking website with gallery, contact forms, and complete backend functionality.',
    links: {
      github: 'https://github.com/ankitachaudhari123/Omkar-Nature-Farm.git',
      live: 'http://omkarnaturefarm.com/',
    },
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

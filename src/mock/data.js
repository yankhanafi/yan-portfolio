import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Yan Khanafi',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name Yan Khanafi, born in Samarinda. I freshly graduated from Mulawarman University\'\s Bachelor of Business Administration.',
  paragraphTwo: 'I\'\m very passionate about Technology, and Business. Having received higher education I learned a lot about Business Fundamentals.',
  paragraphThree: 'I\'\m someone who is able to work carefully and good in teamwork also have a good visual taste, have developed branding projects of several local brands, as graphic designers, photographers, and have a bit of experience in web development. My job goals is responsible for marketing strategies, designing innovative and communicative advertisements aimed at increasing brand awareness, and helping improve customer encouragement.',
  resume: 'https://www.dropbox.com/s/5wsi28fdf6a8qcr/CV%20Yan%20Khanafi%20-%202021.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Troef Coffee',
    info: 'Located in Samarinda, Troef Coffee was born with the purpose of being different from local and traditional coffee shops, with a quality of taste the specialty coffee and welcoming environment full of innovation. Therefore, the brand needed to demonstrate it\'\s values, without neglecting it\'\s visual appeal.',
    info2: '',
    url: 'https://www.instagram.com/troef_coffee',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Instinct Footwear',
    info: 'Instinct Footwear is a brand that focuses on the skateboards market, and this brand is also owned by a skateboarder. The first skate shoe brand that was born in the city of Samarinda has the goal of making durable shoes, simple designs but future proof style, and also affordable.',
    info2: '',
    url: 'https://www.instagram.com/instinctfootwearco',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Blah Skateboard',
    info: 'Blah Skateboard is skateboarding equipment that was born with a fresh, fun, and colorful design. Blah rise and shine in Samarinda with international standard product quality, and designated as one of the best local brands that is able to meet the needs of skateboarding enthusiasts.',
    info2: '',
    url: 'https://www.instagram.com/blahskateboards',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/yankhanafi',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yan-khanafi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yankhanafi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

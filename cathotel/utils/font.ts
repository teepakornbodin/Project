import { Kanit, Inter, Mitr } from 'next/font/google';

const kanit = Kanit({ weight: ['400', '600', '800'], subsets: ['thai'] });
const inter = Inter({ weight:['700'],subsets: ['latin'] });
const mitr = Mitr({ weight:['400', '600'],subsets: ['thai']});
export { kanit, inter, mitr }; 

// import { Inter } from '@nextjs-google-fonts/inter';
// import { Kanit } from '@nextjs-google-fonts/kanit';

// const inter = Inter({ weight: ['700'], subsets: ['latin'] });
// const kanit = Kanit({ weight: ['400', '600', '800'], subsets: ['thai'] });

// export { kanit, inter };

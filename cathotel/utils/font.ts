import { Kanit, Inter } from 'next/font/google';

const kanit = Kanit({ weight: ['400', '600', '800'], subsets: ['thai'] });
const inter = Inter({ weight:['700'],subsets: ['latin'] });

export { kanit, inter };
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...input) => twMerge(clsx(input));

export default cn;
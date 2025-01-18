import React from 'react'
import {motion} from 'framer-motion';
import { Link } from '@/i18n/routing';

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/" className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
            whileHover={{
                backgroundColor:["#00000e", "#00008a","#8a0045","#008a45", "#8a4500", "#121212"],
                transition:{duration:1, repeat: Infinity}
            }}
            >SC</MotionLink>
        </div>
    )
}

export default Logo
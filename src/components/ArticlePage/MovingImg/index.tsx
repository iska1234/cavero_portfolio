import { Link } from "@/i18n/routing";
import { useMotionValue, motion } from "framer-motion";
import React, { useRef } from "react";

interface MovingImgProps{
    title: string, img: string, link: string
}

const MovingImg:React.FC<MovingImgProps> = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef<HTMLImageElement | null>(null);

    function handleMouse(event: React.MouseEvent<HTMLAnchorElement>) {
        if (imgRef.current) {
            imgRef.current.style.display = "inline-block";
        }
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave() {
        if (imgRef.current) {
            imgRef.current.style.display = "none";
        }
        x.set(0);
        y.set(0);
    }


    return (
        <Link href={link} 
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
            <motion.img
            width={1200} height={500}
            style={{x: x, y:y}}
            initial={{opacity:0}}
            whileInView={{opacity: 1, transition: {duration: 0.2}}}
            ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
        </Link>
    );
};

export default MovingImg
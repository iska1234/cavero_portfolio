"use client"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedNumbersProps{
    value: number;
}

const AnimatedNumbers:React.FC<AnimatedNumbersProps> = ({ value }) => {

  const ref = useRef<HTMLSpanElement | null>(null);
  
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 5000 });
    const isInView = useInView(ref, { once: true });
  
    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue])
  
    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);
  
  
    return <span ref={ref} className=""></span>
  }
  
  export default AnimatedNumbers
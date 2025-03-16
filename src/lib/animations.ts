import { useEffect, useState, useRef, RefObject } from 'react';

interface ExtendedIntersectionObserverInit extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: ExtendedIntersectionObserverInit
): [RefObject<T>, boolean] {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);
  const { triggerOnce, ...intersectionOptions } = options || {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const isElementInView = entry.isIntersecting;
      setIsInView(isElementInView);
      
      if (triggerOnce && isElementInView) {
        observer.unobserve(element);
      }
    }, {
      threshold: 0.1,
      ...intersectionOptions
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [options, triggerOnce]);

  return [ref, isInView];
}

export function useParallax(speed: number = 0.1): RefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offset = scrollTop * speed;
      element.style.transform = `translateY(${offset}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return ref;
}

export const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export function useAnimatedCounter(
  target: number,
  duration: number = 2000
): number {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);
  
  return count;
}

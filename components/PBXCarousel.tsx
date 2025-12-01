import { useEffect, useState, useRef } from 'react';
import { motion, PanInfo } from 'motion/react';
import React, { JSX } from 'react';

export interface CarouselItem {
  title: string;
  id: number;
  image?: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  { title: 'Text Animations', id: 1 },
  { title: 'Animations', id: 2 },
  { title: 'Components', id: 3 },
  { title: 'Backgrounds', id: 4 },
  { title: 'Common UI', id: 5 }
];

const VELOCITY_THRESHOLD = 500;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function PBXCarousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps): JSX.Element {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;

    const container = containerRef.current;
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || (pauseOnHover && isHovered)) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = prev + 1;
        return loop ? nextIndex % items.length : Math.min(nextIndex, items.length - 1);
      });
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, pauseOnHover]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const { offset, velocity } = info;

    if (offset.x < -10 || velocity.x < -VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => (loop ? (prev + 1) % items.length : Math.min(prev + 1, items.length - 1)));
    } else if (offset.x > 10 || velocity.x > VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => (loop ? (prev - 1 + items.length) % items.length : Math.max(prev - 1, 0)));
    }
  };

  const item = items[currentIndex];

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${round ? 'rounded-full' : 'rounded-[24px]'}`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` })
      }}
    >
      <motion.div
        drag="x"
        onDragEnd={handleDragEnd}
        dragElastic={0.9}
        className="flex items-center justify-center"
        style={{
          width: itemWidth,
          height: round ? itemWidth : '100%',
          ...(round && { borderRadius: '50%' })
        }}
      >
        <motion.img
          key={currentIndex}
          src={item.image}
          alt={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: autoplayDelay/10000 }}
          className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
          style={{
            ...(round && { borderRadius: '50%' })
          }}
        />
      </motion.div>
    </div>
  );
}
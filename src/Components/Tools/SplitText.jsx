import { useState, useEffect, useRef } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 15, // Reduced delay for faster animation
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onAnimationComplete,
}) => {
  const letters = text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const [completedAnimations, setCompletedAnimations] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (completedAnimations === letters.length && onAnimationComplete) {
      onAnimationComplete();
    }
  }, [completedAnimations, letters.length, onAnimationComplete]);

  const handleAnimationEnd = () => {
    setCompletedAnimations(prev => prev + 1);
  };

  return (
    <div 
      ref={ref}
      className={`${className}`}
      style={{ textAlign }}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          onAnimationEnd={handleAnimationEnd}
          style={{
            display: 'inline-block',
            opacity: 0,
            animation: inView ? `letterAppear 200ms ease-out forwards ${index * delay}ms` : 'none',
            marginRight: letter === ' ' ? '0.5em' : '0' // Add space between words
          }}
        >
          {letter}
        </span>
      ))}

      <style jsx>{`
        @keyframes letterAppear {
          0% {
            opacity: 0;
            transform: scale(0) rotate(45deg);
          }
          50% {
            transform: scale(1.2) rotate(-15deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SplitText;

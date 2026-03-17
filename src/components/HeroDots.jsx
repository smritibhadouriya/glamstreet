// hooks/useHeroSlider.js
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    headline: (
      <>
        Own Your Glam,<br />
        <em style={{ color: '#e91e8c', fontStyle: 'italic' }}>Own Your Confidence.</em>
      </>
    ),
    subtext: "We are The Glam Street — discover products that don't just make you look good, they make you feel unstoppable.",
  },
  {
    headline: (
      <>
        Beauty That's<br />
        <em style={{ color: '#e91e8c', fontStyle: 'italic' }}>Truly Yours.</em>
      </>
    ),
    subtext: "From skincare to makeup — every product is handpicked to celebrate your unique, radiant self.",
  },
  {
    headline: (
      <>
        Glow Boldly,<br />
        <em style={{ color: '#e91e8c', fontStyle: 'italic' }}>Live Fabulously.</em>
      </>
    ),
    subtext: "Step into a world where self-care meets style. Your confidence is just one click away.",
  },
];

export function useHeroSlider() {
  const [cur, setCur] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setVisible(false);
    setTimeout(() => {
      setCur(i);
      setVisible(true);
      startTimer();
    }, 450);
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCur((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 450);
    }, 3500);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return { cur, visible, goTo, slides };
}
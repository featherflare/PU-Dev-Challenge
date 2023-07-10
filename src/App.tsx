import { useEffect, useRef, useState, RefObject } from 'react';
import './App.css';
import Hero from './components/Hero';
import Cases from './components/Cases';
import Opinions from './components/Opinions';
import Footer from './components/Footer';

function App() {
  const [section, setSection] = useState<number>(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const caseRef = useRef<HTMLElement | null>(null);
  const opinionsRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const buttonRef: RefObject<any> = useRef();

  // set scroll Y axis value
  const [y, setY] = useState(0);

  const handleClick = () => {
    // Scroll to section when click button
    if (
      heroRef.current &&
      caseRef.current &&
      opinionsRef.current &&
      footerRef.current
    ) {
      if (section === 3) {
        heroRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 0) {
        caseRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 1) {
        opinionsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 2) {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // set section detect
    if (innerHeight - 10 > y && y >= 0) {
      setSection(0);
    } else if (innerHeight * 2 - 10 > y && y >= innerHeight - 10) {
      setSection(1);
    } else if (innerHeight * 2 + 100 > y && y >= innerHeight * 2 - 10) {
      setSection(2);
    } else if (y > innerHeight * 2 + 100) {
      setSection(3);
    }
  }, [y]);

  function handleScroll() {
    const scrollY = window.scrollY;
    setY(scrollY);
  }

  useEffect(() => {
    console.log(section);
    if (section === 0) {
      heroRef.current?.classList.remove('active');
      caseRef.current?.classList.remove('active');
      opinionsRef.current?.classList.remove('active');
      footerRef.current?.classList.remove('active');
      buttonRef.current.classList.remove('flip');
    } else if (section === 1) {
      heroRef.current?.classList.remove('active');
      caseRef.current?.classList.add('active');
      opinionsRef.current?.classList.remove('active');
      footerRef.current?.classList.remove('active');
      buttonRef.current.classList.remove('flip');
    } else if (section === 2) {
      heroRef.current?.classList.remove('active');
      caseRef.current?.classList.remove('active');
      opinionsRef.current?.classList.add('active');
      footerRef.current?.classList.remove('active');
      buttonRef.current.classList.remove('flip');
    } else if (section === 3) {
      heroRef.current?.classList.remove('active');
      caseRef.current?.classList.remove('active');
      opinionsRef.current?.classList.remove('active');
      footerRef.current?.classList.add('active');
      buttonRef.current.classList.add('flip');
    }
  }, [section]);

  return (
    <>
      <div className='sticky' onClick={handleClick} ref={buttonRef}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='26'
          height='26'
          viewBox='0 0 26 26'
          fill='none'
        >
          <path d='M7 12L13 16L19 12' />
          <circle cx='13' cy='13' r='12.5' />
        </svg>
      </div>
      <Hero ref={heroRef} />
      <Cases ref={caseRef} />
      <Opinions ref={opinionsRef} />
      <Footer ref={footerRef} />
    </>
  );
}

export default App;

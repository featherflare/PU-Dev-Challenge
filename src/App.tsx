import { useRef, useState } from 'react';
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

  const handleClick = () => {
    if (
      heroRef.current &&
      caseRef.current &&
      opinionsRef.current &&
      footerRef.current
    ) {
      console.log(section);
      if (section === 3) {
        heroRef.current.scrollIntoView({ behavior: 'smooth' });
        setSection(0);
      } else if (section === 0) {
        caseRef.current.scrollIntoView({ behavior: 'smooth' });
        setSection(1);
      } else if (section === 1) {
        opinionsRef.current.scrollIntoView({ behavior: 'smooth' });
        setSection(2);
      } else if (section === 2) {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
        setSection(3);
      }
    }
  };

  return (
    <>
      <div className='sticky' onClick={handleClick}>
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

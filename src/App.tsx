import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import Gallery from './components/Gallery/Gallery';
import Aboutme from './components/Aboutme/Aboutme';
import Contacts from './components/Contacts/Contacts';

export default function App() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSectionOffset =
        document.getElementById('section2')?.offsetTop || 0;
      setShowButtons(window.scrollY >= secondSectionOffset - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header showButtons={showButtons} />

      <section id="section1">
        <Hero />
      </section>

      <section id="section2">
        <Body />
      </section>

      <section id="section2">
        <Gallery />
      </section>
      <section id="section2">
        <Aboutme />
      </section>
      <section id="section2">
        <Contacts />
      </section>
    </>
  );
}

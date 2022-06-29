import type { NextPage } from 'next';
import { MutableRefObject, useEffect, useRef } from 'react';
import { useState } from 'react';
import Contact from '../component/Contact';
import FloatingBtn from '../component/FloatingBtn';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Home from '../component/Home';
import Intro from '../component/Intro';
import MobileHeader from '../component/MobileHeader';
import Service from '../component/Service';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { sizes } from '../styles/media';

export type menuType = 'HOME' | 'INTRO' | 'SERVICE' | 'CONTACT';
export type IRef = MutableRefObject<HTMLElement | null>;

export type IMenuElem = {
  [key in menuType]: IRef;
};

const Index: NextPage = () => {
  const [isPC, setIsPC] = useState<boolean>(false);
  const homeRef = useRef(null);
  const introRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);

  const sectionArrRef = useRef<IMenuElem>({
    HOME: homeRef,
    INTRO: introRef,
    SERVICE: serviceRef,
    CONTACT: contactRef,
  });

  const headerChange = (width: number) => {
    console.log(width);
    width > sizes.tablet ? setIsPC(true) : setIsPC(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
    window.addEventListener('resize', () => headerChange(innerWidth));
    //기기 방향 전환 시, innerwidth가 방향전환 전으로만 찍히기 때문에, 방향전환 시에는 screen의 width를 참조하도록 함
    window.addEventListener('orientationchange', () =>
      headerChange(screen.width),
    );
    headerChange(innerWidth);
  }, []);
  return (
    <>
      {isPC ? (
        <Header sectionArrRef={sectionArrRef.current} />
      ) : (
        <MobileHeader sectionArrRef={sectionArrRef.current} />
      )}
      <Home parentRef={homeRef} />
      <Intro parentRef={introRef} />
      <Service parentRef={serviceRef} />
      <Contact parentRef={contactRef} />
      <Footer />
      <FloatingBtn />
    </>
  );
};

export default Index;

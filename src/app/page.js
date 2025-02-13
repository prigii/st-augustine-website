// app/page.js
"use client";


import Hero from './components/Hero';
import About from './components/About';
import MassSchedule from './components/MassSchedule';
// import UpcomingEvents from './components/UpcomingEvents';
import Sacraments from './components/Sacraments';
// import Contact from './components/Contact';
import Donate from './components/Donate';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <MassSchedule />
      {/* <UpcomingEvents /> */}
      <Sacraments />

      {/* <Contact /> */}
      <Donate />
      {/* <Clergy /> */}

    </main>
  );
};

export default HomePage;

// app/page.js
"use client";


import Hero from './home/Hero';
import About from './home/About';
import MassSchedule from './home/MassSchedule';
// import UpcomingEvents from './components/UpcomingEvents';
import Sacraments from './home/Sacraments';
// import Contact from './components/Contact';
import Donate from './home/Donate';

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

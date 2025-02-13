// app/layout.js

import Footer from './components/Footer';
import Navbar from './components/Navbar';  // Adjust the import path based on your file structure
import './styles/globals.css';  // Import global CSS (adjust based on your setup)

export const metadata = {
  title: 'St Augustine Catholic Parish, Juja',
  description: 'Welcome to St. Augustine Catholic Parish, Juja. Experience the warmth and community of our parish.',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
     <body>
        <Navbar />
        <main>{children}</main>
       
        <Footer />
      </body>
    </html>
  );
};

export default Layout;

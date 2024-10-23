// app/layout.js

import Navbar from './components/Navbar';  // Adjust the import path based on your file structure
import './styles/globals.css';  // Import global CSS (adjust based on your setup)

export const metadata = {
  title: 'St Augustine Catholic Parish, Juja',
  description: 'Welcome to St Augustine Catholic Parish, Juja. Experience the warmth and community of our parish.',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>St Augustine Catholic Parish & University Chaplaincy, Juja</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        {/* You can add a footer here if you have one */}
      </body>
    </html>
  );
};

export default Layout;

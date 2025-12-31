import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../style/global.css';

export const metadata = {
  title: 'News Application',
  description: 'this is a news next.js application which is only build to enhence the next.js practices'
};

import React from 'react'

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.8.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="appContainer">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;
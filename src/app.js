import React from 'react';
import ReactDOM from 'react-dom/client'; 
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

/**
* Header
*  - Logo (Title)
*  - Nav Items (Right Side)
*  - Cart
* Body
*  - Search Bar
*  - Restaurants list
*    - Restaurant Card (many)
*      - Image
*      - Name
*      - Rating
*      - Cuisines
* Footer
*  - Links
*  - Copyright
*/

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopAndReset = () => {
  const location = useLocation(); // React Router ka hook jo current route ka path batata hai

  useEffect(() => {
    // Jab bhi route change ho, page ko top pe scroll kar dein
    window.scrollTo(0, 0);

    // Agar aapko state ya form reset karna ho, to wo bhi yahan handle kar sakte hain
    const form = document.querySelector('form'); // Example: Form ko reset karna agar exist kare
    if (form) {
      form.reset();
    }

  }, [location.pathname]); // Yeh effect har route ke change pe trigger hoga

  return null; // Yeh component kuch render nahi karega, sirf apna side-effect lagayega
};

export default ScrollToTopAndReset;

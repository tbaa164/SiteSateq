import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll restoration with hash & saved position intent
const RouteScrollRestorer = () => {
  const location = useLocation();

  useEffect(() => {
    // If there is a hash (#anchor), scroll to that element smoothly
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
        return;
      }
    }

    // Default: always scroll to top instantly (avoid seeing bottom flash)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname, location.hash]);

  return null;
};

export default RouteScrollRestorer;

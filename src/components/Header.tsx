import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedMenus, setMobileExpandedMenus] = useState<string[]>([]);
  const { language, setLanguage, t } = useLanguage();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  // Function to handle smooth scroll to contact section
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };
  
  // Effect to handle clicks outside dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If there's an open dropdown and the click is outside it
      if (openDropdown !== null) {
        const clickedDropdown = Object.entries(dropdownRefs.current).find(([name, ref]) => 
          ref?.contains(event.target as Node)
        );
        
        if (!clickedDropdown) {
          setOpenDropdown(null);
        }
      }
    }
    
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);
  
  const navItems = [
    { name: "Actualités", href: "/actualites" },
    { 
      name: "Produits", 
      href: "/produits",
      dropdown: [
        { name: "Systèmes et Réseaux", href: "/systemes-reseaux" },
        { name: "Cartes", href: "/cartes" },
        { name: "Terminaux", href: "/terminaux" }
      ]
    },
    { 
      name: "Services", 
      href: "#services",
      dropdown: [
        { name: "Digitalisation", href: "/numerisation-services" },
        { name: t('nav.training'), href: "/formation" }
      ]
    },
    { 
      name: "Applications", 
      href: "#applications",
      dropdown: [
        { name: "Identité Numérique", href: "/identite-numerique" },
        { name: "Monétique", href: "/monetique" }
      ]
    },
       { 
      name: t('nav.communication'), 
      href: "/communication",
      dropdown: [
        { name: "Solutions Voix sur IP", href: "/voip-call-center" },
        { name: "Publicité", href: "/communication" }
      ]
    },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-all duration-300 transform hover:scale-[1.02]">
            <img 
              src="/logos/LOGO-SATEQ-DIGITAL.jpg" 
              alt="SATEQ Digital Group" 
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.name === "Contact" ? (
                  <a 
                    href="#contact"
                    className="px-5 py-2 text-gray-700 font-medium hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
                    onClick={handleContactClick}
                  >
                    {item.name}
                  </a>
                ) : item.dropdown ? (
                  <div className="relative" ref={(el) => dropdownRefs.current[item.name] = el}>
                    <button 
                      className={`px-4 xl:px-6 py-2 text-gray-700 hover:text-primary transition-all duration-200 font-medium flex items-center gap-1.5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 ${openDropdown === item.name ? 'text-primary after:w-full' : ''}`}
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 bg-white border border-gray-100 rounded-md shadow-lg z-50 animate-in fade-in-5 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 overflow-hidden">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-all duration-200 border-b border-gray-50 last:border-b-0"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={item.href} className="px-4 xl:px-6 py-2 text-gray-700 font-medium hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button 
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (!isMenuOpen) {
                  setMobileExpandedMenus([]);
                }
              }} 
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-all duration-200 text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 border-t border-gray-100 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col divide-y divide-gray-100">
              {navItems.map(item => 
                item.name === "Contact" ? (
                  <a 
                    key={item.name}
                    href="#contact" 
                    className="py-3 px-4 text-gray-700 hover:text-primary transition-all duration-200 flex items-center justify-between"
                    onClick={handleContactClick}
                  >
                    {item.name}
                  </a>
                ) : item.dropdown ? (
                  <div key={item.name} className="py-3 px-4">
                    <div 
                      className="flex items-center justify-between text-gray-700 font-medium cursor-pointer"
                      onClick={() => {
                        if (mobileExpandedMenus.includes(item.name)) {
                          setMobileExpandedMenus(mobileExpandedMenus.filter(name => name !== item.name));
                        } else {
                          setMobileExpandedMenus([...mobileExpandedMenus, item.name]);
                        }
                      }}
                    >
                      {item.name}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${mobileExpandedMenus.includes(item.name) ? 'rotate-90' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    {mobileExpandedMenus.includes(item.name) && (
                      <div className="pl-4 mt-2 space-y-1 border-l-2 border-gray-100 animate-in slide-in-from-top duration-200">
                        {item.dropdown.map(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block py-2 px-3 text-gray-600 hover:text-primary transition-all duration-200 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className="py-3 px-4 text-gray-700 hover:text-primary transition-all duration-200 flex items-center justify-between"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    {item.name !== "Actualités" && item.name !== "Contact" && (
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
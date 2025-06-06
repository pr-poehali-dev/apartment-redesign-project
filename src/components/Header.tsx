import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "О компании", href: "/about" },
    { name: "Контакты", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              className="h-8 w-8 text-orange-500 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.5 2c-1.5 0-2.5 1-2.5 2.5 0 1 .5 1.8 1.2 2.3L6 9H4c-.6 0-1 .4-1 1s.4 1 1 1h2l2.2-2.2c.5.7 1.3 1.2 2.3 1.2 1.5 0 2.5-1 2.5-2.5S11 5 9.5 5c-.3 0-.6.1-.9.2L10 3.8c.2-.1.3-.3.3-.5 0-.4-.3-.8-.8-.8zm8.3 8.5c-.4 0-.8.2-1 .5L15 13.5c-.5-.3-1.1-.5-1.8-.5-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-.7-.2-1.3-.5-1.8L18 13.2c.3-.2.5-.6.5-1 0-.4-.3-.7-.7-.7z" />
              <path d="M20 14c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2z" />
            </svg>
            <div>
              <h1 className="text-xl font-bold text-gray-900 font-montserrat">
                ДемонтажПро
              </h1>
              <p className="text-xs text-gray-600 font-open-sans">
                Профессиональный демонтаж
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors font-open-sans ${
                  isActive(item.href)
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900 font-open-sans">
                +7 (495) 123-45-67
              </p>
              <p className="text-xs text-gray-600 font-open-sans">
                Круглосуточно
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors font-open-sans"
            >
              Заказать звонок
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors font-open-sans ${
                    isActive(item.href)
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <p className="px-3 text-sm font-semibold text-gray-900 font-open-sans">
                  +7 (495) 123-45-67
                </p>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 mx-3 bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors font-open-sans inline-block"
                >
                  Заказать звонок
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

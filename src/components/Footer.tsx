import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Icon name="Wrench" className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <h2 className="text-xl font-bold font-montserrat">
                  ДемонтажПро
                </h2>
                <p className="text-gray-400 text-sm font-open-sans">
                  Профессиональный демонтаж
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 font-open-sans">
              Профессиональные услуги по демонтажу квартир, внутренней отделки и
              сносу домов. Более 10 лет опыта и тысячи довольных клиентов.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Icon name="Phone" className="h-4 w-4 text-red-600 mr-2" />
                <span className="text-sm font-open-sans">
                  +7 (495) 123-45-67
                </span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 text-red-600 mr-2" />
                <span className="text-sm font-open-sans">
                  info@demontazpro.ru
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              Услуги
            </h3>
            <ul className="space-y-2 font-open-sans">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Демонтаж квартир
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Снос внутренних стен
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Демонтаж отделки
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Снос домов
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              Навигация
            </h3>
            <ul className="space-y-2 font-open-sans">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-open-sans">
            © 2024 ДемонтажПро. Все права защищены.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center">
              <Icon name="Shield" className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-300 font-open-sans">
                Лицензия № 12345
              </span>
            </div>
            <div className="flex items-center">
              <Icon name="Clock" className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-sm text-gray-300 font-open-sans">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

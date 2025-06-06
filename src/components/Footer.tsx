import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Демонтаж квартир", href: "/services" },
    { name: "Снос домов", href: "/services" },
    { name: "Демонтаж отделки", href: "/services" },
    { name: "Демонтаж стен", href: "/services" },
  ];

  const company = [
    { name: "О компании", href: "/about" },
    { name: "Наши работы", href: "/portfolio" },
    { name: "Цены", href: "/pricing" },
    { name: "Контакты", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.poehali.dev/files/343f4427-f376-4ae2-9d49-053e3d8265c1.jpg"
                alt="Серп и Молот"
                className="h-12 w-12 rounded-lg mr-3 object-cover"
              />
              <h3 className="text-xl font-bold font-montserrat">
                "Серп и Молот"
              </h3>
            </div>
            <p className="text-gray-300 mb-4 font-open-sans">
              Профессиональные демонтажные работы в Москве и области. Более 10
              лет опыта, современное оборудование, соблюдение всех норм
              безопасности.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+79266621356"
                className="text-gray-300 hover:text-white"
              >
                <Icon name="Phone" className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@demolition.ru"
                className="text-gray-300 hover:text-white"
              >
                <Icon name="Mail" className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/79266621356"
                className="text-gray-300 hover:text-white"
              >
                <Icon name="MessageCircle" className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">
              Услуги
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors font-open-sans"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">
              Компания
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors font-open-sans"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Icon name="Phone" className="h-5 w-5 text-red-500 mr-3" />
              <div>
                <p className="font-semibold font-open-sans">+7 926-662-13-56</p>
                <p className="text-sm text-gray-400 font-open-sans">
                  Круглосуточно
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" className="h-5 w-5 text-red-500 mr-3" />
              <div>
                <p className="font-semibold font-open-sans">
                  info@demolition.ru
                </p>
                <p className="text-sm text-gray-400 font-open-sans">
                  Ответим в течение часа
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Icon name="MapPin" className="h-5 w-5 text-red-500 mr-3" />
              <div>
                <p className="font-semibold font-open-sans">Москва и область</p>
                <p className="text-sm text-gray-400 font-open-sans">
                  Выезд в любой район
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-open-sans">
            © {currentYear} "Серп и Молот". Все права защищены. Лицензия на
            строительные работы. Полное страхование ответственности.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Демонтаж квартир",
      description:
        "Полный демонтаж внутренних конструкций квартиры с вывозом мусора",
      price: "от 500 ₽/м²",
      iconName: "Home",
      features: [
        "Снос внутренних стен",
        "Демонтаж напольных покрытий",
        "Удаление сантехники",
        "Вывоз строительного мусора",
      ],
    },
    {
      title: "Демонтаж отделки",
      description: "Аккуратное удаление старой отделки перед ремонтом",
      price: "от 200 ₽/м²",
      iconName: "Paintbrush",
      features: [
        "Снятие обоев и краски",
        "Демонтаж плитки",
        "Удаление старых потолков",
        "Зачистка поверхностей",
      ],
    },
    {
      title: "Снос домов",
      description: "Профессиональный снос частных домов и хозпостроек",
      price: "от 1500 ₽/м²",
      iconName: "Building",
      features: [
        "Получение разрешений",
        "Безопасный снос",
        "Вывоз обломков",
        "Планировка участка",
      ],
    },
  ];

  const advantages = [
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Соблюдаем все нормы безопасности и имеем страховку",
    },
    {
      icon: "Clock",
      title: "Скорость",
      description: "Выполняем работы в установленные сроки",
    },
    {
      icon: "Award",
      title: "Качество",
      description: "10+ лет опыта и тысячи довольных клиентов",
    },
    {
      icon: "Truck",
      title: "Вывоз мусора",
      description: "Включен в стоимость услуг",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="md:text-4xl mb-6 font-montserrat text-white font-bold text-3xl">
                Профессиональные демонтажные работы
              </h1>
              <p className="mb-8 font-open-sans text-xl text-slate-800">
                Быстро, безопасно и с гарантией качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors font-open-sans text-center"
                >
                  Получить расчёт
                </Link>
                <a
                  href="tel:+74951234567"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-red-600 transition-colors font-open-sans text-center"
                >
                  +7 926-662-13-56
                </a>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Профессиональный рабочий с инструментами"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Полный спектр демонтажных работ для частных и коммерческих
              объектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors font-open-sans"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Мы гарантируем качество и безопасность всех работ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={advantage.icon as any}
                    className="h-8 w-8 text-red-600"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 font-open-sans">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Готовы начать демонтаж?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-open-sans">
            Получите бесплатную консультацию и расчёт стоимости за 15 минут
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors font-open-sans"
            >
              Заказать расчёт
            </Link>
            <a
              href="tel:+74951234567"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors font-open-sans"
            >
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

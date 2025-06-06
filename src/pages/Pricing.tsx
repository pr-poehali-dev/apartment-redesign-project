import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceCard from "@/components/PriceCard";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Pricing = () => {
  const apartmentPrices = [
    {
      title: "Частичный демонтаж",
      description: "Демонтаж отделки и сантехники",
      price: "от 200",
      unit: "₽/м²",
      features: [
        "Снятие обоев и краски",
        "Демонтаж плитки",
        "Удаление напольных покрытий",
        "Демонтаж сантехники",
        "Уборка помещения",
      ],
    },
    {
      title: "Полный демонтаж",
      description: "Демонтаж до несущих стен",
      price: "от 500",
      unit: "₽/м²",
      features: [
        "Все работы частичного демонтажа",
        "Снос перегородок",
        "Демонтаж дверей и окон",
        "Разборка полов до плит",
        "Вывоз строительного мусора",
        "Влажная уборка",
      ],
      isPopular: true,
    },
    {
      title: "Капитальный демонтаж",
      description: "Демонтаж с перепланировкой",
      price: "от 800",
      unit: "₽/м²",
      features: [
        "Все работы полного демонтажа",
        "Получение разрешений",
        "Снос несущих стен (по согласованию)",
        "Изменение планировки",
        "Подготовка проекта",
        "Техническое сопровождение",
      ],
    },
  ];

  const housePrices = [
    {
      title: "Деревянный дом",
      description: "Снос деревянных построек",
      price: "от 800",
      unit: "₽/м²",
      features: [
        "Демонтаж кровли",
        "Разборка стен",
        "Демонтаж фундамента",
        "Вывоз материалов",
        "Планировка участка",
      ],
    },
    {
      title: "Кирпичный дом",
      description: "Снос кирпичных зданий",
      price: "от 1200",
      unit: "₽/м²",
      features: [
        "Получение разрешений",
        "Отключение коммуникаций",
        "Механизированный снос",
        "Дробление фундамента",
        "Вывоз строительного мусора",
        "Рекультивация участка",
      ],
      isPopular: true,
    },
    {
      title: "Бетонный дом",
      description: "Снос железобетонных конструкций",
      price: "от 1800",
      unit: "₽/м²",
      features: [
        "Алмазная резка",
        "Контролируемый взрыв (при необходимости)",
        "Спецтехника для сноса",
        "Переработка бетона",
        "Полная очистка участка",
        "Экологическая безопасность",
      ],
    },
  ];

  const additionalServices = [
    { name: "Получение разрешений", price: "от 15 000", unit: "₽" },
    { name: "Отключение коммуникаций", price: "от 5 000", unit: "₽" },
    { name: "Вывоз мусора (1 тонна)", price: "от 2 500", unit: "₽" },
    { name: "Алмазная резка", price: "от 3 000", unit: "₽/м" },
    { name: "Демонтаж лифта", price: "от 50 000", unit: "₽" },
    { name: "Аварийный демонтаж", price: "от 1 500", unit: "₽/м²" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Цены на демонтаж
            </h1>
            <p className="text-xl text-green-100 mb-8 font-open-sans max-w-3xl mx-auto">
              Прозрачные цены без скрытых доплат. Точный расчёт стоимости после
              осмотра объекта нашим специалистом.
            </p>
            <div className="bg-green-500 bg-opacity-20 rounded-lg p-4 inline-block">
              <p className="text-green-100 font-open-sans">
                🎯 Выезд и составление сметы —{" "}
                <span className="font-bold">БЕСПЛАТНО</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Demolition Prices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Демонтаж квартир
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Стоимость работ зависит от площади и сложности демонтажа
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {apartmentPrices.map((price, index) => (
              <PriceCard key={index} {...price} />
            ))}
          </div>
        </div>
      </section>

      {/* House Demolition Prices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Снос домов и зданий
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Профессиональный снос с использованием спецтехники
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {housePrices.map((price, index) => (
              <PriceCard key={index} {...price} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Дополнительные услуги
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Полный комплекс сопутствующих услуг
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-900 font-montserrat">
                    {service.name}
                  </h4>
                  <span className="text-green-600 font-bold font-montserrat">
                    {service.price} {service.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors Affecting Price */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              От чего зависит стоимость
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Home",
                title: "Площадь объекта",
                description: "Чем больше площадь, тем ниже цена за м²",
              },
              {
                icon: "Settings",
                title: "Сложность работ",
                description: "Тип конструкций и материалов",
              },
              {
                icon: "MapPin",
                title: "Расположение",
                description: "Удалённость от МКАД и транспортная доступность",
              },
              {
                icon: "Clock",
                title: "Срочность",
                description: "Работы в выходные и праздники",
              },
            ].map((factor, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={factor.icon as any}
                    className="h-8 w-8 text-green-600"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
                  {factor.title}
                </h3>
                <p className="text-gray-600 font-open-sans">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Нужен точный расчёт?
          </h2>
          <p className="text-xl text-green-100 mb-8 font-open-sans">
            Вызовите нашего специалиста для бесплатной оценки объёма работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors font-open-sans"
            >
              Заказать оценку
            </Link>
            <a
              href="tel:+79266621356"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors font-open-sans"
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

export default Pricing;

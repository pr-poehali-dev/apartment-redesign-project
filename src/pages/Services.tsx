import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      title: "Демонтаж квартир",
      description:
        "Полный демонтаж внутренних конструкций квартиры с подготовкой к ремонту",
      price: "от 500 ₽/м²",
      iconName: "Home",
      features: [
        "Снос не несущих стен и перегородок",
        "Демонтаж напольных покрытий",
        "Удаление сантехники и электрики",
        "Демонтаж дверей и окон",
        "Вывоз строительного мусора",
        "Уборка после работ",
      ],
    },
    {
      title: "Демонтаж отделки",
      description:
        "Аккуратное удаление старой отделки с сохранением основных конструкций",
      price: "от 200 ₽/м²",
      iconName: "Paintbrush",
      features: [
        "Снятие обоев и краски",
        "Демонтаж керамической плитки",
        "Удаление подвесных потолков",
        "Демонтаж ламината и паркета",
        "Зачистка поверхностей",
        "Подготовка к новой отделке",
      ],
    },
    {
      title: "Снос частных домов",
      description:
        "Профессиональный снос домов и хозяйственных построек любой сложности",
      price: "от 1500 ₽/м²",
      iconName: "Building",
      features: [
        "Получение разрешительных документов",
        "Отключение коммуникаций",
        "Поэтапный безопасный снос",
        "Дробление фундамента",
        "Вывоз всех материалов",
        "Планировка и очистка участка",
      ],
    },
    {
      title: "Демонтаж стен",
      description:
        "Безопасный снос внутренних стен с учётом несущих конструкций",
      price: "от 800 ₽/м²",
      iconName: "Hammer",
      features: [
        "Анализ конструктивных особенностей",
        "Согласование с управляющей компанией",
        "Аккуратный демонтаж",
        "Сохранение коммуникаций",
        "Зачистка мест соединений",
        "Минимум пыли и шума",
      ],
    },
    {
      title: "Демонтаж кровли",
      description: "Демонтаж старой кровли и стропильной системы",
      price: "от 300 ₽/м²",
      iconName: "Triangle",
      features: [
        "Демонтаж кровельного покрытия",
        "Разборка обрешётки",
        "Демонтаж стропильной системы",
        "Утилизация материалов",
        "Безопасность на высоте",
        "Защита от осадков",
      ],
    },
    {
      title: "Демонтаж фасада",
      description: "Удаление старых фасадных систем и отделочных материалов",
      price: "от 400 ₽/м²",
      iconName: "Square",
      features: [
        "Демонтаж навесных фасадов",
        "Снятие облицовочных материалов",
        "Демонтаж утеплителя",
        "Очистка несущих стен",
        "Работы на любой высоте",
        "Сохранение архитектуры",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Консультация",
      description: "Бесплатный выезд специалиста для оценки объёма работ",
    },
    {
      number: "02",
      title: "Расчёт стоимости",
      description: "Подробная смета с учётом всех особенностей объекта",
    },
    {
      number: "03",
      title: "Подготовка",
      description: "Получение разрешений и подготовка инструмента",
    },
    {
      number: "04",
      title: "Выполнение работ",
      description: "Демонтаж согласно технологии и срокам договора",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Услуги демонтажа
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-open-sans max-w-3xl mx-auto">
              Полный спектр демонтажных работ от частичного демонтажа отделки до
              полного сноса зданий. Работаем быстро, безопасно и с гарантией
              качества.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500 font-montserrat">
                  500+
                </div>
                <div className="text-gray-300 font-open-sans">Квартир</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 font-montserrat">
                  100+
                </div>
                <div className="text-gray-300 font-open-sans">Домов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 font-montserrat">
                  24/7
                </div>
                <div className="text-gray-300 font-open-sans">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Виды работ
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Выполняем демонтаж любой сложности с использованием
              профессионального оборудования
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Отлаженный процесс от заявки до завершения работ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold font-montserrat">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-open-sans">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Наше оборудование
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Используем только профессиональный инструмент ведущих
              производителей
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "Hammer", name: "Отбойные молотки" },
              { icon: "Zap", name: "Алмазная резка" },
              { icon: "Truck", name: "Вывоз мусора" },
              { icon: "Shield", name: "Защитное снаряжение" },
              { icon: "Wrench", name: "Спецтехника" },
              { icon: "Settings", name: "Точный инструмент" },
              { icon: "Eye", name: "Контроль качества" },
              { icon: "Clock", name: "Быстрое выполнение" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Icon
                    name={item.icon as any}
                    className="h-8 w-8 text-orange-500 mx-auto mb-2"
                  />
                  <p className="text-sm font-medium text-gray-900 font-open-sans">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Демонтаж 3-комнатной квартиры",
      category: "apartments",
      area: "85 м²",
      duration: "3 дня",
      location: "ЖК Сокольники",
      beforeImage:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
      description:
        "Полный демонтаж внутренних перегородок с подготовкой к евроремонту",
    },
    {
      id: 2,
      title: "Снос частного дома",
      category: "houses",
      area: "120 м²",
      duration: "5 дней",
      location: "Подмосковье",
      beforeImage:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      description:
        "Снос деревянного дома с вывозом материалов и планировкой участка",
    },
    {
      id: 3,
      title: "Демонтаж санузла",
      category: "renovation",
      area: "6 м²",
      duration: "1 день",
      location: "ул. Тверская",
      beforeImage:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop",
      description:
        "Демонтаж старой плитки и сантехники с подготовкой к новой отделке",
    },
    {
      id: 4,
      title: "Демонтаж офисных перегородок",
      category: "renovation",
      area: "200 м²",
      duration: "2 дня",
      location: "БЦ Белая Площадь",
      beforeImage:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600&h=400&fit=crop",
      description: "Демонтаж офисных перегородок для создания open space",
    },
    {
      id: 5,
      title: "Снос гаража",
      category: "houses",
      area: "40 м²",
      duration: "1 день",
      location: "Гаражный кооператив",
      beforeImage:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1581092918484-8313ccb0e23e?w=600&h=400&fit=crop",
      description: "Демонтаж металлического гаража с фундаментом",
    },
    {
      id: 6,
      title: "Демонтаж кухни в квартире",
      category: "apartments",
      area: "12 м²",
      duration: "1 день",
      location: "ЖК Красные холмы",
      beforeImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1581093458791-9d42e300e5b1?w=600&h=400&fit=crop",
      description: "Демонтаж кухонного гарнитура и старой плитки",
    },
  ];

  const filters = [
    { id: "all", name: "Все работы", count: projects.length },
    {
      id: "apartments",
      name: "Квартиры",
      count: projects.filter((p) => p.category === "apartments").length,
    },
    {
      id: "houses",
      name: "Дома и постройки",
      count: projects.filter((p) => p.category === "houses").length,
    },
    {
      id: "renovation",
      name: "Отделка",
      count: projects.filter((p) => p.category === "renovation").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Наши работы
            </h1>
            <p className="text-xl text-blue-100 mb-8 font-open-sans max-w-3xl mx-auto">
              Более 1000 успешно выполненных проектов демонтажа. Смотрите
              примеры наших работ и результаты до и после.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all font-open-sans ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Before/After Images */}
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={project.beforeImage}
                        alt="До демонтажа"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        ДО
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={project.afterImage}
                        alt="После демонтажа"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        ПОСЛЕ
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-open-sans">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <Icon
                        name="Home"
                        className="h-4 w-4 text-blue-500 mr-2"
                      />
                      <span className="text-sm text-gray-600 font-open-sans">
                        {project.area}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Clock"
                        className="h-4 w-4 text-green-500 mr-2"
                      />
                      <span className="text-sm text-gray-600 font-open-sans">
                        {project.duration}
                      </span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <Icon
                        name="MapPin"
                        className="h-4 w-4 text-orange-500 mr-2"
                      />
                      <span className="text-sm text-gray-600 font-open-sans">
                        {project.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Статистика работ
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Результаты нашей деятельности в цифрах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "1000+",
                label: "Выполненных проектов",
                icon: "CheckCircle",
              },
              { number: "500+", label: "Квартир демонтировано", icon: "Home" },
              { number: "200+", label: "Домов снесено", icon: "Building" },
              { number: "100%", label: "Довольных клиентов", icon: "Star" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={stat.icon as any}
                    className="h-8 w-8 text-blue-600"
                  />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2 font-montserrat">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-open-sans">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Хотите такой же результат?
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-open-sans">
            Закажите бесплатную консультацию и получите расчёт стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors font-open-sans"
            >
              Заказать консультацию
            </a>
            <a
              href="tel:+79266621356"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors font-open-sans"
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

export default Portfolio;

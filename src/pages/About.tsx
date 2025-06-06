import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const About = () => {
  const teamMembers = [
    {
      name: "Сергей Петров",
      position: "Главный инженер",
      experience: "15 лет опыта",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Михаил Сидоров",
      position: "Бригадир",
      experience: "12 лет опыта",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Андрей Козлов",
      position: "Специалист по технике безопасности",
      experience: "8 лет опыта",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const achievements = [
    {
      number: "1000+",
      title: "Выполненных объектов",
      description: "Успешно демонтированных квартир и домов",
    },
    {
      number: "10+",
      title: "Лет на рынке",
      description: "Стабильная работа с 2014 года",
    },
    {
      number: "50+",
      title: "Специалистов",
      description: "Опытная команда профессионалов",
    },
    {
      number: "100%",
      title: "Довольных клиентов",
      description: "Все работы выполняем качественно",
    },
  ];

  const certifications = [
    "Лицензия на строительную деятельность",
    "Сертификат ISO 9001:2015",
    "Разрешение на работу с опасными отходами",
    "Аттестация по промышленной безопасности",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              О компании ДемонтажПро
            </h1>
            <p className="text-xl text-orange-100 mb-8 font-open-sans max-w-3xl mx-auto">
              Мы — команда профессионалов с многолетним опытом в сфере
              демонтажных работ. Наша миссия — безопасно и качественно выполнять
              самые сложные задачи.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                Надёжный партнёр в демонтажных работах
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-open-sans">
                Компания "ДемонтажПро" была основана в 2014 году группой
                инженеров-строителей с большим опытом работы. За годы работы мы
                выполнили более 1000 проектов различной сложности — от демонтажа
                внутренней отделки до полного сноса многоэтажных зданий.
              </p>
              <p className="text-lg text-gray-600 mb-6 font-open-sans">
                Наш подход основан на трёх принципах: безопасность, качество и
                соблюдение сроков. Мы используем только современное оборудование
                и следуем всем нормам и стандартам отрасли.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Icon name="Shield" className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-open-sans">Полная страховка работ</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Award" className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="font-open-sans">
                    Сертифицированные специалисты
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="font-open-sans">Работаем 24/7</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop"
                alt="Демонтажные работы"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Наши достижения
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Цифры, которые говорят о нашем профессионализме
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl font-bold text-orange-500 mb-2 font-montserrat">
                  {achievement.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 font-open-sans">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Опытные специалисты с многолетним стажем работы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-6 rounded-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium mb-2 font-open-sans">
                  {member.position}
                </p>
                <p className="text-gray-600 font-open-sans">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Лицензии и сертификаты
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Все необходимые разрешения для безопасного выполнения работ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-md"
              >
                <Icon
                  name="FileCheck"
                  className="h-6 w-6 text-green-500 mr-4 flex-shrink-0"
                />
                <span className="font-open-sans">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">
                Безопасность
              </h3>
              <p className="text-gray-600 font-open-sans">
                Соблюдение всех норм техники безопасности и охраны труда.
                Здоровье наших сотрудников и клиентов — наш приоритет.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">
                Качество
              </h3>
              <p className="text-gray-600 font-open-sans">
                Профессиональный подход к каждому проекту. Используем только
                качественное оборудование и проверенные технологии.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Handshake" className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">
                Надёжность
              </h3>
              <p className="text-gray-600 font-open-sans">
                Выполняем все обязательства в срок. Предоставляем гарантии на
                выполненные работы и несём полную ответственность.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

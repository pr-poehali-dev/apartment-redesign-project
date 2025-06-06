import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Круглосуточно, без выходных",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@demontazpro.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Москва, ул. Строительная, 15",
      description: "Офис и склад оборудования",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "24/7",
      description: "Аварийные работы в любое время",
    },
  ];

  const serviceOptions = [
    "Демонтаж квартир",
    "Демонтаж отделки",
    "Снос домов",
    "Демонтаж стен",
    "Демонтаж кровли",
    "Демонтаж фасада",
    "Другое",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-open-sans max-w-3xl mx-auto">
              Получите бесплатную консультацию и точный расчёт стоимости
              демонтажных работ. Наши специалисты ответят на все ваши вопросы.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
                Заказать расчёт стоимости
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2 font-open-sans"
                  >
                    Ваше имя *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Введите ваше имя"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2 font-open-sans"
                  >
                    Телефон *
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2 font-open-sans"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2 font-open-sans"
                  >
                    Услуга
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 font-open-sans"
                  >
                    <option value="">Выберите услугу</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2 font-open-sans"
                  >
                    Описание работ
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Опишите объём работ, сроки, особенности объекта..."
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 font-open-sans"
                >
                  Отправить заявку
                </Button>

                <p className="text-sm text-gray-600 font-open-sans">
                  * Обязательные поля. Мы свяжемся с вами в течение 15 минут.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 font-montserrat">
                Контактная информация
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Icon
                        name={info.icon as any}
                        className="h-6 w-6 text-orange-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 font-montserrat">
                        {info.title}
                      </h3>
                      <p className="text-gray-900 font-medium font-open-sans">
                        {info.value}
                      </p>
                      <p className="text-gray-600 text-sm font-open-sans">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-montserrat">
                  Срочная консультация
                </h3>
                <p className="text-gray-600 mb-4 font-open-sans">
                  Нужна помощь прямо сейчас? Позвоните нам или оставьте заявку —
                  ответим моментально!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+74951234567"
                    className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors font-open-sans text-center"
                  >
                    Позвонить сейчас
                  </a>
                  <a
                    href="https://wa.me/74951234567"
                    className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-500 hover:text-white transition-colors font-open-sans text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Как нас найти
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Наш офис находится в центре Москвы, удобная транспортная
              доступность
            </p>
          </div>

          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icon
                name="MapPin"
                className="h-12 w-12 text-orange-500 mx-auto mb-4"
              />
              <p className="text-gray-600 font-open-sans">
                Здесь будет интерактивная карта
              </p>
              <p className="text-sm text-gray-500 font-open-sans mt-2">
                г. Москва, ул. Строительная, 15
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Частые вопросы
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Ответы на самые популярные вопросы о наших услугах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Сколько стоит демонтаж квартиры?",
                answer:
                  "Стоимость зависит от площади, типа работ и сложности. Средняя цена от 500 ₽/м².",
              },
              {
                question: "Как быстро вы можете приехать?",
                answer:
                  "Выезд специалиста в день обращения, начало работ от 1-2 дней.",
              },
              {
                question: "Нужны ли разрешения для демонтажа?",
                answer:
                  "Для сноса несущих стен и домов — да. Мы поможем оформить все документы.",
              },
              {
                question: "Входит ли вывоз мусора в стоимость?",
                answer:
                  "Да, вывоз строительного мусора включён в стоимость всех наших услуг.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">
                  {faq.question}
                </h4>
                <p className="text-gray-600 font-open-sans">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

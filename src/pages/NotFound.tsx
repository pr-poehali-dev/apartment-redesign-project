import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="py-16">
            <Icon
              name="AlertCircle"
              className="h-24 w-24 text-red-500 mx-auto mb-8"
            />
            <h1 className="text-6xl font-bold text-gray-900 mb-4 font-montserrat">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 font-montserrat">
              Страница не найдена
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-open-sans max-w-2xl mx-auto">
              К сожалению, запрашиваемая страница не существует. Возможно, она
              была удалена или вы ввели неверный адрес.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors font-open-sans"
              >
                На главную
              </Link>
              <Link
                to="/services"
                className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-red-600 hover:text-white transition-colors font-open-sans"
              >
                Наши услуги
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;

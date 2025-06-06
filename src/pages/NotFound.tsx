import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Icon
              name="AlertTriangle"
              className="h-24 w-24 text-red-500 mx-auto mb-6"
            />
            <h1 className="text-6xl font-bold text-gray-900 mb-4 font-montserrat">
              404
            </h1>
            <h2 className="text-3xl font-bold text-gray-700 mb-4 font-montserrat">
              Страница не найдена
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-open-sans">
              К сожалению, запрашиваемая страница не существует или была
              перемещена.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors font-open-sans"
            >
              На главную
            </Link>
            <Link
              to="/contact"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-red-600 hover:text-white transition-colors font-open-sans"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;

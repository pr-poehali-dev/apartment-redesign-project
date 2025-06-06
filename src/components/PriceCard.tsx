import Icon from "@/components/ui/icon";

interface PriceCardProps {
  title: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  isPopular?: boolean;
}

const PriceCard = ({
  title,
  description,
  price,
  unit,
  features,
  isPopular = false,
}: PriceCardProps) => {
  return (
    <div
      className={`relative bg-white rounded-lg shadow-lg p-6 ${isPopular ? "ring-2 ring-red-500 transform scale-105" : ""}`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold font-open-sans">
            Популярно
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
          {title}
        </h3>
        <p className="text-gray-600 text-sm font-open-sans">{description}</p>
      </div>

      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-red-600 font-montserrat">
          {price}
          <span className="text-lg text-gray-500 font-normal"> {unit}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Icon
              name="Check"
              className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
            />
            <span className="text-sm text-gray-700 font-open-sans">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-4 rounded-md font-semibold transition-colors font-open-sans ${
          isPopular
            ? "bg-red-600 text-white hover:bg-red-700"
            : "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
        }`}
      >
        Заказать услугу
      </button>
    </div>
  );
};

export default PriceCard;

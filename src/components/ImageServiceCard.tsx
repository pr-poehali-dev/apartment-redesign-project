import Icon from "@/components/ui/icon";

interface ImageServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  imageUrl: string;
}

const ImageServiceCard = ({
  title,
  description,
  price,
  features,
  imageUrl,
}: ImageServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold font-open-sans">
          {price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 font-open-sans">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Icon
                name="Check"
                className="h-4 w-4 text-green-600 mr-2 flex-shrink-0"
              />
              <span className="text-sm text-gray-700 font-open-sans">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors font-open-sans font-medium">
          Заказать расчёт
        </button>
      </div>
    </div>
  );
};

export default ImageServiceCard;

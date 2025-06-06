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
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
      <div
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-semibold mb-1 font-montserrat">
            {title}
          </h3>
          <p className="text-yellow-400 font-semibold font-open-sans">
            {price}
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4 font-open-sans">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Icon
                name="Check"
                className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0"
              />
              <span className="text-sm text-gray-700 font-open-sans">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors font-open-sans font-medium">
          Заказать услугу
        </button>
      </div>
    </div>
  );
};

export default ImageServiceCard;

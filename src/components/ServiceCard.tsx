import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  iconName: string;
}

const ServiceCard = ({
  title,
  description,
  price,
  features,
  iconName,
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="bg-red-100 p-3 rounded-lg mr-4">
          <Icon name={iconName as any} className="h-8 w-8 text-red-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 font-montserrat">
            {title}
          </h3>
          <p className="text-red-600 font-semibold font-open-sans">{price}</p>
        </div>
      </div>

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
  );
};

export default ServiceCard;

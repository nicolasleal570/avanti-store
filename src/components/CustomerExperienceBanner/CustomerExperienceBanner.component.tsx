import { GemIcon } from "@/components/Icons/GemIcon.component";
import { HeartHandshakeIcon } from "../Icons/HeartHandshakeIcon.component";
import { PlaneLandingIcon } from "../Icons/PlaneLandingIcon.component";
import { TruckIcon } from "../Icons/TruckIcon.component";

const items = [
  {
    id: 1,
    title: "Original Products",
    description:
      "We provide money back guarantee if the product are not original.",
    icon: <GemIcon className="text-gray-700" />,
  },
  {
    id: 2,
    title: "Satisfaction Guarantee",
    description:
      "Exchange the product you've purchased if it doesn't fit on you.",
    icon: <HeartHandshakeIcon className="text-gray-700" />,
  },
  {
    id: 3,
    title: "New Arrival Everyday",
    description: "We updates our collection almost everyday.",
    icon: <PlaneLandingIcon className="text-gray-700" />,
  },
  {
    id: 4,
    title: "Fast & Free Shipping",
    description: "We offer fast and free shipping for our loyal customers.",
    icon: <TruckIcon className="text-gray-700" />,
  },
];

export function CustomerExperienceBanner() {
  return (
    <div className="container my-20 px-4 md:px-0">
      <div className="flex items-center justify-between flex-col md:flex-row">
        <h2 className="flex-1 md:border-r-2 border-gray-800 text-gray-800 font-bold text-3xl text-center md:text-left">
          We provide best <br /> customer experiences
        </h2>

        <p className="text-gray-400 md:ml-7 text-center md:text-left mt-6">
          We ensure our customer have the best shopping experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 md:mt-20 px-8 md:px-0">
        {items.map((card) => (
          <div className="flex flex-col" key={card.id}>
            <div className="bg-gray-200 bg-opacity-50 p-4 flex items-center justify-center self-start rounded-md mb-4">
              {card.icon}
            </div>

            <h3 className="my-4 text-xl font-semibold text-gray-700">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

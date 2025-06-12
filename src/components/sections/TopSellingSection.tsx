import React from "react";
import DestinationCard from "../cards/DestinationCard";

function TopSellingSection() {
  const destinations = [
    {
      id: 0,
      imageUrl: "/images/rome.png",
      title: "Rome, Italy",
      amount: "28000da",
      duration: "10 Days Trip",
      highlighted: false,
    },
    {
      id: 1,
      imageUrl: "/images/london.jpg",
      title: "London, UK",
      amount: "42000da",
      duration: "12 Days Trip",
      highlighted: false,
    },
    {
      id: 2,
      imageUrl: "/images/europe.png",
      title: "Full Europe",
      amount: "150000da",
      duration: "28 Days Trip",
      highlighted: false,
    },
    {
      id: 3,
      imageUrl: "/images/dublin.png",
      title: "dublin,Ireland",
      amount: "150000da",
      duration: "15 Days Trip",
      highlighted: true,
    },
    {
      id: 4,
      imageUrl: "/images/paris.png",
      title: "Paris, France",
      amount: "158000da",
      duration: "10 Days Trip",
      highlighted: true,
    },
    {
      id: 5,
      imageUrl: "/images/algeria.png",
      title: "Algiers,Algeria",
      amount: "50000da",
      duration: "12 Days Trip",
      highlighted: true,
    },
    {
      id: 6,
      imageUrl: "/images/omra.png",
      title: "Omra, KSA",
      amount: "15000da",
      duration: "15 Days Trip",
      highlighted: true,
    },
  ];
  return (
    <section>
      <p className="text-lightGray text-[1.125rem] font-[600] text-center">
        Top Selling
      </p>
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
        Top Destinations
      </p>
      <div className="flex flex-col flex-wrap  gap-4 md:flex-row items-center md:justify-between mt-16 w-full">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            imageUrl={destination.imageUrl}
            title={destination.title}
            duration={destination.duration}
            amount={destination.amount}
            highlighted={destination.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default TopSellingSection;

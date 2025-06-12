import React from "react";
import CatergoryCard from "../cards/CatergoryCard";

function CategorySection() {
  const features = [
    {
      id: 0,
      iconUrl: "/images/dzhotel.png",
      title: "Hotels in Algeria",
      description:
        "Discover top-rated hotels across Algeria, from coastal resorts to Sahara retreats.",
      highlighted: false,
    },
    {
      id: 1,
      iconUrl: "/images/wdhotel.png",
      title: "Hotels Abroad",
      description:
        "Explore a wide range of international hotels with the best deals. Whether for business or leisure, we’ve got you covered.",
      highlighted: true,
    },
    {
      id: 2,
      iconUrl: "/images/amadeus.jpg",
      title: "Amadeus Booking System",
      description:
        "Access global flights, hotels, and travel services with Amadeus – the trusted tool for fast and reliable reservations. ",
      highlighted: false,
    },
    {
      id: 3,
      iconUrl: "/images/orgtours.jpg",
      title: "Organized Tours",
      description:
        "Join our expertly planned group trips for unforgettable adventures. Stress-free travel with guides, transport, and fun included.",
      highlighted: false,
    },
  ];
  return (
    <section id="services">
      <p className="text-lightGray text-[1.125rem] font-[600] text-center">
        Services
      </p>
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
        We Offer Best Services
      </p>
      <div className="flex flex-col gap-4 md:flex-row justify-between w-full mt-16">
        {features.map((feature) => (
          <CatergoryCard
            key={feature.id}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
            highlighted={feature.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;

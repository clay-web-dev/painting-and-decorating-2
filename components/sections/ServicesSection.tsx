import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import commercialBuilding from "../../assets/commercial-building.jpg";
import exteriorBuilding from "../../assets/home-exterior.jpg";
import interiorBuilding from "../../assets/painting-interior.jpg";
import { DarkModeContext } from "../DarkModeContext";
import React, { useContext } from "react";

interface CardData {
  imageUrl: StaticImageData;
  heading: string;
  value: string;
  text: string;
  link: string;
}

const Card: React.FC<CardData> = ({ imageUrl, heading, text, value, link }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`border border-gray-300 rounded-lg overflow-hidden shadow-lg mx-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-lg:mb-3 ${
        darkMode ? "bg-zinc-600" : "bg-white"
      }`}
    >
      <Link href={`/services/${value}`}>
        <Image
          src={imageUrl}
          alt="Card"
          className="w-full h-1/2 object-cover"
        />

        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold mb-2">{heading}</h3>
          <p className="">{text}</p>
        </div>
      </Link>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const cards: CardData[] = [
    {
      imageUrl: commercialBuilding,
      heading: "Commercial Painting",
      value: "commercial",
      text: "No commercial job is too big or too small!",
      link: "",
    },
    {
      imageUrl: interiorBuilding,
      heading: "Interior Painting",
      value: "interior",
      text: "Altech provides interior painting services to homeowners and business owners located in the Phoenix valley area.",
      link: "",
    },
    {
      imageUrl: exteriorBuilding,
      heading: "Exterior Painting",
      value: "exterior",
      text: "It is very important to regularly maintain the exterior of your property by properly prepping and repainting around every 5-7 years.",
      link: "",
    },
    // Add more cards as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          heading={card.heading}
          value={card.value}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default ServicesSection;

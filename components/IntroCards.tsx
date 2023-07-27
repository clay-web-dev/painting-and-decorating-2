import Link from "next/link";
import React from "react";
import Image from "next/image";
import residentialImage from "../assets/residential-intro.svg";
import commercialImage from "../assets/commercial-intro.svg";
import exteriorImage from "../assets/exterior-intro.svg";

const introCards = [
  {
    name: "Residential Painting",
    comment:
      "Transform homes with expert residential painting services, bringing your vision to life with flawless finishes.",
    image: residentialImage,
    link: "/services/residential",
  },
  {
    name: "Commercial Painting",
    comment:
      "Elevate business spaces with professional commercial painting, creating inviting environments aligned with your brand identity.",
    image: commercialImage,
    link: "/services/commercial",
  },
  {
    name: "Exterior Painting",
    comment:
      "Protect and beautify properties with top-quality exterior painting, leaving a lasting impression with eye-catching finishes.",
    image: exteriorImage,
    link: "/services/exterior",
  },
  // Add more dummy intros as needed
];

const IntroCards = () => {
  return (
    <div className="justify-between flex">
      {introCards.map((intro, index) => (
        <div
          key={index}
          className="sm:w-1/2 px-5 py-20 text-center  border border-gray-300 rounded-lg mb-4 shadow-lg"
          style={{ margin: "0 4px" }} // Add margin here to create spacing
        >
          <div className="p-3 shadow-lg rounded-full inline-block overflow-hidden mb-5">
            <Image
              alt="residential"
              src={intro.image}
              width={60}
              height={60}
            />
          </div>
          <div className="w-full ">
            <h3 className="text-2xl font-semibold pb-2">{intro.name}</h3>
            <p className="text-gray-600 pb-5">{intro.comment}</p>
            <Link href={intro.link}>
              <button className=" bg-primary text-white p-3 text-xs rounded font-bold uppercase border-2  border-primary mr-2  hover:bg-white hover:text-primary hover:border-primary duration-200">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IntroCards;

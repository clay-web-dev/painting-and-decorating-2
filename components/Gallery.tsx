import React, { useState, useEffect } from "react";
import Example1 from "../assets/example-1.png";
import Example2 from "../assets/example-2.png";
import Example3 from "../assets/example-3.png";
import Image from "next/image";
import Slider from "react-slick";

const imageData = [
  {
    id: 1,
    url: Example1,
    category: "Exterior",
  },
  {
    id: 2,
    url: Example2,
    category: "Interior",
  },
  {
    id: 3,
    url: Example3,
    category: "Other",
  },
];

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  draggable: true,
  centerMode: true,
  centerPadding: "30px",
  arrows: false,
  variableWidth: true,
  innerHeight: "40px",
  // Default is true, but you can explicitly set it here.
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const serviceCategories = ["All", "Exterior", "Interior", "Other"];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [fadeOut, setFadeOut] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Filter images based on the selected category
  const filteredImages =
    selectedCategory === "All"
      ? imageData
      : imageData.filter((image) => image.category === selectedCategory);

  // Handle category button clicks
  const handleCategoryClick = (category: string) => {
    setFadeOut(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setFadeOut(false);
    }, 500); // Adjust the duration (in milliseconds) to match the CSS transition duration
  };

  useEffect(() => {
    // If images are already loaded (during client-side navigation), don't execute this logic again
    if (imagesLoaded) return;

    // Wait for all images to load
    const imageElements = document.querySelectorAll("img");
    const promises = Array.from(imageElements).map((img) => {
      return new Promise<void>((resolve) => {
        if (img.complete) resolve();
        img.onload = () => resolve();
      });
    });

    Promise.all(promises).then(() => {
      // Set the imagesLoaded state to true after all images are loaded
      setImagesLoaded(true);
    });
  }, [imagesLoaded]);

  return (
    <section className="max-w-screen-lg m-auto items-start max-lg:px-4 py-10">
      <div className="text-center">
        {serviceCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 mx-2 rounded mb-3 ${
              category === selectedCategory
                ? "bg-primary text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="max-sm:hidden flex flex-wrap justify-center">
        {filteredImages.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            alt={image.category}
            className={`mx-2 mb-3 transform scale-0 transition-all duration-500 ease-in-out hover:scale-200 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
            style={{ borderRadius: "8px" }}
            onLoad={(e) => {
              const imgElement = e.target as HTMLImageElement;
              imgElement.style.transform = "scale(1)";
            }}
          />
        ))}
      </div>

        <div className="sm:hidden overflow-x-clip flex flex-col h-full">
          <Slider {...settings}>
            {filteredImages.map((image, index) => (
              <div className="flex flex-wrap px-1" key={index}>
                <Image
                  key={image.id}
                  src={image.url}
                  alt={image.category}
                  className={`max-w-xs sm:mx-2 mb-3 transform scale-0 transition-all duration-500 ease-in-out hover:scale-200 ${
                    fadeOut ? "opacity-0" : "opacity-100"
                  }`}
                  style={{ borderRadius: "8px" }}
                  onLoad={(e) => {
                    const imgElement = e.target as HTMLImageElement;
                    imgElement.style.transform = "scale(1)";
                  }}
                />{" "}
              </div>
            ))}
          </Slider>
        </div>
    </section>
  );
};

export default Gallery;

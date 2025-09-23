'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from './button';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const imageSlides = [
  {
    // image: cityArchitecture,
    name: 'city-architecture',
  },
  {
    // image: coalitionForces,
    name: 'coalition-forces',
  },
  {
    // image: moodyLondon,
    name: 'moody-london',
  },
  {
    // image: townDusk,
    name: 'town-dusk',
  },
  {
    // image: grazing,
    name: 'grazing',
  },
  {
    // image: dollarBill,
    name: 'dollar-bill',
  },
  {
    //  image: coffee,
    name: 'coffee',
  },
  {
    // image: children,
    name: 'children',
  },
];

function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prevSlide = () => {
    setCurrentSlideIndex((prev) =>
      prev === 0 ? imageSlides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % imageSlides.length);
  };

  return (
    <div className="flex flex-col overflow-clip mt-10">
      {/* w-full h-96 overflow-clip flex flex-col */}
      <div className="gap-x-10 flex transition-transform duration-500">
        {imageSlides.map((slide, index) => (
          <Image
            key={index}
            src={`/images/${slide.name}.jpg`}
            alt={`Slide ${index + 1}`}
            width={700}
            height={300}
            className="rounded-[1.2rem] object-cover"
          />
        ))}
      </div>
      <div className="mt-3">
        {/* absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-4 */}
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className="flex gap-x-3">
            {imageSlides.map((_, index) => (
              <Button
                key={index}
                handleClick={() => setCurrentSlideIndex(index)}
                className={`w-2 h-2 rounded-full  cursor-pointer ${
                  currentSlideIndex === index
                    ? 'bg-foreground hover:bg-gray-400'
                    : 'bg-gray-400 hover:bg-black'
                }`}
              ></Button>
            ))}
          </div>
          <div className="flex gap-x-10 ">
            <Button
              handleClick={prevSlide}
              className="bg-stone-200 text-foreground rounded-[2rem] p-1.5 hover:bg-stone-300"
            >
              <HiChevronLeft />
            </Button>
            <Button
              handleClick={nextSlide}
              className="bg-stone-200 text-foreground rounded-[2rem] p-1.5 hover:bg-stone-300"
            >
              <HiChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

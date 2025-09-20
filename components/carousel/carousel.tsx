'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '../button';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const imageSlides = [
  { image: 'chicago-architecture.jpg', name: 'chicago-architecture' },
  {
    image: 'city-architecture.jpg',
    name: 'city-architecture',
  },
  {
    image: 'coalition-forces.jpg',
    name: 'coalition-forces',
  },
  {
    image: 'moody-london.jpg',
    name: 'moody-london',
  },
  {
    image: 'town-dusk.jpg',
    name: 'town-dusk',
  },
  {
    image: 'grazing.jpg',
    name: 'dollar-bill',
  },
  { image: 'dollar-bill.jpg', name: 'dollar-bill' },
  { image: 'coffee.jpg', name: 'coffee' },
  { image: 'children.jpg', name: 'children' },
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
    <div className="overflow-hidden">
      <div className="flex gap-x-10 border-4 border-red-500">
        {imageSlides.map((slide, index) => (
          <Image
            src={`/images/${slide.image}`}
            alt={`slide ${index + 1}`}
            width={600}
            height={400}
            key={index}
            className={`transition-transform transform ${
              index === currentSlideIndex ? 'translate-x-0' : undefined
            } rounded-[1.5rem]`}
          />
        ))}
      </div>
      <div className="border-4 border-red-500">
        <div className=""></div>
        <div className="flex gap-x-10">
          <Button handleClick={prevSlide}>
            <ChevronLeft />
          </Button>
          <Button handleClick={nextSlide}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      {/* <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      > */}
      {/* {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
          </div>
        ))} */}
      {/* </div> */}
      {/* <div className="bg-red-500">
        <div className="">
          {imageSlides.map((_, i) => (
            <div className="" key={i}>
              <Dot handleClick={() => setCurrentSlide} />
            </div>
          ))}
        </div>
        <div className="">
          <Button handleClick={prevSlide}>
            <ChevronLeft />
          </Button>
          <Button handleClick={nextSlide}>
            <ChevronRight />
          </Button>
        </div>
      </div> */}
    </div>
  );
}

export default Carousel;

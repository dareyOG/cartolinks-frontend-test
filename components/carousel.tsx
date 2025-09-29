'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from './button';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const imageSlides = [
  {
    name: 'city-architecture',
    header: 'Urban Development',
    noteTitle: 'Modern Architecture',
    noteText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem suscipit amet facilis adipisci enim, eaque veritatis quis! Voluptatum doloribus explicabo ab, magni corporis ea rerum! Nulla, magnam nostrum.',
  },
  {
    name: 'coalition-forces',
    header: 'Military Alliance',
    noteTitle: 'Joint Operations',
    noteText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem suscipit amet facilis adipisci enim, eaque veritatis quis! Voluptatum doloribus explicabo ab, magni corporis ea rerum! Nulla, magnam nostrum.',
  },
  {
    name: 'moody-london',
    header: 'London Atmosphere',
    noteTitle: 'City Vibes',
    noteText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem suscipit amet facilis adipisci enim, eaque veritatis quis! Voluptatum doloribus explicabo ab, magni corporis ea rerum! Nulla, magnam nostrum.',
  },
  {
    name: 'town-dusk',
    header: 'Evening Scene',
    noteTitle: 'Sunset Views',
    noteText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem suscipit amet facilis adipisci enim, eaque veritatis quis! Voluptatum doloribus explicabo ab, magni corporis ea rerum! Nulla, magnam nostrum.',
  },
  {
    name: 'grazing',
    header: 'Rural Life',
    noteTitle: 'Pastoral Scene',
    noteText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem suscipit amet facilis adipisci enim, eaque veritatis quis! Voluptatum doloribus explicabo ab, magni corporis ea rerum! Nulla, magnam nostrum.',
  },
  {
    name: 'dollar-bill',
    header: 'Finance',
    noteTitle: 'Currency',
    noteText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem suscipit amet facilis adipisci enim, eaque veritatis quis! Voluptatum doloribus explicabo ab, magni corporis ea rerum! Nulla, magnam nostrum.',
  },
  {
    name: 'coffee',
    header: 'Beverage Culture',
    noteTitle: 'Coffee Break',
    noteText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem suscipit amet facilis adipisci enim, eaque veritatis quis! Voluptatum doloribus explicabo ab, magni corporis ea rerum! Nulla, magnam nostrum.',
  },
  {
    name: 'children',
    header: 'Youth',
    noteTitle: 'Next Generation',
    noteText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem suscipit amet facilis adipisci enim, eaque veritatis quis! Voluptatum doloribus explicabo ab, magni corporis ea rerum! Nulla, magnam nostrum.',
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
    <div className="flex flex-col mt-10">
      <div className="overflow-hidden relative">
        <div
          className="flex items-center transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
        >
          {imageSlides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full relative">
              <Image
                src={`/images/${slide.name}.jpg`}
                alt={`Slide ${index + 1}`}
                width={700}
                height={300}
                className="rounded-[1.2rem] w-full h-auto object-cover"
              />
              <div className="flex flex-col justify-between gap-y-40 absolute left-0 bottom-0 right-0 text-slate-50 p-4 rounded-lg">
                <h2 className="capitalize text-center text-[5rem] font-bold">
                  {slide.header}
                </h2>
                <div>
                  <h3 className="text-[2rem]">{slide.noteTitle}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-balance">{slide.noteText}</p>
                    <Button
                      handleClick={() => {}}
                      className="capitalize text-[.8rem] text-nowrap px-4 py-2 rounded-[1.5rem] text-foreground bg-background"
                    >{`try ${slide.header}`}</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className="flex gap-x-3">
            {imageSlides.map((_, index) => (
              <Button
                key={index}
                handleClick={() => setCurrentSlideIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlideIndex === index
                    ? 'bg-foreground hover:bg-gray-400'
                    : 'bg-gray-400 hover:bg-foreground'
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

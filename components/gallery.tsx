'use client';

import Button from './button';

import { HiCreditCard } from 'react-icons/hi2';
import { FaFileZipper } from 'react-icons/fa6';

function Gallery() {
  return (
    <section className="flex items-center justify-between">
      <h2 className="font-semibold text-2xl">Gallery</h2>

      <div className="flex gap-x-3">
        <Button
          handleClick={() => {}}
          className="bg-stone-200 rounded-[2rem] capitalize font-semibold text-neutral-500 hover:bg-stone-300 px-2.5 py-1.5 text-xs flex items-center gap-x-2"
        >
          <FaFileZipper />
          <span>Legal</span>
        </Button>
        <Button
          handleClick={() => {}}
          className="bg-stone-200 rounded-[2rem] capitalize font-semibold text-neutral-500 hover:bg-stone-300 px-2.5 py-1.5 text-xs flex items-center gap-x-2"
        >
          {' '}
          <HiCreditCard />
          <span>Pricing</span>
        </Button>
      </div>
    </section>
  );
}

export default Gallery;

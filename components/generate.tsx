'use client';

import { ReactNode } from 'react';
import Button from './button';
import { FaChevronDown } from 'react-icons/fa';
import {
  HiMicrophone,
  HiPencil,
  HiPhoto,
  HiVideoCamera,
} from 'react-icons/hi2';
import { FaWandMagic } from 'react-icons/fa6';
import { LuBrain, LuLetterText } from 'react-icons/lu';
import { BsPersonArmsUp } from 'react-icons/bs';

type GenerateItemsProp = {
  title: string;
  new?: boolean;
  icon: ReactNode;
  text: string;
};

const generateItems: GenerateItemsProp[] = [
  {
    title: 'icon',
    new: true,
    icon: <HiPhoto />,
    text: 'generate images with custom styles in Flux and ideogram.',
  },
  {
    title: 'video',
    icon: <HiVideoCamera />,
    text: 'Generate videos with Hellua,Pics,Luma, Runway, and more.',
  },
  {
    title: 'realtime',
    icon: <HiPencil />,
    text: 'Realtime AI rendering on a canvas. Istant feedback loops.',
  },
  {
    title: 'enhancer',
    new: true,
    icon: <FaWandMagic />,
    text: 'Upscale and enhance images and videos up to 22K.',
  },
  {
    title: 'edit',
    new: true,
    icon: <LuLetterText />,
    text: 'Add objects, change styles, or expand photos and generations.',
  },
  {
    title: 'video lipsync',
    new: true,
    icon: <HiMicrophone />,
    text: 'Lip sync any video to any audio.',
  },
  {
    title: 'motion transfer',
    new: true,
    icon: <BsPersonArmsUp />,
    text: 'Transfer motion to images and animate characters.',
  },
  {
    title: 'train',
    icon: <LuBrain />,
    text: 'Teach Knea to replicate your styles, product , or characters.',
  },
];
function Generate() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl">Generate</h2>
        <Button
          handleClick={() => {}}
          className="flex items-center text-blue-500 hover:text-blue-400 gap-x-1.5 font-semibold"
        >
          {' '}
          <FaChevronDown />
          <span>Show all</span>
        </Button>
      </div>
      <nav className="mt-5">
        <ul className="grid grid-cols-4 gap-10">
          {generateItems.map((generateItem) => (
            <li
              key={generateItem.title}
              className="flex items-center justify-between gap-x-5"
            >
              <div className="flex justify-center items-center gap-x-5">
                <div className="">
                  <div className=" flex text-white bg-red-500 p-1.5 rounded-md  justify-center items-center">
                    {generateItem.icon}
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <div className="flex items-center gap-x-2.5 font-semibold capitalize">
                      <h3>{generateItem.title}</h3>
                      {generateItem.new ? (
                        <p className="text-xs bg-blue-700 text-white rounded-md px-1">
                          new
                        </p>
                      ) : undefined}
                    </div>
                    <p className="mt-1.5 text-[.7rem]">{generateItem.text}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Button
                  handleClick={() => {}}
                  className="bg-stone-200 rounded-[2rem] capitalize font-semibold text-neutral-500 hover:bg-stone-300 px-5 py-1.5 text-xs"
                >
                  open
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Generate;

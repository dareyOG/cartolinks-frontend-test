'use client';

import Link from 'next/link';

import HeaderLogo from './headerlogo';
import NavLinks from './navLinks';
import Button from './button';

import { HiBell, HiChevronDown, HiMoon, HiPhoto, HiSun } from 'react-icons/hi2';
import { LuHeadset } from 'react-icons/lu';

function Header() {
  return (
    <header className="flex items-center justify-between px-6">
      <div className="flex items-center gap-x-8">
        <HeaderLogo />
        <div className="flex items-center gap-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="flex gap-x-2.5">
            <span>Loremipsumdolor</span>
            <HiChevronDown />
          </div>
        </div>
      </div>

      <NavLinks />

      <div className="flex items-center gap-x-4">
        <ul className="flex items-center justify-between gap-x-4">
          <li>
            <Link
              href="#"
              className="flex items-center justify-between bg-stone-200 gap-x-2 p-2 rounded-lg"
            >
              <HiPhoto />
              <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-between bg-stone-200 gap-x-2 p-2 rounded-lg"
            >
              <LuHeadset />
              <span>Support</span>
            </Link>
          </li>
          <li>
            <Button
              handleClick={() => {}}
              className="bg-stone-200 rounded-full p-2 hover:bg-stone-300 text-2xl"
            >
              <HiBell />
            </Button>
          </li>
          <li>
            <Button
              handleClick={() => {}}
              className="bg-stone-300 rounded-[2rem] capitalize font-semibold text-neutral-500 hover:bg-stone-300 p-1.5 text-xs"
            >
              <HiMoon />
              {/* {isDark ? <HiSun /> : <HiMoon />} */}
            </Button>
          </li>
        </ul>
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
      </div>
    </header>
  );
}

export default Header;

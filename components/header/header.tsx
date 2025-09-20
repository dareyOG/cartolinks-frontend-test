import Link from 'next/link';

import HeaderLogo from './headerlogo';
import NavLinks from './navLinks';

import { ChevronDown, HeadsetIcon, SunIcon } from 'lucide-react';
import { BellAlertIcon, PhotoIcon } from '@heroicons/react/24/solid';

function Header() {
  return (
    <header className="flex items-center justify-between bg-red-500">
      <div className="flex items-center gap-x-8 bg-yellow-200">
        <HeaderLogo />
        <div className="flex items-center gap-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="flex gap-x-2.5">
            <span>Loremipsumdolor</span>
            <ChevronDown />
          </div>
        </div>
      </div>

      <NavLinks />

      <div className="flex items-center gap-x-4">
        <ul className="flex items-center justify-between gap-x-4">
          <li>
            <Link
              href="#"
              className="flex items-center justify-between bg-slate-100 gap-x-2 p-2 rounded-lg"
            >
              <PhotoIcon className="size-6" /> <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-between bg-slate-100 gap-x-2 p-2 rounded-lg"
            >
              <HeadsetIcon className="size-6" /> <span>Support</span>
            </Link>
          </li>
          <li>
            <button className="bg-slate-100 p-1.5 rounded-md">
              <BellAlertIcon className="size-6" />
            </button>
          </li>
          <li>
            <button className="bg-slate-100 p-1.5 rounded-md">
              <SunIcon className="size-6" />
            </button>
          </li>
        </ul>
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
      </div>
    </header>
  );
}

export default Header;

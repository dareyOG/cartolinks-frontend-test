import Link from 'next/link';

import HeaderLogo from './headerlogo';
import NavList from './navList';

import { Circle, HeadsetIcon } from 'lucide-react';
import { BellAlertIcon, PhotoIcon, SunIcon } from '@heroicons/react/16/solid';

function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <HeaderLogo />
        <div className="flex items-center gap-x-2">
          <Circle className="size-6 text-red-500 fill-blue-500" />
          <select className="border outline-0 border-slate-100 bg-transparent rounded-md p-1.5 text-sm">
            <option value="en">Lorem ipsum</option>
          </select>
        </div>
      </div>
      <NavList />
      <div>
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
          <li>
            <Circle className="size-6" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

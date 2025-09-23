'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import {
  HiFolder,
  HiHome,
  HiPaintBrush,
  HiPhoto,
  HiVideoCamera,
} from 'react-icons/hi2';
import { LuLetterText } from 'react-icons/lu';

const navLinks = [
  { name: 'Home', href: '/', icon: HiHome },
  { name: 'Photos', href: '#', icon: HiPhoto },
  { name: 'Videos', href: '#', icon: HiVideoCamera },
  { name: 'Link 4', href: '#', icon: FaWandMagicSparkles },
  { name: 'Link 5', href: '#', icon: HiPaintBrush },
  { name: 'Link 6', href: '#', icon: LuLetterText },
  { name: 'Folder', href: '#', icon: HiFolder },
];

function NavLinks() {
  const pathName = usePathname();
  return (
    <nav className="bg-stone-200 rounded-lg">
      <ul className="flex items-center gap-x-2 px-3 py-2.5 ">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`flex items-center px-2 py-1.5 hover:bg-background rounded-md ${
                pathName.startsWith(link.href) ? 'bg-background' : undefined
              }`}
            >
              <link.icon className="size-6" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;

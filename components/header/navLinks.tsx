'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  FolderIcon,
  PhotoIcon,
  VideoCameraIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';

const navLinks = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Photos', href: '#', icon: PhotoIcon },
  { name: 'Videos', href: '#', icon: VideoCameraIcon },
  { name: 'Link 4', href: '#', icon: VideoCameraIcon },
  { name: 'Link 5', href: '#', icon: VideoCameraIcon },
  { name: 'Link 6', href: '#', icon: VideoCameraIcon },
  { name: 'Folder', href: '#', icon: FolderIcon },
];

function NavLinks() {
  const pathName = usePathname();
  return (
    <nav className="bg-slate-100 rounded-full">
      <ul className="flex items-center gap-x-6 px-4 py-2.5 ">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`flex items-center gap-x-2 ${
                pathName.startsWith(link.href) ? 'bg-white' : undefined
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

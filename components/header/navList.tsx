import Link from 'next/link';

import {
  FolderIcon,
  PhotoIcon,
  VideoCameraIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';

const navLinks = [
  { name: 'Home', href: '#', icon: HomeIcon },
  { name: 'Photos', href: '#', icon: PhotoIcon },
  { name: 'Videos', href: '#', icon: VideoCameraIcon },
  { name: 'Link 4', href: '#', icon: () => <></> },
  { name: 'Link 5', href: '#', icon: () => <></> },
  { name: 'Link 6', href: '#', icon: () => <></> },
  { name: 'Folder', href: '#', icon: FolderIcon },
];

function NavList() {
  return (
    <nav className="bg-slate-100 rounded-full">
      <ul className="flex items-center gap-x-6 px-4 py-2.5 ">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="flex items-center gap-x-2">
              <link.icon className="size-6" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavList;

/* 
<li>
          <Link href="#">
            <HomeIcon className="size-6" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <PhotoIcon className="size-6" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <VideoCameraIcon className="size-6" />
          </Link>
        </li>
        <li>
          <Link href="#">Link 4</Link>
        </li>
        <li>
          <Link href="#">Link 5</Link>
        </li>
        <li>
          <Link href="#">
            <FolderIcon className="size-6" />
          </Link>
        </li>

*/

"use client";

import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Link from "next/link";

export function NavbarSm() {
  return (
    <nav className="bg-red-400 flex items-center justify-between">
      <div className="w-[150px]">
        <Image
          width={150}
          height={150}
          src="/avanti.svg"
          alt="Avanti Store"
          className="w-full"
        />
      </div>

      <ul className="flex items-center">
        <li>Item 1</li>
      </ul>
    </nav>
  );
}

export function NavbarLg() {
  return (
    <div className="bg-black py-5">
      <nav className="flex items-center justify-between container">
        <Link href="/" className="block w-[150px]">
          <Image
            width={150}
            height={150}
            src="/avanti.svg"
            alt="Avanti Store"
            className="w-full"
          />
        </Link>

        <ul className="flex items-center space-x-3 text-white">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>

        <div className="grid grid-cols-3 gap-2">
          <button type="button" className="p-1 rounded">
            <MagnifyingGlassIcon className="w-5 h-5 text-white" />
          </button>

          <button type="button" className="p-1 rounded">
            <ShoppingBagIcon className="w-5 h-5 text-white" />
          </button>

          <button type="button" className="p-1 rounded">
            <UserIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export function Navbar() {
  const isMediumSize = useMediaQuery("(min-width: 768px)");

  return isMediumSize ? <NavbarLg /> : <NavbarSm />;
}

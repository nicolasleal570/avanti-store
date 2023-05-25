"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { navbarRoutes } from "@/constants/navbarRoutes.constants";
import { Collection } from "@/types/collections.type";
import { CollectionsMenu } from "./components/CollectionsMenu";

export interface NavbarLgProps {
  collections: Collection[];
}

export function NavbarLg({ collections }: NavbarLgProps) {
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

        <ul className="flex items-center space-x-4 text-white">
          <li className="px-3">
            <CollectionsMenu collections={collections} />
          </li>

          {navbarRoutes.map((link) => (
            <li key={link.id} className="px-3">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-3 gap-2">
          <Link id="searchLink" href="/search" className="p-1 rounded">
            <MagnifyingGlassIcon className="w-5 h-5 text-white" />
          </Link>

          <button id="bagLink" type="button" className="p-1 rounded">
            <ShoppingBagIcon className="w-5 h-5 text-white" />
          </button>

          <button id="userLink" type="button" className="p-1 rounded">
            <UserIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </nav>
    </div>
  );
}

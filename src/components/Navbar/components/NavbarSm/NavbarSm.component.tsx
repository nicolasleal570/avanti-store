"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { navbarRoutes } from "@/constants/navbarRoutes.constants";
import { Collection } from "@/types/collections.type";
import { CollectionsMenu } from "../CollectionsMenu/CollectionsMenu.component";

export interface NavbarSmProps {
  collections: Collection[];
}

export function NavbarSm({ collections }: NavbarSmProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen((prevValue) => !prevValue);

  const closeMenu = () => setIsOpen(false);

  // Close the menu when user navigate through pages
  useEffect(() => {
    closeMenu();
  }, [pathname, searchParams]);

  return (
    <div className="relative">
      <nav className="relative bg-black flex items-center justify-between py-5 z-30">
        <div className="w-[150px]">
          <Image
            width={150}
            height={150}
            src="/avanti.svg"
            alt="Avanti Store"
            className="w-full"
            data-cy="logo"
          />
        </div>

        <div className="flex items-center space-x-4 mr-4">
          <Link href="/search" className="p-1 rounded" data-cy="searchLink">
            <MagnifyingGlassIcon className="w-5 h-5 text-white" />
          </Link>

          <button
            data-cy="hamburgerIcon"
            type="button"
            className=""
            onClick={handleToggleMenu}
          >
            <Bars3Icon className="w-7 h-7 text-white" />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute flex flex-col top-0 left-0 w-full h-screen bg-gray-50 z-20 pt-28 pb-8 px-4">
          <ul className="space-y-4">
            <li>
              <CollectionsMenu collections={collections} />
            </li>

            {navbarRoutes.map((link) => (
              <li key={link.id}>
                <Link data-cy={link.label} className="text-lg" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-auto space-y-4 border-t border-gray-300 pt-4">
            <li>
              <Link data-cy="Shopping Cart" href="/work-in-progress" className="text-lg">
                Shopping Cart
              </Link>
            </li>
            <li>
              <Link data-cy="Profile" href="/work-in-progress" className="text-lg">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

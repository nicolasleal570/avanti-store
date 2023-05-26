import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Collection } from "@/types/collections.type";

interface CollectionsMenuProps {
  collections: Collection[];
}

export function CollectionsMenu({ collections }: CollectionsMenuProps) {
  return (
    <Popover as="div" className="relative inline-block text-left">
      <div>
        <Popover.Button
          data-cy="collectionsItem"
          className="inline-flex w-full justify-center items-center text-lg outline-none"
        >
          Collections
          <ChevronDownIcon
          data-cy="chevronIcon"
            className="ml-2 -mr-1 h-5 w-5 text-inherit"
            aria-hidden="true"
          />
        </Popover.Button>
      </div>
      
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="absolute z-50 left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-4 space-y-4">
            {collections.map((collection) => (
              <Popover.Button
                key={collection.id}
                data-cy={collection.id}
                as={Link}
                href={`/collections/${collection.handle}`}
                className="block text-gray-800"
              >
                {collection.title}
              </Popover.Button>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

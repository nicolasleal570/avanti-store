"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { NavbarLg, NavbarLgProps } from "./NavbarLg.component";
import { NavbarSm, NavbarSmProps } from "./NavbarSm.component";

interface NavbarProps extends NavbarSmProps, NavbarLgProps {}

export function Navbar({ collections }: NavbarProps) {
  const isMediumSize = useMediaQuery("(min-width: 768px)");

  return isMediumSize ? (
    <NavbarLg collections={collections} />
  ) : (
    <NavbarSm collections={collections} />
  );
}

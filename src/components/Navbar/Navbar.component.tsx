"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { NavbarLg, NavbarLgProps } from "./components/NavbarLg/NavbarLg.component";
import { NavbarSm, NavbarSmProps } from "./components/NavbarSm/NavbarSm.component";

interface NavbarProps extends NavbarSmProps, NavbarLgProps {}

export function Navbar({ collections }: NavbarProps) {
  const isMediumSize = useMediaQuery("(min-width: 768px)");

  return isMediumSize ? (
    <NavbarLg collections={collections} />
  ) : (
    <NavbarSm collections={collections} />
  );
}

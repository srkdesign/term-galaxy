import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Chip,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

import DarkThemeIcon from "./icons/DarkThemeIcon";
import LightThemeIcon from "./icons/LightThemeIcon";

import Logo from "../assets/logo2.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      id: 1,
      title: "Features",
    },
    {
      id: 2,
      title: "Saved",
    },
    {
      id: 3,
      title: "About",
    },
    {
      id: 4,
      title: "Contact",
    },
  ];

  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="max-w-[1400px] min-w-full *:max-w-[1400px] mb-[min(20%,226px)]"
    >
      {/* Logo and version */}
      <NavbarContent justify="start" className="flex gap-6">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavLink to="/" className="text-inherit">
          <NavbarBrand className="flex items-start gap-1.5">
            {/* <img src={Logo} alt="" className="max-w-[30px] h-full" /> */}
            <p className="font-serif text-2xl font-bold text-inherit ">
              LearnTerms
            </p>
          </NavbarBrand>
        </NavLink>
        <Chip
          size="sm"
          variant="dot"
          className="hidden md:flex"
          color="default"
        >
          v0.0.1
        </Chip>
      </NavbarContent>
      {/* Menu List */}
      <NavbarContent className="hidden gap-12 sm:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={`${item.id}`}>
            <NavLink color="foreground" to={`/${item.title.toLowerCase()}`}>
              {item.title}
            </NavLink>
          </NavbarItem>
        ))}
        <Button onClick={toggleTheme} size="md" variant="flat" isIconOnly>
          {isDark ? <DarkThemeIcon /> : <LightThemeIcon />}
        </Button>
      </NavbarContent>
      {/* Buttons */}
      {/* <NavbarContent className="gap-4 sm:flex" justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`_${item.id}`}>
            <NavLink
              className="w-full text-black"
              to={`/${item.title.toLowerCase()}`}
            >
              {item.title}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

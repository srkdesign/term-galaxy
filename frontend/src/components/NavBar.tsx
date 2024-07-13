import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Chip,
} from "@nextui-org/react";

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

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="max-w-[1400px] min-w-full *:max-w-[1400px] mb-[min(20%,226px)]"
    >
      {/* Logo and version */}
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href="/" className="text-inherit">
          <NavbarBrand>
            <p className="font-bold text-inherit font-serif text-2xl">
              LearnTerm
            </p>
          </NavbarBrand>
        </Link>
        <Chip size="sm" variant="dot" className="hidden md:flex">
          v0.0.1
        </Chip>
      </NavbarContent>
      {/* Menu List */}
      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={`${item.id}`}>
            <Link color="foreground" href={`/${item.title.toLowerCase()}`}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* Buttons */}
      {/* <NavbarContent className="sm:flex gap-4" justify="end">
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
            <Link
              className="w-full text-black"
              href={`/${item.title.toLowerCase()}`}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

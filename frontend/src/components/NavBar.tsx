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
  Button,
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Popular", "Saved", "About"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="min-w-full *:max-w-[1400px] mb-52"
    >
      {/* Logo and version */}
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="*:mr-2">
          <p className="font-bold text-inherit font-serif text-2xl">
            LearnTerm
          </p>
          <Chip size="sm" variant="dot" className="hidden md:flex">
            v0.0.1
          </Chip>
        </NavbarBrand>
      </NavbarContent>
      {/* Menu List */}
      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {menuItems.map((item) => (
          <NavbarItem>
            <Link color="foreground" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* Buttons */}
      <NavbarContent className="sm:flex gap-4" justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
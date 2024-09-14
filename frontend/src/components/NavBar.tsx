import { useContext, useReducer, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import { useTranslation } from "react-i18next";
import { getLocale } from "../utils/helpers";
import LanguageIcon from "./icons/LanguageIcon";

import { NavLink } from "react-router-dom";

import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import type { Selection } from "@nextui-org/react";

import DarkThemeIcon from "./icons/DarkThemeIcon";
import LightThemeIcon from "./icons/LightThemeIcon";
import Logo from "./vectors/Logo";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

  const { t, i18n } = useTranslation();

  const menuItems = [
    {
      id: 1,
      title: t("features_heading"),
      slug: "features",
    },
    {
      id: 2,
      title: t("saved_heading"),
      slug: "saved",
    },
    {
      id: 3,
      title: t("about_heading"),
      slug: "about",
    },
    {
      id: 4,
      title: t("contacts_heading"),
      slug: "contact",
    },
  ];

  interface LocaleProps {
    title: string;
  }

  interface LocaleListProps {
    [locale: string]: LocaleProps;
  }

  const locales: LocaleListProps = {
    en: { title: "English" },
    ru: { title: "Русский" },
    az: { title: "Azərbaycan" },
  };

  const [selectedLocale, setSelectedLocale] = useState<Selection>(
    new Set([getLocale() || i18n.language])
  );

  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="py-3 mb-12 col-span-full xl:col-span-6 xl:col-start-2 "
      maxWidth="full"
    >
      {/* Logo and version */}
      <NavbarContent justify="start" className="flex gap-6">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavLink to="/" className="text-inherit">
          <NavbarBrand className="flex items-start gap-1.5">
            <Logo />
          </NavbarBrand>
        </NavLink>
        <Chip
          size="sm"
          variant="dot"
          className="hidden xl:flex"
          color="default"
        >
          v0.0.1
        </Chip>
      </NavbarContent>
      {/* Menu List */}
      <NavbarContent className="hidden gap-12 sm:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={`${item.id}`}>
            <NavLink className="opacity-80" color="foreground" to={`/${item.slug.toLowerCase()}/`}>
              {item.title}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* Buttons */}
      <NavbarContent justify="end">
        <Dropdown className={`${isDark ? `dark` : `light`}`}>
          <DropdownTrigger>
            <Button isIconOnly variant="flat">
              <LanguageIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            className="text-foreground"
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedLocale}
            onSelectionChange={setSelectedLocale}
          >
            {Object.keys(locales).map((locale) => (
              <DropdownItem
                key={locale}
                onClick={() => i18n.changeLanguage(locale)}
              >
                {locales[locale].title}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Button onClick={toggleTheme} size="md" variant="flat" isIconOnly>
          {isDark ? <DarkThemeIcon /> : <LightThemeIcon />}
        </Button>
      </NavbarContent>
      {/* Mobile Menu */}
      <NavbarMenu className={`${isDark ? `dark` : `light`} pt-8`}>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`_${item.id}`}>
            <Link
              className="w-full text-foreground"
              href={`/${item.slug.toLowerCase()}/`}
              onPress={() => setIsMenuOpen()}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

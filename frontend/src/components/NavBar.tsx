import NavLink from "./NavLink";
import NavLangItem from "./NavLangItem";

export default function NavBar() {
  return (
    <nav className="flex justify-between pb-6 border-b align-center">
      <p className="flex gap-3 align-baseline">
        {/* Nav Logo */}
        <strong id="nav-logo" className="font-serif text-2xl text-neutral-700">learnterms</strong>
        {/* Nav App Version */}
        <small className="flex px-2 pt-2 my-0 text-xs rounded-md text-sky-700 bg-sky-100">v0.0.1</small>
      </p>
      <div className="flex flex-row items-start justify-around divide-x divide-neutral-100">
        {/* Nav Links */}
        <ul className="hidden gap-8 pr-4 md:flex text-neutral-500">
          <li><NavLink title="About" url="/about" /></li>
          <li><NavLink title="Saved" url="/saved" /></li>
          <li><NavLink title="Add" url="/add" /></li>
        </ul>
        {/* Language Switcher */}
        <ul className="flex flex-row gap-4 pl-6 m-0">
          <li><NavLangItem url="flags/great-britain.png" alt="" /></li>
        </ul>
      </div>
    </nav>
  )
}
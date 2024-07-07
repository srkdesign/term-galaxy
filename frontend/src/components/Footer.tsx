import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="h-16 flex items-center justify-between px-6">
      <p>© 2024 SDF. All rights reserved</p>
      <Link href="#" className="capitalize whitespace-nowrap">
        Privacy policy
      </Link>
    </footer>
  );
}

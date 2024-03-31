interface NavLinkProps {
  title: string;
  url: string;
}

export default function NavLink({ url, title }: NavLinkProps) {
  return (
    <a href={url} className="block px-3 py-1 capitalize rounded-md hover:text-sky-400">{title}</a>
  );
}
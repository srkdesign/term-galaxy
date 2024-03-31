interface NavLangItemProps {
  url: string;
  alt?: string;
}

export default function NavLangItem({ url, alt }: NavLangItemProps) {
  return (
    <picture className="block rounded-full cursor-pointer outline outline-0 hover:outline-1 outline-neutral-500">
      <img className="block size-7" src={url} alt={alt} />
    </picture>
  );
}
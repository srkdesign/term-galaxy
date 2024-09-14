interface FlagIconProps {
  src: string;
  alt: string;
}

const FlagIcon = ({ src, alt }: FlagIconProps) => {
  return <img src={src} alt={alt} className="dark:opacity-85" />;
};

export default FlagIcon;

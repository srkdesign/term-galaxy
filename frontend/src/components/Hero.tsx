import GalaxyRings from "./vectors/GalaxyRings";

type HeroProps = {
  heading: string;
  description: string;
  isHome: boolean;
};

const Hero = ({ heading, description, isHome }: HeroProps) => {
  return (
    <section className="grid grid-cols-subgrid grid-rows-1 *:row-start-1 place-items-center justify-items-center *:col-span-full mb-20">
      <div className="z-10 flex flex-col items-center text-center">
        <h1 className="mb-4 text-5xl font-medium tracking-tighter md:text-6xl">
          {heading}
        </h1>
        <h2 className="max-w-lg text-xl font-normal md:text-2xl opacity-80">
          {description}
        </h2>
      </div>
      {isHome ? (
        <GalaxyRings styling="hidden md:block z-0 w-full h-full opacity-70 dark:opacity-80" />
      ) : null}
    </section>
  );
};

export default Hero;

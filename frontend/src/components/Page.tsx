import { ReactNode } from "react";

interface PageProps {
  // isHome: boolean;
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <main
      className={`col-span-full px-6 pb-24 grid grid-cols-subgrid xl:*:col-start-3 md:*:col-start-2 *:col-span-4 items-start`}
    >
      {children}
    </main>
  );
};

export default Page;

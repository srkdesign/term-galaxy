import "./App.css";
import NavBar from "./components/NavBar";
import { Input } from "@nextui-org/react";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[1400px] my-0 mx-auto grid grid-rows-[auto_1fr_auto] h-[100vh]">
      <NavBar></NavBar>
      <section
        id="hero"
        className="flex flex-col justify-center items-center px-6 font-serif text-balance text-center pb-24"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-3">
          Mastering Economic Terminology
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-12 font-sans">
          Your Essential Guide in Azerbaijani, Russian, and English
        </h2>
        <Input
          classNames={{
            base: "sm:max-w-[20rem] h-10 font-sans",
            mainWrapper: "h-full",
            input: "text-lg",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="lg"
          type="search"
        />
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;

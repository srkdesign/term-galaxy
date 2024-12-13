import React from "react";

const TextComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="prose prose-xl dark:prose-invert max-w-none prose-headings:text-3xl prose-headings:font-medium">
      {children}
    </section>
  );
}

export default TextComponent;
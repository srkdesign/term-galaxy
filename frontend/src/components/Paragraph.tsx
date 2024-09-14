const Paragraph = ({ title, text }: { title: string; text: string; }) => {
  return (
    <section className="prose prose-xl prose-neutral dark:prose-invert max-w-none">
      <h3>{title}</h3>
      <p>{text}</p>
    </section>
  );
};

export default Paragraph;
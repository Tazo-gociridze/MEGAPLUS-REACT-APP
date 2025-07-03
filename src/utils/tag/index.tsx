const Tag = ({ text }: { text: string }) => {
  return (
    <span className="rounded-4xl border-[2px] border-solid border-red-500 !px-3 !py-1 opacity-[0.8] select-none dark:text-white">
      {text}
    </span>
  );
};

export default Tag;

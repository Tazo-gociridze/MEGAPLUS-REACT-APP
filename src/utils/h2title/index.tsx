

const H2Title = ({ title }: { title: string }) => {
  return (
    <h2 className="!mt-12 flex items-center gap-x-3 text-3xl">
      <div className="!mt-1 h-[2px] w-[50px] bg-red-500"></div>
      <span>{title}</span>
    </h2>
  );
};

export default H2Title;

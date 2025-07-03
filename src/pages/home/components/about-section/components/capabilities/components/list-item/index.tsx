import { AiOutlineLike } from "react-icons/ai";


const ListItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start justify-between gap-x-10 !mb-6">
      <div className="flex gap-x-2 justify-between">
        <div className="h-[1px] w-[20px] bg-red-500 dark:bg-white !mt-3"></div>
        <span className="w-[97%]">{text}</span>
      </div>
      <div>
        <AiOutlineLike className="text-4xl text-red-400"/>
      </div>
    </div>
  );
};

export default ListItem;

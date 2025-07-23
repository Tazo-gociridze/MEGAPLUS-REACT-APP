import { AiOutlineLike } from "react-icons/ai";


const ListItem = ({ item }: { item: { name: string, link: string } }) => {
  return (
    <div className="flex items-start justify-between gap-x-10 !mb-6">
      <div className="flex gap-x-2 justify-between">
        <div className="h-[1px] w-[20px] bg-red-500 dark:bg-white !mt-3"></div>
        <a href={item.link} className={`${item.link ? "text-red-600 hover:underline hover:text-red-600 dark:text-red-300" : "cursor-auto"} w-[97%] `}>{item.name}</a>
      </div>
      <div>
        <AiOutlineLike className="text-4xl text-red-500"/>
      </div>
    </div>
  );
};

export default ListItem;

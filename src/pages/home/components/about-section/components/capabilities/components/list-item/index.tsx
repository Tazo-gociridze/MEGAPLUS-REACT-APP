import { AiOutlineLike } from 'react-icons/ai';

const ListItem = ({ item }: { item: { name: string; link: string } }) => {
  return (
    <div className="!mb-6 flex items-start justify-between gap-x-10">
      <div className="flex items-start justify-between gap-x-2">
        <div className="list-item-decor !mt-3 h-[1px] w-[20px] bg-red-500 dark:bg-white"></div>
        <a
          href={item.link}
          className={`w-[97%] !leading-6 text-red-500 hover:text-red-600 hover:underline dark:text-white`}
        >
          {item.name}
        </a>
      </div>
      <div>
        <AiOutlineLike className="text-4xl text-red-500" />
      </div>
    </div>
  );
};

export default ListItem;

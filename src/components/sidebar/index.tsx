import { RiContactsBook3Line } from 'react-icons/ri';
import { useState } from 'react';
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  document.addEventListener('click', () => {
    setSidebar(false);
  });

  function activateSidebar(e: React.MouseEvent<SVGElement>) {
    e.stopPropagation();
    setSidebar(!sidebar);
  }

  function propagationStop(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }
  return (
    <div
      className={
        sidebar
          ? `fixed top-40 right-0 flex translate-x-[0px] transform items-start text-5xl text-red-500 transition-[0.3s]`
          : `fixed top-40 right-0 flex translate-x-[295px] transform items-start text-5xl text-red-500 transition-[0.3s]`
      }
    >
      <RiContactsBook3Line
        onClick={activateSidebar}
        className="contact-fixed-icon cursor-pointer"
      />
      <div
        onClick={propagationStop}
        className="h-[500px] w-[300px] border-l-5 border-solid border-red-400 bg-red-100 !py-2"
      >
        <span className="!mb-10 flex items-center justify-center gap-x-3">
          <span className="h-[1px] w-[30px] bg-red-500"></span>
          <span className="text-xl">Contacts</span>
          <span className="h-[1px] w-[30px] bg-red-500"></span>
        </span>
        <div className="flex flex-col gap-y-15">
          <div className="flex w-[100%] items-center gap-x-5 border-l-9 border-solid border-red-400 !p-2">
            <CiPhone className="text-4xl" />
            <span className="text-lg">(+995) 567-678-789</span>
          </div>
          <div className="flex w-[100%] items-center gap-x-5 border-l-9 border-solid border-red-400 !p-2">
            <CiMail className="text-4xl" />
            <span className="text-lg font-bold">(+995) 567-678-789</span>
          </div>
          <div className="flex w-[100%] items-center gap-x-5 border-l-9 border-solid border-red-400 !p-2">
            <CiLocationOn className="text-4xl" />
            <span className="text-lg">(+995) 567-678-789</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

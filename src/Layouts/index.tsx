import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import { FaArrowUp } from 'react-icons/fa';
import useMainLayoutLogic from './hooks/useMainLayoutLogic';

const MainLayout = () => {
  const { sidebar, setSidebar, showScrollTop, scrollToTop } = useMainLayoutLogic();

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header setSidebar={setSidebar} />
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 rounded-md bg-red-500 !p-3 text-white shadow-lg transition-opacity duration-300 cursor-pointer hover:bg-red-700"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default MainLayout;


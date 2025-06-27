import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';
import Sidebar from '../components/sidebar';

const MainLayout = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Header setSidebar={setSidebar} />
      <Sidebar setSidebar={setSidebar} sidebar={sidebar}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

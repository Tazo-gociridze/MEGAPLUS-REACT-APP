import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      {/* <Sidebar/> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

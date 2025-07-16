import { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  DollarOutlined,
  UndoOutlined,
  TeamOutlined,
  FileTextOutlined,
  SettingOutlined,
  UserAddOutlined,
  ShoppingCartOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { useAtom } from 'jotai';
import { darkThemeAtom } from '@/atoms/theme';
import InfoAboutProducts from './docs/products/info-about-products';
import ProductsFiltration from './docs/products/filtration';
import ProductsAddEdit from './docs/products/products-add-edit';
import Discounts from './docs/products/discounts';
import GroupControl from './docs/products/group-control';
import Calculation from './docs/products/calculation';
import AdditionalFunctions from './docs/products/additional-functions';
import Reception from './docs/reception/reception';
import AcceptanceByPurchaseAct from './docs/reception/acceptance-by-purchase-act';
import ChangeContract from './docs/reception/change-contract';
import CancellationExemption from './docs/reception/cancellation-exemptions';
import Supplier from './docs/suppliers/suppliers';
import CreateSupplier from './docs/suppliers/create-supplier';
import Payments from './docs/suppliers/payments';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const LOCAL_STORAGE_KEY = 'documentation-active-key';

const Documentations = () => {
  const [activeKey, setActiveKey] = useState('1');
  const [isDark] = useAtom(darkThemeAtom);

  useEffect(() => {
    const savedKey = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedKey) {
      setActiveKey(savedKey);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, activeKey);
  }, [activeKey]);

  const renderContent = () => {
    switch (activeKey) {
      case '1':
        return <InfoAboutProducts />;
      case '2':
        return <ProductsFiltration />;
      case '3':
        return <ProductsAddEdit />;
      case '4':
        return <GroupControl/>;
      case '5':
        return <Discounts />;
      case '6':
        return <Calculation />;
      case '7':
        return <AdditionalFunctions />;
      case '8':
        return <Reception />;
      case '9':
        return <CancellationExemption/>;
      case '10':
        return <ChangeContract />;
      case '11':
        return <AcceptanceByPurchaseAct/>;
      case '12':
        return <div>ნავაჭრი</div>;
      case '13':
        return <div>სალაროს მოძრაობა</div>;
      case '14':
        return <div>კლიენტები</div>;
      case '15':
        return <div>სალაროს წიგნი</div>;
      case '16':
        return <div>ფასდაკლებები</div>;
      case '17':
        return <div>დაბრუნება</div>;
      case '18':
        return <div>ხელით დაბრუნება</div>;
      case '19':
        return <Supplier/>;
      case '20':
        return <CreateSupplier/>;
      case '21':
        return <Payments/>;
      case '22':
        return <div>რეპორტი/რეალიზაცია</div>;
      case '23':
        return <div>რეპორტი/მიღება</div>;
      case '24':
        return <div>რეპორტი/მომწოდებლები</div>;
      case '25':
        return <div>რეპორტი/ნაშთები</div>;
      case '26':
        return <div>სასწორები</div>;
      case '27':
        return <div>პრინტერები</div>;
      case '28':
        return <div>მომხმარებლის შექმნა</div>;
      case '29':
        return <div>პაროლის შეცვლა</div>;
      case '30':
        return <div>უფლებები</div>;
      case '31':
        return <div>რეალიზაცია</div>;
      case '32':
        return <div>ჩამოწერა</div>;
      case '33':
        return <div>ჩამოწერის გაუქმება</div>;
      default:
        return <div>აირჩიე ელემენტი მენიუდან</div>;
    }
  };

  return (
    <Layout className="max-h-[calc(100vh)] bg-[#141414] text-white">
      <Sider
        width={450}
        theme={isDark ? 'dark' : 'light'}
        className="custom-scrollbar sticky top-0 h-[calc(100vh-60px)] overflow-y-auto"
      >
        <Menu
          theme={isDark ? 'dark' : 'light'}
          mode="inline"
          selectedKeys={[activeKey]}
          defaultOpenKeys={[
            'sub1',
            'sub2',
            'sub3',
            'sub4',
            'sub5',
            'sub6',
            'sub7',
            'sub8',
            'sub9',
            'sub10',
          ]}
          className="custom-menu !my-6 h-full border-r-0"
          onClick={({ key }) => setActiveKey(key)}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="პროდუქცია" className="mb-6">
            <Menu.Item key="1">ინფორმაცია პროდუქციის შესახებ</Menu.Item>
            <Menu.Item key="2">ფილტრაცია</Menu.Item>
            <Menu.Item key="3">პროდუქციის შექმნა / ჩასწორება</Menu.Item>
            <Menu.Item key="4">ჯგუფების კონტროლი</Menu.Item>
            <Menu.Item key="5">ფასდაკლებების მართვა</Menu.Item>
            <Menu.Item key="6">კალკულაცია</Menu.Item>
            <Menu.Item key="7">დამატებითი ფუნქციები</Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<LaptopOutlined />} title="მიღება" className="mb-6">
            <Menu.Item key="8">მიღება</Menu.Item>
            <Menu.Item key="9">ზედნადების მიღების გაუქმება</Menu.Item>
            <Menu.Item key="10">ხელშეკრულების შეცვლა</Menu.Item>
            <Menu.Item key="11">მიღება შესყიდვის აქტით</Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" icon={<DollarOutlined />} title="სალარო" className="mb-6">
            <Menu.Item key="12">ნავაჭრი</Menu.Item>
            <Menu.Item key="13">სალაროს მოძრაობა</Menu.Item>
            <Menu.Item key="14">კლიენტები</Menu.Item>
            <Menu.Item key="15">სალაროს წიგნი</Menu.Item>
            <Menu.Item key="16">ფასდაკლებები</Menu.Item>
          </SubMenu>

          <SubMenu key="sub4" icon={<UndoOutlined />} title="დაბრუნება" className="mb-6">
            <Menu.Item key="17">დაბრუნება</Menu.Item>
            <Menu.Item key="18">ხელით დაბრუნება</Menu.Item>
          </SubMenu>

          <SubMenu key="sub5" icon={<TeamOutlined />} title="მომწოდებლები" className="mb-6">
            <Menu.Item key="19">მომწოდებლები</Menu.Item>
            <Menu.Item key="20">მომწოდებლის შექმნა</Menu.Item>
            <Menu.Item key="21">გადახდები</Menu.Item>
          </SubMenu>

          <SubMenu key="sub6" icon={<FileTextOutlined />} title="რეპორტები" className="mb-6">
            <Menu.Item key="22">ფილტრები/რეალიზაცია</Menu.Item>
            <Menu.Item key="23">რეპორტი/მიღება</Menu.Item>
            <Menu.Item key="24">რეპორტი/მომწოდებლები</Menu.Item>
            <Menu.Item key="25">რეპორტი/ნაშთები</Menu.Item>
          </SubMenu>

          <SubMenu key="sub7" icon={<SettingOutlined />} title="პარამეტრები" className="mb-6">
            <Menu.Item key="26">სასწორები</Menu.Item>
            <Menu.Item key="27">პრინტერები</Menu.Item>
          </SubMenu>

          <SubMenu key="sub8" icon={<UserAddOutlined />} title="მომხმარებელი" className="mb-6">
            <Menu.Item key="28">მომხმარებლის შექმნა</Menu.Item>
            <Menu.Item key="29">პაროლის შეცვლა</Menu.Item>
            <Menu.Item key="30">უფლებები</Menu.Item>
          </SubMenu>

          <SubMenu key="sub9" icon={<ShoppingCartOutlined />} title="რეალიზაცია" className="mb-6">
            <Menu.Item key="31">რეალიზაცია</Menu.Item>
          </SubMenu>

          <SubMenu key="sub10" icon={<DeleteOutlined />} title="ჩამოწერა" className="mb-6">
            <Menu.Item key="32">ჩამოწერა</Menu.Item>
            <Menu.Item key="33">ჩამოწერის გაუქმება</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      <Layout className="pl-6">
        <Content className="custom-scrollbar max-h-[calc(100vh-60px)] overflow-y-auto !bg-white !px-8 pt-[90px] !pb-24 dark:!bg-[var(--dark-light-blue)] dark:!text-[var(--white-gray)]">
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Documentations;

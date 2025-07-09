import { useState } from 'react';
import Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';


const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const Documentations = () => {
  const [activeKey, setActiveKey] = useState('1');

  const renderContent = () => {
    switch (activeKey) {
      case '1':
        return <div>პროდუქცია → option1</div>;
      case '2':
        return <div>პროდუქცია → option2</div>;
      case '3':
        return <div>პროდუქცია → option3</div>;
      case '4':
        return <div>პროდუქცია → option4</div>;
      case '5':
        return <div>მიღება → option5</div>;
      case '6':
        return <div>მიღება → option6</div>;
      case '7':
        return <div>მიღება → option7</div>;
      case '8':
        return <div>მიღება → option8</div>;
      case '9':
        return <div>დაბრუნება → option9</div>;
      case '10':
        return <div>დაბრუნება → option10</div>;
      case '11':
        return <div>დაბრუნება → option11</div>;
      case '12':
        return <div>დაბრუნება → option12</div>;
      default:
        return <div>აირჩიე ელემენტი მენიუდან</div>;
    }
  };

  return (
    <Layout className="!min-h-screen pt-[80px] ">
      <Sider
        width={400}
        style={{
          background: '#fff',
          overflow: 'auto',
          height: 'calc(100vh - 80px)',
          position: 'sticky',
          top: 0,
          padding: '20px 0px',
        }}
      >
        <Menu
          mode="inline"
          selectedKeys={[activeKey]}
          defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5']}
          style={{ height: '100%', borderRight: 0 }}
          onClick={({ key }) => setActiveKey(key)}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                პროდუქცია
              </span>
            }
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                მიღება
              </span>
            }
          >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                დაბრუნება
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
                    <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="notification" />
                დაბრუნება
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
                    <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="notification" />
                დაბრუნება
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      <Layout style={{ padding: '0px 0px 0px 24px', overflow: 'auto' }}>
        <Content
          style={{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: 'calc(100vh - 80px)',
            overflow: 'auto',
            paddingTop: "90px"
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Documentations;

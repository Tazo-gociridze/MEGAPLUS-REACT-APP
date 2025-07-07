import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import type { FC } from 'react';
import type { Tariff } from '../../tariffs.types';

const { Panel } = Collapse;

type PanelKeys = string[][];

interface DropdownContentPropsTypes {
  activePanels: string[][];
  index: number;
  setActivePanels: React.Dispatch<React.SetStateAction<PanelKeys>>;
  tariff: Tariff;
}

const DropdownContent: FC<DropdownContentPropsTypes> = ({
  activePanels,
  index,
  setActivePanels,
  tariff,
}) => {
  return (
    <Collapse
      ghost
      activeKey={activePanels[index]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined
          rotate={isActive ? 90 : 0}
          className="text-black transition-colors duration-300 dark:!text-white"
        />
      )}
      onChange={(keys: string | string[]) => {
        const updatedPanels = [...activePanels];
        updatedPanels[index] = Array.isArray(keys) ? keys : [keys];
        setActivePanels(updatedPanels);
      }}
    >
      {tariff.features.map((feature, i) => (
        <Panel
          header={<span className="dark:text-[var(--white-gray)]">{feature.title}</span>}
          key={i.toString()}
        >
          {feature.description.map((item) => (
            <p
              key={item.name}
              className={`!mb-4 ${item.active ? 'text-green-600' : 'text-red-500 line-through'}`}
            >
              {item.name}
            </p>
          ))}
        </Panel>
      ))}
    </Collapse>
  );
};

export default DropdownContent;

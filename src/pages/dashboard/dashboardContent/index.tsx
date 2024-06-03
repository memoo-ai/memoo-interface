import './index.scss';
import { Tabs as AntTabs } from 'antd';
import { useCallback, useState, FC, useEffect } from 'react';
import { Creator } from './Creator';
import { Collector } from './Collector';
import { WatchList } from './WatchList';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

export const DashboardContent: FC<{ onChangeType: (type: string) => void }> = ({ onChangeType, ...rest }) => {
  const [activeKey, setActiveKey] = useState('Creator');
  const location = useLocation();
  const onChange = useCallback((e: any) => {
    setActiveKey(e);
    onChangeType(e);
  }, []);
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const type = query.get('type');
    if (type) {
      setActiveKey(type);
      onChangeType(type);
    }
  }, [location.search]);
  const items = [
    {
      key: 'Creator',
      label: 'Creator',
      children: <Creator />,
    },
    {
      key: 'Collector',
      label: 'Collector',
      children: <Collector />,
    },
    {
      key: 'WatchList',
      label: 'WatchList',
      children: <WatchList />,
    },
  ];

  return (
    <div>
      <AntTabs activeKey={activeKey} onChange={onChange} items={items} />
    </div>
  );
};
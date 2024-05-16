import './index.scss';
import CommonBanner from '@/components/Banner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import { columns, IDO, IDOStatus } from './columns';
import SwipeCard from '@/components/SwipeCard';
import { Table } from 'antd';
import { ActiveIdoCard } from './card';
import type { GetProp, TableProps } from 'antd';
import { AirDrop } from './airDrop';
import { SectionListWithSeparator } from './sectionListWithSeparator';
type ColumnsType<T> = TableProps<T>['columns'];
type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
}
export default () => {
  const [data, setData] = useState<IDO[]>([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 30,
    },
  });

  const fetchData = async () => {
    const list = new Array(20).fill(undefined).map((_, i) => ({
      id: 'dogwifhat',
      name: 'DogWifHat',
      symbol: 'WIF',
      logo: '',
      date: '04 Sep 2024',
      totalRaised: 2.3,
      status: IDOStatus.upcoming,
    }));
    setData(list);
  };

  useEffect(() => {
    fetchData();
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);

  const handleTableChange: TableProps['onChange'] = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <div className="page pb-[70px]">
      <AirDrop />
      <div className="base-container">
        <CommonBanner
          title="MeMoo LaunchPad. Your Ticket to Meme Stardom."
          desc="Ignite Your Memes, Ignite Your Success.
        "
        />
        <SectionListWithSeparator />
        <ActiveIdoCard />
        <div>
          <div className="flex-col">
            <img src="./temp/" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between my-[70px]">
          <p className="text-404px font-bold text-[24px]">Upcoming IDO</p>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
        />
        <CommonBanner
          title="Supercharge Your Meme Creation."
          desc="Create Your Very Own Meme Token Now."
          link="/"
          linkText="BE A CREATOR"
        />
      </div>
    </div>
  );
};
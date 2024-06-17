import './profile.scss';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from './card';
import { Button, Spin } from 'antd';
import IPagination from '@/components/IPagination';
import {
  IconDraftBtn,
  IconQueueBtn,
  IconLaunchedBtn,
  IconEdit,
  IconAdd,
  IconAirdropBtn,
  // IconAddress,
  // IconETH,
} from '@/components/icons';
import ClaimModal from './claim-modal';
import AirdropModal from './airdrop-modal';
import IncreaseModal from './increase-modal';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { getCreator, deleteToken } from '@/api/dashboard';
import { CreatorStatus } from './type';
import { DashboardCreator } from '@/types';
const pageSize = 11;
export const Profile = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [update, setUpdate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<CreatorStatus>('');
  const [list, setList] = useState<DashboardCreator[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const iconRefs = useRef<any>({});
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await getCreator({
          pageNumber: currentPage,
          pageSize,
          status: tab,
        });
        setList(data.records ?? []);
        setTotal(data.total_record ?? 0);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [tab, currentPage, update]);
  const deleteDraft = async (id: string) => {
    await deleteToken(id);
  };

  const renderButton = (item: DashboardCreator) => {
    let button;
    switch (item.status) {
      case 'Draft':
        button = (
          <IconDraftBtn
            className="draft"
            color={item.status === 'Draft' ? '#7D83B5' : '#242842'}
            hoverColor={item.status === 'Draft' ? '#07E993' : '#242842'}
            bgColor={item.status === 'Draft' ? '#383C61' : '#242842'}
            hoverBgColor={item.status === 'Draft' ? '#1F3B4F' : '#242842'}
            style={{ border: item.status === 'Draft' ? 'none' : '1px solid #07E993' }}
            onClick={() => {
              deleteDraft(item.ticker);
              setTimeout(() => setUpdate((count) => count + 1), 200);
            }}
          />
        );
        break;
      case 'QUEUE':
        button = (
          <IncreaseModal ticker={item.ticker}>
            <Button
              className="flex items-center justify-between creator-btn"
              onMouseOver={() => iconRefs.current['increase'].setHovered(true)}
              onMouseLeave={() => iconRefs.current['increase'].setHovered(false)}
            >
              <IconQueueBtn className="QueueBtn" ref={(ref) => (iconRefs.current['increase'] = ref)} />
              <span className="ml-[9px]">INCREASE</span>
            </Button>
          </IncreaseModal>
        );
        break;
      case 'IDO':
        button = (
          <IncreaseModal ticker={item.ticker}>
            <Button
              className="flex items-center justify-between creator-btn"
              onMouseOver={() => iconRefs.current['increase'].setHovered(true)}
              onMouseLeave={() => iconRefs.current['increase'].setHovered(false)}
            >
              <IconQueueBtn className="QueueBtn" ref={(ref) => (iconRefs.current['increase'] = ref)} />
              <span className="ml-[9px]">INCREASE</span>
            </Button>
          </IncreaseModal>
          // <IncreaseModal creator={item}>
          //   <Button
          //     className="flex items-center justify-between"
          //     onMouseOver={() => iconRefs.current['increase'].setHovered(true)}
          //     onMouseLeave={() => iconRefs.current['increase'].setHovered(false)}
          //   >
          //     <IconQueueBtn className="QueueBtn" ref={(ref) => (iconRefs.current['increase'] = ref)} />
          //     <span className="ml-[9px]">INCREASE</span>
          //   </Button>
          // </IncreaseModal>
        );
        break;
      case 'Launched':
        button = (
          <ClaimModal ticker={item.ticker}>
            {' '}
            <Button
              className="flex items-center justify-between creator-btn"
              key="increase"
              onMouseOver={() => iconRefs.current['LaunchedBtn'].setHovered(true)}
              onMouseLeave={() => iconRefs.current['LaunchedBtn'].setHovered(false)}
              disabled={!item.stageOneClaim}
            >
              <IconLaunchedBtn
                className="LaunchedBtn"
                color="#07E993"
                ref={(ref) => (iconRefs.current['LaunchedBtn'] = ref)}
              />
              <span className="ml-[9px]">CLAIM</span>
            </Button>
          </ClaimModal>
        );
        break;
      default:
        button = '';
        // button = (
        //   <AirdropModal creator={item}>
        //     {' '}
        //     <Button
        //       className="flex items-center justify-between"
        //       key="increase"
        //       onMouseOver={() => iconRefs.current['AirdropBtn'].setHovered(true)}
        //       onMouseLeave={() => iconRefs.current['AirdropBtn'].setHovered(false)}
        //     >
        //       <IconAirdropBtn
        //         className="IconAirdropBtn"
        //         color="#07E993"
        //         ref={(ref) => (iconRefs.current['AirdropBtn'] = ref)}
        //       />
        //       <span className="ml-[9px]">CLAIM AIRDROP</span>
        //     </Button>
        //   </AirdropModal>
        // );
        break;
    }

    return button;
  };
  return (
    <div className="dashboard_items">
      <div className="dashboard_top">
        {/* <div className="dashboard_top_left">
          <IconAddress className="address" />
          <span className="dashboard_top_left_text">0x4GDD...123e</span>
          <IconETH className="eth" />
          <span className="dashboard_top_left_text">8.2905 E</span>
        </div> */}
        <div />
        <div>
          <Button type="link" className="flex items-center h-[40px] gap-x-[11px]">
            <span className="text-bluish-purple-light font-OCR leading-5 text-sm">Edit Profile</span>
            <IconEdit className="" color="#07E993" hoverColor="#B53BFF" bgColor="#B53BFF" hoverBgColor="#07E993" />
          </Button>
        </div>
      </div>
      <div className="dashboard_items_items">
        <div
          className="dashboard_item_create"
          onClick={() => {
            navigate('/create_token');
          }}
        >
          <IconAdd className="dashboard_item_create_add" />

          <p>Create Token</p>
        </div>
        <Spin spinning={loading} fullscreen />
        {list.map((item, index) => {
          return (
            <Card key={index} data={item}>
              <div className="flex justify-between items-center mt-[15px]">
                <div>{renderButton(item)}</div>
                <div
                  className={item.status === 'Draft' ? 'draft' : ''}
                  onClick={() => {
                    navigate(
                      item.status === 'Draft' || item.status === 'Waiting_for_pay'
                        ? `/create_token?ticker=${item.ticker}`
                        : `/airdrop/${item.ticker}`,
                    );
                  }}
                >
                  <IconEdit
                    className="dashboard_item_create_edit"
                    color={item.status === 'Draft' ? '#7D83B5' : '#07E993'}
                    hoverColor={item.status === 'Draft' ? '#07E993' : '#000'}
                    bgColor={item.status === 'Draft' ? '#383C61' : '#242842'}
                    hoverBgColor={item.status === 'Draft' ? '#1F3B4F' : '#07E993'}
                    style={{ border: item.status === 'Draft' ? 'none' : '1px solid #07E993' }}
                    // onClick={navigate(`/airdrop/${item.ticker}`)}
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="mt-[60px]">
        <IPagination
          currentPage={currentPage}
          total={total}
          pageSize={pageSize}
          onChangePageNumber={(page) => {
            setCurrentPage(page);
          }}
        />
      </div>
      <div className="flex justify-center">
        <img className="w-[172.66px] has-[101.46px] mt-[53px]" src="./dashboard/dashboard_bottom_icon.png" alt="" />
      </div>
    </div>
  );
};

import { useCallback, useContext, useMemo, useState } from 'react';
import Countdown from './countdown';
import { TokenCreateStage } from '@/types';
import './airdrop-claim.scss';
import { Button, Popover, Spin } from 'antd';
import classNames from 'classnames';
import { AirdropContext } from '../airdrop';
import { follow } from '@/api/airdrop';
import AirdropClaimModal from './airdrop-claim-modal';

export default function AirdropClaim() {
  const { stage, idoQueueDetail, idoLaunchedDetail } = useContext(AirdropContext);
  const [following, setFollowing] = useState(false);

  const follows = useMemo(
    () => [
      { user: idoQueueDetail?.projectTwitter, link: '', followed: idoQueueDetail?.memeTwitterBind },
      { user: idoQueueDetail?.platformTwitter, link: '', followed: idoQueueDetail?.platformTwitterBind },
    ],
    [idoQueueDetail],
  );

  const doingTask = useMemo(() => stage === 'in-queue', [stage]);

  const airdropUnlocking = useMemo(() => stage === 'imo', [stage]);

  const airdropUnlocked = useMemo(() => stage === 'launch' || stage === '1st-claim' || stage === '2st-claim', [stage]);

  const handleFollow = useCallback(async (twitter?: string) => {
    try {
      console.assert(!!twitter, 'twitter is not found');
      setFollowing(true);
      await follow(twitter!);
    } catch (error) {
      console.error(error);
    } finally {
      setFollowing(false);
    }
  }, []);

  return (
    <div className="airdrop_claim px-5 pt-9 pb-5">
      <div className="head flex justify-between">
        <h3 className="flex items-center gap-x-2 font-404px text-green text text-lg">
          airdrop{' '}
          <Popover>
            <img src="/create/tip.png" />
          </Popover>
        </h3>
        {doingTask && <span className="endsin font-OCR text-white">Ends in</span>}
      </div>
      <div className="in_queue flex justify-between">
        <p className="text-deep-green text-xs whitespace-pre-wrap">
          Complete tasks to be{'\n'}eligible for token airdrop.{' '}
        </p>
        {doingTask && (
          <Countdown
            instant={
              idoQueueDetail?.airdropEndsIn && typeof idoQueueDetail?.airdropEndsIn === 'number'
                ? idoQueueDetail?.airdropEndsIn * 1000
                : 0
            }
          />
        )}
      </div>
      <ul className="follow_list flex flex-col gap-y-2 mt-4">
        {follows.map((item, index) => (
          <li key={index} className="follow_list_item flex items-center w-full justify-between px-3 py-3.5">
            <p
              className={classNames('leading-5 font-OCR whitespace-pre-wrap', {
                'text-white': !item.followed,
                'text-deep-green': item.followed,
              })}
            >
              Follow @{item.user}
              {'\n'}on twitter
            </p>
            <img
              onClick={() => (item.followed ? null : handleFollow(item.user))}
              className={classNames('w-5', { 'cursor-pointer': !item.followed, 'opacity-30': item.followed })}
              src={`/create/icon-${item.followed ? 'followed' : 'outlink-media'}.png`}
            />
          </li>
        ))}
      </ul>
      {airdropUnlocking && (
        <div className="mt-5 airdrop-unlock flex flex-col items-center gap-y-2">
          <div className="flex gap-x-3.5">
            <img className="w-5 object-contain" src="/create/icon-airdrop-lock.png" />
            <Countdown instant={(idoLaunchedDetail?.rewardEndsIn ?? 0) * 1000} />
          </div>
          <p className="text-white font-OCR leading-20 text-sm">Wait for your airdrop to unlock.</p>
        </div>
      )}
      {airdropUnlocked && (
        <div className="mt-5 airdrop-unlock flex flex-col items-center gap-y-2">
          <img className="w-5 object-contain" src="/create/icon-airdrop-unlock.png" />
          <p className="text-white font-404px leading-20 text-2xl">
            {Number(idoLaunchedDetail?.count).toLocaleString()} WIF
          </p>
        </div>
      )}
      <AirdropClaimModal>
        <Button
          disabled={!idoQueueDetail?.claimFlag}
          className={classNames('uppercase w-full claim_btn h-12 font–404px', {
            'mt-20': doingTask,
            'mt-5': airdropUnlocking || airdropUnlocked,
          })}
        >
          claim
        </Button>
      </AirdropClaimModal>
      <Spin fullscreen spinning={following} />
    </div>
  );
}
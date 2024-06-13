import { BrowserProvider, JsonRpcSigner } from 'ethers';
import { useCallback, useMemo } from 'react';
import type { Account, Chain, Client, Transport } from 'viem';
import { type Config, useConnectorClient } from 'wagmi';

export function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain?.id,
    name: chain?.name,
    ensAddress: chain?.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId });
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client]);
}

export function useSign() {
  const signer = useEthersSigner({ chainId: Number(import.meta.env.VITE_NODE_CHAIN_ID) });

  const getSign = useCallback(async () => {
    if (!signer) return;

    const msg = String(Date.now() / 1e3);
    const rawSignature = await signer.signMessage(msg);
    return rawSignature;
  }, [signer]);

  return { getSign };
}

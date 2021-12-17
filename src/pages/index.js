import { useWeb3React } from '@web3-react/core';
import { injected } from '../components/wallet/connectors';
import tokenlist from '../assets/tokenlist.json';
import { useState } from 'react';
import react from 'react';
import useBalance from '../actions/useBalance';
import exchange from '../components/returns';

export default function Home() {

const [selectedToken, setSelectedToken] = useState(tokenlist[0])

const { activate, account } = useWeb3React()

const [balance] = useBalance(
  selectedToken.address,
  selectedToken.decimals
)

// const exchange = trade;

    return (
      <div className='container'>
        <button onClick={() => activate(injected)}>Connect wallet</button>
        {account ? `Connected wallet: ${account}` : 'Wallet not connected'}
        <select onChange={(e) => setSelectedToken(tokenlist[e.target.value])}>
          {tokenlist.map((token, index) => (
            <option value={index} key={token.address}>{token.name}</option>
          ))}
        </select>
        <a>{selectedToken.name} balance {balance}</a>
        <a>Exchanged to DAI: {exchange}</a>
      </div>
    )
}

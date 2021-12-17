import tokenlist from '../assets/tokenlist.json';
import { useState } from 'react';
import BigNumber from 'bignumber.js';
import oneSplitABI from '../assets/onesplit.json';
import erc20ABI from '../assets/abi-erc20.json';
import Web3 from 'web3';
import useBalance from '../actions/useBalance';


  const DEX = require('../store/DEX.js');

  const onesplitAddress = "0xC586BeF4a0992C495Cf22e1aeEE4E446CECDee0E"; // 1split contract address on Main net
  const daiAddress = '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063';

export default function Exchange() {

  const [selectedToken] = useState(tokenlist[0])
  const fromToken = selectedToken.address;
  const fromTokenDecimals = selectedToken.decimals;

  const [balance] = useBalance(
    selectedToken.address,
    selectedToken.decimals
  )

  const toToken = daiAddress;

  const amountToExchange = 1;

  const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545', { timeout: 20000000 }));
  const onesplitContract = new web3.eth.Contract(oneSplitABI, onesplitAddress);

  //const daiToken = new web3.eth.Contract(erc20ABI, fromToken);

  onesplitContract.methods.getExpectedReturn(fromToken, toToken, new BigNumber(amountToExchange)
  .shiftedBy(fromTokenDecimals).toString(), 100, 0)
  .call({ from: '0x008062acA356B5F93F2F14b71Fd73db91A606d0C' }, function (error, result) {
    if (error) {
        console.log(error)
        return;
    }
      console.log("Trade From: " + fromToken)
      console.log("Trade To: " + toToken);
      console.log("Trade Amount: " + amountToExchange);
      const trade = new BigNumber(result.returnAmount).shiftedBy(-fromTokenDecimals).toString();
      console.log(trade);
      console.log("Using Dexes:");
      for (let index = 0; index < result.distribution.length; index++) {
          console.log(DEX[index] + ": " + result.distribution[index] + "%");
    }
    return trade;
  });
}



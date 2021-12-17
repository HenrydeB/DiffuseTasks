## Getting Started

#### note: this project uses the MetaMask extension, to ensure connectivity to your wallet download MetaMask (https://metamask.io/download)
# Table of Contents

1. [Steps](#steps)
2. [Functionality](#functionality)
3. [Following Up](#following-up)
4. [Summary](#summary)

## Steps

1. First clone the repository onto your local environment.
2. From there you can run the development server:

```bash
npm run dev
# or
yarn dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
![Diffuse main page](https://user-images.githubusercontent.com/69326962/146607951-69643216-64b5-4a3d-8ebe-0a45dd094063.png)
4. From there, click "connect wallet"
5. You will be prompted to connect your wallet via metamask, in which you will need your private login information to access said wallet, not just the address.

## Functionality

After the wallet is connected, you will be able to use the dropdown menu to select which token you would like to check your total balance of. 
Tokens available to be checked are: SHI3LD, KOGE, PEAR, SING, and DAI stablecoin. Due to timing issues, the conversion from the first four coins
listed into DAI stablecoin is currently not available, but the code is available in src/components/returns.js.

## Following Up

Following up with this project, I will continue troubleshoot the code that I have under the returns.js file. The intention of the code was to call the various tokens needed from the tokenlist.JSON file via useState and labeling them as 'fromToken', pulling the DAI coin data from the address given to me in the email and lableing it as 'toToken'. From there, we would pass both of those tokens into a getExpectedReturn method from the onesplitContract. Our final result would appear under the constant 'trade' by creating a new BigNumber that returns the result of returnAmount. Lists of consolelogs used to keep track of progress through the function.
![returnjs](https://user-images.githubusercontent.com/69326962/146609251-621b0436-91ee-4fbc-8a2e-140423df2643.png)

Hindsight, I believe there must have been an easier for me to achieve my desired result and the route that I took ended up taking too much time.

## Summary

I thoroughly enjoyed this project. I learned a lot about blockchain development, security, and the many platforms that can be used for blockchain development. I do believe I will be continuing in my research into this subject. This was an excellent assignment, and arguably the most fun I have had coding in a few months.




 



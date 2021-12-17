//use this to connect to metamask w/ injected connector
import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
    supportedChainId: 137
})
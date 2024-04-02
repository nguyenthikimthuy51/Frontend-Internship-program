
import abi from '../ABI.json'
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { ethers } from 'ethers';
import { useEffect } from 'react';
function Web3ReactExample() {
    const contractAddress = '0xa040F42997720c67F8998082E7B45405D108e513';
    const { library, account, chainId } = useWeb3React();
    const Injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42]
    });
    if (!account) {
        return <div>Không có tài khoản nào đang kết nối.</div>;
    }
    console.log(chainId)
    return (
        <div>
            <p>vdv</p>
        </div>
    );
}

export default Web3ReactExample;
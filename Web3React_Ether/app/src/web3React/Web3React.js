import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers'; // Thêm import này

const Web3React = () => {
    const { library, account } = useWeb3React();
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        if (library && account) {
            const fetchBalance = async () => {
                try {
                    const provider = new Web3Provider(library); // Thay đổi ở đây
                    const balance = await provider.getBalance(account);
                    // setBalance(ethers.utils.formatEther(balance));
                    setBalance(balance)
                } catch (error) {
                    console.error('Lỗi khi lấy số dư:', error);
                }
            };
            fetchBalance();
        }
    }, [library, account]);

    return (
        <div>
            <h2>Số dư tài khoản:</h2>
            {balance ? <p>{balance} ETH</p> : <p>Loading...</p>}
        </div>
    );
};

export default Web3React;

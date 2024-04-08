import { ethers } from 'ethers';
import abi from '../ABI.json'
import React, { useState } from "react";
const { parseEther } = ethers.utils;

function EtherExample() {
    const contractAddress = '0xdDaED8a1B0751a9C7509167b8457bbf97739C1a6';
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const signer = provider.getSigner()
    const [address, setAddress] = useState("")
    const [amount, setAmount] = useState(0)
    const [addressApproval, setAddressApproval] = useState("")
    const [amountApproval, setAmountApproval] = useState(0)
    const [sender, setSender] = useState("")
    const [recipient, setRecipient] = useState("")
    const [amountTransferFrom, setAmountTransferFrom] = useState(0)

    // Earlier in v5 provider = new ethers.providers.Web3Provider(window.ethereum)
    // In v6: provider = new ethers.BrowserProvider(window.ethereum)
    
    const loadData = async () => {

        const name = await contract.name();
        console.log(name)

        provider.getBlockNumber()
            .then(result => console.log('BlockNumber: ', result))
        provider.getBalance("0x1531841d2099c073005e647F0E5A1717dcc256Ff")
            .then(result => console.log('Balance: ', ethers.utils.formatEther(result)))
        provider.getNetwork()
            .then(result => console.log('Network: ', result))

        contract.name()
            .then(result => console.log('Contract name: ', result))
        contract.balanceOf("0x1531841d2099c073005e647F0E5A1717dcc256Ff")
            .then(result => console.log('BalanceOf: ', ethers.utils.formatEther(result)))

        const myAddress = await signer.getAddress();
        console.log('My address: ', myAddress)

        const filterFrom = contract.filters.Transfer(myAddress, null);
        console.log('Filter from: ', filterFrom)

        const filterTo = contract.filters.Transfer(null, myAddress);
        console.log('Filter to: ', filterTo)

        provider.getTransactionCount(contractAddress)
            .then(result => console.log('TransactionCount: ', result))
    }
    loadData()

    function transferToken(address, amount) {
        signer.getAddress().then((myAddress) => {
            contract.connect(signer).transfer(address, parseEther(amount))
                .then((result) => console.log('Transfer successed: ', result))
                .catch((error) => console.error('Transfer failed: ', error));
        });
    }

    function approveTransfer(address, amount) {
        signer.getAddress().then((myAddress) => {
            contract.connect(signer).approve(address, parseEther(amount))
                .then((result) => console.log('Approval successed: ', result))
                .catch((error) => console.error('Approval failed: ', error));
        });
    }

    function transferFrom(sender, recipient, amount) {
        console.log({
            sender, recipient, amount
        })
        signer.getAddress().then((myAddress) => {
            const myContractAddress = '0xdDaED8a1B0751a9C7509167b8457bbf97739C1a6'; // Địa chỉ của smart contract khác
            const myContract = new ethers.Contract(myContractAddress, abi, provider);
            myContract.connect(signer).transferFrom(sender, recipient, parseEther(amount), { gasLimit: 100000 })
                .then((result) => console.log('TransferFrom successed: ', result))
                .catch((error) => console.error('TransferFrom failed: ', error));
        });
    }

    return (
        <div>
            <div className="field_approval">
                <input placeholder="Enter address"
                    // value={address}
                    onChange={(e) => setAddressApproval(e.target.value)}></input>
                <input
                    placeholder="Enter amount"
                    // value={amount}
                    onChange={(e) => setAmountApproval(e.target.value)}
                />
                <button onClick={() => approveTransfer(addressApproval, amountApproval)}>Approve</button>
            </div>

            <div className="field_transfer_token">
                <input placeholder="Enter sender address"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}></input>
                <input
                    placeholder="Enter recipient address"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                />
                <input
                    placeholder="Enter amount"
                    onChange={(e) => setAmountTransferFrom(e.target.value)}
                />
                <button onClick={() => transferFrom(sender, recipient, amountTransferFrom)}>Transfer From</button>
            </div>

            <div className="field_transfer_token">
                <input placeholder="Enter address"
                    // value={address}
                    onChange={(e) => setAddress(e.target.value)}></input>
                <input
                    placeholder="Enter amount"
                    // value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button onClick={() => transferToken(address, amount)}>Send token</button>
            </div>


        </div>
    );
}

export default EtherExample;
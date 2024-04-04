import { ethers } from 'ethers';
import abi from '../ABI.json'


function EtherExample() {
    const contractAddress = '0xa040F42997720c67F8998082E7B45405D108e513';
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const signer = provider.getSigner()
    // Earlier in v5 provider = new ethers.providers.Web3Provider(window.ethereum)
    // In v6: provider = new ethers.BrowserProvider(window.ethereum)
    const loadData = async () => {

        const name = await contract.name();
        console.log(name)

        provider.getBlockNumber()
            .then(result => console.log('BlockNumber: ', result))
        provider.getBalance(contractAddress)
            .then(result => console.log('Balance: ', ethers.utils.formatEther(result)))
        provider.getNetwork()
            .then(result => console.log('Network: ', result))
        
        contract.name()
            .then(result => console.log('Contract name: ', result))
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

    function handleSendTransaction() {
        signer.sendTransaction({
            to: "ricmoo.firefly.eth",
            value: ethers.utils.parseEther("0.0000001")
        })
        provider.getBalance(contractAddress)
            .then(result => console.log('Balance: ', result))

    }

    return (

        <div>
            <button onClick={handleSendTransaction}>Send</button>
        </div>
    );
}

export default EtherExample;
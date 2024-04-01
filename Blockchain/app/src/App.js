import './App.css';
import Web3 from 'web3';
import abi from "./ABI.json";
import { useEffect } from "react";

function App() {
  // const Web3 = require('web3');
  const providerUrl = 'https://sepolia.infura.io/v3/bbdc77ca5ef94854891d4a44db255d11';
  const contractAddress = '0xa040F42997720c67F8998082E7B45405D108e513';
  const accountAddress = '0x1531841d2099c073005e647F0E5A1717dcc256Ff';

  useEffect(() => {
    const web3 = new Web3(providerUrl);
    const contract = new web3.eth.Contract(abi, contractAddress)
    console.log(contract.methods);
    contract.methods.totalSupply().call()
      .then(result => console.log("totalSupply: ", result));
    contract.methods.symbol().call()
      .then(result => console.log("symbol: ", result))
    contract.methods.balanceOf(accountAddress).call()
      .then(result => console.log("balanceOf: ", result))
    contract.methods.name().call()
      .then(result => console.log("name: ", result))
    contract.methods.decimals().call()
      .then(result => console.log("decimal: ", result))
    contract.methods.nonces(accountAddress).call()
      .then(result => console.log("nonces: ", result))

  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;

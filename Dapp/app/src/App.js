
import './App.css';
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from './ABI.json'

function App() {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  const [tickets, setTickets] = useState([]);

  const getTickets = async () => {
    const res = await contract.getTickets();
    console.log("res: ", res);
    setTickets(res);
  }

  const createTicket = async (name) => {
    const transaction = await contract.createTicket(name);
    await transaction.wait();
    getTickets();
  }

  const updateTicketName = async (index, name) => {
    const transaction = await contract.updateTicketName(index, name);
    await transaction.wait();
    getTickets();
    setName("");
  }

  const updateTicketStatus = async (index, status) => {
    const transaction = await contract.updateTicketStatus(index, status);
    await transaction.wait();
    getTickets();
  }

  const renameTicket = async (index) => {
    let newName = prompt("Please enter new ticket name", "")
    const transaction = await contract.updateTicketName(index, newName);
    await transaction.wait();
    getTickets();
  }

  const initConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      console.log("connect")
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const newSigner = provider.getSigner();
      setAccount(accounts[0]);
      setContract(new ethers.Contract("0x8805F0309396B5c58153A445888434116a8CE207", abi, newSigner))

    } else {
      window.confirm("Please install metamask!")
    }

  }

  useEffect(() => {
    initConnection();

  }, []);

  useEffect(() => {
    if (contract) {
      getTickets();
    }
  }, [contract]);

  return (

    <div className="App">
      <header className='bg-slate-800 font-mono text-xl text-white px-10'>
        <p>Task manager</p>
        {account != "" ? (<p>User: {account}</p>) : (<button onClick={initConnection}>Connect</button>)}
      </header>

      <div className='mx-10 mt-5'>
        <div>
          <input
          className='bg-zinc-200 p-2 rounded-xl'
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter ticket name...' />
          <button className ='bg-blue-700 px-5 py-2 mx-2 rounded-xl text-white'
          onClick={() => createTicket(name)}>Create Ticket</button>
        </div>
        <div className='grid grid-cols-3 mt-10 gap-7'>
          <div className='bg-blue-100 px-10 py-8 rounded-xl'>
            <h1 className='text-xl'>To do</h1>

            {tickets
              .map((t, i) => ({ id: i, item: t }))
              .filter(t => t.item.status == 0)
              .map((ticket, index) => {
                return (
                  <div key={index}>
                    <p>{`${ticket.id + 1}. ${ticket.item.name}`}</p>
                    <button className ='bg-blue-700 px-5 py-1 mx-2 rounded-xl text-white'
                    onClick={() => updateTicketStatus(ticket.id, 1)}>Busy</button>
                    <button className ='bg-blue-700 px-5 py-1 mx-2 rounded-xl text-white'
                    onClick={() => updateTicketStatus(ticket.id, 2)}>Done</button>
                    <button className ='bg-blue-700 px-5 py-1 mx-2 rounded-xl text-white'
                    onClick={() => renameTicket(ticket.id)}>Rename</button>
                  </div>

                )

              })}
          </div>
          <div className='bg-blue-100 px-10 py-8 rounded-xl'>
            <h1 className='text-xl'>Busy</h1>

            {tickets
              .map((t, i) => ({ id: i, item: t }))
              .filter(t => t.item.status == 1)
              .map((ticket, index) => {
                return (
                  <div key={index}>
                    <p>{`${ticket.id + 1}. ${ticket.item.name}`}</p>
                    <button className ='bg-blue-700 px-5 py-1 mx-2 rounded-xl text-white'
                    onClick={() => updateTicketStatus(ticket.id, 1)}>Busy</button>
                    <button className ='bg-blue-700 px-5 py-1 mx-2 rounded-xl text-white'
                    onClick={() => updateTicketStatus(ticket.id, 2)}>Done</button>
                    <button className ='bg-blue-700 px-5 py-1 mx-2 rounded-xl text-white'
                    onClick={() => renameTicket(ticket.id)}>Rename</button>
                  </div>

                )

              })}
          </div>
          <div className='bg-blue-100 px-10 py-8 rounded-xl'>
            <h1 className='text-xl'>Done</h1>

            {tickets
              .map((t, i) => ({ id: i, item: t }))
              .filter(t => t.item.status == 2)
              .map((ticket, index) => {
                return (
                  <div key={index}>
                    <p>{`${ticket.id + 1}. ${ticket.item.name}`}</p>
                    <button className ='bg-blue-700 px-5 py-1 mx-2 rounded-xl text-white'
                    onClick={() => updateTicketStatus(ticket.id, 1)}>Busy</button>
                    <button className ='bg-blue-700 px-5 py-1 mx-2 rounded-xl text-white'
                    onClick={() => updateTicketStatus(ticket.id, 2)}>Done</button>
                    <button className ='bg-blue-700 px-5 py-1 mx-2 rounded-xl text-white'
                    onClick={() => renameTicket(ticket.id)}>Rename</button>
                  </div>

                )

              })}
          </div>
        </div>

      </div>
      {/* <button onClick={createTicket}>Add ticket</button>
      <button onClick={getTickets}>Load data</button> */}
    </div>
  );
}

export default App;

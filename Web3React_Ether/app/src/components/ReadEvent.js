import { ethers } from 'ethers';
import abi from '../ABI.json'
import { useState, useEffect } from "react"
import './ReadEvent.css'

function ReadEvent() {
    const contractAddress = '0xa040F42997720c67F8998082E7B45405D108e513';
    // const signer = provider.getSigner()
    // Earlier in v5 provider = new ethers.providers.Web3Provider(window.ethereum)
    // In v6: provider = new ethers.BrowserProvider(window.ethereum)

    const [account, setAccount] = useState("");
    const [signer, setSigner] = useState(null);
    const [event, setEvent] = useState([]);
    const [show, setShow] = useState(true);

    const provider = new ethers.providers.Web3Provider(window.ethereum);


    const listenToEvent = () => {
        console.log(provider)
        const contract = new ethers.Contract(contractAddress, abi, provider);
        contract.on("Transfer", (from, to, tokenId, event) => {
            let data = {
                from,
                to,
                tokenId: tokenId.toString(),
                event
            };
            console.log(data);
            setEvent(prev => [...prev, data])
        });
        setShow(false);

    }

    const connect = async () => {
        if (typeof window.ethereum !== "undefined") {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });

            const signer = provider.getSigner();
            setSigner(signer);
            setAccount(accounts[0]);
            console.log("signer: ", signer);
        } else {
            console.log("Please install metamask")
        }
    }

    useEffect(() => {
        connect();
    }, []);

    return (

        <div>
            {/* {console.log(provider)}; */}
            {show && <button onClick={listenToEvent}>Send</button>}
            {event.reverse().map((event, index) => {
                return <div key={index} className='container'>
                    <p>From: {event.from}</p>
                    <p>{"===>"}</p>
                    <p>To: {event.to}</p>
                </div>
            })}
        </div>
    );
}

export default ReadEvent;
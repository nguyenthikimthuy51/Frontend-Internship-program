import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useGetAPI from './useGetAPIHook';

function ExpenseEntryItemList() {
    const items = useGetAPI("http://localhost:8000/api/expenses");
    const [isLoaded, setIsLoaded] = useState(false);

    console.log(items)  

    // useEffect(()=>{
    //     getRemoteItems();
    // }, [])


    function deleteRemoteItem(id) {
        axios.delete('http://localhost:8000/api/expense/' + id)
        // .then(
        //     () => {
        //         getRemoteItems()
        //     }
        // )
    }

    const handleDelete = (id, e) => {
        e.preventDefault();
        console.log(id);
        deleteRemoteItem(id);
    }

    function handleMouseEnter(e) {
        e.target.parentNode.classList.add("bg-gray-300");
    }

    function handleMouseLeave(e) {
        e.target.parentNode.classList.remove("bg-gray-300");
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {items &&
                        items.map((item) =>
                            <tr key={item._id} onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>{new Date(item.spendDate).toDateString()}</td>
                                <td>{item.category}</td>
                                <td className='hover:text-blue-800'><a href="#"
                                    onClick={(e) => handleDelete(item._id,
                                        e)}>Remove</a></td>
                            </tr>
                        )
                        }
                </tbody>
            </table>

        </div>
    );
}

export default ExpenseEntryItemList;

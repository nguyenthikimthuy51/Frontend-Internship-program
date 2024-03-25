import React, { useState } from 'react';
function ExpenseEntryItemListFn(props) {
    const [items, setItems] = useState(props.items);

    function handleMouseEnter(e) {
        e.target.parentNode.classList.add("bg-gray-100");
    }
    function handleMouseLeave(e) {
        e.target.parentNode.classList.remove("bg-gray-100");
    }
    function handleMouseOver(e) {
        console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
    }

    const handleDelete = (id, e) => {
        e.preventDefault();
        console.log(id);

        let newItems = [];
        items.forEach((item, idx) => {
            if (item.id != id)
                newItems.push(item)
        })
        setItems(newItems)
    }
    function getTotal() {
        let total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].amount
        }
        return total;
    }
    const lists = items.map((item) =>
        <tr key={item.id} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} className='border-solid border-2'>
            <td className='text-center'>{item.name}</td>
            <td className='text-center'>{item.amount}</td>
            <td className='text-center'>{new Date(item.spendDate).toDateString()}</td>
            <td className='text-center'>{item.category}</td>
            <td className='text-center hover:text-blue-700'><a href="#"
                onClick={(e) => handleDelete(item.id,
                    e)}>Remove</a></td>
        </tr>
    );

    return (
        <table >
            <thead>
                <tr className='border-solid border-2'>
                    <th className='px-20'>Item</th>
                    <th className='px-20'>Amount</th>
                    <th className='px-20'>Date</th>
                    <th className='px-20'>Category</th>
                    <th className='px-20'>Remove</th>
                </tr>
            </thead>
            <tbody>

                {lists}
                <tr>
                    <td className='text-right'>Total Amount:</td>
                    <td className='text-center'>
                        {getTotal()}
                    </td>
                </tr>
            </tbody>
        </table>
    );

}
export default ExpenseEntryItemListFn;
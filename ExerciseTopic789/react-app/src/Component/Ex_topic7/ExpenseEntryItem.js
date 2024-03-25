import React from 'react'
import FormattedDate from './FormattedDate';

class ExpenseEntryItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind();
        this.handleMouseLeave = this.handleMouseLeave.bind();
        this.handleMouseOver = this.handleMouseOver.bind();

    }
    handleMouseEnter(e) {
        e.target.parentNode.classList.add("bg-gray-100");
    }

    handleMouseLeave(e) {
        e.target.parentNode.classList.remove("bg-gray-100");
    }

    handleMouseOver(e) {
        console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
    }

    render() {
        const lists = this.props.items.map((item) =>
            <tr key={item.id} className='border-solid border-2' onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}>
                <td className='py-3 px-6'>{item.id}</td>
                <td className='py-3 px-6'>{item.name}</td>
                <td className='py-3 px-6'>{item.amount}</td>
                <td className='py-3 px-6'>
                    <FormattedDate
                        value={item.spendDate}
                    />
                </td>
                <td className='py-3 px-6'>{item.category}</td>
            </tr>
        )
        return (
            <div className='flex m-5 justify-center'>
                <table>
                    <thead>
                        <tr className='border-solid	border-2' >
                            <th className='py-3 px-10'>Id</th>
                            <th className='py-3 px-10'>Item</th>
                            <th className='py-3 px-10'>Amount</th>
                            <th className='py-3 px-10'>Date</th>
                            <th className='py-3 px-10'>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lists}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ExpenseEntryItem;
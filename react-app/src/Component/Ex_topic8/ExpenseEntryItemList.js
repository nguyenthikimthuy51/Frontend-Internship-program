import React from 'react';
class ExpenseEntryItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        }
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

    handleDelete = (id, e) => {
        e.preventDefault();
        console.log(id);

        this.setState((state, props) => {
            let items = [];

            state.items.forEach((item, idx) => {
                if (item.id != id)
                    items.push(item)
            })

            let newState = {
                items: items
            }
            console.log(items)
            return newState;
        })
    }
    getTotal() {
        let total = 0;
        for (var i = 0; i < this.state.items.length; i++) {
            total += this.state.items[i].amount
        }
        return total;
    }
    render() {
        const lists = this.state.items.map((item) =>
            <tr key={item.id} onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave} className='border-solid border-2'>
                <td className='text-center'>{item.name}</td>
                <td className='text-center'>{item.amount}</td>
                <td className='text-center'>{new Date(item.spendDate).toDateString()}</td>
                <td className='text-center'>{item.category}</td>
                <td className='text-center hover:text-blue-700'><a href="#"
                    onClick={(e) => this.handleDelete(item.id,
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
                            {this.getTotal()}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default ExpenseEntryItemList;
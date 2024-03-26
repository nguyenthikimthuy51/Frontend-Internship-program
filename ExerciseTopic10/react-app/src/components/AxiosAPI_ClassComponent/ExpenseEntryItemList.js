import React from 'react';
import axios from 'axios';
class ExpenseEntryItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }

    }

    setItems(remoteItems) {
        var items = [];
        remoteItems.forEach((item) => {
            let newItem = {
                id: item._id,
                name: item.name,
                amount: item.amount,
                spendDate: item.spend_date,
                category: item.category
            }
            items.push(newItem)
        });
        this.setState({
            isLoaded: true,
            items: items
        });
    }

    getRemoteItems() {
        axios.get('http://localhost:8000/api/expenses')
            .then((response) => {
                console.log(response);
                this.setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
                this.setState({
                    isLoaded: false,
                    error
                });

            })

    }

    deleteRemoteItem(id) {
        axios.delete('http://localhost:8000/api/expense/' + id)
            .then(
                () => {
                    this.getRemoteItems()
                }
            )
    }

    postItem(item) {
        axios.post('http://localhost:8000/api/expense/', item)
            .then((response) => {
                this.getRemoteItems();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getRemoteItems();
        console.log('didmount');
    }

    handleDelete = (id, e) => {
        e.preventDefault();
        console.log(id);
        this.deleteRemoteItem(id);
    }

    handleMouseEnter(e) {
        e.target.parentNode.classList.add("bg-gray-300");
    }

    handleMouseLeave(e) {
        e.target.parentNode.classList.remove("bg-gray-300");
    }


    render() {
        let lists = [];
        if (this.state.isLoaded) {
            lists = this.state.items.map((item) =>
                <tr key={item.id} onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{new Date(item.spendDate).toDateString()}</td>
                    <td>{item.category}</td>
                    <td className='hover:text-blue-800'><a href="#"
                        onClick={(e) => this.handleDelete(item.id,
                            e)}>Remove</a></td>
                </tr>
            );
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
                        {lists}
                    </tbody>
                </table>

                <button onClick={()=>{this.postItem({"name":"Mango Juice","amount":35,"spend_date":{"$$date":1602806400000},"category":"Food","_id":"0bXXiGLTh78rA9qQ"})}}>add</button>
            </div>
        );
    }
}

export default ExpenseEntryItemList;

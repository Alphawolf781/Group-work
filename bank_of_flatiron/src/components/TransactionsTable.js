import '../App.css';

function TransactionsTable({ filteredTransactions }) {
    console.log("TRANSACTIONS TABLE", JSON.stringify(filteredTransactions));

    return (
        <div className="App"> 
            <form className='TableForm'>
                <table className="table table-striped-columns table-hover">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>{transaction.description}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.category}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        {/* Optional footer content */}
                    </tfoot> 
                </table>
            </form>
        </div>
    );
}

export default TransactionsTable;

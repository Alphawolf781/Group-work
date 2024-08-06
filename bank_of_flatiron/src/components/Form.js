import { useState, useEffect } from 'react';
import '../App.css';

function Form({onAddTransaction}) {
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [nextId, setNextId] = useState(1); // Initialize nextId
    const[transactions, setTransactions]=useState([])

    useEffect(() => {
        // Fetch existing transactions and set the nextId
        fetch("http://localhost:3000/transactions")
            .then(response => response.json())
            .then(transactions => {
                // Find the highest ID in the existing transactions
                const highestId = transactions.reduce((maxId, transaction) => Math.max(maxId, transaction.id), 0);
                setNextId(highestId + 1); // Set nextId to be the highest ID + 1

                // set transactions
                setTransactions(transactions)
            })
            .catch(error => {
                console.error("Error fetching transactions:", error);
            });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const transactionData = {
            id: nextId, // Use the nextId for the transaction ID
            description,
            date,
            amount: Number(amount), 
            category
        };

        // Send transaction data to the db.json
        fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transactionData)
        })
        .then(response => response.json())
        .then(newTransaction => {
            onAddTransaction(newTransaction);
            // update the transactions state to include the new transaction
            setTransactions([...transactions, newTransaction])

            // Update the next ID for future transactions
            setNextId(nextId + 1);

            // Clear form fields after submission
            setDescription("");
            setDate("");
            setAmount("");
            setCategory("");
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

    return (
        <div className='App'>
            <form className='form' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="descriptionInput" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="descriptionInput"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dateInput" className="form-label">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="dateInput"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="amountInput" className="form-label">Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        id="amountInput"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="categoryInput" className="form-label">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="categoryInput"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Form;
  
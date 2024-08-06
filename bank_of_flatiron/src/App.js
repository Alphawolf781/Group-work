import './App.css';
import { useEffect, useState } from 'react'


import TransactionsTable from './components/TransactionsTable';
import SearchTransactions from './components/SearchTransactions';
import Form from './components/Form';
function App() {

   // Handling of state and do the data fetching
   const[transactions, setTransactions]=useState([])
   const [filteredTransactions, setFilteredTransactions] = useState([]);

   // data fetch
   useEffect(()=>{
       fetchTransactions()
   },[])
       const fetchTransactions=async ()=>{
           try{
               const response = await fetch("http://localhost:3000/transactions")
               const data = await response.json()
               console.log(JSON.stringify(data))
// store data in a state reference
               setTransactions(data)
               setFilteredTransactions(data)
       }catch(error){
           console.error(error)
       }
       }

       const handleAddTransaction = (newTransaction) => {
        setTransactions(prevTransactions => {
            const updatedTransactions = [...prevTransactions, newTransaction];
            setFilteredTransactions(updatedTransactions);
            return updatedTransactions;
        });
    };
       const handleSearch = (searchTerm) => {
           const filtered = transactions.filter(transaction =>
               transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
           );
           setFilteredTransactions(filtered);
       };
   
  return (
    <div className="App">
      <h2>Bank of Flatiron</h2>
       
        {/* load the transactions table, search component ,form component */}
        <br/>
        <h4>Search Transactions</h4>
        <SearchTransactions onSearch={handleSearch}/><br/>
        <h4>Transactions List</h4><br/>
        <TransactionsTable filteredTransactions={filteredTransactions}/> <br/><br/>
        <h4>Add New Transaction Form</h4><br/>
        <Form onAddTransaction={handleAddTransaction}/>
      
    </div>
  );
}

export default App;

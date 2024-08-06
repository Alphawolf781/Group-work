import { useState } from 'react';
import '../App.css';

function SearchTransactions({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        if(onSearch){
        onSearch(e.target.value); // Notify parent component about the search term
    };
}


    // // Handler for search button click
    // const handleSearchClick = useCallback(() => {
    //     if (onSearch) {
    //         onSearch(searchTerm); // Notify parent component about the search term
    //     }
    //     setSearchTerm("")
    // }, [searchTerm, onSearch]);

    return (
        <div className='App'>
            <div className='search'>
                <div className="input-group mb-3">
                    <button 
                    className="btn btn-outline-secondary" 
                    type="button" id="button-addon1"  
                    // onClick={handleSearchClick}
                    >Search</button>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search by description" 
                        aria-label="Search by description" 
                        aria-describedby="button-addon1"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchTransactions;

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `App` Component
### Key Functions:
  1. `useEffect` Hook:
    - On initial render, runs `fetchTransactions`.This hook is used for side effects, such as data fetching

  2. `fetchTransactions`:
    -  Fetches transactions data from an API endpoint(`http://localhost:3000/transactions`)
    - On success, it updates the state for `transactions` and `filteredTransactions`

  3.   `handleAddTransaction`:
    - Accepts a new transaction object, adds it to the existing list of transactions, and updates the state.
    - The `setTransactions` function is used to ensure that the state is updated based on the previous state

   4. `handleSearch`:
    - Filters the `transactions` array based on the `searchTerm` and updates the `filtredTransactions` state


### `searchTransactions` Component
### Key Functions:
   1. `handleSearchChange`:
     - updates the `serchTerm` state and calls the `onSearch` prop function to filter transactions in the parent component (`App`)
   2. `handleClearSearch`:
     -  Clears the search input and resets search results by calling the `onsearch` function with an empty string

## `transactionsTable` Component
### Key Functions:
   1. Rendering Transactions:
   - Maps over the `filteredTransactions` array and renders each transaction in a table row .Each row contains columns for ID, Description, Date, Amount and Category.


## `Form ` Component
### Key Function:
   1. `useState` Hooks:
    - description: Stores the value of the transaction description.
    - date: Stores the date of the transaction.
    - amount: Stores the amount of the transaction.
    - category: Stores the category of the transaction.
    - nextId: Keeps track of the next available ID for a new transaction. Initialized to 1.
    - transactions: Holds the list of transactions fetched from the backend.

   2. `useEffect` Hook:
    - Purpose: Fetches existing transactions from the backend when the component mounts.
    - Details:
    - Performs a GET request to "http://localhost:3000/transactions".
    Finds the highest transaction ID among the fetched transactions to set the nextId.
Updates the transactions state with the fetched data.
   3. `handleSubmit`:
    -  Prevents the default form submission behavior.
    - Constructs a `newTransaction` object from form input values.
    - Sends a `POST` request to the db.Json file to add a new transaction
    - Calls `onAddTransaction` with the response data to update the transaction list in the parent component
    - Ressts form fields after submission        


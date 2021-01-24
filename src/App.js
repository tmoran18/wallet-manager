import React, { useContext } from 'react';
import { StoreContext } from './context/StoreContext';
import Nav from './components/Navigation';
import AddTransaction from './components/AddTransaction';
import Transaction from './components/Transaction';

const App = () => {
	const [
		transactions,
		setTransactions,
		groupByCurrencyToggle,
		setGroupByCurrencyToggle,
	] = useContext(StoreContext);

	const groupByCurrency = () => {
		setGroupByCurrencyToggle(
			(setGroupByCurrencyToggle) => !setGroupByCurrencyToggle,
		);
		// Sort function source - https://stackoverflow.com/questions/8175093/simple-function-to-sort-an-array-of-objects/8175221#8175221
		// User pimvdb
		var sortedTransactionArr = transactions.sort(function (a, b) {
			return b.currency < a.currency ? 1 : b.currency > a.currency ? -1 : 0;
		});
		setTransactions([...sortedTransactionArr]);
	};

	return (
		<main>
			<Nav />
			{/* If transactions is empty, let the user add a transaction */}
			{transactions < 1 ? (
				<div className='content'>
					<AddTransaction />
					<p className='align-center'>You currently have no transactions</p>
				</div>
			) : (
				// Else loop over the transactions
				<div className='content'>
					<button className='groupBy__btn' onClick={groupByCurrency}>
						Group by Currency
					</button>
					<AddTransaction />
					<hr />
					<h2 className='align-center'>Transactions</h2>
					<div className='content'>
						{transactions.map((transaction, key) => (
							<Transaction
								key={key}
								id={transaction.transaction_id}
								currency={transaction.currency}
								amount={transaction.amount}
								type={transaction.type}
							/>
						))}
					</div>
				</div>
			)}
		</main>
	);
};

export default App;

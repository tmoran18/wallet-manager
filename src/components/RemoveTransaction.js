import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
const RemoveTransaction = ({ transactionID }) => {
	// Global Context State
	const [transactions, setTransactions] = useContext(StoreContext);

	const removeTransaction = () => {
		// OnClick filter transactions to return transactions that do not match transactionID
		const newTransactionsArr = transactions.filter((transaction) => {
			return transaction.transaction_id !== transactionID;
		});
		// Set the filtered transactions to global state
		setTransactions(newTransactionsArr);
	};
	return (
		<div>
			<svg
				onClick={removeTransaction}
				xmlns='http://www.w3.org/2000/svg'
				height='24'
				viewBox='0 0 24 24'
				width='24'
				fill='tomato'>
				<path d='M0 0h24v24H0z' fill='none' />
				<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
			</svg>
		</div>
	);
};

export default RemoveTransaction;

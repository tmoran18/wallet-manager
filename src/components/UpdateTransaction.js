import { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import '../App.css';

const UpdateTransaction = ({
	transactionID,
	transactionCurrency,
	transactionAmount,
	transactionType,
}) => {
	const [transactions, setTransactions] = useContext(StoreContext);
	const [showModal, setShowModal] = useState(false);
	const [amount, setAmount] = useState(transactionAmount);
	const [currency, setCurrency] = useState(['AUD', 'USD', 'EUR', 'GBP']);
	const [selectedCurrency, setSelectedCurrency] = useState(transactionCurrency);
	const [type, setType] = useState(['debit', 'credit']);
	const [selectedType, setSelectedType] = useState(transactionType);

	// Set the currency to the selected option
	const handleCurrencySelect = (e) => {
		setSelectedCurrency(e.target.value);
	};

	// Set the type to the selection option
	const handleTypeSelect = (e) => {
		setSelectedType(e.target.value);
	};

	const updateTransaction = () => {
		const newTransactionsArr = transactions.map((transaction) => {
			return transaction.transaction_id == transactionID
				? {
						transaction_id: transactionID,
						currency: selectedCurrency,
						amount: amount,
						type: selectedType,
				  }
				: transaction;
		});
		setTransactions(newTransactionsArr);
		setShowModal(false);
	};
	return (
		<div>
			<svg
				onClick={() => setShowModal(true)}
				style={{ position: 'relative' }}
				xmlns='http://www.w3.org/2000/svg'
				height='24'
				viewBox='0 0 24 24'
				width='24'
				fill='#bbbbbb'>
				<path d='M0 0h24v24H0z' fill='none' />
				<path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
			</svg>
			{/* Update Transaction Modal */}
			{showModal && (
				<div className='updateTransaction__modal form'>
					<h2 className='align-center'>Update Transaction</h2>
					<label htmlFor='selectCurrent'>Currency</label>
					<select
						name='currency'
						id='currency'
						value={selectedCurrency}
						onChange={handleCurrencySelect}>
						{currency.map((currency) => (
							<option value={currency}>{currency}</option>
						))}
					</select>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
					<select
						name='type'
						id='type'
						value={selectedType}
						onChange={handleTypeSelect}>
						{type.map((type) => (
							<option value={type}>{type}</option>
						))}
					</select>
					<input type='submit' value='Update' onClick={updateTransaction} />
					<svg
						className='updateModal__close_icon'
						onClick={() => setShowModal(false)}
						xmlns='http://www.w3.org/2000/svg'
						height='24'
						viewBox='0 0 24 24'
						width='24'
						fill='tomato'>
						<path d='M0 0h24v24H0z' fill='none' />
						<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
					</svg>
				</div>
			)}
		</div>
	);
};

export default UpdateTransaction;

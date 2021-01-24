import { useState, useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const AddTransaction = () => {
	// Global Context State
	const [transactions, setTransactions] = useContext(StoreContext);
	// Local State
	const [amount, setAmount] = useState('');
	const [currency, setCurrency] = useState(['AUD', 'USD', 'EUR', 'GBP']);
	const [selectedCurrency, setSelectedCurrency] = useState('AUD');
	const [type, setType] = useState(['debit', 'credit']);
	const [selectedType, setSelectedType] = useState('debit');

	const addTransaction = () => {
		// Make sure input recieves and amount
		if (!amount) {
			alert('Amount must not be empty');
			return;
		}
		// Current transaction objects are spread out, then new object added.
		setTransactions([
			...transactions,
			{
				transaction_id: transactions.length,
				currency: selectedCurrency,
				amount: amount,
				type: selectedType,
			},
		]);
		// Reset inputs
		setAmount('');
		setSelectedCurrency('AUD');
		setSelectedType('debit');
	};

	// Set the currency to the selected option
	const handleCurrencySelect = (e) => {
		setSelectedCurrency(e.target.value);
	};

	// Set the type to the selection option
	const handleTypeSelect = (e) => {
		setSelectedType(e.target.value);
	};
	return (
		<div className='form'>
			<h2 className='align-center'>Add a Transaction</h2>
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
			<label htmlFor='type'>Type (debit/credit)</label>
			<select
				name='type'
				id='type'
				value={selectedType}
				onChange={handleTypeSelect}>
				{type.map((type) => (
					<option value={type}>{type}</option>
				))}
			</select>
			<input
				type='submit'
				value='Submit'
				className='form__btn'
				onClick={addTransaction}
			/>
		</div>
	);
};

export default AddTransaction;

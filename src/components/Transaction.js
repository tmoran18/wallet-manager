import '../App.css';
import RemoveTransaction from './RemoveTransaction';
import UpdateTransaction from './UpdateTransaction';

const Transaction = ({ id, currency, amount, type }) => {
	return (
		<div>
			<div className={`transaction__header ${type}`}>
				<span>Currency</span>
				<span>Amount</span>
				<span>Debit/Credit</span>
				<span style={{ minWidth: '40px' }}></span>
			</div>
			<div className='transaction__body'>
				<span>{currency}</span>
				<span>{amount}</span>
				<span>{type}</span>
				<div className='transaction__options'>
					<RemoveTransaction transactionID={id} />
					<UpdateTransaction
						transactionID={id}
						transactionCurrency={currency}
						transactionAmount={amount}
						transactionType={type}
					/>
				</div>
			</div>
		</div>
	);
};

export default Transaction;

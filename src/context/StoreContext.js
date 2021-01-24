import { useState, createContext } from 'react';

// Create a Context
export const StoreContext = createContext();

// Create a provider to deal with the context state
export const StoreProvider = (props) => {
	const [transactions, setTransactions] = useState([]);
	const [groupByCurrencyToggle, setGroupByCurrencyToggle] = useState(false);

	return (
		<StoreContext.Provider
			value={[
				transactions,
				setTransactions,
				groupByCurrencyToggle,
				setGroupByCurrencyToggle,
			]}>
			{props.children}
		</StoreContext.Provider>
	);
};

//************************************//

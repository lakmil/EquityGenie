import { createContext, useState } from 'react';

export const SavedStrategyUpdate = createContext();
const UpdateSavedStrategiesProvider = (props) => {
	const [updateSavedStrategies, setUpdateSavedStrategies] = useState("true");
	return (
		<SavedStrategyUpdate.Provider value = {{updateSavedStrategies, setUpdateSavedStrategies}}>
			{props.children}
		</SavedStrategyUpdate.Provider> 
	)
}

export default UpdateSavedStrategiesProvider;
import { useReducer } from 'react';
import UserContext from './context';
import { userReducer } from './reducer';

const getRandomNum = () => ('00' + Math.floor(Math.random() * 100)).slice(-2);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, dispatch] = useReducer(userReducer, false);

	return (
		<UserContext.Provider value={{ user, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;

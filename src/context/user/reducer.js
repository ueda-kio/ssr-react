export const userReducer = (state, action) => {
	switch (action) {
		case 'TRUE':
			return (state = true);
		case 'FALSE':
			return (state = false);
		default:
			return state;
	}
};

// action types
export const SHOW = 'show';
// reducer
let initState = {
	show: false,
};

function reducer(state = initState, action) {
	switch (action.type) {
		case SHOW:
			return { show: !action.payload.show };
		default:
			return state;
	}
}
export default reducer;

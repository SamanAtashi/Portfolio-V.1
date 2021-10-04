// action types
export const SHOWLIST = 'showList';
// reducer
let initState = {
	showList: false,
};

function reducer(state = initState, action) {
	switch (action.type) {
		case SHOWLIST:
			return { showList: !action.payload.showList };
		default:
			return state;
	}
}
export default reducer;

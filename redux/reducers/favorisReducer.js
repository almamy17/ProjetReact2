import { ADD_FAVORIS,REMOVE_FAVORIS } from "../constants/index";

const initialState = {
    favoris: []
};
const favorisReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORIS:
            return {
                ...state,
                favoris: [...state.favoris, action.value]
            };
        case REMOVE_FAVORIS:
            return {
                ...state,
                favoris: state.favoris.filter((elem, index) => index != action.value)
            };
        default:
            return state;
    }
}
export default favorisReducer;
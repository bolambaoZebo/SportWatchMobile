import { MEALS } from '../../data/dummy-data'

const initialState = {
    sports: MEALS,
    filteredSports: MEALS,
    favoriteSports: []
}

const sportsReducer = (state = initialState, action) => {
    return state;
};

export default sportsReducer;
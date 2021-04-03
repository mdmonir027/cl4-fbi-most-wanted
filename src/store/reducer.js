import { FETCH_CRIMINAL, FILTER_CRIMINAL } from "./action/types";

export const initialState = {
  fetchedCriminal: [],
  filteredCriminal: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_CRIMINAL: {
      const { fetchedCriminal } = action.payload;

      return { ...state, fetchedCriminal, filteredCriminal: fetchedCriminal };
    }
    case FILTER_CRIMINAL: {
      const { keyword } = action.payload;

      const allCriminal = [...state.fetchedCriminal];
      const filteredCriminal = allCriminal.filter((criminal) =>
        criminal.tiltel.toLowerCase().include(keyword.toLowerCase())
      );
      return { ...state, filteredCriminal };
    }
    default:
      return state;
  }
};

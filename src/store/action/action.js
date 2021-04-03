import { FETCH_CRIMINAL, FILTER_CRIMINAL } from "./types";
import { data } from "./../../fakeData/data";

export const fetchCriminal = () => (dispatch) => {
  dispatch({
    type: FETCH_CRIMINAL,
    payload: { fetchedCriminal: data.items },
  });
};

export const filterCriminal = (keyword) => (dispatch) => {
  dispatch({
    type: FILTER_CRIMINAL,
    payload: { keyword },
  });
};

export const nextPage = (page) => (dispatch) => {
  dispatch({
    type: FETCH_CRIMINAL,
    payload: { fetchedCriminal: data.items },
  });
};

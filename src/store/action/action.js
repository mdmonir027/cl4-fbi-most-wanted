import axios from "axios";
import { FETCH_CRIMINAL, FILTER_CRIMINAL } from "./types";

export const fetchCriminal = () => (dispatch) => {
  axios
    .get("https://api.fbi.gov/wanted/v1/list")
    .then((response) => {
      dispatch({
        type: FETCH_CRIMINAL,
        payload: { fetchedCriminal: response.data },
      });
    })
    .catch((e) => console.log(e?.response));
};

export const filterCriminal = (keyword) => (dispatch) => {
  dispatch({
    type: FILTER_CRIMINAL,
    payload: { keyword },
  });
};

export const nextPage = (page) => (dispatch) => {
  axios
    .get(`https://api.fbi.gov/wanted/v1/list?page=${page}`)
    .then((response) => {
      dispatch({
        type: FETCH_CRIMINAL,
        payload: { fetchedCriminal: response.data },
      });
    })
    .catch((e) => console.log(e?.response));
};

import indexActionsTypes from "../constants/indexActionsTypes";

const types = indexActionsTypes;

export const fetchVisitedPages = () => {
  return (dispatch) => {
    let headers = {"Content-Type": "application/json"};

    return fetch(
      `/api/visitedPages/?from=$until=&keyword=sc&domain=&statusCode=4хх&minPageSize=${10655}&grDate=&grKey=1&grDom=&grStat=&`,
      {headers,}
      )
      .then(result => {
        if (result.status < 500) {
          return result.json().then(data => {
            return {status: result.status, data};
          })
        } else {
          console.log("Server Error!");
          throw result;
        }
      })
      .then(result => {
        if (result.status === 200) {
          return dispatch({type: types.FETCH_VISITED_PAGES, visitedPages: result.data});
        }
      })
  }
};
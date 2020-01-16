import indexActionsTypes from "../constants/indexActionsTypes";

const types = indexActionsTypes;

export const fetchVisitedPages = () => {
  return (dispatch) => {
    let headers = {"Content-Type": "application/json"};

    return fetch(
      `/api/visitedPages/?from=$until=&keyword=c&domain=&statusCode=200&minPageSize=${10655}&groupDate=f&groupKey=a&groupDom=&groupStat=`,
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
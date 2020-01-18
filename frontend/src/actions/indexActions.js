import indexActionsTypes from "../constants/indexActionsTypes";
import filtersAndGroupsNames from "../constants/filtersAndGroupsNames";


const types = indexActionsTypes;
const filters = filtersAndGroupsNames;

export const fetchVisitedPages = (state) => {

  const keyword = state.keyword;
  const domain = state.domain;
  const statusCode = state.statusCode;
  const minPageSize = state.minPageSize;
  const grDate = state.grDate;
  const grKey = state.grKey;
  const grDom = state.grDom;
  const grStat = state.grStat;

  return (dispatch) => {
    let headers = {"Content-Type": "application/json"};

    return fetch(
      `/api/visitedPages/?from=$until=&keyword=${
        keyword
      }&domain=${
        domain
      }&statusCode=${
        statusCode
      }&minPageSize=${
        minPageSize
      }&grDate=${
        grDate
      }&grKey=${
        grKey
      }&grDom=${
        grDom
      }&grStat=${
        grStat
      }&`,
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

export const setFilter = (filter, value) => {
  let actionType = types.SET_FROM_DATE;

  if (filter === filters.untilDate) {
    actionType = types.SET_UNTIL_DATE
  } else if (filter === filters.keyword) {
    actionType = types.SET_KEYWORD
  } else if (filter === filters.domain) {
    actionType = types.SET_DOMAIN
  } else if (filter === filters.statusCode) {
    actionType = types.SET_STATUS_CODE
  } else if (filter === filters.minPageSize) {
    actionType = types.SET_MIN_PAGE_SIZE
  }

  return (dispatch) => {
    return dispatch({
      type: actionType,
      value: value
    })
  }
};

const getSetGroupActionType = (group) => {
  if (group === filters.grDate) {
    return types.SET_DATE_GROUPING
  } else if (group === filters.grKey) {
    return types.SET_KEYWORD_GROUPING
  } else if (group === filters.grDom) {
    return types.SET_DOMAIN_GROUPING
  }

  return types.SET_STATUS_CODE_GROUPING
};

export const clearState = () => {
  return (dispatch) => {
    return dispatch({
      type: types.CLEAR_STATE,
    })
  }
};

export const disableClearButton = () => {
  return (dispatch) => {
      return dispatch({
        type: types.DISABLE_CLEAR_BUTTON,
      })
    }
};

export const setGroup = (group) => {

  const actionType = getSetGroupActionType(group);

  return (dispatch) => {
    return dispatch({
      type: actionType,
    })
  }
};

export const addTableColumn = (value) => {
  return (dispatch) => {
    return dispatch({
      type: types.ADD_TABLE_COLUMN,
      value
    })
  }
};

export const removeTableColumn = (value) => {
  return (dispatch) => {
    return dispatch({
      type: types.REMOVE_TABLE_COLUMN,
      value
    })
  }
};

const getResetGroupActionType = (group) => {
  if (group === filters.grDate) {
    return types.RESET_DATE_GROUPING
  } else if (group === filters.grKey) {
    return types.RESET_KEYWORD_GROUPING
  } else if (group === filters.grDom) {
    return types.RESET_DOMAIN_GROUPING
  }

  return types.RESET_STATUS_CODE_GROUPING
};

export const resetGroup = (group) => {

  const actionType = getResetGroupActionType(group);

  return (dispatch) => {
    return dispatch({
      type: actionType,
    })
  }
};


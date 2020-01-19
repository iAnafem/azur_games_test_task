import indexActionsTypes from "../constants/indexActionsTypes";

const types = indexActionsTypes;

const initialState = {
  visitedPages : [],
  isLoading: true,
  from: new Date("03/25/1900"),
  until: new Date(),
  keyword: '',
  domain: '',
  statusCode: '',
  minPageSize: '',
  grDate: '',
  grKey: '',
  grDom: '',
  grStat: '',
  clearButton: false,
  tableColumns: [],
};

const indexReducer = (state=initialState, action) => {

  switch(action.type) {

    case types.FETCH_VISITED_PAGES:
      return {...state, visitedPages: [...action.visitedPages], isLoading: false, clearButton: false};

    case types.SET_FROM_DATE:
      return {...state, from: action.value};

    case types.SET_UNTIL_DATE:
      return {...state, until: action.value};

    case types.SET_KEYWORD:
      return {...state, keyword: action.value};

    case types.SET_DOMAIN:
      return {...state, domain: action.value};

    case types.SET_STATUS_CODE:
      return {...state, statusCode: action.value};

    case types.SET_MIN_PAGE_SIZE:
      return {...state, minPageSize: action.value};

    case types.SET_DATE_GROUPING:
      return {...state, grDate: 1};

    case types.RESET_DATE_GROUPING:
      return {...state, grDate: ''};

    case types.SET_KEYWORD_GROUPING:
      return {...state, grKey: 1};

    case types.RESET_KEYWORD_GROUPING:
      return {...state, grKey: ''};

    case types.SET_DOMAIN_GROUPING:
      return {...state, grDom: 1};

    case types.RESET_DOMAIN_GROUPING:
      return {...state, grDom: ''};

    case types.SET_STATUS_CODE_GROUPING:
      return {...state, grStat: 1};

    case types.RESET_STATUS_CODE_GROUPING:
      return {...state, grStat: ''};

    case types.DISABLE_CLEAR_BUTTON:
      return {...state, clearButton: false};

    case types.CLEAR_STATE:
      return {
        visitedPages : [],
        isLoading: true,
        from: '',
        until: '',
        keyword: '',
        domain: '',
        statusCode: '',
        minPageSize: '',
        grDate: '',
        grKey: '',
        grDom: '',
        grStat: '',
        clearButton: true,
        tableColumns: [],
      };

    case types.ADD_TABLE_COLUMN:
      let extendedArray = state.tableColumns;
      extendedArray.push(action.value);

      return {...state, tableColumns: extendedArray};

    case types.REMOVE_TABLE_COLUMN:
      let reducedArray = state.tableColumns.filter(column =>  { return column !== action.value });

      return {...state, tableColumns: reducedArray};

    default:
      return state
  }
};

export default indexReducer;
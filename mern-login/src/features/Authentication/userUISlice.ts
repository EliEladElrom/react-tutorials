import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS } from '../../redux/types'
const initialState = {
  loading: false,
  errors: null,
}
export default function (state = initialState, action: any) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      }
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
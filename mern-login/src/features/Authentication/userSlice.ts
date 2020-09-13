import { SET_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_USER } from '../../redux/types'
const initialState = {
  authenticated: false,
  credentials: {},
  loading: false,
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      }
    case SET_UNAUTHENTICATED:
      return initialState
    case SET_USER:
      return {
        authenticated: false,
        loading: false,
        ...action.payload,
      }
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

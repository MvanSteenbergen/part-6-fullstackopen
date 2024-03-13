import { createContext, useReducer } from 'react'

const notificationReducer = (state, action) => {
  switch(action.type) {
    case "SET_NOTIFICATION":
      return {display: 'block', notification: action.payload }
    case "REMOVE_NOTIFICATION":
      return {display: 'none', notification: ''}
    default:
      return state;
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, { display: 'none', notification: ''})

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {display: 'none', notication: ''},
  reducers: {
    setNotification(state, action) {
      console.log(action.payload)
      return { display: 'block',  notification: action.payload}
    },
    removeNotification() {
      return { display: 'none', notification: ''}
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions

export const notificationChange = (notification, time) => {
  time = time * 1000
  return dispatch => {
    dispatch(setNotification(`${notification}`))
    setTimeout(() => dispatch(removeNotification()), time)
  } 
} 

export default notificationSlice.reducer

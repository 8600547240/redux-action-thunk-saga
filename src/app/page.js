"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { userAction } from './actions/userAction'
import { Provider } from 'react-redux'
import { appStore } from './store/appStore'
import { commentsThunkAction } from './actions/commentsThunkAction'
import { bindActionCreators } from '@reduxjs/toolkit'
export default function Home() {
  const fnGetUsers = () => {
    userAction()
  }
  const fnGetComments = () => {
    bindActionCreators(commentsThunkAction,appStore.dispatch)()
  }
  const fnGetPosts = () => {
    appStore.dispatch({
      type: 'GET_POSTS'
    })
  }
  const fnGetPhotos = () => {
    appStore.dispatch({
      type: 'GET_PHOTOS'
    })
  }
  return (
    <Provider store={appStore}>
      <div >
          <h1>Action</h1>
          <button onClick={fnGetUsers}>Get Users</button>
          <h1>Thunk</h1>
          <button onClick={fnGetComments}>Get Comments</button>
          <h1>Saga</h1>
          <button onClick={fnGetPosts}>Get Posts</button>
          <button onClick={fnGetPhotos}>Get Photos</button>
      </div>
    </Provider>
    
  )
}

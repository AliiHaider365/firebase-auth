
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers } from 'redux'
import {
  firebaseReducer
} from 'react-redux-firebase'

import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
 
import {composeWithDevTools} from 'redux-devtools-extension'
const fbConfig = {
  apiKey: "AIzaSyDJxUxWmsiI6DyAj_Om8Z5uJC-GJwiadAw",
  authDomain: "fir-learn-5360c.firebaseapp.com",
  databaseURL: "https://fir-learn-5360c.firebaseio.com",
  projectId: "fir-learn-5360c",
  storageBucket: "fir-learn-5360c.appspot.com",
  messagingSenderId: "401574160877",
  appId: "1:401574160877:web:9c5832e5b86b77c8e91fe4"
}
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
 
// Initialize firebase instance
firebase.initializeApp(fbConfig)
 
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})
 
// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState,composeWithDevTools())
 
export const rrfProps = {
  firebase,
  config: rrfConfig, 
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}
 
export default store
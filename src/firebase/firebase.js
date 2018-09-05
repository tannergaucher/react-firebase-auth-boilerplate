import firebase from 'firebase/app'

// TODO: add seperate prod and dev configs/ firebases

const config = {
  apiKey: 'AIzaSyAeAc-V8f6wULR9QWg0ZADovkowF21tdG8',
  authDomain: 'wieruch-demo.firebaseapp.com',
  databaseURL: 'https://wieruch-demo.firebaseio.com',
  projectId: 'wieruch-demo',
  storageBucket: 'wieruch-demo.appspot.com',
  messagingSenderId: '583400785664'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export { auth }

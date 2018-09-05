import { auth } from 'firebase'

//create user
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password)

//sign in
export const doSignInWithEmailAndPassword = (email, password) =>
  auth().signInWithEmailAndPassword(email, password)

//sign out
export const doSignOut = () => auth().signOut()

//reset password
export const doPasswordReset = email => auth().sendPasswordResetEmail(email)

//password change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password)

import * as auth from './auth'
import * as firebase from './firebase'

export { auth, firebase }

// consumers (react components) can only access this file,
//not interface with auth files directly

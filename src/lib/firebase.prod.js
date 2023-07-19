import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';
// we need to somehow seed the database
const config = {
  apiKey: 'AIzaSyC9Sd32lB94gn8mJvobhNgi6S11wGzaKRI',
  authDomain: 'netflix-3a2f7.firebaseapp.com',
  projectId: 'netflix-3a2f7',
  storageBucket: 'netflix-3a2f7.appspot.com',
  messagingSenderId: '679053688612',
  appId: '1:679053688612:web:46c290455f2fc1c8debdb1',
};

const firebase = Firebase.initializeApp(config);



export { firebase };

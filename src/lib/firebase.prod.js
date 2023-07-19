import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need to somehow seed the database
const config = {};

constfirebase = Firebase.initializeApp(config);

export { firebase };
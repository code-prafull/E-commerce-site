import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_DaWLd69uuINHwliOTaB--FjekYcYQzs",
  authDomain: "goggleloginmysha.firebaseapp.com",
  projectId: "goggleloginmysha",
  storageBucket: "goggleloginmysha.firebasestorage.app",
  messagingSenderId: "515092209704",
  appId: "1:515092209704:web:14e9366d40562b3d38951d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
provider.addScope('profile');
provider.addScope('email');

// Add additional provider settings
provider.setCustomParameters({
  prompt: 'select_account'
});

export {auth , provider}
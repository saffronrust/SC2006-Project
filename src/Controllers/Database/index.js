import { db, auth, googleProvider } from '../../firebase';
import { collection, addDoc, getDocs, query, deleteDoc, where } from 'firebase/firestore';
import { signInWithPopup, signOut } from "firebase/auth";
import { message } from 'antd';
import { fav } from '../../Components/SearchResultsBox';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

  function addCompareResultsToFirebase(comparedflats) {
    for (let i = 0; i < comparedflats.length; i++) {
      const flat = comparedflats[i];
      addDoc(collection(db, "compareresults"), {
        id: flat.id,
        name: flat.name,
        location: flat.location,
        nearestmrtstation: flat.nearestmrtstation,
        nearestmrtstationname: flat.nearestmrtstationname,
        maxprice: flat.maxprice,
        minprice: flat.minprice,
        roomtype: flat.roomtype,
        lat: flat.lat,
        lng: flat.lng,
        Street: flat.Street
      });
    }
  }

  async function removeCompareResultsFromDatabase() {
    try {
      const q = query(collection(db, "compareresults"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
    } catch (err) {
      console.error(err);
    }
  }

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
      message.success('Login successful!', 2);
    } catch (err) {
      console.error(err);
      message.error('Login failed. Please try again.', 2);
    }
  };
  
  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      message.success('Login successful!', 2);
    } catch (err) {
      console.error(err);
      message.error('Login failed. Please try again.', 2);
    }
  };
  
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
      message.success('Registration successful!', 2);
    } catch (err) {
      console.error(err);
      message.error('Registration failed. Please try again.', 2);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      message.success('Password reset email sent!', 2);
    } catch (err) {
      console.error(err);
      message.error('Password reset failed. Please try again.', 2);
    }
  };

  const logout = () => {
    message.success('Logout successful!', 2);
    fav.length = 0;
    signOut(auth);
  };

  export {
    addCompareResultsToFirebase,
    removeCompareResultsFromDatabase,
    signInWithGoogle,
    logout,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
  };
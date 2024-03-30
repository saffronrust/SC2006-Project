import { db } from '../../firebase';
import { collection, addDoc, getDocs, query, deleteDoc } from 'firebase/firestore';
import {
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from '../../firebase';
import { where } from 'firebase/firestore';
import { message } from 'antd';

  function addSearchResultsToFirebase(filteredflats) {
    for (let i = 0; i < filteredflats.length; i++) {
      const flat = filteredflats[i];
      addDoc(collection(db, "searchresults"), {
        id: flat.id,
        name: flat.name,
        location: flat.location,
        nearestmrtstation: flat.nearestmrtstation,
        maxprice: flat.maxprice,
        minprice: flat.minprice,
        roomtype: flat.roomtype,
        lat: flat.lat,
        lng: flat.lng,
        Street: flat.Street
      });
    }
  }

  async function removeSearchResultsFromDatabase() {
    try {
      const q = query(collection(db, "searchresults"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
    } catch (err) {
      console.error(err);
    }
  }

  function addCompareResultsToFirebase(comparedflats) {
    for (let i = 0; i < comparedflats.length; i++) {
      const flat = comparedflats[i];
      addDoc(collection(db, "compareresults"), {
        id: flat.id,
        name: flat.name,
        location: flat.location,
        nearestmrtstation: flat.nearestmrtstation,
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
  
  const logout = () => {
    message.success('Logout successful!', 2);
    signOut(auth);
  };

  export {
    addSearchResultsToFirebase,
    removeSearchResultsFromDatabase,
    addCompareResultsToFirebase,
    removeCompareResultsFromDatabase,
    signInWithGoogle,
    logout,
  };
import { db } from '../../firebase';
import { collection, addDoc, getDocs, query, deleteDoc } from 'firebase/firestore';

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

  export {
    addSearchResultsToFirebase,
    removeSearchResultsFromDatabase,
    addCompareResultsToFirebase,
    removeCompareResultsFromDatabase,
  };
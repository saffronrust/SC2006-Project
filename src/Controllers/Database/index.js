import { db } from '../../firebase';
import { collection, addDoc, getDocs, query, deleteDoc } from 'firebase/firestore';

  function addResultsToFirebase(filteredflats) {
    for (let i = 0; i < filteredflats.length; i++) {
      const flat = filteredflats[i];
      addDoc(collection(db, "results"), {
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

  async function removedatabase() {
    try {
      const q = query(collection(db, "results"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
    } catch (err) {
      console.error(err);
    }
  }

  export {
    addResultsToFirebase,
    removedatabase,
  };
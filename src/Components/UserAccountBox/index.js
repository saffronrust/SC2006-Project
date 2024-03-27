import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Button } from "antd";
import { Card } from 'antd';

function UserAccountBox() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      //alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard">
       <Card
      title="Logged in as:"
      style={{
        width: 200,
      }}
      >
      <p>{name}</p>
      <p>{user?.email}</p>
      <Button
      type="primary"
      size="large"
      className="logoutbutton"
      danger onClick={logout}>
        Logout
      </Button>
      </Card>
    </div>
  );
}
export default UserAccountBox;
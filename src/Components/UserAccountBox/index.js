/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { logout } from "../../Utility/Database";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Button, Card } from "antd";

/**
 * This component is used to display the user account box.
 * The user can see their name and email address.
 * The user can click on the logout button to logout from the website.
 * @returns UserAccountBox component
 */
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
        <p>
          {name}
        </p>
        <p>
          {user?.email}
        </p>
        <Button
          type="primary"
          size="large"
          className="logoutbutton"
          danger onClick={logout}
        >
          Logout
        </Button>
      </Card>
    </div>
  );
}

export default UserAccountBox;
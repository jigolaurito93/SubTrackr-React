import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("sign out successfully").then((err) => {
        console.log(err);
      });
    });
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed in as ${authUser.email}`}</p>
          <button className="border" onClick={userSignOut}>
            Sign Out
          </button>
        </>
      ) : (
        <>Not Signed In</>
      )}
    </div>
  );
}

export default AuthDetails;

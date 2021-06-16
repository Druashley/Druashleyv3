import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Journal() {
  const { userData } = useContext(UserContext);

  const adminCheck = () => {
    console.log(userData.role);

    if (userData.role === "Admin") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <div>Journal Info here</div>
      {adminCheck() ? <h1>Admin</h1> : <h1>User</h1>}
      <button className="bg-red-700" onClick={adminCheck}>
        TEst
      </button>
    </div>
  );
}

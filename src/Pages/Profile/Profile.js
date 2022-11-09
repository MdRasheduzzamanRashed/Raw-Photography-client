import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col items-center justify-center md:my-24">
      <div className="avatar">
        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>
      <div className="text-center mt-5">
        <h2 className="text-3xl font-semibold uppercase">
          {user?.displayName}
        </h2>
        <p className="text-xl">{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;

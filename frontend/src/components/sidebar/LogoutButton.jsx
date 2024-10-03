import React from "react";
import useLogout from "../../hooks/useLogout";
import { RiLogoutCircleLine } from "react-icons/ri";

function LogoutButton() {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <RiLogoutCircleLine
          className="h-6 w-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

export default LogoutButton;

// starter code for the file

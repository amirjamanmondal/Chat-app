import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
function useSignup() {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const signup = async ({ fullName, username, password, confirmpassword, gender }) => {
    const success = handleInputsErrors({ fullName, username, password, confirmpassword, gender })
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmpassword, gender })
      }
      )
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error)
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data)
    } catch (error) {
      toast.error(error.message)
    }
    finally {
      setLoading(false);
    }

  }
  return { loading, signup }

}

export default useSignup;

function handleInputsErrors({ fullName, username, password, confirmpassword, gender }) {
  if (!fullName || !username || !password || !confirmpassword || !gender) {
    toast.error("Please fill all the feilds...");
    return false;
  }

  if (password !== confirmpassword) {
    toast.error("Password do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters");

    return false;
  }
  toast.success('User created Successfully!')
  return true;

}
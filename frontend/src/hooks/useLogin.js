import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    const success = handleInputsErrors({ username, password })
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      }
      )
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error)
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success('Login Successfully!')


    } catch (error) {
      toast.error(error.message)
    }
    finally {
      setLoading(false);
    }

  }
  return { loading, login }

}

export default useLogin;

function handleInputsErrors({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill all the feilds...");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password length not matched!");

    return false;
  }

  return true;
}
import { useState } from "react";

const useSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const subscribe = async (email) => {
    setLoading(true);

    // Yaha future me API call kar sakte ho
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Subscribed:", email);

    setLoading(false);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return { subscribe, loading, success };
};

export default useSubscribe;
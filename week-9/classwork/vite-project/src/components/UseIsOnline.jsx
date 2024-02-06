import { useEffect, useState } from "react";

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  return isOnline;
};

const CheckOnline = () => {
  const isOnline = useIsOnline();

  return <>{isOnline ? "Online" : "Offline"}</>;
};

export default CheckOnline;

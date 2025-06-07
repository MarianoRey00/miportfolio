import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const NotificationContext = createContext();

export const useNotification = () => {
    const context = useContext(NotificationContext);
    return context;
};

export function NotificationProvider({ children }) {
  const [message, setMessage] = useState(null);

  const showNotification = (msg) => {
    setMessage(msg);
    toast.success(msg);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

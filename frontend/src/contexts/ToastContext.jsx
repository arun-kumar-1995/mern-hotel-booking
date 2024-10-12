import React, { createContext, useContext, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";

// Create a context
const ToastContext = createContext();

// Define provider
const ToastProvider = ({ children }) => {
  // Define function
  const showSuccess = useCallback((message) => {
    toast.success(message);
  }, []);

  const showError = useCallback((message) => {
    toast.error(message);
  }, []);
  
  return (
    <ToastContext.Provider value={{ showSuccess, showError }}>
      {children}

      {/* Create the Toaster component */}
      <Toaster />
    </ToastContext.Provider>
  );
};

// Define hook
export const useToast = () => useContext(ToastContext);
export default ToastProvider;

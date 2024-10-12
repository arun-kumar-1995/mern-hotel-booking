import React, { createContext, useContext, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";

// create a context
const ToastContext = createContext();

// define provider
const ToastProvider = ({ children }) => {
  // define function
  const showSuccess = useCallback((message) => {
    toast.success(message);
  }, []);

  const showError = useCallback((message) => {
    toast.error(message);
  }, []);
  return (
    <ToastContext.Provider value={(showSuccess, showError)}>
      {children}

      {/* create the Toaster components */}
      <Toaster />
    </ToastContext.Provider>
  );
};

// define hook
export const useToast = () => useContext(ToastContext);
export default ToastProvider;

import { Toaster } from "react-hot-toast";

const ToastContext = () => {
  return (
    <Toaster 
      position="top-right"
      toastOptions={{
        duration: 2000,
        style: {
          background: "#1f2937",
          color: "#fff",
          borderRadius: "10px",
          padding: "12px 16px",
        },
      }}
    />
  );
};

export default ToastContext;
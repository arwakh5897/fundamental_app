import toast from "react-hot-toast";

const useToast = () => {

  const success = (msg) => {
    toast.success(msg, {
      icon: "✅",
      style:{
        background: "white",
        color: "#1f2937",
      }
    });
  };

  const error = (msg) => {
    toast.error(msg, {
      icon: "❌",
    });
  };

  const info = (msg) => {
    toast(msg, {
      icon: "ℹ️",
      style:{
        background: "#2563eb",
      }
    });
  };

  const custom = (msg) => {
    toast(msg, {
      style: {
        background: "#2563eb",
        color: "#fff",
      },
    });
  };

  return { success, error, info, custom };
};

export default useToast;
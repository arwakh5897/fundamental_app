import toast from "react-hot-toast";

const useToast = () => {
  const baseStyle = {
  borderRadius: "10px",
  padding: "10px 14px",
  fontSize: "12px",
  fontWeight: "500",
};

  const success = (msg) => {
    toast.success(msg, {
      icon: "✅",
      style:{
        ...baseStyle,
        background: "white",
        color: "#1f2937",
      }
    });
  };

  const error = (msg) => {
    toast.error(msg, {
      icon: "❌",
      style:{
        ...baseStyle,
        background: "white",
        color: "#1f2937",
      }
    });
  };

  const info = (msg) => {
    toast(msg, {
      icon: "ℹ️",
      style:{
        ...baseStyle,
        background: "#2563eb",
        color: "#fff",
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
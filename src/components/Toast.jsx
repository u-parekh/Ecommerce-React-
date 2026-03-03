import { useEffect } from "react";

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-5 right-5 px-6 py-3 rounded shadow-lg text-white 
      ${type === "error" ? "bg-red-500" : "bg-green-500"}`}>
      {message}
    </div>
  );
}

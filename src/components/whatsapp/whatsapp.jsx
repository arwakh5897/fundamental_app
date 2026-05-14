import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923146379229?text=Hello%20I%20want%20to%20order"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="relative flex items-center justify-center">

        {/* Soft background glow */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-whatsapp-pulse"></span>

        {/* Button */}
        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-green-400 text-white shadow-sm hover:scale-105 hover:rotate-270 transform transition-all duration-1000">
          <FaWhatsapp size={30}/>
        </div>

        {/* Tooltip */}
        <div className="absolute right-20 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-black text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap">
          Need help? Chat now
        </div>

      </div>
    </a>
  );
};

export default WhatsAppButton;
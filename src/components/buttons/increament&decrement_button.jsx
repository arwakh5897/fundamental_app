import React , {useState} from "react";

const IncreamentDecreamentButton = ({ qty }) => {
      const [quantity, setQuantity] = useState(qty);
      const increment = () => setQuantity((prev) => prev + 1);
      const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

        return (
            <div className="flex items-center border-color rounded overflow-hidden">
                <button
                onClick={decrement}
                className="px-1 py-0.5  hover:bg-gray-200 transition"
                >
                -
                </button>
                <span className="w-6 py-0.5 text-sm font-semibold text-center text-heading">{quantity}</span>
                <button
                onClick={increment}
                className="px-1 py-0.5  hover:bg-gray-200 transition"
                >
                +
                </button>
            </div>
        )
};
export default IncreamentDecreamentButton;










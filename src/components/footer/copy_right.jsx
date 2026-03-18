import React from "react";

const CopyRight = () => {
    return (
        <div className="text-center text-gray-600 mt-4">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
    );
};
export default CopyRight;
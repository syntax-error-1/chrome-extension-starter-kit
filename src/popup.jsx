import React from "react";
import { createRoot } from "react-dom/client";
import './popup.css'; // Import the external CSS file for additional custom styles

function Popup() {
    return (
        <div className="popup-container p-6 bg-white rounded-xl shadow-2xl max-w-md mx-auto mt-12">
            <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
                Chrome Extension Starter Kit
            </h1>
            <p className="text-lg text-gray-800 text-center mb-4">
                Start customizing your Chrome Extension by modifying the
                <code className="bg-gray-100 text-purple-700 p-1 rounded">src/popup.jsx</code> file.
            </p>
        </div>
    );
}

const container = document.getElementById("react-target");
const root = createRoot(container);
root.render(<Popup />);

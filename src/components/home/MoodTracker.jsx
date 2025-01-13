import React, { useState } from "react";
import { TRACKER_DATA } from '../../utils/helper'

const MoodTracker = () => {
    const [selectedMood, setSelectedMood] = useState(null);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 p-6" id="down">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">How are you feeling today?</h2>
            <div className="flex space-x-4">
                {TRACKER_DATA.map((index) => (
                    <button
                        key={index.name}
                        onClick={() => setSelectedMood(index)}
                        className="p-4 rounded-full bg-white shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <span className="text-2xl">{index.emoji}</span>
                    </button>
                ))}
            </div>
            {selectedMood && (
                <div className="mt-8 text-center">
                    <div
                        className="text-6xl transition-transform transform-gpu animate-pulse duration-1000"
                        aria-label={selectedMood.name}
                    >
                        {selectedMood.emoji}
                    </div>
                    <p className="mt-4 text-xl font-medium text-gray-700">{selectedMood.quote}</p>
                </div>
            )}
        </div>
    );
};

export default MoodTracker;
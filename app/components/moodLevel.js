import React, { useState, useEffect } from 'react';
import EmotionSelector from './emotionSelector';

const MoodLevel = ({ onSave }) => {
    const [selectedLevel, setSelectedLevel] = useState(null);

    // Load saved mood level from local storage on component mount
    useEffect(() => {
        const savedLevel = localStorage.getItem('moodLevel');
        if (savedLevel) {
            setSelectedLevel(parseInt(savedLevel, 10));
        }
    }, []);

    /**
     * Save the selected mood level and emotions.
     *
     * @param {number} moodLevel - Selected mood level.
     * @param {string[]} selectedEmotions - Selected emotions.
     */
    const saveMood = (moodLevel, selectedEmotions) => {
        if (moodLevel !== null) {
            localStorage.setItem('moodLevel', moodLevel.toString());
            onSave(moodLevel, selectedEmotions);
        } else {
            alert('Please select a mood level first.');
        }
    };

    return (
        <div className="flex justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 mt-4">Select your mood level for the selected day:</h2>
                <div className="flex justify-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                        <div
                            key={level}
                            className={`border border-gray-300 p-2 m-2 cursor-pointer text-primary rounded ${selectedLevel === level ? ' bg-secondary-200' : 'bg-white'
                                }`}
                            onClick={() => setSelectedLevel(level)}
                        >
                            {level}
                        </div>
                    ))}
                </div>
                {/* Render the EmotionSelector component with the existing styling */}
                <EmotionSelector onSelect={(selectedEmotions) => saveMood(selectedLevel, selectedEmotions)} />
            </div>
        </div>
    );
};

export default MoodLevel;
import React, { useState } from 'react';

const EmotionSelector = ({ onSelect }) => {
    const emotions = ['Happy', 'Sad', 'Angry', 'Calm', 'Excited']; // Add more emotions as needed
    const [selectedEmotions, setSelectedEmotions] = useState([]);

    const toggleEmotion = (emotion) => {
        // Toggle the selection of the emotion
        if (selectedEmotions.includes(emotion)) {
            setSelectedEmotions((prevEmotions) => prevEmotions.filter((e) => e !== emotion));
        } else {
            setSelectedEmotions((prevEmotions) => [...prevEmotions, emotion]);
        }
    };

    const saveMood = () => {
        // Assuming that you have a function to save the mood level and selected emotions
        // This function should be passed as a prop to EmotionSelector from the parent component
        onSelect(selectedEmotions);

        // Reset selected emotions after saving
        setSelectedEmotions([]);
    };

    return (
        <div>
            <h3 className="text-2xl font-bold mb-2">Select Emotions:</h3>
            <div className="flex justify-center">
                {emotions.map((emotion) => (
                    <div
                        key={emotion}
                        className={`border p-2 m-2 cursor-pointer text-primary ${selectedEmotions.includes(emotion) ? ' bg-secondary-200' : 'bg-white'
                            }`}
                        onClick={() => toggleEmotion(emotion)}
                    >
                        {emotion}
                    </div>
                ))}
            </div>
            <button
                className="mt-2 mb-4 bg-secondary-100 hover:bg-secondary-200 font-bold py-2 px-4 rounded"
                onClick={saveMood}
            >
                Save Mood
            </button>
        </div>
    );
};

export default EmotionSelector;
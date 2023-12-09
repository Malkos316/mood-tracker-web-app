import React, { useState, useEffect } from 'react';
import DescriptionInput from './DescriptionInput';
import EmotionSelector from './emotionSelector';

const MoodLevel = ({ selectedMood, setSelectedMood, onSave }) => { // Add selectedMood and setSelectedMood props here
    const [description, setDescription] = useState("");

    useEffect(() => {
        const savedLevel = localStorage.getItem('moodLevel');
        if (savedLevel) {
            setSelectedMood(parseInt(savedLevel, 10)); // Use setSelectedMood instead of setSelectedLevel
        }
    }, []);

    return (
        <div className="flex justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 mt-4">Select your mood level for the selected day:</h2>
                <div className="flex justify-center">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                        <div
                            key={level}
                            className={` p-2 m-2 cursor-pointer text-white rounded ${selectedMood === level ? ' bg-secondary-200' : ' bg-secondary-100'
                                }`}
                            onClick={() => setSelectedMood(level)} // Use setSelectedMood instead of setSelectedLevel
                        >
                            {level}
                        </div>
                    ))}
                </div>
                <DescriptionInput 
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <EmotionSelector 
                    onSelect={(selectedEmotions) => {
                        if (selectedMood !== null && selectedEmotions.length > 0 && description !== '') {
                            localStorage.setItem('moodLevel', selectedMood.toString()); // Use selectedMood instead of selectedLevel
                            onSave(selectedMood, selectedEmotions, description); // Use selectedMood instead of selectedLevel
                            setDescription(''); // Clear the description here
                            setSelectedMood(null); // Clear the mood level here
                        } else {
                            alert('Please make sure you have selected a mood level, specified emotions, and have a description.');
                        }
                    }} 
                />
            </div>
        </div>
    );
};

export default MoodLevel;
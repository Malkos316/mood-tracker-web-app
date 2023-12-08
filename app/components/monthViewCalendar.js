// MonthViewCalendar.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MoodLevel from './moodLevel';

const MonthViewCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [moodData, setMoodData] = useState({});
    const [selectedMood, setSelectedMood] = useState(null);  // Add this line

    useEffect(() => {
        const savedData = localStorage.getItem('moodData');
        if (savedData) {
            setMoodData(JSON.parse(savedData));
        }
    }, []);

    // Reset selected mood whenever selectedDate changes
    useEffect(() => {
        setSelectedMood(null);
    }, [selectedDate]);

    const updateMoodData = (date, moodLevel, emotions, description) => {
        const newMoodData = {
            ...moodData,
            [date.toISOString()]: { moodLevel, emotions, description },
        };
    
        setMoodData(newMoodData);
        localStorage.setItem('moodData', JSON.stringify(newMoodData));
    };
    
    const saveMoodLevel = (moodLevel, selectedEmotions, description) => {
        if (selectedDate) {
            const formattedDate = selectedDate.toISOString();
            updateMoodData(selectedDate, moodLevel, selectedEmotions, description);
            alert(`Mood level ${moodLevel}, emotions ${selectedEmotions.join(", ")}, and description ${description} saved for ${formattedDate}`);
        }
    };

    const tileContent = ({ date }) => {
        const formattedDate = date.toISOString();
        const moodInfo = moodData[formattedDate];
        return moodInfo ? (
            <div>✔</div>
        ) : null;
    };

    return (
        <div className="container mx-auto mt-8 text-center">
            <div className="flex justify-center">
                <Calendar
                    onChange={(date) => {
                        // Reset selected mood when a new date is selected
                        setSelectedMood(null);
                        setSelectedDate(date);
                    }}
                    value={selectedDate}
                    tileContent={tileContent}
                />
            </div>
            {selectedDate && (
                <div className="mt-4">
                    {/* Pass selectedMood and setSelectedMood as props to MoodLevel */}
                    <MoodLevel selectedMood={selectedMood} setSelectedMood={setSelectedMood} onSave={saveMoodLevel} />
                </div>
            )}
        </div>
    );
};

export default MonthViewCalendar;
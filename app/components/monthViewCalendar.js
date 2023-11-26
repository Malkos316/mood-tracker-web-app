import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MoodLevel from './moodLevel';

const MonthViewCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null); // Use null to indicate no date selected
    const [moodData, setMoodData] = useState({});

    const updateMoodData = (date, moodLevel) => {
        setMoodData((prevData) => ({
            ...prevData,
            [date.toISOString()]: moodLevel,
        }));
    };

    const saveMoodLevel = (moodLevel) => {
        const formattedDate = selectedDate.toISOString();
        updateMoodData(selectedDate, moodLevel);
        alert(`Mood level ${moodLevel} saved for ${formattedDate}`);
    };

    const tileContent = ({ date }) => {
        const formattedDate = date.toISOString();
        return moodData[formattedDate] ? <div>{`Mood: ${moodData[formattedDate]}`}</div> : null;
    };

    return (
        <div className="container mx-auto mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Month View Calendar</h2>
            <div className="flex justify-center">
                <Calendar
                    onChange={(date) => setSelectedDate(date)}
                    value={selectedDate}
                    tileContent={tileContent}
                />
            </div>
            {selectedDate && (
                <div className="mt-4">
                    <MoodLevel onSave={saveMoodLevel} />
                </div>
            )}
        </div>
    );
};

export default MonthViewCalendar;
import React, { useEffect, useState } from 'react';

const MoodList = () => {
    const [moodData, setMoodData] = useState({});

    useEffect(() => {
        loadMoodData();
    }, []);

    const loadMoodData = () => {
        const savedData = localStorage.getItem('moodData');
        if (savedData) {
            setMoodData(JSON.parse(savedData));
        }
    };

    const handleDelete = (date) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            delete moodData[date];
            localStorage.setItem('moodData', JSON.stringify(moodData));
            loadMoodData();
        }
    };

    return (
        <div>
            <h2 className='flex justify-center text-4xl mt-2'>Mood Data</h2>
            <ul className='flex flex-col items-center'>
                {Object.entries(moodData).map(([date, data], index) => (
                    <li key={index}
                        className='flex justify-between items-center border-4 border-primary mt-2 w-full px-4 py-2'>
                        <div className='overflow-auto break-words'>
                            <strong>Date: </strong> {new Date(date).toLocaleDateString() }
                            <br />
                            <strong>Mood Level: </strong> {data?.moodLevel }
                            <br />
                            <strong>Emotions: </strong> {data?.emotions?.join(", ") }
                            <br />
                            <strong>Description: </strong> {data?.description}
                        </div>
                        <button onClick={() => handleDelete(date)}
                                className=' p-2 m-2 cursor-pointer text-white rounded hover:bg-secondary-200 bg-secondary-100'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoodList;
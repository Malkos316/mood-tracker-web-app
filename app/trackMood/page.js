"use client";
import React from 'react';
import Header from '../components/header';
import MonthViewCalendar from '../components/monthViewCalendar';

export default function Home() {
    return (
        <main>
            <div>
                <Header />
            </div>
            <div>
                <MonthViewCalendar />
            </div>
        </main>
    );
}
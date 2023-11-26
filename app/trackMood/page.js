"use client";
import React from 'react';
import { header } from '../components/header';
import MonthViewCalendar from '../components/monthViewCalendar';

export default function Home() {
    return (
        <main>
            <div>
                {header()}
            </div>
            <div>
                <MonthViewCalendar />
            </div>
        </main>
    );
}
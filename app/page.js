"use client";
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import MonthViewCalendar from './components/monthViewCalendar';

export default function Home() {
    return (
        <main>
            <div>
                <Header />
            </div>
            <div>
                <MonthViewCalendar />
            </div>
            <div>
                <Footer />
            </div>
        </main>
    );
}
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {
    return (
        <main>
            <div>
                <Header />
            </div>
            <div className='mt-4'>
                <h1 className='flex justify-center text-lg'>
                    About this WebApp
                </h1>
                <div className='flex flex-col justify-center'>
                    <p className='flex justify-center'>
                        This is a proof of concept web application that allows users to track their mood over time.
                    </p>
                    <p className='flex justify-center'>
                    The application was built using React, Next.js, and Tailwind CSS.
                    </p>
                    <p className='flex justify-center'>
                    At this point in time, the application is not connected to a database, so all data is stored locally in the browser.
                    </p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </main>
    );
}
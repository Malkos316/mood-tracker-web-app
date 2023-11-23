import React from 'react';
import { header } from '../components/header';

export default function About() {
    return (
        <main>
            <div>
                {header()}
            </div>
            <div className='mt-4'>
                <h1 className='flex justify-center text-lg'>
                    About this WebApp
                </h1>
                <p className='flex flex-col justify-center'>
                    <p className='flex justify-center'>
                        This webapp was created to help people track their moods.
                        The Idea is this:
                    </p>
                    <p className='flex justify-center'>
                        login using OAUTH and a google account.
                    </p>
                    <p className='flex justify-center'>
                        Home page:
                    </p>
                    <p className='flex justify-center'>
                        The home page should have a calendar, with each day having a mood rating.
                    </p>
                    <p className='flex justify-center'>
                        the user should be able to scroll through the months and years to see their mood history.
                    </p>
                </p>
            </div>
        </main>
    );
}
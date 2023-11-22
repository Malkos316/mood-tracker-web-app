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
                <p className='flex justify-center'>
                    This webapp was created to help people track their moods.
                </p>
            </div>
        </main>
    );
}
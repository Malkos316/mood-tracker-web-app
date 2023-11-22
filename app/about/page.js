import React from 'react';
import { header } from '../header';

export default function About() {
    return (
        <main>
            <div>
                {header()}
            </div>
            <div>
                <h1>
                    About page
                </h1>
            </div>
        </main>
    );
}
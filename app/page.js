import React from 'react'
import { header } from './header'

export default function Home() {
  return (
    <main>
      <div>
        {header()}
      </div>
      <div>
        <h1>
          Home page
        </h1>
      </div>
    </main>
  );
}

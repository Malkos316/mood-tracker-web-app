"use client";
import React from 'react'
import Header from './components/header'
import MoodList from './components/moodList'

export default function Home() {
	return (
		<main>
			<div>
				<Header />
			</div>
			<div>
				<MoodList />
			</div>
		</main>
	);
}

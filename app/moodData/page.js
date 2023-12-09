"use client";
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import MoodList from '../components/moodList'

export default function Page() {
	return (
		<main>
			<div>
				<Header />
			</div>
			<div>
				<MoodList />
			</div>
			<div>
				<Footer />
			</div>
		</main>
	);
}

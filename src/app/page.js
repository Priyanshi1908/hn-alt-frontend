import React from 'react';
import StoryGrid from '../components/StoryGrid';
import { ThemeProvider } from '../components/ThemeProvider';
import AnimatedBackground from '../components/AnimatedBackground';

export const runtime = 'edge';

async function fetchStories() {
  try {
    const res = await fetch('https://hn-alt-backend.priyanshideshpande19.workers.dev/', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch stories');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function HomePage() {
  const stories = await fetchStories();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen overflow-hidden bg-black text-white">
        <AnimatedBackground />
        <main className="relative z-10 container mx-auto px-4 py-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-center text-blue-900 animate-neon">
            Hacker News Stories
          </h1>
          {stories.length > 0 ? (
            <StoryGrid stories={stories} />
          ) : (
            <p className="text-center text-2xl">Loading stories...</p>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

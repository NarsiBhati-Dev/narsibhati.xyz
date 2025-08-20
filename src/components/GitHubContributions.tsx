"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GitHubContributionCalendar() {
  // Custom GitHub-like green theme
  const theme = {
    // dark: ["#18181b", "#3f3f46", "#52525b", "#71717a", "#a1a1aa"],
    dark: ["#18181b", "#3f3f46", "#52525b", "#71717a", "#d4d4d8"],
  };



  return (
    <div className="bg-bg-darkest p-4 w-full text-white rounded-lg max-w-[900px] mx-auto">
      {/* Title */}
      <div className="text-white text-lg font-mono pl-8 mb-4">Github</div>

      <div className="flex flex-col items-center">
        {/* Calendar */}
        <GitHubCalendar
          username="NarsiBhati-Dev"
          blockSize={12}
          blockMargin={3}
          fontSize={12}
          theme={theme}
          showWeekdayLabels={false}
        />
      </div>
    </div >
  );
}
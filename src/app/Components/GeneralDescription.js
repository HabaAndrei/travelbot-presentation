import React from 'react'

export default function GeneralDescription() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        Travel Bot – Where Every Trip Finds Its Way
      </h1>

      <div className="mb-12 text-center">
        <h4 className="text-xl font-semibold mb-2">
          Plan Less. Travel More.
        </h4>
        <p className="mb-2">
          Travel Bot is your smart travel companion, built to solve the real challenges of trip planning.
        </p>
        <p>
          Whenever you’re exploring a new city or country, Travel Bot helps you skip the hassle and dive straight into the adventure.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-3">
            What Does Travel Bot Do?
          </h3>
          <p className="mb-4">
            Just choose your destination and the types of activities you enjoy — whether it's culture, nature, food, or fun. Travel Bot will:
          </p>
          <ul className="space-y-2">
            <li>📍 Automatically generate a list of personalized places to visit</li>
            <li>🗓️ Build the most efficient itinerary to save time and avoid traffic</li>
            <li>🗺️ Provide detailed info, Google Maps integration, and official links for every spot</li>
            <li>🤖 Offer a smart virtual assistant to guide you through every step</li>
            <li>✏️ Let you fully customize your schedule to fit your travel style</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">
            Why It’s Different
          </h3>
          <p>
            No more juggling multiple tabs and planning stress. Travel Bot puts everything in one place, so you can focus on what matters most — experiencing the world.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">
            Help Us Improve
          </h3>
          <p>
            Try Travel Bot and be part of the journey! Your feedback is key to shaping the ultimate travel app.
          </p>
        </div>
      </div>
    </div>
  )
};
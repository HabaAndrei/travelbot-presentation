import PresentationCard from "./PresentationCard.js";

export default function Presentation() {

  const screens = [
    {
      name: "New Trip",
      images: [
        "/travelbot_images/setup.png",
        "/travelbot_images/search_country.png",
        "/travelbot_images/activities.png",
        "/travelbot_images/topkapi.png",
        "/travelbot_images/basilica.png",
        "/travelbot_images/program.png",
        "/travelbot_images/program_description.png",
      ],
      description: `<div class="text-gray-700"><h2 class="text-lg font-semibold mb-2">🧳 Plan Your Perfect Adventure!</h2><p class="text-sm text-gray-600 mb-4">Ready to explore somewhere new? This screen makes trip planning feel like part of the journey!</p><ul class="space-y-4"><li class="flex items-start"><span class="text-xl mr-3">🌍</span><span><strong>Pick your destination</strong> – start by choosing a country, then dive into the city. Add all the activities you’re excited to try. When you're set, tap ‘Create Locations’ and let the journey begin!</span></li><li class="flex items-start"><span class="text-xl mr-3">📷</span><span><strong>Choose your favorite spots</strong> – browse through the suggested locations and check out the photos to help you decide.</span></li><li class="flex items-start"><span class="text-xl mr-3">🗓️</span><span><strong>Get your daily itinerary</strong> – we’ll generate a personalized schedule for your trip. You can save it, tweak it, regenerate it, or start fresh—your trip, your rules!</span></li></ul><p class="text-sm text-gray-600 mt-4">It’s your adventure, made easy and exciting. Let’s get planning! ✨✈️</p></div>`,
      title: "New Trip"
    },
    {
      name: "My Trips",
      images: [
        "/travelbot_images/trips.png",
        "/travelbot_images/trips_details.png",
      ],
      description: `<div class="text-gray-700"><h2 class="text-lg font-semibold mb-2">Your Travel Story</h2><p class="text-sm text-gray-600 mb-4">This is where your adventures come to life!</p><ul class="space-y-4"><li class="flex items-start"><span class="text-xl mr-3">📅</span><span><strong>View all your trips</strong> – Check out the details of your journeys and relive the memories.</span></li><li class="flex items-start"><span class="text-xl mr-3">✏️</span><span><strong>Edit and customize</strong> – Want to tweak your plans? Feel free to adjust details or even add your own unique locations.</span></li></ul><p class="text-sm text-gray-600 mt-4">It’s your travel diary, and you’re in full control. Ready to make some changes or add new destinations? 🌟✨</p></div>`,
      title: "My Trips"
    },
    {
      name: "Find Place",
      images: [
        "/travelbot_images/find_place.png",
      ],
      description: `<div class="text-gray-700"><h2 class="text-lg font-semibold mb-2">Got a photo of a stunning spot but not sure where it is?</h2><p class="text-sm text-gray-600 mb-4">No worries—we’ve got your back! Just follow these simple steps and get ready to uncover the story behind that beautiful view:</p><ul class="space-y-4"><li class="flex items-start"><span class="text-xl mr-3">📸</span><span><strong>Upload a photo</strong> from your gallery—maybe from your last trip or that dreamy place you saw online.</span></li><li class="flex items-start"><span class="text-xl mr-3">🔍</span><span>Tap <strong>‘Analyse Image’</strong> and let the magic happen.</span></li><li class="flex items-start"><span class="text-xl mr-3">🌟</span><span>Sit back and enjoy the details—we’ll tell you where it might be, fun facts, and why it’s worth a visit!</span></li></ul></div>`,
      title: "Find Place"
    },
    {
      name: "Assistant",
      images: [
        "/travelbot_images/assistant.png",
      ],
      description: `<div class="text-gray-700"><h2 class="text-lg font-semibold mb-2">Your Travel Companion!</h2><p class="text-sm text-gray-600 mb-4">Need help along the way? Meet your personal assistant, always here to make your journey smoother.</p><ul class="space-y-4"><li class="flex items-start"><span class="text-xl mr-3">🗣️</span><span><strong>Ask anything</strong> – Whether it’s about how the app works or tips for your next trip, this chat feature is your go-to.</span></li><li class="flex items-start"><span class="text-xl mr-3">🧹</span><span><strong>Manage your chats</strong> – Start new conversations to get answers, or delete the ones you no longer need.</span></li></ul><p class="text-sm text-gray-600 mt-4">It’s like having a travel buddy right in your pocket, ready to assist with anything you need. Let’s chat! 🌟✈️</p></div>`,
      title: "Assistant"
    },
  ]

  return (
    <div >
      {screens.map((screen, index)=>{
        return  <PresentationCard key={index} screen={screen} />
      })}
    </div>
  );
}
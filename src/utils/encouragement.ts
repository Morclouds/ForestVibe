// Array of encouraging messages to display after submission
export const encouragingMessages = [
  "Your words have been carried away by the forest breeze. Feel lighter now.",
  "The trees have heard you. They stand tall in solidarity.",
  "Your thoughts have dissolved into the mist. Take a deep breath.",
  "The forest embraces your feelings without judgment.",
  "Your voice has echoed through the trees and faded into peace.",
  "Let go and breathe. The forest holds your secrets safe.",
  "You've released what was weighing you down. Feel the freedom.",
  "The magical forest has transformed your words into floating light.",
  "Your courage to express yourself creates space for healing.",
  "As your words fade into the void, new strength grows within you.",
  "Your honesty with yourself is the first step toward peace.",
  "The forest spirits carry your burdens away, leaving calm in their place.",
  "You've trusted the void with your thoughts. That takes courage.",
  "Sometimes letting go is the strongest thing you can do.",
  "Your feelings matter, and now they've been acknowledged and released."
];

// Function to get a random encouraging message
export const getRandomEncouragement = (): string => {
  const randomIndex = Math.floor(Math.random() * encouragingMessages.length);
  return encouragingMessages[randomIndex];
};
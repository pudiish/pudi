/**
 * Weather utility functions
 */

/**
 * Generates a sentiment prompt based on weather condition
 * @param {string} weatherCondition - The weather condition from API
 * @returns {string} - A user-friendly message about the weather
 */
export const generateSentimentPrompt = (weatherCondition) => {
  const weatherConditions = {
    Clear: "It's a beautiful day! How does the clear sky make you feel? ☀️",
    Clouds: "It's a cloudy day. What are your thoughts on the cloudy weather? ☁️",
    Rain: "It's raining in Amaravati. How does the rain affect your mood? ☔",
    Drizzle: "It's drizzling outside. How do you feel about this light rain? 🌦️",
    Thunderstorm: "There's a thunderstorm in Amaravati. How do you react to thunderstorms? ⛈️",
    Snow: "It's snowing in Amaravati! What are your feelings about snow? ❄️",
    Mist: "There's mist in the air. How does the misty weather make you feel? 🌫️",
    Haze: "It's hazy outside. How does the haze affect your mood? 🌫️",
    Fog: "There's fog in Amaravati. How do you feel about foggy weather? 🌫️",
    Smoke: "There's smoke in the air. How does the smoky weather make you feel? 🌫️",
    Dust: "It's a dusty day. How do you feel about the dusty weather? 🌫️",
    Sand: "There's sand in the air. How does the sandy weather make you feel? 🌫️",
  };

  return (
    weatherConditions[weatherCondition] ||
    `The weather in Amaravati is currently ${weatherCondition}. How does this weather make you feel?`
  );
};


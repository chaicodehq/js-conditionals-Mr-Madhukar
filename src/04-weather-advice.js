/**
 * 🌤️ TrailBuddy - The Hiking Weather App
 *
 * You're building a weather advisory feature for TrailBuddy, a popular
 * hiking app used by thousands of outdoor enthusiasts. Based on the
 * temperature (in Celsius) and whether it's raining, the app should
 * display helpful advice to hikers.
 *
 * Advisory Rules (check in this exact order):
 *   - temperature >= 35              → "Too hot for hiking - stay indoors and hydrate"
 *   - temperature >= 25 and no rain  → "Great weather for hiking - don't forget sunscreen"
 *   - temperature >= 25 and raining  → "Warm but rainy - consider indoor activities"
 *   - temperature >= 15 and no rain  → "Perfect hiking weather - enjoy the trails"
 *   - temperature >= 15 and raining  → "Cool and rainy - bring waterproof gear if hiking"
 *   - temperature >= 5 and no rain   → "Chilly - wear layers for your hike"
 *   - temperature >= 5 and raining   → "Cold and wet - best to stay indoors"
 *   - temperature < 5                → "Too cold - stay warm indoors"
 *
 * @param {number} temperature - Temperature in Celsius
 * @param {boolean} isRaining - Whether it's currently raining
 * @returns {string} The weather advisory message
 */
export function getWeatherAdvice(temperature, isRaining) {
  
  // 1. Extreme Heat: Check this first regardless of rain
  if (temperature >= 35) {
    return "Too hot for hiking - stay indoors and hydrate";
  }
  
  // 2. Warm & Dry: Temp is between 25-34, no rain
  else if (temperature >= 25 && !isRaining) {
    return "Great weather for hiking - don't forget sunscreen";
  }
  
  // 3. Warm & Rainy: Temp is between 25-34, with rain
  else if (temperature >= 25 && isRaining) {
    return "Warm but rainy - consider indoor activities";
  }
  
  // 4. Perfect Conditions: Temp is between 15-24, no rain
  else if (temperature >= 15 && !isRaining) {
    return "Perfect hiking weather - enjoy the trails";
  }
  
  // 5. Cool & Rainy: Temp is between 15-24, with rain
  else if (temperature >= 15 && isRaining) {
    return "Cool and rainy - bring waterproof gear if hiking";
  }
  
  // 6. Chilly & Dry: Temp is between 5-14, no rain
  else if (temperature >= 5 && !isRaining) {
    return "Chilly - wear layers for your hike";
  }
  
  // 7. Cold & Wet: Temp is between 5-14, with rain
  else if (temperature >= 5 && isRaining) {
    return "Cold and wet - best to stay indoors";
  }
  
  // 8. Freezing/Too Cold: Any temperature below 5
  else {
    return "Too cold - stay warm indoors";
  }
}
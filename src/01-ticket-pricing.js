/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {

  // 1. Validation Rule: Return -1 if age is negative or not a valid number
  if (typeof age !== 'number' || Number.isNaN(age) || age < 0) return -1;

  let price;

  // 2. Age Group: Children (0–12) -> $8
  if (age <= 12) {
    price = 8;
  } 
  // 3. Age Group: Teens (13–17) -> $12
  else if (age <= 17) {
    price = 12;
  } 
  // 4. Age Group: Adults (18–59) -> $15
  else if (age <= 59) {
    price = 15;
  } 
  // 5. Age Group: Seniors (60+) -> $10
  else {
    price = 10;
  }

  // 6. Weekend Surcharge: Add $3 if it is a weekend
  if (isWeekend) price += 3;

  return price;
}
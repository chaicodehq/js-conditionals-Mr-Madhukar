/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  
  // 1. Rule: Case-insensitive (e.g., "GREEN" -> "green")
  // We convert to string just in case, then lower case it.
  const sig = String(color).toLowerCase();

  switch (sig) {
    // 2. Signal: "green" -> Action: "GO"
    case 'green':
      return 'GO';

    // 3. Signal: "yellow" -> Action: "SLOW DOWN"
    case 'yellow':
      return 'SLOW DOWN';

    // 4. Signal: "red" -> Action: "STOP"
    case 'red':
      return 'STOP';

    // 5. Signal: "flashing red" -> Action: "STOP AND PROCEED WITH CAUTION"
    case 'flashing red':
      return 'STOP AND PROCEED WITH CAUTION';

    // 6. Signal: Anything else -> Action: "INVALID SIGNAL"
    default:
      return 'INVALID SIGNAL';
  }
}

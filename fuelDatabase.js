/**
 * ============================================================================
 *  VP RACING FUEL DATABASE  (fuelDatabase.js)
 * ============================================================================
 *
 *  WHAT THIS FILE IS
 *  -----------------
 *  This is the master list of every fuel the Fuel Finder can recommend.
 *  Each fuel is one entry in the object below, keyed by its product code
 *  (for example "C12", "MS109", "VP Moto R").
 *
 *  The decision tree (see decisionTree.js) only stores these short codes.
 *  At the end of the questionnaire the app looks each code up in this file
 *  to display the full name, description, and specs on the result card.
 *
 *  HOW TO EDIT (no coding experience required)
 *  -------------------------------------------
 *  1. Find the fuel you want to change below.
 *  2. Edit the text inside the quotation marks "like this".
 *  3. Keep the field names (name, shortDescription, etc.) exactly as written.
 *  4. Keep every comma and curly brace { } where it is.
 *  5. Save the file. The website updates automatically while `npm run dev`
 *     is running.
 *
 *  TO ADD A NEW FUEL
 *  -----------------
 *  Copy an existing block, paste it above the final closing brace, and give
 *  it a new key. Then reference that key inside decisionTree.js.
 *
 *  FIELD MEANINGS
 *  --------------
 *  name             Full product name shown as the card title.
 *  shortDescription One-line summary shown under the title.
 *  leadedUnleaded   "Leaded", "Unleaded", or a short note.
 *  oxygenated       "Yes", "No", or a short note.
 *  bestFor          Who / what application this fuel is intended for.
 *  notes            Extra detail. Use this to flag spec confirmations.
 *
 *  ⚠️  IMPORTANT: Specs marked "confirm specs before publishing" are
 *      PLACEHOLDERS for this sandbox demo. Verify every value with VP Racing
 *      before this tool goes live to customers.
 * ============================================================================
 */

export const fuelDatabase = {
  'T2+': {
    name: 'VP T2+',
    shortDescription: 'Unleaded performance fuel for amateur two-stroke racing.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'No',
    bestFor: 'Amateur two-stroke motocross, ATV, and kart applications.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'C12': {
    name: 'VP C12',
    shortDescription: 'Industry-standard leaded race fuel, extremely versatile.',
    leadedUnleaded: 'Leaded',
    oxygenated: 'No',
    bestFor: 'Wide range of high-compression two- and four-stroke engines.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'C14': {
    name: 'VP C14',
    shortDescription: 'High-octane leaded fuel for forced-induction and high-compression builds.',
    leadedUnleaded: 'Leaded',
    oxygenated: 'No',
    bestFor: 'Boosted or very high-compression drag applications running a fuel rule.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'C10': {
    name: 'VP C10',
    shortDescription: 'Unleaded race fuel commonly used as a spec fuel.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'No',
    bestFor: 'Spec-fuel classes and UTV applications without a leaded requirement.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'C25': {
    name: 'VP C25',
    shortDescription: 'Oxygenated leaded fuel built for maximum power output.',
    leadedUnleaded: 'Leaded',
    oxygenated: 'Yes',
    bestFor: 'NHRA spec drag bike classes that allow oxygenated leaded fuel.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'MRX02': {
    name: 'VP MRX02',
    shortDescription: 'Oxygenated unleaded fuel engineered for strong throttle response.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'Yes',
    bestFor: 'Amateur two- and four-stroke applications seeking added power.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'U4.4': {
    name: 'VP U4.4',
    shortDescription: 'Oxygenated unleaded fuel for high-output four-stroke engines.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'Yes',
    bestFor: 'Amateur four-stroke MX/road race and unleaded drag applications.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'VPR': {
    name: 'VP VPR',
    shortDescription: 'Premium oxygenated unleaded fuel for serious amateur racers.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'Yes',
    bestFor: 'Amateur two-stroke classes wanting a premium unleaded option.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'MS100': {
    name: 'VP MS100',
    shortDescription: 'Unleaded race fuel developed for pro-level four-stroke MX.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'No',
    bestFor: 'AMA Pro SX & MX four-stroke programs.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'MS103': {
    name: 'VP MS103',
    shortDescription: 'Higher-octane unleaded pro MX fuel.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'No',
    bestFor: 'AMA Pro SX & MX teams needing additional octane.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'MS109': {
    name: 'VP MS109',
    shortDescription: 'Popular unleaded fuel for amateur four-stroke MX and road race.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'No',
    bestFor: 'Amateur SX/MX and road race four-stroke engines.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'MR Pro 6': {
    name: 'VP MR Pro 6',
    shortDescription: 'Professional motorcycle racing fuel from the MR Pro series.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'Yes',
    bestFor: 'Pro and high-level amateur four-stroke motorcycle racing.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'MR Pro 6 HT': {
    name: 'VP MR Pro 6 HT',
    shortDescription: 'High-temperature variant of MR Pro 6 for hot conditions.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'Yes',
    bestFor: 'Pro four-stroke racing in high ambient-temperature environments.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'MR Pro 7': {
    name: 'VP MR Pro 7',
    shortDescription: 'Top-tier MR Pro series fuel for maximum performance.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'Yes',
    bestFor: 'Premier pro four-stroke motorcycle racing programs.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'MR12': {
    name: 'VP MR12',
    shortDescription: 'Motorcycle racing fuel balancing power and consistency.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'Yes',
    bestFor: 'Amateur four-stroke road race and MX; unleaded drag without a fuel rule.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'VP Moto R': {
    name: 'VP Moto R',
    shortDescription: 'FIM-compliant racing fuel for international competition.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'Per FIM limits',
    bestFor: 'FIM-sanctioned two- and four-stroke motorcycle racing.',
    notes: 'Placeholder specs — confirm specs before publishing. Verify current FIM compliance.',
  },

  'VP MGP R': {
    name: 'VP MGP R',
    shortDescription: 'Premium road race fuel used in pro-level series.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'Per series limits',
    bestFor: 'MotoAmerica and FIM road race programs.',
    notes: 'Placeholder specs — confirm specs before publishing. Verify current series compliance.',
  },

  'T4+': {
    name: 'VP T4+',
    shortDescription: 'Unleaded four-stroke fuel suited to spec and club racing.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'No',
    bestFor: 'MotoAmerica spec applications and four-stroke club racing.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'UTV96': {
    name: 'VP UTV96',
    shortDescription: 'Purpose-built fuel for side-by-side / UTV engines.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'No',
    bestFor: 'UTV / side-by-side racing and recreation.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },

  'VP Nitro': {
    name: 'VP Nitro',
    shortDescription: 'Nitromethane-based fuel for specialized drag applications.',
    leadedUnleaded: 'Specialty',
    oxygenated: 'Yes',
    bestFor: 'NHRA spec nitro drag bike classes.',
    notes: 'Placeholder specs — confirm specs before publishing. Handle per all safety and class rules.',
  },

  'Q16': {
    name: 'VP Q16',
    shortDescription: 'Oxygenated unleaded fuel delivering big power gains.',
    leadedUnleaded: 'Unleaded',
    oxygenated: 'Yes',
    bestFor: 'Drag bike applications with no fuel rule, seeking maximum power.',
    notes: 'Placeholder specs — confirm specs before publishing.',
  },
}

/**
 * Helper: look up a fuel by its code.
 * Returns a safe fallback object if a code is missing from the database,
 * so the UI never crashes if the decision tree references an unknown fuel.
 */
export function getFuel(code) {
  return (
    fuelDatabase[code] || {
      name: code,
      shortDescription: 'Details coming soon.',
      leadedUnleaded: 'TBD',
      oxygenated: 'TBD',
      bestFor: 'TBD',
      notes: 'This fuel is referenced in the decision tree but not yet in fuelDatabase.js.',
    }
  )
}

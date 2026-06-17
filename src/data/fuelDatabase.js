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
 *  SPEC SOURCE
 *  -----------
 *  The technical specs below (color, octane, specific gravity, RVP, oxygen
 *  content, type) are taken from VP Racing's "Motorcycle / ATV / UTV Tech
 *  Flow Chart." They are presented as a guide — always confirm the current
 *  values and class/series compliance with VP Racing before a race.
 *  (C12 is not listed on that chart, so its lab specs are left as "—".)
 *
 *  HOW TO EDIT (no coding experience required)
 *  -------------------------------------------
 *  1. Find the fuel you want to change below.
 *  2. Edit the text inside the quotation marks "like this".
 *  3. Keep the field names (name, color, octaneRM2, etc.) exactly as written.
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
 *  color            Dye color of the fuel (e.g. "Yellow", "Colorless").
 *  type             "Leaded", "Unleaded", or "Nitro".
 *  octaneRM2        Pump-style octane, the (R+M)/2 average. Headline number.
 *  mon              Motor Octane Number.
 *  ron              Research Octane Number.
 *  specificGravity  Specific gravity @ 60° F.
 *  rvp              Reid Vapor Pressure (psi).
 *  oxygenated       Oxygen content by weight (e.g. "0%", "7.50%").
 *  shortDescription One-line summary shown under the title.
 *  bestFor          Who / what application this fuel is intended for.
 *  notes            Extra detail (compliance reminders, availability, etc.).
 * ============================================================================
 */

export const fuelDatabase = {
  // ----------------------------- LEADED ------------------------------------
  'T2+': {
    name: 'VP T2+',
    color: 'Yellow',
    type: 'Leaded',
    octaneRM2: '105.5',
    mon: '99',
    ron: '112',
    specificGravity: '0.7515',
    rvp: '7.33',
    oxygenated: '5.94%',
    shortDescription: 'Oxygenated leaded fuel popular with amateur two-stroke racers.',
    bestFor: 'Amateur two-stroke motocross, ATV, and kart applications.',
    notes: '',
  },

  'C12': {
    name: 'VP C12',
    color: '—',
    type: 'Leaded',
    octaneRM2: '—',
    mon: '—',
    ron: '—',
    specificGravity: '—',
    rvp: '—',
    oxygenated: '—',
    shortDescription: 'Industry-standard leaded race fuel, extremely versatile.',
    bestFor: 'Amateur two-stroke and drag classes that run a fuel rule.',
    notes: 'Not listed on the Motorcycle / ATV / UTV tech chart — confirm specs with VP Racing.',
  },

  'C14': {
    name: 'VP C14',
    color: 'Yellow',
    type: 'Leaded',
    octaneRM2: '116',
    mon: '114',
    ron: '118',
    specificGravity: '0.693',
    rvp: '5.8',
    oxygenated: '0%',
    shortDescription: 'High-octane leaded fuel for high-compression and boosted builds.',
    bestFor: 'Drag applications running a fuel rule that need maximum octane.',
    notes: '',
  },

  'C25': {
    name: 'VP C25',
    color: 'Yellow',
    type: 'Leaded',
    octaneRM2: '>117',
    mon: '114',
    ron: '>120',
    specificGravity: '0.6985',
    rvp: '7.15',
    oxygenated: '0%',
    shortDescription: 'High-octane leaded fuel built for maximum power output.',
    bestFor: 'NHRA spec drag bike classes.',
    notes: '',
  },

  'MRX02': {
    name: 'VP MRX02',
    color: 'Blue',
    type: 'Leaded',
    octaneRM2: '101.5',
    mon: '95',
    ron: '108',
    specificGravity: '0.735',
    rvp: '9.96',
    oxygenated: '6.99%',
    shortDescription: 'Oxygenated leaded fuel engineered for strong throttle response.',
    bestFor: 'Amateur two- and four-stroke racing; no-fuel-rule drag.',
    notes: '',
  },

  'U4.4': {
    name: 'VP U4.4',
    color: 'Green',
    type: 'Leaded',
    octaneRM2: '106',
    mon: '98',
    ron: '114',
    specificGravity: '0.7626',
    rvp: '7.16',
    oxygenated: '7.50%',
    shortDescription: 'Oxygenated leaded fuel for high-output engines.',
    bestFor: 'Amateur two/four-stroke MX & road race; no-fuel-rule drag.',
    notes: '',
  },

  'VPR': {
    name: 'VP VPR',
    color: 'Green',
    type: 'Leaded',
    octaneRM2: '106.5',
    mon: '99',
    ron: '114',
    specificGravity: '0.746',
    rvp: '7.07',
    oxygenated: '5.95%',
    shortDescription: 'Premium oxygenated leaded fuel for serious amateur two-strokes.',
    bestFor: 'Amateur two-stroke classes wanting a premium option.',
    notes: '',
  },

  'MR12': {
    name: 'VP MR12',
    color: 'Green',
    type: 'Leaded',
    octaneRM2: '93',
    mon: '85',
    ron: '101',
    specificGravity: '0.734',
    rvp: '12.17',
    oxygenated: '8.73%',
    shortDescription: 'Highly oxygenated leaded fuel balancing power and consistency.',
    bestFor: 'Amateur four-stroke MX/road race; no-fuel-rule drag.',
    notes: '',
  },

  'Q16': {
    name: 'VP Q16',
    color: 'Yellow',
    type: 'Leaded',
    octaneRM2: '>118',
    mon: '116',
    ron: '>120',
    specificGravity: '0.72',
    rvp: '5.64',
    oxygenated: '9.41%',
    shortDescription: 'Oxygenated leaded fuel delivering big power gains.',
    bestFor: 'No-fuel-rule / outlaw drag bike seeking maximum power.',
    notes: '',
  },

  // ---------------------------- UNLEADED -----------------------------------
  'C10': {
    name: 'VP C10',
    color: 'Colorless',
    type: 'Unleaded',
    octaneRM2: '100',
    mon: '96',
    ron: '104',
    specificGravity: '0.765',
    rvp: '4.02',
    oxygenated: '0%',
    shortDescription: 'Unleaded race fuel commonly used as a spec fuel.',
    bestFor: 'Spec-fuel classes (AMA Pro Flat Track) and UTV.',
    notes: '',
  },

  'MS100': {
    name: 'VP MOTORSPORT 100',
    color: 'Orange',
    type: 'Unleaded',
    octaneRM2: '100.3',
    mon: '94.5',
    ron: '106',
    specificGravity: '0.765',
    rvp: '6.79',
    oxygenated: '3.61%',
    shortDescription: 'Unleaded race fuel for pro-level SX & MX programs.',
    bestFor: 'AMA Pro SX & MX (two- and four-stroke).',
    notes: '',
  },

  'MS103': {
    name: 'VP MOTORSPORT 103',
    color: 'Red',
    type: 'Unleaded',
    octaneRM2: '103',
    mon: '98.5',
    ron: '107.5',
    specificGravity: '0.7422',
    rvp: '2.67',
    oxygenated: '2.59%',
    shortDescription: 'Higher-octane unleaded pro SX & MX fuel.',
    bestFor: 'AMA Pro SX & MX teams needing additional octane.',
    notes: '',
  },

  'MS109': {
    name: 'VP MOTORSPORT 109',
    color: 'Colorless',
    type: 'Unleaded',
    octaneRM2: '104',
    mon: '99',
    ron: '109',
    specificGravity: '0.725',
    rvp: '4.06',
    oxygenated: '9.32%',
    shortDescription: 'Popular highly-oxygenated unleaded fuel for amateur four-stroke.',
    bestFor: 'Amateur SX/MX & road race four-stroke; UTV.',
    notes: '',
  },

  'T4+': {
    name: 'VP T4+',
    color: 'Colorless',
    type: 'Unleaded',
    octaneRM2: '98.5',
    mon: '92',
    ron: '105',
    specificGravity: '0.7475',
    rvp: '7.47',
    oxygenated: '5.94%',
    shortDescription: 'Unleaded four-stroke fuel suited to spec and club racing.',
    bestFor: 'MotoAmerica spec applications and four-stroke club racing.',
    notes: '',
  },

  'VP Moto R': {
    name: 'VP MOTO R',
    color: 'Colorless',
    type: 'Unleaded',
    octaneRM2: '96',
    mon: '90',
    ron: '102',
    specificGravity: '0.751',
    rvp: '5.7',
    oxygenated: '3.70%',
    shortDescription: 'FIM-compliant racing fuel for international competition.',
    bestFor: 'FIM-sanctioned two- and four-stroke racing.',
    notes: 'Verify current FIM compliance for your series and season.',
  },

  'VP MGP R': {
    name: 'VP MGP R',
    color: 'Colorless',
    type: 'Unleaded',
    octaneRM2: '96',
    mon: '90',
    ron: '102',
    specificGravity: '0.738',
    rvp: '6.96',
    oxygenated: '2.70%',
    shortDescription: 'Premium road race fuel used in pro-level series.',
    bestFor: 'MotoAmerica and FIM road race programs.',
    notes: 'Verify current series compliance.',
  },

  'MR Pro 6': {
    name: 'VP MR PRO 6',
    color: 'Colorless',
    type: 'Unleaded',
    octaneRM2: '95',
    mon: '86',
    ron: '104',
    specificGravity: '0.725',
    rvp: '11.01',
    oxygenated: '3.89%',
    shortDescription: 'Professional motorcycle racing fuel from the MR Pro series.',
    bestFor: 'Pro and high-level amateur four-stroke racing.',
    notes: '',
  },

  'MR Pro 6 HT': {
    name: 'VP MR PRO 6 HT',
    color: 'Colorless',
    type: 'Unleaded',
    octaneRM2: '95',
    mon: '85.5',
    ron: '104.5',
    specificGravity: '0.7245',
    rvp: '9.81',
    oxygenated: '3.86%',
    shortDescription: 'High-temperature variant of MR Pro 6 for hot conditions.',
    bestFor: 'Pro four-stroke racing in high ambient temperatures.',
    notes: '',
  },

  'MR Pro 7': {
    name: 'VP MR PRO 7',
    color: 'Colorless',
    type: 'Unleaded',
    octaneRM2: '90.8',
    mon: '82.5',
    ron: '99.2',
    specificGravity: '0.729',
    rvp: '9.39',
    oxygenated: '3.90%',
    shortDescription: 'Top-tier MR Pro series fuel for maximum performance.',
    bestFor: 'Premier pro four-stroke racing programs.',
    notes: '',
  },

  'UTV96': {
    name: 'VP UTV96',
    color: 'Light Green',
    type: 'Unleaded',
    octaneRM2: '98.8',
    mon: '95.4',
    ron: '102.2',
    specificGravity: '0.715',
    rvp: '5.07',
    oxygenated: '3.76%',
    shortDescription: 'Purpose-built unleaded fuel for side-by-side / UTV engines.',
    bestFor: 'UTV / side-by-side racing and recreation.',
    notes: '',
  },

  // ------------------------------ NITRO ------------------------------------
  'VP Nitro': {
    name: 'VP Nitro',
    color: 'Amber to Yellow',
    type: 'Nitro',
    octaneRM2: '—',
    mon: '—',
    ron: '—',
    specificGravity: '1.136–1.142',
    rvp: '—',
    oxygenated: '—',
    shortDescription: 'Nitromethane fuel for specialized drag applications.',
    bestFor: 'NHRA spec nitro drag bike classes.',
    notes: 'Handle and store per all safety and class rules.',
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
      color: '—',
      type: 'TBD',
      octaneRM2: '—',
      mon: '—',
      ron: '—',
      specificGravity: '—',
      rvp: '—',
      oxygenated: '—',
      shortDescription: 'Details coming soon.',
      bestFor: 'TBD',
      notes: 'This fuel is referenced in the decision tree but not yet in fuelDatabase.js.',
    }
  )
}

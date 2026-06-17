/**
 * ============================================================================
 *  VP RACING FUEL FINDER — DECISION TREE  (decisionTree.js)
 * ============================================================================
 *
 *  WHAT THIS FILE IS
 *  -----------------
 *  This file describes EVERY question the wizard asks and EVERY recommendation
 *  it can give. The app reads this data and builds the questionnaire from it.
 *  There is NO branching logic hidden in the components — change the flow here
 *  and the website changes with it.
 *
 *  This flow mirrors VP Racing's official "Motorcycle / ATV / UTV Tech Flow
 *  Chart" exactly: Two-Stroke / Four-Stroke at the top, then category, then a
 *  couple of follow-ups for drag bikes, ending in a recommended fuel or group.
 *
 *  HOW THE TREE WORKS
 *  ------------------
 *  The flow is a set of "nodes". Each node has an `id` and a `type`.
 *
 *    type: "question"  -> shows a question with buttons (options).
 *                         Each option has a `label` (the button text) and a
 *                         `next` value (the id of the node to go to when the
 *                         customer picks it).
 *
 *    type: "result"    -> the end of a path. Shows the recommended fuel(s).
 *                         `fuels` is a list of fuel CODES that must match keys
 *                         in fuelDatabase.js. `headline`, `explanation`, and
 *                         the optional `tag` are friendly text for the card.
 *
 *  The wizard always begins at the node named in `startNodeId` below.
 *
 *  HOW TO EDIT (no coding experience required)
 *  -------------------------------------------
 *  • Change a question:  edit the `question` text.
 *  • Change a button:    edit the option's `label`.
 *  • Change where a button leads: edit the option's `next` to another node id.
 *  • Change a recommendation: edit the `fuels` list (use codes from
 *                             fuelDatabase.js) and/or the `explanation`.
 *  • Add a branch: create a new node with a unique id and point an option's
 *    `next` at it.
 *
 *  Keep quotes, commas, and braces intact. Save the file and the site reloads
 *  automatically while `npm run dev` is running.
 *
 *  ⚠️  Every fuel code below must exist in fuelDatabase.js. If it doesn't, the
 *      result card shows a "coming soon" placeholder instead of crashing.
 * ============================================================================
 */

export const startNodeId = 'engineType'

export const decisionTree = {
  // ---------------------------------------------------------------------
  // STEP 1 — Engine type  (top of the flow chart)
  // ---------------------------------------------------------------------
  engineType: {
    id: 'engineType',
    type: 'question',
    question: 'What type of engine?',
    helpText: 'Start with how your engine is built.',
    options: [
      { label: 'Two Stroke', next: 'twoStrokeCategory' },
      { label: 'Four Stroke', next: 'fourStrokeCategory' },
    ],
  },

  // ---------------------------------------------------------------------
  // TWO STROKE PATH
  // ---------------------------------------------------------------------
  twoStrokeCategory: {
    id: 'twoStrokeCategory',
    type: 'question',
    question: 'Which category are you racing?',
    helpText: 'Pick the level or sanctioning body that fits you.',
    options: [
      { label: 'Amateur', next: 'twoStrokeAmateur' },
      { label: 'AMA Pro SX & MX', next: 'twoStrokeAmaPro' },
      { label: 'FIM', next: 'twoStrokeFim' },
    ],
  },

  twoStrokeAmateur: {
    id: 'twoStrokeAmateur',
    type: 'result',
    tag: 'Stock or Modified',
    headline: 'Amateur Two-Stroke Fuels',
    explanation:
      'Whether your engine is stock or modified, these cover the most popular amateur two-stroke setups. Choose based on your compression, your budget, and any rules for your class.',
    fuels: ['T2+', 'C12', 'MRX02', 'U4.4', 'VPR'],
  },

  twoStrokeAmaPro: {
    id: 'twoStrokeAmaPro',
    type: 'result',
    headline: 'AMA Pro SX & MX Two-Stroke Fuels',
    explanation:
      'Pro-level fuels developed for the demands of AMA Supercross and Motocross competition.',
    fuels: ['MS100', 'MS103', 'MR Pro 6', 'MR Pro 6 HT', 'MR Pro 7'],
  },

  twoStrokeFim: {
    id: 'twoStrokeFim',
    type: 'result',
    headline: 'FIM Two-Stroke Fuel',
    explanation:
      'For FIM-sanctioned competition, run the FIM-compliant fuel. Always confirm current compliance for your series and season.',
    fuels: ['VP Moto R'],
  },

  // ---------------------------------------------------------------------
  // FOUR STROKE PATH
  // ---------------------------------------------------------------------
  fourStrokeCategory: {
    id: 'fourStrokeCategory',
    type: 'question',
    question: 'Which category are you racing?',
    helpText: 'Pick the sanctioning body, class, or application that fits you.',
    options: [
      { label: 'AMA Pro Flat Track', next: 'fsFlatTrack' },
      { label: 'FIM', next: 'fsFim' },
      { label: 'AMA Pro SX & MX', next: 'fsAmaPro' },
      { label: 'Amateur SX & MX / Road Race', next: 'fsAmateur' },
      { label: 'MotoAmerica', next: 'fsMotoAmerica' },
      { label: 'UTV', next: 'fsUtv' },
      { label: 'Drag Bike', next: 'fsDragType' },
    ],
  },

  fsFlatTrack: {
    id: 'fsFlatTrack',
    type: 'result',
    tag: 'Spec Fuel',
    headline: 'AMA Pro Flat Track Spec Fuel',
    explanation: 'The spec fuel for AMA Pro Flat Track competition.',
    fuels: ['C10'],
  },

  fsFim: {
    id: 'fsFim',
    type: 'result',
    headline: 'FIM Four-Stroke Fuels',
    explanation:
      'FIM-compliant options for international four-stroke competition. Confirm current compliance for your series.',
    fuels: ['VP Moto R', 'VP MGP R'],
  },

  fsAmaPro: {
    id: 'fsAmaPro',
    type: 'result',
    headline: 'AMA Pro SX & MX Four-Stroke Fuels',
    explanation:
      'Pro-level fuels built for AMA Supercross and Motocross four-stroke programs.',
    fuels: ['MS100', 'MS103', 'MR Pro 6', 'MR Pro 6 HT', 'MR Pro 7'],
  },

  fsAmateur: {
    id: 'fsAmateur',
    type: 'result',
    headline: 'Amateur SX & MX / Road Race Fuels',
    explanation:
      'A broad set of options for amateur four-stroke MX and road race. Match the fuel to your compression and your class rules.',
    fuels: ['MS109', 'U4.4', 'MR12', 'MRX02', 'MR Pro 6', 'MR Pro 6 HT', 'MR Pro 7'],
  },

  fsMotoAmerica: {
    id: 'fsMotoAmerica',
    type: 'result',
    tag: 'Spec Fuel',
    headline: 'MotoAmerica Spec Fuels',
    explanation: 'Spec fuel options for MotoAmerica road racing.',
    fuels: ['VP MGP R', 'T4+'],
  },

  // --- UTV (no fuel-rule follow-up on the official chart) --------------
  fsUtv: {
    id: 'fsUtv',
    type: 'result',
    headline: 'UTV Fuels',
    explanation:
      'Strong options for UTV / side-by-side racing. Confirm any specific class requirements.',
    fuels: ['UTV96', 'MS109', 'C10'],
  },

  // --- Drag bike follow-ups -------------------------------------------
  fsDragType: {
    id: 'fsDragType',
    type: 'question',
    question: 'Is this NHRA Spec or Other?',
    helpText: 'NHRA-sanctioned classes have specific fuel requirements.',
    options: [
      { label: 'NHRA Spec', next: 'fsDragNhra' },
      { label: 'Other', next: 'fsDragOtherRule' },
    ],
  },

  fsDragNhra: {
    id: 'fsDragNhra',
    type: 'result',
    headline: 'NHRA Spec Drag Bike Fuels',
    explanation: 'Fuels suited to NHRA spec drag bike classes.',
    fuels: ['C25', 'VP Nitro'],
  },

  fsDragOtherRule: {
    id: 'fsDragOtherRule',
    type: 'question',
    question: 'With or without a fuel rule?',
    helpText: 'A fuel rule limits what you are allowed to run.',
    options: [
      { label: 'With a fuel rule', next: 'fsDragWithRule' },
      { label: 'Without a fuel rule (Outlaw)', next: 'fsDragNoRule' },
    ],
  },

  fsDragWithRule: {
    id: 'fsDragWithRule',
    type: 'result',
    tag: 'Fuel Rule / Other',
    headline: 'Drag Bike Fuels (with a fuel rule)',
    explanation: 'Leaded options for drag classes that enforce a fuel rule.',
    fuels: ['C12', 'C14'],
  },

  fsDragNoRule: {
    id: 'fsDragNoRule',
    type: 'result',
    tag: 'Outlaw',
    headline: 'Drag Bike Fuels (no fuel rule)',
    explanation:
      'Maximum-effort options for no-fuel-rule / outlaw classes. Match to your engine build and tuning.',
    fuels: ['Q16', 'U4.4', 'MR12', 'MRX02'],
  },
}

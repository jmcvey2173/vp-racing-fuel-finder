/**
 * ============================================================================
 *  VP RACING FUEL FINDER — RACING CATEGORIES  (categories.js)
 * ============================================================================
 *
 *  WHAT THIS FILE IS
 *  -----------------
 *  The list of racing categories shown on the landing screen. Each category
 *  is its own "flow chart." The customer picks one, and the wizard then walks
 *  the questions for that category's decision tree.
 *
 *  Today only POWERSPORTS has a built flow (see decisionTree.js). Drag Racing
 *  and Circle Track are placeholders marked "coming-soon" until their flow
 *  charts are added.
 *
 *  HOW TO ADD A NEW CATEGORY LATER
 *  -------------------------------
 *  1. Build its decision tree in a new data file (copy decisionTree.js).
 *  2. Import its `decisionTree` + `startNodeId` here.
 *  3. Flip the category below from "coming-soon" to "available" and point its
 *     `tree` / `startNode` at the imported tree.
 *
 *  FIELD MEANINGS
 *  --------------
 *  id        Unique key for the category.
 *  name      Title shown on the category card.
 *  blurb     One-line description under the title.
 *  status    "available" (has a flow) or "coming-soon" (placeholder).
 *  tree      The decision-tree object (available categories only).
 *  startNode The id of the first question in that tree.
 * ============================================================================
 */

import { decisionTree, startNodeId } from './decisionTree.js'

export const categories = [
  {
    id: 'powersports',
    name: 'Powersports',
    blurb: 'Motorcycle, ATV, UTV & drag bike',
    status: 'available',
    tree: decisionTree,
    startNode: startNodeId,
  },
  {
    id: 'drag-racing',
    name: 'Drag Racing',
    blurb: 'Door cars, dragsters & more',
    status: 'coming-soon',
  },
  {
    id: 'circle-track',
    name: 'Circle Track',
    blurb: 'Oval, dirt & asphalt circle track',
    status: 'coming-soon',
  },
]

/** Look up a category by id (null if not found / none selected). */
export function getCategory(id) {
  return categories.find((c) => c.id === id) || null
}

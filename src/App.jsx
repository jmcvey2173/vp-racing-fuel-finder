import { useState } from 'react'
import { decisionTree, startNodeId } from './data/decisionTree.js'
import QuestionCard from './components/QuestionCard.jsx'
import ResultCard from './components/ResultCard.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import vpLogo from './assets/vp-racing-logo.png'

/**
 * App
 * ---
 * Top-level component. It walks the customer through the decision tree defined
 * in src/data/decisionTree.js. All branching lives in the data, not here — this
 * component just tracks which node we are on and renders the right card.
 *
 * State model:
 *   history = an ordered list of node ids the customer has visited.
 *             The LAST id is the current screen. "Back" pops it; "Restart"
 *             resets to just the start node.
 */
export default function App() {
  const [history, setHistory] = useState([startNodeId])

  const currentId = history[history.length - 1]
  const currentNode = decisionTree[currentId]

  // Move forward to the next node when an option is chosen.
  const goToNode = (nextId) => {
    setHistory((prev) => [...prev, nextId])
  }

  // Go back one step (disabled on the first question).
  const goBack = () => {
    setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))
  }

  // Start over from the beginning.
  const restart = () => {
    setHistory([startNodeId])
  }

  const isResult = currentNode?.type === 'result'

  // Progress estimate: questions answered so far + how many more questions
  // remain on the longest path from here. Purely for the progress indicator.
  const answeredQuestions = history.filter(
    (id) => decisionTree[id]?.type === 'question',
  ).length
  const remaining = remainingDepth(currentId)
  const estimatedTotal = (isResult ? answeredQuestions : answeredQuestions) + remaining
  const currentStep = isResult ? answeredQuestions : answeredQuestions

  return (
    <div className="app">
      <header className="hero">
        <div className="hero__brand">
          <img
            className="hero__logo"
            src={vpLogo}
            alt="VP Racing Fuels"
            width="150"
            height="125"
          />
        </div>
        <p className="hero__eyebrow">Race Fuel Finder</p>
        <h1 className="hero__headline">Find Your Winning Fuel</h1>
        <p className="hero__subhead">
          Answer a few quick questions and get a VP Racing fuel recommendation
          dialed in for your motorcycle, ATV, UTV, or drag bike.
        </p>
        <div className="checker-strip" aria-hidden="true" />
      </header>

      <main className="wizard">
        <ProgressBar
          current={Math.max(currentStep, 1)}
          total={Math.max(estimatedTotal, 1)}
          isResult={isResult}
        />

        {currentNode ? (
          isResult ? (
            <ResultCard node={currentNode} onRestart={restart} />
          ) : (
            <QuestionCard node={currentNode} onSelect={goToNode} />
          )
        ) : (
          <div className="card">
            <p>
              Something went wrong loading this step. Please restart the finder.
            </p>
          </div>
        )}

        <div className="wizard__nav">
          <button
            type="button"
            className="nav-button"
            onClick={goBack}
            disabled={history.length <= 1}
          >
            ← Back
          </button>
          <button type="button" className="nav-button" onClick={restart}>
            ↺ Restart
          </button>
        </div>
      </main>

      <footer className="site-footer">
        <p className="disclaimer disclaimer--footer">
          This Fuel Finder is a guide only. Specs are from VP Racing's
          Motorcycle / ATV / UTV tech chart. Final fuel selection and current
          class/series compliance should be confirmed with VP Racing or your
          engine builder.
        </p>
        <p className="site-footer__note">
          VP Racing Fuel Finder · Prototype · Not affiliated with checkout or
          inventory yet.
        </p>
      </footer>
    </div>
  )
}

/**
 * remainingDepth
 * --------------
 * Counts how many more QUESTIONS lie on the longest path from a given node to
 * a result. Used only to estimate the progress bar. Pure function over the
 * decision tree data — no UI side effects.
 */
function remainingDepth(nodeId, visited = new Set()) {
  const node = decisionTree[nodeId]
  if (!node || node.type === 'result') return 0
  if (visited.has(nodeId)) return 0
  visited.add(nodeId)

  let deepest = 0
  for (const option of node.options || []) {
    deepest = Math.max(deepest, remainingDepth(option.next, new Set(visited)))
  }
  // +1 counts this question itself.
  return 1 + deepest
}

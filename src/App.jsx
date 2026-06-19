import { useState, useRef, useEffect } from 'react'
import { categories, getCategory } from './data/categories.js'
import CategoryPicker from './components/CategoryPicker.jsx'
import ComingSoon from './components/ComingSoon.jsx'
import QuestionCard from './components/QuestionCard.jsx'
import ResultCard from './components/ResultCard.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import vpLogo from './assets/vp-racing-logo.png'

/**
 * App
 * ---
 * Top-level component. First the customer picks a racing category (see
 * src/data/categories.js). For an "available" category we then walk its
 * decision tree; "coming-soon" categories show a placeholder screen.
 *
 * All branching lives in the data, not here — this component just tracks which
 * category and which node we are on, and renders the right screen.
 *
 * State model:
 *   categoryId = the chosen category, or null to show the category picker.
 *   history    = ordered node ids visited within that category's tree. The
 *                LAST id is the current screen. "Back" pops it; "Restart"
 *                resets to the category's first question.
 */
export default function App() {
  const [categoryId, setCategoryId] = useState(null)
  const [history, setHistory] = useState([])

  const category = getCategory(categoryId)
  const tree = category?.tree ?? null

  const currentId = history[history.length - 1]
  const currentNode = tree ? tree[currentId] : null
  const isResult = currentNode?.type === 'result'

  // -- category + wizard navigation ------------------------------------
  const pickCategory = (cat) => {
    setCategoryId(cat.id)
    setHistory(
      cat.status === 'available' && cat.startNode ? [cat.startNode] : [],
    )
  }

  const backToCategories = () => {
    setCategoryId(null)
    setHistory([])
  }

  // Move forward to the next node when an option is chosen.
  const goToNode = (nextId) => setHistory((prev) => [...prev, nextId])

  // Back: step back one question, or out to the category picker at step one.
  const goBack = () => {
    if (history.length > 1) setHistory((prev) => prev.slice(0, -1))
    else backToCategories()
  }

  // Jump back to an earlier question to change that answer.
  const goToStep = (index) => setHistory((prev) => prev.slice(0, index + 1))

  // Restart the current category's questions from the top.
  const restart = () => {
    if (category?.startNode) setHistory([category.startNode])
  }

  // Build the trail of answers chosen so far (for the result recap).
  const selections = []
  if (tree) {
    for (let i = 0; i < history.length - 1; i++) {
      const node = tree[history[i]]
      if (node?.type === 'question') {
        const option = (node.options || []).find(
          (o) => o.next === history[i + 1],
        )
        selections.push({ answer: option?.label ?? '—', index: i })
      }
    }
  }

  // Progress estimate (questions answered + longest path remaining).
  const answeredQuestions = tree
    ? history.filter((id) => tree[id]?.type === 'question').length
    : 0
  const remaining = tree ? remainingDepth(tree, currentId) : 0
  const estimatedTotal = answeredQuestions + remaining
  const currentStep = answeredQuestions

  const showWizard = category?.status === 'available' && currentNode
  const showComingSoon = category && category.status !== 'available'

  // Accessibility: move focus to the active screen's heading on each
  // transition so keyboard / screen-reader users follow along. Skip the very
  // first render so we don't yank focus on page load.
  const headingRef = useRef(null)
  const firstRender = useRef(true)
  const screenKey = `${categoryId ?? 'home'}:${currentId ?? ''}`
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    headingRef.current?.focus()
  }, [screenKey])

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
          Pick your racing category and answer a few quick questions to get a
          VP Racing fuel recommendation.
        </p>
        <div className="checker-strip" aria-hidden="true" />
      </header>

      <main className="wizard">
        {!category && (
          <CategoryPicker
            categories={categories}
            onSelect={pickCategory}
            headingRef={headingRef}
          />
        )}

        {showComingSoon && (
          <ComingSoon
            category={category}
            onBack={backToCategories}
            headingRef={headingRef}
          />
        )}

        {showWizard && (
          <>
            <button
              type="button"
              className="back-link"
              onClick={backToCategories}
            >
              ‹ All Categories
            </button>

            <ProgressBar
              current={Math.max(currentStep, 1)}
              total={Math.max(estimatedTotal, 1)}
              isResult={isResult}
            />

            {isResult ? (
              <ResultCard
                node={currentNode}
                selections={selections}
                onEditStep={goToStep}
                onRestart={restart}
                headingRef={headingRef}
              />
            ) : (
              <QuestionCard
                node={currentNode}
                onSelect={goToNode}
                headingRef={headingRef}
              />
            )}

            <div className="wizard__nav">
              <button type="button" className="nav-button" onClick={goBack}>
                ← Back
              </button>
              <button type="button" className="nav-button" onClick={restart}>
                ↺ Restart
              </button>
            </div>
          </>
        )}

        {category?.status === 'available' && !currentNode && (
          <div className="card">
            <p>
              Something went wrong loading this step. Please restart the finder.
            </p>
            <button
              type="button"
              className="nav-button"
              onClick={backToCategories}
            >
              ‹ All Categories
            </button>
          </div>
        )}
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
 * a result, within the supplied tree. Used only to estimate the progress bar.
 */
function remainingDepth(tree, nodeId, visited = new Set()) {
  const node = tree[nodeId]
  if (!node || node.type === 'result') return 0
  if (visited.has(nodeId)) return 0
  visited.add(nodeId)

  let deepest = 0
  for (const option of node.options || []) {
    deepest = Math.max(deepest, remainingDepth(tree, option.next, new Set(visited)))
  }
  // +1 counts this question itself.
  return 1 + deepest
}

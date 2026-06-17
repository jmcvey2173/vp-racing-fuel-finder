/**
 * ProgressBar
 * -----------
 * Thin presentational component for the wizard progress indicator. It does NOT
 * know anything about the decision tree — App.jsx computes `current` / `total`
 * and passes them in. When the customer reaches a recommendation, `isResult`
 * flips the label to "Complete".
 *
 * Props:
 *   current  {number}  steps completed (1-based for display)
 *   total    {number}  best estimate of total steps on this path
 *   isResult {boolean} true once we are on a recommendation screen
 */
export default function ProgressBar({ current, total, isResult }) {
  // Clamp so the bar never overflows or shows a negative width.
  const safeTotal = Math.max(total, 1)
  const safeCurrent = Math.min(Math.max(current, 0), safeTotal)
  const pct = isResult ? 100 : Math.round((safeCurrent / safeTotal) * 100)

  return (
    <div className="progress">
      <div className="progress__labels">
        <span>{isResult ? 'Your Recommendation' : 'Fuel Finder'}</span>
        <span className="progress__step">
          {isResult ? 'Complete' : `Step ${safeCurrent} of ${safeTotal}`}
        </span>
      </div>
      <div
        className="progress__track"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

import { getFuel } from '../data/fuelDatabase.js'
import FuelBadge from './FuelBadge.jsx'

/**
 * ResultCard
 * ----------
 * The end of a path. Takes a "result" node from the decision tree, looks each
 * fuel CODE up in fuelDatabase.js, and renders a card per recommended fuel.
 *
 * All wording comes from the data:
 *   - node.headline / node.explanation  -> friendly intro (optional)
 *   - node.fuels                        -> list of fuel codes to display
 *
 * Props:
 *   node      {object}   a decision-tree node with type === 'result'
 *   onRestart {function} called when the customer wants to start over
 */
export default function ResultCard({ node, onRestart }) {
  const codes = node.fuels || []

  return (
    <div className="result">
      <div className="result__header">
        <p className="result__eyebrow">Recommended Fuel</p>
        <h2 className="result__headline">
          {node.headline || 'Your VP Racing Fuel Recommendation'}
        </h2>
        {node.explanation && (
          <p className="result__explanation">{node.explanation}</p>
        )}
      </div>

      <div className="result__grid">
        {codes.map((code) => (
          <FuelCard key={code} code={code} fuel={getFuel(code)} />
        ))}
      </div>

      <div className="result__actions">
        <a
          className="cta-button cta-button--primary"
          href="https://vpracingfuels.com/contact/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact VP Racing
        </a>
        <button
          type="button"
          className="cta-button cta-button--ghost"
          onClick={onRestart}
        >
          Start Over
        </button>
      </div>

      <p className="disclaimer">
        <strong>Guide only.</strong> This recommendation is a starting point.
        Confirm your final fuel choice with VP Racing, your race series rules,
        or your engine builder. Specs shown here are placeholders for this
        sandbox demo.
      </p>
    </div>
  )
}

/**
 * FuelCard — internal helper that renders one fuel's name, description,
 * attribute badges, and spec list. Kept in this file because it is only used
 * by ResultCard.
 */
function FuelCard({ code, fuel }) {
  const leadTone = /unleaded/i.test(fuel.leadedUnleaded) ? 'blue' : 'red'
  const isOxygenated = /^yes/i.test(fuel.oxygenated)

  return (
    <article className="card fuel-card">
      <div className="fuel-card__head">
        <h3 className="fuel-card__name">{fuel.name}</h3>
        <span className="fuel-card__code">{code}</span>
      </div>

      <p className="fuel-card__desc">{fuel.shortDescription}</p>

      <div className="fuel-card__badges">
        <FuelBadge label={fuel.leadedUnleaded} tone={leadTone} />
        {isOxygenated && <FuelBadge label="Oxygenated" tone="red" />}
      </div>

      <dl className="fuel-card__specs">
        <div className="fuel-card__spec">
          <dt>Best For</dt>
          <dd>{fuel.bestFor}</dd>
        </div>
        <div className="fuel-card__spec">
          <dt>Oxygenated</dt>
          <dd>{fuel.oxygenated}</dd>
        </div>
        <div className="fuel-card__spec">
          <dt>Notes</dt>
          <dd>{fuel.notes}</dd>
        </div>
      </dl>
    </article>
  )
}

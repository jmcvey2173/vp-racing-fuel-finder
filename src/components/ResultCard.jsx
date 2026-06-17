import { getFuel } from '../data/fuelDatabase.js'
import FuelBadge from './FuelBadge.jsx'

/**
 * ResultCard
 * ----------
 * The end of a path. Takes a "result" node from the decision tree, looks each
 * fuel CODE up in fuelDatabase.js, and renders a card per recommended fuel
 * with its real VP Racing specs.
 *
 * All wording comes from the data:
 *   - node.tag (optional)               -> small eyebrow (e.g. "Spec Fuel")
 *   - node.headline / node.explanation  -> friendly intro
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
        <p className="result__eyebrow">{node.tag || 'Recommended Fuel'}</p>
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
        <strong>Guide only.</strong> Specs are from VP Racing's Motorcycle /
        ATV / UTV tech chart. Confirm your final fuel choice and current
        class/series compliance with VP Racing or your engine builder.
      </p>
    </div>
  )
}

/* Map the chart's fuel colors to a swatch color. "Colorless" shows a clear
   dot; anything unknown shows nothing. */
const COLOR_SWATCH = {
  Yellow: '#f2c200',
  Green: '#36b24a',
  'Light Green': '#8fd14f',
  Blue: '#2f86e0',
  Orange: '#f08a24',
  Red: '#e2231a',
  Colorless: 'transparent',
  'Amber to Yellow': 'linear-gradient(135deg, #f0a83a, #f2c200)',
}

/**
 * FuelCard — internal helper that renders one fuel's name, badges, the
 * headline (R+M)/2 octane, a compact spec grid, and the application note.
 */
function FuelCard({ code, fuel }) {
  const typeTone =
    fuel.type === 'Leaded' ? 'red' : fuel.type === 'Unleaded' ? 'blue' : 'neutral'

  // Oxygenated badge only when there is a meaningful, non-zero value.
  const oxy = (fuel.oxygenated || '').trim()
  const isOxygenated = oxy && oxy !== '0%' && oxy !== '—' && oxy !== 'TBD'

  const swatch = COLOR_SWATCH[fuel.color]

  return (
    <article className="card fuel-card">
      <div className="fuel-card__head">
        <h3 className="fuel-card__name">{fuel.name}</h3>
        <span className="fuel-card__code">{code}</span>
      </div>

      <div className="fuel-card__badges">
        <FuelBadge label={fuel.type} tone={typeTone} />
        {isOxygenated && <FuelBadge label={`Oxygenated ${oxy}`} tone="red" />}
      </div>

      <p className="fuel-card__desc">{fuel.shortDescription}</p>

      <div className="fuel-card__octane">
        <span className="fuel-card__octane-value">{fuel.octaneRM2}</span>
        <span className="fuel-card__octane-label">Octane (R+M)/2</span>
      </div>

      <dl className="fuel-card__spec-grid">
        <Spec label="MON" value={fuel.mon} />
        <Spec label="RON" value={fuel.ron} />
        <Spec label="Spec Gravity" value={fuel.specificGravity} />
        <Spec label="RVP" value={fuel.rvp} />
        <Spec label="Oxygen" value={fuel.oxygenated} />
        <Spec
          label="Color"
          value={
            <span className="fuel-color">
              {swatch !== undefined && (
                <span
                  className="fuel-color__dot"
                  style={{ background: swatch }}
                  aria-hidden="true"
                />
              )}
              {fuel.color}
            </span>
          }
        />
      </dl>

      <dl className="fuel-card__specs">
        <div className="fuel-card__spec">
          <dt>Best For</dt>
          <dd>{fuel.bestFor}</dd>
        </div>
        {fuel.notes ? (
          <div className="fuel-card__spec">
            <dt>Notes</dt>
            <dd>{fuel.notes}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  )
}

/** One labelled spec cell in the compact grid. */
function Spec({ label, value }) {
  return (
    <div className="fuel-card__spec">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  )
}

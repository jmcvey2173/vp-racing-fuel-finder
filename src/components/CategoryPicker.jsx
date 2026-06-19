/**
 * CategoryPicker
 * --------------
 * The landing screen. Shows one card per racing category. Picking a card
 * calls `onSelect(category)` — App decides whether to start that category's
 * wizard or show a "coming soon" screen.
 *
 * Holds no logic about which categories exist or whether they're ready; that
 * all lives in src/data/categories.js.
 *
 * Props:
 *   categories {array}    the list of categories to show
 *   onSelect   {function} called with the chosen category
 *   headingRef {ref}      focused when this screen appears (accessibility)
 */
export default function CategoryPicker({ categories, onSelect, headingRef }) {
  return (
    <div className="category-picker">
      <h2 className="category-picker__title" ref={headingRef} tabIndex={-1}>
        Choose your racing category
      </h2>
      <p className="category-picker__help">
        Pick the type of racing you do to start the fuel finder.
      </p>

      <div className="category-grid">
        {categories.map((cat) => {
          const soon = cat.status !== 'available'
          return (
            <button
              key={cat.id}
              type="button"
              className={`category-card ${
                soon ? 'category-card--soon' : 'category-card--available'
              }`}
              onClick={() => onSelect(cat)}
            >
              <span className="category-card__name">{cat.name}</span>
              <span className="category-card__blurb">{cat.blurb}</span>
              {soon ? (
                <span className="category-card__soon-badge">Coming Soon</span>
              ) : (
                <span className="category-card__cta">
                  Start <span aria-hidden="true">→</span>
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/**
 * ComingSoon
 * ----------
 * Shown when the customer picks a category whose flow chart isn't built yet
 * (Drag Racing, Circle Track). Lets them head back to the category picker.
 *
 * Props:
 *   category   {object}   the chosen category (for its name)
 *   onBack     {function} return to the category picker
 *   headingRef {ref}      focused when this screen appears (accessibility)
 */
export default function ComingSoon({ category, onBack, headingRef }) {
  return (
    <div className="coming-soon">
      <button type="button" className="back-link" onClick={onBack}>
        ‹ All Categories
      </button>

      <div className="coming-soon__panel">
        <span className="coming-soon__badge">Coming Soon</span>
        <h2 className="coming-soon__title" ref={headingRef} tabIndex={-1}>
          {category.name}
        </h2>
        <p className="coming-soon__text">
          The {category.name} fuel finder isn’t ready yet — we’re still building
          this flow chart. Check back soon, or try the Powersports finder in the
          meantime.
        </p>
        <button
          type="button"
          className="cta-button cta-button--primary"
          onClick={onBack}
        >
          Choose another category
        </button>
      </div>
    </div>
  )
}

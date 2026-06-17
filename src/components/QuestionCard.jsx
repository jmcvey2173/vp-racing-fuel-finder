/**
 * QuestionCard
 * ------------
 * Renders a single "question" node from the decision tree: the question text,
 * optional help text, and one button per option. Picking an option calls
 * `onSelect(option.next)` so App.jsx can advance to the next node.
 *
 * This component holds NO branching logic — it only displays whatever options
 * the data gives it. Edit questions/options in src/data/decisionTree.js.
 *
 * Props:
 *   node     {object}   a decision-tree node with type === 'question'
 *   onSelect {function} called with the chosen option's `next` node id
 */
export default function QuestionCard({ node, onSelect }) {
  return (
    <div className="card question-card">
      <h2 className="question-card__title">{node.question}</h2>
      {node.helpText && <p className="question-card__help">{node.helpText}</p>}

      <div className="question-card__options">
        {(node.options || []).map((option) => (
          <button
            key={option.next + option.label}
            type="button"
            className="option-button"
            onClick={() => onSelect(option.next)}
          >
            <span>{option.label}</span>
            <span className="option-button__arrow" aria-hidden="true">
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

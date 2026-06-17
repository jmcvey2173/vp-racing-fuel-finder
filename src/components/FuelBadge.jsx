/**
 * FuelBadge
 * ---------
 * Small pill used on a fuel card to highlight an attribute such as
 * "Leaded" / "Unleaded" or "Oxygenated". Purely presentational.
 *
 * Props:
 *   label {string} text shown inside the pill
 *   tone  {'red' | 'blue' | 'neutral'} color variant (default 'neutral')
 */
export default function FuelBadge({ label, tone = 'neutral' }) {
  if (!label) return null
  const toneClass =
    tone === 'red'
      ? 'fuel-badge--red'
      : tone === 'blue'
        ? 'fuel-badge--blue'
        : 'fuel-badge--neutral'

  return <span className={`fuel-badge ${toneClass}`}>{label}</span>
}

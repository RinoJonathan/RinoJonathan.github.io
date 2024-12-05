import './AuroraButton.css'

export default function AuroraButton() {
  return (
    <button className="auroraButton">
      <span className="auroraButton__inner z-50">
        <span className="auroraButton__label" data-label="Get in touch" data-hover="Go for it 💪">
          Get in touch
          <span className="auroraButton__labelBackground"></span>
        </span>
      </span>
      <span className="auroraButton__background"></span>
    </button>
  )
}

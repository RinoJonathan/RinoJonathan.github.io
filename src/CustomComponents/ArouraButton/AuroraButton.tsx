
import './AuroraButton.css'

interface AuroraButtonProp {
  text: string
}

export default function AuroraButton({text} : AuroraButtonProp)  {
  return (
    <button className="auroraButton">
      <span className="auroraButton__inner ">
        <span className="auroraButton__label" data-label={text} data-hover={text}>
          Get in touch
          <span className="auroraButton__labelBackground"></span>
        </span>
      </span>
      <span className="auroraButton__background"></span>
    </button>
  )
}

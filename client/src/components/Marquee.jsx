const items = ['Website Building','Poster Design','Digital Marketing','AI Videography','Cinematic Video','Photography']
const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div className="mq-wrap">
      <div className="mq-track">
        {doubled.map((item, i) => (
          <span className="m-item" key={i}>
            <span className="m-gem"></span>{item}
          </span>
        ))}
      </div>
    </div>
  )
}

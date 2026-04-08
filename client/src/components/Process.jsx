const steps = [
  { n:'01', h:'Discover', p:'An intimate deep-dive into your brand, audience, and ambitions. We ask the questions others skip — and truly listen.' },
  { n:'02', h:'Conceive', p:'Where strategy meets artistry. We craft a creative direction that is bold, purposeful, and unmistakably you.' },
  { n:'03', h:'Create',   p:'Our multidisciplinary atelier brings the vision to luminous life with uncompromising attention to every detail.' },
  { n:'04', h:'Launch',   p:'We deliver, refine, and ensure every project performs as brilliantly as it looks — and endures as long as the stars.' },
]

export default function Process() {
  return (
    <section className="proc-bg" id="process">
      <div className="orn">
        <div className="orn-line"></div><div className="orn-dia"></div>
        <div className="orn-txt">How We Work</div>
        <div className="orn-dia"></div><div className="orn-line"></div>
      </div>
      <h2 className="s-title reveal">The art of our<br /><em>creative process</em></h2>
      <div className="steps">
        {steps.map(s => (
          <div className="step-item reveal" key={s.n}>
            <div className="step-n">{s.n}</div>
            <div className="step-gem"></div>
            <div className="step-h">{s.h}</div>
            <div className="step-p">{s.p}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

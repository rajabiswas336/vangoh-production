import { useEffect, useRef } from 'react'

const projects = [
  { id:'wA', cat:'Cinematic Video',  title:'Starlight Brand Film',  bg:'var(--navy)',     hue:42  },
  { id:'wB', cat:'Web Design',       title:'Solaris Digital',       bg:'var(--blue-mid)', hue:220 },
  { id:'wC', cat:'Photography',      title:'Aura Campaign',         bg:'var(--blue-dark)',hue:210 },
  { id:'wD', cat:'AI Videography',   title:'Neon Futures',          bg:'var(--navy)',     hue:200 },
  { id:'wE', cat:'Poster Design',    title:'Eclipse Series',        bg:'#1c2850',         hue:230 },
]

function WorkCell({ project, isFirst }) {
  const bgRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const el = bgRef.current
    if (!el) return
    const c = document.createElement('canvas')
    c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;opacity:.45;'
    el.prepend(c)
    canvasRef.current = c
    const cx = c.getContext('2d')
    let wt = Math.random() * 100, animId
    const hues = [project.hue, project.hue + 15, project.hue + 30]

    function drawC() {
      const w = c.width = el.offsetWidth, h = c.height = el.offsetHeight
      cx.clearRect(0,0,w,h); wt += .012
      for(let j=0;j<25;j++){
        const x=Math.random()*w, y=Math.random()*h, len=Math.random()*70+20
        const ang=Math.sin(x*.009+wt)*Math.PI+Math.cos(y*.009+wt*.65)*Math.PI
        const g=cx.createLinearGradient(x,y,x+Math.cos(ang)*len,y+Math.sin(ang)*len)
        const h1=hues[j%3], sat=project.hue===42?'70%':'55%'
        g.addColorStop(0,`hsla(${h1},${sat},60%,0)`)
        g.addColorStop(.5,`hsla(${h1},${sat},60%,.85)`)
        g.addColorStop(1,`hsla(${h1},${sat},60%,0)`)
        cx.strokeStyle=g; cx.lineWidth=Math.random()*3.5+.5; cx.lineCap='round'
        cx.beginPath(); cx.moveTo(x,y)
        cx.quadraticCurveTo(x+Math.cos(ang+.45)*len*.5,y+Math.sin(ang+.45)*len*.5,x+Math.cos(ang)*len,y+Math.sin(ang)*len)
        cx.stroke()
      }
      animId = requestAnimationFrame(drawC)
    }
    drawC()
    return () => { cancelAnimationFrame(animId); c.remove() }
  }, [])

  return (
    <div className="wi reveal" style={isFirst ? {gridRow:'1/3'} : {}}>
      <div className="wi-bg" ref={bgRef} style={{background: project.bg}} id={project.id}>
        <div className="wi-info">
          <div className="wi-cat">{project.cat}</div>
          <div className="wi-title">{project.title}</div>
        </div>
      </div>
      <div className="wi-ov"><span className="wi-view">View Project</span></div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work">
      <div className="orn">
        <div className="orn-line"></div><div className="orn-dia"></div>
        <div className="orn-txt">Portfolio</div>
        <div className="orn-dia"></div><div className="orn-line"></div>
      </div>
      <h2 className="s-title reveal">Work that <em>moves</em> people</h2>
      <div className="work-grid">
        {projects.map((p,i) => <WorkCell key={p.id} project={p} isFirst={i===0} />)}
      </div>
    </section>
  )
}

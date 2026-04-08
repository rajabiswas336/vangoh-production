import { useEffect, useRef } from 'react'

export default function DustCanvas() {
  const dcRef = useRef(null)

  useEffect(() => {
    const dc = dcRef.current
    const dx = dc.getContext('2d')
    const DUST = []
    let animId

    class Dust {
      constructor() { this.reset(); this.y = Math.random() * window.innerHeight }
      reset() {
        this.x=Math.random()*window.innerWidth; this.y=-5
        this.r=Math.random()*1.2+.2; this.vy=Math.random()*.4+.1
        this.vx=(Math.random()-.5)*.3; this.alpha=Math.random()*.6+.1
        this.tw=Math.random()*Math.PI*2; this.tws=Math.random()*.04+.01
      }
      update() {
        this.x+=this.vx; this.y+=this.vy; this.tw+=this.tws
        if(this.y>window.innerHeight+5) this.reset()
      }
      draw() {
        const a=this.alpha*(.5+.5*Math.sin(this.tw))
        dx.beginPath(); dx.arc(this.x,this.y,this.r,0,Math.PI*2)
        dx.fillStyle=`rgba(212,168,67,${a})`; dx.shadowColor='rgba(212,168,67,.8)'
        dx.shadowBlur=4; dx.fill(); dx.shadowBlur=0
      }
    }

    for(let i=0;i<180;i++) DUST.push(new Dust())

    function animDust() {
      dc.width=window.innerWidth; dc.height=window.innerHeight
      DUST.forEach(d=>{d.update();d.draw()})
      animId = requestAnimationFrame(animDust)
    }
    animDust()

    return () => cancelAnimationFrame(animId)
  }, [])

  return <canvas id="dust-canvas" ref={dcRef} />
}

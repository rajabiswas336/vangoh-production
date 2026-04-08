import { useEffect, useRef } from 'react'

export default function BgCanvas() {
  const bgRef = useRef(null)

  useEffect(() => {
    const bgC = bgRef.current
    const bgX = bgC.getContext('2d')
    let W, H, t = 0, animId
    const COL = ['#D4A843','#7B8FC4','#3D5A99','#243A72','#ffffff','#F0C866']
    const particles = [], strokes = []

    function resize() { W = bgC.width = window.innerWidth; H = bgC.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    class SP {
      constructor() { this.reset() }
      reset() {
        this.x=Math.random()*W; this.y=Math.random()*H; this.ox=this.x; this.oy=this.y
        this.r=Math.random()*1.8+.3; this.radius=Math.random()*150+30
        this.color=COL[Math.floor(Math.random()*COL.length)]
        this.alpha=Math.random()*.55+.08; this.life=0; this.maxLife=Math.random()*700+200
      }
      update() {
        this.life++; if(this.life>this.maxLife) this.reset()
        const nx=this.ox+Math.sin(this.ox*.007+t*.35)*this.radius
        const ny=this.oy+Math.cos(this.oy*.007+t*.28)*this.radius*.65
        this.x+=(nx-this.x)*.009; this.y+=(ny-this.y)*.009
      }
      draw() {
        bgX.beginPath(); bgX.arc(this.x,this.y,this.r,0,Math.PI*2)
        bgX.fillStyle=this.color; bgX.globalAlpha=this.alpha*(1-this.life/this.maxLife); bgX.fill()
      }
    }
    class SS {
      constructor() { this.reset(); this.life=Math.random()*this.maxLife }
      reset() {
        this.x=Math.random()*W; this.y=Math.random()*H
        this.len=Math.random()*90+25; this.angle=Math.random()*Math.PI*2
        this.color=COL[Math.floor(Math.random()*COL.length)]
        this.alpha=Math.random()*.18+.03; this.width=Math.random()*3+.5
        this.curv=(Math.random()-.5)*1.6; this.life=0; this.maxLife=150
      }
      update() {
        this.life++; if(this.life>this.maxLife) this.reset()
        this.angle+=this.curv*.02; this.x+=Math.cos(this.angle)*.4; this.y+=Math.sin(this.angle)*.4
      }
      draw() {
        const p=this.life/this.maxLife, f=p<.1?p*10:p>.9?(1-p)*10:1
        bgX.save(); bgX.globalAlpha=this.alpha*f; bgX.strokeStyle=this.color
        bgX.lineWidth=this.width; bgX.lineCap='round'; bgX.beginPath()
        bgX.moveTo(this.x,this.y)
        const ex=this.x+Math.cos(this.angle)*this.len, ey=this.y+Math.sin(this.angle)*this.len
        bgX.quadraticCurveTo(this.x+Math.cos(this.angle+.45)*this.len*.5,this.y+Math.sin(this.angle+.45)*this.len*.5,ex,ey)
        bgX.stroke(); bgX.restore()
      }
    }

    for(let i=0;i<750;i++) particles.push(new SP())
    for(let i=0;i<140;i++) strokes.push(new SS())

    function animBg() {
      bgX.clearRect(0,0,W,H); bgX.globalAlpha=1; t+=.007
      strokes.forEach(s=>{s.update();s.draw()})
      particles.forEach(p=>{p.update();p.draw()})
      animId = requestAnimationFrame(animBg)
    }
    animBg()

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas id="bg-canvas" ref={bgRef} />
}

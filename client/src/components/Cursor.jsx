import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef = useRef(null)
  const curRRef = useRef(null)

  useEffect(() => {
    const cur = curRef.current, curR = curRRef.current
    let mx=0, my=0, rx=0, ry=0, animId

    const onMove = e => {
      mx=e.clientX; my=e.clientY
      cur.style.transform=`translate(${mx-5}px,${my-5}px)`
    }
    document.addEventListener('mousemove', onMove)

    const la = () => {
      rx+=(mx-rx)*.1; ry+=(my-ry)*.1
      curR.style.transform=`translate(${rx-19}px,${ry-19}px)`
      animId = requestAnimationFrame(la)
    }
    la()

    const grow = () => { curR.style.width='62px'; curR.style.height='62px' }
    const shrink = () => { curR.style.width='38px'; curR.style.height='38px' }
    const targets = document.querySelectorAll('a,button,.svc,.wi')
    targets.forEach(el => { el.addEventListener('mouseenter',grow); el.addEventListener('mouseleave',shrink) })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      targets.forEach(el => { el.removeEventListener('mouseenter',grow); el.removeEventListener('mouseleave',shrink) })
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={curRef} />
      <div className="cursor-ring" ref={curRRef} />
    </>
  )
}

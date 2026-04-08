import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .rl, .rr, .step-item')
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('vis')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

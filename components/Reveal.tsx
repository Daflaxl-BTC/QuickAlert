'use client'

import { useEffect, useRef, useState } from 'react'
import type { ElementType, ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
  id?: string
}

export default function Reveal({ children, as, delay = 0, className = '', id }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      data-visible={visible ? 'true' : 'false'}
      style={{ '--qa-delay': `${delay}ms` } as React.CSSProperties}
      className={`qa-reveal ${className}`}
    >
      {children}
    </Tag>
  )
}

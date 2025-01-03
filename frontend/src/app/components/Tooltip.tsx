'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface TooltipProps {
    text: string
    children: React.ReactNode
}

export function Tooltip({ text, children }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [shouldRender, setShouldRender] = useState(false)
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const tooltipRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true)
            const updatePosition = () => {
                if (triggerRef.current) {
                    const rect = triggerRef.current.getBoundingClientRect()
                    const isMobile = window.innerWidth < 640

                    if (isMobile) {
                        setPosition({
                            top: rect.bottom + window.scrollY + 8,
                            left: Math.max(16, Math.min(
                                window.innerWidth / 2 - 140,
                                window.innerWidth - 296
                            ))
                        })
                    } else {
                        setPosition({
                            top: rect.top + window.scrollY - 8,
                            left: rect.right + window.scrollX + 8
                        })
                    }
                }
            }

            updatePosition()
            window.addEventListener('scroll', updatePosition)
            window.addEventListener('resize', updatePosition)

            return () => {
                window.removeEventListener('scroll', updatePosition)
                window.removeEventListener('resize', updatePosition)
            }
        } else {
            setPosition(null)
            const timeout = setTimeout(() => setShouldRender(false), 100)
            return () => clearTimeout(timeout)
        }
    }, [isVisible])

    return (
        <>
            <div className="relative inline-block" ref={triggerRef}>
                <div
                    onMouseEnter={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                    onClick={() => setIsVisible(!isVisible)}
                    className="inline-flex items-center gap-1 cursor-help"
                >
                    {children}
                    <span className="inline-flex items-center justify-center w-5 h-5 text-xs rounded-full border border-gray-500/50 opacity-60 hover:opacity-100 transition-opacity">?</span>
                </div>
            </div>
            {shouldRender && typeof document !== 'undefined' && createPortal(
                <div
                    ref={tooltipRef}
                    className={`absolute z-50 w-[280px] sm:w-64 p-3 text-[13px] leading-5 bg-gray-900/95 text-white/90 rounded-lg shadow-xl backdrop-blur-sm transition-all duration-200 ${position ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                        }`}
                    style={position ? {
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                    } : {
                        display: 'none'
                    }}
                >
                    {text}
                </div>,
                document.body
            )}
        </>
    )
} 
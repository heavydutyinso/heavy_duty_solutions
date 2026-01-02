'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export function PowerArtifacts() {
  const [scrollY, setScrollY] = useState(0)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }

      rafId.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Solar Panel Image - Top Right */}
      <div
        className="absolute w-40 h-40 opacity-12 top-20 right-10 lg:right-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px) rotate(${
            scrollY * 0.1
          }deg)`,
        }}
      >
        <Image
          src="/images/artifacts/square_panel.png"
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Solar-panel.jpg/800px-Solar-panel.jpg"
          alt="Solar Panel"
          width={160}
          height={160}
          className="drop-shadow-lg"
          priority={false}
        />
      </div>

      {/* Wind Turbines - Left Side */}
      <div
        className="absolute w-48 h-64 opacity-14 left-0 top-1/8"
        style={{
          transform: `translateY(${scrollY * 0.3}px) translateX(${
            Math.sin(scrollY * 0.01) * 20
          }px)`,
        }}
      >
        <Image
          src="/images/artifacts/wind_turbines.png"
          alt="Wind Turbines"
          width={192}
          height={256}
          className="drop-shadow-lg"
          priority={false}
        />
      </div>

      {/* Wind Turbine - Top Center Right */}
      <div
        className="hidden sm:absolute sm:block w-44 h-44 opacity-11 right-1/4 top-32"
        style={{
          transform: `translateY(${scrollY * 0.35}px) rotate(${
            scrollY * 0.05
          }deg)`,
        }}
      >
        <Image
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Wind_turbine.svg/800px-Wind_turbine.svg.png"
          src="/images/artifacts/wind-turbine.png"
          alt="Wind Turbine"
          width={176}
          height={176}
          className="drop-shadow-lg"
          priority={false}
        />
      </div>

      {/* Solar Panel 2 - Center Right (Larger) */}
      <div
        className="absolute w-52 h-48 opacity-13 right-8 top-1/2"
        style={{
          transform: `translateY(${scrollY * 0.4}px) rotate(${
            scrollY * -0.08
          }deg)`,
        }}
      >
        <Image
          src="/images/artifacts/solar_panel_2.png"
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Solar-panel.jpg/800px-Solar-panel.jpg"
          alt="Solar Panel"
          width={208}
          height={192}
          className="drop-shadow-lg"
          priority={false}
        />
      </div>

      {/* Large Power Tower - Center Bottom */}
      <div
        className="absolute w-48 h-80 opacity-10 left-1/2 bottom-0 -translate-x-1/2"
        style={{
          transform: `translateY(${scrollY * 0.2}px) translateX(-50%)`,
        }}
      >
        <Image
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Electricity_pylon.svg/800px-Electricity_pylon.svg.png"
          src="/images/artifacts/nuclear_power_plant.png"
          alt="Nuclear Power Plant"
          width={192}
          height={320}
          className="drop-shadow-lg"
          priority={false}
        />
      </div>

      {/* Hydroelectric Dam - Bottom Left */}
      <div
        className="absolute w-56 h-40 opacity-9 left-5 bottom-10"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      >
        <Image
          src="/images/artifacts/hydroelectric_dam.png"
          alt="Hydroelectric Dam"
          width={224}
          height={160}
          className="drop-shadow-lg"
          priority={false}
        />
      </div>

      {/* Power Lines - Additional Artifact */}
      <div
        className="absolute w-60 h-32 opacity-10 top-1/3 left-10 lg:left-20"
        style={{
          transform: `translateY(${scrollY * 0.45}px) rotate(${
            scrollY * -0.03
          }deg)`,
        }}
      >
        <Image
          src="/images/artifacts/transmission_powerlines_major.png"
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Power_lines.svg/800px-Power_lines.svg.png"
          alt="Power Lines"
          width={240}
          height={128}
          className="drop-shadow-lg"
          priority={false}
        />
      </div>
    </div>
  )
}

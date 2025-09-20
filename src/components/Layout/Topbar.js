import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  const items = [
    '😍  Gurugram coming soon  😍',
    '🔥  Baner 2.0 coming soon  🔥',
    '🚨  House of KP, Coming Soon 🚨' ,
   
  ]
  return (
    <Link href="/property/zest-coliving-chembur">
      <div className="w-full bg-[#000000] text-white py-2 marquee cursor-pointer">
        <div className="marquee__track">
          <div className="marquee__content px-4">
            {items.map((text, idx) => (
              <span key={`a-${idx}`} className="text-sm mx-0 sm:text-base">
                {text}
              </span>
            ))}
          </div>
          <div className="marquee__content px-4" aria-hidden="true">
            {items.map((text, idx) => (
              <span key={`b-${idx}`} className="text-sm sm:text-base">
                {text}
              </span>
            ))}
          </div>
          <div className="marquee__content px-4" aria-hidden="true">
            {items.map((text, idx) => (
              <span key={`b-${idx}`} className="text-sm sm:text-base">
                {text}
              </span>
            ))}
          </div>
          <div className="marquee__content px-4" aria-hidden="true">
            {items.map((text, idx) => (
              <span key={`b-${idx}`} className="text-sm sm:text-base">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Topbar

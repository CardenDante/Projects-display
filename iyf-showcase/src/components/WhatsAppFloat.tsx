'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const whatsappNumber = '+254796280700' // Replace with your number
  const message = 'Hello! I would like to know more about your services.' // Default message

  const handleClick = () => {
    const url = `https://chat.whatsapp.com/DFtx5cfX49xGraQbqBDHZ2`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full 
        shadow-lg hover:bg-[#128C7E] transition-colors duration-300 
        hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 
        bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap 
        opacity-0 group-hover:opacity-100 transition-opacity">
        Join Season 8 Whatsapp Group
      </span>
    </button>
  )
}
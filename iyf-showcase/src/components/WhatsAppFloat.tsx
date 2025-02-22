
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://chat.whatsapp.com/DFtx5cfX49xGraQbqBDHZ2"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out group flex items-center gap-2 z-50"
      aria-label="Join WhatsApp Group"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
        Join Season 8
      </span>
    </a>
  );
};

export default WhatsAppFloat;
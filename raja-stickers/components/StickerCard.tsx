"use client"

import { Sticker } from '@/data/stickers'
import { downloadStickerAsPDF } from '@/utils/pdfGenerator'

interface StickerCardProps {
  sticker: Sticker
}

export default function StickerCard({ sticker }: StickerCardProps) {
  const handleDownload = () => {
    downloadStickerAsPDF(sticker)
  }

  const renderPattern = () => {
    switch (sticker.design.pattern) {
      case 'eagles':
        return (
          <div className="absolute inset-0 opacity-10">
            <div className="text-9xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              🦅
            </div>
          </div>
        )
      case 'ultras':
        return (
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-3 gap-4 p-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="text-4xl">💚</div>
              ))}
            </div>
          </div>
        )
      case 'wings':
        return (
          <div className="absolute inset-0 opacity-10">
            <div className="flex justify-between items-center h-full px-4">
              <div className="text-6xl">🦅</div>
              <div className="text-6xl">🦅</div>
            </div>
          </div>
        )
      case 'flames':
        return (
          <div className="absolute inset-0 opacity-10">
            <div className="flex justify-around items-end h-full pb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="text-5xl">🔥</div>
              ))}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="group">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
        {/* Sticker Preview */}
        <div 
          id={`sticker-${sticker.id}`}
          className={`relative aspect-square bg-gradient-to-br ${sticker.design.bgColor} p-8 flex flex-col items-center justify-center overflow-hidden`}
        >
          {renderPattern()}
          
          <div className="relative z-10 text-center space-y-4">
            {sticker.design.emoji && (
              <div className="text-6xl mb-4 animate-bounce">
                {sticker.design.emoji}
              </div>
            )}
            
            <h3 className={`text-3xl font-black ${sticker.design.textColor} tracking-wider drop-shadow-lg`}>
              {sticker.design.mainText}
            </h3>
            
            {sticker.design.arabicText && (
              <p className={`text-2xl font-bold ${sticker.design.accentColor} drop-shadow-md`}>
                {sticker.design.arabicText}
              </p>
            )}
            
            {sticker.design.subText && (
              <p className={`text-xl font-semibold ${sticker.design.accentColor} tracking-widest`}>
                {sticker.design.subText}
              </p>
            )}
            
            {sticker.design.stars && (
              <div className="flex justify-center gap-2 mt-4">
                {[...Array(sticker.design.stars)].map((_, i) => (
                  <span key={i} className="text-3xl text-yellow-400">⭐</span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-4 bg-black/40 backdrop-blur-sm">
          <h4 className="text-white font-semibold mb-2">{sticker.title}</h4>
          <div className="flex items-center justify-between">
            <span className="text-green-300 text-sm px-3 py-1 bg-green-900/30 rounded-full">
              {sticker.category}
            </span>
            <button
              onClick={handleDownload}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 active:scale-95"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

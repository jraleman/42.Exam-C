"use client"

import { useState } from 'react'
import StickerCard from '@/components/StickerCard'
import { stickers } from '@/data/stickers'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', 'Green Boys', 'Ultra Eagles', 'Classic', 'Modern']

  const filteredStickers = selectedCategory === 'all' 
    ? stickers 
    : stickers.filter(sticker => sticker.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-green-500/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                🦅 Raja Casablanca Stickers
              </h1>
              <p className="text-green-300 text-lg">
                Green Eagles • النسور الخضر • Since 1949
              </p>
            </div>
            <div className="text-right">
              <div className="text-white text-2xl font-bold">RCA</div>
              <div className="text-green-400 text-sm">The People's Club</div>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/50 scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Stickers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStickers.map((sticker) => (
            <StickerCard key={sticker.id} sticker={sticker} />
          ))}
        </div>

        {filteredStickers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white text-xl">No stickers found in this category</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-green-500/20 mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-green-300 mb-2">
            🦅 Raja Club Athletic • نادي الرجاء الرياضي
          </p>
          <p className="text-white/60 text-sm">
            Green Boys 05 • Ultra Eagles 06 • Curva Sud
          </p>
          <p className="text-white/40 text-xs mt-4">
            3x CAF Champions League Winners • 13x Botola Champions
          </p>
        </div>
      </footer>
    </main>
  )
}

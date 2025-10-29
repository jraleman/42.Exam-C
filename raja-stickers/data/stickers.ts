export interface Sticker {
  id: number
  title: string
  category: string
  design: {
    bgColor: string
    textColor: string
    accentColor: string
    pattern: string
    mainText: string
    subText?: string
    arabicText?: string
    emoji?: string
    stars?: number
  }
}

export const stickers: Sticker[] = [
  {
    id: 1,
    title: "Green Eagles Classic",
    category: "Classic",
    design: {
      bgColor: "from-green-600 to-green-800",
      textColor: "text-white",
      accentColor: "text-yellow-400",
      pattern: "eagles",
      mainText: "GREEN EAGLES",
      arabicText: "النسور الخضر",
      emoji: "🦅",
      stars: 3
    }
  },
  {
    id: 2,
    title: "Ultra Green Boys",
    category: "Green Boys",
    design: {
      bgColor: "from-emerald-500 to-green-700",
      textColor: "text-white",
      accentColor: "text-yellow-300",
      pattern: "ultras",
      mainText: "GREEN BOYS",
      subText: "EST. 2005",
      emoji: "💚"
    }
  },
  {
    id: 3,
    title: "Ultra Eagles 06",
    category: "Ultra Eagles",
    design: {
      bgColor: "from-green-700 to-emerald-900",
      textColor: "text-white",
      accentColor: "text-amber-400",
      pattern: "wings",
      mainText: "ULTRA EAGLES",
      subText: "06",
      emoji: "🦅"
    }
  },
  {
    id: 4,
    title: "RCA 1949",
    category: "Classic",
    design: {
      bgColor: "from-white to-green-100",
      textColor: "text-green-800",
      accentColor: "text-green-600",
      pattern: "vintage",
      mainText: "RCA",
      subText: "SINCE 1949",
      emoji: "⭐"
    }
  },
  {
    id: 5,
    title: "Curva Sud",
    category: "Modern",
    design: {
      bgColor: "from-black to-green-900",
      textColor: "text-green-400",
      accentColor: "text-white",
      pattern: "stadium",
      mainText: "CURVA SUD",
      arabicText: "كورفا سود",
      emoji: "🏟️"
    }
  },
  {
    id: 6,
    title: "The People's Club",
    category: "Classic",
    design: {
      bgColor: "from-green-600 to-emerald-700",
      textColor: "text-white",
      accentColor: "text-yellow-400",
      pattern: "people",
      mainText: "THE PEOPLE'S CLUB",
      arabicText: "نادي الشعب",
      emoji: "✊"
    }
  },
  {
    id: 7,
    title: "Green Boys Ultras",
    category: "Green Boys",
    design: {
      bgColor: "from-lime-500 to-green-600",
      textColor: "text-white",
      accentColor: "text-black",
      pattern: "flames",
      mainText: "GREEN BOYS",
      subText: "ULTRAS 05",
      emoji: "🔥"
    }
  },
  {
    id: 8,
    title: "Champions League",
    category: "Classic",
    design: {
      bgColor: "from-yellow-400 to-green-600",
      textColor: "text-white",
      accentColor: "text-yellow-200",
      pattern: "trophy",
      mainText: "3X CHAMPIONS",
      subText: "CAF CL",
      emoji: "🏆",
      stars: 3
    }
  },
  {
    id: 9,
    title: "Derb Sultan",
    category: "Classic",
    design: {
      bgColor: "from-green-800 to-black",
      textColor: "text-green-400",
      accentColor: "text-white",
      pattern: "district",
      mainText: "DERB SULTAN",
      arabicText: "درب السلطان",
      emoji: "🏘️"
    }
  },
  {
    id: 10,
    title: "Ultra Eagles Pride",
    category: "Ultra Eagles",
    design: {
      bgColor: "from-emerald-600 to-green-900",
      textColor: "text-white",
      accentColor: "text-yellow-400",
      pattern: "pride",
      mainText: "ULTRA EAGLES",
      arabicText: "ألترا إيجلز",
      emoji: "🦅"
    }
  },
  {
    id: 11,
    title: "Green Army",
    category: "Modern",
    design: {
      bgColor: "from-green-500 to-teal-600",
      textColor: "text-white",
      accentColor: "text-lime-300",
      pattern: "army",
      mainText: "GREEN ARMY",
      subText: "CASABLANCA",
      emoji: "⚔️"
    }
  },
  {
    id: 12,
    title: "Raja Forever",
    category: "Modern",
    design: {
      bgColor: "from-green-700 via-emerald-600 to-green-800",
      textColor: "text-white",
      accentColor: "text-yellow-300",
      pattern: "forever",
      mainText: "RAJA FOREVER",
      arabicText: "الرجاء للأبد",
      emoji: "💚",
      stars: 4
    }
  },
  {
    id: 13,
    title: "Green Boys Fire",
    category: "Green Boys",
    design: {
      bgColor: "from-red-600 via-green-600 to-black",
      textColor: "text-white",
      accentColor: "text-yellow-400",
      pattern: "fire",
      mainText: "GREEN BOYS",
      subText: "NO FEAR",
      emoji: "🔥"
    }
  },
  {
    id: 14,
    title: "Eagles Wings",
    category: "Ultra Eagles",
    design: {
      bgColor: "from-sky-400 via-green-500 to-green-700",
      textColor: "text-white",
      accentColor: "text-yellow-300",
      pattern: "sky",
      mainText: "EAGLES",
      arabicText: "النسور",
      emoji: "🦅"
    }
  },
  {
    id: 15,
    title: "Casablanca Pride",
    category: "Modern",
    design: {
      bgColor: "from-white via-green-500 to-green-800",
      textColor: "text-white",
      accentColor: "text-yellow-400",
      pattern: "city",
      mainText: "CASABLANCA",
      subText: "PRIDE",
      emoji: "🌟"
    }
  },
  {
    id: 16,
    title: "Victory Green",
    category: "Modern",
    design: {
      bgColor: "from-green-400 to-green-900",
      textColor: "text-white",
      accentColor: "text-yellow-400",
      pattern: "victory",
      mainText: "VICTORY",
      arabicText: "النصر",
      emoji: "✌️"
    }
  }
]

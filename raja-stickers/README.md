# 🦅 Raja Casablanca Stickers Website

A beautiful, modern website for downloading Raja Casablanca fan stickers as PDF files. Features authentic designs celebrating the Green Boys, Ultra Eagles, and the legendary Green Eagles of Casablanca.

## ✨ Features

- **16 Unique Sticker Designs** - Authentic Raja Casablanca themed stickers
- **Multiple Categories**:
  - Green Boys (Ultras Green Boys 05)
  - Ultra Eagles (Ultra Eagles 06)
  - Classic designs
  - Modern designs
- **PDF Download** - Each sticker can be downloaded as a PDF with 6 stickers per page (perfect for printing)
- **Responsive Design** - Works beautifully on all devices
- **Beautiful UI** - Modern gradient backgrounds with green theme
- **Category Filtering** - Easy navigation between different sticker types

## 🎨 Sticker Themes

The stickers celebrate:
- **Green Eagles** (النسور الخضر) - The club's iconic nickname
- **Green Boys 05** - First ultras group in Morocco
- **Ultra Eagles 06** - Passionate supporter group
- **Curva Sud** - The famous southern section of Stade Mohammed V
- **Derb Sultan** - Historic neighborhood and club roots
- **Champions League** - 3x CAF Champions League winners
- **The People's Club** (نادي الشعب) - Raja's identity

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd raja-stickers
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🖨️ How to Use

1. **Browse Stickers** - View all available sticker designs on the homepage
2. **Filter by Category** - Click category buttons to filter stickers
3. **Download PDF** - Click "Download PDF" button on any sticker
4. **Print** - Open the downloaded PDF and print on sticker paper

### Printing Tips

- Use **glossy sticker paper** for best results
- Print at **100% scale** (no scaling)
- Each PDF contains **6 stickers** (2 columns × 3 rows)
- Cut along the edges for individual stickers

## 🛠️ Technology Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **jsPDF** - PDF generation
- **html2canvas** - HTML to image conversion

## 📁 Project Structure

```
raja-stickers/
├── app/
│   ├── page.tsx          # Main homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── StickerCard.tsx   # Sticker card component
├── data/
│   └── stickers.ts       # Sticker data and types
├── utils/
│   └── pdfGenerator.ts   # PDF generation logic
└── public/               # Static assets
```

## 🎨 Customization

### Adding New Stickers

Edit `data/stickers.ts` and add new sticker objects:

```typescript
{
  id: 17,
  title: "Your Sticker Title",
  category: "Category Name",
  design: {
    bgColor: "from-green-600 to-green-800",
    textColor: "text-white",
    accentColor: "text-yellow-400",
    pattern: "eagles",
    mainText: "MAIN TEXT",
    subText: "Subtitle",
    arabicText: "النص العربي",
    emoji: "🦅",
    stars: 3
  }
}
```

### Modifying Colors

The website uses a green theme matching Raja's colors. To modify:
- Edit Tailwind classes in `app/page.tsx`
- Update gradient colors in sticker designs

## 🏆 About Raja Casablanca

- **Founded**: March 20, 1949
- **Nickname**: Green Eagles (النسور الخضر)
- **Stadium**: Stade Mohammed V (45,000 capacity)
- **Achievements**:
  - 3× CAF Champions League Winners
  - 13× Botola Champions
  - 2× CAF Confederation Cup Winners
  - FIFA Club World Cup Finalist (2013)

## 📄 License

This project is created for Raja Casablanca fans. Feel free to use and modify for personal use.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new sticker designs
- Improve the UI/UX
- Fix bugs
- Add new features

## 💚 For the Green Eagles

**Allez Raja! 🦅💚**

---

*Created with love for Raja Casablanca fans worldwide*
*Green Boys • Ultra Eagles • Curva Sud*

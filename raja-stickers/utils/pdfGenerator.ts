import { Sticker } from '@/data/stickers'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export async function downloadStickerAsPDF(sticker: Sticker) {
  try {
    const element = document.getElementById(`sticker-${sticker.id}`)
    
    if (!element) {
      console.error('Sticker element not found')
      return
    }

    const canvas = await html2canvas(element, {
      scale: 3,
      backgroundColor: null,
      logging: false,
      useCORS: true
    })

    const imgData = canvas.toDataURL('image/png')
    
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    
    const stickerSize = 80
    const margin = 10
    const stickersPerRow = 2
    const stickersPerColumn = 3
    
    const startX = (pageWidth - (stickersPerRow * stickerSize + (stickersPerRow - 1) * margin)) / 2
    const startY = (pageHeight - (stickersPerColumn * stickerSize + (stickersPerColumn - 1) * margin)) / 2

    for (let row = 0; row < stickersPerColumn; row++) {
      for (let col = 0; col < stickersPerRow; col++) {
        const x = startX + col * (stickerSize + margin)
        const y = startY + row * (stickerSize + margin)
        
        pdf.addImage(imgData, 'PNG', x, y, stickerSize, stickerSize)
      }
    }

    pdf.setFontSize(8)
    pdf.setTextColor(100, 100, 100)
    pdf.text('Raja Casablanca Stickers - Green Eagles', pageWidth / 2, pageHeight - 5, { align: 'center' })

    const fileName = `${sticker.title.replace(/\s+/g, '_')}_Raja_Sticker.pdf`
    pdf.save(fileName)
    
  } catch (error) {
    console.error('Error generating PDF:', error)
    alert('Failed to generate PDF. Please try again.')
  }
}

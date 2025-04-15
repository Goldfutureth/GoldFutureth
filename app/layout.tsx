// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gold&Future Academy',
  description: 'เทรดอย่างมืออาชีพ ก้าวสู่อนาคตที่มั่งคั่ง',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head />
      <body>{children}</body>
    </html>
  )
}

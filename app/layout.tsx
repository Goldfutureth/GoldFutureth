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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Kanit:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-cover bg-no-repeat">
        {children}
      </body>
    </html>
  )
}

import '../globals.css'

export const metadata = {
  title: 'Gold&Future Academy',
  description: 'เทรดอย่างมืออาชีพ ก้าวสู่อนาคตที่มั่งคั่ง',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}

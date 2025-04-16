"use client"

import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-pattern text-gold-100 min-h-screen flex flex-col items-center justify-center px-4 py-12 font-sans">
      {/* Logo */}
      <Image src="/logo.png" alt="Gold&Future Logo" width={120} height={120} className="mb-6" />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight text-gold-100 drop-shadow-xl">
        เทรดอย่างมืออาชีพ <br />
        ก้าวสู่อนาคตที่มั่งคั่ง
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-lg text-center max-w-md text-gray-300">
        คลังความรู้การเทรดทุกแขนง พร้อมระบบ Support นักเทรดครบวงจร
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Link href="/register">
          <button className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg">
            สมัครสมาชิก
          </button>
        </Link>
        <Link href="/courses">
          <button className="border border-gold-500 hover:bg-gold-500 hover:text-black text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
            ดูคอร์สทั้งหมด
          </button>
        </Link>
      </div>

      {/* Line OA Section */}
      <div className="mt-10 text-center">
        <p className="text-gray-400 mb-2">สอบถามเพิ่มเติมผ่าน LINE</p>
        <Image src="/line-qr.jpg" alt="Line QR" width={160} height={160} className="mx-auto" />
        <Link href="https://lin.ee/IuQO3xF" target="_blank" rel="noopener noreferrer">
          <p className="mt-2 text-green-400 underline">เพิ่มเพื่อนที่นี่</p>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500 text-center">
        © 2025 Gold&Future Academy. All rights reserved.
      </footer>
    </main>
  )
}

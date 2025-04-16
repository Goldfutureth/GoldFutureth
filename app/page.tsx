"use client"

import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="text-center max-w-3xl mt-[-5%]">
        <Image src="/logo.png" alt="Gold&Future Logo" width={120} height={120} className="mx-auto mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          เทรดอย่างมืออาชีพ <br />
          ก้าวสู่อนาคตที่มั่งคั่ง
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          คลังความรู้การเทรดทุกแขนง พร้อมระบบซัพพอร์ตนักเทรดครบวงจร
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link href="/register">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg">
              สมัครสมาชิก
            </button>
          </Link>
          <Link href="/courses">
            <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-black text-white font-semibold px-6 py-3 rounded-lg">
              ดูคอร์สทั้งหมด
            </button>
          </Link>
        </div>

        <div className="mt-10">
          <p className="text-gray-400">สอบถามเพิ่มเติมผ่าน LINE</p>
          <Image src="/line-qr.png" alt="Line QR" width={160} height={160} className="mx-auto" />
          <Link href="https://lin.ee/IuQO3xF" target="_blank" rel="noopener noreferrer">
            <p className="mt-2 text-green-400 underline">เพิ่มเพื่อนที่นี่</p>
          </Link>
        </div>

        <footer className="mt-12 text-sm text-gray-500">
          © 2025 Gold&Future Academy. All rights reserved.
        </footer>
      </div>
    </main>
  )
}

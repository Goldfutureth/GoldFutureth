"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-16 text-white flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/bg-leather-texture.png')"
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image src="/logo.png" alt="Gold&Future Logo" width={120} height={120} className="mb-6" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-center text-4xl md:text-5xl font-bold leading-tight text-gold drop-shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        เทรดอย่างมืออาชีพ <br />
        ก้าวสู่อนาคตที่มั่งคั่ง
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-4 text-center max-w-lg text-[#ddd] text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        คลังความรู้การเทรดทุกแขนง พร้อมระบบซัพพอร์ตนักเทรดครบวงจร
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Link href="/register">
          <button className="bg-gold text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-all">
            สมัครสมาชิก
          </button>
        </Link>
        <Link href="/courses">
          <button className="border border-gold text-gold font-semibold px-6 py-3 rounded-lg hover:bg-gold hover:text-black transition-all">
            ดูคอร์สทั้งหมด
          </button>
        </Link>
      </motion.div>

      {/* LINE OA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-gray-300 mb-2">สอบถามเพิ่มเติมผ่าน LINE</p>
        <Image src="/line-qr.png" alt="Line QR" width={160} height={160} className="mx-auto" />
        <Link href="https://lin.ee/IuQO3xF" target="_blank" rel="noopener noreferrer">
          <p className="mt-2 text-green-400 underline hover:text-green-300 transition-all">
            เพิ่มเพื่อนที่นี่
          </p>
        </Link>
      </motion.div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500 text-center">
        © 2025 Gold&Future Academy. All rights reserved.
      </footer>
    </main>
  )
}

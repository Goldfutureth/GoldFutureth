"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-leather-1280x800.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center text-white max-w-xl w-full"
      >
        {/* โลโก้ */}
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="Gold&Future Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gold">
          เทรดอย่างมืออาชีพ <br /> ก้าวสู่อนาคตที่มั่งคั่ง
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-base text-gray-300 mb-8">
          คลังความรู้การเทรดทุกแขนง พร้อมระบบซัพพอร์ตนักเทรดครบวงจร
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <Link href="/register">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition duration-200">
              สมัครสมาชิก
            </button>
          </Link>
          <Link href="/courses">
            <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 rounded-lg transition duration-200">
              ดูคอร์สทั้งหมด
            </button>
          </Link>
        </div>

        {/* QR CODE */}
        <div className="mb-4">
          <p className="text-gray-400 mb-2">สอบถามเพิ่มเติมผ่าน LINE</p>
          <Image
            src="/line-qr.png"
            alt="Line QR"
            width={160}
            height={160}
            className="mx-auto"
          />
          <Link
            href="https://lin.ee/IuQO3xF"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline block mt-2"
          >
            เพิ่มเพื่อนที่นี่
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-sm text-gray-500">
          © 2025 Gold&Future Academy. All rights reserved.
        </footer>
      </motion.div>
    </main>
  )
}

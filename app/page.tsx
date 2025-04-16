"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  const MotionSection = motion.section

  return (
    <main
      className="min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: 'url(/leather-bg.png)' }}
    >
      {/* HERO SECTION */}
      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
      >
        <Image src="/logo.png" alt="Gold&Future Logo" width={120} height={120} className="mb-6" priority unoptimized />
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gold">
          เทรดอย่างมืออาชีพ<br />
          ก้าวสู่อนาคตที่มั่งคั่ง
        </h1>
        <p className="mt-4 text-lg max-w-xl text-gold/80">
          คลังความรู้การเทรดทุกแขนง พร้อมระบบซัพพอร์ตนักเทรดครบวงจร
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link href="/register">
            <button className="bg-gold text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90">
              สมัครสมาชิก
            </button>
          </Link>
          <Link href="/courses">
            <button className="border border-gold text-gold font-semibold px-6 py-3 rounded-lg hover:bg-gold hover:text-black">
              ดูคอร์สทั้งหมด
            </button>
          </Link>
        </div>
      </MotionSection>

      

      <footer className="text-center text-xs text-white/50 py-6">
        © 2025 Gold&Future Academy. All rights reserved.
      </footer>
    </main>
  )
}

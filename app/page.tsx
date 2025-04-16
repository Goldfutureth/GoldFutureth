"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  const MotionSection = motion.section

  return (
    <main
      className="min-h-screen text-white bg-cover bg-center font-sans"
      style={{ backgroundImage: 'url(/leather-bg.png)' }}
    >
      {/* NAVBAR */}
      <nav className="w-full px-6 py-4 flex justify-between items-center text-sm">
        <Image src="/logo.png" alt="GoldFuture Logo" width={60} height={60} unoptimized priority />
        <div className="flex gap-6">
          <Link href="#features">คุณสมบัติ</Link>
          <Link href="#courses">คอร์สเรียน</Link>
          <Link href="#contact">ติดต่อ</Link>
        </div>
        <Link
          href="/register"
          className="bg-gold text-black px-4 py-2 rounded-md font-medium hover:opacity-90"
        >
          สมัครสมาชิก
        </Link>
      </nav>

      <MotionSection
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="flex flex-col items-center justify-center px-6 pt-20 pb-10 text-center"
>
  <Image src="/logo.png" alt="GoldFuture Logo" width={120} height={120} className="mb-4" unoptimized priority />
  
  <h1 className="font-display text-4xl text-gold mb-2">Gold&Future Academy</h1>

  <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gold drop-shadow">
    เทรดอย่างมืออาชีพ
  </h1>
  <h2 className="text-3xl md:text-5xl font-semibold text-white mt-2 drop-shadow">
    ก้าวสู่อนาคตที่มั่งคั่ง
  </h2>
  <p className="mt-6 text-lg max-w-2xl text-white/80">
    คลังความรู้การเทรดทุกแขนง พร้อมระบบซัพพอร์ตนักเทรดครบวงจร 
    ด้วยระบบที่ทันสมัยและปลอดภัย
  </p>
  <div className="flex flex-col md:flex-row gap-4 mt-8">
    <Link href="/register">
      <button className="bg-gold text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90">
        เริ่มต้นเรียนรู้
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

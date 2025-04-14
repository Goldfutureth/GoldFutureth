export default function Courses() {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8">
        <h2 className="text-3xl font-bold text-gold mb-6">คอร์สเรียนของเรา</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-gold">1. Smart Money Concepts</h3>
            <p className="text-slate-300">เรียนรู้โครงสร้างราคา Order Block, Liquidity, FVG และวิธีคิดแบบสถาบัน</p>
            <button className="mt-4 bg-gold text-black px-4 py-2 rounded hover:opacity-90">สมัครเรียน</button>
          </div>
  
          <div className="bg-slate-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-gold">2. Risk Management & Psychology</h3>
            <p className="text-slate-300">วางแผนจัดการความเสี่ยงอย่างเป็นระบบ พร้อมเสริมสร้างวินัยทางจิตใจ</p>
            <button className="mt-4 bg-gold text-black px-4 py-2 rounded hover:opacity-90">สมัครเรียน</button>
          </div>
  
          <div className="bg-slate-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-gold">3. Price Action Mastery</h3>
            <p className="text-slate-300">เข้าใจแท่งเทียน, Market Structure, และ Entry Models ที่ใช้จริง</p>
            <button className="mt-4 bg-gold text-black px-4 py-2 rounded hover:opacity-90">สมัครเรียน</button>
          </div>
        </div>
      </div>
    );
  }
  
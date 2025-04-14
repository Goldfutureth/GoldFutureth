export default function Videos() {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8">
        <h2 className="text-3xl font-bold text-gold mb-6">วิดีโอความรู้แยกหมวดหมู่</h2>
  
        <div className="space-y-8">
          {/* หมวด: ICT */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-gold">📘 หมวด ICT (Smart Money)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <iframe className="w-full h-64" src="https://www.youtube.com/embed/84sEmiR8Knk" allowFullScreen></iframe>
              <iframe className="w-full h-64" src="https://www.youtube.com/embed/TKXIkMjY6u4" allowFullScreen></iframe>
            </div>
          </div>
  
          {/* หมวด: Risk */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-gold">📙 หมวด Risk & Psychology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <iframe className="w-full h-64" src="https://www.youtube.com/embed/7e90gBu4pas" allowFullScreen></iframe>
              <iframe className="w-full h-64" src="https://www.youtube.com/embed/m_1wV1Ik1go" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
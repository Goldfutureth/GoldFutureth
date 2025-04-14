export default function ChartSim() {
    return (
      <div className="p-6 bg-slate-950 min-h-screen text-white">
        <h2 className="text-3xl font-bold text-gold mb-4">ระบบทดลองตีกราฟ</h2>
        <p className="mb-4">คุณสามารถฝึกวิเคราะห์กราฟ เช่น Order Block, FVG, Market Structure ได้ที่นี่</p>
  
        <div className="border-2 border-slate-800 rounded overflow-hidden mb-6">
          <iframe
            src="https://www.tradingview.com/widgetembed/?symbol=OANDA:XAUUSD&interval=15&hidesidetoolbar=1&theme=dark&style=1&toolbarbg=f1f3f6"
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
  
        <div>
          <label className="block text-sm text-slate-400 mb-2">บันทึกสิ่งที่คุณตีกราฟไว้:</label>
          <textarea
            className="w-full h-40 p-4 bg-slate-800 text-white rounded"
            placeholder="พิมพ์สิ่งที่คุณวิเคราะห์ เช่น OB อยู่ตรงไหน, ทำไมเข้าเทรด..."
          ></textarea>
        </div>
      </div>
    );
  }
  
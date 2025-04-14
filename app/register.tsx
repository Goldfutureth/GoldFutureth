export default function Register() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="bg-slate-800 p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl mb-4 font-bold text-gold">สมัครสมาชิก</h2>
          <input
            type="text"
            placeholder="ชื่อผู้ใช้"
            className="w-full mb-3 p-2 rounded bg-slate-700"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 rounded bg-slate-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 rounded bg-slate-700"
          />
          <button className="bg-gold text-black w-full py-2 rounded hover:opacity-90">Register</button>
        </div>
      </div>
    );
  }
  
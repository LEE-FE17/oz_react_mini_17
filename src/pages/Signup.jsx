import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입:", email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-8 rounded-lg shadow"
>
        <h2 className="text-2xl font-bold mb-6 text-center">회원가입</h2>

        <input
          type="email"
          placeholder="이메일"
          className="w-full mb-4 p-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="비밀번호"
          className="w-full mb-4 p-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-orange-400 text-white py-3 rounded hover:bg-orange-500"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default Signup;
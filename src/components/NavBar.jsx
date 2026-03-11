import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    navigate(`/?query=${value}`);
  };

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">

      {/* 로고 */}
      <h1 className="text-3xl font-bold text-orange-500">
        MH 무비
      </h1>

      {/* 검색창 */}
      <input
        type="text"
        placeholder="영화 검색..."
        value={search}
        onChange={handleSearch}
        className="w-[500px] px-6 py-3 rounded-full bg-orange-200 outline-none text-center"
      />

      {/* 로그인 회원가입 */}

      <div className="flex gap-3">
        <Link to="/login">
         <button className="px-4 py-2 bg-gray-200 rounded">
          로그인
        </button>
        </Link>
        <Link to="/signup">
         <button className="px-4 py-2 bg-gray-200 rounded">
          회원가입
        </button>
        </Link>
      </div>
      

    </nav>
  );
}

export default NavBar;
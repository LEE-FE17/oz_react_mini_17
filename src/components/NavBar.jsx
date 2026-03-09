function NavBar() {
  return (
    <nav className="navbar">
      <h1>MH 무비</h1>

      <input type="text" placeholder="검색" />

      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </nav>
  );
}

export default NavBar;
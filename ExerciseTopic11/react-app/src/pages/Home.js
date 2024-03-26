function Home() {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold">
        Chào mừng đến với Trang Chủ của Chúng Tôi
      </h1>
      <p>Đây là một ứng dụng React cơ bản để giới thiệu về trang chủ.</p>
      <button
        className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 hover:drop-shadow-xl"
        onClick={() => alert("Hãy bắt đầu hành trình của bạn!")}
      >
        Tìm hiểu thêm
      </button>
    </div>
  );
}

export default Home;

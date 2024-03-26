import React from "react";

const newsArticles = [
  {
    id: 1,
    title: "Một tính năng bị Microsoft bỏ quên không cập nhật",
    content:
      "Cho dù có điểm số benchmark cao vượt trội so với người tiền nhiệm A17 Pro, nhưng hiệu năng đa nhân của chip Apple A18 Pro vẫn thua kém các đối thủ đến từ Qualcomm và MediaTek.",
  },
  {
    id: 2,
    title: "Chip A18 Pro trên iPhone 16 Pro lộ điểm benchmark",
    content:
      "Trong nỗ lực hoàn thiện hóa AI chơi điện tử, Google DeepMind công bố SIMA, một hệ thống trí tuệ nhân tạo được huấn luyện chơi game sao cho giống con người hơn, thay vì là một AI tự tính toán và thao tác cực nhanh.",
  },
  {
    id: 3,
    title: "Google DeepMind công bố SIMA",
    content:
      "Windows 11 mang lại nhiều tính năng mới cũng như hiện đại hóa nhiều phần trong giao diện người dùng, bao gồm cả menu Settings và các ứng dụng lâu năm như Notepad và Paint.",
  },
];

function NewsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">Tin Tức Mới Nhất</h1>
      <div className="grid grid-cols-3 gap-10">
        {newsArticles.map((article) => (
          <div key={article.id}>
            <h2 className="text-2xl font-bold">{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPage;

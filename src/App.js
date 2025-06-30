import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const fortunes = [
    {
      title: "今日のあなたは「内に秘めた情熱家」",
      message: "周りからは落ち着いて見られがちですが、心の中には熱い想いを秘めていますね。その情熱を何に向けるべきか、時々考えてしまうことも。でも、その真剣さがあなたの素敵な魅力です。",
      luckyAction: "普段は選ばない色の小物を身につける"
    },
    {
      title: "今日のあなたは「繊細な気配り屋さん」",
      message: "人が気づかないような細やかな点によく気がつくあなた。その優しさで多くの人が救われていますが、自分でも気づかないうちに気を使いすぎていませんか？たまには自分を一番に甘やかしてあげましょう。",
      luckyAction: "好きなスイーツを誰にも気兼ねなく楽しむ"
    },
    {
      title: "今日のあなたは「隠れたリーダータイプ」",
      message: "普段は一歩引いて全体を見ていますが、いざという時には的確な判断で周りを導くことができる力を秘めています。あなたのアドバイスを、実は心待ちにしている人がいるかもしれません。",
      luckyAction: "本屋さんで、ふと気になった本を手に取ってみる"
    },
    {
      title: "今日のあなたは「自由を愛する冒険家」",
      message: "安定した毎日も大切にできる真面目さがありながら、心の奥底では、知らない世界へ飛び出すような冒険を求めています。日常の中に、小さな非日常を取り入れると心が躍りそうです。",
      luckyAction: "一駅手前で降りて、知らない道を歩いてみる"
    },
    {
        title: "今日のあなたは「愛される聞き上手」",
        message: "不思議と「あなたにだけは話せる」と、周りの人が秘密を打ち明けてくることはありませんか？それは、あなたが持つ温かい包容力のおかげ。でも、自分のこともちゃんと話してくださいね。",
        luckyAction: "お気に入りの音楽を聴きながら、ぼーっとする"
    },
    {
        title: "今日のあなたは「理想と現実の探求者」",
        message: "高い理想を追い求めるロマンチストな一面と、物事を冷静に見つめる現実的な一面。その両方を持っているのがあなたのユニークなところ。そのギャップこそが、あなたを深く魅力的にしています。",
        luckyAction: "夜空を見上げて、一番星を探してみる"
    }
  ];

  const handleFortune = () => {
    if (!text.trim()) {
      setResult({
        title: "まずは言葉をささやいて…",
        message: "あなたの心の中にある、今の気持ちを教えてください。",
        luckyAction: "深呼吸して、心を落ち着ける"
      });
      return;
    }
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setResult(fortunes[randomIndex]);
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center app-container">
      <div className="card text-center shadow-lg p-4 app-card">
        <div className="card-body">
          <h1 className="card-title mb-4 app-title">言霊占い</h1>
          <p className="card-text mb-4">あなたの心の声をささやいてください</p>
          <textarea
            className="form-control mb-4"
            rows="3"
            placeholder="例：明日はいい日になりますように"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button className="btn btn-primary btn-lg" onClick={handleFortune}>
            運勢を占う
          </button>

          {result && (
            <div className="mt-4 p-3 result-card">
              <h4 className="result-title">{result.title}</h4>
              <p className="result-message">{result.message}</p>
              <hr />
              <p className="mb-0">
                <strong>今日のラッキーアクション:</strong> {result.luckyAction}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
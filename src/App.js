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
    },
    {
        title: "今日のあなたは「静かなる努力家」",
        message: "誰も見ていないところでも、コツコツと努力を続けられる真面目さを持っていますね。その積み重ねが、未来のあなたをきっと輝かせます。たまには自分を褒めてあげてください。",
        luckyAction: "自分の好きな飲み物で、ほっと一息つく"
    },
    {
        title: "今日のあなたは「ユーモアのセンス抜群」",
        message: "あなたの何気ない一言で、場の空気が和やかになることがあります。そのユーモアのセンスは、周りの人を笑顔にする才能です。今日は意識して、面白いことを探してみては？",
        luckyAction: "面白い動画や漫画を見て、思いっきり笑う"
    },
    {
        title: "今日のあなたは「好奇心旺盛なチャレンジャー」",
        message: "新しいことや知らないことに対して、ワクワクする気持ちを持っていませんか？その好奇心は、あなたの世界をどんどん広げてくれる原動力です。小さな挑戦が大きな一歩に繋がります。",
        luckyAction: "やったことのないレシピで料理を作ってみる"
    },
    {
        title: "今日のあなたは「誠実な平和主義者」",
        message: "人との和を大切にし、争いごとを好まない優しい心の持ち主。あなたのその誠実な態度は、周りの人に安心感を与えています。あなたの周りには、自然と穏やかな空気が流れます。",
        luckyAction: "公園や自然の多い場所を散歩する"
    },
    {
        title: "今日のあなたは「直感の鋭いアーティスト」",
        message: "論理だけでは説明できない、ふとしたひらめきや直感が冴える日。あなたの感性が、素晴らしいアイデアを生み出すかもしれません。心に浮かんだことをメモしておくと吉。",
        luckyAction: "美術館に行ったり、綺麗な写真集を眺めたりする"
    },
    {
        title: "今日のあなたは「頼れるみんなのお姉さん（お兄さん）」",
        message: "なぜか人に頼られたり、相談されたりすることが多いのでは？それはあなたの持つ面倒見の良さと、懐の深さからくるものです。たくさんの人から信頼されていますよ。",
        luckyAction: "誰かに小さな親切をしてみる"
    },
    {
        title: "今日のあなたは「物事を多角的に見る賢者」",
        message: "一つの考えに固執せず、様々な角度から物事を捉えることができるあなた。その柔軟な思考が、難しい問題も解決に導きます。あなたの意見は、周りにとって新鮮な発見となるでしょう。",
        luckyAction: "普段読まないジャンルの雑誌やニュースを読む"
    },
    {
        title: "今日のあなたは「感謝を忘れない謙虚な人」",
        message: "小さなことにも「ありがとう」と感謝の気持ちを持てる素敵なあなた。その謙虚さが、あなたの人間的な魅力を高め、良いご縁を引き寄せます。今日も感謝の気持ちを大切に。",
        luckyAction: "身近な人に感謝の言葉を伝えてみる"
    },
    {
        title: "今日のあなたは「夢に向かって進むロマンチスト」",
        message: "心の中に、大切にしている夢や憧れがありますね。その夢を語るあなたの瞳は、キラキラと輝いているはず。現実を見ながらも、夢を追い続ける情熱があなたの力です。",
        luckyAction: "自分の夢や目標をノートに書き出してみる"
    },
    {
        title: "今日のあなたは「場の雰囲気を読むムードメーカー」",
        message: "その場の空気を敏感に察知し、自分がどう振る舞うべきかを自然に判断できる能力があります。あなたがそこにいるだけで、なぜか物事がスムーズに進む、なんてことも。",
        luckyAction: "好きな香りのアロマやハンドクリームでリラックスする"
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
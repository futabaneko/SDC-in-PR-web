import { MessageCircleQuestion, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: '途中参加・途中離脱は可能ですか？',
    answer: '7日間毎日参加できなくても問題ありません。ただし、エントリー締め切り後のチーム追加は原則できません。チームメンバーの変更に関する詳細は運営（Discord）までお問い合わせください。',
  },
  {
    question: '年齢制限はありますか？',
    answer: 'Minecraft Java版を所有する13歳以上の方が参加できます。連絡ツールとしてDiscordを使用するため、13歳以上である必要があります。また、未成年の方は保護者の同意を得たのちにご参加ください。',
  },
  {
    question: 'チームメンバーの変更はできますか？',
    answer: 'エントリー期間内であれば、チーム変更は可能です。Discord の #ticket で運営に連絡してください。',
  },
  {
    question: '開発機材・ソフトウェアは各自用意ですか？',
    answer: 'はい、お使いのPC、開発環境（IDE等）、ライセンスはご自身でご用意をお願いします。',
  },
  {
    question: 'AI, LLM の使用は許可されていますか？',
    answer: 'はい、許可されています。',
  },
  {
    question: 'チームメンバーを探したいのですが...',
    answer: 'エントリー前に、運営の提供するDiscordサーバー内にて「メンバー募集チャンネル」を開設予定です。そこでチームを組んでからエントリーすることも可能です。',
  },
  {
    question: 'Third Party とは何ですか？',
    answer: 'Player Realms が提供するサードパーティ機能です。詳細は playerrealms.com/thirdparty をご確認ください。制作物にThird Partyを使用することは認められています。',
  },
  {
    question: 'MODサーバーは認められますか？',
    answer: 'いいえ。バニラの Minecraft Java版で参加できるサーバーである必要があります。MODサーバーは認められません。',
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col">
      <section className="bg-neutral-bg pt-24 pb-16 px-6 border-b border-neutral-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-title text-4xl md:text-6xl font-bold text-neutral-text-primary tracking-tight">
            FAQ <span className="text-neutral-text-secondary text-2xl md:text-3xl ml-2 tracking-normal font-sans font-normal">よくある質問</span>
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <MessageCircleQuestion size={32} className="text-primary flex-shrink-0" />
            <h2 className="font-display text-3xl font-bold text-neutral-text-primary">
              質問と回答
            </h2>
          </div>
          <div className="border-b-2 border-dashed border-gray-300 mb-8" />

          <div className="space-y-6">
            {faqItems.map(({ question, answer }) => (
              <div key={question} className="bg-neutral-bg border border-neutral-border rounded-xl p-8 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-neutral-text-primary flex items-start gap-3">
                  <HelpCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  {question}
                </h3>
                <p className="text-neutral-text-secondary md:pl-9 leading-relaxed">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

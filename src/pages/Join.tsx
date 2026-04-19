import { UserPlus, Hash, MessageSquare, ExternalLink, CheckCircle, Link } from 'lucide-react';

export default function Join() {
  return (
    <div className="flex flex-col">
      <section className="bg-neutral-bg pt-24 pb-16 px-6 border-b border-neutral-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-title text-4xl md:text-6xl font-bold text-neutral-text-primary tracking-tight">
            Join <span className="text-neutral-text-secondary text-2xl md:text-3xl ml-2 tracking-normal font-sans font-normal">参加方法</span>
          </h1>
        </div>
      </section>

      {/* 参加条件 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <CheckCircle size={32} className="text-primary flex-shrink-0" />
            <h2 className="font-display text-3xl font-bold text-neutral-text-primary">
              参加条件
            </h2>
          </div>
          <div className="border-b-2 border-dashed border-gray-300 mb-8" />

          <div className="bg-neutral-bg border border-neutral-border rounded-xl p-8">
            <ul className="space-y-4 text-neutral-text-secondary text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span className="mt-1">Minecraft Java版 を所有する、<strong>13歳以上</strong>の方が参加できます。</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span className="mt-1">開発日にご自身で開発・実装に参加できる方が対象です。<br />
                  なお、<strong>7日間毎日参加できなくても問題ありません</strong>。</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span className="mt-1">チームの人数は<strong>最大5名</strong>までとします。1名でも参加可能です。</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span className="mt-1">Player Realms と SDC in PR 双方のDiscordサーバーの<strong>双方に参加</strong>している必要があります。<br />
                  <p className="text-neutral-text-secondary">
                    <a href="https://discord.playerrealms.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark inline-flex items-center gap-1 mt-1">
                      Player Realms Discord <ExternalLink size={14} />
                    </a>
                  </p>
                  <p>
                    <a href="https://discord.gg/GXsAXGGG95" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark inline-flex items-center gap-1 mt-1">
                      SDC in PR Discord <ExternalLink size={14} />
                    </a>
                  </p>
                  </span>
                </li>
            </ul>
          </div>
        </div>
      </section>

      {/* エントリー手順 */}
      <section className="py-16 px-6 bg-neutral-bg border-y border-neutral-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <UserPlus size={32} className="text-primary flex-shrink-0" />
            <h2 className="font-display text-3xl font-bold text-neutral-text-primary">
              エントリー手順
            </h2>
          </div>
          <div className="border-b-2 border-dashed border-gray-300 mb-8" />

          <p className="text-neutral-text-secondary text-lg mb-12">
            以下のステップに従ってエントリーを完了させてください。
          </p>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative pl-12 group">
              <div className="absolute w-6 h-6 bg-white border-4 border-primary rounded-full left-0 top-1 group-hover:bg-primary transition-colors z-10" />
              <div className="absolute w-0.5 h-full bg-neutral-border left-[11px] top-6 -z-0" />

              <div className="flex items-center gap-3 mb-3">
                <Hash className="text-primary flex-shrink-0" size={24} />
                <h3 className="font-bold text-2xl text-neutral-text-primary">ステップ 1: #ticket を作成</h3>
              </div>
              <p className="text-neutral-text-secondary mb-4 text-lg">
                チームメンバーを決めたのち、Discord サーバーの <strong>#ticket</strong> を作成してください。
              </p>
              <div className="bg-white border border-neutral-border rounded-lg p-4 text-neutral-text-secondary">
                <p className="font-bold text-neutral-text-primary mb-2">ticket に記載する情報:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    チームメンバー全員の <strong>MCID</strong>（Minecraftのユーザー名）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    チームメンバー全員の <strong>Discord ID</strong>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-neutral-text-secondary mt-3">
                ※ エントリー期間内であれば、チーム変更なども可能です。その都度 #ticket で教えてください。
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative pl-12 group">
              <div className="absolute w-6 h-6 bg-white border-4 border-primary rounded-full left-0 top-1 group-hover:bg-primary transition-colors z-10" />

              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="text-primary flex-shrink-0" size={24} />
                <h3 className="font-bold text-2xl text-neutral-text-primary">ステップ 2: 運営の指示に従う</h3>
              </div>
              <p className="text-neutral-text-secondary text-lg">
                ticket 受理後、運営からの案内に従ってください。<br />
                開催期間中のアナウンスや全体サポートはすべて Discord で行われます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

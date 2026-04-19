import { ShieldCheck, Monitor, Ban, Scale, ExternalLink, Link } from 'lucide-react';

export default function Rules() {
  return (
    <div className="flex flex-col">
      <section className="bg-neutral-bg pt-24 pb-16 px-6 border-b border-neutral-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-title text-4xl md:text-6xl font-bold text-neutral-text-primary tracking-tight">
            Rules <span className="text-neutral-text-secondary text-2xl md:text-3xl ml-2 tracking-normal font-sans font-normal">ルール</span>
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* 参加対象・チーム規定 */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck size={32} className="text-primary flex-shrink-0" />
              <h2 className="font-display text-3xl font-bold text-neutral-text-primary">
                参加対象・チーム規定
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
                  <span className="mt-1">Player Realms と SDC in PR 双方のDiscordサーバーの<strong>双方に参加</strong>している必要があります。</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-neutral-border">
                <div className="flex items-start gap-3">
                  <Link size={20} className="text-warning flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-text-secondary">
                    参加リンク：
                    <a href="https://discord.playerrealms.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark inline-flex items-center gap-1 ml-1">
                      Player Realms Discord <ExternalLink size={14} />
                    </a>
                  </p>
                  <p>
                    <a href="https://discord.gg/GXsAXGGG95" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark inline-flex items-center gap-1 ml-1">
                      SDC in PR Discord <ExternalLink size={14} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* プラットフォーム規定 */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Monitor size={32} className="text-primary flex-shrink-0" />
              <h2 className="font-display text-3xl font-bold text-neutral-text-primary">
                プラットフォーム規定
              </h2>
            </div>
            <div className="border-b-2 border-dashed border-gray-300 mb-8" />
            <div className="bg-neutral-bg border border-neutral-border rounded-xl p-8">
              <ul className="space-y-4 text-neutral-text-secondary text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span className="mt-1">
                    制作物は、<strong>Player Realms から参加できるサーバー</strong>である必要があります。
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span className="mt-1">
                    バージョンは問いません。また、
                    <a href="https://playerrealms.com/thirdparty" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark inline-flex items-center gap-1">
                      Third Party <ExternalLink size={14} />
                    </a>
                    を使用してもよいです。
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span className="mt-1">バニラの <strong>Minecraft Java版で参加できる</strong>必要があります。MODサーバーは認められません。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 禁止事項 */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Ban size={32} className="text-danger flex-shrink-0" />
              <h2 className="font-display text-3xl font-bold text-danger">
                禁止事項
              </h2>
            </div>
            <div className="border-b-2 border-dashed border-gray-300 mb-8" />

            {/* イベントについて */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-8 mb-4">
              <h3 className="font-bold text-lg text-danger mb-4">イベントについて</h3>
              <ul className="space-y-3 text-danger/80 text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-danger font-bold mt-1 flex-shrink-0">×</span>
                  <span className="mt-1">複数チームへの掛け持ち参加はできません。</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-danger font-bold mt-1 flex-shrink-0">×</span>
                  <span className="mt-1">開発終了後から審査が終了するまで、作成した成果物を開発・修正してはいけません。</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-danger font-bold mt-1 flex-shrink-0">×</span>
                  <span className="mt-1">成果物は、期間内に作成されたものである必要があります。<br />
                  過去に作成された既存成果物の流用をしてはいけません。</span>
                </li>
              </ul>
            </div>

            {/* 評価・表彰について */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-8 mb-4">
              <h3 className="font-bold text-lg text-danger mb-4">評価・表彰について</h3>
              <ul className="space-y-3 text-danger/80 text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-danger font-bold mt-1 flex-shrink-0">×</span>
                  <span className="mt-1">賞金の譲渡を行ってはいけません。</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-danger font-bold mt-1 flex-shrink-0">×</span>
                  <span className="mt-1">「プレイヤー賞」に関しては、ユーザーからの評価を基に選出する予定です。<br />
                  この際、自分のチームに投票してはいけません。</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-danger font-bold mt-1 flex-shrink-0">×</span>
                  <span className="mt-1">その他不正な投票を行ってはいけません。</span>
                </li>
              </ul>
            </div>

            {/* その他 */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-8 mb-4">
              <h3 className="font-bold text-lg text-danger mb-4">その他</h3>
              <ul className="space-y-3 text-danger/80 text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-danger font-bold mt-1 flex-shrink-0">×</span>
                  <span className="mt-1">他者の著作権・知的財産を侵害するコンテンツの作成は禁止です。</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-danger font-bold mt-1 flex-shrink-0">×</span>
                  <span className="mt-1">EULAに違反するコンテンツの作成は禁止です。
                    <a href="https://www.minecraft.net/ja-jp/eula" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark inline-flex items-center gap-1 ml-1">
                      Minecraft EULA <ExternalLink size={14} />
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-danger font-bold mt-1 flex-shrink-0">×</span>
                  <span className="mt-1">他の参加者・チームへの妨害行為、誹謗中傷を禁止いたします。</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-danger font-bold mt-1 flex-shrink-0">×</span>
                  <span className="mt-1">ハラスメントや公序良俗に反する振る舞いを禁止いたします。</span>
                </li>
              </ul>
            </div>

            {/* 注意事項 */}
            <div className="bg-white p-4 rounded-lg border border-red-200 text-danger text-sm space-y-2">
              <p>※ その他、運営が不適切と判断した行為を禁止します。</p>
              <p>※ 上記の禁止事項が確認された場合、失格および今後の参加をお断りする場合がございます。ご了承ください。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
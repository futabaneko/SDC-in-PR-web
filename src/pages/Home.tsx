import { Link } from 'react-router-dom';
import { Laptop, Award, Trophy, Star, Users, Calendar, ChevronRight, ExternalLink, AlertTriangle, JapaneseYen, Medal, Vote } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-neutral-bg pt-32 pb-24 px-6 flex flex-col items-center justify-center border-b border-neutral-border">
        <div className="max-w-4xl w-full text-center">
          <h1 className="font-title text-4xl md:text-7xl font-bold text-neutral-text-primary mb-8 tracking-tight">
            Server Develop Camp <br />
            <span className="text-neutral-text-secondary"> in </span>
            <span className="text-[#00BFFF]">Player </span>
            <span className="text-[#FF69B4]">Realms</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://discord.gg/GXsAXGGG95"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5"
            >
              Discord で参加する <ExternalLink size={18} />
            </a>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 text-primary font-bold text-lg border-2 border-primary px-8 py-4 rounded-lg transition-all hover:bg-primary/5"
            >
              参加方法を見る <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Laptop size={32} className="text-primary flex-shrink-0" />
            <h2 className="font-display text-3xl font-bold text-neutral-text-primary">
              Server Develop Camp って？
            </h2>
          </div>
          <div className="border-b-2 border-dashed border-gray-300" />
          <div className="prose prose-lg text-neutral-text-secondary leading-relaxed max-w-none">
            <p className="mt-6">
              <strong>1週間</strong>の期間内に、決められた<strong>テーマ</strong>に沿ってサーバー開発を行い、そのクオリティを競うイベントです！
            </p>
            <p className="mt-3">
              5人までのチームを組んで参加できます。推奨はされませんが、1人での参加も可能です。<br />
              テーマは開発開始日（05/02）にお知らせします。
            </p>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-16 px-6 bg-neutral-bg border-y border-neutral-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Award size={32} className="text-primary flex-shrink-0" />
            <h2 className="font-display text-3xl font-bold text-neutral-text-primary">
              表彰について
            </h2>
          </div>
          <div className="border-b-2 border-dashed border-gray-300" />

          <p className="text-neutral-text-secondary mt-4 mb-8">
            今回、総額 <strong className="text-primary text-xl">20,000円</strong> の賞金をご用意しました！<br />
            賞金・賞品はチームに対して授与され、メンバーに均等に配分いたします。
          </p>

          <div className="flex flex-col gap-4">
            {/* 最優秀賞 */}
            <div className="bg-white border border-neutral-border rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="font-bold text-2xl text-neutral-text-primary flex items-center gap-2">
                  <Trophy size={24} className="text-yellow-500" /> 最優秀賞
                </h3>
                <div className="flex items-center gap-4 text-lg">
                  <span className="flex items-center text-primary font-bold"><JapaneseYen size={18} className="mr-1" />10,000円</span>
                  <span className="flex items-center text-neutral-text-secondary"><Users size={18} className="mr-1" />1組</span>
                </div>
              </div>
              <p className="text-neutral-text-secondary">
                審査員による評価で最も優れた作品に与えられます。
              </p>
            </div>

            {/* 優秀賞 */}
            <div className="bg-white border border-neutral-border rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="font-bold text-2xl text-neutral-text-primary flex items-center gap-2">
                  <Medal size={24} className="text-gray-400" /> 優秀賞
                </h3>
                <div className="flex items-center gap-4 text-lg">
                  <span className="flex items-center text-primary font-bold"><JapaneseYen size={18} className="mr-1" />5,000円</span>
                  <span className="flex items-center text-neutral-text-secondary"><Users size={18} className="mr-1" />2組</span>
                </div>
              </div>
              <p className="text-neutral-text-secondary">
                審査員による評価で優秀と認められた作品に与えられます。
              </p>
            </div>

            {/* 審査員特別賞 */}
            <div className="bg-white border border-neutral-border rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="font-bold text-2xl text-neutral-text-primary flex items-center gap-2">
                  <Star size={24} className="text-amber-400" /> 審査員特別賞
                </h3>
                <div className="flex items-center gap-4 text-lg">
                  <span className="flex items-center text-neutral-text-secondary">詳細未定</span>
                </div>
              </div>
              <p className="text-neutral-text-secondary">
                審査員による評価で特別に選出された作品に与えられます。
              </p>
            </div>

            {/* プレイヤー賞 */}
            <div className="bg-white border border-neutral-border rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="font-bold text-2xl text-neutral-text-primary flex items-center gap-2">
                  <Vote size={24} className="text-blue-400" /> プレイヤー賞
                </h3>
                <div className="flex items-center gap-4 text-lg">
                  <span className="flex items-center text-neutral-text-secondary">300,000RC</span> 
                  <span className="flex items-center text-neutral-text-secondary"><Users size={18} className="mr-1" />1組</span>
                </div>
              </div>
              <p className="text-neutral-text-secondary">
                ユーザーからの評価を基に選出されます。
              </p>
            </div>
          </div>

          {/* 賞金注意事項 */}
          <div className="mt-6 bg-white border border-neutral-border rounded-xl p-6 text-sm text-neutral-text-secondary">
            <div className="flex items-start gap-2">
              <AlertTriangle size={24} className="text-warning flex-shrink-0 mt-0.5 ml-2" />
              <div>
                <p>「最優秀賞」「優秀賞」「審査員特別賞」では、公平を期すため審査員による評価を行います。</p>
                <p className="mt-2">賞金の受け取りに関して起きた問題について、Player Realms は一切責任を負いません。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Calendar size={32} className="text-primary flex-shrink-0" />
            <h2 className="font-display text-3xl font-bold text-neutral-text-primary">
              スケジュール
            </h2>
          </div>
          <div className="border-b-2 border-dashed border-gray-300" />

          {/* Timeline */}
          <div className="mt-8 ml-6 md:ml-10 relative">
            {/* Main continuous vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-300" />

            {/* ── Event 1: エントリー受付開始 ── */}
            <div className="relative flex items-start pl-10 pb-0">
              {/* Dot on main line */}
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 -translate-x-[6.5px] rounded-full bg-primary border-[3px] border-primary/20 z-10" />
              <div>
                <div className="font-mono font-bold text-primary">2026/04/20</div>
                <div className="text-lg font-bold text-neutral-text-primary">エントリー受付開始</div>
              </div>
            </div>

            {/* Period bar: エントリー期間 */}
            <div className="relative pl-10 py-0">
              {/* Secondary bar — extends from top dot to bottom dot */}
              <div className="absolute left-[12px] -top-0 -bottom-1 w-[5px] rounded-full bg-primary/20" />
              <div className="py-7 pl-1">
                <span className="text-xs text-neutral-text-secondary tracking-wide">エントリー期間（10日間）</span>
              </div>
            </div>

            {/* ── Event 2: エントリー締め切り ── */}
            <div className="relative flex items-start pl-10 pb-8">
<div className="absolute left-0 top-1.5 w-3.5 h-3.5 -translate-x-[6.5px] rounded-full bg-primary border-[3px] border-primary/20 z-10" />
              <div>
                <div className="font-mono font-bold text-primary">2026/04/30</div>
                <div className="text-lg font-bold text-neutral-text-primary">エントリー締め切り</div>
              </div>
            </div>

            {/* ── Event 3: テーマ公開 & 開発開始 ── */}
            <div className="relative flex items-start pl-10 pb-0">
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 -translate-x-[6.5px] rounded-full bg-primary border-[3px] border-primary/20 z-10" />
              <div>
                <div className="font-mono font-bold text-primary">2026/05/02 <span className="text-base">15:00</span></div>
                <div className="text-lg font-bold text-neutral-text-primary">テーマ公開 ＆ 開発開始</div>
              </div>
            </div>

            {/* Period bar: 開発期間 */}
            <div className="relative pl-10 py-0">
              <div className="absolute left-[12px] -top-0 -bottom-1 w-[5px] rounded-full bg-primary/20" />
              <div className="py-7 pl-1">
                <span className="text-xs text-neutral-text-secondary tracking-wide">開発期間（７日間）</span>
              </div>
            </div>

            {/* ── Event 4: 開発終了 ── */}
            <div className="relative flex items-start pl-10 pb-8">
<div className="absolute left-0 top-1.5 w-3.5 h-3.5 -translate-x-[6.5px] rounded-full bg-primary border-[3px] border-primary/20 z-10" />
              <div>
                <div className="font-mono font-bold text-primary">2026/05/09 <span className="text-base">15:00</span></div>
                <div className="text-lg font-bold text-neutral-text-primary">開発終了</div>
              </div>
            </div>

            {/* ── Event 5: 審査日 ── */}
            <div className="relative flex items-start pl-10 pb-8">
<div className="absolute left-0 top-1.5 w-3.5 h-3.5 -translate-x-[6.5px] rounded-full bg-primary border-[3px] border-primary/20 z-10" />
              <div>
                <div className="font-mono font-bold text-primary">2026/05/09</div>
                <div className="text-lg font-bold text-neutral-text-primary">審査</div>
              </div>
            </div>

            {/* ── Event 6: 審査予備日 ── */}
            <div className="relative flex items-start pl-10 pb-8">
              <div className="absolute left-0 top-1.5 w-3 h-3 -translate-x-[5.5px] rounded-full bg-gray-400 border-[3px] border-gray-200 z-10" />
              <div>
                <div className="font-mono font-bold text-neutral-text-secondary">2026/05/10</div>
                <div className="text-base font-bold text-neutral-text-secondary">審査予備日</div>
              </div>
            </div>

            {/* ── Event 7: 結果発表 ── */}
            <div className="relative flex items-start pl-10">
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 -translate-x-[6.5px] rounded-full bg-primary border-[3px] border-primary/20 z-10" />
              <div>
                <div className="font-mono font-bold text-primary">2026/05/10 ~</div>
                <div className="text-lg font-bold text-neutral-text-primary">結果発表</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-neutral-bg border-t border-neutral-border">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <Link
            to="/join"
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-primary-dark transition-colors border-b-2 border-transparent hover:border-primary-dark pb-1"
          >
            詳しい参加方法を確認する <ChevronRight size={20} />
          </Link>
          <br />
          <Link
            to="/rules"
            className="inline-flex items-center gap-2 text-neutral-text-secondary font-bold hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
          >
            ルール・禁止事項を確認する <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

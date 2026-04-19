import { useEffect, useState } from 'react';

const FadeUpChar = ({ char, delayOffset }: { char: string, delayOffset: number }) => (
  <span
    className="opacity-0 inline-block text-center"
    style={{ animation: `loadingFadeUp 0.1s forwards ${delayOffset * 0.04}s` }}
  >
    {char}
  </span>
);

const FadeUpText = ({ text, delayStart }: { text: string, delayStart: number }) => (
  <span className="inline-flex whitespace-pre">
    {text.split('').map((char, i) => (
      <FadeUpChar key={i} char={char} delayOffset={delayStart + i} />
    ))}
  </span>
);

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    // 1. 各文字の出現を待ち、「Server Develop Camp」が安定した中央にある状態を見せる
    const t1 = setTimeout(() => setPhase(1), 1500); // 縮小・フェードアウト開始
    
    // 2. 「SDC」へ圧縮が完了したら、「in PR」を右に表示させる（展開の開始）
    const t2 = setTimeout(() => setPhase(2), 2700); 
    
    // 3. 全体が完了し、画面全体のフェードアウトを開始する
    const t3 = setTimeout(() => setPhase(3), 4000);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const transitionClasses = "overflow-hidden transition-all duration-1000 ease-in-out flex";

  return (
    <div className={`fixed inset-0 z-[100] bg-neutral-bg flex items-center justify-center transition-opacity duration-700 ease-out max-w-[100vw] overflow-hidden ${phase >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
         onTransitionEnd={(e) => {
           if (phase >= 3 && e.target === e.currentTarget) {
             onComplete();
           }
         }}>
      
      {/* 
        外側のコンテナを flex items-center justify-center とすることで、
        中の文字の幅が短くなっても、伸びても、「常に全体が画面のど真ん中に来る」よう自動調整されます。
        Sの位置は自動的に中央へスライドしていきます。
      */}
      <div className="font-title text-3xl md:text-5xl font-bold flex items-center justify-center text-neutral-text-primary h-24">

        {/* --- S --- */}
        <FadeUpText text="S" delayStart={0} />

        {/* --- erver --- (幅が縮まりながらゆっくりフェードアウト) */}
        <div 
          className={transitionClasses}
          style={{ width: phase >= 1 ? '0ch' : '5ch', opacity: phase >= 1 ? 0 : 1 }}
        >
          <FadeUpText text="erver" delayStart={1} />
        </div>

        {/* --- Space 1 --- (縮むだけ) */}
        <div 
          className={transitionClasses}
          style={{ width: phase >= 1 ? '0ch' : '1ch' }}
        >
          <FadeUpText text=" " delayStart={6} />
        </div>

        {/* --- D --- */}
        <FadeUpText text="D" delayStart={7} />

        {/* --- evelop --- */}
        <div 
          className={transitionClasses}
          style={{ width: phase >= 1 ? '0ch' : '6ch', opacity: phase >= 1 ? 0 : 1 }}
        >
          <FadeUpText text="evelop" delayStart={8} />
        </div>

        {/* --- Space 2 --- */}
        <div 
          className={transitionClasses}
          style={{ width: phase >= 1 ? '0ch' : '1ch' }}
        >
          <FadeUpText text=" " delayStart={14} />
        </div>

        {/* --- C --- */}
        <FadeUpText text="C" delayStart={15} />

        {/* --- amp --- */}
        <div 
          className={transitionClasses}
          style={{ width: phase >= 1 ? '0ch' : '3ch', opacity: phase >= 1 ? 0 : 1 }}
        >
          <FadeUpText text="amp" delayStart={16} />
        </div>

        {/* --- in PR --- (幅が広がりながらフェードイン) */}
        <div 
          className={`${transitionClasses} whitespace-pre`}
          style={{ width: phase >= 2 ? '6ch' : '0ch', opacity: phase >= 2 ? 1 : 0 }}
        >
          <span className="text-neutral-text-secondary"> in </span>
          <span className="text-[#00BFFF]">P</span>
          <span className="text-[#FF69B4]">R</span>
        </div>

      </div>
    </div>
  );
}

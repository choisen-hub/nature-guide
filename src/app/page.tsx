'use client';

import { useState, useMemo, useEffect } from 'react';
import { creatures } from '@/data/creatures';
import { Category, categoryMeta, Creature, taxonomyLevels } from '@/data/types';
import Link from 'next/link';

const categories: (Category | 'all')[] = ['all', 'animals', 'birds', 'fish', 'trees', 'flowers', 'mushrooms'];

function TaxonomyTable({ creature }: { creature: Creature }) {
  const t = creature.taxonomy;
  const rows = [
    { ko: '계', latin: 'Kingdom', value: t.kingdom, koValue: t.kingdomKo },
    { ko: '문', latin: 'Phylum', value: t.phylum, koValue: t.phylumKo },
    { ko: '강', latin: 'Class', value: t.class, koValue: t.classKo },
    { ko: '목', latin: 'Order', value: t.order, koValue: t.orderKo },
    { ko: '과', latin: 'Family', value: t.family, koValue: t.familyKo },
    { ko: '속', latin: 'Genus', value: t.genus, koValue: t.genusKo },
    { ko: '종', latin: 'Species', value: t.species, koValue: '' },
  ];

  return (
    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
      <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">🧬 린네 분류 체계</h3>
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <div key={r.ko} className="flex items-center text-sm gap-2" style={{ paddingLeft: `${i * 12}px` }}>
            <span className="text-emerald-600 text-xs font-mono w-6 shrink-0">{r.ko}</span>
            <span className="text-gray-500 text-xs w-14 shrink-0">{r.latin}</span>
            <span className="text-gray-200 italic text-xs">{r.value}</span>
            {r.koValue && <span className="text-gray-500 text-xs">({r.koValue})</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function CreatureModal({ creature, onClose }: { creature: Creature; onClose: () => void }) {
  const meta = categoryMeta[creature.category];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl leading-none">&times;</button>

        <div className="text-center mb-6">
          {creature.imageUrl ? (
            <img
              src={creature.imageUrl}
              alt={creature.koreanName}
              className="w-32 h-32 object-cover rounded-2xl mx-auto mb-3 bg-[#1a1a1a]"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden'); }}
            />
          ) : null}
          <div className={`emoji-icon mb-3 ${creature.imageUrl ? 'hidden' : ''}`}>{creature.emoji}</div>
          <h2 className="text-2xl font-bold mb-1">{creature.koreanName}</h2>
          <p className="text-gray-400 text-sm">{creature.englishName}</p>
          <p className="text-gray-500 text-xs italic mt-1">{creature.scientificName}</p>
        </div>

        <div className="flex gap-2 justify-center mb-6 flex-wrap">
          <span className={`cat-tag ${meta.cssClass}`}>{meta.emoji} {meta.label}</span>
          <span className="cat-tag" style={{ '--cat-color': '#888' } as React.CSSProperties}>{creature.subcategory}</span>
          {creature.sushiNeta && <span className="cat-tag" style={{ '--cat-color': '#ff6b35' } as React.CSSProperties}>🍣 스시네타</span>}
        </div>

        <div className="space-y-5 text-sm">
          <TaxonomyTable creature={creature} />

          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">📍 서식지</h3>
            <p className="text-gray-300">{creature.habitat}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">🔍 특징</h3>
            <ul className="space-y-1.5">
              {creature.characteristics.map((c, i) => (
                <li key={i} className="text-gray-300 flex gap-2">
                  <span className="text-gray-600 select-none">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
            <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">💡 재미있는 사실</h3>
            <p className="text-gray-300">{creature.funFact}</p>
          </div>

          {creature.sushiNeta && (
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
              <h3 className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-3">🍣 스시네타 정보</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-500 text-xs">和名</span>
                  <p className="text-gray-200 font-medium">{creature.sushiNeta.japaneseName}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">스시명</span>
                  <p className="text-gray-200 font-medium">{creature.sushiNeta.sushiName}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">旬 (제철)</span>
                  <p className="text-gray-200 font-medium">{creature.sushiNeta.bestSeason}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500 text-xs">맛 프로필</span>
                  <p className="text-gray-200">{creature.sushiNeta.tasteProfile}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CreatureCard({ creature, sushiMode, onClick }: { creature: Creature; sushiMode: boolean; onClick: () => void }) {
  const meta = categoryMeta[creature.category];
  const isSushi = !!creature.sushiNeta;
  const highlighted = sushiMode && isSushi;
  const dimmed = sushiMode && !isSushi;

  return (
    <div
      className={`creature-card ${meta.cssClass} ${highlighted ? 'sushi-glow' : ''} ${dimmed ? 'opacity-30' : ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="w-16 h-16 shrink-0">
          {creature.imageUrl ? (
            <img
              src={creature.imageUrl}
              alt={creature.koreanName}
              className="w-16 h-16 object-cover rounded-xl bg-[#1a1a1a]"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden'); }}
            />
          ) : null}
          <div className={`emoji-icon ${creature.imageUrl ? 'hidden' : ''}`}>{creature.emoji}</div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className={`cat-tag ${meta.cssClass}`}>{meta.emoji} {meta.label}</span>
          {isSushi && <span className="text-xs text-orange-400">🍣 {creature.sushiNeta!.japaneseName}</span>}
        </div>
      </div>

      <h3 className="text-lg font-bold mb-0.5">{creature.koreanName}</h3>
      <p className="text-gray-400 text-sm mb-0.5">{creature.englishName}</p>
      <p className="text-gray-600 text-xs italic mb-3">{creature.scientificName}</p>

      <div className="text-[10px] text-gray-600 mb-2 flex flex-wrap gap-x-2">
        <span>{creature.taxonomy.familyKo}</span>
        <span>·</span>
        <span>{creature.taxonomy.family}</span>
      </div>

      <p className="text-gray-400 text-xs line-clamp-2">{creature.characteristics[0]}</p>

      {isSushi && sushiMode && (
        <div className="mt-3 pt-3 border-t border-orange-500/20 text-xs text-orange-300">
          旬: {creature.sushiNeta!.bestSeason}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [sushiMode, setSushiMode] = useState(false);
  const [selected, setSelected] = useState<Creature | null>(null);
  const [dailyCreature, setDailyCreature] = useState<Creature | null>(null);

  useEffect(() => {
    const today = new Date();
    const idx = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % creatures.length;
    setDailyCreature(creatures[idx]);
  }, []);

  const filtered = useMemo(() => {
    let list = creatures;
    if (activeCategory !== 'all') list = list.filter(c => c.category === activeCategory);
    if (sushiMode) list = list.filter(c => c.category === 'fish');
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(c =>
        c.koreanName.toLowerCase().includes(q) ||
        c.englishName.toLowerCase().includes(q) ||
        c.scientificName.toLowerCase().includes(q) ||
        c.taxonomy.family.toLowerCase().includes(q) ||
        c.taxonomy.familyKo.includes(q) ||
        c.taxonomy.order.toLowerCase().includes(q) ||
        c.taxonomy.orderKo.includes(q) ||
        (c.sushiNeta?.japaneseName && c.sushiNeta.japaneseName.includes(q))
      );
    }
    return list;
  }, [search, activeCategory, sushiMode]);

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">🌿 자연 생물도감</h1>
        <p className="text-gray-500 text-sm mb-3">Nature Field Guide — {creatures.length}종의 생물 탐험</p>
        <Link href="/taxonomy" className="inline-block text-sm text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 rounded-full px-4 py-1.5 hover:bg-emerald-500/10 transition-colors">
          🧬 린네 분류 체계 보기
        </Link>
      </header>

      {dailyCreature && (
        <div
          className="mb-6 p-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 cursor-pointer hover:bg-indigo-500/10 transition-colors"
          onClick={() => setSelected(dailyCreature)}
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">{dailyCreature.emoji}</span>
            <div>
              <p className="text-xs text-indigo-400 font-medium mb-1">🎲 오늘의 생물</p>
              <p className="font-bold text-lg">{dailyCreature.koreanName}</p>
              <p className="text-gray-500 text-sm">{dailyCreature.englishName} · <em>{dailyCreature.scientificName}</em></p>
            </div>
          </div>
        </div>
      )}

      <div className="mb-4">
        <input
          type="text"
          placeholder="🔍 검색 (한글, English, 학명, 和名, 과명)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#141414] border border-[#333] text-white placeholder-gray-600 outline-none focus:border-indigo-500 transition-colors"
        />
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
        {categories.map(cat => {
          const isActive = activeCategory === cat && !sushiMode;
          const label = cat === 'all' ? '🌍 전체' : `${categoryMeta[cat].emoji} ${categoryMeta[cat].label}`;
          return (
            <button key={cat} className={`tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat); setSushiMode(false); }}>
              {label}
            </button>
          );
        })}
        <button className={`tab-btn ${sushiMode ? 'sushi-active' : ''}`}
          onClick={() => { setSushiMode(!sushiMode); if (!sushiMode) setActiveCategory('all'); }}>
          🍣 스시네타
        </button>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        {filtered.length}종 표시 중
        {sushiMode && <span className="text-orange-400 ml-2">· 스시네타 모드 활성</span>}
      </p>

      <div className="card-grid">
        {filtered.map(creature => (
          <CreatureCard key={creature.id} creature={creature} sushiMode={sushiMode} onClick={() => setSelected(creature)} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-600">
          <p className="text-4xl mb-4">🔍</p>
          <p>검색 결과가 없습니다</p>
        </div>
      )}

      {selected && <CreatureModal creature={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

'use client';

import { useState, useMemo } from 'react';
import { creatures } from '@/data/creatures';
import { Creature, taxonomyLevels } from '@/data/types';
import Link from 'next/link';

// Build a nested tree: Kingdom → Phylum → Class → Order → Family → Genus → Species
interface TreeNode {
  name: string;
  koName?: string;
  level: number; // 0=kingdom .. 6=species
  children: TreeNode[];
  creature?: Creature; // only at leaf
  count: number;
}

function buildTree(data: Creature[]): TreeNode[] {
  const root: TreeNode[] = [];
  const keys: Array<keyof Creature['taxonomy']> = ['kingdom', 'phylum', 'class', 'order', 'family', 'genus', 'species'];
  const koKeys: Array<keyof Creature['taxonomy']> = ['kingdomKo', 'phylumKo', 'classKo', 'orderKo', 'familyKo', 'genusKo', 'species'];

  for (const c of data) {
    let currentLevel = root;
    for (let depth = 0; depth < 7; depth++) {
      const name = c.taxonomy[keys[depth]];
      const koName = depth < 6 ? c.taxonomy[koKeys[depth]] : c.koreanName;
      let node = currentLevel.find(n => n.name === name);
      if (!node) {
        node = { name, koName, level: depth, children: [], count: 0 };
        if (depth === 6) node.creature = c;
        currentLevel.push(node);
      }
      node.count++;
      currentLevel = node.children;
    }
  }
  return root;
}

const levelColors = [
  'border-red-500/40 bg-red-500/10 text-red-300',
  'border-orange-500/40 bg-orange-500/10 text-orange-300',
  'border-yellow-500/40 bg-yellow-500/10 text-yellow-300',
  'border-green-500/40 bg-green-500/10 text-green-300',
  'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
  'border-blue-500/40 bg-blue-500/10 text-blue-300',
  'border-purple-500/40 bg-purple-500/10 text-purple-300',
];

const levelEmojis = ['👑', '📐', '🏛️', '📋', '👪', '🔬', '🧬'];

function TreeNodeView({ node, defaultOpen }: { node: TreeNode; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const isLeaf = node.level === 6;
  const levelInfo = taxonomyLevels[node.level];

  return (
    <div className={`${node.level > 0 ? 'ml-4 md:ml-6' : ''}`}>
      <div
        className={`flex items-center gap-2 py-1.5 px-3 rounded-lg border ${levelColors[node.level]} cursor-pointer hover:brightness-125 transition-all mb-1`}
        onClick={() => !isLeaf && setOpen(!open)}
      >
        {!isLeaf && (
          <span className={`text-xs transition-transform ${open ? 'rotate-90' : ''}`}>▶</span>
        )}
        <span className="text-xs opacity-60">{levelEmojis[node.level]}</span>
        <span className="text-xs font-mono opacity-50">{levelInfo.ko}</span>
        <span className={`text-sm ${isLeaf ? 'italic' : 'font-medium'}`}>
          {node.name}
        </span>
        {node.koName && (
          <span className="text-xs opacity-60">
            {isLeaf && node.creature ? `${node.creature.emoji} ` : ''}
            {node.koName}
          </span>
        )}
        {!isLeaf && (
          <span className="text-[10px] opacity-40 ml-auto">{node.count}</span>
        )}
      </div>
      {open && !isLeaf && (
        <div className="border-l border-white/5 ml-3">
          {node.children
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(child => (
              <TreeNodeView key={child.name} node={child} defaultOpen={node.level < 1} />
            ))}
        </div>
      )}
    </div>
  );
}

function LinnaeusInfo() {
  return (
    <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        📖 린네 분류 체계란?
      </h2>
      <div className="text-sm text-gray-300 space-y-3">
        <p>
          <strong className="text-white">카를 폰 린네</strong>(Carl von Linné, 1707~1778)는 스웨덴의 생물학자로,
          모든 생물을 체계적으로 분류하는 <strong className="text-emerald-400">이명법(二名法, Binomial nomenclature)</strong>을 확립했습니다.
        </p>
        <p>
          이명법은 <strong className="text-emerald-400">속명(Genus) + 종소명(Species epithet)</strong>으로 학명을 구성합니다.
          예를 들어, 한국호랑이는 <em className="text-yellow-300">Panthera tigris</em>로,
          <em>Panthera</em>(표범속)에 속하는 <em>tigris</em>(호랑이종)라는 뜻입니다.
        </p>
        <p className="text-gray-400">
          이 체계 덕분에 전 세계 과학자들이 언어와 관계없이 같은 생물을 정확히 지칭할 수 있게 되었습니다.
        </p>
      </div>

      <h3 className="text-lg font-bold mt-6 mb-3">7단계 분류 체계</h3>
      <div className="space-y-2">
        {taxonomyLevels.map((lvl, i) => (
          <div key={lvl.key} className={`flex items-center gap-3 py-2 px-3 rounded-lg border ${levelColors[i]}`}
            style={{ marginLeft: `${i * 16}px` }}>
            <span>{levelEmojis[i]}</span>
            <span className="font-bold text-sm w-6">{lvl.ko}</span>
            <span className="text-xs opacity-70 w-24">{lvl.latin}</span>
            <span className="text-xs opacity-50">{lvl.desc}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
        <h4 className="text-sm font-bold text-emerald-400 mb-2">💡 예시: 반달가슴곰의 분류</h4>
        <div className="text-xs text-gray-400 space-y-1 font-mono">
          <p>👑 계 Animalia (동물계)</p>
          <p className="ml-3">📐 문 Chordata (척삭동물문)</p>
          <p className="ml-6">🏛️ 강 Mammalia (포유강)</p>
          <p className="ml-9">📋 목 Carnivora (식육목)</p>
          <p className="ml-12">👪 과 Ursidae (곰과)</p>
          <p className="ml-15">🔬 속 <em>Ursus</em> (곰속)</p>
          <p className="ml-18">🧬 종 <em>U. thibetanus</em> (반달가슴곰)</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
        <h4 className="text-sm font-bold text-indigo-400 mb-2">🤔 왜 이명법이 중요할까?</h4>
        <ul className="text-xs text-gray-400 space-y-1">
          <li>• <strong>보편성</strong> — 라틴어 기반으로 모든 나라에서 동일하게 사용</li>
          <li>• <strong>정확성</strong> — "바다가재"가 나라마다 다른 동물을 가리킬 수 있지만, 학명은 하나</li>
          <li>• <strong>관계 표시</strong> — 같은 속(Genus)의 종들은 가까운 친척임을 알 수 있음</li>
          <li>• <strong>안정성</strong> — 일상 이름이 바뀌어도 학명은 규칙에 따라 유지</li>
        </ul>
      </div>
    </div>
  );
}

// Stats summary
function TaxonomyStats() {
  const stats = useMemo(() => {
    const kingdoms = new Set(creatures.map(c => c.taxonomy.kingdom));
    const phyla = new Set(creatures.map(c => c.taxonomy.phylum));
    const classes = new Set(creatures.map(c => c.taxonomy.class));
    const orders = new Set(creatures.map(c => c.taxonomy.order));
    const families = new Set(creatures.map(c => c.taxonomy.family));
    const genera = new Set(creatures.map(c => c.taxonomy.genus));
    return [
      { label: '계', count: kingdoms.size },
      { label: '문', count: phyla.size },
      { label: '강', count: classes.size },
      { label: '목', count: orders.size },
      { label: '과', count: families.size },
      { label: '속', count: genera.size },
      { label: '종', count: creatures.length },
    ];
  }, []);

  return (
    <div className="grid grid-cols-7 gap-2 mb-8">
      {stats.map((s, i) => (
        <div key={s.label} className={`text-center p-3 rounded-xl border ${levelColors[i]}`}>
          <div className="text-2xl font-bold">{s.count}</div>
          <div className="text-xs opacity-70">{s.label} {taxonomyLevels[i].latin}</div>
        </div>
      ))}
    </div>
  );
}

export default function TaxonomyPage() {
  const tree = useMemo(() => buildTree(creatures), []);
  const [expandAll, setExpandAll] = useState(false);

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto">
      <header className="mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-300 mb-4 inline-block">
          ← 생물도감으로 돌아가기
        </Link>
        <h1 className="text-3xl font-bold mb-2">🧬 린네 분류 체계</h1>
        <p className="text-gray-500 text-sm">도감에 수록된 {creatures.length}종의 생물학적 분류 트리</p>
      </header>

      <LinnaeusInfo />

      <TaxonomyStats />

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">🌲 분류 트리</h2>
        <button
          onClick={() => setExpandAll(!expandAll)}
          className="text-xs text-gray-400 hover:text-gray-200 border border-gray-700 rounded-full px-3 py-1 hover:border-gray-500 transition-colors"
        >
          {expandAll ? '모두 접기' : '모두 펼치기'}
        </button>
      </div>

      <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-4 md:p-6">
        {/* Force re-render on expandAll toggle via key */}
        <div key={expandAll ? 'open' : 'closed'}>
          {tree
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(node => (
              <TreeNodeView key={node.name} node={node} defaultOpen={expandAll || true} />
            ))}
        </div>
      </div>
    </div>
  );
}

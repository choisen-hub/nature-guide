export type Category = 'animals' | 'birds' | 'fish' | 'trees' | 'flowers' | 'mushrooms';

export interface Taxonomy {
  kingdom: string;    // 계
  phylum: string;     // 문
  class: string;      // 강
  order: string;      // 목
  family: string;     // 과
  genus: string;      // 속
  species: string;    // 종
  kingdomKo: string;
  phylumKo: string;
  classKo: string;
  orderKo: string;
  familyKo: string;
  genusKo: string;
}

export interface SushiNeta {
  japaneseName: string;
  sushiName: string;
  bestSeason: string;
  tasteProfile: string;
}

export interface Creature {
  id: string;
  koreanName: string;
  englishName: string;
  scientificName: string;
  category: Category;
  subcategory: string;
  emoji: string;
  imageUrl: string;
  habitat: string;
  characteristics: string[];
  funFact: string;
  taxonomy: Taxonomy;
  sushiNeta?: SushiNeta;
}

export const categoryMeta: Record<Category, { label: string; emoji: string; cssClass: string }> = {
  animals:   { label: '동물', emoji: '🐾', cssClass: 'cat-animals' },
  birds:     { label: '조류', emoji: '🐦', cssClass: 'cat-birds' },
  fish:      { label: '어류', emoji: '🐟', cssClass: 'cat-fish' },
  trees:     { label: '나무', emoji: '🌳', cssClass: 'cat-trees' },
  flowers:   { label: '꽃과 풀', emoji: '🌸', cssClass: 'cat-flowers' },
  mushrooms: { label: '버섯', emoji: '🍄', cssClass: 'cat-mushrooms' },
};

export const taxonomyLevels = [
  { key: 'kingdom', ko: '계', latin: 'Regnum', desc: '가장 큰 분류 단위' },
  { key: 'phylum', ko: '문', latin: 'Phylum/Divisio', desc: '체제(body plan) 기준' },
  { key: 'class', ko: '강', latin: 'Classis', desc: '주요 형태적 특성' },
  { key: 'order', ko: '목', latin: 'Ordo', desc: '공통 조상 기반 그룹' },
  { key: 'family', ko: '과', latin: 'Familia', desc: '밀접한 속의 모임' },
  { key: 'genus', ko: '속', latin: 'Genus', desc: '종을 포함하는 그룹' },
  { key: 'species', ko: '종', latin: 'Species', desc: '분류의 기본 단위' },
] as const;

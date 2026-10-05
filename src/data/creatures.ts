import { Creature } from './types';

export const creatures: Creature[] = [
  // ==================== 🐾 동물 (Animals) ====================
  {
    id: 'a1', koreanName: '반달가슴곰', englishName: 'Asiatic Black Bear', scientificName: 'Ursus thibetanus',
    category: 'animals', subcategory: '포유류', emoji: '🐻',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Ursus_thibetanus_3_%28Wroclaw_zoo%29.JPG/200px-Ursus_thibetanus_3_%28Wroclaw_zoo%29.JPG',
    habitat: '지리산, 설악산 등 한반도 산악지대',
    characteristics: ['가슴에 흰색 V자 반달 무늬', '잡식성으로 도토리, 꿀, 곤충 등을 먹음', '나무 타기에 능숙', '겨울잠을 자는 동면 동물', '체중 60~200kg'],
    funFact: '한국에서는 멸종위기 1급으로 지정되어 지리산에서 복원 프로젝트가 진행 중이며, 현재 약 80마리가 야생에 살고 있다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Ursidae', genus: 'Ursus', species: 'U. thibetanus', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '포유강', orderKo: '식육목', familyKo: '곰과', genusKo: '곰속' }
  },
  {
    id: 'a2', koreanName: '진돗개', englishName: 'Korean Jindo Dog', scientificName: 'Canis lupus familiaris',
    category: 'animals', subcategory: '포유류', emoji: '🐕',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Huskiesatrest.jpg/200px-Huskiesatrest.jpg',
    habitat: '전라남도 진도 원산, 한국 전역에서 사육',
    characteristics: ['충성심이 매우 강함', '삼각형의 쫑긋한 귀', '이중모로 추위에 강함', '사냥 본능이 뛰어남', '체중 15~23kg'],
    funFact: '1962년 천연기념물 제53호로 지정되었으며, 주인을 찾아 수백 km를 걸어 돌아간 이야기로 유명하다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Canidae', genus: 'Canis', species: 'C. lupus familiaris', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '포유강', orderKo: '식육목', familyKo: '개과', genusKo: '개속' }
  },
  {
    id: 'a3', koreanName: '삵', englishName: 'Leopard Cat', scientificName: 'Prionailurus bengalensis',
    category: 'animals', subcategory: '포유류', emoji: '🐱',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Prionailurus_bengalensis_bengalensis_2-D%C3%A9coupe.JPG/200px-Prionailurus_bengalensis_bengalensis_2-D%C3%A9coupe.JPG',
    habitat: '한반도 전역의 산림, 하천 주변',
    characteristics: ['몸에 표범 같은 반점 무늬', '야행성 단독 생활', '수영을 잘 함', '체중 3~5kg의 소형 고양이과', '뛰어난 사냥 실력'],
    funFact: '고양이와 비슷하게 생겼지만 야생 동물로, 한국에서 가장 흔한 야생 고양이과 동물이다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae', genus: 'Prionailurus', species: 'P. bengalensis', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '포유강', orderKo: '식육목', familyKo: '고양이과', genusKo: '살쾡이속' }
  },
  {
    id: 'a4', koreanName: '수달', englishName: 'Eurasian Otter', scientificName: 'Lutra lutra',
    category: 'animals', subcategory: '포유류', emoji: '🦦',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fischotter%2C_Lutra_Lutra.JPG/200px-Fischotter%2C_Lutra_Lutra.JPG',
    habitat: '하천, 호수, 해안가',
    characteristics: ['유선형 몸과 물갈퀴 발', '수중에서 뛰어난 사냥 능력', '두꺼운 방수 털', '영역 표시를 위해 배설물 사용', '체중 7~12kg'],
    funFact: '천연기념물 제330호로 최근 서울 한강에서도 수달이 발견되어 도심 하천 생태계 복원의 상징이 되었다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Mustelidae', genus: 'Lutra', species: 'L. lutra', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '포유강', orderKo: '식육목', familyKo: '족제비과', genusKo: '수달속' }
  },
  {
    id: 'a5', koreanName: '고라니', englishName: 'Water Deer', scientificName: 'Hydropotes inermis',
    category: 'animals', subcategory: '포유류', emoji: '🦌',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hydropotes_inermis_male.JPG/200px-Hydropotes_inermis_male.JPG',
    habitat: '한반도, 중국 동부의 습지, 초원, 농경지',
    characteristics: ['뿔이 없는 유일한 사슴과 동물', '수컷은 긴 송곳니(엄니)를 가짐', '단독 생활', '헤엄을 잘 침', '체중 9~14kg'],
    funFact: '전 세계 고라니의 약 50% 이상이 한국에 서식하며, IUCN 취약종이지만 한국에서는 오히려 개체수가 많아 유해동물로 분류되기도 한다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Cervidae', genus: 'Hydropotes', species: 'H. inermis', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '포유강', orderKo: '우제목(소목)', familyKo: '사슴과', genusKo: '고라니속' }
  },
  {
    id: 'a6', koreanName: '멧돼지', englishName: 'Wild Boar', scientificName: 'Sus scrofa',
    category: 'animals', subcategory: '포유류', emoji: '🐗',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Wildschwein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg/200px-Wildschwein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg',
    habitat: '산림, 농경지 인근',
    characteristics: ['강인한 체격과 날카로운 엄니', '잡식성', '뛰어난 후각', '시속 40km로 달릴 수 있음', '체중 50~200kg'],
    funFact: '최근 도시 근교에서 자주 출몰하며, 서울 도심에서도 목격되는 일이 잦아졌다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Suidae', genus: 'Sus', species: 'S. scrofa', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '포유강', orderKo: '우제목(소목)', familyKo: '멧돼지과', genusKo: '멧돼지속' }
  },
  {
    id: 'a7', koreanName: '너구리', englishName: 'Raccoon Dog', scientificName: 'Nyctereutes procyonoides',
    category: 'animals', subcategory: '포유류', emoji: '🦝',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/%D0%84%D0%BD%D0%BE%D1%82%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0_%28Nyctereutes_procyonoides%29.jpg/200px-%D0%84%D0%BD%D0%BE%D1%82%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0_%28Nyctereutes_procyonoides%29.jpg',
    habitat: '산림, 하천변, 농경지',
    characteristics: ['얼굴에 검은 마스크 무늬', '개과이지만 나무를 탈 수 있음', '잡식성', '겨울에 동면에 가까운 수면', '체중 4~10kg'],
    funFact: '개과 동물 중 유일하게 겨울잠을 자며, 일본의 "타누키" 전설의 모델이다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Canidae', genus: 'Nyctereutes', species: 'N. procyonoides', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '포유강', orderKo: '식육목', familyKo: '개과', genusKo: '너구리속' }
  },
  {
    id: 'a8', koreanName: '담비', englishName: 'Yellow-throated Marten', scientificName: 'Martes flavigula',
    category: 'animals', subcategory: '포유류', emoji: '🐾',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Martes_flavigula%2C_yellow-throated_marten.jpg/200px-Martes_flavigula%2C_yellow-throated_marten.jpg',
    habitat: '깊은 산림지대',
    characteristics: ['노란 목과 가슴', '민첩하고 나무를 잘 탐', '소규모 무리 생활', '잡식성으로 과일부터 작은 사슴까지 사냥', '체중 2~5kg'],
    funFact: '족제비과 중 드물게 무리를 지어 사냥하며, 자신보다 훨씬 큰 고라니도 무리로 사냥할 수 있다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Mustelidae', genus: 'Martes', species: 'M. flavigula', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '포유강', orderKo: '식육목', familyKo: '족제비과', genusKo: '담비속' }
  },
  {
    id: 'a9', koreanName: '한국호랑이', englishName: 'Siberian Tiger', scientificName: 'Panthera tigris altaica',
    category: 'animals', subcategory: '포유류', emoji: '🐅',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/200px-P.t.altaica_Tomak_Male.jpg',
    habitat: '과거 한반도 전역, 현재 러시아 극동·중국 동북부',
    characteristics: ['호랑이 중 가장 큰 아종', '두꺼운 털로 추위에 적응', '단독 생활, 넓은 영역', '최대 체중 300kg 이상', '강력한 턱과 발톱'],
    funFact: '한반도에서는 1920년대를 마지막으로 야생 호랑이가 사라졌지만, 민화와 올림픽 마스코트 등 한국 문화의 상징으로 남아있다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae', genus: 'Panthera', species: 'P. tigris altaica', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '포유강', orderKo: '식육목', familyKo: '고양이과', genusKo: '표범속' }
  },
  {
    id: 'a10', koreanName: '하늘다람쥐', englishName: 'Siberian Flying Squirrel', scientificName: 'Pteromys volans',
    category: 'animals', subcategory: '포유류', emoji: '🐿️',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Pteromys_volans_292232567.jpg/200px-Pteromys_volans_292232567.jpg',
    habitat: '침엽수림, 혼합림의 수목 위',
    characteristics: ['비막으로 최대 50m 활공', '야행성', '큰 눈과 납작한 꼬리', '체중 95~170g', '둥지를 나무 구멍에 만듦'],
    funFact: '천연기념물 제328호로 지정되었으며, 한국에서 가장 귀여운 야생동물로 꼽힌다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Sciuridae', genus: 'Pteromys', species: 'P. volans', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '포유강', orderKo: '쥐목(설치목)', familyKo: '다람쥐과', genusKo: '하늘다람쥐속' }
  },
  {
    id: 'a11', koreanName: '장수풍뎅이', englishName: 'Japanese Rhinoceros Beetle', scientificName: 'Allomyrina dichotoma',
    category: 'animals', subcategory: '곤충', emoji: '🪲',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Kabutomushi-JapaneseBeetle-July2004.jpg/200px-Kabutomushi-JapaneseBeetle-July2004.jpg',
    habitat: '참나무 숲, 수액이 나오는 활엽수림',
    characteristics: ['수컷의 큰 Y자 뿔', '야행성으로 수액을 먹음', '체장 40~85mm', '강력한 힘(자기 체중의 20배)', '한여름에 주로 활동'],
    funFact: '한국 아이들에게 가장 인기 있는 곤충으로, 사육이 비교적 쉬워 곤충 사육 입문종이다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Arthropoda', class: 'Insecta', order: 'Coleoptera', family: 'Scarabaeidae', genus: 'Allomyrina', species: 'A. dichotoma', kingdomKo: '동물계', phylumKo: '절지동물문', classKo: '곤충강', orderKo: '딱정벌레목', familyKo: '풍뎅이과', genusKo: '장수풍뎅이속' }
  },
  {
    id: 'a12', koreanName: '사슴벌레', englishName: 'Stag Beetle', scientificName: 'Lucanus maculifemoratus',
    category: 'animals', subcategory: '곤충', emoji: '🪲',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Lucanus_maculifemoratus_maculifemoratus_sjh.jpg/200px-Lucanus_maculifemoratus_maculifemoratus_sjh.jpg',
    habitat: '참나무류가 있는 산림',
    characteristics: ['수컷의 큰 턱(대악)', '사슴뿔 같은 집게 모양', '야행성', '체장 25~75mm', '유충은 썩은 나무에서 성장'],
    funFact: '수컷의 큰 턱은 암컷을 차지하기 위한 싸움에 사용되며, 일본에서는 "쿠와가타"라 불리며 큰 인기를 끈다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Arthropoda', class: 'Insecta', order: 'Coleoptera', family: 'Lucanidae', genus: 'Lucanus', species: 'L. maculifemoratus', kingdomKo: '동물계', phylumKo: '절지동물문', classKo: '곤충강', orderKo: '딱정벌레목', familyKo: '사슴벌레과', genusKo: '사슴벌레속' }
  },
  {
    id: 'a13', koreanName: '반딧불이', englishName: 'Firefly', scientificName: 'Luciola lateralis',
    category: 'animals', subcategory: '곤충', emoji: '✨',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Japanese_Firefly_%E3%83%98%E3%82%A4%E3%82%B1%E3%83%9C%E3%82%BF%E3%83%AB_Luciola_lateralis.jpg/200px-Japanese_Firefly_%E3%83%98%E3%82%A4%E3%82%B1%E3%83%9C%E3%82%BF%E3%83%AB_Luciola_lateralis.jpg',
    habitat: '깨끗한 하천, 논 주변',
    characteristics: ['발광기관으로 빛을 냄', '유충은 수생으로 다슬기를 먹음', '체장 7~10mm', '수명은 성충 약 2주', '6~7월 활동'],
    funFact: '반딧불이가 사는 곳은 수질이 깨끗하다는 지표로, 무주 반딧불 축제는 매년 수만 명이 방문한다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Arthropoda', class: 'Insecta', order: 'Coleoptera', family: 'Lampyridae', genus: 'Luciola', species: 'L. lateralis', kingdomKo: '동물계', phylumKo: '절지동물문', classKo: '곤충강', orderKo: '딱정벌레목', familyKo: '반딧불이과', genusKo: '반딧불이속' }
  },
  {
    id: 'a14', koreanName: '까치살모사', englishName: 'Short-tailed Pit Viper', scientificName: 'Gloydius brevicaudus',
    category: 'animals', subcategory: '파충류', emoji: '🐍',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gloydius_brevicaudus.jpg/200px-Gloydius_brevicaudus.jpg',
    habitat: '산림, 농경지, 민가 주변',
    characteristics: ['삼각형 머리', '갈색 바탕에 짙은 반점 무늬', '독사이나 치명적이지 않음', '체장 40~65cm', '야행성'],
    funFact: '한국에서 가장 흔한 독사로, 이름의 "까치"는 등의 무늬가 까치 깃털을 닮아서 붙여졌다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Reptilia', order: 'Squamata', family: 'Viperidae', genus: 'Gloydius', species: 'G. brevicaudus', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '파충강', orderKo: '유린목(뱀목)', familyKo: '살모사과', genusKo: '살모사속' }
  },
  {
    id: 'a15', koreanName: '도롱뇽', englishName: 'Korean Salamander', scientificName: 'Hynobius leechii',
    category: 'animals', subcategory: '양서류', emoji: '🦎',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Korean_salamander.jpg/200px-Korean_salamander.jpg',
    habitat: '산간 계곡, 습한 산림',
    characteristics: ['갈색 또는 암갈색 체색', '체장 8~13cm', '야행성', '피부 호흡', '이른 봄에 산란'],
    funFact: '한국 고유종에 가까운 양서류로, 봄에 논이나 웅덩이에 젤리 같은 알 주머니를 낳는다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Amphibia', order: 'Urodela', family: 'Hynobiidae', genus: 'Hynobius', species: 'H. leechii', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '양서강', orderKo: '도롱뇽목(유미목)', familyKo: '도롱뇽과', genusKo: '도롱뇽속' }
  },
  {
    id: 'a16', koreanName: '무당개구리', englishName: 'Oriental Fire-bellied Toad', scientificName: 'Bombina orientalis',
    category: 'animals', subcategory: '양서류', emoji: '🐸',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Bombina_orientalis_Gen%C3%A8ve_24102014.jpg/200px-Bombina_orientalis_Gen%C3%A8ve_24102014.jpg',
    habitat: '논, 습지, 산간 물웅덩이',
    characteristics: ['등은 녹색, 배는 빨간색과 검은색', '독성 피부 분비물', '체장 4~5cm', '위협 시 배를 보이는 방어 행동', '4~8월 번식'],
    funFact: '밝은 빨간 배는 포식자에게 독이 있다는 경고색으로, 위협을 느끼면 뒤집어서 배를 보여준다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Amphibia', order: 'Anura', family: 'Bombinatoridae', genus: 'Bombina', species: 'B. orientalis', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '양서강', orderKo: '개구리목(무미목)', familyKo: '무당개구리과', genusKo: '무당개구리속' }
  },
  {
    id: 'a17', koreanName: '왕사마귀', englishName: 'Giant Asian Mantis', scientificName: 'Tenodera sinensis',
    category: 'animals', subcategory: '곤충', emoji: '🦗',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tenodera_sinensis_5_Luc_Viatour.jpg/200px-Tenodera_sinensis_5_Luc_Viatour.jpg',
    habitat: '풀밭, 농경지, 정원',
    characteristics: ['체장 65~95mm로 대형', '강력한 앞다리로 사냥', '삼각형 머리와 큰 겹눈', '보호색으로 위장', '가을에 알집(난낭) 산란'],
    funFact: '암컷이 교미 후 수컷을 잡아먹는 것으로 유명하지만, 실제로는 약 30% 정도만 그렇다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Arthropoda', class: 'Insecta', order: 'Mantodea', family: 'Mantidae', genus: 'Tenodera', species: 'T. sinensis', kingdomKo: '동물계', phylumKo: '절지동물문', classKo: '곤충강', orderKo: '사마귀목', familyKo: '사마귀과', genusKo: '왕사마귀속' }
  },
  {
    id: 'a18', koreanName: '호랑나비', englishName: 'Asian Swallowtail', scientificName: 'Papilio xuthus',
    category: 'animals', subcategory: '곤충', emoji: '🦋',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Papilio_xuthus_20130804.jpg/200px-Papilio_xuthus_20130804.jpg',
    habitat: '도시 공원, 정원, 산기슭',
    characteristics: ['노란 바탕에 검은 호랑이 줄무늬', '날개 폭 70~90mm', '감귤류 식물에 산란', '빠른 비행 능력', '봄~가을 활동'],
    funFact: '한국에서 가장 친숙한 나비 중 하나로, 유충은 귤나무 잎을 먹고 자라며 위협 시 냄새나는 뿔(취각)을 내밀어 적을 쫓는다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Arthropoda', class: 'Insecta', order: 'Lepidoptera', family: 'Papilionidae', genus: 'Papilio', species: 'P. xuthus', kingdomKo: '동물계', phylumKo: '절지동물문', classKo: '곤충강', orderKo: '나비목(인시목)', familyKo: '호랑나비과', genusKo: '호랑나비속' }
  },
  {
    id: 'a19', koreanName: '꽃사슴', englishName: 'Sika Deer', scientificName: 'Cervus nippon',
    category: 'animals', subcategory: '포유류', emoji: '🦌',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cervus_nippon_002.jpg/200px-Cervus_nippon_002.jpg',
    habitat: '산림, 초원 (제주도 등)',
    characteristics: ['여름털에 흰 반점 무늬', '수컷만 뿔을 가짐', '체중 40~70kg', '무리 생활', '초식성'],
    funFact: '녹용(사슴뿔)은 한의학에서 귀한 약재로 쓰이며, 제주도에는 사슴 목장이 여러 곳 있다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Cervidae', genus: 'Cervus', species: 'C. nippon', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '포유강', orderKo: '우제목(소목)', familyKo: '사슴과', genusKo: '사슴속' }
  },
  {
    id: 'a20', koreanName: '두꺼비', englishName: 'Korean Toad', scientificName: 'Bufo gargarizans',
    category: 'animals', subcategory: '양서류', emoji: '🐸',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bufo_gargarizans_profile.jpg/200px-Bufo_gargarizans_profile.jpg',
    habitat: '산림, 농경지, 습지',
    characteristics: ['울퉁불퉁한 피부', '귀 뒤 독샘(이하선)', '체장 6~12cm', '느린 이동 속도', '이른 봄 번식'],
    funFact: '한국 전래동화 "두꺼비 신랑"의 주인공으로, 봄에 도로를 건너다 차에 치이는 "로드킬" 문제로 생태통로가 만들어지기도 했다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Amphibia', order: 'Anura', family: 'Bufonidae', genus: 'Bufo', species: 'B. gargarizans', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '양서강', orderKo: '개구리목(무미목)', familyKo: '두꺼비과', genusKo: '두꺼비속' }
  },

  // ==================== 🐦 조류 (Birds) ====================
  {
    id: 'b1', koreanName: '까치', englishName: 'Eurasian Magpie', scientificName: 'Pica pica',
    category: 'birds', subcategory: '참새목', emoji: '🐦‍⬛',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Eurasian_magpie_%2810860%29.jpg/200px-Eurasian_magpie_%2810860%29.jpg',
    habitat: '도시, 농촌, 산림 가장자리',
    characteristics: ['검은색과 흰색의 대비 깃털', '긴 꼬리', '매우 높은 지능', '큰 둥지를 전봇대나 나무에 지음', '잡식성'],
    funFact: '한국에서 길조로 여겨지며 "아침 까치가 울면 반가운 손님이 온다"는 속담이 있다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Passeriformes', family: 'Corvidae', genus: 'Pica', species: 'P. pica', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '참새목', familyKo: '까마귀과', genusKo: '까치속' }
  },
  {
    id: 'b2', koreanName: '참매', englishName: 'Northern Goshawk', scientificName: 'Accipiter gentilis',
    category: 'birds', subcategory: '매목', emoji: '🦅',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Northern_Goshawk_ad_M2.jpg/200px-Northern_Goshawk_ad_M2.jpg',
    habitat: '산림, 도시 공원',
    characteristics: ['날카로운 발톱과 부리', '뛰어난 시력', '빠른 비행과 민첩한 방향 전환', '체장 50~60cm', '단독 사냥'],
    funFact: '조선시대 매사냥에 가장 많이 사용된 맹금류로, 왕실의 사냥 파트너였다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Accipitriformes', family: 'Accipitridae', genus: 'Accipiter', species: 'A. gentilis', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '매목(수리목)', familyKo: '수리과', genusKo: '새매속' }
  },
  {
    id: 'b3', koreanName: '두루미', englishName: 'Red-crowned Crane', scientificName: 'Grus japonensis',
    category: 'birds', subcategory: '두루미목', emoji: '🦩',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Grus_japonensis_-Hokkaido%2C_Japan_-several-8_%281%29.jpg/200px-Grus_japonensis_-Hokkaido%2C_Japan_-several-8_%281%29.jpg',
    habitat: '습지, 논 (겨울철 철원, 파주 등 DMZ 일대)',
    characteristics: ['머리 꼭대기의 빨간 피부', '흰색 몸에 검은 날개깃', '체고 약 150cm', '우아한 구애 춤', '일부일처제'],
    funFact: '천연기념물 제202호이자 멸종위기종으로, DMZ 비무장지대가 역설적으로 이들의 마지막 월동지가 되었다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Gruiformes', family: 'Gruidae', genus: 'Grus', species: 'G. japonensis', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '두루미목', familyKo: '두루미과', genusKo: '두루미속' }
  },
  {
    id: 'b4', koreanName: '직박구리', englishName: 'Brown-eared Bulbul', scientificName: 'Hypsipetes amaurotis',
    category: 'birds', subcategory: '참새목', emoji: '🐦',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/The_brown-eared_bulbul_after_playing_with_water.jpg/200px-The_brown-eared_bulbul_after_playing_with_water.jpg',
    habitat: '도시 공원, 산림, 정원',
    characteristics: ['귀 부분의 갈색 반점', '시끄러운 울음소리', '체장 약 28cm', '과일과 꿀을 좋아함', '텃새'],
    funFact: '도시에서 가장 흔하게 볼 수 있는 새 중 하나로, 감나무 열매를 특히 좋아한다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Passeriformes', family: 'Pycnonotidae', genus: 'Hypsipetes', species: 'H. amaurotis', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '참새목', familyKo: '직박구리과', genusKo: '직박구리속' }
  },
  {
    id: 'b5', koreanName: '박새', englishName: 'Japanese Tit', scientificName: 'Parus minor',
    category: 'birds', subcategory: '참새목', emoji: '🐦',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Cinereous_tit_%28Parus_cinereus%29_Photograph_by_Shantanu_Kuveskar.jpg/200px-Cinereous_tit_%28Parus_cinereus%29_Photograph_by_Shantanu_Kuveskar.jpg',
    habitat: '산림, 공원, 정원',
    characteristics: ['검은 머리와 흰 뺨', '가슴의 검은 세로줄', '체장 약 14cm', '나무 구멍에 둥지', '곤충과 씨앗을 먹음'],
    funFact: '최근 연구에서 박새가 문법을 가진 복잡한 의사소통을 한다는 것이 밝혀져 학계를 놀라게 했다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Passeriformes', family: 'Paridae', genus: 'Parus', species: 'P. minor', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '참새목', familyKo: '박새과', genusKo: '박새속' }
  },
  {
    id: 'b6', koreanName: '원앙', englishName: 'Mandarin Duck', scientificName: 'Aix galericulata',
    category: 'birds', subcategory: '기러기목', emoji: '🦆',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mandarin_duck_%28Aix_galericulata%29.jpg/200px-Mandarin_duck_%28Aix_galericulata%29.jpg',
    habitat: '산간 계곡, 저수지',
    characteristics: ['수컷의 화려한 다색 깃털', '암컷은 수수한 갈색', '나무 구멍에 둥지', '체장 약 45cm', '수면 위를 우아하게 이동'],
    funFact: '동아시아에서 부부 금슬의 상징으로, 전통 혼례에서 원앙 한 쌍을 놓는 풍습이 있다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Anseriformes', family: 'Anatidae', genus: 'Aix', species: 'A. galericulata', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '기러기목', familyKo: '오리과', genusKo: '원앙속' }
  },
  {
    id: 'b7', koreanName: '물총새', englishName: 'Common Kingfisher', scientificName: 'Alcedo atthis',
    category: 'birds', subcategory: '파랑새목', emoji: '💎',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Alcedo_atthis_-England-8_%28cropped%29.jpg/200px-Alcedo_atthis_-England-8_%28cropped%29.jpg',
    habitat: '하천, 호수, 연못',
    characteristics: ['선명한 코발트블루 등', '주황색 배', '날카로운 긴 부리', '체장 약 17cm', '물속으로 다이빙하여 물고기 사냥'],
    funFact: '신칸센 고속열차의 앞부분 디자인은 물총새 부리의 유선형을 모방하여 소음을 줄였다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Coraciiformes', family: 'Alcedinidae', genus: 'Alcedo', species: 'A. atthis', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '파랑새목', familyKo: '물총새과', genusKo: '물총새속' }
  },
  {
    id: 'b8', koreanName: '수리부엉이', englishName: 'Eurasian Eagle-Owl', scientificName: 'Bubo bubo',
    category: 'birds', subcategory: '올빼미목', emoji: '🦉',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Bubo_bubo_3_%28Martin_Mecnarowski%29.jpg/200px-Bubo_bubo_3_%28Martin_Mecnarowski%29.jpg',
    habitat: '산악 절벽, 깊은 산림',
    characteristics: ['큰 귀깃(깃뿔)', '주황색 눈', '날개 폭 최대 180cm', '야행성 최상위 포식자', '조용한 비행'],
    funFact: '한국에서 가장 큰 올빼미로, 최근 도심 건물에 둥지를 틀어 화제가 되기도 했다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Strigiformes', family: 'Strigidae', genus: 'Bubo', species: 'B. bubo', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '올빼미목', familyKo: '올빼미과', genusKo: '수리부엉이속' }
  },
  {
    id: 'b9', koreanName: '파랑새', englishName: 'Dollarbird', scientificName: 'Eurystomus orientalis',
    category: 'birds', subcategory: '파랑새목', emoji: '🐦',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Dollarbird_Samcem_Dec02.JPG/200px-Dollarbird_Samcem_Dec02.JPG',
    habitat: '산림 가장자리, 하천변 큰 나무',
    characteristics: ['청록색 깃털', '빨간 부리', '날개에 하얀 동전 모양 반점', '체장 약 30cm', '공중에서 곤충 포획'],
    funFact: '한국에서 여름에만 볼 수 있는 여름 철새로, 파란 깃털이 햇빛에 반짝여 "숲의 보석"이라 불린다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Coraciiformes', family: 'Coraciidae', genus: 'Eurystomus', species: 'E. orientalis', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '파랑새목', familyKo: '파랑새과', genusKo: '파랑새속' }
  },
  {
    id: 'b10', koreanName: '뻐꾸기', englishName: 'Common Cuckoo', scientificName: 'Cuculus canorus',
    category: 'birds', subcategory: '두견목', emoji: '🐦',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Cuckoo_%2851169010335%29.jpg/200px-Cuckoo_%2851169010335%29.jpg',
    habitat: '산림, 초원',
    characteristics: ['탁란(다른 새 둥지에 알 낳기)', '체장 약 33cm', '회색 깃털', '"뻐꾹뻐꾹" 특유의 울음소리', '여름 철새'],
    funFact: '다른 새의 둥지에 몰래 알을 낳는 탁란의 대표 주자로, 뻐꾸기 새끼는 둥지 주인의 알을 밀어내고 혼자 자란다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Cuculiformes', family: 'Cuculidae', genus: 'Cuculus', species: 'C. canorus', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '두견목(뻐꾸기목)', familyKo: '뻐꾸기과', genusKo: '뻐꾸기속' }
  },
  {
    id: 'b11', koreanName: '흰꼬리수리', englishName: 'White-tailed Eagle', scientificName: 'Haliaeetus albicilla',
    category: 'birds', subcategory: '매목', emoji: '🦅',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/NZ7_5265_%2852812350718%29.jpg/200px-NZ7_5265_%2852812350718%29.jpg',
    habitat: '해안, 큰 하천, 호수 (겨울철새)',
    characteristics: ['날개 폭 최대 240cm', '흰 꼬리깃', '노란 부리', '물고기 사냥 전문', '체중 4~7kg'],
    funFact: '한국에서는 겨울철에만 볼 수 있는 대형 맹금류로, 천연기념물 제243-4호로 보호받고 있다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Accipitriformes', family: 'Accipitridae', genus: 'Haliaeetus', species: 'H. albicilla', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '매목(수리목)', familyKo: '수리과', genusKo: '흰꼬리수리속' }
  },
  {
    id: 'b12', koreanName: '제비', englishName: 'Barn Swallow', scientificName: 'Hirundo rustica',
    category: 'birds', subcategory: '참새목', emoji: '🕊️',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Rauchschwalbe_Hirundo_rustica.jpg/200px-Rauchschwalbe_Hirundo_rustica.jpg',
    habitat: '농촌 마을, 도시 건물 처마 밑',
    characteristics: ['갈래진 꼬리', '빠른 비행', '진흙으로 둥지 건설', '체장 약 18cm', '공중에서 곤충 포획'],
    funFact: '"흥부와 놀부"에 나오는 새가 바로 제비이며, 한국 농촌에서 제비 둥지가 있으면 복이 온다고 믿었다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Passeriformes', family: 'Hirundinidae', genus: 'Hirundo', species: 'H. rustica', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '참새목', familyKo: '제비과', genusKo: '제비속' }
  },
  {
    id: 'b13', koreanName: '오목눈이', englishName: 'Long-tailed Tit', scientificName: 'Aegithalos caudatus',
    category: 'birds', subcategory: '참새목', emoji: '🐦',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Long-tailed_tit_%2874940%29.jpg/200px-Long-tailed_tit_%2874940%29.jpg',
    habitat: '산림, 공원, 정원',
    characteristics: ['매우 긴 꼬리 (체장의 절반 이상)', '체중 7~9g의 소형', '둥근 솜뭉치 같은 체형', '10~20마리 무리 이동', '이끼와 거미줄로 정교한 둥지'],
    funFact: '일본에서 "시마에나가"라 불리며 귀여운 외모로 인기 캐릭터가 되었다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Passeriformes', family: 'Aegithalidae', genus: 'Aegithalos', species: 'A. caudatus', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '참새목', familyKo: '오목눈이과', genusKo: '오목눈이속' }
  },
  {
    id: 'b14', koreanName: '팔색조', englishName: 'Fairy Pitta', scientificName: 'Pitta nympha',
    category: 'birds', subcategory: '참새목', emoji: '🌈',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Fairy_Pitta_3952%2C_crop.jpg/200px-Fairy_Pitta_3952%2C_crop.jpg',
    habitat: '제주도, 남부 해안 산림 (여름 철새)',
    characteristics: ['8가지 색깔의 화려한 깃털', '체장 약 18cm', '땅에서 지렁이와 곤충 사냥', '수줍은 성격', '멸종위기 2급'],
    funFact: '천연기념물 제204호로 "숲의 보석"이라 불리며, 8가지 색(팔색)을 가진 이름 그대로의 아름다운 새이다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Passeriformes', family: 'Pittidae', genus: 'Pitta', species: 'P. nympha', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '참새목', familyKo: '팔색조과', genusKo: '팔색조속' }
  },
  {
    id: 'b15', koreanName: '딱따구리', englishName: 'Great Spotted Woodpecker', scientificName: 'Dendrocopos major',
    category: 'birds', subcategory: '딱따구리목', emoji: '🪶',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Greater_Spotted_Woodpecker_%2841554059345%29.jpg/200px-Greater_Spotted_Woodpecker_%2841554059345%29.jpg',
    habitat: '산림, 공원의 큰 나무',
    characteristics: ['검은색과 흰색 몸에 빨간 뒷머리', '나무를 쪼는 강한 부리', '충격흡수 두개골 구조', '체장 약 23cm', '드럼 소리로 영역 표시'],
    funFact: '초당 20회 속도로 나무를 쪼지만, 특수한 두개골 구조가 충격을 흡수하여 뇌진탕이 없다는 연구가 있었다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Piciformes', family: 'Picidae', genus: 'Dendrocopos', species: 'D. major', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '딱따구리목', familyKo: '딱따구리과', genusKo: '오색딱따구리속' }
  },

  // ==================== 🐟 어류 (Fish) ====================
  {
    id: 'f1', koreanName: '참치', englishName: 'Bluefin Tuna', scientificName: 'Thunnus thynnus',
    category: 'fish', subcategory: '대형 회유어', emoji: '🐟',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bluefin-big.jpg/200px-Bluefin-big.jpg',
    habitat: '태평양, 대서양의 외양',
    characteristics: ['유선형 체형으로 고속 유영', '체온 조절 능력 보유', '최대 체중 680kg', '시속 70km 이상 유영', '뛰어난 장거리 회유 능력'],
    funFact: '일본 쓰키지 시장에서 참다랑어 한 마리가 33억 원(약 300만 달러)에 경매된 적이 있다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Scombriformes', family: 'Scombridae', genus: 'Thunnus', species: 'T. thynnus', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조기어강', orderKo: '고등어목', familyKo: '고등어과', genusKo: '참치속' },
    sushiNeta: { japaneseName: 'マグロ', sushiName: '마구로', bestSeason: '겨울 (12~2월)', tasteProfile: '깊고 풍부한 감칠맛, 부위별로 아카미(적신), 주토로(중뱃살), 오토로(대뱃살)로 나뉨' }
  },
  {
    id: 'f2', koreanName: '연어', englishName: 'Atlantic Salmon', scientificName: 'Salmo salar',
    category: 'fish', subcategory: '연어목', emoji: '🐟',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Wst_atlantischer_lachs_stoer_001.jpg/200px-Wst_atlantischer_lachs_stoer_001.jpg',
    habitat: '북대서양, 하천 (회귀성)',
    characteristics: ['은색 몸에 산란기 붉은색 변화', '아나드로머스(소하성) 어류', '뛰어난 도약 능력', '풍부한 오메가-3', '체장 70~120cm'],
    funFact: '태어난 하천의 냄새를 기억하여 수천 km를 회귀하는데, 이 귀소 능력의 정확한 원리는 아직 완전히 밝혀지지 않았다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Salmoniformes', family: 'Salmonidae', genus: 'Salmo', species: 'S. salar', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조기어강', orderKo: '연어목', familyKo: '연어과', genusKo: '연어속' },
    sushiNeta: { japaneseName: 'サーモン', sushiName: '사몬', bestSeason: '가을 (9~11월)', tasteProfile: '부드럽고 기름진 맛, 녹아내리는 식감' }
  },
  {
    id: 'f3', koreanName: '광어 (넙치)', englishName: 'Olive Flounder', scientificName: 'Paralichthys olivaceus',
    category: 'fish', subcategory: '가자미목', emoji: '🐟',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Paralichthys-olivaceus-Federal-Way-3583.jpg/200px-Paralichthys-olivaceus-Federal-Way-3583.jpg',
    habitat: '한국, 일본 연안의 모래·진흙 바닥',
    characteristics: ['납작한 체형, 두 눈이 왼쪽에', '바닥 색에 맞춘 보호색', '최대 체장 100cm', '육식성 저서 어류', '한국 횟감 1위'],
    funFact: '한국에서 가장 많이 양식되는 횟감 어류로, 제주도가 최대 양식지이다. 눈이 왼쪽에 있으면 광어, 오른쪽이면 도다리다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Pleuronectiformes', family: 'Paralichthyidae', genus: 'Paralichthys', species: 'P. olivaceus', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조기어강', orderKo: '가자미목', familyKo: '넙치과', genusKo: '넙치속' },
    sushiNeta: { japaneseName: 'ヒラメ', sushiName: '히라메', bestSeason: '겨울 (12~2월)', tasteProfile: '담백하고 쫄깃한 식감, 엔가와(지느러미살)는 고소함' }
  },
  {
    id: 'f4', koreanName: '도미 (참돔)', englishName: 'Red Sea Bream', scientificName: 'Pagrus major',
    category: 'fish', subcategory: '도미목', emoji: '🐟',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pagrus_major_Red_seabream_ja01.jpg/200px-Pagrus_major_Red_seabream_ja01.jpg',
    habitat: '한국, 일본 연안의 암초 지대',
    characteristics: ['선명한 붉은색 체색', '체장 30~70cm', '경축 요리의 대표 어종', '장수 어류 (40년 이상)', '단단한 흰살'],
    funFact: '일본에서 "메데타이(めでたい=경사스럽다)"와 "타이(鯛=도미)"의 발음이 비슷하여 축하 자리에 빠지지 않는 생선이다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Spariformes', family: 'Sparidae', genus: 'Pagrus', species: 'P. major', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조기어강', orderKo: '도미목', familyKo: '도미과', genusKo: '참돔속' },
    sushiNeta: { japaneseName: 'タイ', sushiName: '타이', bestSeason: '봄 (3~5월)', tasteProfile: '깔끔하고 은은한 단맛, 쫄깃한 식감' }
  },
  {
    id: 'f5', koreanName: '보리새우', englishName: 'Kuruma Prawn', scientificName: 'Marsupenaeus japonicus',
    category: 'fish', subcategory: '갑각류', emoji: '🦐',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Marsupenaeus_japonicus_%28MNHN-IU-2011-5734%29.jpeg/200px-Marsupenaeus_japonicus_%28MNHN-IU-2011-5734%29.jpeg',
    habitat: '한국, 일본 연안의 모래 바닥',
    characteristics: ['줄무늬 패턴의 껍질', '체장 15~27cm', '야행성', '모래 속에 몸을 숨김', '고급 식재료'],
    funFact: '에도시대부터 최고급 새우로 여겨졌으며, 살아있는 상태로 초밥에 올리는 "오도리(踊り)" 스시가 유명하다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Arthropoda', class: 'Malacostraca', order: 'Decapoda', family: 'Penaeidae', genus: 'Marsupenaeus', species: 'M. japonicus', kingdomKo: '동물계', phylumKo: '절지동물문', classKo: '연갑강', orderKo: '십각목', familyKo: '보리새우과', genusKo: '보리새우속' },
    sushiNeta: { japaneseName: 'エビ (クルマエビ)', sushiName: '에비', bestSeason: '여름~가을 (6~10월)', tasteProfile: '탱글탱글 달콤한 맛, 삶으면 선명한 붉은색' }
  },
  {
    id: 'f6', koreanName: '문어', englishName: 'Common Octopus', scientificName: 'Octopus vulgaris',
    category: 'fish', subcategory: '두족류', emoji: '🐙',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/200px-Octopus2.jpg',
    habitat: '전 세계 온대·열대 해역의 암초 지대',
    characteristics: ['8개의 팔과 빨판', '3개의 심장', '푸른 피(구리 기반)', '높은 지능과 문제 해결 능력', '체색 변화 위장술'],
    funFact: '뇌의 2/3가 팔에 분포하여 각 팔이 독립적으로 사고할 수 있으며, 병뚜껑을 열 수 있을 정도로 지능이 높다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Mollusca', class: 'Cephalopoda', order: 'Octopoda', family: 'Octopodidae', genus: 'Octopus', species: 'O. vulgaris', kingdomKo: '동물계', phylumKo: '연체동물문', classKo: '두족강', orderKo: '문어목', familyKo: '문어과', genusKo: '문어속' },
    sushiNeta: { japaneseName: 'タコ', sushiName: '타코', bestSeason: '여름 (6~8월)', tasteProfile: '쫄깃하고 담백, 삶아서 제공' }
  },
  {
    id: 'f7', koreanName: '오징어', englishName: 'Japanese Flying Squid', scientificName: 'Todarodes pacificus',
    category: 'fish', subcategory: '두족류', emoji: '🦑',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Todarodes_pacificus_ruler.jpg/200px-Todarodes_pacificus_ruler.jpg',
    habitat: '북서태평양',
    characteristics: ['10개의 팔(8개 단완 + 2개 촉완)', '제트 추진 이동', '체장 25~50cm', '먹물 분사 방어', '수면 위로 날아오를 수 있음'],
    funFact: '한국에서 가장 많이 소비되는 수산물 중 하나로, 속초 오징어순대, 동해 오징어회 등 다양한 요리로 사랑받는다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Mollusca', class: 'Cephalopoda', order: 'Oegopsida', family: 'Ommastrephidae', genus: 'Todarodes', species: 'T. pacificus', kingdomKo: '동물계', phylumKo: '연체동물문', classKo: '두족강', orderKo: '개안오징어목', familyKo: '살오징어과', genusKo: '살오징어속' },
    sushiNeta: { japaneseName: 'イカ', sushiName: '이카', bestSeason: '여름~가을 (7~10월)', tasteProfile: '달콤하고 부드러운 식감, 칼집을 넣어 제공' }
  },
  {
    id: 'f8', koreanName: '장어 (민물장어)', englishName: 'Japanese Eel', scientificName: 'Anguilla japonica',
    category: 'fish', subcategory: '뱀장어목', emoji: '🐍',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Anguilla_japonica.jpg/200px-Anguilla_japonica.jpg',
    habitat: '하천, 호수 (산란은 마리아나 해구 근처)',
    characteristics: ['뱀 같은 긴 체형', '민물과 바다를 오가는 회유성', '야행성', '체장 40~80cm', '점액질 피부'],
    funFact: '한국에서는 복날에 장어구이를 먹는 전통이 있으며, 장어의 산란지가 마리아나 해구 근처라는 것이 밝혀진 것은 비교적 최근이다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Anguilliformes', family: 'Anguillidae', genus: 'Anguilla', species: 'A. japonica', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조기어강', orderKo: '뱀장어목', familyKo: '뱀장어과', genusKo: '뱀장어속' },
    sushiNeta: { japaneseName: 'ウナギ', sushiName: '우나기', bestSeason: '여름 (7~8월, 토용의 날)', tasteProfile: '달콤한 타레(소스)에 구운 부드럽고 기름진 맛' }
  },
  {
    id: 'f9', koreanName: '전갱이', englishName: 'Japanese Horse Mackerel', scientificName: 'Trachurus japonicus',
    category: 'fish', subcategory: '전갱이목', emoji: '🐟',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/MaAji.jpg/200px-MaAji.jpg',
    habitat: '한국, 일본 연안 (회유성)',
    characteristics: ['옆줄을 따른 능선(稜鱗)', '체장 20~40cm', '군집 생활', '빠른 유영 속도', '다양한 요리에 활용'],
    funFact: '일본에서 "아지"라 불리며, 초밥뿐 아니라 아지프라이, 다다키 등 서민 요리의 대표 생선이다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Carangiformes', family: 'Carangidae', genus: 'Trachurus', species: 'T. japonicus', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조기어강', orderKo: '전갱이목', familyKo: '전갱이과', genusKo: '전갱이속' },
    sushiNeta: { japaneseName: 'アジ', sushiName: '아지', bestSeason: '여름 (5~7월)', tasteProfile: '신선한 감칠맛, 등푸른생선 특유의 풍미, 생강과 파 곁들임' }
  },
  {
    id: 'f10', koreanName: '고등어', englishName: 'Chub Mackerel', scientificName: 'Scomber japonicus',
    category: 'fish', subcategory: '고등어목', emoji: '🐟',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Scomber_japonicus.png/200px-Scomber_japonicus.png',
    habitat: '태평양, 대서양의 온대 해역',
    characteristics: ['등의 물결 무늬', '체장 30~50cm', '등푸른생선의 대표', '빠른 군집 회유', '풍부한 DHA·EPA'],
    funFact: '한국인이 가장 사랑하는 생선 중 하나로, "고등어 자반"은 밥도둑의 대명사이다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Scombriformes', family: 'Scombridae', genus: 'Scomber', species: 'S. japonicus', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조기어강', orderKo: '고등어목', familyKo: '고등어과', genusKo: '고등어속' },
    sushiNeta: { japaneseName: 'サバ', sushiName: '사바', bestSeason: '가을~겨울 (10~12월)', tasteProfile: '진한 감칠맛, 식초에 절여 시메사바로 제공하는 것이 전통' }
  },
  {
    id: 'f11', koreanName: '방어', englishName: 'Japanese Amberjack', scientificName: 'Seriola quinqueradiata',
    category: 'fish', subcategory: '전갱이목', emoji: '🐟',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Seriola_quinqueradiata_%28200810%29.jpg/200px-Seriola_quinqueradiata_%28200810%29.jpg',
    habitat: '한국, 일본 연안 (회유성)',
    characteristics: ['유선형 대형 체형', '체장 최대 100cm', '성장에 따라 이름이 바뀜(출세어)', '시속 40km 유영', '겨울철 지방 함량 최고'],
    funFact: '일본에서는 크기에 따라 와카시→이나다→와라사→부리로 이름이 바뀌어 "출세어(出世魚)"라 불리며 입신양명의 상징이다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Carangiformes', family: 'Carangidae', genus: 'Seriola', species: 'S. quinqueradiata', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조기어강', orderKo: '전갱이목', familyKo: '전갱이과', genusKo: '방어속' },
    sushiNeta: { japaneseName: 'ブリ', sushiName: '부리', bestSeason: '겨울 (12~2월)', tasteProfile: '기름지고 농후한 맛, 겨울 방어(칸부리)가 최고' }
  },
  {
    id: 'f12', koreanName: '성게', englishName: 'Sea Urchin', scientificName: 'Strongylocentrotus nudus',
    category: 'fish', subcategory: '극피동물', emoji: '🟡',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Tripneustes_ventricosus_%28West_Indian_Sea_Egg-top%29_and_Echinometra_viridis_%28Reef_Urchin_-_bottom%29.jpg/200px-Tripneustes_ventricosus_%28West_Indian_Sea_Egg-top%29_and_Echinometra_viridis_%28Reef_Urchin_-_bottom%29.jpg',
    habitat: '한국, 일본 연안의 암초·해조류 지대',
    characteristics: ['가시로 덮인 구형 체형', '5방향 대칭 구조', '생식소(알)를 식용', '해조류를 갉아먹음', '천적은 해달, 불가사리'],
    funFact: '성게알(우니)은 세계에서 가장 비싼 해산물 중 하나로, 제주 해녀들이 채취하는 보라성게가 특히 유명하다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Echinodermata', class: 'Echinoidea', order: 'Camarodonta', family: 'Strongylocentrotidae', genus: 'Strongylocentrotus', species: 'S. nudus', kingdomKo: '동물계', phylumKo: '극피동물문', classKo: '성게강', orderKo: '성게목', familyKo: '성게과', genusKo: '성게속' },
    sushiNeta: { japaneseName: 'ウニ', sushiName: '우니', bestSeason: '여름 (6~8월)', tasteProfile: '바다의 크림, 달콤하고 농후한 감칠맛, 혀에서 녹는 식감' }
  },
  {
    id: 'f13', koreanName: '가리비', englishName: 'Japanese Scallop', scientificName: 'Mizuhopecten yessoensis',
    category: 'fish', subcategory: '이매패류', emoji: '🐚',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mizuhopecten_yessoensis.jpg/200px-Mizuhopecten_yessoensis.jpg',
    habitat: '한국 동해, 일본 홋카이도 연안',
    characteristics: ['부채꼴 껍데기', '헤엄칠 수 있는 이매패', '최대 80개의 눈', '체장 최대 20cm', '관자(폐각근)가 식용 부위'],
    funFact: '가리비는 껍데기를 열고 닫으며 물을 뿜어 헤엄칠 수 있는 독특한 조개이며, 쉘 석유(Shell)의 로고가 바로 가리비이다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Mollusca', class: 'Bivalvia', order: 'Pectinida', family: 'Pectinidae', genus: 'Mizuhopecten', species: 'M. yessoensis', kingdomKo: '동물계', phylumKo: '연체동물문', classKo: '이매패강', orderKo: '가리비목', familyKo: '가리비과', genusKo: '큰가리비속' },
    sushiNeta: { japaneseName: 'ホタテ', sushiName: '호타테', bestSeason: '겨울~봄 (12~3월)', tasteProfile: '달콤하고 버터 같은 풍미, 쫀득한 식감' }
  },
  {
    id: 'f14', koreanName: '쥐치', englishName: 'Thread-sail Filefish', scientificName: 'Stephanolepis cirrhifer',
    category: 'fish', subcategory: '복어목', emoji: '🐟',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Stephanolepis_cirrhifer.jpg/200px-Stephanolepis_cirrhifer.jpg',
    habitat: '한국, 일본 연안의 암초 지대',
    characteristics: ['거친 사포 같은 피부', '체장 20~30cm', '작은 입으로 해조류 섭취', '간이 특히 맛있음', '표면의 가시 돌기'],
    funFact: '한국에서 "쥐포"의 원료 생선으로 유명하며, 간(肝)을 간장에 넣어 먹는 "쥐치 간장"은 숨은 별미이다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Tetraodontiformes', family: 'Monacanthidae', genus: 'Stephanolepis', species: 'S. cirrhifer', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조기어강', orderKo: '복어목', familyKo: '쥐치과', genusKo: '쥐치속' }
  },
  {
    id: 'f15', koreanName: '해마', englishName: 'Lined Seahorse', scientificName: 'Hippocampus erectus',
    category: 'fish', subcategory: '실고기목', emoji: '🐟',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lined_Seahorse-_Hippocampus_erectus_%286042886100%29.jpg/200px-Lined_Seahorse-_Hippocampus_erectus_%286042886100%29.jpg',
    habitat: '얕은 연안의 해조류·산호 지대',
    characteristics: ['수직으로 세워진 독특한 체형', '꼬리로 해조류에 매달림', '수컷이 육아낭에서 출산', '체장 10~17cm', '독립적으로 움직이는 두 눈'],
    funFact: '동물계에서 거의 유일하게 수컷이 임신·출산하며, 한 번에 최대 2,000마리의 새끼를 낳는다.',
    taxonomy: { kingdom: 'Animalia', phylum: 'Chordata', class: 'Actinopterygii', order: 'Syngnathiformes', family: 'Syngnathidae', genus: 'Hippocampus', species: 'H. erectus', kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조기어강', orderKo: '실고기목', familyKo: '실고기과', genusKo: '해마속' }
  },

  // ==================== 🌳 나무 (Trees) ====================
  {
    id: 't1', koreanName: '소나무', englishName: 'Korean Red Pine', scientificName: 'Pinus densiflora',
    category: 'trees', subcategory: '침엽수', emoji: '🌲',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG/200px-Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG',
    habitat: '한반도 전역의 산지',
    characteristics: ['붉은색 수피', '두 개씩 묶인 바늘잎', '최대 높이 35m', '솔방울 열매', '장수의 상징'],
    funFact: '한국의 국목(國木)에 해당하는 나무로, 금강송은 경복궁 등 궁궐 건축에 사용되었으며 "십장생"의 하나이다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Pinophyta', class: 'Pinopsida', order: 'Pinales', family: 'Pinaceae', genus: 'Pinus', species: 'P. densiflora', kingdomKo: '식물계', phylumKo: '구과식물문', classKo: '구과식물강', orderKo: '소나무목', familyKo: '소나무과', genusKo: '소나무속' }
  },
  {
    id: 't2', koreanName: '은행나무', englishName: 'Ginkgo', scientificName: 'Ginkgo biloba',
    category: 'trees', subcategory: '활엽수', emoji: '🍂',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/GINKGOBAUM-2.jpg/200px-GINKGOBAUM-2.jpg',
    habitat: '도시 가로수, 사찰 주변',
    characteristics: ['부채꼴 잎', '가을 황금색 단풍', '암수딴그루', '열매(은행)에서 강한 냄새', '최대 높이 40m 이상'],
    funFact: '2억 7천만 년 전부터 존재한 "살아있는 화석"으로, 공룡 시대부터 거의 변하지 않은 형태를 유지하고 있다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Ginkgophyta', class: 'Ginkgoopsida', order: 'Ginkgoales', family: 'Ginkgoaceae', genus: 'Ginkgo', species: 'G. biloba', kingdomKo: '식물계', phylumKo: '은행나무문', classKo: '은행나무강', orderKo: '은행나무목', familyKo: '은행나무과', genusKo: '은행나무속' }
  },
  {
    id: 't3', koreanName: '대나무', englishName: 'Bamboo', scientificName: 'Phyllostachys bambusoides',
    category: 'trees', subcategory: '단자엽식물', emoji: '🎋',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Poaceae_-_Phyllostachis_bambusoides.JPG/200px-Poaceae_-_Phyllostachis_bambusoides.JPG',
    habitat: '전라남도 담양, 경상남도 등 남부 지방',
    characteristics: ['하루 최대 1m 성장', '속이 빈 줄기', '지하경으로 번식', '최대 높이 20m 이상', '사군자의 하나'],
    funFact: '담양 죽녹원은 대나무 숲으로 유명하며, 대나무는 풀(초본)에 속하지만 나무처럼 보여 "나무"로 불린다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Liliopsida', order: 'Poales', family: 'Poaceae', genus: 'Phyllostachys', species: 'P. bambusoides', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '외떡잎식물강', orderKo: '벼목', familyKo: '벼과(화본과)', genusKo: '왕대속' }
  },
  {
    id: 't4', koreanName: '단풍나무', englishName: 'Korean Maple', scientificName: 'Acer palmatum',
    category: 'trees', subcategory: '활엽수', emoji: '🍁',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Acer_palmatum0.jpg/200px-Acer_palmatum0.jpg',
    habitat: '한반도 전역의 산지',
    characteristics: ['손바닥 모양의 잎', '가을 빨간·주황 단풍', '최대 높이 15m', '날개 달린 열매(시과)', '그늘에서도 잘 자람'],
    funFact: '내장산은 한국 최고의 단풍 명소로, 50여 종의 단풍나무가 자라며 가을이면 "단풍 터널"을 이룬다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Sapindales', family: 'Sapindaceae', genus: 'Acer', species: 'A. palmatum', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '무환자나무목', familyKo: '무환자나무과', genusKo: '단풍나무속' }
  },
  {
    id: 't5', koreanName: '벚나무', englishName: 'Cherry Blossom', scientificName: 'Prunus serrulata',
    category: 'trees', subcategory: '활엽수', emoji: '🌸',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Cerisier_du_Japon_Prunus_serrulata.jpg/200px-Cerisier_du_Japon_Prunus_serrulata.jpg',
    habitat: '한반도 전역, 특히 진해·경주·여의도',
    characteristics: ['봄에 분홍·흰색 꽃', '꽃잎 5장의 겹꽃 또는 홑꽃', '최대 높이 15m', '체리 열매', '꽃이 진 후 잎이 나옴'],
    funFact: '진해 군항제는 한국 최대 벚꽃 축제로 매년 200만 명 이상이 방문하며, 제주 왕벚나무가 원산지라는 연구가 있다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Rosales', family: 'Rosaceae', genus: 'Prunus', species: 'P. serrulata', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '장미목', familyKo: '장미과', genusKo: '벚나무속' }
  },
  {
    id: 't6', koreanName: '느티나무', englishName: 'Zelkova', scientificName: 'Zelkova serrata',
    category: 'trees', subcategory: '활엽수', emoji: '🌳',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Zelkova_serrata_Noma_keyaki01.jpg/200px-Zelkova_serrata_Noma_keyaki01.jpg',
    habitat: '마을 어귀, 도시 공원',
    characteristics: ['넓은 수관(나무 모자)', '빗자루 모양 수형', '최대 높이 30m', '수명 수백~천 년 이상', '단단한 목재'],
    funFact: '한국 마을마다 있는 "정자나무"가 대부분 느티나무로, 마을의 수호신이자 쉼터 역할을 했다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Rosales', family: 'Ulmaceae', genus: 'Zelkova', species: 'Z. serrata', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '장미목', familyKo: '느릅나무과', genusKo: '느티나무속' }
  },
  {
    id: 't7', koreanName: '주목', englishName: 'Korean Yew', scientificName: 'Taxus cuspidata',
    category: 'trees', subcategory: '침엽수', emoji: '🌲',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Taxus_cuspidata_fruits.JPG/200px-Taxus_cuspidata_fruits.JPG',
    habitat: '고산지대 (설악산, 태백산 등)',
    characteristics: ['붉은 수피', '납작한 바늘잎', '빨간 종의(가종피)', '성장이 매우 느림', '수명 2,000년 이상 가능'],
    funFact: '항암제 택솔(Taxol)의 원료가 되는 나무로, 설악산의 천년 주목은 천연기념물로 보호받고 있다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Pinophyta', class: 'Pinopsida', order: 'Pinales', family: 'Taxaceae', genus: 'Taxus', species: 'T. cuspidata', kingdomKo: '식물계', phylumKo: '구과식물문', classKo: '구과식물강', orderKo: '소나무목', familyKo: '주목과', genusKo: '주목속' }
  },
  {
    id: 't8', koreanName: '감나무', englishName: 'Persimmon Tree', scientificName: 'Diospyros kaki',
    category: 'trees', subcategory: '활엽수(과실수)', emoji: '🟠',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kaki_20041002.jpg/200px-Kaki_20041002.jpg',
    habitat: '한반도 중남부, 농가 마당',
    characteristics: ['가을 주황색 열매', '넓은 타원형 잎', '최대 높이 15m', '목재가 단단함(흑단 계열)', '떫은감과 단감 품종 구분'],
    funFact: '한국 전래동화 "호랑이와 곶감"에서 호랑이도 무서워한 곶감이 바로 이 나무의 말린 열매이다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Ericales', family: 'Ebenaceae', genus: 'Diospyros', species: 'D. kaki', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '진달래목', familyKo: '감나무과', genusKo: '감나무속' }
  },
  {
    id: 't9', koreanName: '참나무 (신갈나무)', englishName: 'Mongolian Oak', scientificName: 'Quercus mongolica',
    category: 'trees', subcategory: '활엽수', emoji: '🌳',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Quercus_Mongolica.jpg/200px-Quercus_Mongolica.jpg',
    habitat: '한반도 전역의 산지',
    characteristics: ['도토리 열매', '물결 모양 잎 가장자리', '최대 높이 30m', '가을 갈색 단풍', '산림의 주요 수종'],
    funFact: '도토리묵은 한국의 전통 음식으로, 조선시대 흉년에 구황식물로 많은 생명을 살렸다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Fagales', family: 'Fagaceae', genus: 'Quercus', species: 'Q. mongolica', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '참나무목', familyKo: '참나무과', genusKo: '참나무속' }
  },
  {
    id: 't10', koreanName: '향나무', englishName: 'Chinese Juniper', scientificName: 'Juniperus chinensis',
    category: 'trees', subcategory: '침엽수', emoji: '🌲',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Jun_chin_shoot.jpg/200px-Jun_chin_shoot.jpg',
    habitat: '한반도 해안가, 사찰, 궁궐',
    characteristics: ['비늘잎과 바늘잎 공존', '향기로운 목재', '최대 높이 20m', '청록색 열매', '수형이 아름다워 정원수로 인기'],
    funFact: '사찰과 궁궐에 많이 심어진 나무로, 창덕궁 후원의 700년 된 향나무는 천연기념물이다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Pinophyta', class: 'Pinopsida', order: 'Pinales', family: 'Cupressaceae', genus: 'Juniperus', species: 'J. chinensis', kingdomKo: '식물계', phylumKo: '구과식물문', classKo: '구과식물강', orderKo: '소나무목', familyKo: '측백나무과', genusKo: '향나무속' }
  },
  {
    id: 't11', koreanName: '매화나무', englishName: 'Japanese Apricot', scientificName: 'Prunus mume',
    category: 'trees', subcategory: '활엽수(과실수)', emoji: '🌺',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Prunus_mume.JPG/200px-Prunus_mume.JPG',
    habitat: '남부 지방, 정원, 사찰',
    characteristics: ['이른 봄 가장 먼저 피는 꽃', '흰색 또는 분홍 꽃', '시큼한 열매(매실)', '최대 높이 10m', '사군자의 하나'],
    funFact: '추위 속에서 가장 먼저 피어 선비의 지조와 절개를 상징하며, 매실은 건강음료와 장아찌로 한국 가정에서 많이 만든다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Rosales', family: 'Rosaceae', genus: 'Prunus', species: 'P. mume', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '장미목', familyKo: '장미과', genusKo: '벚나무속' }
  },
  {
    id: 't12', koreanName: '동백나무', englishName: 'Camellia', scientificName: 'Camellia japonica',
    category: 'trees', subcategory: '상록활엽수', emoji: '🌺',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Camellia_japonica_NBG.jpg/200px-Camellia_japonica_NBG.jpg',
    habitat: '남해안, 제주도, 거제도',
    characteristics: ['겨울~이른 봄 붉은 꽃', '광택 나는 두꺼운 잎', '꽃이 통째로 떨어짐', '동백기름 생산', '최대 높이 15m'],
    funFact: '여수 오동도는 3,000그루의 동백나무로 유명하며, 동백꽃이 통째로 "뚝" 떨어지는 모습이 사무라이의 참수를 연상시켜 일본 무사들은 꺼렸다고 한다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Ericales', family: 'Theaceae', genus: 'Camellia', species: 'C. japonica', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '진달래목', familyKo: '차나무과', genusKo: '동백나무속' }
  },
  {
    id: 't13', koreanName: '자작나무', englishName: 'Birch', scientificName: 'Betula platyphylla',
    category: 'trees', subcategory: '활엽수', emoji: '🌳',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Betula_platyphylla_01-10-2005_14.55.52.JPG/200px-Betula_platyphylla_01-10-2005_14.55.52.JPG',
    habitat: '강원도 인제, 고산지대',
    characteristics: ['흰색 수피', '삼각형 잎', '최대 높이 25m', '추위에 강함', '수피가 종이처럼 벗겨짐'],
    funFact: '인제 자작나무 숲은 한국에서 가장 아름다운 겨울 숲으로, 하얀 나무줄기가 눈과 어우러져 환상적인 풍경을 만든다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Fagales', family: 'Betulaceae', genus: 'Betula', species: 'B. platyphylla', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '참나무목', familyKo: '자작나무과', genusKo: '자작나무속' }
  },
  {
    id: 't14', koreanName: '팽나무', englishName: 'Japanese Hackberry', scientificName: 'Celtis sinensis',
    category: 'trees', subcategory: '활엽수', emoji: '🌳',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Celtis_sinensis%3DChinese_Hackberry.jpg/200px-Celtis_sinensis%3DChinese_Hackberry.jpg',
    habitat: '남부 해안, 마을 주변',
    characteristics: ['둥근 수관', '가을 노란 열매', '최대 높이 20m', '소금기에 강함', '수명 수백 년'],
    funFact: '영화 "올드보이"에서 주인공이 15년 만에 나온 후 서 있던 나무가 팽나무이며, 남해안 마을의 상징적 나무이다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Rosales', family: 'Cannabaceae', genus: 'Celtis', species: 'C. sinensis', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '장미목', familyKo: '삼과(대마과)', genusKo: '팽나무속' }
  },
  {
    id: 't15', koreanName: '편백나무', englishName: 'Hinoki Cypress', scientificName: 'Chamaecyparis obtusa',
    category: 'trees', subcategory: '침엽수', emoji: '🌲',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/%E5%A4%A7%E6%99%BA%E5%AF%BA_%28%E5%B2%90%E9%98%9C%E5%B8%82%29-%E6%A8%B9%E9%BD%A2%E7%B4%84700%E5%B9%B4%E3%81%AE%E5%A4%A7%E3%83%92%E3%83%8E%E3%82%ADdaichiji008.jpg/200px-%E5%A4%A7%E6%99%BA%E5%AF%BA_%28%E5%B2%90%E9%98%9C%E5%B8%82%29-%E6%A8%B9%E9%BD%A2%E7%B4%84700%E5%B9%B4%E3%81%AE%E5%A4%A7%E3%83%92%E3%83%8E%E3%82%ADdaichiji008.jpg',
    habitat: '전남 장성, 제주도 등 남부 지방',
    characteristics: ['피톤치드 향이 강함', '비늘 모양 잎', '최대 높이 35m', '편백유 추출', '사우나·욕조 재료'],
    funFact: '장성 축령산 편백숲은 "치유의 숲"으로 유명하며, 편백에서 나오는 피톤치드가 면역력 향상과 스트레스 해소에 효과가 있다는 연구가 있다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Pinophyta', class: 'Pinopsida', order: 'Pinales', family: 'Cupressaceae', genus: 'Chamaecyparis', species: 'C. obtusa', kingdomKo: '식물계', phylumKo: '구과식물문', classKo: '구과식물강', orderKo: '소나무목', familyKo: '측백나무과', genusKo: '편백속' }
  },

  // ==================== 🌸 꽃과 풀 (Flowers & Grasses) ====================
  {
    id: 'fl1', koreanName: '무궁화', englishName: 'Rose of Sharon', scientificName: 'Hibiscus syriacus',
    category: 'flowers', subcategory: '관목', emoji: '🌺',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Hibiscus_Syriacus.JPG/200px-Hibiscus_Syriacus.JPG',
    habitat: '한반도 전역, 정원, 울타리',
    characteristics: ['대한민국 국화', '7~10월 지속적 개화', '분홍·흰·보라 등 다양한 색', '하루살이 꽃(아침 피고 저녁 짐)', '최대 높이 4m'],
    funFact: '애국가에 나오는 "무궁화 삼천리 화려강산"의 그 꽃으로, 하루에 지지만 계속 새 꽃이 피어 "영원히 지지 않는 꽃"이라는 의미를 담고 있다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Malvales', family: 'Malvaceae', genus: 'Hibiscus', species: 'H. syriacus', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '아욱목', familyKo: '아욱과', genusKo: '무궁화속' }
  },
  {
    id: 'fl2', koreanName: '진달래', englishName: 'Korean Rhododendron', scientificName: 'Rhododendron mucronulatum',
    category: 'flowers', subcategory: '관목', emoji: '🌸',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Korea-Jindallae-Rhododendron_mucronulatum-01.jpg/200px-Korea-Jindallae-Rhododendron_mucronulatum-01.jpg',
    habitat: '한반도 전역의 산지',
    characteristics: ['이른 봄 잎보다 먼저 꽃이 핌', '연분홍 꽃', '먹을 수 있는 꽃(화전)', '최대 높이 3m', '산 전체를 분홍으로 물들임'],
    funFact: '김소월의 시 "진달래꽃"에 나오는 바로 그 꽃으로, 한국 봄의 상징이다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Ericales', family: 'Ericaceae', genus: 'Rhododendron', species: 'R. mucronulatum', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '진달래목', familyKo: '진달래과', genusKo: '진달래속' }
  },
  {
    id: 'fl3', koreanName: '철쭉', englishName: 'Royal Azalea', scientificName: 'Rhododendron schlippenbachii',
    category: 'flowers', subcategory: '관목', emoji: '🌺',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Rhododendron_schlippenbachii.jpg/200px-Rhododendron_schlippenbachii.jpg',
    habitat: '한반도 전역의 산지',
    characteristics: ['진달래보다 늦게 핌', '잎과 꽃이 동시에', '연분홍~짙은 분홍', '먹으면 안 됨(독성)', '최대 높이 5m'],
    funFact: '진달래와 자주 혼동되지만, 철쭉은 잎과 꽃이 함께 피고 독성이 있어 "개꽃"이라고도 불린다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Ericales', family: 'Ericaceae', genus: 'Rhododendron', species: 'R. schlippenbachii', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '진달래목', familyKo: '진달래과', genusKo: '진달래속' }
  },
  {
    id: 'fl4', koreanName: '개나리', englishName: 'Korean Forsythia', scientificName: 'Forsythia koreana',
    category: 'flowers', subcategory: '관목', emoji: '💛',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Forsythia_koreana.jpg/200px-Forsythia_koreana.jpg',
    habitat: '한반도 전역, 도시 화단',
    characteristics: ['이른 봄 노란 꽃', '잎보다 먼저 개화', '낙엽 관목', '최대 높이 3m', '가지가 아래로 처짐'],
    funFact: '한국 고유종으로, 봄이 오면 진달래와 함께 가장 먼저 봄소식을 전하는 꽃이다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Lamiales', family: 'Oleaceae', genus: 'Forsythia', species: 'F. koreana', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '꿀풀목', familyKo: '물푸레나무과', genusKo: '개나리속' }
  },
  {
    id: 'fl5', koreanName: '코스모스', englishName: 'Cosmos', scientificName: 'Cosmos bipinnatus',
    category: 'flowers', subcategory: '초본', emoji: '🌼',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Cosmos_bipinnatus_pink%2C_Burdwan%2C_West_Bengal%2C_India_10_01_2013.jpg/200px-Cosmos_bipinnatus_pink%2C_Burdwan%2C_West_Bengal%2C_India_10_01_2013.jpg',
    habitat: '길가, 들판, 화단',
    characteristics: ['가을의 대표 꽃', '분홍·흰·빨간 꽃잎 8장', '가늘게 갈라진 잎', '높이 1~2m', '바람에 흔들리는 우아한 모습'],
    funFact: '원산지는 멕시코이지만 한국 가을 풍경의 상징이 되었으며, "가을에 코스모스가 피면 소풍 간다"는 추억의 노래가 있다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Asterales', family: 'Asteraceae', genus: 'Cosmos', species: 'C. bipinnatus', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '국화목', familyKo: '국화과', genusKo: '코스모스속' }
  },
  {
    id: 'fl6', koreanName: '연꽃', englishName: 'Sacred Lotus', scientificName: 'Nelumbo nucifera',
    category: 'flowers', subcategory: '수생식물', emoji: '🪷',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg/200px-Sacred_lotus_Nelumbo_nucifera.jpg',
    habitat: '연못, 저수지, 습지',
    characteristics: ['진흙에서 피어나 청결의 상징', '큰 원형 잎(물에 뜸)', '분홍·흰 꽃', '연근(뿌리)을 식용', '잎의 초소수성(물방울이 구름)'],
    funFact: '불교에서 깨달음의 상징이며, 2,000년 된 연꽃 씨앗에서 발아에 성공한 사례가 있을 정도로 놀라운 생명력을 가지고 있다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Proteales', family: 'Nelumbonaceae', genus: 'Nelumbo', species: 'N. nucifera', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '프로테아목', familyKo: '연과', genusKo: '연속' }
  },
  {
    id: 'fl7', koreanName: '해바라기', englishName: 'Sunflower', scientificName: 'Helianthus annuus',
    category: 'flowers', subcategory: '초본', emoji: '🌻',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/200px-Sunflower_sky_backdrop.jpg',
    habitat: '밭, 정원, 들판',
    characteristics: ['태양을 따라 움직이는 꽃(어린 시기)', '높이 최대 3m', '큰 노란 꽃', '씨앗에서 기름 추출', '꽃이 사실 수백 개의 작은 꽃 집합체'],
    funFact: '해바라기가 태양을 따라가는 건 성장 중일 때만이고, 꽃이 피면 동쪽을 향해 고정된다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Asterales', family: 'Asteraceae', genus: 'Helianthus', species: 'H. annuus', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '국화목', familyKo: '국화과', genusKo: '해바라기속' }
  },
  {
    id: 'fl8', koreanName: '수선화', englishName: 'Narcissus', scientificName: 'Narcissus tazetta',
    category: 'flowers', subcategory: '구근식물', emoji: '🌼',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Narcissus-tazetta-0006a.jpg/200px-Narcissus-tazetta-0006a.jpg',
    habitat: '제주도 해안, 정원',
    characteristics: ['겨울~이른 봄 개화', '향기로운 흰꽃에 노란 부관', '수선(물의 선녀)이라는 이름', '구근 번식', '독성 있음'],
    funFact: '제주도 수선화 군락지는 겨울에 꽃을 볼 수 있는 명소이며, 그리스 신화의 나르키소스(자기도취)에서 학명이 유래했다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Liliopsida', order: 'Asparagales', family: 'Amaryllidaceae', genus: 'Narcissus', species: 'N. tazetta', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '외떡잎식물강', orderKo: '비짜루목', familyKo: '수선화과', genusKo: '수선화속' }
  },
  {
    id: 'fl9', koreanName: '억새', englishName: 'Silver Grass', scientificName: 'Miscanthus sinensis',
    category: 'flowers', subcategory: '화본과', emoji: '🌾',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Japanese_pampas_grass_%E3%82%B9%E3%82%B9%E3%82%AD%E3%81%AE%E7%A9%82%E6%B3%A2PB080105.jpg/200px-Japanese_pampas_grass_%E3%82%B9%E3%82%B9%E3%82%AD%E3%81%AE%E7%A9%82%E6%B3%A2PB080105.jpg',
    habitat: '산지 초원, 제주 오름, 민둥산',
    characteristics: ['은빛 이삭이 바람에 흔들림', '높이 1~2m', '가을 풍경의 대표', '다년생 초본', '강한 생명력'],
    funFact: '제주 새별오름과 민둥산의 억새 축제는 가을 필수 여행지로, 은빛 억새밭이 바람에 일렁이는 모습은 장관이다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Liliopsida', order: 'Poales', family: 'Poaceae', genus: 'Miscanthus', species: 'M. sinensis', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '외떡잎식물강', orderKo: '벼목', familyKo: '벼과(화본과)', genusKo: '억새속' }
  },
  {
    id: 'fl10', koreanName: '봉선화', englishName: 'Garden Balsam', scientificName: 'Impatiens balsamina',
    category: 'flowers', subcategory: '초본', emoji: '🌺',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Impatiens_balsamina_28_08_2009.JPG/200px-Impatiens_balsamina_28_08_2009.JPG',
    habitat: '정원, 화단',
    characteristics: ['빨간·분홍·흰 꽃', '익은 열매가 터지며 씨앗 발사', '높이 30~60cm', '꽃잎으로 손톱 염색 가능', '여름 개화'],
    funFact: '한국에서는 봉선화 꽃잎과 백반을 섞어 손톱에 물들이는 전통이 있으며, 첫눈까지 남아있으면 첫사랑이 이루어진다는 속설이 있다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Ericales', family: 'Balsaminaceae', genus: 'Impatiens', species: 'I. balsamina', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '진달래목', familyKo: '봉선화과', genusKo: '봉선화속' }
  },
  {
    id: 'fl11', koreanName: '산삼 (인삼)', englishName: 'Korean Ginseng', scientificName: 'Panax ginseng',
    category: 'flowers', subcategory: '초본(약용)', emoji: '🌿',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Ginsengpflanze.jpg/200px-Ginsengpflanze.jpg',
    habitat: '한반도 산림 하층부 (인삼: 재배)',
    characteristics: ['사람 모양의 뿌리', '빨간 열매', '높이 30~60cm', '6년근이 최고 약효', '그늘에서 자람'],
    funFact: '학명 Panax는 "만병통치"라는 뜻으로, 한국 인삼은 세계 최고 품질로 인정받으며 수출 효자 품목이다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Apiales', family: 'Araliaceae', genus: 'Panax', species: 'P. ginseng', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '산형목(미나리목)', familyKo: '두릅나무과', genusKo: '인삼속' }
  },
  {
    id: 'fl12', koreanName: '민들레', englishName: 'Dandelion', scientificName: 'Taraxacum platycarpum',
    category: 'flowers', subcategory: '초본', emoji: '🌼',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Taraxacum_platycarpum_4.jpg/200px-Taraxacum_platycarpum_4.jpg',
    habitat: '들판, 길가, 도시 어디서나',
    characteristics: ['노란 꽃 → 흰 솜털 씨앗', '바람에 날리는 씨앗 번식', '깊은 뿌리', '전초 식용 가능', '이른 봄 개화'],
    funFact: '토종 민들레(흰민들레)는 한국 고유종으로, 외래종 서양민들레에 밀려 점점 보기 힘들어지고 있다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Asterales', family: 'Asteraceae', genus: 'Taraxacum', species: 'T. platycarpum', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '국화목', familyKo: '국화과', genusKo: '민들레속' }
  },
  {
    id: 'fl13', koreanName: '매발톱꽃', englishName: 'Columbine', scientificName: 'Aquilegia buergeriana',
    category: 'flowers', subcategory: '초본', emoji: '💜',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Aquilegia_buergeriana_11.JPG/200px-Aquilegia_buergeriana_11.JPG',
    habitat: '산지 숲 가장자리',
    characteristics: ['독특한 거(距) 모양 꽃', '보라·노란·분홍 등 다양한 색', '높이 30~80cm', '5~7월 개화', '벌새와 공진화(해외종)'],
    funFact: '꽃 뒤의 긴 거(距)에 꿀이 들어있어 긴 혀를 가진 곤충만 먹을 수 있는 진화적 적응을 보여준다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Ranunculales', family: 'Ranunculaceae', genus: 'Aquilegia', species: 'A. buergeriana', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '미나리아재비목', familyKo: '미나리아재비과', genusKo: '매발톱속' }
  },
  {
    id: 'fl14', koreanName: '부레옥잠', englishName: 'Water Hyacinth', scientificName: 'Eichhornia crassipes',
    category: 'flowers', subcategory: '수생식물', emoji: '💜',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eichhornia_crassipes_C.jpg/200px-Eichhornia_crassipes_C.jpg',
    habitat: '연못, 저수지, 하천',
    characteristics: ['보라색 꽃', '부풀어 오른 잎자루(부낭)', '물 위에 떠서 자람', '매우 빠른 번식력', '수질 정화 능력'],
    funFact: '세계 10대 최악의 침입종 중 하나로, 2주마다 개체수가 2배로 늘어 수로를 막아버릴 수 있다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Liliopsida', order: 'Commelinales', family: 'Pontederiaceae', genus: 'Eichhornia', species: 'E. crassipes', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '외떡잎식물강', orderKo: '닭의장풀목', familyKo: '물옥잠과', genusKo: '부레옥잠속' }
  },
  {
    id: 'fl15', koreanName: '에델바이스', englishName: 'Edelweiss', scientificName: 'Leontopodium alpinum',
    category: 'flowers', subcategory: '고산식물', emoji: '⭐',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Alpen_Edelwei%C3%9F%2C_Leontopodium_alpinum_2.JPG/200px-Alpen_Edelwei%C3%9F%2C_Leontopodium_alpinum_2.JPG',
    habitat: '고산 지대 바위틈 (한라산 등)',
    characteristics: ['흰색 별 모양 포엽', '솜털로 덮인 은색 잎', '높이 5~20cm', '자외선 차단 기능의 털', '7~8월 개화'],
    funFact: '"사운드 오브 뮤직"의 유명한 노래 주인공이며, 솜털이 자외선을 거의 완벽하게 차단하여 자외선 차단제 연구에 활용된다.',
    taxonomy: { kingdom: 'Plantae', phylum: 'Magnoliophyta', class: 'Magnoliopsida', order: 'Asterales', family: 'Asteraceae', genus: 'Leontopodium', species: 'L. alpinum', kingdomKo: '식물계', phylumKo: '현화식물문(피자식물문)', classKo: '쌍떡잎식물강', orderKo: '국화목', familyKo: '국화과', genusKo: '에델바이스속' }
  },

  // ==================== 🍄 버섯 (Mushrooms & Fungi) ====================
  {
    id: 'm1', koreanName: '송이버섯', englishName: 'Matsutake', scientificName: 'Tricholoma matsutake',
    category: 'mushrooms', subcategory: '식용버섯', emoji: '🍄',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Matsutake.jpg/200px-Matsutake.jpg',
    habitat: '소나무 숲의 뿌리 근처',
    characteristics: ['강한 독특한 향', '두꺼운 대와 갓', '소나무와 공생(균근)', '인공 재배 불가', '가을에 발생'],
    funFact: '한국에서 가장 비싼 버섯으로, 양양·봉화 지역이 유명하며 최상품은 개당 수만 원에 거래된다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Agaricales', family: 'Tricholomataceae', genus: 'Tricholoma', species: 'T. matsutake', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '주름버섯목', familyKo: '송이과', genusKo: '송이속' }
  },
  {
    id: 'm2', koreanName: '표고버섯', englishName: 'Shiitake', scientificName: 'Lentinula edodes',
    category: 'mushrooms', subcategory: '식용버섯', emoji: '🍄',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Shiitakegrowing.jpg/200px-Shiitakegrowing.jpg',
    habitat: '참나무·밤나무 등 활엽수 고사목',
    characteristics: ['갈색 갓에 흰 균열 무늬', '강한 감칠맛(글루탐산)', '원목 재배와 톱밥 재배', '건조 시 향 증가', '면역력 강화 성분(레티난)'],
    funFact: '마른 표고버섯은 생 표고보다 감칠맛이 10배 이상 강하며, "화고"라 불리는 갓이 갈라진 것이 최고급이다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Agaricales', family: 'Omphalotaceae', genus: 'Lentinula', species: 'L. edodes', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '주름버섯목', familyKo: '꽃구름버섯과', genusKo: '표고속' }
  },
  {
    id: 'm3', koreanName: '느타리버섯', englishName: 'Oyster Mushroom', scientificName: 'Pleurotus ostreatus',
    category: 'mushrooms', subcategory: '식용버섯', emoji: '🍄',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pleurotus_ostreatus_JPG7.jpg/200px-Pleurotus_ostreatus_JPG7.jpg',
    habitat: '활엽수 고사목, 재배 농장',
    characteristics: ['부채꼴 또는 굴 모양 갓', '줄기가 짧거나 없음', '흰색~회색', '다발로 자람', '쉬운 인공 재배'],
    funFact: '세계에서 두 번째로 많이 재배되는 버섯으로, 한국 된장찌개와 불고기에 빠지지 않는 식재료이다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Agaricales', family: 'Pleurotaceae', genus: 'Pleurotus', species: 'P. ostreatus', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '주름버섯목', familyKo: '느타리과', genusKo: '느타리속' }
  },
  {
    id: 'm4', koreanName: '뽕나무버섯 (꿀버섯)', englishName: 'Honey Fungus (Armillaria)', scientificName: 'Armillaria mellea',
    category: 'mushrooms', subcategory: '기생/부생균', emoji: '🍯',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Armillaria_mellea%2C_Honey_Fungus%2C_UK_1.jpg/200px-Armillaria_mellea%2C_Honey_Fungus%2C_UK_1.jpg',
    habitat: '활엽수·침엽수 뿌리와 줄기',
    characteristics: ['꿀색 갓', '대에 고리(턱받이)', '생물발광(야광)', '나무를 죽이는 기생균', '균사속(리조모프)으로 퍼짐'],
    funFact: '미국 오리건주에서 발견된 뽕나무버섯(Armillaria ostoyae) 균사체는 면적 9.6km²로 지구상 가장 큰 생명체이며, 나이가 약 2,400년으로 추정된다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Agaricales', family: 'Physalacriaceae', genus: 'Armillaria', species: 'A. mellea', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '주름버섯목', familyKo: '뽕나무버섯과', genusKo: '뽕나무버섯속' }
  },
  {
    id: 'm5', koreanName: '영지버섯', englishName: 'Reishi / Lingzhi', scientificName: 'Ganoderma lucidum',
    category: 'mushrooms', subcategory: '약용버섯', emoji: '✨',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Ganoderma.lucidum.shanofee.png/200px-Ganoderma.lucidum.shanofee.png',
    habitat: '활엽수 그루터기',
    characteristics: ['광택 나는 적갈색 갓', '부채꼴~콩팥 모양', '단단한 목질', '쓴맛', '다년생 가능'],
    funFact: '동양 전통 의학에서 "불로초"로 불리며, 진시황이 찾던 불로초가 영지버섯이라는 설이 있다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Polyporales', family: 'Ganodermataceae', genus: 'Ganoderma', species: 'G. lucidum', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '구멍장이버섯목', familyKo: '영지버섯과', genusKo: '영지버섯속' }
  },
  {
    id: 'm6', koreanName: '동충하초', englishName: 'Cordyceps', scientificName: 'Ophiocordyceps sinensis',
    category: 'mushrooms', subcategory: '기생균', emoji: '🐛',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cordyceps_sinensis.jpg/200px-Cordyceps_sinensis.jpg',
    habitat: '고산 초원 (티벳 고원 등)',
    characteristics: ['곤충에 기생하여 성장', '곤충 체내에서 균사 발달', '가늘고 긴 자실체', '매우 비쌈', '겨울엔 벌레, 여름엔 풀'],
    funFact: '곤충의 뇌를 조종하여 "좀비"로 만드는 버섯으로, 게임 "더 라스트 오브 어스"의 좀비 바이러스 모티브이다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Ascomycota', class: 'Sordariomycetes', order: 'Hypocreales', family: 'Ophiocordycipitaceae', genus: 'Ophiocordyceps', species: 'O. sinensis', kingdomKo: '균계', phylumKo: '자낭균문', classKo: '동충하초강', orderKo: '육좌균목', familyKo: '동충하초과', genusKo: '동충하초속' }
  },
  {
    id: 'm7', koreanName: '광대버섯', englishName: 'Fly Agaric', scientificName: 'Amanita muscaria',
    category: 'mushrooms', subcategory: '독버섯', emoji: '🔴',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg/200px-Amanita_muscaria_3_vliegenzwammen_op_rij.jpg',
    habitat: '자작나무·소나무 숲',
    characteristics: ['빨간 갓에 흰 점', '가장 유명한 버섯 이미지', '환각 성분 포함', '파리를 유인·살충', '균근 공생균'],
    funFact: '슈퍼마리오의 버섯, 이모지 🍄의 모델이며, 일부 학자들은 산타클로스 전설이 이 버섯의 환각 경험에서 유래했다고 주장한다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Agaricales', family: 'Amanitaceae', genus: 'Amanita', species: 'A. muscaria', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '주름버섯목', familyKo: '광대버섯과', genusKo: '광대버섯속' }
  },
  {
    id: 'm8', koreanName: '먹물버섯', englishName: 'Shaggy Ink Cap', scientificName: 'Coprinus comatus',
    category: 'mushrooms', subcategory: '식용버섯', emoji: '🖤',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Coprinus_comatus%2C_the_shaggy_ink_cap%2C_lawyer%27s_wig%2C_or_shaggy_mane_mushroom.jpg/200px-Coprinus_comatus%2C_the_shaggy_ink_cap%2C_lawyer%27s_wig%2C_or_shaggy_mane_mushroom.jpg',
    habitat: '잔디밭, 길가, 공원',
    characteristics: ['원통형 흰 갓', '갓이 녹아 검은 잉크가 됨(자가소화)', '어릴 때 식용 가능', '도시에서도 발견', '빠른 성장과 소멸'],
    funFact: '수확 후 몇 시간 내에 검은 잉크처럼 녹아내리므로 즉시 요리해야 하며, 실제로 이 검은 액체를 잉크로 사용한 역사가 있다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Agaricales', family: 'Agaricaceae', genus: 'Coprinus', species: 'C. comatus', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '주름버섯목', familyKo: '주름버섯과', genusKo: '먹물버섯속' }
  },
  {
    id: 'm9', koreanName: '노루궁뎅이버섯', englishName: "Lion's Mane", scientificName: 'Hericium erinaceus',
    category: 'mushrooms', subcategory: '식용/약용버섯', emoji: '🦁',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lion%27s-mane_mushroom_imported_from_iNaturalist_photo_29576097_on_21_March_2024.jpg/200px-Lion%27s-mane_mushroom_imported_from_iNaturalist_photo_29576097_on_21_March_2024.jpg',
    habitat: '참나무·너도밤나무 등 활엽수',
    characteristics: ['하얀 털(침) 다발 형태', '뇌 건강에 도움(NGF 촉진)', '해산물 같은 맛', '나무에 매달려 자람', '재배 가능'],
    funFact: '신경성장인자(NGF)를 촉진하는 성분이 있어 치매 예방 연구에 활발히 사용되고 있으며, 맛이 랍스터와 비슷하다고 한다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Russulales', family: 'Hericiaceae', genus: 'Hericium', species: 'H. erinaceus', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '무당버섯목', familyKo: '산호침버섯과', genusKo: '노루궁뎅이속' }
  },
  {
    id: 'm10', koreanName: '목이버섯', englishName: 'Wood Ear', scientificName: 'Auricularia auricula-judae',
    category: 'mushrooms', subcategory: '식용버섯', emoji: '👂',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Jelly_Ear%2C_Auricularia_auricula-judae%2C_UK_2.jpg/200px-Jelly_Ear%2C_Auricularia_auricula-judae%2C_UK_2.jpg',
    habitat: '활엽수 고사목',
    characteristics: ['귀 모양의 젤라틴질 자실체', '갈색~검은색', '쫄깃한 식감', '건조 후 복원 가능', '무맛에 가까움'],
    funFact: '중국 요리의 필수 재료이며, 학명의 "유다의 귀"는 유다가 목을 매단 나무에서 자란다는 전설에서 유래했다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Auriculariales', family: 'Auriculariaceae', genus: 'Auricularia', species: 'A. auricula-judae', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '목이목', familyKo: '목이과', genusKo: '목이속' }
  },
  {
    id: 'm11', koreanName: '싸리버섯', englishName: 'Coral Fungus', scientificName: 'Ramaria botrytis',
    category: 'mushrooms', subcategory: '식용버섯', emoji: '🪸',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/2010-09-17_Ramaria_botrytis_crop.jpg/200px-2010-09-17_Ramaria_botrytis_crop.jpg',
    habitat: '활엽수·침엽수 혼합림 바닥',
    characteristics: ['산호 또는 꽃양배추 모양', '흰색 줄기에 분홍 끝', '땅에서 자라는 다발', '가을 발생', '독버섯과 혼동 주의'],
    funFact: '바다 산호를 닮은 독특한 외형으로, 숲 속에서 발견하면 마치 해저 세계에 온 것 같은 느낌을 준다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Gomphales', family: 'Gomphaceae', genus: 'Ramaria', species: 'R. botrytis', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '나팔버섯목', familyKo: '나팔버섯과', genusKo: '싸리버섯속' }
  },
  {
    id: 'm12', koreanName: '차가버섯', englishName: 'Chaga', scientificName: 'Inonotus obliquus',
    category: 'mushrooms', subcategory: '약용버섯', emoji: '🪨',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Inonotus_obliquus.jpg/200px-Inonotus_obliquus.jpg',
    habitat: '자작나무 줄기',
    characteristics: ['검은 덩어리(균핵) 형태', '나무의 혹처럼 보임', '항산화 성분 풍부', '차로 끓여 마심', '주로 추운 지역에서 발견'],
    funFact: '겉은 숯처럼 검지만 안은 주황색이며, 러시아에서는 수백 년 전부터 민간요법으로 사용해왔다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Hymenochaetales', family: 'Hymenochaetaceae', genus: 'Inonotus', species: 'I. obliquus', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '소나무비늘버섯목', familyKo: '소나무비늘버섯과', genusKo: '시루뻔버섯속' }
  },
  {
    id: 'm13', koreanName: '독우산광대버섯', englishName: 'Destroying Angel', scientificName: 'Amanita virosa',
    category: 'mushrooms', subcategory: '독버섯', emoji: '☠️',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Destroying_Angel_02.jpg/200px-Destroying_Angel_02.jpg',
    habitat: '활엽수·침엽수 혼합림',
    characteristics: ['순백의 아름다운 외형', '치명적 독성(아마톡신)', '식용 버섯과 혼동 위험', '대에 턱받이와 대주머니', '증상이 6~12시간 후 발현'],
    funFact: '세계에서 가장 위험한 버섯 중 하나로, 한 개만 먹어도 사망할 수 있으며 로마 황제 클라우디우스도 이 종류의 버섯에 독살되었다고 전해진다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Agaricales', family: 'Amanitaceae', genus: 'Amanita', species: 'A. virosa', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '주름버섯목', familyKo: '광대버섯과', genusKo: '광대버섯속' }
  },
  {
    id: 'm14', koreanName: '꽃송이버섯', englishName: 'Cauliflower Mushroom', scientificName: 'Sparassis crispa',
    category: 'mushrooms', subcategory: '식용/약용버섯', emoji: '🥦',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Grote_sponszwam_%28Sparassis_crispa%29._09-11-2023._%28d.j.b%29.jpg/200px-Grote_sponszwam_%28Sparassis_crispa%29._09-11-2023._%28d.j.b%29.jpg',
    habitat: '소나무 뿌리 근처',
    characteristics: ['꽃양배추 또는 뇌 모양', '크림색의 주름진 갓', '지름 최대 40cm', '베타글루칸 풍부', '가을 발생'],
    funFact: '면역력 강화에 효과적인 베타글루칸 함량이 다른 버섯보다 월등히 높아 항암 보조 식품으로 주목받고 있다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Polyporales', family: 'Sparassidaceae', genus: 'Sparassis', species: 'S. crispa', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '구멍장이버섯목', familyKo: '꽃송이버섯과', genusKo: '꽃송이속' }
  },
  {
    id: 'm15', koreanName: '잔나비불로초', englishName: "Artist's Bracket", scientificName: 'Ganoderma applanatum',
    category: 'mushrooms', subcategory: '다년생 버섯', emoji: '🎨',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ganoderma_applanatum_2010_G1.jpg/200px-Ganoderma_applanatum_2010_G1.jpg',
    habitat: '활엽수 고사목·쇠약목',
    characteristics: ['반원형 선반 모양', '단단한 목질', '아래 면을 긁으면 갈색 그림', '다년생으로 나이테 형성', '지름 최대 60cm'],
    funFact: '하얀 아래면을 뾰족한 것으로 긁으면 갈색으로 변하여 그림을 그릴 수 있어 "예술가의 버섯"이라 불린다.',
    taxonomy: { kingdom: 'Fungi', phylum: 'Basidiomycota', class: 'Agaricomycetes', order: 'Polyporales', family: 'Ganodermataceae', genus: 'Ganoderma', species: 'G. applanatum', kingdomKo: '균계', phylumKo: '담자균문', classKo: '담자균강', orderKo: '구멍장이버섯목', familyKo: '영지버섯과', genusKo: '영지버섯속' }
  },
];

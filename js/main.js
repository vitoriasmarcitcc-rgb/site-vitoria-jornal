/* =====================================================
   ILHA SEM ESTADO? — interações (Vanilla JS)
   Edite os blocos de CONFIGURAÇÃO abaixo para trocar
   conteúdos sem mexer no resto do código.
   ===================================================== */

/* ---------------------- CONFIGURAÇÃO ---------------------- */

// Vídeo de destaque (yt_01): Entrevista com professor e historiador Zé Muniz
const YT_DESTAQUE = 'AKAWWUSCmUQ';

// Entrevistas (Página 4 — Conheça a história dos moradores)
const MORADORES = [
  {
    yt: 'wUAblKFNSvw',
    url: 'https://youtu.be/wUAblKFNSvw',
    titulo: 'Entrevista com Jessica Ritta, mãe e avó',
    texto: 'Jéssica Ritta, sua mãe e sua avó compartilham histórias, memórias e experiências de vida na Ilha das Peças. Da infância às experiências da vida adulta, passando pela formação de suas famílias e pela criação dos filhos, as três mulheres ajudam a compreender o papel dos vínculos familiares, da convivência comunitária e dos conhecimentos transmitidos entre gerações, que contribuem para manter viva a memória e a identidade caiçara.'
  },
  {
    yt: 'AKAWWUSCmUQ',
    url: 'https://youtu.be/AKAWWUSCmUQ',
    titulo: 'Entrevista com professor e historiador Zé Muniz',
    texto: 'O professor de História e pesquisador José Carlos Muniz, conhecido como Zé Muniz, compartilha reflexões sobre a história, a identidade e a cultura caiçara do litoral do Paraná. A formação histórica do município, a contribuição dos povos indígenas, africanos, portugueses e de diferentes grupos de imigrantes para a construção das comunidades locais. E o fandango caiçara, a rabeca, a música e a religiosidade, refletindo sobre as transformações culturais ao longo do tempo.'
  },
  {
    yt: 'cKqHtDS-LjY',
    url: 'https://youtu.be/cKqHtDS-LjY',
    titulo: 'Entrevista com Renato Caiçara',
    texto: 'Renato Caiçara, morador da comunidade e coordenador do Fórum de Povos e Comunidades Tradicionais de Guaraqueçaba, fala sobre suas raízes indígenas, os saberes caiçaras e sua trajetória de vida, marcada pela relação com o território e pela luta para manter viva a cultura de seu povo. Aborda a especulação imobiliária, regularização fundiária e a educação na Vila.'
  },
  {
    yt: 'hFB299iFz4w',
    url: 'https://youtu.be/hFB299iFz4w',
    titulo: 'Entrevista com Carmen Maria do Rosário',
    texto: 'Carmen compartilha sua trajetória de vida na comunidade onde mora há 37 anos. Relembra o surgimento e a evolução do empreendimento comunitário e da cooperativa local. O projeto teve início com a união de 42 mulheres, esposas de pescadores. Atualmente trabalham com gastronomia, com a produção artesanal de pães, e almoço para venda.'
  },
  {
    yt: 'zTQjd9CEktc',
    url: 'https://youtu.be/zTQjd9CEktc',
    titulo: 'Entrevista com Mariana Balduzzi',
    texto: 'Mariana, médica e moradora da Vila das Peças, compartilha sobre a realidade da saúde em comunidades isoladas. Trabalhava no atendimento de 15 comunidades caiçaras. Conta que cuidar da saúde nesses lugares, compreendendo o estilo de vida e as dificuldades do território. Destaca o aprendizado diário e a troca com a comunidade e diz sua visão para o futuro da comunidade.'
  },
  {
    yt: 'RhN_nXXDHvw',
    url: 'https://youtu.be/RhN_nXXDHvw',
    titulo: 'Entrevista com Celso Roberto Xavier',
    texto: 'Celso Roberto Xavier, nativo da Ilha das Peças, no litoral do Paraná, conta sua trajetória de vida, entre as lembranças da infância na ilha, os anos dedicados ao comércio e o retorno às suas origens para abrir um restaurante local. Conversamos sobre os desafios de empreender diante do isolamento geográfico, desde os limites da rede de captação de água até as adaptações necessárias para garantir a qualidade no comércio.'
  }
];

// Podcast no Spotify (Página 5)
const PODCASTS = [
  {
    spotify: '5hqjtqMHMFPokijffcoosE',
    url: 'https://open.spotify.com/episode/5hqjtqMHMFPokijffcoosE?si=m0iFgGYIRbev7DXct6RKfg',
    titulo: 'A história antes do descobrimento',
    texto: 'No episódio de abertura te apresento a história de surgimento da região, entre as 57 ilhas que compõem o litoral paranaense, até chegar à Ilha das Peças.'
  },
  {
    spotify: '3NkjeZ7gUK1BFl9ZszSSZX',
    url: 'https://open.spotify.com/episode/3NkjeZ7gUK1BFl9ZszSSZX?si=afIcrXquScqqJZbvhiJqfg',
    titulo: "Dentro d'água, sobre a terra",
    texto: 'Entre manguezais, rios e águas estuarinas, a Vila das Peças abriga uma biodiversidade que faz da região uma área de grande importância ecológica. Mas a presença de tantas espécies também convive com pressões provocadas pelas atividades humanas.'
  },
  {
    spotify: '5Wv0wGQ6ldHx7bWZLdSGPN',
    url: 'https://open.spotify.com/episode/5Wv0wGQ6ldHx7bWZLdSGPN?si=ff312d0576f400f',
    titulo: 'Quanto vale seu terreno',
    texto: 'Converso com Eduardo Vedor de Paulo, geógrafo e professor da Universidade Federal do Paraná. A conversa passa pela criação do Parque Nacional do Superagui, pelas regras das unidades de conservação e pelos desafios da regularização fundiária.'
  },
  {
    spotify: '38OxvOvzkfJmrCMCE2qAVZ',
    url: 'https://open.spotify.com/episode/38OxvOvzkfJmrCMCE2qAVZ?si=9PU_1YzWS9quL9fBRrKNoQ',
    titulo: 'A maré de direitos',
    texto: 'Jaqueline Pereira de Andrade aborda os conflitos entre conservação ambiental e direitos das comunidades tradicionais. A partir de sua atuação como assessora jurídica na organização Terra de Direitos, falamos de leis ambientais e como unidades de conservação afetam o cotidiano de quem vive nelas.'
  },
  {
    spotify: '1ZJ6ITgJRIwWd9OADOFfI5',
    url: 'https://open.spotify.com/episode/1ZJ6ITgJRIwWd9OADOFfI5?si=_FBa6wF8TVyj7SAuJ5lHyA',
    titulo: 'Dentro do mapa',
    texto: 'Uma comunidade pode existir há gerações e, ainda assim, não aparecer nos registros oficiais como deveria. Neste episódio, a geógrafa Laura Krammer fala sobre o trabalho de cartografia realizado pelo projeto Território Caiçara, que registrou as casas, espaços e as formas de ocupação da comunidade.'
  }
];

// Carrossel da Comunidade e Cultura (./src/carrossel/foto_1.jpg ... foto_12.jpg)
const CAROUSEL_SLIDES = [
  { src: './src/carrossel/foto_1.jpg',  legenda: 'Cemitério da Ilha das Peças. Autoria da foto: Daniel Chapaval' },
  { src: './src/carrossel/foto_2.jpg',  legenda: 'Letreiro turístico na Cooperativa, em frente ao trapiche.' },
  { src: './src/carrossel/foto_3.jpg',  legenda: 'Autoria da foto: Vitória Smarci' },
  { src: './src/carrossel/foto_4.jpg',  legenda: 'Pescadores observam o mar. Autoria da foto: Daniel Chapaval' },
  { src: './src/carrossel/foto_5.jpg',  legenda: 'Renato Caiçara mostrando a torre do Mato da Ilha que fazia parte de um antigo sistema de controle e vigilância da navegação na baía de Paranaguá. Autoria da foto: Daniel Chapaval' },
  { src: './src/carrossel/foto_6.jpg',  legenda: 'Autoria da foto: Vitória Smarci' },
  { src: './src/carrossel/foto_7.jpg',  legenda: 'Campo de futebol da Vila. Autoria da foto: Vitória Smarci' },
  { src: './src/carrossel/foto_8.jpg',  legenda: 'Jessica Ritta e sua família. Autoria da foto: Vitória Smarci' },
  { src: './src/carrossel/foto_9.jpg',  legenda: 'Pescador pintando o novo barco. Autoria da foto: Vitória Smarci' },
  { src: './src/carrossel/foto_10.jpg', legenda: 'Comércio local. Autoria da foto: Vitória Smarci' },
  { src: './src/carrossel/foto_11.jpg', legenda: 'Integrantes da cooperativa de mulheres. Autoria da foto: Vitória Smarci' },
  { src: './src/carrossel/foto_12.jpg', legenda: 'Aparição da baleia que visita a Ilha. Autoria da foto: Daniel Chapaval' }
];

// Galeria de Fotos (./src/galeria/) — SOMENTE AS FOTOS SEM LEGENDAS
const GALERIA_FOTOS = [
  './src/galeria/foto_2.jpg',
  './src/galeria/foto_3.jpg',
  './src/galeria/foto_4.jpg',
  './src/galeria/foto_6.jpg',
  './src/galeria/foto_8.jpg',
  './src/galeria/foto_8(1).jpg',
  './src/galeria/foto_9.jpg',
  './src/galeria/foto_10.jpg',
  './src/galeria/foto_11.jpg',
  './src/galeria/foto_12.jpg',
  './src/galeria/foto_13.jpg',
  './src/galeria/foto_14.jpg',
  './src/galeria/foto_16.jpg',
  './src/galeria/foto_17.jpg',
  './src/galeria/foto_18.jpg',
  './src/galeria/foto_19.jpg',
  './src/galeria/foto_22.jpg',
  './src/galeria/foto_23.jpg',
  './src/galeria/foto_24.jpg',
  './src/galeria/foto_25.jpg',
  './src/galeria/foto_26.jpg',
  './src/galeria/foto_27.jpg',
  './src/galeria/foto_28.jpg',
  './src/galeria/foto_30.jpg',
  './src/galeria/foto_31.jpg',
  './src/galeria/foto_32.jpg',
  './src/galeria/foto_33.jpg',
  './src/galeria/foto_34.jpg',
  './src/galeria/foto_37.jpg',
  './src/galeria/foto_40.jpg',
  './src/galeria/foto_42.jpg',
  './src/galeria/foto_43.jpg',
  './src/galeria/foto_44.jpg',
  './src/galeria/foto_45.jpg',
  './src/galeria/foto_46.jpg',
  './src/galeria/foto_47.jpg',
  './src/galeria/foto_48.jpg',
  './src/galeria/foto_51.jpg',
  './src/galeria/foto_53.jpg',
  './src/galeria/foto_54.jpg',
  './src/galeria/foto_55.jpg',
  './src/galeria/foto_56.jpg',
  './src/galeria/foto_57.jpg',
  './src/galeria/foto_58.jpg',
  './src/galeria/foto_59.jpg',
  './src/galeria/foto_60.jpg',
  './src/galeria/foto_61.jpg',
  './src/galeria/foto_62.jpg',
  './src/galeria/foto_63.jpg',
  './src/galeria/foto_64.jpg',
  './src/galeria/foto_65.jpg',
  './src/galeria/foto_66.jpg',
  './src/galeria/foto_67.jpg',
  './src/galeria/foto_68.jpg',
  './src/galeria/foto_69.jpg',
  './src/galeria/foto_70.jpg',
  './src/galeria/foto_71.jpg',
  './src/galeria/foto_72.jpg',
  './src/galeria/foto_73.jpg',
  './src/galeria/foto_74.jpg',
  './src/galeria/foto_75.jpg',
  './src/galeria/foto_76.jpg',
  './src/galeria/foto_77.jpg',
  './src/galeria/foto_78.jpg',
  './src/galeria/foto_79.jpg'
];

// Linha do tempo histórica da região das ilhas
const TIMELINE = [
  { ano: '7 a 3 mil anos atrás', titulo: 'Presença de sambaquis', texto: 'Os sambaquis registram a presença dos primeiros povos no litoral.' },
  { ano: '1800', titulo: 'Uso dos rios navegáveis', texto: 'Os rios passam a ser utilizados como vias de navegação e de acesso ao território.' },
  { ano: '1850 a 1930', titulo: 'Migração interna', texto: 'Famílias migram para a região da Ponta das Peças.' },
  { ano: '1880', titulo: 'Construção da 1ª igreja', texto: 'A primeira igreja marca a organização da vida comunitária.' },
  { ano: '1905', titulo: '1ª Festa de São Sebastião', texto: 'Realização da primeira festa religiosa da comunidade.' },
  { ano: '1930', titulo: 'Primeiro barco a motor', texto: 'A chegada do primeiro barco a motor transforma o deslocamento e a pesca.' },
  { ano: '1936', titulo: 'Campo de futebol', texto: 'Construção do campo de futebol, espaço de encontro da comunidade.' },
  { ano: '1948', titulo: 'Abertura do Canal do Varadouro', texto: 'O canal altera as rotas de navegação da região.' },
  { ano: '1970', titulo: 'Mudanças na pesca', texto: 'A atividade pesqueira passa por transformações importantes.' },
  { ano: '1980', titulo: 'Casas de veraneio', texto: 'Início da construção das casas de veraneio.' },
  { ano: '1982', titulo: 'Escola Municipal', texto: 'Oficialização da escola municipal da comunidade.' },
  { ano: '1985', titulo: 'Aparelhos telefônicos', texto: 'Instalação dos primeiros aparelhos telefônicos.' },
  { ano: '1989', titulo: 'Parque Nacional de Superagui', texto: 'Criação do Parque Nacional de Superagui, que preserva a Mata Atlântica e os modos de vida tradicionais.' },
  { ano: '1994', titulo: 'Chegada da energia elétrica', texto: 'A energia elétrica chega à comunidade; é criada a Associação de Moradores da Vila das Peças.' },
  { ano: '1997', titulo: 'Clube de Mulheres', texto: 'Criação do Clube de Mulheres da Vila das Peças.' },
  { ano: '2000', titulo: 'Casas de alvenaria', texto: 'Construção das novas casas de alvenaria.' },
  { ano: '2003', titulo: 'Novas atividades', texto: 'Início de novas atividades comunitárias e de turismo.' },
  { ano: '2007', titulo: 'Posto de Saúde', texto: 'Abertura do Posto de Saúde e chegada da internet via rádio.' },
  { ano: '2022', titulo: 'Comunidade de Vila das Peças', texto: 'Criação da Comunidade de Vila das Peças.' }
];

/* ---------------------- FUNÇÕES AUXILIARES ---------------------- */

const $ = (sel, root = document) => root.querySelector(sel);

function youtubeEmbed(id, titulo = 'Vídeo') {
  return `<div class="video-box"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${titulo}"
    loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
}

function spotifyEmbed(id, titulo = 'Episódio') {
  return `<iframe class="w-full rounded-2xl" style="border:0" height="152" loading="lazy" title="${titulo}"
    src="https://open.spotify.com/embed/episode/${id}?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
}

/* ---------------------- MENU / CABEÇALHO ---------------------- */

const header = $('#header');
const menuBtn = $('#menuBtn');
const mobileMenu = $('#mobileMenu');

if (header && !header.classList.contains('is-solid')) {
  const onScrollHeader = () => header.classList.toggle('is-solid', window.scrollY > 60);
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden') === false;
    menuBtn.setAttribute('aria-expanded', String(open));
    header.classList.add('is-solid');
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

/* ---------------------- LINHA DO TEMPO ---------------------- */

const track = $('#timelineTrack');
const panel = $('#timelinePanel');

if (track && panel) {
  const showTimeline = (i) => {
    track.querySelectorAll('.tl-item').forEach((el, idx) => el.classList.toggle('active', idx === i));
    const t = TIMELINE[i];
    panel.innerHTML = `<p class="text-sm font-bold uppercase tracking-widest text-amber-dark">${t.ano}</p>
      <h3 class="mt-1 text-xl font-bold text-forest">${t.titulo}</h3>
      <p class="mt-2 leading-relaxed text-ink/80">${t.texto}</p>`;
  };

  TIMELINE.forEach((t, i) => {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'tl-item';
    el.innerHTML = `<span class="tl-dot"></span><span class="tl-year">${t.ano}</span><span class="tl-title">${t.titulo}</span>`;
    el.addEventListener('click', () => {
      showTimeline(i);
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
    el.addEventListener('mouseenter', () => showTimeline(i));
    track.appendChild(el);
  });
  showTimeline(0);

  $('#tlPrev')?.addEventListener('click', () => track.scrollBy({ left: -320, behavior: 'smooth' }));
  $('#tlNext')?.addEventListener('click', () => track.scrollBy({ left: 320, behavior: 'smooth' }));
}

/* ---------------------- CARROSSEL ---------------------- */

const carousel = $('#carousel');
if (carousel) {
  CAROUSEL_SLIDES.forEach((slide, idx) => {
    carousel.insertAdjacentHTML('beforeend', `
      <figure class="car-slide flex flex-col">
        <div class="overflow-hidden">
          <img src="${slide.src}" alt="${slide.legenda}" class="aspect-[4/3] w-full object-cover" loading="${idx < 3 ? 'eager' : 'lazy'}" />
        </div>
        <figcaption class="p-4 text-xs sm:text-sm leading-relaxed text-ink/85">${slide.legenda}</figcaption>
      </figure>`);
  });

  const slideStep = () => (carousel.firstElementChild?.getBoundingClientRect().width || 300) + 20;
  const nextSlide = () => {
    const end = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 8;
    end ? carousel.scrollTo({ left: 0, behavior: 'smooth' }) : carousel.scrollBy({ left: slideStep(), behavior: 'smooth' });
  };
  $('#carNext')?.addEventListener('click', nextSlide);
  $('#carPrev')?.addEventListener('click', () => carousel.scrollBy({ left: -slideStep(), behavior: 'smooth' }));

  let carTimer = setInterval(nextSlide, 4500);
  carousel.addEventListener('mouseenter', () => clearInterval(carTimer));
  carousel.addEventListener('mouseleave', () => { carTimer = setInterval(nextSlide, 4500); });
}

/* ---------------------- VÍDEO DE DESTAQUE + MORADORES + PODCAST ---------------------- */

const ytDestaqueEl = $('#ytDestaque');
if (ytDestaqueEl) {
  ytDestaqueEl.innerHTML = youtubeEmbed(YT_DESTAQUE, 'Entrevista com professor e historiador Zé Muniz');
}

const moradoresList = $('#moradoresList');
if (moradoresList) {
  MORADORES.forEach((m, i) => {
    moradoresList.insertAdjacentHTML('beforeend', `
      <article class="reveal-left flex flex-col items-center gap-8 rounded-2xl bg-sand/60 p-6 shadow-sm md:flex-row">
        <div class="w-full md:w-1/2">
          ${youtubeEmbed(m.yt, m.titulo)}
          <div class="mt-2 flex items-center justify-between text-xs text-ink/70">
            <span>Entrevista ${i + 1}</span>
            <a href="${m.url}" target="_blank" rel="noopener noreferrer" class="font-semibold text-forest hover:underline">Watch on YouTube</a>
          </div>
        </div>
        <div class="w-full space-y-4 text-left sm:text-justify leading-relaxed text-ink/85 md:w-1/2">
          <h3 class="text-base font-bold uppercase tracking-wide text-forest">${m.titulo}</h3>
          <p>${m.texto}</p>
        </div>
      </article>`);
  });
}

const podcastList = $('#podcastList');
if (podcastList) {
  PODCASTS.forEach((p, i) => {
    podcastList.insertAdjacentHTML('beforeend', `
      <article class="reveal rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
        <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs font-bold uppercase tracking-widest text-amber">Episódio ${i + 1}</span>
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="text-xs text-white/80 hover:text-amber hover:underline">Abrir no Spotify →</a>
        </div>
        <h3 class="mb-4 text-lg font-bold text-white">${p.titulo}</h3>
        ${spotifyEmbed(p.spotify, p.titulo)}
        <p class="mt-4 text-sm leading-relaxed text-white/90">${p.texto}</p>
      </article>`);
  });
}

/* ---------------------- GALERIA (SOMENTE FOTOS SEM LEGENDAS) + LIGHTBOX ---------------------- */

const galeriaPreview = $('#galeriaPreview');
if (galeriaPreview) {
  GALERIA_FOTOS.slice(0, 9).forEach((src, idx) => {
    galeriaPreview.insertAdjacentHTML('beforeend', `
      <div class="gal-card reveal">
        <button type="button" data-src="${src}" data-idx="${idx}" aria-label="Ampliar foto ${idx + 1}">
          <img src="${src}" alt="Fotografia da Vila das Peças" loading="lazy" />
        </button>
      </div>`);
  });
}

const grid = $('#galeriaGrid');
if (grid) {
  GALERIA_FOTOS.forEach((src, idx) => {
    grid.insertAdjacentHTML('beforeend', `
      <div class="gal-card reveal">
        <button type="button" data-src="${src}" data-idx="${idx}" aria-label="Ampliar foto ${idx + 1}">
          <img src="${src}" alt="Fotografia da Vila das Peças" loading="lazy" />
        </button>
      </div>`);
  });
}

const lb = $('#lightbox');
const lbPrev = $('#lbPrev');
const lbNext = $('#lbNext');
let currentLbIndex = null;

const openLb = (src, cap = '', idx = null) => {
  if (!lb) return;
  $('#lbImg').src = src;
  const lbCap = $('#lbCap');
  if (lbCap) {
    lbCap.textContent = cap;
    lbCap.classList.toggle('hidden', !cap);
  }
  currentLbIndex = idx;
  const hasGalleryNav = idx !== null;
  if (lbPrev) lbPrev.classList.toggle('hidden', !hasGalleryNav);
  if (lbNext) lbNext.classList.toggle('hidden', !hasGalleryNav);

  lb.classList.remove('hidden');
  lb.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

const closeLb = () => {
  if (!lb) return;
  lb.classList.add('hidden');
  lb.classList.remove('flex');
  document.body.style.overflow = '';
  currentLbIndex = null;
};

const stepLb = (dir) => {
  if (currentLbIndex === null) return;
  currentLbIndex = (currentLbIndex + dir + GALERIA_FOTOS.length) % GALERIA_FOTOS.length;
  $('#lbImg').src = GALERIA_FOTOS[currentLbIndex];
};

document.addEventListener('click', e => {
  const btn = e.target.closest('button[data-src]');
  if (btn) {
    const idx = btn.dataset.idx !== undefined ? Number(btn.dataset.idx) : null;
    openLb(btn.dataset.src, btn.dataset.cap || '', idx);
  }
});

$('#lbClose')?.addEventListener('click', closeLb);
lbPrev?.addEventListener('click', () => stepLb(-1));
lbNext?.addEventListener('click', () => stepLb(1));
lb?.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => {
  if (!lb || lb.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') stepLb(-1);
  if (e.key === 'ArrowRight') stepLb(1);
});

/* ---------------------- ANIMAÇÕES DE ENTRADA (scroll) ---------------------- */

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .reveal-left').forEach(el => io.observe(el));

/* ---------------------- TEXTO "ESCRITA JORNALÍSTICA" ---------------------- */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-typewriter]').forEach(el => {
  const full = el.textContent.trim().replace(/\s+/g, ' ');
  el.setAttribute('aria-label', full);
  if (reduceMotion) { el.textContent = full; return; }
  el.textContent = '';
  const typeIO = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    typeIO.disconnect();
    el.classList.add('typing');
    let i = 0;
    const timer = setInterval(() => {
      el.textContent = full.slice(0, ++i);
      if (i >= full.length) { clearInterval(timer); el.classList.remove('typing'); }
    }, 14);
  }, { threshold: 0.35 });
  typeIO.observe(el);
});

/* ---------------------- VÍDEO CENTRALIZA AO ROLAR ---------------------- */

const pv = $('.parallax-video');
if (pv) {
  let ticking = false;
  const updateParallax = () => {
    const r = pv.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, 1 - (r.top + r.height / 2 - vh / 2) / vh));
    pv.style.transform = reduceMotion ? 'none' : `translateY(${(1 - p) * 40}px) scale(${0.92 + p * 0.08})`;
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; } }, { passive: true });
  updateParallax();
}
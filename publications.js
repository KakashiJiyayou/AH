// Metadata checked against Crossref on 2026-11-24. Add code/website URLs only when confirmed.
const publications = [
  {
    id: 'hasan2025hybrid', year: 2025, tag: 'NCIC',
    pdf: 'http://www.chenhaiming.cn/papers/asif-ncic24.pdf',
    image: 'assets/conferences/ncic-2024.webp', imageAlt: 'NCIC conference logo from the official NCIC 2024 page',
    conferenceYear: 2024, conferenceUrl: 'https://www.icncic.org/ncic-2024/',
    title: 'A Hybrid Encoder-Decoder Based CNN Model for Improving Obstacle Detection Accuracy in USVs',
    authors: 'MD Asif Hasan, Haiming Chen, Di Wang, Changzhou Hua',
    bibAuthors: 'Hasan, MD Asif and Chen, Haiming and Wang, Di and Hua, Changzhou',
    venue: 'Proceedings of the 2nd International Conference on Networks, Communications and Intelligent Computing (NCIC 2024)',
    publisher: 'Springer Nature Singapore', pages: '917--928', type: 'inbook',
    doi: '10.1007/978-981-96-5006-4_80'
  },
  {
    id: 'wang2024stereo', year: 2024, tag: 'AIoTSys',
    pdf: 'http://www.chenhaiming.cn/papers/wch-aiotsys24.pdf',
    image: 'assets/conferences/aiotsys-2024.webp', imageAlt: 'Official AIoTSys 2024 conference banner',
    conferenceYear: 2024, conferenceUrl: 'https://crowdos.cn/AIoTSys/2024/',
    title: 'Real-Time Obstacle Detection and Localization for USV Using Stereo Vision and Edge Computing',
    authors: 'Di Wang, Haiming Chen, MD Asif Hasan, Weihao Zhang, Yuqing Hu',
    bibAuthors: 'Wang, Di and Chen, Haiming and Hasan, MD Asif and Zhang, Weihao and Hu, Yuqing',
    venue: '2024 International Conference on Artificial Intelligence of Things and Systems (AIoTSys)',
    publisher: 'IEEE', pages: '1--8', type: 'inproceedings',
    doi: '10.1109/AIoTSys63104.2024.10780548'
  },
  {
    id: 'hasan2019wipi', year: 2019, tag: 'ACM TURC',
    pdf: 'http://www.chenhaiming.cn/papers/acll-turc19.pdf',
    image: 'assets/conferences/acm-turc-2019.webp', imageAlt: 'Official ACM TURC 2019 conference banner',
    conferenceYear: 2019, conferenceUrl: 'https://www.acmturc.com/2019/en/index.html',
    title: 'WiPi: An Extendable Edge Platform for Building Time-Critical Cyber-Physical-Human Systems',
    authors: 'MD Asif Hasan, Haiming Chen, Yimo Lin, Xiwen Liu',
    bibAuthors: 'Hasan, MD Asif and Chen, Haiming and Lin, Yimo and Liu, Xiwen',
    venue: 'Proceedings of the ACM Turing Celebration Conference - China',
    publisher: 'ACM', pages: '1--5', type: 'inproceedings',
    doi: '10.1145/3321408.3321412'
  }
];

function bibtexFor(paper) {
  return `@${paper.type}{${paper.id},\n  title = {${paper.title}},\n  author = {${paper.bibAuthors}},\n  booktitle = {${paper.venue}},\n  publisher = {${paper.publisher}},\n  year = {${paper.year}},\n  pages = {${paper.pages}},\n  doi = {${paper.doi}},\n  url = {https://doi.org/${paper.doi}}\n}`;
}

function publicationElement(paper) {
  const article = document.createElement('article');
  article.className = 'publication';
  const badge = document.createElement('div');
  badge.className = 'publication-label';
  const tag = document.createElement('span');
  tag.className = 'venue-tag';
  tag.textContent = paper.tag;
  const year = document.createElement('span');
  year.className = 'year';
  year.textContent = paper.year;
  badge.append(tag, year);
  if (paper.image) {
    const artworkLink = document.createElement('a');
    artworkLink.className = 'conference-artwork';
    artworkLink.href = paper.conferenceUrl;
    artworkLink.title = `${paper.tag} ${paper.conferenceYear} conference website`;
    const artwork = document.createElement('img');
    artwork.src = paper.image;
    artwork.alt = paper.imageAlt;
    artwork.width = 180;
    artwork.height = 100;
    artwork.loading = 'lazy';
    artwork.decoding = 'async';
    artworkLink.append(artwork);
    badge.append(artworkLink);
  }
  const body = document.createElement('div');
  body.className = 'publication-body';
  const title = document.createElement('h3');
  const link = document.createElement('a');
  link.href = `https://doi.org/${paper.doi}`;
  link.textContent = paper.title;
  title.append(link);
  const authors = document.createElement('p');
  authors.textContent = paper.authors;
  const venue = document.createElement('p');
  venue.className = 'muted venue-name';
  venue.textContent = `${paper.venue}, ${paper.year}.`;
  const actions = document.createElement('div');
  actions.className = 'paper-actions';
  for (const [label, url] of [['PDF', paper.pdf], ['Publisher', link.href], ['Website', paper.website], ['Code', paper.code]]) {
    if (!url) continue;
    const action = document.createElement('a');
    action.href = url;
    action.textContent = label;
    actions.append(action);
  }
  const cite = document.createElement('details');
  cite.className = 'citation';
  const summary = document.createElement('summary');
  summary.textContent = 'BibTeX';
  summary.title = 'Copy BibTeX to clipboard and show citation';
  const citationBody = document.createElement('div');
  citationBody.className = 'citation-body';
  const pre = document.createElement('pre');
  const code = document.createElement('code');
  code.textContent = bibtexFor(paper);
  pre.append(code);
  const download = document.createElement('a');
  download.href = `assets/citations/${paper.id}.bib`;
  download.download = `${paper.id}.bib`;
  download.textContent = 'Dwnload';
  const copy = document.createElement('button');
  copy.type = 'button';
  copy.className = 'copy-citation';
  copy.textContent = 'Copy';
  copy.title = 'Copy BibTeX to clipboard';
  const status = document.createElement('span');
  status.className = 'copy-status';
  status.setAttribute('role', 'status');
  async function copyCitation() {
    try {
      await navigator.clipboard.writeText(code.textContent);
      status.textContent = 'Copied to clipboard';
    } catch {
      status.textContent = 'Clipboard unavailable. Select the citation above to copy it.';
    }
  }
  summary.addEventListener('click', copyCitation);
  copy.addEventListener('click', copyCitation);
  citationBody.append(pre, download, copy, status);
  cite.append(summary, citationBody);
  body.append(title, authors, venue, actions, cite);
  article.append(badge, body);
  return article;
}

const sortedPublications = [...publications].sort((a, b) => b.year - a.year);
for (const paper of sortedPublications.slice(0, 5)) {
  document.querySelector('#latest-publications').append(publicationElement(paper));
}
for (const paper of sortedPublications) {
  document.querySelector('#all-publications').append(publicationElement(paper));
}

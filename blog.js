const posts = [{
  id: 'robot-ai-painting', year: 2026, month: 6,
  title: 'Robot AI Painting',
  text: 'Ongoing research into robot AI painting at Shenzhen Research Institute, Hong Kong Metropolitan University. June 2026.',
  status: 'Ongoing research · June 2026',
  video: 'assets/videos/robot-ai-painting-2026-moving.mp4',
  poster: 'assets/videos/robot-ai-painting-2026-moving.webp',
  alt: 'Robot AI painting research video'
}, {
  id: 'tic-tac-toe-gpt4', year: 2024,
  title: '🎮 Play Tic-Tac-Toe with GPT-4! 🤖✨',
  text: 'It has been a rewarding learning experience to create a game of Tic-Tac-Toe against an LLM-powered player, GPT-4. The capabilities of generative AI continue to astonish, as they demonstrate not only proficiency in logical reasoning but also the potential to act as autonomous entities or interactive agents within a gaming environment. 🧠💡',
  status: 'Just for fun · 2024',
  video: 'assets/videos/tic-tac-toe-gpt4-2024-moving.mp4',
  poster: 'assets/videos/tic-tac-toe-gpt4-2024-moving.webp',
  alt: 'Tic-Tac-Toe with GPT demonstration, with source code and game board side by side'
}, {
  id: 'tesla-boat', year: 2022,
  title: 'I Tried to Make a Tesla Boat 😂🚤⚡🤖',
  keywords: ['boat', 'autonomous', 'GPS', 'without GPS'],
  text: 'I started this boat project in 2018 and returned to it at different times over several years. What began with boat mobility and cloud control grew into work on my cloud architecture, where much of our invention and utility-model patent work originated. In 2021, I had the opportunity to develop it further with a Ningbo ocean research institute. The numbered Boat 1, Boat2, and Boat 3 videos are from that later work.\n\nIn 2022, I met another teacher who let me use their equipment for research. That opportunity helped me continue exploring the boat and its sensing and autonomy challenges.\n\nOver time, I focused more on vision and sensory data: a boat or robot needs to perceive its surroundings to become truly autonomous. That direction led to my later obstacle-detection research and 2024 conference work.\n\nThis system was used in our <a href="http://www.chenhaiming.cn/papers/acll-turc19.pdf">WiPi paper (2019)</a>. The later <a href="http://www.chenhaiming.cn/papers/wch-aiotsys24.pdf">stereo-vision and edge-computing paper (2024)</a> also used my hardware and system for communication with the robot; credit for its main algorithms belongs to the first author, Di Wang.',
  status: 'Research continued in 2022 · Started in 2018',
  videos: [
    {label: 'Boat2', video: 'assets/videos/boat2-moving.mp4', poster: 'assets/videos/boat2-moving.webp', alt: 'Boat2 demonstration from the later boat work'},
    {label: 'Boat 1', video: 'assets/videos/boat1-moving.mp4', poster: 'assets/videos/boat1-moving.webp', alt: 'Boat 1 demonstration from the later boat work'},
    {label: 'Boat 3 — without GPS', video: 'assets/videos/boat3-without-gps-moving.mp4', poster: 'assets/videos/boat3-without-gps-moving.webp', alt: 'Boat 3 demonstration; original filename says without GPS'},
    {label: 'Cloud control', video: 'assets/videos/boat-cloud-control-moving.mp4', poster: 'assets/videos/boat-cloud-control-moving.webp', alt: 'Boat mobility with cloud control demonstration'}
  ],
  papers: [
    {label: 'WiPi · 2019', url: 'http://www.chenhaiming.cn/papers/acll-turc19.pdf'},
    {label: 'Stereo vision & edge computing · 2024', url: 'http://www.chenhaiming.cn/papers/wch-aiotsys24.pdf'}
  ]
}, {
  id: 'octopus-device', year: 2018,
  title: 'From a Small Device to the Octopus Cloud 🐙⚙️☁️',
  keywords: ['device', 'cloud', 'Octopus', 'IoT', 'motor', 'patent', 'software copyright'],
  text: 'I began the cloud-platform work at the beginning of 2018, alongside device development during that year. The idea was to connect physical equipment to an IoT platform so sensing data and control instructions could travel in both directions. The embedded motor-control module and the cloud architecture became important parts of that work.\n\nWe hoped to turn it into a manufactured product. Sadly, COVID-19 and health issues disrupted those plans, and the manufacturing project was eventually scrapped. It never reached factory production, but the device, platform, and lessons from building them remain an important part of my story.\n\nThe patent certificates came later, at different times. The DC motor-control device utility model, ZL201920129250.3, was filed on 25 January 2019 and granted on 2 August 2019 (CN209200959U). The cloud-related invention, ZL201910237264.1, was filed on 27 March 2019 and granted on 8 October 2021 (CN109922159B). Both certificates name me and Haiming Chen as inventors and Ningbo University as the patent holder.\n\nThe Octopus lightweight IoT cloud platform also has a separate software copyright registration, 2019SR0627276. Its certificate records completion and first publication on 22 January 2019, with registration on 18 June 2019. The gallery brings together the original architecture presentation and the later patent and software copyright certificates.',
  status: 'Work began in 2018 · Patent grants in 2019 and 2021',
  images: [
    {label: 'Device and cloud architecture', poster: 'assets/images/history/device-architecture.webp', alt: 'Heavily watermarked historical device and Octopus cloud architecture slide'},
    {label: 'Embedded module', poster: 'assets/images/history/device-module.webp', alt: 'Original low-resolution embedded motor-control module photograph, watermarked'},
    {label: 'Motor-control utility model · 2019', poster: 'assets/images/history/motor-patent.webp', alt: 'Heavily watermarked motor-control utility-model certificate, grant date 2 August 2019'},
    {label: 'Cloud invention · 2021', poster: 'assets/images/history/cloud-patent.webp', alt: 'Heavily watermarked cloud-connection invention certificate, grant date 8 October 2021'},
    {label: 'Octopus software copyright · 2019', poster: 'assets/images/history/octopus-copyright.webp', alt: 'Heavily watermarked Octopus software copyright registration certificate'}
  ]
}, {
  id: 'wuxi-memories', year: 2018, month: 6,
  title: 'Wuxi 2018: A Team, a Cloud, and Memories That Stayed 🐙🏆❤️',
  keywords: ['Wuxi', 'competition', 'Runa', 'Luna', 'Chen', 'Octopus', 'Nepal'],
  textLinks: [{label: 'Haiming Chen', url: 'http://www.chenhaiming.cn/'}],
  text: 'The Wuxi competition has a special place in my heart, mostly because of the people who shared that journey with me. I met Runa, my classmate from Nepal, at Ningbo University in 2014. We became very close friends, and over time she became family to me — like a sister. She is now married and living in Canada, but those university memories still feel close.\n\nI think I first met Professor Haiming Chen around 2016, when he taught our Visual .NET application course. He later taught us several other classes and became my supervisor, coauthor, and mentor. His kindness and encouragement helped me grow and gave me the confidence to let my abilities shine. I deeply admire him, both as a researcher and as a person. He is now an Associate Professor at Ningbo University, continuing to teach and inspire young minds like mine. If I become a professor one day, I hope to offer my students the same kindness, patience, and encouragement that he gave me. That is a part of his mentorship I will always carry with me. When we first met, my hair was very, very long, and I had a bit of a punk attitude, but I was actually an introvert, and the only thing I really cared about was programming.\n\nIn 2018, I joined the Nepal team led by Runa and brought my Octopus IoT cloud platform to the competition. I had started the project at the beginning of that year, building a cloud architecture to control smart devices. It was a project of my own that would grow well beyond the competition, connecting my interests in programming, embedded hardware, and remote control.\n\nWuxi was one chapter in a much longer journey. The cloud platform and device work continued to develop, leading to patents and helping lay the groundwork for later research papers. Looking back, I see the beginnings of a path from building systems to asking research questions about how they could be used. Chen Laoshi became my supervisor and coauthor along that path. Sharing an early part of it with him and with Runa made Wuxi especially meaningful: a project I cared deeply about became part of a memory we shared. The patents and papers record where the work went; these photographs remind me of the people who were there as it grew.\n\nThe 9th China Students Service Outsourcing Innovation and Entrepreneurship Competition ended in Wuxi on 1 June 2018. This national competition, jointly organized by China’s education and commerce ministries and the Wuxi government, welcomed teams from countries including Malaysia, Nepal, Pakistan, and Zimbabwe. On 5 June, People’s Daily Overseas Edition featured our Octopus platform on page 10, with the report also published by Sina. The photograph is credited to Ding Ning, and the report calls Runa “Luna” (露娜). For me, these photos bring back our friendship and the years we spent learning and growing together.',
  status: 'Wuxi · June 2018 · Personal memories',
  images: [
    {label: 'At the competition venue', poster: 'assets/images/history/wuxi-team.webp', alt: 'Three participants standing on the stage at the ninth service outsourcing competition'},
    {label: 'International award ceremony', poster: 'assets/images/history/wuxi-awards.webp', alt: 'International award recipients on the competition stage'},
    {label: 'Award stage · wide view', poster: 'assets/images/history/wuxi-awards-wide.webp', alt: 'Wide view of the Belt and Road university award stage'},
    {label: 'Award ceremony · another view', poster: 'assets/images/history/wuxi-awards-angle.webp', alt: 'Another supplied view of the international award ceremony'},
    {label: 'Runa at the exhibition', poster: 'assets/images/history/wuxi-runa.webp', alt: 'Runa at the exhibition, identified by Asif'},
    {label: 'Exhibition memories', poster: 'assets/images/history/wuxi-exhibition.webp', alt: 'Supplied exhibition photograph with Runa'},
    {label: 'Newspaper photograph · Ding Ning', poster: 'assets/images/history/wuxi-newspaper-photo.webp', alt: 'Newspaper photograph captioning Asif at right and Luna in the center; photograph by Ding Ning'},
    {label: 'Asif', poster: 'assets/images/history/wuxi-asif.webp', alt: 'Asif at the event, identified by the user'},
    {label: 'Runa presenting', poster: 'assets/images/history/wuxi-runa-presentation.webp', alt: 'Runa presenting, identified by Asif'},
    {label: 'My supervisor · Haiming Chen', poster: 'assets/images/history/wuxi-supervisor.webp', alt: 'Haiming Chen at the venue, identified by Asif'},
    {label: 'That hair! 😂 · With my professor and friends', poster: 'assets/images/history/wuxi-long-hair-memory.webp', alt: 'Group photo with friends and scooters; Asif identifies himself with long hair in the red shirt and his professor beside him. A personal memory; photo date unconfirmed.'}
  ],
  papers: [
    {label: 'Sina · 5 June 2018', url: 'https://mil.sina.cn/2018-06-05/detail-ihcmurvh9389526.d.html'},
    {label: 'People’s Daily · original page', url: 'https://paper.people.com.cn/rmrbhwb/page/2018-06/05/10/rmrbhwb2018060510.pdf'},
    {label: 'Official competition photo archive', url: 'https://www.fwwb.org.cn/activity/show/13'},
    {label: 'About the competition · organizer', url: 'https://www.fwwb.org.cn/about/index'}
  ],
  pressSources: [
    {label: 'People’s Daily Overseas Edition', url: 'https://paper.people.com.cn/rmrbhwb/page/2018-06/05/10/rmrbhwb2018060510.pdf', image: 'assets/images/history/wuxi-newspaper-clipping.webp', caption: '5 June 2018 · Page 10 · Article clipping; photograph by Ding Ning'},
    {label: 'Sina', url: 'https://mil.sina.cn/2018-06-05/detail-ihcmurvh9389526.d.html', image: 'assets/images/history/wuxi-sina-clipping.webp', caption: '5 June 2018 · Report heading, full photograph, and original caption'}
  ]
}];

const mediaDialog = document.querySelector('#media-dialog');
const mediaVideo = document.querySelector('#media-video');
const mediaImage = document.querySelector('#media-image');
const mediaNavigation = document.querySelector('#media-navigation');
let activeGallery = null;
function galleryControls(clips, selected, onSelect, isImages = false) {
  const controls = document.createElement('div');
  controls.className = 'gallery-slider';
  const previous = document.createElement('button');
  previous.type = 'button';
  previous.textContent = '←';
  previous.setAttribute('aria-label', 'Previous video');
  previous.title = 'Previous video';
  previous.disabled = selected === 0;
  previous.addEventListener('click', () => onSelect(Math.max(0, selected - 1)));
  const track = document.createElement('div');
  track.className = 'gallery-track';
  track.setAttribute('role', 'list');
  clips.forEach((clip, index) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = `playlist-item${index === selected ? ' selected' : ''}`;
    item.setAttribute('role', 'listitem');
    item.setAttribute('aria-label', `${isImages ? 'View' : 'Play'} ${clip.label}`);
    if (index === selected) item.setAttribute('aria-current', 'true');
    const thumb = document.createElement('img');
    thumb.src = clip.poster;
    thumb.alt = '';
    thumb.width = 112;
    thumb.height = 63;
    const label = document.createElement('span');
    label.textContent = clip.label;
    item.append(thumb, label);
    item.addEventListener('click', () => onSelect(index));
    track.append(item);
  });
  requestAnimationFrame(() => track.querySelector('.selected')?.scrollIntoView({block: 'nearest', inline: 'nearest'}));
  const next = document.createElement('button');
  next.type = 'button';
  next.textContent = '→';
  next.setAttribute('aria-label', 'Next video');
  next.title = 'Next video';
  next.disabled = selected === clips.length - 1;
  next.addEventListener('click', () => onSelect(Math.min(clips.length - 1, selected + 1)));
  controls.append(previous, track, next);
  return controls;
}
function loadGalleryClip(index) {
  const {post, clips, selectClip} = activeGallery;
  const clip = clips[index];
  selectClip(index);
  mediaVideo.pause();
  document.querySelector('#media-title').textContent = `${post.title}${clips.length > 1 ? ' — ' + clip.label : ''}`;
  mediaVideo.hidden = Boolean(post.images);
  mediaImage.hidden = !post.images;
  if (post.images) {
    mediaVideo.removeAttribute('src');
    mediaVideo.load();
    mediaImage.src = clip.poster;
    mediaImage.alt = clip.alt;
  } else {
    mediaImage.removeAttribute('src');
    mediaVideo.poster = clip.poster;
    mediaVideo.src = clip.video;
    mediaVideo.preload = 'metadata';
    mediaVideo.load();
    mediaVideo.setAttribute('aria-label', clip.alt);
  }
  mediaNavigation.replaceChildren();
  mediaNavigation.hidden = clips.length < 2;
  mediaNavigation.className = clips.length > 1 ? 'player-playlist' : '';
  if (clips.length > 1) mediaNavigation.append(galleryControls(clips, index, loadGalleryClip, post.images));
}
function closeMedia() { mediaDialog.close(); }
document.querySelector('#close-media').addEventListener('click', closeMedia);
mediaDialog.addEventListener('click', event => { if (event.target === mediaDialog) closeMedia(); });
mediaDialog.addEventListener('close', () => {
  mediaVideo.pause();
  mediaVideo.removeAttribute('src');
  mediaVideo.load();
  activeGallery = null;
  mediaImage.removeAttribute('src');
  mediaNavigation.replaceChildren();
});
window.addEventListener('hashchange', () => { if (mediaDialog.open) closeMedia(); });

function renderPosts(query = '') {
  const filtered = posts.filter(post => `${post.title} ${(post.keywords || []).join(' ')}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()))
    .sort((a, b) => b.year - a.year || (b.month || 0) - (a.month || 0));
  const container = document.querySelector('#posts');
  container.replaceChildren();
  document.querySelector('#blog-empty').hidden = filtered.length > 0;
  document.querySelector('#blog-count').textContent = `${filtered.length} ${filtered.length === 1 ? 'post' : 'posts'}`;
  let year;
  for (const post of filtered) {
    if (post.year !== year) {
      year = post.year;
      const heading = document.createElement('h2');
      heading.className = 'blog-year';
      heading.textContent = year;
      container.append(heading);
    }
    const article = document.createElement('article');
    article.className = 'blog-post';
    const summary = document.createElement('div');
    summary.className = 'post-heading';
    const title = document.createElement('h3');
    title.textContent = post.title;
    const type = document.createElement('span');
    type.className = 'post-type';
    type.textContent = post.images ? 'Photos' : 'Video';
    summary.append(title, type);
    const body = document.createElement('div');
    body.className = 'post-body';
    const text = document.createElement('p');
    text.className = 'post-excerpt';
    text.id = `excerpt-${post.id}`;
    if (post.id === 'tesla-boat') {
      const parts = post.text.split(/(<a href="[^"]+">[^<]+<\/a>)/g);
      for (const part of parts) {
        const match = part.match(/^<a href="([^"]+)">([^<]+)<\/a>$/);
        if (match) {
          const anchor = document.createElement('a');
          anchor.href = match[1];
          anchor.textContent = match[2];
          text.append(anchor);
        } else text.append(document.createTextNode(part));
      }
    } else if (post.pressSources) {
      for (const part of post.text.split(/(People’s Daily Overseas Edition|Sina|Haiming Chen)/)) {
        const source = [...post.pressSources, ...(post.textLinks || [])].find(source => source.label === part);
        if (source) {
          const link = document.createElement('a');
          link.href = source.url;
          link.textContent = part;
          text.append(link);
        } else text.append(document.createTextNode(part));
      }
    } else text.textContent = post.text;
    let sourcePreview;
    if (post.pressSources) {
      sourcePreview = document.createElement('details');
      sourcePreview.className = 'source-preview';
      sourcePreview.hidden = true;
      const toggle = document.createElement('summary');
      toggle.textContent = 'View press clippings';
      const previews = document.createElement('div');
      previews.className = 'source-preview-grid';
      for (const source of post.pressSources) {
        const figure = document.createElement('figure');
        const link = document.createElement('a');
        link.href = source.url;
        const image = document.createElement('img');
        image.src = source.image;
        image.alt = `${source.label}: ${source.caption}`;
        image.loading = 'lazy';
        const caption = document.createElement('figcaption');
        caption.textContent = `${source.label} · ${source.caption}`;
        link.append(image, caption);
        figure.append(link);
        previews.append(figure);
      }
      sourcePreview.append(toggle, previews);
    }
    const expand = document.createElement('button');
    expand.type = 'button';
    expand.className = 'expand-text';
    expand.textContent = 'Read more';
    expand.setAttribute('aria-expanded', 'false');
    expand.setAttribute('aria-controls', text.id);
    expand.addEventListener('click', () => {
      const expanded = expand.getAttribute('aria-expanded') === 'true';
      text.classList.toggle('expanded', !expanded);
      expand.setAttribute('aria-expanded', String(!expanded));
      expand.textContent = expanded ? 'Read more' : 'Show less';
      if (sourcePreview) sourcePreview.hidden = expanded;
    });
    const availability = document.createElement('p');
    availability.className = 'muted';
    availability.textContent = post.status;
    const preview = document.createElement('button');
    const clips = post.images || post.videos || [post];
    let selected = 0;
    preview.className = 'video-preview';
    preview.type = 'button';
    preview.setAttribute('aria-label', `Open video: ${post.title}`);
    const image = document.createElement('img');
    image.src = clips[0].poster;
    image.alt = clips[0].alt;
    image.width = 768;
    image.height = 432;
    image.loading = 'lazy';
    const play = document.createElement('span');
    play.className = 'play-icon';
    play.setAttribute('aria-hidden', 'true');
    play.textContent = post.images ? '⊕' : '▶';
    preview.append(image, play);
    const gallery = document.createElement('div');
    function selectClip(index) {
      selected = index;
      image.src = clips[index].poster;
      image.alt = clips[index].alt;
      preview.setAttribute('aria-label', `Open ${post.images ? 'gallery' : 'video'}: ${post.title}${clips.length > 1 ? ' — ' + clips[index].label : ''}`);
      gallery.querySelectorAll('.playlist-item').forEach((item, itemIndex) => {
        const active = itemIndex === index;
        item.classList.toggle('selected', active);
        if (active) item.setAttribute('aria-current', 'true');
        else item.removeAttribute('aria-current');
      });
    }
    if (clips.length > 1) {
      clips.forEach((clip, index) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'playlist-item';
        item.setAttribute('aria-label', `Play ${clip.label}`);
        const thumb = document.createElement('img');
        thumb.src = clip.poster;
        thumb.alt = '';
        thumb.width = 112;
        thumb.height = 63;
        thumb.loading = 'lazy';
        const itemTitle = document.createElement('span');
        itemTitle.textContent = clip.label;
        item.append(thumb, itemTitle);
        item.addEventListener('click', () => {
          selectClip(index);
          activeGallery = {post, clips, selectClip};
          loadGalleryClip(index);
          mediaDialog.showModal();
        });
        gallery.append(item);
      });
    }
    selectClip(0);
    preview.addEventListener('click', () => {
      activeGallery = {post, clips, selectClip};
      loadGalleryClip(selected);
      mediaDialog.showModal();
    });
    const media = document.createElement('div');
    media.className = 'post-media';
    const social = document.createElement('div');
    social.className = 'video-socials';
    for (const [label, icon] of [['GitHub', 'github'], ['Instagram', 'instagram'], ['X', 'x-twitter']]) {
      const item = document.createElement('span');
      item.className = 'social-icon unavailable';
      item.setAttribute('role', 'img');
      item.tabIndex = 0;
      item.title = `${label} link not yet available`;
      item.setAttribute('aria-label', item.title);
      item.style.setProperty('--icon', `url('assets/icons/${icon}.svg')`);
      social.append(item);
    }
    media.append(preview, social);
    body.append(summary, text, expand, availability);
    if (sourcePreview) text.after(sourcePreview);
    if (post.papers) {
      const links = document.createElement('div');
      links.className = 'post-papers';
      for (const paper of post.papers) {
        const link = document.createElement('a');
        link.href = paper.url;
        if (paper.download) link.download = paper.url.split('/').pop();
        link.textContent = paper.label;
        links.append(link);
      }
      body.append(links);
    }
    article.append(media, body);
    container.append(article);
    requestAnimationFrame(updateExcerptControls);
  }
}
function updateExcerptControls() {
  document.querySelectorAll('.post-body').forEach(body => {
    const text = body.querySelector('.post-excerpt');
    const button = body.querySelector('.expand-text');
    if (!text.getClientRects().length || button.getAttribute('aria-expanded') === 'true') return;
    button.hidden = text.scrollHeight <= text.clientHeight + 1;
  });
}
window.addEventListener('hashchange', () => requestAnimationFrame(updateExcerptControls));
window.addEventListener('resize', updateExcerptControls);
document.querySelector('#blog-search').addEventListener('input', event => renderPosts(event.target.value));
renderPosts();

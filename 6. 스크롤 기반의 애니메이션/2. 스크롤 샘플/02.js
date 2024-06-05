import './scroll-timeline.js';

const gallery = document.querySelector('.gallery');
const galleryTimeline = document.querySelector('.gallery-timeline');

gallery.animate(
  [
    { transform: 'translateX(0)' },
    { transform: 'translateX(calc(-100% + 100vw))' }, // gallery 요소의 widht에서 화면의 폭만큼 빼주기(그러면 덜 가게 됨)
  ],
  {
    fill: 'both',
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: galleryTimeline, edge: 'start', threshold: 1 },
        { target: galleryTimeline, edge: 'end', threshold: 1 },
      ],
    }),
  }
);

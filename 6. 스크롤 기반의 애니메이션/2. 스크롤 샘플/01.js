import './scroll-timeline.js';

const airplane = document.querySelector(`.airplane`);
const airplaneScrollTimeline = document.querySelector(
  `.airplane-scroll-timeline`
);

airplane.animate(
  [
    { offsetDistance: `100%` }, // 초기 위치
    { offsetDistance: `0%` }, // 스크롤 후 종료 위치
  ],
  {
    fill: 'both', // 애니메이션이 재생 중이 아닐 때(대기 상태, 애니메이션이 끝난 상태) 시작점에서는 위에서(100%), 종료점에서는 아래거(0%)
    timeline: new ScrollTimeline({
      scrollOffsets: [
        // 기준이 될 요소는 airplaneScrollTimeline
        { target: airplaneScrollTimeline, edge: 'start', threshold: 1 },
        { target: airplaneScrollTimeline, edge: 'end', threshold: 1 },
      ],
    }),
  }
);

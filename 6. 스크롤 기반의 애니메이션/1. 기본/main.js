import './scroll-timeline.js';

const progress = document.querySelector('.progress');
const targetImages = document.querySelectorAll('.target-image');

progress.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], {
  // 스크롤에 따라서 동작하기 때문에 duration은 넣을 필요 없음
  timeline: new ScrollTimeline({
    // ScrollTimeLine 객체 생성하기
    scrollOffsets: [
      // target: 스크롤 타임라인의 기준이 되는 바인딩할 요소나 위치
      // edge: 스크롤 타임라인이 시작되는 곳과 끝나는 곳
      // threshold(한계점): 기준이 되는 위치에 요소가 얼마나 닿았을 때부터 할 지정함(보통 1로 함)
      // 1이면 처음부터 적용되고 0.5면 절반이 지나갔을 때부터 적용
      // (1이면 body가 시작할 때부터 적용되고 0.5면 body의 50% 지점까지 스크롤이 되었을 때부터 적용됨)
      { target: document.body, edge: 'start', threshold: 1 },
      { target: document.body, edge: 'end', threshold: 1 },
    ],
  }),
});

targetImages.forEach((image) => {
  const imageTop = image.offsetTop; // 이미지가 있는 곳의 높이
  const imageHeight = image.offsetHeight; // 이미지의 높이

  const offset1 = imageTop + imageHeight - window.innerHeight;
  const offset2 = imageTop - 500;

  image.animate(
    [
      { opacity: 0 }, // 투명도 조절
      { opacity: 1 },
    ],
    {
      timeline: new ScrollTimeline({
        scrollOffsets: [
          new CSSUnitValue(offset1, 'px'), // 스크롤 효과를 줄 요소가 있는 높이(위치)
          new CSSUnitValue(offset2, 'px'), // 요소가 있는 위치에서 얼마나 더 스크롤 해야 하는 지
        ],
      }),
    }
  );
});

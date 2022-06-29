import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { IRef } from '../pages';
import { sizes } from '../styles/media';

interface IService {
  /**버튼 타이틀 */
  title: string;
  /**중앙 원 이미지 */
  img: string;
  /**중앙 원 제목 */
  circleTitle: string;
  /**오른쪽 제목 */
  rightTitle: string;
  /**오른쪽 내용 */
  rightContent: string;
  /**아이디 */
  id: number;
  /**번호 변경 함수 */
  changeContentNum?: (idx: number) => void;
  /**부모 엘리먼트 useRef */
  parent?: React.MutableRefObject<null | HTMLElement>;
  /**현재 메뉴가 선택됐는지 판별*/
  isSelected?: boolean;
}
const content: IService[] = [
  {
    title: 'AI로 인식된 내 반려동물',
    img: '/images/Home.png',
    circleTitle: '나의 반려동물',
    rightTitle: 'AI로 인식된 내 반려동물',
    rightContent: 'AI로 인식된 내 반려동물의 모습을 확인해 볼 수 있어요',
    id: 1,
  },
  {
    title: '메타버스 기술',
    img: '/images/2_사진옵션1.png',
    circleTitle: '메타버스 기술',
    rightTitle: '메타버스 기술',
    rightContent: '메타버스 세계에서 반려동물과 함께하세요',
    id: 2,
  },
  {
    title: '세상에 하나뿐인 NFT',
    img: '/images/4_배경화면.png',
    circleTitle: '반려동물 NFT',
    rightTitle: '하나뿐인 반려동물 NFT',
    rightContent: '반려동물을 NFT화하여 나만의 NFT를 가지세요',
    id: 3,
  },
];

const Service = ({ parentRef }: { parentRef: IRef }) => {
  const [contentNum, setContentNum] = useState(0);
  const MiddleRef = useRef(null);
  const RightRef = useRef(null);

  const changeContentNum = (idx: number) => {
    setContentNum(idx);
  };

  const newContent: IService = {
    ...content[contentNum],
    changeContentNum: changeContentNum,
    parent: parentRef,
  };

  content.forEach(i =>
    i.id - 1 === contentNum ? (i.isSelected = true) : (i.isSelected = false),
  );

  useEffect(() => {
    const circleElem = MiddleRef.current! as HTMLElement;
    const rightElem = RightRef.current! as HTMLElement;
    rightElem.style.transition = 'unset';
    circleElem.style.transition = 'unset';
    circleElem.style.opacity = '0.25';
    rightElem.style.opacity = '0';
    setTimeout(() => {
      rightElem.style.transition = 'opacity .5s';
      circleElem.style.transition = 'opacity .5s';
      circleElem.style.opacity = '1';
      rightElem.style.opacity = '1';
    }, 250);
  }, [contentNum]);

  return (
    <Wrapper ref={parentRef}>
      <InnerWrapper>
        <Content>
          <LeftContent>
            {content.map(obj => {
              obj.parent = parentRef;
              return <LeftBtnGroup {...obj} key={obj.id} />;
            })}
          </LeftContent>
          <MiddleCircle data={newContent} elem={MiddleRef} />
          <RightContent data={newContent} elem={RightRef} />
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Service;

const Wrapper = styled.section`
  height: 300vh;
  width: 100%;
  position: relative;
`;

const InnerWrapper = styled.article`
  top: var(--header-height);
  position: sticky;
  ${({ theme }) => theme.bgSection('/images/service.png')}
  background-size :106vw 165vh;
  height: calc(100vh - var(--header-height));
  ${({ theme }) => theme.media.tablet`
  background-position-x: 66%;
  background-size: 206vw 165vh;  
`}
`;

const Content = styled.div`
  height: calc(100vh - var(--header-height));
  ${({ theme }) => theme.flexSet()}
  ${({ theme }) => theme.media.miniDesktop`
    flex-direction : column;
    justify-content : center;
  `}
  ${({ theme }) => theme.media.tablet`
    transform: scale(0.6) !important;
  `}
`;

const LeftContent = styled.div`
  ${({ theme }) => theme.flexColumnSet()}
  ${({ theme }) => theme.media.miniDesktop`
    flex-direction : row;
  `}
`;

const LeftBtnGroup = ({ ...data }: IService) => {
  const changeScroll = () => {
    const { top, height } = data.parent!.current!.getBoundingClientRect();
    const scrollTo =
      top + window.scrollY - (innerWidth > sizes.mobile ? 80 : 60);
    const calcHeight = height - innerHeight;
    window.scrollTo(0, scrollTo + calcHeight * 0.35 * (data.id - 1));
  };
  return (
    <LeftBtn onClick={changeScroll} isSelected={data.isSelected!}>
      <span>{data.id}</span>
      <span>{data.title}</span>
    </LeftBtn>
  );
};

const LeftBtn = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  width: 290px;
  height: 90px;
  border-radius: 8px;
  transition: background-color 0.5s;

  ${({ theme }) => theme.flexSet('left')}
  ${({ isSelected }) => (isSelected ? `background-color : white;` : '')}
  ${({ theme }) => theme.media.miniDesktop`
    width : auto;
    height : auto;
    background-color : unset;
    margin-bottom : 20px;
  `}
  ${({ theme }) => theme.media.tablet`
    transform: scale(1.5);
    span{
      margin-right : 30px !important;
      margin-left : 30px !important;
    }
  `}
  span:first-child {
    transition: background-color 0.5s;
    font-size: 16px;
    text-align: center;
    line-height: 34px;
    margin-left: 10px;
    width: 36px;
    height: 36px;
    border-radius: 100px;
    border: 1px solid #714e12;
    color: #714e12;

    ${({ isSelected }) =>
      isSelected
        ? `
        color: white;
        background-color : #714e12;
        `
        : `
        color: #714e12;
    `}
    margin-right: 16px;
  }
  span:last-child {
    font-size: 20px;
    font-weight: 600;
    ${({ theme }) => theme.media.miniDesktop`
      display : none;
    `}
  }
`;

interface IScrollObj {
  /**y좌표*/
  positionY: number;
  /**엘리먼트 총 높이*/
  totalHeight: number;
  /**현재 헤더의 높이*/
  headerHeight: number;
}

const MiddleCircle = ({ data, elem }: { data: IService; elem: any }) => {
  const circleRef = useRef(null);
  const scrollObj = useRef<IScrollObj | null>();
  const circleStroke = 1525;
  const scrollEvent = () => {
    const { positionY, totalHeight, headerHeight } = scrollObj.current!;
    const circleElem = circleRef.current! as HTMLElement;
    if (Math.floor(window.scrollY) >= Math.floor(positionY)) {
      //서비스섹션에 들어왔는지 체크
      const { top } = data.parent!.current!.getBoundingClientRect();
      const diff = Math.abs((top - headerHeight) / totalHeight); //총 길이에서 어느정도 스크롤이 됐는지 계산

      if (diff < 0.3) data.changeContentNum!(0);
      else if (diff < 0.6) data.changeContentNum!(1);
      else data.changeContentNum!(2);

      const finalStroke = Math.round(
        circleStroke - diff * circleStroke,
      ).toString();

      circleElem.style.strokeDashoffset =
        Number(finalStroke) >= 0 ? finalStroke : '0';
    } else circleElem.style.strokeDashoffset = '1525';
  };
  useEffect(() => {
    const { top, height } = data.parent!.current!.getBoundingClientRect();
    const headerHeight = innerWidth > sizes.mobile ? 80 : 60;
    scrollObj.current = {
      positionY: top + window.scrollY - headerHeight,
      totalHeight: height - innerHeight + headerHeight,
      headerHeight,
    };
    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);
  return (
    <CircleWrapper img={data.img}>
      <svg>
        <circle
          ref={circleRef}
          cx="242"
          cy="242"
          r="242"
          strokeDasharray={1523}
          // strokeDashoffset={circleStroke}
          style={{ strokeDashoffset: `${circleStroke}px` }}
        ></circle>
      </svg>
      <div ref={elem}>
        <span>STEP 0{data.id}</span>
        <span>{data.circleTitle}</span>
      </div>
    </CircleWrapper>
  );
};

const CircleWrapper = styled.div<{ img: string }>`
  width: 484px;
  height: 484px;
  margin-left: 4vw;
  margin-right: 4vw;
  ${({ theme }) => theme.flexColumnSet()}
  ${({ theme }) => theme.media.miniDesktop`
      margin-top : 2vh;
      margin-bottom : 3vh;
    `}
  ${({ theme }) => theme.media.tablet`
      margin-top : 4vh;
      margin-bottom : 6vh;
  `}
  svg {
    width: 484px;
    height: 484px;
    overflow: visible;
    transform: rotate(-90deg);
  }
  circle {
    stroke: #c4913c;
    stroke-width: 10px;
    fill: transparent;
    stroke-linecap: round;
    transition: all 0.5s linear;
  }
  > div {
    color: white;
    ${({ img }) => `background-image : url('${img}')`};
    background-size: cover;
    width: 444px;
    height: 444px;
    position: absolute;
    border-radius: 100vw;
    ${({ theme }) => theme.flexColumnSet()}
    span:nth-child(1) {
      font-size: 20px;
      margin-bottom: 27px;
    }
    span:nth-child(2) {
      font-size: 44px;
      font-family: 'NanumMyeongjo';
    }
  }
`;

const RightContent = ({
  data,
  elem,
}: {
  data: IService;
  elem: React.MutableRefObject<null>;
}) => {
  return (
    <RightWrapper ref={elem}>
      <span dangerouslySetInnerHTML={{ __html: data.rightTitle }} />
      <span dangerouslySetInnerHTML={{ __html: data.rightContent }} />
    </RightWrapper>
  );
};

const RightWrapper = styled.div`
  max-width: 288px;
  min-width: 288px;
  ${({ theme }) => theme.flexColumnSet('', 'start')}
  ${({ theme }) => theme.media.miniDesktop`
      height : 60px;
      align-items : center;
      text-align: center;
    `}
  ${({ theme }) => theme.media.tablet`
    transform: scale(1.5);
  `}
  span:nth-child(1) {
    font-size: 40px;
    font-family: 'NanumMyeongjo';
    margin-bottom: 32px;
    ${({ theme }) => theme.media.miniDesktop`
      font-size : 24px;
      margin-bottom : 20px;
    `}
  }
  span:nth-child(2) {
    font-size: 20px;
    ${({ theme }) => theme.media.miniDesktop`
      font-size : 14px;
    `}
  }
`;

import React, { MutableRefObject } from 'react';
import styled from 'styled-components';
import { IRef } from '../pages';
import { BgOpacity, CommonTextWrapper, Section } from '../styles/commonElement';

const Home = ({ parentRef }: { parentRef: IRef }) => {
  return (
    <Wrapper ref={parentRef}>
      <MainTextWrapper data-aos="fade-up">
        <TextWrapper>
          <div>
            슬픔의 처음부터 끝까지 <br />
            함께하겠습니다.
          </div>
          <div>
            우리는 모두 언젠가 나의 반려동물이 삶이라는 여행을 끝내고
            <br /> 내 곁을 떠나게 된다는 사실을 알고 있어요 <br />
            하지만 막상 그 상황에 놓이면 당황하고 슬퍼하느라 정신이 없어요
          </div>
        </TextWrapper>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/L7IkxzJfHag"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Iframe>
      </MainTextWrapper>
      <BgOpacity />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled(Section)`
  ${({ theme }) => theme.bgSection('/images/Home.png')}
  ${({ theme }) => theme.media.tablet`
    background-size : 200% 100%;
    background-position-x : 50%;
  `}
`;
const Iframe = styled.iframe`
  ${({ theme }) => theme.media.miniDesktop`
    display: none;
  `}
`;

const TextWrapper = styled(CommonTextWrapper)`
  color: white;
`;

const MainTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 34.43vh;
  display: flex;
  justify-content: space-around;
`;

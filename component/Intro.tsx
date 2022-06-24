import React from 'react';
import styled from 'styled-components';
import { IRef } from '../pages';
import { BgOpacity, CommonTextWrapper } from '../styles/commonElement';

const Intro = ({ parentRef }: { parentRef: IRef }) => {
  return (
    <Wrapper ref={parentRef}>
      <img src={'/images/2_사진옵션1.png'} />
      <RightSection>
        <CommonTextWrapper data-aos="fade-up">
          <div>
            반려동물과의 이별을
            <br /> 생각해보신 적 있으신가요?
          </div>
          <div>
            우리는 모두 언젠가 나의 반려동물이 삶이라는 여행을 끝내고
            <br /> 내 곁을 떠나게 된다는 사실을 알고 있어요
            <br /> 하지만 막상 그 상황에 놓이면 당황하고 슬퍼하느라 정신이
            없어요
          </div>
        </CommonTextWrapper>
        <img src={'/images/sec2-bg.svg'} />
        <Bg />
      </RightSection>
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  ${({ theme }) => theme.media.miniDesktop`
    background-size : 200% 100%;
    background-image : url("/images/2_사진옵션1.png");
    background-position-x : 50%;
    height: 100vh;
    display : block;
    color : white;
    img{
      display : none;
    }
  `}
  img {
    width: 50vw;
    height: 43.75vw;
  }
`;

const Bg = styled(BgOpacity)`
  display: none;
  ${({ theme }) => theme.media.miniDesktop`
    display : block;
    width : 100%;
    height : 100%;
  `}
`;

const RightSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding-left: 20px;
  ${({ theme }) => theme.media.miniDesktop`
    padding : 0px;
  `}
  div {
    position: relative;
    z-index: 1;
  }
  img {
    width: 30.57vw;
    height: 33.65vw;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

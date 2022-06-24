import styled from 'styled-components';

export const Section = styled.section``;

export const CommonTextWrapper = styled.div`
  text-align: left;
  div:nth-child(1) {
    font-size: 50px;
    line-height: 70px;
    margin-bottom: 30px;
    font-family: 'NanumMyeongjo';
  }
  div:nth-child(2) {
    font-size: 20px;
    line-height: 36px;
  }
  ${({ theme }) => theme.media.tablet`
    div:nth-child(1){
        font-size : 6.94vw;
        line-height : 9.72vw;
    }
    div:nth-child(2) {
    font-size: 3.33vw;
    line-height : 5vw;
  }
  `}
`;

export const BgOpacity = styled.area`
  z-index: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
`;

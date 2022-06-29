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
  ${({ theme }) => theme.media.landscape`
    div:nth-child(1){
        font-size : 6.94vmin;
        line-height : 9.72vmin;
    }
    div:nth-child(2) {
    font-size: 3.33vmin;
    line-height : 5vmin;
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

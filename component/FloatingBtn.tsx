import React from 'react';
import styled from 'styled-components';

const FloatingBtn = () => {
  return (
    <Wrapper>
      <img src="/images/그룹 1614.svg" />
      <span>체험하기</span>
    </Wrapper>
  );
};

export default FloatingBtn;

const Wrapper = styled.div`
  position: fixed;
  cursor: pointer;
  z-index: 2;
  bottom: 9vmin;
  right: 9vmin;
  width: 80px;
  height: 80px;
  border-radius: 100vw;
  background-color: #89611d;
  color: white;
  ${({ theme }) => theme.flexColumnSet()}
  ${({ theme }) => theme.media.mobile`
    width : 60px;
    height : 60px;
    font-size : 2vmin;
    img{
        width : 15px;
    }
  `}
`;

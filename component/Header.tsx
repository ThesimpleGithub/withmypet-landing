import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IMenuElem, menuType } from '../pages';

const Header = ({ sectionArrRef }: { sectionArrRef: IMenuElem }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 300 ? setIsScrolled(true) : setIsScrolled(false),
    );
    window.addEventListener('resize', () =>
      window.scrollY > 300 ? setIsScrolled(true) : setIsScrolled(false),
    );
    window.scrollY > 300 ? setIsScrolled(true) : setIsScrolled(false);
  }, []);
  return (
    <Wrapper isScrolled={isScrolled}>
      <img src={'/images/CI-2.png'} />
      <ul>
        {Object.keys(sectionArrRef).map(menu => (
          <li
            key={menu}
            onClick={() =>
              sectionArrRef[menu as menuType].current?.scrollIntoView()
            }
          >
            {menu}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header<{ isScrolled: boolean }>`
  z-index: 999;
  width: 100vw;
  height: 80px;
  padding-left: 10.7vw;
  padding-right: 14.7vw;
  transition: all 0.5s;
  position: absolute;
  align-items: center;
  display: flex;
  justify-content: space-between;
  top: 0;
  img {
    width: 106px;
    height: 70px;
  }
  ul {
    list-style: none;
    li {
      transition: all 0.5s;
      color: #ffffffbf;
      cursor: pointer;
      float: left;
      font-size: 20px;
      margin-right: 40px;
      :hover {
        color: white;
      }
    }
  }
  ${({ isScrolled }) =>
    isScrolled
      ? `
  position : fixed;
  background : white;
  border-bottom : 1px solid #e7e7e7;
  li{
    color: #979797 !important;
    :hover{
      color : #3c3733 !important;
    }
  }
  `
      : ``}
`;

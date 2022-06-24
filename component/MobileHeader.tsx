import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { IMenuElem, menuType } from '../pages';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function MobileHeader({
  sectionArrRef,
}: {
  sectionArrRef: IMenuElem;
}) {
  const [state, setState] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 300 ? setIsScrolled(true) : setIsScrolled(false),
    );
    window.addEventListener('resize', () =>
      window.scrollY > 300 ? setIsScrolled(true) : setIsScrolled(false),
    );
  }, []);

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
        {Object.keys(sectionArrRef).map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                sectionArrRef[text as menuType].current?.scrollIntoView();
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Wrapper isScrolled={isScrolled}>
      <img src={'/images/CI-2.png'} />
      <button>
        <MenuIcon onClick={() => setState(true)} />
      </button>
      <Drawer anchor={'left'} open={state} onClose={() => setState(false)}>
        {list('left')}
      </Drawer>
    </Wrapper>
  );
}

const Wrapper = styled.header<{ isScrolled: boolean }>`
  z-index: 999;
  width: 100vw;
  height: 60px;
  position: absolute;
  align-items: center;
  display: flex;
  transition: background-color 0.5s;
  justify-content: space-between;
  top: 0;
  button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }
  svg {
    width: 36px;
    height: 36px;
    color: white;
    margin-right: 20px;
  }
  img {
    margin-left: 40px;
    width: 80px;
    height: 60px;
  }
  ${({ isScrolled }) =>
    isScrolled
      ? `
  position : fixed;
  background : white;
  border-bottom : 1px solid #e7e7e7;
  svg{
  color: black;
  }
  `
      : ``}
`;

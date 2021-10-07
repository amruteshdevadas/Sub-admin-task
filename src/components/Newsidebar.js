import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';


// const Nav = styled.div`
//   background: #15171c;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const SidebarNav = styled.nav`
  background: #2e59d9;
  width: 250px;
  display: flex;
  justify-content: center;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Newsidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav> 
     
    </>
  );
};

export default Newsidebar;
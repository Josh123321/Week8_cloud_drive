import React from 'react';
import styled from 'styled-components';
import Logo from './assest/logo.svg';
import Search from './assest/baseline_search_white_24dp.png';
import SearchBar from './assest/search bar.svg';
import UserIcon from './assest/photo_user@2x.png';

const HeadBarWrapper = styled.div`
  display:flex;
  align-content:center;
  justify-content: space-between;
  margin:30px;

  img {
    pointer-events:none;
  }
  
  > img:last-child {
    width:50px;
    height:50px;
  }
`;

const SearchBarWrapper = styled.div`
  display:flex;
  flex-direction:column;
`;

const ContentWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  margin:30px;

  > div {
    border:1px #FFFFFF solid;
    border-radius:5px;
    background:#FFFFFF;
  }
`;

const TableWrapper = styled.div`
  height:500px;
  width:75vw;
`;

const InfoBlock = styled.div`
  height:500px;
  width:15vw;
  padding-left:30px;
  display:flex;
`;



function App() {
  return (
    <div className="App">
      <HeadBarWrapper>
        <img src={Logo} />
        <SearchBarWrapper>
          <img src={SearchBar} />
        </SearchBarWrapper>
        <img src={UserIcon} />
      </HeadBarWrapper>

      <ContentWrapper>
        <TableWrapper>

        </TableWrapper>
        <InfoBlock>
          <h3>Hello</h3>

        </InfoBlock>
      </ContentWrapper>
    </div>
  );
}

export default App;

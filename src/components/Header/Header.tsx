import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai/";

const Header = () => {
  return (
    <HeaderComponent>
      <Logo>alcoholic</Logo>
      <SearchBox>
        <AiOutlineSearch color="#a1a1a1" />
        <SearchInput placeholder="찾고자하는 맥주를 검색해보세요."></SearchInput>
        <SearchBtn>검색</SearchBtn>
      </SearchBox>
      <LoginText>로그인</LoginText>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  padding: 1em 0 0.5em 0;
  border-bottom: 1px solid #f5f5f5;
`;

const Logo = styled.p`
  width: 33.3%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1em;
`;

const SearchBox = styled.div`
  display: flex;
  width: 33.3%;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f7;
  padding: 0 0 0 0.5em;
  border-radius: 3px;
`;

const SearchInput = styled.input`
  width: 85%;
`;

const SearchBtn = styled.p`
  text-align: right;
  color: white;
  padding: 1em;
  background-color: #9f9f9f;
  font-size: 0.8rem;

  :hover {
    cursor: pointer;
  }
`;

const LoginText = styled.p`
  width: 33.3%;
  text-align: right;
  margin-right: 1em;

  :hover {
    cursor: pointer;
  }
`;

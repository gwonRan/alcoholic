import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterComponent>
      <FooterTextBox>
        <FooterTopTextBox>
          <FooterTopText>사업자정보 확인</FooterTopText>
          <FooterTopText>이용약관</FooterTopText>
          <FooterTopText>개인정보처리방침</FooterTopText>
        </FooterTopTextBox>
        <FooterMiddleTextBox>
          <FooterMiddleText>
            (주) 알콜홀릭(대표: 공준식)&nbsp;&nbsp;
            <MiddleText>사업자등록번호 : 211-88-98005</MiddleText>
            &nbsp;&nbsp;통신판매업신고번호 : 제2017-서울강남-00835호
          </FooterMiddleText>
          <FooterMiddleText>
            소재지: 서울시 강남구 선릉로 551, B1층(역삼동, 새롬빌딩)&nbsp;&nbsp;
            <MiddleText>대표전화 : 02-538-3966 </MiddleText>&nbsp;&nbsp;이메일:
            cs@glowmee.com
          </FooterMiddleText>
          <FooterMiddleText>
            광고문의 : b2b@glowmee.com / 02-538-3964
          </FooterMiddleText>
        </FooterMiddleTextBox>
        <FooterBottomTextBox>
          <FooterBottomText>
            Copyright @ GLOWDAYZ Inc. All Rights Reserved.
          </FooterBottomText>
          <FooterBottomText>alcoholic</FooterBottomText>
        </FooterBottomTextBox>
      </FooterTextBox>
    </FooterComponent>
  );
};

export default Footer;

const FooterComponent = styled.div`
  width: 100%;
  background-color: #f8f8fb;
  padding: 1.5em 0;
`;

const FooterTextBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const FooterTopTextBox = styled.div`
  display: flex;
`;

const FooterTopText = styled.p`
  font-weight: 400;
  color: #333333;

  :nth-child(1) {
    margin-right: 1em;
  }
  :nth-child(2) {
    padding: 0 1em;
    border-left: 2px solid #cccccc;
    border-right: 2px solid #cccccc;
  }
  :nth-child(3) {
    margin-left: 1em;
    font-weight: bold;
  }
`;

const FooterMiddleTextBox = styled.div`
  color: #666666;
  font-weight: 600;
  padding: 2em 0;
`;

const FooterMiddleText = styled.p`
  padding: 0.4em 0;
`;

const MiddleText = styled.span`
  padding: 0 0.8em;
  border-left: 2px solid #cccccc;
  border-right: 2px solid #cccccc;
`;

const FooterBottomTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterBottomText = styled.p`
  :nth-child(2) {
    color: #c4c4c4;
    font-size: 2rem;
    font-weight: bold;
  }
`;

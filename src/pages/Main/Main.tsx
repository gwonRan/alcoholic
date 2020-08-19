import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import ReviewList from "../../components/ReviewList/ReviewList";
import Footer from "../../components/Footer/Footer";

import { IoIosArrowForward } from "react-icons/io";

const Main = () => {
  return (
    <MainPage>
      <Header />
      <MainImg></MainImg>
      <ReviewListTitle>TOP 4</ReviewListTitle>
      <ReviewList />
      <MoreReviewBox>
        <MoreReview>더 많은 리뷰 보러가기</MoreReview>
      </MoreReviewBox>
      <MainPageSection>
        <MainSectionTitle>
          <MainSectionTitleText>좋은데이 이용팁</MainSectionTitleText>
          <MainSectionText>오늘은 뭘 마실지 정해야한다면?</MainSectionText>
        </MainSectionTitle>
        <MainSectionContent>
          <MainSectionContentItem>
            <MainSectionContentImgBox>
              <MainSectionContentImg></MainSectionContentImg>
            </MainSectionContentImgBox>
            <MainSectionContentText>
              기분에 맞는 맥주 추천
            </MainSectionContentText>
          </MainSectionContentItem>
          <IoIosArrowForward size="18" />
          <MainSectionContentItem>
            <MainSectionContentImgBox>
              <MainSectionContentImg></MainSectionContentImg>
            </MainSectionContentImgBox>
            <MainSectionContentText>소비자 리뷰 확인</MainSectionContentText>
          </MainSectionContentItem>
          <IoIosArrowForward size="18" />
          <MainSectionContentItem>
            <MainSectionContentImgBox>
              <MainSectionContentImg></MainSectionContentImg>
            </MainSectionContentImgBox>
            <MainSectionContentText>오늘의 주류 쇼핑</MainSectionContentText>
          </MainSectionContentItem>
          <IoIosArrowForward size="18" />
          <MainSectionContentItem>
            <MainSectionContentImgBox>
              <MainSectionContentImg></MainSectionContentImg>
            </MainSectionContentImgBox>
            <MainSectionContentText>리뷰 작성</MainSectionContentText>
          </MainSectionContentItem>
        </MainSectionContent>
      </MainPageSection>
      <Footer />
    </MainPage>
  );
};

export default Main;

const MainPage = styled.main`
  width: 100%;
  height: 100vh;
`;

const MainImg = styled.div`
  height: 300px;
  background-color: gray;
`;

const ReviewListTitle = styled.p`
  font-weight: bold;
  font-size: 2rem;
  margin-left: 3.5em;
  padding: 0.8em 0 0.5em 0;
`;

const MoreReviewBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MoreReview = styled.button`
  width: 20%;
  padding: 1.2em 2.5em;
  color: white;
  background-color: #c4c4c4;
  border-radius: 7px;
  margin: 1.5em 0;
`;

const MainPageSection = styled.section`
  margin: 2em 0 5em 0;
`;

const MainSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainSectionTitleText = styled.p`
  font-weight: bold;
  color: #5f5f5f;
  margin: 1em 0;
`;

const MainSectionText = styled.p`
  font-size: 1.5rem;
  color: #5f5f5f;
`;

const MainSectionContent = styled.ul`
  width: 80%;
  margin: 2em auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainSectionContentItem = styled.li`
  width: 20%;
  margin: 0 2em;
`;

const MainSectionContentImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainSectionContentImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

const MainSectionContentText = styled.p`
  text-align: center;
  margin-top: 1em;
`;

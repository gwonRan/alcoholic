import React from "react";
import styled from "styled-components";
import Headaer from "../../components/Header/Header";
import ReviewList from "../../components/ReviewList/ReviewList";

const CheckReviewList = () => {
  return (
    <CheckReviewListPage>
      <Headaer />
      <ReviewListNavBox>
        <ReviewListNav>
          <ReviewCategory>
            <ReviewCategoryImg
              src="https://file.mk.co.kr/meet/neds/2019/04/image_readtop_2019_261362_15561720623725165.jpg"
              alt="소주"
            ></ReviewCategoryImg>
            <ReviewCategoryText>alcohol</ReviewCategoryText>
          </ReviewCategory>
          <ReviewCategory>
            <ReviewCategoryImg
              src="https://img.etoday.co.kr/pto_db/2017/06/20170602100107_1072877_300_500.jpg"
              alt="맥주"
            ></ReviewCategoryImg>
            <ReviewCategoryText>alcohol</ReviewCategoryText>
          </ReviewCategory>
          <ReviewCategory>
            <ReviewCategoryImg
              src="https://file.mk.co.kr/meet/neds/2019/05/image_readtop_2019_326170_15581268613753009.jpg"
              alt="소주"
            ></ReviewCategoryImg>
            <ReviewCategoryText>alcohol</ReviewCategoryText>
          </ReviewCategory>
          <ReviewListSearchBtn>SEARCH</ReviewListSearchBtn>
        </ReviewListNav>
        <AlcoholRegistrationBtn>
          <AlcoholRegistrationBtnText>
            찾고있는 맥주가 없으신가요?
          </AlcoholRegistrationBtnText>
          <AlcoholRegistrationBtnText>제품등록요청</AlcoholRegistrationBtnText>
        </AlcoholRegistrationBtn>
      </ReviewListNavBox>
      <ReviewListBox>
        <ReviewList />
      </ReviewListBox>
    </CheckReviewListPage>
  );
};

export default CheckReviewList;

const CheckReviewListPage = styled.main`
  width: 100%;
`;

const ReviewListNavBox = styled.div`
  width: 80%;
  margin: 2em auto;
  display: flex;
  justify-content: space-around;
`;

const ReviewListNav = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-around;
  border: 1px solid #c4c4c4;
  border-radius: 40px;
  padding: 0.5em;
  box-shadow: 3px 3px 3px #c4c4c4;
`;

const ReviewCategory = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;

  :nth-child(2) {
    width: 30%;
    border-left: 1px solid #c4c4c4;
    border-right: 1px solid #c4c4c4;
    margin: 0 1em;
  }
`;

const ReviewCategoryImg = styled.img`
  width: 45px;
  height: 45px;
`;

const ReviewCategoryText = styled.p``;

const ReviewListSearchBtn = styled.button`
  font-weight: bold;
  color: white;
  border: 1px solid #9f9f9f;
  border-radius: 30px;
  background-color: #9f9f9f;
  padding: 0 2em;
`;

const AlcoholRegistrationBtn = styled.div`
  width: 15%;
  border-radius: 10px;
  background-color: #c4c4c4;
  padding: 1em;
`;

const AlcoholRegistrationBtnText = styled.p`
  color: white;
  font-size: 0.72rem;

  :nth-child(2) {
    font-weight: bold;
    font-size: 1rem;
    margin-top: 0.5em;
  }
`;

const ReviewListBox = styled.div`
  width: 90%;
  margin: 0 auto;
`;

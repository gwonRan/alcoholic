import React from "react";
import styled from "styled-components";

const ReviewItem = () => {
  return (
    <ReviewItemComponent>
      <ReviewItemTop>
        <ReviewItemImg
          src="https://file.mk.co.kr/meet/neds/2019/04/image_readtop_2019_261362_15561720623725165.jpg"
          alt=" "
        />
        <ReviewItemInfo>
          <InfoTitle>좋은데이 깔라만시</InfoTitle>
          <InfoText>Suju Calamansi</InfoText>
          <InfoText>12.4% 82 IBU</InfoText>
          <InfoText>캘리포니아 커먼/스팀 맥주</InfoText>
          <RatingBox>
            <InfoText>3.54</InfoText>
          </RatingBox>
          <InfoText>158리뷰</InfoText>
        </ReviewItemInfo>
      </ReviewItemTop>
      <ReviewItemBottom>
        <UserImgBox>
          <UserImg></UserImg>
        </UserImgBox>
        <UserReviewInfoBox>
          <UserReviewInfoHeader>
            <UserName>미란</UserName>
            <UserReviewInfoText>2개월 전</UserReviewInfoText>
          </UserReviewInfoHeader>
          <UserReviewInfoText>25세 부드러운 맥주 매니아</UserReviewInfoText>
          <UserReviewInfoText>부드러워요 깔끔해요 달아요</UserReviewInfoText>
          <UserReviewInfoContent>
            <ContentText>샤로수길에 맛있는 밥집이 존재해요!</ContentText>
            <ContentText>이거 진짜 존맛이에요!</ContentText>
          </UserReviewInfoContent>
        </UserReviewInfoBox>
      </ReviewItemBottom>
    </ReviewItemComponent>
  );
};

export default ReviewItem;

const ReviewItemComponent = styled.li`
  width: 20%;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin: 0 1em;
`;

const ReviewItemTop = styled.div`
  width: 100%;
  display: flex;
  padding: 1em;
`;

const ReviewItemImg = styled.img`
  width: 35%;
  margin-left: -1em;
`;

const ReviewItemInfo = styled.div`
  width: 65%;
`;

const InfoTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #696969;
  margin-bottom: 0.2em;
`;

const InfoText = styled.p`
  font-size: 0.8rem;
  color: #919191;

  :nth-child(3) {
    padding: 1em 0 1.2em 0;
  }

  :nth-child(4) {
    padding: 0 0 0.2em 0;
  }

  :nth-child(6) {
    padding: 0.7em 0 0 0;
  }
`;

const RatingBox = styled.div``;

const ReviewItemBottom = styled.div`
  width: 100%;
  display: flex;
  background-color: #f8f8f8;
  padding: 1em 1.5em;
`;

const UserImgBox = styled.div`
  width: 20%;
  margin: 0 auto;
`;

const UserImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

const UserReviewInfoBox = styled.div`
  width: 80%;
  margin-left: 1em;
`;

const UserReviewInfoHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
`;

const UserName = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;

const UserReviewInfoText = styled.p`
  font-size: 0.75rem;

  :nth-child(3) {
    font-size: 0.9rem;
    color: #d3d3d3;
    margin-top: 0.5em;
  }
`;

const UserReviewInfoContent = styled.div`
  margin-top: 1em;
`;

const ContentText = styled.p`
  font-size: 0.8rem;
`;

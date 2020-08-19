import React from "react";
import styled from "styled-components";
import ReviewItem from "../../components/ReviewItem/ReviewItem";

const ReviewList = () => {
  const ReviewItems = [
    <ReviewItem />,
    <ReviewItem />,
    <ReviewItem />,
    <ReviewItem />,
  ];
  return (
    <ReviewListComponent>
      {ReviewItems.map((review) => {
        return review;
      })}
    </ReviewListComponent>
  );
};

export default ReviewList;

const ReviewListComponent = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
`;

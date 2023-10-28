import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2.4rem;
`;

const TitleMedium = ({ title }) => {
  return <Title>{title}</Title>;
};

export default TitleMedium;

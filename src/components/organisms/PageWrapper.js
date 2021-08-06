import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  padding: 3rem 0;
  height: 100vh;
  width: 50%;
  overflow-x: hidden;
  margin: 0 auto;
  scroll-behavior: smooth;
  @media (max-width: 760px) {
    width: 85%;
  }
`;

export const PageWrapper = ({ children }) => {
  return <Content>{children}</Content>;
};

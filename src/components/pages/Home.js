import React, { useContext } from "react";
import { TempContext } from "../../contexts/TempContext";
import { Searchbar } from "../atoms/Searchbar";
import { PageWrapper } from "../organisms/PageWrapper";
import styled from "@emotion/styled";

const HighTemp = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 8rem;
  font-weight: 100;
  margin: 0;
  @media (max-width: 760px) {
    font-size: 3.5rem;
  }
`;

const City = styled.p`
  text-align: center;
  color: #fff;
  font-size: 4rem;
  font-weight: 400;
  margin: 0;
  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`;

const Temperature = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 0;
`;

const HighAndLow = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  text-align: center;
  @media (max-width: 760px) {
    font-size: 0.5rem;
  }
`;

const Home = () => {
  const [temp, setTemp] = useContext(TempContext);
  return (
    <PageWrapper>
      <Searchbar />
      <Temperature>
        {temp.high && (
          <HighAndLow>
            {temp.high}°C | {temp.low}°C
          </HighAndLow>
        )}
        {temp.high && <HighTemp>{temp.high}°C </HighTemp>}
        {temp.name && (
          <City>
            {temp.name}, {temp.country}
          </City>
        )}
      </Temperature>
    </PageWrapper>
  );
};

export default Home;

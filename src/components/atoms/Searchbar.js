import { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { Box } from "rebass";
import SearchIcon from "../assets/icons/SearchIcon";
import { Button } from "./Button";
import { useQuery } from "react-query";
import { getCurrentWeather } from "../../services/api";
import { TempContext } from "../../contexts/TempContext";

const Container = styled(Box)`
  position: relative;
`;

const Search = styled(SearchIcon)`
  position: absolute;
  left: 0;
  padding: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SaerchInput = styled.input`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #fff;
  box-shadow: 0 0 15px 10px rgb(0 0 0 / 5%);
  border: 0;
  width: 100%;
  font-size: 16px;
  padding: 15px 15px 15px 60px;
  outline: 0;
  @media (max-width: 760px) {
    padding: 10px 10px 10px 60px;
  }
`;

//Fetch Weather with this function
const fetchCurrentWeather = async (city) => {
  const res = await getCurrentWeather(city);
  if (res.status === 200 || res.status === 201) {
    return res.data;
  }
};

export const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [temp, setTemp] = useContext(TempContext);
  const { data, status, refetch } = useQuery(["weather-data", query], () => fetchCurrentWeather(query),{ enabled: false });

  const upDateState = () => {
    setTemp({
      ...temp,
      high: data?.main.temp_max,
      low: data?.main.temp_min,
      name: data?.name,
      country: data?.sys.country,
    });
  };

  useEffect(() => {
    upDateState();
  }, [data]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <Container display="flex" justifyContent="center" alignItems="center">
      <Search size="1.5rem" />
      <SaerchInput
        value={query}
        onChange={handleChange}
        type="text"
        placeholder="Search city..."
      />
      <Button onClick={handleSubmit}>Search</Button>
    </Container>
  );
};

import React from "react";
import Slider from "../Carousel";
import Filter from "../Filter";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Slider />
    </Container>
  );
};

export default Home;

import React from "react";
import { Container, Icon, Advanced, Section, Wrapper } from "./style";
import { Input } from "../Generic/Input";
import { Button } from "../Generic/Button";
import { Popover } from "antd";

export const Filter = () => {
  const search = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input
          onChange={(e) => console.log(e.target.value)}
          name="country"
          placeholder="Country"
        />
        <Input
          onChange={(e) => console.log(e.target.value)}
          name="region"
          placeholder="Region"
        />
        <Input
          onChange={(e) => console.log(e.target.value)}
          name="city"
          placeholder="City"
        />
        <Input
          onChange={(e) => console.log(e.target.value)}
          name="zip_code"
          placeholder="Zip Code"
        />
      </Section>
      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input
          onChange={(e) => console.log(e.target.value)}
          name="adress"
          placeholder="Adress"
        />
        <Input
          onChange={(e) => console.log(e.target.value)}
          name="house_name"
          placeholder="House Name"
        />
        <Input
          onChange={(e) => console.log(e.target.value)}
          name="rooms"
          placeholder="Rooms"
        />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input
          onChange={(e) => console.log(e.target.value)}
          name="min_price"
          placeholder="Min Price"
        />
        <Input
          onChange={(e) => console.log(e.target.value)}
          name="max_price"
          placeholder="Max Price"
        />
      </Section>
      <Section>
        <Button width={"131px"} ml={20} type="primary">
          Search
        </Button>
      </Section>
    </Advanced>
  );
  return (
    <Wrapper>
      <Container>
        <Input
          pl={"50px"}
          width={"150%"}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        >
          <Icon.Home />
        </Input>

        <Popover placement="bottomRight" content={search} trigger="click">
          <Button width={"131px"} type={"secondary"}>
            <Icon.Setting /> Advanced
          </Button>
        </Popover>
        <Button width={"180px"} type={"primary"}>
          <Icon.Search /> Search
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Filter;

import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { CourseContext } from "../../hooks/context/CourseContext";

const ShowDetails = styled(Link)`
  background-color: var(--primarybg);
  color: #ffffff;
  text-decoration: none;
  padding: 0.5em;
  position: absolute;
  right: 0;
  bottom: 0;
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const CourseListDiv = styled.div``;

const Title = styled.h3`
  background-color: var(--primarybg);
  color: #ffffff;
  padding: 0.5em;
  border-radius: 10px 10px 0 0;
`;

const Description = styled.p`
  padding: 0.5em;
  line-height: 1.5em;
`;

export const CourseDetails = () => {
  const {
    pokemons: { results },
    isLoading,
    error,
  } = useContext(CourseContext);
  const { name } = useParams();
  if (results) {
    var currentDetails = results.find((list) => list.name === name);
  }

  console.log("currentDetails", currentDetails);
  return results ? (
    <>
      {isLoading && <h3>Lodaing...</h3>}
      {error && <h3>{error}</h3>}
      <CourseListDiv className="course__list">
        <Title>{currentDetails.name}</Title>
      </CourseListDiv>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore veniam
        consequuntur nobis natus quisquam accusantium est ea odit et mollitia
        tempora ullam, ab nam soluta esse fuga dicta nesciunt quo culpa sapiente
        quidem. Consequuntur, laborum magnam facilis impedit, nam omnis dolores
        placeat nobis non aliquid iusto labore accusamus sapiente nostrum, ipsam
        eum itaque natus laudantium at? Facere sapiente expedita qui excepturi
        exercitationem voluptates nesciunt ipsa nobis eos officiis, animi nam!
        Accusantium vitae eos quae eum voluptatem vel necessitatibus quasi id,
        tenetur placeat asperiores ipsa error quia nostrum eaque minima
        similique voluptatibus dicta esse nulla, hic sit libero. Molestias,
        doloremque dolorum.
      </Description>
      <ShowDetails to={"/yoursky--global--education/list"}>Back</ShowDetails>
    </>
  ) : (
    <h3>Loading...</h3>
  );
};

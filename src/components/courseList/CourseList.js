import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CourseContext } from "../../hooks/context/CourseContext";
import { device } from "../../breakpoints/breakpoints";

const UL = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(1, 1fr);
  @media ${device.tablet_M} {
    grid-template-columns: repeat(2, 1fr);
  }
  li {
    background-color: whitesmoke;
    margin: 10px;
    list-style-type: none;
    position: relative;
    min-height: 30em;
    border-radius: 2%;
    :hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
  }
`;

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

const CourseList = () => {
  const {
    pokemons: { results },
    isLoading,
    error,
  } = useContext(CourseContext);

  //   console.log("CL", results);
  return (
    <div>
      {isLoading && <h3>Lodaing...</h3>}
      {error && <h3>{error}</h3>}
      <UL>
        {results &&
          results.map((list, index) => {
            return (
              <li key={index}>
                <CourseListDiv className="course__list">
                  <Title>{list.name}</Title>
                </CourseListDiv>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore veniam consequuntur nobis natus quisquam accusantium
                  est ea odit et mollitia tempora ullam, ab nam soluta esse fuga
                  dicta nesciunt quo culpa sapiente quidem. Consequuntur,
                  laborum magnam facilis impedit, nam omnis dolores placeat
                  nobis non aliquid iusto labore accusamus sapiente nostrum,
                  ipsam eum itaque natus laudantium at? Facere sapiente expedita
                  qui excepturi exercitationem voluptates nesciunt ipsa nobis
                  eos officiis, animi nam! Accusantium vitae eos quae eum
                  voluptatem vel necessitatibus quasi id, tenetur placeat
                  asperiores ipsa error quia nostrum eaque minima similique
                  voluptatibus dicta esse nulla, hic sit libero. Molestias,
                  doloremque dolorum.
                </Description>
                <ShowDetails
                  to={`/yoursky--global--education/details/${list.name}`}
                >
                  Course Details
                </ShowDetails>
              </li>
            );
          })}
      </UL>
    </div>
  );
};

export default CourseList;

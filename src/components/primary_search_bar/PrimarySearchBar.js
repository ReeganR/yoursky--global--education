import React from "react";
import styled from "styled-components";

const FormInput = styled.input`
  padding: 1em;
  max-width: 100%;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 1.2rem;
`;

const Select = styled.select`
  height: 35px;
  color: gray;
  font-size: 1rem;
  margin: 3px;
`;

const FormWrapper = styled.div`
  background-color: whitesmoke;
  padding: 0.5em;
`;

const DropdownGroups = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 1em 0;
  border: none;
`;

const SearchBtn = styled.button`
  padding: 0.5em;
  background-color: var(--primarybg);
  color: #ffffff;
  border: none;
  margin-left: 0.5em;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;
export function PrimarySearchBar() {
  return (
    <FormWrapper className="primary-searchbar">
      <form action="">
        <div className="input-box">
          <FormInput placeholder="Search a course here..." />
        </div>
        <DropdownGroups className="primary-searchbar-contents">
          <div className="box">
            <Select>
              <option>Education Level</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </Select>
          </div>
          <div className="box">
            <Select>
              <option>University</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </Select>
          </div>
          <div className="box">
            <Select>
              <option>Location</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </Select>
          </div>
          <div className="box">
            <SearchBtn className="primary-search-btn">Search</SearchBtn>
          </div>
        </DropdownGroups>
      </form>
    </FormWrapper>
  );
}

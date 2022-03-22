import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PopUpWrapper = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  right: 0;
  background-color: var(--primarybg);
  height: 100vh;
  z-index: 1;
`;

const PopUpFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const FormPopUp = () => {
  const [value, setValue] = useState("");
  const [popUp, setPopUp] = useState(true);

  const navigate = useNavigate();

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    popupValidate(value);
    setValue("");
  };

  const popupValidate = (value) => {
    if (value === "sky") {
      setPopUp(false);
      navigate("/yoursky--global--education/list");
    } else {
      alert("Enter the correct User Name...");
    }
  };

  return (
    <div>
      <PopUpWrapper action="?" onSubmit={onSubmit} autoComplete="off">
        <PopUpFlex>
          <label htmlFor="uname" style={{ color: "#ffffff" }}>
            User Name...
          </label>
          <br />
          <input
            type="text"
            id="uname"
            name="uname"
            value={value}
            onChange={onChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </PopUpFlex>
      </PopUpWrapper>
    </div>
  );
};

export default FormPopUp;

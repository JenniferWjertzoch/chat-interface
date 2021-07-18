import styled from "styled-components";

// Styled component named StyledInput
const StyledInputField = styled.input`
  background: white;
  box-sizing: border-box;
  color: #686e74;
  border: 2px solid #2e7baa;
  border-radius: 3px;
  caret-color: #2e7baa;
  padding: 0.75rem 0.5rem;
  width: 100%;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #b9c2c8;
    opacity: 1;
  }
  :focus {
    box-shadow: none;
    outline: none;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
}
`;

export default StyledInputField
import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled.button`
  background: #fb876d;
  color: white;
  padding: 0.875rem 1rem;
  border-radius: 3px;
  border: none;
  margin-left: 0.5rem;
  transition: 0.3s;

  :hover {
    background: #f56646;
    cursor: pointer;
  }
`;

export default StyledButton
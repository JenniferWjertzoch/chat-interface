import styled from "styled-components";

// Styled component named StyledCard
const StyledMessageCard = styled.div`
    border: 2px solid #d0d4d7;
    border-radius: 5px;
    color: #686e74;
    font-family: 'Trebuchet MS', sans-serif;
    padding: 1rem;
    margin: 1rem 1.5rem;
    max-width: 250px;
    width: fit-content;
    word-wrap: break-word;
    background-color: ${props => props.bg === "white" ? "white" : "#fdf6c5"};
    margin-left: ${props => props.left === "auto" ? "auto" : "1.5rem"};
    @media (min-width: 992px) {
        max-width: 420px;
    }
`;

export default StyledMessageCard
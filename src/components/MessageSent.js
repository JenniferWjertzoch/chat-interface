import styled from "styled-components";
import StyledMessageCard from "./styled/StyledMessageCard"
import moment from "moment";

export default function MessageSent({ message }) {
    const convertTimestamp = parseInt(message.timestamp)
    return (
        <StyledMessageCard bg="#fdf6c5" left="auto">
            <p>{message.author}</p>
            <h3>{message.message}</h3>
            <p>{moment(convertTimestamp).format('LLL')}</p>
        </StyledMessageCard>
    )
}


const Author = styled.p`
    color: #d0d4d7;
`
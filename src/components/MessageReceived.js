import moment from "moment";
import StyledMessageCard from "./styled/StyledMessageCard"


export default function MessageReceived({ message }) {
    return (
        <StyledMessageCard bg="white" left="1.25rem">
            <p>{message.author}</p>
            <h3>{message.message}</h3>
            <p>{moment(message.timestamp).format('LLL')}</p>
        </StyledMessageCard>
    )
}
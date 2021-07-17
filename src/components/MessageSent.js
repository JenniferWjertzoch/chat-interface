import moment from "moment";

export default function MessageSent({ message }) {
    const convertTimestamp = parseInt(message.timestamp)
    return (
        <div className="card">
            <p>{message.author}</p>
            <h3>{message.message}</h3>
            <p>{moment(convertTimestamp).format('LLL')}</p>
        </div>
    )
}

export default function MessageReceived({ message }) {
    return (
        <div className="card">
            <p>{message.author}</p>
            <h3>{message.message}</h3>
            <p>{message.timestamp}</p>
        </div>
    )
}
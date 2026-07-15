function Message({ answer }) {
  return (
    <div className="message-box">
      <h2>Response</h2>

      <div className="answer">
        {answer ? (
          <p>{answer}</p>
        ) : (
          <p style={{ color: "#6b7280" }}>
            Ask a question to receive an answer from your uploaded documents.
          </p>
        )}
      </div>
    </div>
  );
}

export default Message;
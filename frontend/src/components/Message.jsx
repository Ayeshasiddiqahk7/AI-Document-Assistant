function Message({ answer, source, page }) {
  return (
    <div className="message-box">
      <h2>Response</h2>

      <div className="answer">
        {answer ? (
          <>
            <p>{answer}</p>

            {source && (
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "15px",
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                <strong>📄 Source Document</strong>

                <div style={{ marginTop: "10px" }}>
                  <a
                    href={`http://127.0.0.1:8000/documents/${encodeURIComponent(
                      source
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#2563eb",
                      fontWeight: "600",
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    {source}
                  </a>
                </div>

                {page && (
                  <div
                    style={{
                      marginTop: "10px",
                      color: "#555",
                      fontWeight: "600",
                    }}
                  >
                    📖 Page {page}
                  </div>
                )}
              </div>
            )}
          </>
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
function SourceList() {
  const sources = [
    "AI-ML-DP.pdf",
    "Introduction to generative AI.pdf",
    "RAG.pdf",
    "SQL.pdf",
  ];

  return (
    <div className="source-box">
      <h2>Source Documents</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "15px",
        }}
      >
        {sources.map((source) => (
          <li key={source} style={{ marginBottom: "12px" }}>
            <a
              href={`/documents/${source}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "12px 15px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                backgroundColor: "#f8f9fa",
                textDecoration: "none",
                color: "#2563eb",
                fontWeight: "600",
              }}
            >
              {source}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SourceList;
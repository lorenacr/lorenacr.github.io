import React, { useState } from "react";

const EmailLink = () => {
    const email = "lorena.p.rangel@gmail.com";
    const [copied, setCopied] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);

        window.location.href = `mailto:${email}`;
    };

    return (
        <span style={{ position: "relative", display: "inline-block" }}>
      <a
          href={`mailto:${email}`}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
      >
        Email
      </a>
            {copied && (
                <span
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        marginTop: "4px",
                        padding: "4px 8px",
                        backgroundColor: "#333",
                        color: "#fff",
                        borderRadius: "4px",
                        fontSize: "0.75rem",
                        whiteSpace: "nowrap",
                        userSelect: "none",
                        zIndex: 1000,
                    }}
                >
          Email copied!
        </span>
            )}
    </span>
    );
};

export default EmailLink;

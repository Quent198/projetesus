import React, { useState, useEffect } from "react";

const CookieBanner = ({ handleAccept, handleReject }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAcceptClick = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
    handleAccept();
  };

  const handleRejectClick = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
    handleReject();
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="z-10" style={styles.banner}>
      <p>
        Nous utilisons des cookies pour améliorer votre expérience. En
        continuant, vous acceptez notre{" "}
        <a href="/cookie-policy">politique de cookies</a>.
      </p>
      <div>
        <button onClick={handleAcceptClick} style={styles.button}>
          Accepter
        </button>
        <button onClick={handleRejectClick} style={styles.button}>
          Refuser
        </button>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px",
  },
  button: {
    marginLeft: "10px",
    padding: "5px 10px",
    backgroundColor: "#469875",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default CookieBanner;

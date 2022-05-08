import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <Alert
      variant={variant}
      style={{
        fontSize: 20,
        color: "red",
        alignItems: "center",
        display: "flex",
        justiyContent: "center",
      }}
    >
      <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage;

import * as React from "react";
import Alert from "@mui/material/Alert";

export default function SimpleAlert({ message, severity, setShowAlert }) {
  return (
    <Alert severity={severity} onClose={() => setShowAlert(false)}>
      {message}
    </Alert>
  );
}

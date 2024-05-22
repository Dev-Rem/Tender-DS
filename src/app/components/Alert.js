import * as React from "react";
import Alert from "@mui/material/Alert";

export default function SimpleAlert({ message, severity }) {
  return <Alert severity={severity}>{message}</Alert>;
}

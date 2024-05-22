"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import SimpleAlert from "./Alert";

const contactInfo = [
  {
    name: "Mercy Corps Tender Download System",
    phone: "(123) 456-7890",
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
  },
];

export default function ContactUs() {
  const [complaint, setComplaint] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    setShowAlert(true);
    console.log("Complaint submitted:", complaint);

    setComplaint("");
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <Box sx={{ mx: "auto" }}>
        {showAlert &&
          (complaint.length !== "" ? (
            <SimpleAlert
              severity={"success"}
              message={
                "Your complaint has been sent successfully, thank you for your feedback."
              }
            />
          ) : (
            <SimpleAlert
              severity={"error"}
              message={"You have not written any complaint to submit."}
            />
          ))}

        <Typography variant="h6" component="div">
          Contact Information
        </Typography>
        <List>
          {contactInfo.map((contact, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={contact.name}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Phone: {contact.phone}
                      </Typography>
                      <br />
                      Email: {contact.email}
                      <br />
                      Address: {contact.address}
                    </>
                  }
                />
              </ListItem>
              {index < contactInfo.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Typography variant="h6" component="div" gutterBottom>
        Submit a Complaint
      </Typography>
      <TextField
        label="Your Complaint"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit} color="error">
        Submit
      </Button>
    </>
  );
}

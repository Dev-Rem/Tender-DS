import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const handleDownload = (file) => {
  const link = document.createElement("a");
  link.href = { file }; // Path to your PDF file in the public folder
  link.download = "sample.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function ImgMediaCard({ title, description, image, file, handleOpen }) {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        borderRadius: 5,
        bgcolor: "#f2f2f2",
        flexDirection: "column",
        "&:hover": {
          boxShadow: 2, // Add some hover effect for better UX
        },
      }}
    >
      <Card
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          borderRadius: 5,
          bgcolor: "#f2f2f2",
          border: 1.5,
          borderColor: "#f2f2f2",
        }}
      >
        <Box
          onClick={handleOpen}
          sx={{
            maxWidth: "100%",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <CardMedia
            component="img"
            alt="dummie image"
            height="50"
            image={image}
            sx={{ maxWidth: "100%", height: "50%" }}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="truncated-text-title"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="truncated-text"
            >
              {description}
            </Typography>
          </CardContent>
        </Box>

        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button size="small" onClick={() => handleDownload(file)}>
            Download
          </Button>
          <Typography variant="overline" display="block" gutterBottom>
            Deadline: 2024-05-24
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
}

export function ActionAreaCard({ title, description, image, file }) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-around" }}>
        <Button size="small" onClick={() => handleDownload(file)}>
          Download
        </Button>
        <Typography variant="overline" display="block" gutterBottom>
          Deadline: 2024-05-24
        </Typography>
      </CardActions>
    </Card>
  );
}

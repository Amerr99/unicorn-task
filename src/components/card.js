import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./card.css";
import { textAlign } from "@mui/system";

// import { PostList } from "../components/Grid";
//background-size: contain;
export function MediaCard({ item }) {
  //   const divStyle = {
  //     textAlign: "left",
  //   };
  //style={divStyle}
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        class="cardStyle"
        sx={{ height: 150 }}
        image={item.image}
        title={item.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.category}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary"></Button>
      </CardActions>
    </Card>
  );
}

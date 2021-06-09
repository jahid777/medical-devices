import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "0 auto",
    width: "400px !important",
  },
});

export default function ModelData({ productDtls }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          // width="800"
          image={productDtls.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            <span style={{ fontWeight: "bold" }}>Name</span>: {productDtls.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontWeight: "bold", color: "black" }}>
              Description
            </span>
            : {productDtls.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontWeight: "bold", color: "black" }}>Price</span>: $
            {productDtls.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontWeight: "bold", color: "black" }}>Stock</span>:{" "}
            {productDtls.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button className="btn btn-primary">
          {" "}
          <a
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
            href="https://i.ibb.co/vDzBjrC/giphy.gif"
          >
            BUY NOW
          </a>
        </button>
      </CardActions>
    </Card>
  );
}

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { MediaCard } from "./card";

import React, { useState, Component } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function MySearch({ itemm }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <TextField
        margin="normal"
        id="search-bar"
        label="Search"
        variant="outlined"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {itemm
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return <MediaCard item={val}></MediaCard>;
          }
        })
        .map((val, key) => {
          return (
            <div>
              {
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {itemm?.map((val) => (
                      <Grid val xs={2} sm={4} md={4} key={val.id}>
                        <MediaCard item={val}></MediaCard>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              }{" "}
            </div>
          );
        })}
    </div>
  );
}

export class ResponsiveGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    console.log("kkk", items);

    if (!isLoaded) {
      return <div> Loading....</div>;
    } else {
      return (
        <div>
          <div>
            <MySearch itemm={items}></MySearch>
          </div>
          <h1> Our Premium Collection </h1>
          {/*           
          <div>
            { <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {items?.map((item) => (
                  <Grid item xs={2} sm={4} md={4} key={item.id}>
                    <MediaCard item={item}></MediaCard>
                  </Grid>
                ))}
              </Grid>
            </Box> }
          </div>  */}
        </div>
      );
    }
  }
}

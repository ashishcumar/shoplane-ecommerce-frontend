import { footerData } from "@/helper/Constants";
import { neutral900 } from "@/helper/theme";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Grid sx={{display:"grid",border:'1px solid black',background:"#1c1b1e",padding:"50px 0"}}>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          placeContent:'center',
          width:'80%',
          margin:'24px auto'
        }}
      >
      {
        footerData.map((obj,i) => {
          return(
            <Box sx={{color:"#E9E9E9"}} key={i}>
              <Typography sx={{typography:"font_14_600",marginBottom:"8px"}}> {obj.title} </Typography>
              {
                obj.rows.map((item) => {
                  return(
                    <Typography sx={{typography:"font_14_400",padding:"4px 0",}} key={item}> {item} </Typography>
                  )
                })
              }
            </Box>
          )
        })
      }
      </Grid>
    </Grid>
  );
}

export default Footer;

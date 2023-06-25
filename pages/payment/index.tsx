import Footer from "@/components/shoplaneComponents/Footer";
import Navbar from "@/components/shoplaneComponents/Navbar";
import NW, { BaseUrl, EndPoint } from "@/helper/NWRequest";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Lottie from "react-lottie";
import orderPlaced from "@/assets/orderPlaced.json";
import { priceGreen } from "@/helper/theme";


function Index() {

  const router = useRouter()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: orderPlaced,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Navbar />
      <Grid
        sx={{
          paddingTop: "80px",
          width: "80%",
          margin: "auto",
          display: "grid",
          placeContent: "center",
          padding: "50px  0",
        }}
      >
        <Box sx={{ margin: "150px 0 50px 0",display:"flex",flexDirection:'column',alignItems:'center' }}>
          <Lottie options={defaultOptions} height={300} width={300} />
          <Typography sx={{fontSize:"24px",fontWeight:'700',color:priceGreen,margin:"24px 0",textAlign:'center',overflow:'hidden'}}  > Order Placed </Typography>
          <Button variant="contained" sx={{background:priceGreen,"&:hover":{background:priceGreen},color:'white',fontSize:'16px',fontWeight:'400',margin:'auto',}} onClick={() => {router.push('/')}}> Go to home </Button>
        </Box>
      </Grid>
      <Footer />
    </>
  );
}

export default Index;

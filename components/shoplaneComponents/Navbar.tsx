import { boxShad, priceGreen } from "@/helper/theme";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import cart from '@/assets/cart.svg'
import Image from "next/image";

function Navbar({cartCount}:{cartCount?:number}) {
  const router = useRouter()

  return (
    <Grid
      sx={{
        boxShadow: boxShad,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "white",
        zIndex: 100,
      }}
    >
      <Grid
        sx={{
          width: "80%",
          margin: "auto",
          padding: "16px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "800", fontSize: "36px",cursor:"pointer"}} onClick={() => router.push('/')}>
            SHOP
            <span style={{ fontSize: "36px", fontWeight: "500" ,cursor:"pointer"}} onClick={() => router.push('/')}>LANE</span>
          </Typography>
          <Typography sx={{ typography: "font_16_500",cursor:"pointer" }} onClick={() => router.push('/#Clothing')}> CLOTHING </Typography>
          <Typography sx={{ typography: "font_16_500" ,cursor:"pointer"}} onClick={() => router.push('/#Accessories')}>
            ACCESSORIES
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "40px",
                width: "40px",
                margin: "0 8px",
                position:"relative"
              }}
              onClick={() => router.push('/checkout')}
            >
              <span style={{position:"absolute",height:"20px",width:"20px",borderRadius:"50%",background:priceGreen,color:'white',display:"grid",placeContent:"center",top:"0",right:"0",fontSize:"12px",fontWeight:600}}> {cartCount ? cartCount : 0} </span>
              <Image src={cart.src} alt='cart' layout="responsive" height={100} width={100}/>
            </Box>
            <Box
              sx={{
                height: "40px",
                width: "40px",
                margin: "0 8px",
                borderRadius:"50%",
                overflow:"hidden",
                boxShadow:boxShad
              }}
            >
              <Image src={`https://robohash.org/somehtin`} alt="userImg"  layout="responsive" height={100} width={100}/>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Navbar;

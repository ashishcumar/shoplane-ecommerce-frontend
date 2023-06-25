import React from "react";
import AppAwesomeSlider from "../globalComponents/AppAwesomeSlider";
import { Box } from "@mui/material";
import Image from "next/image";

function HomePageSlider() {
  const sliderImgArr = [
    `https://imgur.com/sfjg9R8.png`,
    `https://imgur.com/p0wdadG.png`,
    `https://imgur.com/96OnkX7.png`,
    `https://imgur.com/KtGxwnN.png`,
  ];

  return (
    <Box sx={{margin:"50px 0"}}>
    <AppAwesomeSlider>
      {sliderImgArr.map((item,i) => {
        return (
          <Box sx={{border:'2px solid red' }} key={i}>
            <Image src={item} alt={`${i}`} width={1180} height={300}/>
          </Box>
        );
      })}
    </AppAwesomeSlider>
    </Box>
  );
}

export default HomePageSlider;

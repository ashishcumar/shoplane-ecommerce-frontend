import { boxShad, priceGreen } from "@/helper/theme";
import { PRODUCT_OBJ } from "@/interface/Interface";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function ProductCard({productData}:{productData:PRODUCT_OBJ}) {
  const router = useRouter()
  return (
    <Grid
      sx={{
        height: { xs: "", md: "440px" },
        width: { xs: "", md: "230px" },
        borderRadius: "8px",
        boxShadow: boxShad,
        margin:"8px",
        cursor:"pointer"
      }}
      onClick={() => router.push(`/product/${productData.id}`)}
    >
      <Box>
        <Image
          src={productData.preview}
          alt="product image"
          layout="responsive"
          objectFit="contain"
          width={100}
          height={100}
          style={{ width: "100%" }}
        />
      </Box>
      <Box sx={{ padding: "12px",display:"flex",flexDirection:'column',justifyContent:'space-between' }}>
        <Typography variant="font_16_500" sx={{margin:"4px 0"}}>
         {productData.name}
        </Typography>
        <Typography variant="font_14_400" sx={{margin:"4px 0"}}>{productData.brand}</Typography>
        <Typography variant="font_16_600" sx={{color:priceGreen}}> ₹ {productData.price.toLocaleString()} </Typography>
      </Box>
    </Grid>
  );
}

export default ProductCard;

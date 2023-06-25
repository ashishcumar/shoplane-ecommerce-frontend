import Footer from "@/components/shoplaneComponents/Footer";
import ProductCard from "@/components/shoplaneComponents/ProductCard";
import Navbar from "@/components/shoplaneComponents/Navbar";
import { Grid, Typography } from "@mui/material";
import HomePageSlider from "@/components/shoplaneComponents/HomePageSlider";
import NW, { BaseUrl, EndPoint } from "@/helper/NWRequest";
import { useEffect, useState } from "react";
import { PRODUCT_OBJ } from "@/interface/Interface";

export default function Home() {
  const [productsArr, setProductArr] = useState<PRODUCT_OBJ[]>([]);
  const [currentCartCount, setCurrentCartCount] = useState<number>(0);
  const getAllProducts = async () => {
    const res = await NW.Get(BaseUrl, EndPoint.GET_ALL_PRODUCTS);
    if (res) {
      setProductArr(res);
      console.log(res);
    }
  };

  useEffect(() => {
    getAllProducts();
    if (localStorage.getItem("cartData")) {
      let data = JSON.parse(localStorage.getItem("cartData")!);
      if (data.length > 1) {
        console.log('check 1')
        setCurrentCartCount(
          data.map((item:any) => item.cartCount).reduce((item: any, curr: any) => item + curr)
        );
      } else {
        console.log('check 2')
        setCurrentCartCount(data[0].cartCount);
      }
    }
  }, []);

  return (
    <>
      <Navbar cartCount={currentCartCount} />
      <Grid sx={{ paddingTop: "80px", width: "80%", margin: "auto" }}>
        <HomePageSlider />
        <Grid sx={{ margin: "50px 0" }} id="Clothing">
          <Typography sx={{ fontSize: "28px", fontWeight: "600" }}>
            Clothing for Men and Women
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {productsArr ? (
              productsArr
                .filter((item) => !item.isAccessory)
                .map((productData, i) => {
                  return <ProductCard productData={productData} key={i}/>;
                })
            ) : (
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                No Product Available
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid sx={{ margin: "50px 0" }}>
          <Typography
            sx={{ fontSize: "28px", fontWeight: "600" }}
            id="Accessories"
          >
            Accessories for Men and Women
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {productsArr ? (
              productsArr
                .filter((item) => item.isAccessory)
                .map((productData, i) => {
                  return <ProductCard productData={productData} key={i}/>;
                })
            ) : (
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                No Product Available
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

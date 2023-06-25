import Footer from "@/components/shoplaneComponents/Footer";
import Navbar from "@/components/shoplaneComponents/Navbar";
import NW, { BaseUrl, EndPoint } from "@/helper/NWRequest";
import { neutral500, neutral700, priceGreen } from "@/helper/theme";
import { PRODUCT_DETAIL_OBJ } from "@/interface/Interface";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Index() {
  const router = useRouter();
  const [currProductData, setCurrProductData] = useState<PRODUCT_DETAIL_OBJ>();
  const [showPic, setShowPic] = useState<string>("");
  const [currentCartCount, setCurrentCartCount] = useState<number>(0);

  const getProductDetail = async (productId: string) => {
    const res = await NW.Get(
      BaseUrl,
      `${EndPoint.GET_ONE_PRODUCT}/${productId}`
    );
    if (res) {
      setCurrProductData(res[0]);
      setShowPic(res[0].pics[0]);
    }
  };

  useEffect(() => {
    if (router.query.productId) {
      getProductDetail(router.query.productId as string);
    }
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
  }, [router.query.productId]);

  console.log("currentCartCount", currentCartCount);

  const addToCart = () => {
    setCurrentCartCount((prev) => prev + 1);
    if (localStorage.getItem("cartData")) {
      let localData = JSON.parse(localStorage.getItem("cartData")!);
      if (localData.filter((item: any) => Number(item.id) == Number(router.query.productId)).length) {
        let updatedCart = localData.map((Obj: any) =>
          Obj.id == currProductData?.id
            ? { ...Obj, cartCount: Obj.cartCount + 1 }
            : Obj
        );
        localStorage.setItem("cartData", JSON.stringify(updatedCart));
        return;
      }
      let updateData = JSON.parse(localStorage.getItem("cartData")!);
      updateData.push({...currProductData,cartCount:1});
      console.log(updateData)
      localStorage.setItem("cartData", JSON.stringify(updateData));
      return;
    }
    let body = [{...currProductData,cartCount:1}];
    localStorage.setItem("cartData", JSON.stringify(body));
  };

  return (
    <Grid>
      <Navbar cartCount={currentCartCount} />
      <Grid sx={{ paddingTop: "80px" }}>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            width: "80%",
            margin: "50px auto",
          }}
        >
          <Box sx={{ padding: "16px" }}>
            <Image src={showPic} alt="productImage" height={500} width={380} />
          </Box>
          <Box
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "40px", fontWeight: "500" }}>
                {currProductData?.name}
              </Typography>
              <Typography
                sx={{ fontSize: "24px", fontWeight: "500", color: neutral500 }}
              >
                {currProductData?.brand}
              </Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: "400" }}>
                Price: Rs
                <span
                  style={{
                    color: priceGreen,
                    fontWeight: "600",
                    margin: "0 4px",
                  }}
                >
                  {currProductData?.price}
                </span>
              </Typography>
            </Box>
            <Box sx={{ margin: "16px 0" }}>
              <Typography
                sx={{ fontSize: "24px", fontWeight: "500", color: neutral700 }}
              >
                Description
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  margin: "8px 0",
                  color: neutral500,
                }}
              >
                {currProductData?.description}
              </Typography>
            </Box>
            {currProductData?.pics ? (
              <Box sx={{ margin: "16px 0" }}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: neutral700,
                  }}
                >
                  Product Preview
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {currProductData?.pics
                    ? currProductData?.pics.map((src, i) => {
                        return (
                          <Box
                            key={i}
                            sx={{
                              padding: "4px",
                              borderRadius: "4px",
                              margin: "0 4px",
                              border:
                                showPic == src
                                  ? `2px solid ${priceGreen}`
                                  : "2px solid transparent",
                            }}
                            onClick={() => setShowPic(src)}
                          >
                            <Image
                              src={src}
                              alt="productImage"
                              height={62}
                              width={48}
                            />
                          </Box>
                        );
                      })
                    : null}
                </Box>
              </Box>
            ) : null}

            <Button
              variant="contained"
              sx={{
                background: priceGreen,
                width: "fit-content",
                "&:hover": {
                  background: priceGreen,
                },
              }}
              onClick={addToCart}
            >
              Add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}

export default Index;

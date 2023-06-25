import Footer from "@/components/shoplaneComponents/Footer";
import Navbar from "@/components/shoplaneComponents/Navbar";
import NW, { BaseUrl, EndPoint } from "@/helper/NWRequest";
import { boxShad, neutral500, neutral700, priceGreen } from "@/helper/theme";
import { PRODUCT_DETAIL_OBJ } from "@/interface/Interface";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Index() {
  const [currentCartCount, setCurrentCartCount] = useState(0);
  const [checkoutProducts, setCheckoutProducts] = useState();

  useEffect(() => {
    if (localStorage.getItem("cartData")) {
      let data = JSON.parse(localStorage.getItem("cartData"));
      setCheckoutProducts(data);
      if (data.length > 1) {
        setCurrentCartCount(
          data
            .map((item) => item.cartCount)
            .reduce((item, curr) => item + curr)
        );
      } else {
        setCurrentCartCount(data[0].cartCount);
      }
    }
  }, []);

  const getTotalAmount = () => {
    if (checkoutProducts) {
      return checkoutProducts
        .map((item) =>
          item.cartCount ? item.cartCount * item.price : item.price
        )
        .reduce((prev, curr) => prev + curr);
    }
    return 0;
  };


  const router = useRouter();

  const initiatePayemnt = async () => {
    const response = await initializeRazorpay();
    if (!response) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    const res = await NW.Post(BaseUrl, EndPoint.INITIATE_PAYMENT,{body:{
      amount:getTotalAmount(),
      productName:checkoutProducts.map((item) => item.name).join(',')
    }});
    if (res) {
      var options = {
        key: res.key_id, 
        amount: getTotalAmount(),
        currency: "INR",
        name: checkoutProducts[0].name,
        description: "Product Transcation",
        order_id: res.order_id,
        handler: function (response) {
          localStorage.clear()
          router.push("/payment");
        },
        prefill: {
          name: "Ashish", 
          email: "Ashish.kumar@example.com",
          contact: "9540303720", 
        },
        notes: {
          address: "Shoplane Corporate Office",
        },
        theme: {
          color:priceGreen,
        },
      };
      var razorpayObject = new globalThis.window.Razorpay(options);
      razorpayObject.on("payment.failed", function (res) {
        alert("Payment Failed");
      });
      razorpayObject.open();
    }
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };



  return (
    <Grid>
      <Navbar cartCount={currentCartCount} />
      <Grid sx={{ paddingTop: "80px", minHeight: "90vh" }}>
        <Grid
          sx={{
            width: "80%",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Grid>
            <Typography
              sx={{ fontSize: "36px", fontWeight: "400", margin: "24px 0" }}
            >
              Checkout
            </Typography>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "400", margin: "24px 0" }}
            >
              Total Items: {currentCartCount}
            </Typography>

            <Box>
              {checkoutProducts
                ? checkoutProducts.map((item,i) => {
                    return (
                      <Box
                      key={i}
                        sx={{
                          width: "600px",
                          height: "100px",
                          borderRadius: "8px",
                          boxShadow: boxShad,
                          display: "grid",
                          gridTemplateColumns: "1.5fr 8.5fr",
                          margin: "12px 0",
                        }}
                      >
                        <Box
                          sx={{
                            padding: "4px",
                            borderRadius: "4px",
                            margin: "auto",
                            maxHeight: "150px",
                            height: "72px",
                            width: "50%",
                          }}
                        >
                          <Image
                            src={item.preview}
                            alt="productImage"
                            layout="responsive"
                            objectFit="contain"
                            width={100}
                            height={100}
                          />
                        </Box>
                        <Box sx={{ padding: "8px" }}>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: "400",
                              color: neutral700,
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "400",
                              color: neutral500,
                            }}
                          >
                            X{item.cartCount}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "400",
                              color: neutral500,
                            }}
                          >
                            Amount: Rs{" "}
                            {item.cartCount
                              ? (item.cartCount * item.price).toLocaleString()
                              : item.price.toLocaleString()}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })
                : null}
            </Box>
          </Grid>
          <Grid
            sx={{
              minHeight: "500px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Box
              sx={{
                padding: "24px",
                boxShadow: boxShad,
                borderRadius: "8px",
                width: "400px",
              }}
            >
              <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
                Total Amount
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "400", margin: "16px 0" }}
              >
                Total Amount :- RS
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: neutral700,
                    margin:"0 8px"
                  }}
                >
                 {getTotalAmount().toLocaleString()}
                </span>
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: priceGreen,
                  width: "fit-content",
                  "&:hover": {
                    background: priceGreen,
                  },
                }}
                onClick={() => {getTotalAmount() == 0 ?  () => {} : initiatePayemnt()}}
              >
                Proceed to payment
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}

export default Index;
